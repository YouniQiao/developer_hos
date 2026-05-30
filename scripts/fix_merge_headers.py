#!/usr/bin/env python3
"""
Fix: For files already containing MergeTable with empty headers,
patch the headers with correct values from the API.
"""
import asyncio, json, re, glob
from pathlib import Path
import aiohttp
from bs4 import BeautifulSoup

API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
HEADERS = {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
PROMO_DIR = Path("docs/monetize/promotion")

async def fetch_html(session, oid):
    async with session.post(f"{API_BASE}/getDocumentById", json={
        "objectId": oid, "version": "", "catalogName": "promotion", "language": "cn"
    }, headers=HEADERS, timeout=aiohttp.ClientTimeout(total=30)) as resp:
        if resp.status != 200:
            return None
        data = await resp.json()
    return data.get("value", {}).get("content", {}).get("content", "")

async def fix_one(session, oid):
    fpath = PROMO_DIR / f"{oid}.md"
    if not fpath.exists():
        return
    
    with open(fpath) as f:
        content = f.read()
    
    if 'MergeTable' not in content:
        return  # Not yet converted, handle separately
    
    # Check if headers are empty
    m = re.search(r'headers=\{\[("" ?, ?"")*\]\}', content)
    if not m:
        # Try another pattern - empty headers like ["","",""]
        m2 = re.search(r'headers=\{(\[(?:"",?\s*)+\])\}', content)
        if not m2:
            print(f"  ~ {oid}: no empty headers found in existing MergeTable")
            return
    
    # Fetch correct headers from API
    html = await fetch_html(session, oid)
    if not html:
        print(f"  ⚠ {oid}: empty API response")
        return
    
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find('table')
    if not table:
        print(f"  ⚠ {oid}: no table in API response")
        return
    
    # Get headers from first row
    first_row = table.find('tr')
    if not first_row:
        return
    
    headers = []
    for cell in first_row.find_all(['td', 'th']):
        text = cell.get_text(' ', strip=True)
        text = re.sub(r'\s+', ' ', text).strip()
        headers.append(text)
    
    if not headers:
        return
    
    # Build correct headers JSX
    h_json = json.dumps(headers, ensure_ascii=False)
    new_headers_line = f'  headers={{{h_json}}}'
    
    # Replace headers line
    content = re.sub(
        r'  headers=\{.*?\}',
        new_headers_line,
        content,
        count=1
    )
    
    with open(fpath, 'w') as f:
        f.write(content)
    print(f"  ✓ {oid}: headers fixed")

async def main():
    files = sorted(glob.glob(str(PROMO_DIR / "*.md")))
    
    # Find files that already have MergeTable
    merge_files = []
    for fpath_str in files:
        with open(fpath_str) as f:
            content = f.read()
        if 'MergeTable' in content:
            oid = Path(fpath_str).stem
            merge_files.append(oid)
    
    print(f"Found {len(merge_files)} files with MergeTable, fixing headers...")
    async with aiohttp.ClientSession() as session:
        for oid in merge_files:
            await fix_one(session, oid)
            await asyncio.sleep(0.3)
    print("\nDone!")

if __name__ == "__main__":
    asyncio.run(main())
