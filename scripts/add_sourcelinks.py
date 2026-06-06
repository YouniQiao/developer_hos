#!/usr/bin/env python3
"""Add SourceLink components to multi-device docs by re-fetching API HTML and detecting codehub attributes."""
import json, os, re, subprocess, hashlib, urllib.request, sys
from pathlib import Path
from bs4 import BeautifulSoup

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview"}
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
CATALOG_NAME = "best-practices"

docs_with_sourcelink = 0
docs_checked = 0

for fpath in sorted(DOCS_DIR.glob("*.md")):
    content = fpath.read_text(encoding='utf-8')
    
    # Skip if already has SourceLink
    if '<SourceLink' in content:
        continue
    
    # Get doc_id from frontmatter - extract last two path segments (catalog/id)
    m = re.search(r'original_url:\s*https://[^/]+/[^/]+/[^/]+/[^/]+/([^/]+)/([^\s]+)', content)
    if not m:
        continue
    catalog_name = m.group(1)
    doc_id = m.group(2)
    
    docs_checked += 1
    
    try:
        # Re-fetch HTML
        body = json.dumps({"objectId": doc_id, "version": "", "catalogName": catalog_name, "language": "cn"}).encode()
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=15)
        data = json.loads(resp.read())
        html_content = data["value"]["content"]["content"]
        
        # Check for codehub attributes
        soup = BeautifulSoup(html_content, 'html.parser')
        codehub_pres = soup.find_all('pre', attrs={'codehub': True})
        
        if not codehub_pres:
            continue
        
        # We have codehub links! Process them
        codehub_links = []
        for i, pre in enumerate(codehub_pres):
            url = pre.get('codehub', '')
            if url:
                # Extract filename from URL
                filename = url.rstrip('/').rsplit('/', 1)[-1]
                if '#' in filename:
                    filename = filename.split('#')[0]
                codehub_links.append({"name": filename, "url": url})
                pre.insert_after(BeautifulSoup(f'<!--CODEHUB:{i}-->', 'html.parser'))
        
        # Re-convert with markitdown (keeping images as-is)
        # Replace existing img src to avoid broken references
        for img in soup.find_all('img'):
            src = img.get('src', '')
            if src:
                h = hashlib.md5(src.encode()).hexdigest()[:8] if isinstance(src, str) else '00000000'
                img['src'] = f'./img/{h}.png'
        
        html_file = Path(f"/tmp/{doc_id}_sl.html")
        html_file.write_text(str(soup), encoding='utf-8')
        result = subprocess.run([MARKITDOWN, str(html_file)], capture_output=True, text=True, timeout=20)
        md = result.stdout
        
        # Post-process
        md = re.sub(r'^####\s+\[h2\](.*?)$', r'###\1', md, flags=re.MULTILINE)
        md = re.sub(r'^####\s+(.*?)$', r'## \1', md, flags=re.MULTILINE)
        md = re.sub(r'\[h2\]', '', md)
        
        # Replace CODEHUB markers with source-link HTML
        svg = '<svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>'
        for i, link in enumerate(codehub_links):
            search = f'<!--CODEHUB:{i}-->'
            replace = f'<div class="source-link-wrapper"><a href="{link["url"]}" target="_blank" rel="noopener noreferrer" class="source-link">{svg} 查看源码：{link["name"]}</a></div>'
            md = md.replace(search, replace)
        
        # Rebuild frontmatter (preserve original)
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parts[1]
            new_content = f'---{frontmatter}---\n\n{md}'
            fpath.write_text(new_content, encoding='utf-8')
            docs_with_sourcelink += 1
            print(f"  ✅ {doc_id}: {len(codehub_links)} SourceLink(s)")
        
    except Exception as e:
        print(f"  ⚠️  {doc_id}: {str(e)[:60]}")

print(f"\nChecked: {docs_checked}, Added SourceLink: {docs_with_sourcelink}")
