#!/usr/bin/env python3
"""
Convert Huawei API HTML tables with merged cells to MergeTable JSX.
Uses rowspan/colspan tracking to build correct cell grid.
"""
import asyncio, json, os, re
from pathlib import Path
import aiohttp
from bs4 import BeautifulSoup

API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
HEADERS = {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
PROMO_DIR = Path("docs/monetize/promotion")

TARGETS = [
    "activity-type-0000001131086020", "ads-bwgzkpl-0000002506543599",
    "ads-gjrjhg-0000002544259658", "ads-hygzhfcz-0000002505686321",
    "ads-khhy-0000002317140653", "ads-kpscmgzd-0000002499514356",
    "ads-toufanguangliguifang-0000001793450445", "ads_ocpc01-0000001058599220",
    "bp-bonus-cooperation-0000001309230226",
    "bp-delivery-task-management-index-0000001293894160",
    "bp-functions-rta-create-0000001351897861",
    "bpos-start-guest-recharge-overview-0000001379677849",
    "bpos-start-service-provider-financial-management-0000001328517614",
    "different-ratings-0000001234125571", "display-0000001057113500",
    "finance-0000001058604140", "fusion-summary-0000002499177821",
    "overview-wytg-0000001228193251", "settlement-overview-0000001176952305",
    "targeting-0000001180547094", "ads_gongju28-0000001625985609",
]

def escape_jsx_string(s):
    """Escape a string for use in JSX single-quoted string."""
    s = s.replace('\\', '\\\\')
    s = s.replace("'", "\\'")
    s = s.replace('"', '&quot;')
    s = s.replace('\n', ' ')
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def build_table_grid(table_el):
    """
    Parse HTML table with rowspan/colspan into a grid.
    Returns (headers, rows_grid) where headers is string list,
    rows_grid is list of lists with values: string, None, or dict {text, colspan, rowspan}
    """
    trs = table_el.find_all('tr')
    if not trs:
        return None, None
    
    # First pass: determine column count from widest row
    max_cols = 0
    for tr in trs:
        total = sum(int(td.get('colspan', 1)) for td in tr.find_all(['td', 'th']))
        max_cols = max(max_cols, total)
    
    if max_cols == 0:
        return None, None
    
    # Get headers from first row
    headers = []
    for cell in trs[0].find_all(['td', 'th']):
        headers.append(cell.get_text(' ', strip=True))
    
    # Build grid with rowspan tracking
    # rowspan_active[row][col] = True means this cell is consumed by rowspan from above
    rowspan_active = []
    
    grid_rows = []
    for ri, tr in enumerate(trs):
        cells = tr.find_all(['td', 'th'])
        
        # Initialize rowspan tracking for this row if needed
        if ri >= len(rowspan_active):
            rowspan_active.append([False] * max_cols)
        
        row_data = [None] * max_cols  # Start with all None
        occupied = rowspan_active[ri][:]  # Columns consumed by rowspan
        
        ci = 0  # Current column position in grid
        for cell in cells:
            # Skip columns consumed by rowspan from above
            while ci < max_cols and occupied[ci]:
                ci += 1
            
            if ci >= max_cols:
                break
            
            colspan = int(cell.get('colspan', 1))
            rowspan = int(cell.get('rowspan', 1))
            text = cell.get_text(' ', strip=True)
            text = re.sub(r'\s+', ' ', text).strip()
            
            if ri == 0:
                # Header row
                for c in range(colspan):
                    if ci + c < max_cols:
                        headers.append(text if c == 0 else '')
                ci += colspan
                continue
            
            if rowspan > 1 or colspan > 1 or (rowspan == 1 and colspan == 1):
                cell_val = text
                if rowspan > 1 or colspan > 1:
                    cell_val = {"text": text, "colspan": colspan, "rowspan": rowspan}
                row_data[ci] = cell_val
            else:
                row_data[ci] = text
            
            # Mark columns consumed by this cell in current row
            for c in range(colspan):
                if ci + c < max_cols:
                    occupied[ci + c] = True
            
            # If rowspan > 1, mark future rows
            if rowspan > 1:
                for future_ri in range(ri + 1, ri + rowspan):
                    while len(rowspan_active) <= future_ri:
                        rowspan_active.append([False] * max_cols)
                    for c in range(colspan):
                        if ci + c < max_cols:
                            rowspan_active[future_ri][ci + c] = True
            
            ci += colspan
        
        # If this is a data row (not header), add to grid
        if ri > 0:
            # Trim trailing Nones
            while row_data and row_data[-1] is None:
                row_data.pop()
            # Only add if it has at least one cell
            if any(c is not None for c in row_data):
                grid_rows.append(row_data)
    
    # Clean headers - remove duplicates from merged cells
    clean_headers = []
    for h in headers:
        if h and h not in clean_headers:
            clean_headers.append(h)
        elif not h:
            clean_headers.append('')
    
    return clean_headers, grid_rows

def generate_jsx(headers, grid_rows):
    """Generate MergeTable JSX from parsed grid."""
    if not headers or not grid_rows:
        return None
    
    lines = ['<MergeTable']
    
    # Headers - use JSON but wrap in {} for JSX
    h_json = json.dumps(headers, ensure_ascii=False)
    lines.append(f'  headers={{{h_json}}}')
    
    lines.append('  rows={[')
    
    for row in grid_rows:
        cell_strs = []
        for cell in row:
            if cell is None:
                cell_strs.append('null')
            elif isinstance(cell, dict):
                text_esc = escape_jsx_string(cell['text'])
                parts = [f"text: '{text_esc}'"]
                if cell.get('colspan', 1) > 1:
                    parts.append(f"colspan: {cell['colspan']}")
                if cell.get('rowspan', 1) > 1:
                    parts.append(f"rowspan: {cell['rowspan']}")
                cell_strs.append('({' + ', '.join(parts) + '})')
            else:
                cell_strs.append(f"'{escape_jsx_string(cell)}'")
        
        lines.append('    [' + ', '.join(cell_strs) + '],')
    
    lines.append('  ]}')
    lines.append('/>')
    
    return '\n'.join(lines)

def replace_md_table_with_jsx(md_content, merge_tables_jsx):
    """
    Find ALL markdown tables in the content and replace them.
    For merged cell tables, replace with MergeTable JSX.
    For normal tables, keep as-is.
    Returns updated content, number of replacements made.
    """
    lines = md_content.split('\n')
    result = []
    i = 0
    table_count = 0
    import_added = False
    
    while i < len(lines):
        line = lines[i]
        s = line.strip()
        
        # Check if this line starts a markdown table
        if s.startswith('|') and s.count('|') >= 2:
            # Collect the table
            table_lines = []
            while i < len(lines):
                ls = lines[i].strip()
                if ls.startswith('|'):
                    table_lines.append(lines[i])
                    i += 1
                else:
                    break
            
            # Replace if we have a replacement for this table
            if table_count < len(merge_tables_jsx):
                if not import_added:
                    result.append("import MergeTable from '@site/src/components/MergeTable';\n")
                    import_added = True
                result.append(merge_tables_jsx[table_count])
                result.append('')
                table_count += 1
            else:
                result.extend(table_lines)
        else:
            result.append(line)
            i += 1
    
    return '\n'.join(result), table_count

async def fetch_html(session, oid):
    """Fetch original HTML from Huawei API."""
    async with session.post(f"{API_BASE}/getDocumentById", json={
        "objectId": oid, "version": "", "catalogName": "promotion", "language": "cn"
    }, headers=HEADERS, timeout=aiohttp.ClientTimeout(total=30)) as resp:
        if resp.status != 200:
            return None
        data = await resp.json()
    return data.get("value", {}).get("content", {}).get("content", "")

async def process_file(session, oid):
    fpath = PROMO_DIR / f"{oid}.md"
    if not fpath.exists():
        print(f"  ✗ {oid}: file not found")
        return
    
    html = await fetch_html(session, oid)
    if not html:
        print(f"  ⚠ {oid}: empty API response")
        return
    
    soup = BeautifulSoup(html, 'html.parser')
    tables = soup.find_all('table')
    
    merge_tables_jsx = []
    for table in tables:
        has_merge = bool(table.find_all(lambda tag: tag.name in ('td','th') and
                          (tag.get('colspan','1')!='1' or tag.get('rowspan','1')!='1')))
        if not has_merge:
            continue
        headers, grid = build_table_grid(table)
        jsx = generate_jsx(headers, grid)
        if jsx:
            merge_tables_jsx.append(jsx)
    
    if not merge_tables_jsx:
        print(f"  ~ {oid}: no merged tables in HTML")
        return
    
    with open(fpath) as f:
        md_content = f.read()
    
    new_content, replaced = replace_md_table_with_jsx(md_content, merge_tables_jsx)
    
    if replaced > 0:
        with open(fpath, 'w') as f:
            f.write(new_content)
        print(f"  ✓ {oid}: replaced {replaced} table(s)")
    else:
        print(f"  ~ {oid}: found {len(merge_tables_jsx)} merge tables, but couldn't match in MD")

async def main():
    print(f"Processing {len(TARGETS)} files...")
    async with aiohttp.ClientSession() as session:
        for oid in TARGETS:
            await process_file(session, oid)
            await asyncio.sleep(0.3)
    print("\nDone!")

if __name__ == "__main__":
    asyncio.run(main())
