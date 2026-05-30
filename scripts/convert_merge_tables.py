#!/usr/bin/env python3
"""
For each of the 21 merged-cell files, fetch original HTML from Huawei API,
extract tables with colspan/rowspan, and generate MergeTable JSX code.
"""
import os, re, json, asyncio, html as html_module
from pathlib import Path

import aiohttp
from bs4 import BeautifulSoup

API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
CATALOG_NAME = "promotion"
HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/promotion/ads-ggtfzstp-0000002285988928",
    "User-Agent": "Mozilla/5.0"
}

PROMO_DIR = Path("docs/monetize/promotion")

# The 21 files with real merged cells
TARGETS = [
    "activity-type-0000001131086020",
    "ads-bwgzkpl-0000002506543599",
    "ads-gjrjhg-0000002544259658",
    "ads-hygzhfcz-0000002505686321",
    "ads-khhy-0000002317140653",
    "ads-kpscmgzd-0000002499514356",
    "ads-toufanguangliguifang-0000001793450445",
    "ads_ocpc01-0000001058599220",
    "bp-bonus-cooperation-0000001309230226",
    "bp-delivery-task-management-index-0000001293894160",
    "bp-functions-rta-create-0000001351897861",
    "bpos-start-guest-recharge-overview-0000001379677849",
    "bpos-start-service-provider-financial-management-0000001328517614",
    "different-ratings-0000001234125571",
    "display-0000001057113500",
    "finance-0000001058604140",
    "fusion-summary-0000002499177821",
    "overview-wytg-0000001228193251",
    "settlement-overview-0000001176952305",
    "targeting-0000001180547094",
    "ads_gongju28-0000001625985609",
]

async def fetch_json(session, endpoint, body):
    url = f"{API_BASE}/{endpoint}"
    try:
        async with session.post(url, json=body, headers=HEADERS,
                                timeout=aiohttp.ClientTimeout(total=60)) as resp:
            if resp.status == 200:
                return await resp.json()
            print(f"  ⚠ HTTP {resp.status} for {body.get('objectId','')}")
    except Exception as e:
        print(f"  ✗ {body.get('objectId','')}: {type(e).__name__}")
    return {}

def html_table_to_merge_table(table_el):
    """Convert an HTML <table> element to MergeTable JSX code."""
    rows_data = []
    
    # Get all rows
    trs = table_el.find_all('tr')
    if not trs:
        return None
    
    # Process header row first
    ths = trs[0].find_all(['th', 'td'])
    headers = []
    for th in ths:
        # Get text, strip HTML tags but keep text
        text = th.get_text(' ', strip=True)
        headers.append(text)
    
    # Build rowspan tracking grid
    # For each row, we track which columns are already occupied by rowspan
    colspan_groups = {}  # row -> list of (col, span)
    
    row_list = []
    for ri, tr in enumerate(trs[1:], 1):
        cells = tr.find_all(['td', 'th'])
        cells_data = []
        
        # Track columns consumed by rowspan from previous rows
        consumed = set()
        
        ci = 0  # current column index in the grid
        for cell in cells:
            # Skip cells that are consumed by rowspan
            while ci in consumed:
                ci += 1
            
            colspan = int(cell.get('colspan', 1))
            rowspan = int(cell.get('rowspan', 1))
            text = cell.get_text(' ', strip=True)
            # Clean up text
            text = re.sub(r'\s+', ' ', text).strip()
            
            # Escape single quotes for JSX
            text_escaped = text.replace("'", "\\'").replace('"', '\\"')
            text_js = text.replace("'", "\\'").replace('"', '&quot;')
            
            # Build cell JSX
            if colspan == 1 and rowspan == 1:
                cell_js = f"'{text_js}'"
            else:
                props = []
                if colspan > 1:
                    props.append(f"colspan: {colspan}")
                if rowspan > 1:
                    props.append(f"rowspan: {rowspan}")
                cell_js = "{{ text: '{0}', {1} }}".format(text_js, ", ".join(props))
            
            cells_data.append(cell_js)
            
            # Mark columns as consumed for rowspan tracking
            if rowspan > 1:
                for future_row in range(ri, ri + rowspan - 1):
                    if future_row not in colspan_groups:
                        colspan_groups[future_row] = set()
                    for c in range(ci, ci + colspan):
                        colspan_groups[future_row].add(c)
            
            # Mark consumed by colspan
            for c in range(ci, ci + colspan):
                consumed.add(c)
            
            ci += colspan
        
        # Fill remaining columns with null (consumed by rowspan)
        while ci < len(headers):
            if ci not in consumed:
                # This shouldn't happen in a well-formed table
                pass
            ci += 1
        
        row_list.append(cells_data)
    
    if not row_list:
        return None
    
    # Generate JSX
    lines = []
    lines.append("<MergeTable")
    lines.append(f"  headers={json.dumps(headers, ensure_ascii=False)}")
    lines.append("  rows={[")
    
    for ri, cells in enumerate(row_list):
        cell_strs = []
        for c in cells:
            cell_strs.append(c)
        row_str = "    [" + ", ".join(cell_strs) + "],"
        lines.append(row_str)
    
    lines.append("  ]}")
    lines.append("/>")
    
    return "\n".join(lines)

