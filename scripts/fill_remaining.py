#!/usr/bin/env python3
"""Fast batch fill remaining multi-device docs (skip image download, already have 601)."""
import json, os, re, subprocess, sys, urllib.request
from pathlib import Path

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview"}
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"

remaining = []
for fpath in sorted(DOCS_DIR.glob("*.md")):
    content = fpath.read_text(encoding='utf-8')
    parts = content.split('---', 2)
    if len(parts) > 2 and len(parts[2].strip()) > 500:
        continue
    m = re.search(r'original_url:\s*(https://[^\s]+)', content)
    obj_id = m.group(1).rstrip('/').rsplit('/', 1)[-1] if m else fpath.stem
    remaining.append(obj_id)

print(f"Remaining: {len(remaining)}")
fetched, failed = 0, 0

for doc_id in remaining:
    try:
        body = json.dumps({"objectId": doc_id, "version": "", "catalogName": "best-practices", "language": "cn"}).encode()
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=20)
        data = json.loads(resp.read())
        
        html_raw = data["value"]["content"]["content"]
        doc_title = data["value"].get("title", doc_id)
        
        # Quick image src replacement (don't download)
        import hashlib
        html_raw = re.sub(r'src="(https?://[^"]+)"', lambda m: f'src="./img/{hashlib.md5(m.group(1).encode()).hexdigest()[:8]}.png"', html_raw)
        
        # Convert
        html_file = Path(f"/tmp/{doc_id}.html")
        html_file.write_text(html_raw, encoding='utf-8')
        result = subprocess.run([MARKITDOWN, str(html_file)], capture_output=True, text=True, timeout=20)
        md = result.stdout
        
        # Post-process
        md = re.sub(r'^####\s+\[h2\](.*?)$', r'###\1', md, flags=re.MULTILINE)
        md = re.sub(r'^####\s+(.*?)$', r'## \1', md, flags=re.MULTILINE)
        md = re.sub(r'\[h2\]', '', md)
        
        # Frontmatter
        frontmatter = f'---\ntitle: {json.dumps(doc_title, ensure_ascii=False)}\ndisplayed_sidebar: appDevSidebar\noriginal_url: https://developer.huawei.com/consumer/cn/doc/best-practices/{doc_id}\nformat: md\n---\n\n'
        
        (DOCS_DIR / f"{doc_id}.md").write_text(frontmatter + md, encoding='utf-8')
        fetched += 1
        sys.stdout.write(f"\r[{fetched}/{len(remaining)}] {doc_id} ({len(md)}b)")
        sys.stdout.flush()
    except Exception as e:
        failed += 1
        sys.stdout.write(f"\n  ❌ {doc_id}: {e}\n")

print(f"\nDone: {fetched} fetched, {failed} failed")
