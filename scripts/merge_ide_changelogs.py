#!/usr/bin/env python3
"""Convert ide-changelogs-610 and merge into deveco-studio-610.md."""
import json, re, os, sys, subprocess
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

# --- utilities (same as convert_hos_release.py) ---

def explode_rowspan(html_str):
    soup = BeautifulSoup(html_str, 'html.parser')
    for table in soup.find_all('table'):
        rows = table.find_all('tr')
        insertions = {}
        for r, row in enumerate(rows):
            cells = row.find_all(['td', 'th'])
            for c, cell in enumerate(cells):
                rs = int(cell.get('rowspan', 1))
                cell.attrs.pop('rowspan', None)
                if rs > 1:
                    for dr in range(1, rs):
                        target_row = r + dr
                        if target_row >= len(rows): break
                        if target_row not in insertions:
                            insertions[target_row] = []
                        insertions[target_row].append((c, cell.name, cell.decode_contents()))
        for r in sorted(insertions.keys()):
            row = rows[r]
            for col_idx, tag_name, cell_html in sorted(insertions[r], key=lambda x: -x[0]):
                new_cell = soup.new_tag(tag_name)
                new_cell.append(BeautifulSoup(cell_html, 'html.parser'))
                existing_cells = row.find_all(['td', 'th'])
                if col_idx >= len(existing_cells):
                    row.append(new_cell)
                else:
                    existing_cells[col_idx].insert_before(new_cell)
    return str(soup)

def clean_md(text):
    lines = text.split('\n')
    result = []
    for line in lines:
        line = re.sub(r'\[h2\]\s*', '', line)
        line = re.sub(r'\[h3\]\s*', '', line)
        if 'note_3.0-zh-cn.png' in line:
            if result and not result[-1].startswith('> '):
                result.append('> **注意：**')
            continue
        if re.match(r'^#{1,6}\s*$', line): continue
        result.append(line)
    return '\n'.join(result)

def remove_first_h1(text):
    lines = text.split('\n')
    out, skipped = [], False
    for i, line in enumerate(lines):
        if not skipped and line.startswith('# '):
            skipped = True; continue
        if skipped and i == 1 and not line.strip(): continue
        out.append(line)
    return '\n'.join(out)

def is_code_line(line):
    """Detect if a line starting with # is actually code, not a heading.
    Examples: #include, #define, #ifdef, #pragma, etc."""
    stripped = line.strip()
    if stripped.startswith('#'):
        # Multi-level markdown heading (##, ###, ####) → not code
        if re.match(r'^#{2,}\s', stripped):
            return False
        # Single # followed by non-space → code (#include, #define)
        after_hash = stripped[1:]
        if after_hash and not after_hash[0].isspace():
            return True
    return False

def smart_promote_headings(md_text):
    """Version headings (containing Release/Beta + version or 引入的变更) → ##
    Sub-section headings → ###
    Code lines starting with # → preserve as-is
    """
    # Patterns for version-level headings
    version_patterns = [
        re.compile(r'.+(Release|Beta)\d*（\d+\.\d+\.\d+'),  # "DevEco Studio 6.1.0 Release（6.1.0.850）"
        re.compile(r'.+(Release|Beta)\d*引入的变更'),        # "DevEco Studio 6.1.0 Release引入的变更"
    ]
    
    lines = md_text.split('\n')
    result = []
    for line in lines:
        if line.startswith('#') and not is_code_line(line):
            depth = len(line) - len(line.lstrip('#'))
            heading_text = line.lstrip('#').strip()
            
            is_version = any(p.match(heading_text) for p in version_patterns)
            
            if is_version:
                new_depth = max(1, depth - 2)  # #### → ##
            else:
                new_depth = max(1, depth - 1)  # #### → ###
            
            result.append('#' * new_depth + line.lstrip('#'))
        else:
            result.append(line)
    return '\n'.join(result)

def escape_mdx(text):
    lines = text.split('\n')
    fixed = []
    for line in lines:
        if line.strip().startswith('|') and ('{' in line or '}' in line):
            cells = line.split('|')
            new_cells = []
            for cell in cells:
                s = cell.strip()
                if s and ('{' in s or '}' in s):
                    if '](http' in s or s.startswith('['): new_cells.append(cell)
                    elif s.startswith('`') and s.endswith('`'): new_cells.append(cell)
                    else: new_cells.append(f' `{s}` ')
                else: new_cells.append(cell)
            fixed.append('|'.join(new_cells))
        else: fixed.append(line)
    return '\n'.join(fixed)

def html_to_md(html, heading_mode='smart'):
    """Convert HTML to clean MD with smart heading promotion."""
    html = explode_rowspan(html)
    tmpfile = Path('/tmp/_conv_clean.html')
    tmpfile.write_text(html, encoding='utf-8')
    result = MarkItDown().convert(str(tmpfile))
    md = result.text_content if hasattr(result, 'text_content') else str(result)
    md = clean_md(md)
    md = remove_first_h1(md)
    
    if heading_mode == 'smart':
        md = smart_promote_headings(md)
    elif heading_mode == 'flat':
        md = promote_headings(md, levels=1)
    
    return escape_mdx(md)


# ============ MAIN ============

if __name__ == '__main__':
    API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
    HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/'}
    
    # 1. Fetch and convert ide-changelogs-610
    print('--- ide-changelogs-610 ---')
    body = json.dumps({'objectId': 'ide-changelogs-610', 'version': '', 'catalogName': 'harmonyos-releases', 'language': 'cn'})
    r = subprocess.run(['curl', '-s', API, '-H', f'Content-Type: application/json', '-H', f'Referer: {HEADERS["Referer"]}', '-d', body], capture_output=True, text=True, timeout=30)
    html = json.loads(r.stdout)['value']['content']['content']
    changelogs_md = html_to_md(html, heading_mode='smart')
    print(f'  MD: {len(changelogs_md)} chars')
    
    # Show structure
    for line in changelogs_md.split('\n'):
        if line.startswith('#'):
            print(f'  {line.strip()}')
    
    # 2. Read current deveco-studio-610.md
    project = Path(__file__).parent.parent
    ds_path = project / 'docs/tools/coding-debug/release-notes/deveco-studio-610.md'
    current = ds_path.read_text(encoding='utf-8')
    
    # 3. Append changelogs as a new top-level section
    # Find where to insert - after the main content, before end
    merged = current.rstrip() + '\n\n' + changelogs_md.strip() + '\n'
    
    # 4. Write
    ds_path.write_text(merged, encoding='utf-8')
    print(f'\nWritten deveco-studio-610.md: {len(merged)} chars, {merged.count(chr(10))} lines')
    print('Done!')
