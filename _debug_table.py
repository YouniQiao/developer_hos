#!/usr/bin/env python3
"""Debug: fetch HTML for one file and show table structure."""
import asyncio, json
import aiohttp
from bs4 import BeautifulSoup

API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
HEADERS = {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}

async def main():
    oid = "activity-type-0000001131086020"
    async with aiohttp.ClientSession() as session:
        async with session.post(f"{API_BASE}/getDocumentById", json={
            "objectId": oid, "version": "", "catalogName": "promotion", "language": "cn"
        }, headers=HEADERS, timeout=aiohttp.ClientTimeout(total=30)) as resp:
            data = await resp.json()
    
    html = data.get("value", {}).get("content", {}).get("content", "")
    if not html:
        print("Empty HTML")
        return
    
    soup = BeautifulSoup(html, 'html.parser')
    tables = soup.find_all('table')
    print(f"Found {len(tables)} tables\n")
    
    for ti, table in enumerate(tables):
        has_merge = table.find_all(lambda tag: tag.name in ('td','th') and 
                                   (tag.get('colspan','1')!='1' or tag.get('rowspan','1')!='1'))
        print(f"Table {ti}: merge_cells={bool(has_merge)}")
        
        trs = table.find_all('tr')
        for ri, tr in enumerate(trs[:6]):
            cells = tr.find_all(['td','th'])
            cell_info = []
            for c in cells:
                cs = c.get('colspan','1')
                rs = c.get('rowspan','1')
                text = c.get_text(' ', strip=True)[:40]
                cell_info.append(f"[c{cs}r{rs}] {text}")
            print(f"  Row {ri}: {' | '.join(cell_info)}")
        if len(trs) > 6:
            print(f"  ... and {len(trs)-6} more rows")
        print()

asyncio.run(main())
