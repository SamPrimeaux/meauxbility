#!/usr/bin/env python3
from __future__ import annotations

import json
import shutil
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
MAX_STATIC_FILE_BYTES = 25 * 1024 * 1024
COPY_DIRS = ["assets"]
COPY_FILES = ["index.html", "inner-animal-media-lightbox.html", ".nojekyll"]


def copy_file(src: Path, dest: Path, manifest: list[dict]) -> None:
    if not src.exists() or not src.is_file():
        return
    size = src.stat().st_size
    if size > MAX_STATIC_FILE_BYTES:
        print(f"skip oversized asset: {src.relative_to(ROOT)} ({size} bytes)")
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)
    manifest.append({"source": str(src.relative_to(ROOT)), "output": str(dest.relative_to(PUBLIC)), "bytes": size})


def copy_dir(src_dir: Path, dest_dir: Path, manifest: list[dict]) -> None:
    if not src_dir.exists() or not src_dir.is_dir():
        return
    for src in sorted(src_dir.rglob("*")):
        if src.is_file():
            copy_file(src, dest_dir / src.relative_to(src_dir), manifest)


def main() -> None:
    if PUBLIC.exists():
        shutil.rmtree(PUBLIC)
    PUBLIC.mkdir(parents=True, exist_ok=True)

    manifest: list[dict] = []
    for file_name in COPY_FILES:
        copy_file(ROOT / file_name, PUBLIC / file_name, manifest)
    for dir_name in COPY_DIRS:
        copy_dir(ROOT / dir_name, PUBLIC / dir_name, manifest)

    (PUBLIC / "site-manifest.json").write_text(json.dumps({
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "mode": "safe-homepage-rollback",
        "asset_count": len(manifest),
        "assets": manifest,
    }, indent=2), encoding="utf-8")
    print(f"Built safe homepage rollback with {len(manifest)} files into {PUBLIC}")


if __name__ == "__main__":
    main()