def find_and_replace_tables(md_content, html_tables, filepath):
    """Find markdown tables in the content and replace them with MergeTable JSX."""
    lines = md_content.split('\n')
    result = []
    in_table = False
    table_start = -1
    table_lines = []
    tables_found = 0
    table_idx = 0
    
    i = 0
    while i < len(lines):
        line = lines[i]
        s = line.strip()
        
        # Detect markdown table start
        if s.startswith('|') and s.endswith('|') and not in_table:
            # Check if this is a separator row (|---|---|)
            if re.match(r'^\|[-:\s|]+\|$', s):
                result.append(line)
                i += 1
                continue
            
            in_table = True
            table_start = i
            table_lines = [line]
            
            # Add header and separator
            if i + 1 < len(lines) and re.match(r'^\|[-:\s|]+\|$', lines[i+1].strip()):
                table_lines.append(lines[i+1])
                i += 2
            else:
                i += 1
            continue
        
        if in_table:
            if s.startswith('|') and s.endswith('|'):
                # Skip separator lines
                if re.match(r'^\|[-:\s|]+\|$', s):
                    table_lines.append(line)
                    i += 1
                    continue
                table_lines.append(line)
                i += 1
                continue
            else:
                # Table ended
                in_table = False
                # Check if we have a replacement for this table
                if table_idx < len(html_tables):
                    # Try to match: if the number of rows is similar
                    md_row_count = len(table_lines)
                    # Replace with MergeTable
                    result.append(html_tables[table_idx])
                    table_idx += 1
                else:
                    # No replacement, keep original
                    result.extend(table_lines)
                table_lines = []
                continue
        
        result.append(line)
        i += 1
    
    # Handle table at end of file
    if in_table and table_idx < len(html_tables):
        result.append(html_tables[table_idx])
    elif in_table:
        result.extend(table_lines)
    
    return '\n'.join(result), table_idx

async def process_file(session, oid):
    fpath = PROMO_DIR / f"{oid}.md"
    if not fpath.exists():
        fpath = PROMO_DIR / f"{oid}.mdx"
    if not fpath.exists():
        print(f"  ✗ {oid}: file not found")
        return
    
    # Fetch original HTML from API
    data = await fetch_json(session, "getDocumentById", {
        "objectId": oid, "version": "", "catalogName": CATALOG_NAME, "language": "cn"
    })
    value = data.get("value", {})
    html_content = value.get("content", {}).get("content", "")
    
    if not html_content:
        print(f"  ⚠ {oid}: empty content from API")
        return
    
    # Parse HTML and find all tables with colspan/rowspan
    soup = BeautifulSoup(html_content, 'html.parser')
    tables = soup.find_all('table')
    
    merge_tables = []
    for table in tables:
        # Check if this table has colspan or rowspan
        has_merge = table.find_all(lambda tag: tag.name in ('td', 'th') and 
                                   (tag.get('colspan', '1') != '1' or tag.get('rowspan', '1') != '1'))
        if has_merge:
            jsx = html_table_to_merge_table(table)
            if jsx:
                merge_tables.append(jsx)
    
    if not merge_tables:
        print(f"  ~ {oid}: no merged tables found in HTML")
        return
    
    # Read current markdown file
    with open(fpath) as f:
        md_content = f.read()
    
    # Replace tables
    new_content, replaced = find_and_replace_tables(md_content, merge_tables, fpath)
    
    if replaced > 0:
        # Add import if not present
        import_stmt = "import MergeTable from '@site/src/components/MergeTable';\n"
        if import_stmt not in new_content:
            # Add after frontmatter
            end_fm = new_content.find('---', 3)
            if end_fm != -1:
                insert_pos = end_fm + 3
                new_content = new_content[:insert_pos] + '\n' + import_stmt + new_content[insert_pos:]
        
        with open(fpath, 'w') as f:
            f.write(new_content)
        print(f"  ✓ {oid}: replaced {replaced} table(s)")
    else:
        print(f"  ~ {oid}: no matching tables to replace (found {len(merge_tables)} merge tables in HTML)")

async def main():
    print(f"📥 Processing {len(TARGETS)} files with merged cell tables...")
    async with aiohttp.ClientSession() as session:
        for oid in TARGETS:
            await process_file(session, oid)
            await asyncio.sleep(0.5)  # rate limit
    print("\n✅ Done!")

if __name__ == "__main__":
    asyncio.run(main())
