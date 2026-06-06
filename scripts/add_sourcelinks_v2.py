#!/usr/bin/env python3
"""Add SourceLink components - fixed version with non-HTML markers."""
import json, os, re, subprocess, urllib.request, sys
from pathlib import Path
from bs4 import BeautifulSoup

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview"}
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"

docs_with_sourcelink = 0
skipped = 0

for fpath in sorted(DOCS_DIR.glob("*.md")):
    content = fpath.read_text(encoding='utf-8')
    if '<SourceLink' in content:
        skipped += 1
        continue
    
    m = re.search(r'original_url:\s*https://[^/]+/[^/]+/[^/]+/[^/]+/([^/]+)/([^\s]+)', content)
    if not m:
        continue
    catalog_name, doc_id = m.group(1), m.group(2)
    
    try:
        body = json.dumps({"objectId": doc_id, "version": "", "catalogName": catalog_name, "language": "cn"}).encode()
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=15)
        data = json.loads(resp.read())
        html_content = data["value"]["content"]["content"]
        
        soup = BeautifulSoup(html_content, 'html.parser')
        codehub_pres = soup.find_all('pre', attrs={'codehub': True})
        if not codehub_pres:
            continue
        
        codehub_links = []
        for i, pre in enumerate(codehub_pres):
            url = pre.get('codehub', '')
            if url:
                filename = url.rstrip('/').rsplit('/', 1)[-1].split('#')[0]
                marker = f"\nCODEEHUB_MARKER_{i}_END\n"
                pre.insert_after(marker)
                codehub_links.append((f"CODEEHUB_MARKER_{i}_END", filename, url))
        
        # Convert
        html_str = str(soup)
        tmpf = Path(f"/tmp/{doc_id}_sl.html")
        tmpf.write_text(html_str, encoding='utf-8')
        result = subprocess.run([MARKITDOWN, str(tmpf)], capture_output=True, text=True, timeout=30)
        md = result.stdout
        
        # Post-process + replace markers
        md = re.sub(r'^####\s+\[h2\](.*?)$', r'###\1', md, flags=re.MULTILINE)
        md = re.sub(r'^####\s+(.*?)$', r'## \1', md, flags=re.MULTILINE)
        md = re.sub(r'\[h2\]', '', md)
        
        for marker, filename, url in codehub_links:
            # markitdown may escape underscores: CODEEHUB\_MARKER\_0\_END
            escaped = marker.replace('_', r'\_')
            md = md.replace(marker, f'\n<SourceLink name="{filename}" url="{url}" />\n')
            md = md.replace(escaped, f'\n<SourceLink name="{filename}" url="{url}" />\n')
        
        # Rebuild with original frontmatter
        parts = content.split('---', 2)
        new_content = f'---{parts[1]}---\n\n{md}'
        fpath.write_text(new_content, encoding='utf-8')
        docs_with_sourcelink += 1
        sys.stdout.write(f"\r[{docs_with_sourcelink}] {doc_id}: {len(codehub_links)} SourceLinks")
        sys.stdout.flush()
        
    except Exception as e:
        pass

print(f"\n\nAdded SourceLink: {docs_with_sourcelink}, Skipped: {skipped}")
