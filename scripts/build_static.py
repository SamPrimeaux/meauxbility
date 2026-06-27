#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
IGNORE_DIRS = {
    ".git",
    "node_modules",
    "public",
    ".wrangler",
    ".cloudflare",
    "dist",
    "build",
    ".next",
    ".cache",
}
COPY_DIRS = ["assets"]
COPY_FILES = [
    "index.html",
    "inner-animal-media-lightbox.html",
    ".nojekyll",
]
ROUTE_FALLBACKS = [
    "about",
    "pages/about-us",
    "programs",
    "community",
    "resources",
    "connect",
    "impact",
    "dashboard",
]
MAX_STATIC_FILE_BYTES = 25 * 1024 * 1024


def should_skip(path: Path) -> bool:
    parts = set(path.relative_to(ROOT).parts)
    return bool(parts & IGNORE_DIRS)


def copy_file(src: Path, dest: Path, manifest: list[dict]) -> None:
    if not src.exists() or not src.is_file():
        return
    size = src.stat().st_size
    if size > MAX_STATIC_FILE_BYTES:
        print(f"skip oversized asset: {src.relative_to(ROOT)} ({size} bytes)")
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)
    manifest.append({
        "source": str(src.relative_to(ROOT)),
        "output": str(dest.relative_to(PUBLIC)),
        "bytes": size,
    })


def copy_dir(src_dir: Path, dest_dir: Path, manifest: list[dict]) -> None:
    if not src_dir.exists() or not src_dir.is_dir():
        return
    for src in sorted(src_dir.rglob("*")):
        if should_skip(src) or not src.is_file():
            continue
        rel = src.relative_to(src_dir)
        copy_file(src, dest_dir / rel, manifest)


def discover_html_routes() -> list[str]:
    routes: list[str] = []
    for html in sorted(ROOT.rglob("*.html")):
        if should_skip(html):
            continue
        if html.name == "index.html" and html.parent == ROOT:
            continue
        rel = html.relative_to(ROOT)
        if rel.parts[0] == "meauxbility-react":
            continue
        route = str(rel.with_suffix(""))
        if route.endswith("/index"):
            route = route[:-6]
        routes.append(route.strip("/"))
    return routes


def rewrite_nav_links(index_html: str) -> str:
    replacements = {
        'href="#home"': 'href="/"',
        'href="#about"': 'href="/about"',
        'href="#programs"': 'href="/programs"',
        'href="#community"': 'href="/community"',
        'href="#resources"': 'href="/resources"',
        'href="#connect"': 'href="/connect"',
        'href="#impact"': 'href="/impact"',
        'href="#donate"': 'href="/impact"',
    }
    for old, new in replacements.items():
        index_html = index_html.replace(old, new)
    return index_html


def make_route_page(index_html: str, route: str) -> str:
    label = route.split("/")[-1].replace("-", " ").title()
    html = rewrite_nav_links(index_html)
    html = re.sub(
        r"<title>.*?</title>",
        f"<title>{label} | Meauxbility</title>",
        html,
        count=1,
        flags=re.IGNORECASE | re.DOTALL,
    )
    marker = f"<!-- generated route fallback: /{route} -->\n"
    if "<head>" in html:
        html = html.replace("<head>", "<head>\n" + marker, 1)
    return html


def main() -> None:
    if PUBLIC.exists():
        shutil.rmtree(PUBLIC)
    PUBLIC.mkdir(parents=True, exist_ok=True)

    manifest: list[dict] = []

    for file_name in COPY_FILES:
        src = ROOT / file_name
        if src.name == "index.html" and src.exists():
            text = rewrite_nav_links(src.read_text(encoding="utf-8"))
            out = PUBLIC / "index.html"
            out.write_text(text, encoding="utf-8")
            manifest.append({"source": file_name, "output": "index.html", "bytes": out.stat().st_size, "rewritten": True})
        else:
            copy_file(src, PUBLIC / file_name, manifest)

    for dir_name in COPY_DIRS:
        copy_dir(ROOT / dir_name, PUBLIC / dir_name, manifest)

    index_path = PUBLIC / "index.html"
    if index_path.exists():
        index_html = index_path.read_text(encoding="utf-8")
        routes = sorted(set(ROUTE_FALLBACKS + discover_html_routes()))
        for route in routes:
            route_out = PUBLIC / route / "index.html"
            route_out.parent.mkdir(parents=True, exist_ok=True)
            route_out.write_text(make_route_page(index_html, route), encoding="utf-8")
            manifest.append({"source": "index.html", "output": f"{route}/index.html", "bytes": route_out.stat().st_size, "route_fallback": True})

    (PUBLIC / "site-manifest.json").write_text(json.dumps({
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "asset_count": len(manifest),
        "assets": manifest,
    }, indent=2), encoding="utf-8")

    print(f"Built {len(manifest)} static outputs into {PUBLIC}")


if __name__ == "__main__":
    main()
