#!/usr/bin/env python3
"""Convert Huawei release HTML docs to MD via markitdown, with rowspan fix."""
import json, re, os, sys, urllib.request, urllib.parse, subprocess
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/'}


def explode_rowspan(html_str):
    """Pre-process HTML tables: duplicate rowspan cell content into subsequent rows"""
    soup = BeautifulSoup(html_str, 'html.parser')
    for table in soup.find_all('table'):
        rows = table.find_all('tr')
        
        # Track: row_index → list of (col_index, tag_name, cell_html)
        insertions = {}
        
        for r, row in enumerate(rows):
            cells = row.find_all(['td', 'th'])
            
            for c, cell in enumerate(cells):
                rs = int(cell.get('rowspan', 1))
                cell.attrs.pop('rowspan', None)
                
                if rs > 1:
                    for dr in range(1, rs):
                        target_row = r + dr
                        if target_row >= len(rows):
                            break
                        if target_row not in insertions:
                            insertions[target_row] = []
                        insertions[target_row].append((c, cell.name, cell.decode_contents()))
        
        # Apply insertions (process rows in reverse to maintain indexes)
        for r in sorted(insertions.keys()):
            row = rows[r]
            # Sort by column index descending to insert at correct positions
            for col_idx, tag_name, cell_html in sorted(insertions[r], key=lambda x: -x[0]):
                new_cell = soup.new_tag(tag_name)
                new_cell.append(BeautifulSoup(cell_html, 'html.parser'))
                existing_cells = row.find_all(['td', 'th'])
                if col_idx >= len(existing_cells):
                    row.append(new_cell)
                else:
                    existing_cells[col_idx].insert_before(new_cell)

    return str(soup)


def download_images(html_str, save_dir):
    """Download images from CDN, update HTML to use local paths"""
    soup = BeautifulSoup(html_str, 'html.parser')
    imgs = soup.find_all('img')
    os.makedirs(save_dir, exist_ok=True)

    for img in imgs:
        src = img.get('src', '')
        if not src.startswith('http'):
            continue
        parsed = urllib.parse.urlparse(src)
        fname = os.path.basename(parsed.path)
        local_path = os.path.join(save_dir, fname)
        if not os.path.exists(local_path):
            try:
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as resp:
                    with open(local_path, 'wb') as f:
                        f.write(resp.read())
            except Exception as e:
                print(f'  ✗ Download {fname}: {e}')
        img['src'] = f'./img/{fname}'

    return str(soup)


def promote_headings_smart(md_text):
    """Smart heading promotion for standalone tool pages.
    Version headings (containing Release/Beta + version or 引入的变更) → ##
    Sub-section headings → ###
    Code lines (#include etc) → preserve
    """
    import re
    # Version-level headings
    version_patterns = [
        re.compile(r'.+(Release|Beta)\d*（\d+\.\d+\.\d+'),
        re.compile(r'.+(Release|Beta)\d*引入的变更'),
    ]
    # Code line: single # followed by non-space (not markdown heading)
    code_pattern = re.compile(r'^#[^#\s]')
    
    lines = md_text.split('\n')
    result = []
    for line in lines:
        if line.startswith('#'):
            # Skip code lines like #include
            if code_pattern.match(line.lstrip()):
                result.append(line)
                continue
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


def clean_md(text):
    """Remove [h2]/[h3] markers, empty headings"""
    lines = text.split('\n')
    result = []
    for line in lines:
        line = re.sub(r'\[h2\]\s*', '', line)
        line = re.sub(r'\[h3\]\s*', '', line)
        if re.match(r'^#{1,6}\s*$', line):
            continue
        result.append(line)
    return '\n'.join(result)


def escape_mdx(text):
    """Wrap table cells with { } in backticks to avoid MDX parse errors"""
    lines = text.split('\n')
    fixed = []
    for line in lines:
        if line.strip().startswith('|') and ('{' in line or '}' in line):
            cells = line.split('|')
            new_cells = []
            for cell in cells:
                s = cell.strip()
                if s and ('{' in s or '}' in s):
                    if '](http' in s or s.startswith('['):
                        new_cells.append(cell)
                    elif s.startswith('`') and s.endswith('`'):
                        new_cells.append(cell)
                    else:
                        new_cells.append(f' `{s}` ')
                else:
                    new_cells.append(cell)
            fixed.append('|'.join(new_cells))
        else:
            fixed.append(line)
    return '\n'.join(fixed)


def remove_first_h1(text):
    lines = text.split('\n')
    out, skipped = [], False
    for i, line in enumerate(lines):
        if not skipped and line.startswith('# '):
            skipped = True
            continue
        if skipped and i == 1 and not line.strip():
            continue
        out.append(line)
    return '\n'.join(out)


def fetch_html(rd):
    """Fetch document HTML via API"""
    body = json.dumps({
        'objectId': rd, 'version': '',
        'catalogName': 'harmonyos-releases', 'language': 'cn',
    })
    # Use curl to avoid Python SSL issues
    result = subprocess.run(
        ['curl', '-s', API, '-H', f'Content-Type: application/json',
         '-H', f'Referer: {HEADERS["Referer"]}', '-d', body],
        capture_output=True, text=True, timeout=30,
    )
    data = json.loads(result.stdout)
    return data['value']['content']['content']


def convert_doc(rd, out_path, title_h1, img_dir, standalone=True):
    """Full pipeline: fetch → images → rowspan → markitdown → clean → write"""
    print(f'\n--- {rd} ---')

    html = fetch_html(rd)
    print(f'  HTML: {len(html)} chars')

    html = download_images(html, img_dir)
    html = explode_rowspan(html)

    # Save to temp and convert
    tmpfile = Path(f'/tmp/{rd}_clean.html')
    tmpfile.write_text(html, encoding='utf-8')
    result = MarkItDown().convert(str(tmpfile))
    md_text = result.text_content if hasattr(result, 'text_content') else str(result)
    print(f'  MD raw: {len(md_text)} chars')

    md_text = clean_md(md_text)
    md_text = remove_first_h1(md_text)

    if standalone:
        md_text = promote_headings_smart(md_text)

    md_text = escape_mdx(md_text)

    final = f'---\ntitle: "HarmonyOS 6.1.0(23)"\n---\n\n{title_h1}\n\n{md_text.strip()}'

    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(final)
    print(f'  Written: {len(final)} chars, {final.count(chr(10))} lines')


if __name__ == '__main__':
    project_root = Path(__file__).parent.parent

    convert_doc(
        'deveco-testing-releasenotes-610',
        str(project_root / 'docs/tools/deveco-testing/release-notes/deveco-testing-610.md'),
        '# DevEco Testing 新增和增强特性',
        str(project_root / 'docs/tools/deveco-testing/release-notes/img'),
        standalone=True,
    )

    convert_doc(
        'deveco-studio-new-features-610',
        str(project_root / 'docs/tools/coding-debug/release-notes/deveco-studio-610.md'),
        '# DevEco Studio 新增和增强特性',
        str(project_root / 'docs/tools/coding-debug/release-notes/img'),
        standalone=True,
    )

    print('\nDone!')
