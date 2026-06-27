#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
LIVE_BASE = "https://samprimeaux.github.io/meauxbility/"
MAX_STATIC_FILE_BYTES = 25 * 1024 * 1024

# These routes were recovered from the live GitHub Pages dashboard bundle.
# Cloudflare Workers static assets need physical index fallbacks for direct deep links.
ROUTE_FALLBACKS = sorted(set([
    "dashboard",
    "dashboard/settings",
    "dashboard/team",
    "dashboard/kanban",
    "dashboard/deployments",
    "dashboard/developer",
    "dashboard/calendar",
    "dashboard/finance",
    "dashboard/storage",
    "dashboard/analytics",
    "dashboard/communications",
    "dashboard/connection-test",
    "dashboard/content",
    "dashboard/image-library",
    "dashboard/photo-gallery",
    "dashboard/projects",
    "dashboard/stats",
    "pages/about",
    "pages/about-us",
    "pages/accessibility",
    "pages/accessibility-partners",
    "pages/apply-for-funding",
    "pages/community",
    "pages/contact",
    "pages/data-sharing-opt-out",
    "pages/donate",
    "pages/donmichael-our-first-campaign",
    "pages/education",
    "pages/employment",
    "pages/equipment-resources",
    "pages/faq",
    "pages/get-involved",
    "pages/get-involved-lafayette-la",
    "pages/housing",
    "pages/legal-resources",
    "pages/meauxbility-branding",
    "pages/medical-resources",
    "pages/mobility-grants-programs",
    "pages/news-media-features",
    "pages/non-profit-information",
    "pages/policies",
    "pages/resources",
    "pages/resources-and-information",
    "pages/sam-primeaux",
    "pages/team-meauxbility",
    "pages/transportation",
]))


def run(cmd: list[str]) -> None:
    subprocess.run(cmd, check=True)


def curl_text(url: str) -> str:
    return subprocess.check_output(["curl", "-L", "-s", url], text=True)


def curl_file(url: str, out: Path) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    run(["curl", "-L", "-s", url, "-o", str(out)])
    size = out.stat().st_size
    if size > MAX_STATIC_FILE_BYTES:
        out.unlink(missing_ok=True)
        raise RuntimeError(f"Downloaded asset exceeds 25 MiB Workers limit: {url} ({size} bytes)")


def rewrite_for_cloudflare(html: str) -> str:
    html = html.replace('/meauxbility/assets/', '/assets/')
    html = html.replace('href="/meauxbility/"', 'href="/"')
    html = html.replace('src="/vite.svg"', 'src="/vite.svg"')
    return html


def make_route_page(index_html: str, route: str) -> str:
    label = route.split("/")[-1].replace("-", " ").title()
    html = re.sub(
        r"<title>.*?</title>",
        f"<title>{label} | Meauxbility</title>",
        index_html,
        count=1,
        flags=re.IGNORECASE | re.DOTALL,
    )
    marker = f"<!-- generated SPA route fallback: /{route} -->\n"
    return html.replace("<head>", "<head>\n" + marker, 1) if "<head>" in html else marker + html


def extract_asset_urls(html: str) -> list[str]:
    urls = sorted(set(re.findall(r'(?:src|href)=["\']([^"\']+)["\']', html)))
    return [url for url in urls if url.startswith('/meauxbility/assets/')]


def main() -> None:
    if PUBLIC.exists():
        shutil.rmtree(PUBLIC)
    PUBLIC.mkdir(parents=True, exist_ok=True)

    manifest: list[dict] = []

    live_html = curl_text(LIVE_BASE)
    index_html = rewrite_for_cloudflare(live_html)
    index_path = PUBLIC / "index.html"
    index_path.write_text(index_html, encoding="utf-8")
    manifest.append({"source": LIVE_BASE, "output": "index.html", "bytes": index_path.stat().st_size})

    for asset_url in extract_asset_urls(live_html):
        output_rel = asset_url.replace('/meauxbility/', '')
        output_path = PUBLIC / output_rel
        full_url = 'https://samprimeaux.github.io' + asset_url
        curl_file(full_url, output_path)
        manifest.append({"source": full_url, "output": output_rel, "bytes": output_path.stat().st_size})

    # Preserve the old static marketing homepage for recovery/comparison.
    old_home = ROOT / "index.html"
    if old_home.exists():
        legacy_out = PUBLIC / "legacy-home.html"
        legacy_out.write_text(old_home.read_text(encoding="utf-8"), encoding="utf-8")
        manifest.append({"source": "index.html", "output": "legacy-home.html", "bytes": legacy_out.stat().st_size})

    lightbox = ROOT / "inner-animal-media-lightbox.html"
    if lightbox.exists():
        lightbox_out = PUBLIC / "inner-animal-media-lightbox.html"
        shutil.copy2(lightbox, lightbox_out)
        manifest.append({"source": "inner-animal-media-lightbox.html", "output": "inner-animal-media-lightbox.html", "bytes": lightbox_out.stat().st_size})

    nojekyll = ROOT / ".nojekyll"
    if nojekyll.exists():
        shutil.copy2(nojekyll, PUBLIC / ".nojekyll")
        manifest.append({"source": ".nojekyll", "output": ".nojekyll", "bytes": (PUBLIC / ".nojekyll").stat().st_size})

    for route in ROUTE_FALLBACKS:
        route_out = PUBLIC / route / "index.html"
        route_out.parent.mkdir(parents=True, exist_ok=True)
        route_out.write_text(make_route_page(index_html, route), encoding="utf-8")
        manifest.append({"source": "index.html", "output": f"{route}/index.html", "bytes": route_out.stat().st_size, "route_fallback": True})

    (PUBLIC / "site-manifest.json").write_text(json.dumps({
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": LIVE_BASE,
        "route_count": len(ROUTE_FALLBACKS),
        "asset_count": len(manifest),
        "routes": ROUTE_FALLBACKS,
        "assets": manifest,
    }, indent=2), encoding="utf-8")

    print(f"Recovered dashboard bundle from {LIVE_BASE}")
    print(f"Built {len(manifest)} static outputs and {len(ROUTE_FALLBACKS)} route fallbacks into {PUBLIC}")


if __name__ == "__main__":
    main()
