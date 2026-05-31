#!/usr/bin/env python3
"""Retry the 15 failed files from batch fill."""
import json, urllib.request, subprocess, os, re, html as html_mod, hashlib, time
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/app/50101", "User-Agent": "Mozilla/5.0"}
image_cache = {}

failed = [
    "docs/distribute/app-dist/game-center/game-center-catalogue-0000002139373426.md",
    "docs/distribute/app-dist/game-center/game-center-setup-project-0000001194142410/game-center-questionnaire-0000001194144428.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/game-center-playing-operation-0000001870290961.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/game-center-user-operation-0000001239342339/game-center-community-operation-0000001194305462.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/game-center-goods-management-0000001194462390/game-center-product-pic-0000001281541678.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-increase-payment-0000001683109285.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-reservation-0000001657694701.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-login-0000001608734802.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-install-0000001657934421.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-all-0000001657534737/game-center-setup-activities-loss-recall-0000001634589718.md",
    "docs/distribute/app-dist/game-center/game-center-operation-0000001239502315/agc-help-activity-operation-0000001194302394/game-center-setup-activities-app-0000002111387918/game-center-setup-activities-app-create-0000002182557856.md",
    "docs/distribute/app-dist/game-center/game-center-materials-0000001194142412/game-center-creatives-ideas-0000001865677220.md",
    "docs/distribute/app-dist/game-center/game-center-materials-0000001194142412/game-center-creatives-ideas-pre-order-0000002023298502.md",
    "docs/distribute/app-dist/game-center/game-center-materials-0000001194142412/game-center-associated-group-0000002521616574.md",
    "docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/financial-settlement-0000001931995732.md",
]

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

for md_path in failed:
    md_file = Path(md_path)
    obj_id = md_file.stem
    print(f"\n🔄 {obj_id}")
    
    content = md_file.read_text()
    parts = content.split('---', 2)
    fm = parts[1] if len(parts) > 1 else ""
    
    body = json.dumps({"objectId": obj_id, "version": "", "catalogName": "app", "language": "cn"}).encode()
    try:
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read())
        html = data["value"]["content"]["content"]
        title = data["value"].get("title", "")
    except Exception as e:
        print(f"  ❌ API: {e}")
        continue
    
    soup = BeautifulSoup(html, 'html.parser')
    img_count = 0
    for img in soup.find_all('img'):
        src = html_mod.unescape(img.get('src', ''))
        if not src or src.startswith('data:'): continue
        local = download_image(src, md_file.parent)
        if local:
            img['src'] = local
            img_count += 1
    html = str(soup)
    print(f"  📷 {img_count} images, HTML {len(html)} chars")
    
    tmp_html = Path(f"/tmp/hos_retry_{obj_id}.html")
    tmp_md = Path(f"/tmp/hos_retry_{obj_id}.md")
    tmp_html.write_text(html, encoding='utf-8')
    
    result = subprocess.run([MARKITDOWN, str(tmp_html), "-o", str(tmp_md)], capture_output=True, text=True, timeout=60)
    md = tmp_md.read_text(encoding='utf-8')
    tmp_html.unlink(missing_ok=True)
    tmp_md.unlink(missing_ok=True)
    
    if not md.strip():
        print(f"  ⚠️ markitdown empty")
        continue
    
    lines = md.split('\n')
    fixed = []
    for line in lines:
        m = re.match(r'^####\s+\[h2\](.*)$', line)
        if m:
            fixed.append(f'###{m.group(1)}')
            continue
        m = re.match(r'^####\s+(.*)$', line)
        if m:
            fixed.append(f'## {m.group(1)}')
            continue
        fixed.append(line)
    md = '\n'.join(fixed)
    
    fm_lines = []
    for line in fm.split('\n'):
        line = line.strip()
        if not line: continue
        if line.startswith('title:'):
            fm_lines.append(f'title: "{title or obj_id}"')
        elif line.startswith('original_url:'):
            continue
        else:
            fm_lines.append(line)
    fm_lines.append(f'original_url: https://developer.huawei.com/consumer/cn/doc/app/{obj_id}')
    
    new_content = f'---\n{chr(10).join(fm_lines)}\n---\n\n{md}'
    md_file.write_text(new_content, encoding='utf-8')
    print(f"  ✅ {len(new_content)} bytes")

print("\n✅ Done!")
