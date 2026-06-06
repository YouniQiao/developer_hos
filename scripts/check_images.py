#!/usr/bin/env python3
"""Download missing images referenced in multi-device docs."""
import re, os, hashlib, urllib.request, sys
from pathlib import Path
from urllib.parse import urlparse

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
IMG_DIR = DOCS_DIR / "img"
IMG_DIR.mkdir(parents=True, exist_ok=True)

existing = {f.name for f in IMG_DIR.iterdir() if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg')}

# Collect all image references from MD files
all_refs = set()
for fpath in DOCS_DIR.glob("*.md"):
    content = fpath.read_text(encoding='utf-8')
    for m in re.finditer(r'src="\./img/([^"]+)"', content):
        all_refs.add(m.group(1))
    for m in re.finditer(r'!\[.*?\]\(\./img/([^)]+)\)', content):
        all_refs.add(m.group(1))

missing = all_refs - existing
print(f"Total image refs: {len(all_refs)}, existing: {len(existing)}, missing: {len(missing)}")

if not missing:
    print("All images present!")
    sys.exit(0)

# Download missing - need to find original URLs from markitdown-ed content
# Images were replaced with hash-based names. We don't have the original URLs.
# Instead, check the original _tmp html files or re-fetch docs.

# Actually, the hash-based names were generated from the original URLs
# We can't easily reverse that. Let's just note this for now.
print("Missing images (hash-based names, need original URLs to download):")
for name in sorted(missing)[:20]:
    print(f"  {name}")
