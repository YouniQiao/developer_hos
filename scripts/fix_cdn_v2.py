#!/usr/bin/env python3
"""Fix remaining CDN images in malformed markitdown output: ![](`https://cdn...`), and proper ![](https://cdn...)"""
import urllib.request, os, re, hashlib, time
from pathlib import Path
from urllib.parse import urlparse

DOCS = Path("/Users/hhxi/developer_hos/docs/distribute/app-dist")
SECTIONS = ["game-center", "app-services"]
image_cache = {}

def download_image(img_url, doc_dir):
    try:
        parsed = urlparse(img_url)
        url_path = parsed.path
        if url_path in image_cache:
            return image_cache[url_path]
        ext = os.path.splitext(url_path)[1]
        if not ext or len(ext) > 6: ext = '.png'
        h = hashlib.md5(url_path.encode()).hexdigest()[:12]
        local_name = f"{h}{ext}"
        img_dir = doc_dir / "img"
        img_dir.mkdir(parents=True, exist_ok=True)
        local_path = img_dir / local_name
        for attempt in range(3):
            try:
                req = urllib.request.Request(img_url, headers={"User-Agent": "Mozilla/5.0"})
                data = urllib.request.urlopen(req, timeout=15).read()
                if len(data) > 200:
                    local_path.write_bytes(data)
                    rel = f"./img/{local_name}"
                    image_cache[url_path] = rel
                    return rel
            except: time.sleep(1)
        return None
    except: return None

total_fixed = [0]

for section in SECTIONS:
    for md_file in sorted(DOCS.glob(f"{section}/**/*.md")):
        content = md_file.read_text(encoding='utf-8')
        if 'contentcenter' not in content and 'dbankcdn' not in content:
            continue
        
        changed = [False]
        
        # Pattern 1: ![](`https://cdn...`)  →  ![](./img/xxx.png)
        p1 = re.compile(r'!\[\]\(`(https?://[a-zA-Z0-9._/\-?&=]*contentcenter[^)\s`]*)`\)')
        def fix_p1(m):
            local = download_image(m.group(1), md_file.parent)
            if local:
                changed[0] = True
                total_fixed[0] += 1
                return f'![]({local})'
            return m.group(0)
        content = p1.sub(fix_p1, content)
        
        # Pattern 2: ![](https://cdn...) → ![](./img/xxx.png)  
        p2 = re.compile(r'!\[\]\((https?://[a-zA-Z0-9._/\-?&=]*contentcenter[^)\s]*)\)')
        def fix_p2(m):
            local = download_image(m.group(1), md_file.parent)
            if local:
                changed[0] = True
                total_fixed[0] += 1
                return f'![]({local})'
            return m.group(0)
        content = p2.sub(fix_p2, content)
        
        if changed[0]:
            md_file.write_text(content, encoding='utf-8')

print(f"Fixed {total_fixed[0]} CDN images")
print(f"Remaining CDN references: ", end="")
import subprocess
r = subprocess.run(["grep", "-rl", "contentcenter", str(DOCS / "game-center"), str(DOCS / "app-services"), "--include=*.md"], capture_output=True, text=True)
print(len(r.stdout.strip().split('\n')) if r.stdout.strip() else 0)
