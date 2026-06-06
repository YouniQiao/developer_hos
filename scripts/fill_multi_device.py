#!/usr/bin/env python3
"""Batch fill multi-device docs from HarmonyOS best-practices API."""
import os, re, json, urllib.request, subprocess, hashlib, sys, time
from pathlib import Path
from bs4 import BeautifulSoup
import html as html_mod
from urllib.parse import urlparse

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
IMG_DIR = DOCS_DIR / "img"
IMG_DIR.mkdir(parents=True, exist_ok=True)

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview"}
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
CATALOG_NAME = "best-practices"

existing_imgs = {f.name for f in IMG_DIR.iterdir() if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg')}

# Collect files to fill (empty shells)
files_to_fill = []
for fpath in sorted(DOCS_DIR.glob("*.md")):
    content = fpath.read_text(encoding='utf-8')
    parts = content.split('---', 2)
    if len(parts) > 2 and len(parts[2].strip()) > 500:
        continue  # already has content
    m = re.search(r'original_url:\s*(https://[^\s]+)', content)
    obj_id = m.group(1).rstrip('/').rsplit('/', 1)[-1] if m else fpath.stem
    files_to_fill.append((fpath, obj_id))

print(f"Total to fill: {len(files_to_fill)}")

fetched, failed, skipped_img = 0, 0, 0
total_start = time.time()

for fpath, doc_id in files_to_fill:
    try:
        # Fetch HTML
        body = json.dumps({"objectId": doc_id, "version": "", "catalogName": CATALOG_NAME, "language": "cn"}).encode()
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read())
        
        html_content = data["value"]["content"]["content"]
        doc_title = data["value"].get("title", doc_id)
        
        # Replace images
        soup = BeautifulSoup(html_content, 'html.parser')
        img_count = 0
        for img in soup.find_all('img'):
            src = html_mod.unescape(img.get('src', ''))
            if not src:
                continue
            h = hashlib.md5(urlparse(src).path.encode()).hexdigest()[:8]
            ext = os.path.splitext(urlparse(src).path)[1] or '.png'
            local_name = f"{h}{ext}"
            if local_name not in existing_imgs:
                try:
                    img_req = urllib.request.Request(src, headers={"Referer": "https://developer.huawei.com/"})
                    img_resp = urllib.request.urlopen(img_req, timeout=10)
                    img_data = img_resp.read()
                    if len(img_data) > 200:
                        (IMG_DIR / local_name).write_bytes(img_data)
                        existing_imgs.add(local_name)
                        img_count += 1
                except:
                    skipped_img += 1
            img['src'] = f'./img/{local_name}'
        
        # Convert
        html_file = Path(f"/tmp/{doc_id}.html")
        html_file.write_text(str(soup), encoding='utf-8')
        result = subprocess.run([MARKITDOWN, str(html_file)], capture_output=True, text=True, timeout=30)
        md = result.stdout
        
        # Post-process
        md = re.sub(r'^####\s+\[h2\](.*?)$', r'###\1', md, flags=re.MULTILINE)
        md = re.sub(r'^####\s+(.*?)$', r'## \1', md, flags=re.MULTILINE)
        md = re.sub(r'\[h2\]', '', md)
        md = re.sub(r'\n{4,}', '\n\n\n', md)
        
        # Frontmatter
        original_url = f"https://developer.huawei.com/consumer/cn/doc/{CATALOG_NAME}/{doc_id}"
        frontmatter = f'---\ntitle: {json.dumps(doc_title, ensure_ascii=False)}\ndisplayed_sidebar: appDevSidebar\noriginal_url: {original_url}\nformat: md\n---\n\n'
        
        fpath.write_text(frontmatter + md, encoding='utf-8')
        fetched += 1
        elapsed = time.time() - total_start
        sys.stdout.write(f"\r[{fetched}/{len(files_to_fill)}] {doc_id}: {doc_title[:40]} ({img_count} imgs, {elapsed:.0f}s elapsed)")
        sys.stdout.flush()
        
    except Exception as e:
        failed += 1
        sys.stdout.write(f"\n  ❌ {doc_id}: {str(e)[:80]}\n")

print(f"\n\n=== DONE ===")
print(f"Fetched: {fetched}/{len(files_to_fill)}")
print(f"Failed: {failed}")
print(f"Images skipped (error): {skipped_img}")
print(f"Total images: {len(existing_imgs)}")
print(f"Time: {time.time() - total_start:.0f}s")
