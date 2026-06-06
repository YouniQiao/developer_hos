#!/usr/bin/env python3
"""Fix escaped CODEEHUB markers in multi-device files by re-fetching codehub URLs."""
import json, re, urllib.request, sys
from pathlib import Path
from bs4 import BeautifulSoup

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview"}

fixed = 0
for fpath in sorted(DOCS_DIR.glob("*.md")):
    content = fpath.read_text(encoding='utf-8')
    if 'CODEEHUB' not in content and '<SourceLink' not in content:
        continue
    
    # Already has SourceLink
    if '<SourceLink' in content:
        continue
    
    # Extract doc_id
    m = re.search(r'original_url:\s*https://[^/]+/[^/]+/[^/]+/[^/]+/([^/]+)/([^\s]+)', content)
    if not m:
        continue
    catalog_name, doc_id = m.group(1), m.group(2)
    
    try:
        # Re-fetch HTML to get codehub URLs
        body = json.dumps({"objectId": doc_id, "version": "", "catalogName": catalog_name, "language": "cn"}).encode()
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=15)
        data = json.loads(resp.read())
        html_content = data["value"]["content"]["content"]
        
        soup = BeautifulSoup(html_content, 'html.parser')
        codehub_pres = soup.find_all('pre', attrs={'codehub': True})
        if not codehub_pres:
            continue
        
        # Build replacements
        for i, pre in enumerate(codehub_pres):
            url = pre.get('codehub', '')
            if not url:
                continue
            filename = url.rstrip('/').rsplit('/', 1)[-1].split('#')[0] if '/' in url else url
            marker = f'CODEEHUB_MARKER_{i}_END'
            escaped = marker.replace('_', r'\_')
            replacement = f'\n<SourceLink name="{filename}" url="{url}" />\n'
            content = content.replace(escaped, replacement)
            # Also try unescaped
            content = content.replace(marker, replacement)
        
        fpath.write_text(content, encoding='utf-8')
        fixed += 1
        sys.stdout.write(f"\r[{fixed}] {doc_id}: replaced markers")
        sys.stdout.flush()
    except Exception as e:
        print(f"\n  ❌ {doc_id}: {e}")

print(f"\nFixed: {fixed} files")
