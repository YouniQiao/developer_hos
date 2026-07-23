#!/usr/bin/env python3
"""Update 9 design pages with latest content from Huawei API."""
import json, re, os, subprocess, urllib.request, urllib.parse
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
API_TREE = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/design-guides/'}
REPO = Path('/Users/hhxi/developer_hos')
DOCS_DIR = REPO / 'docs/design'

# Pages to update: (local_slug, expected_heading)
TARGETS = [
    'atomic-service-design/basic-elements/service-card',
    'atomic-service-design/overview',
    'components/navigation/bottom-tab',
    'components/selection-components/picker',
    'components/control-components/toolbar',
    'hmi/touchscreen',
    'multi-device-design/wearable/spacing-parameters',
    'ux-standards/foldable-screen-ux',
    'changelog/whats-new',
]


def get_catalog_mapping():
    """Return dict: nodeName → relateDocument (first match wins for duplicates)"""
    body = json.dumps({"catalogName": "design-guides", "language": "cn", "version": ""})
    result = subprocess.run(
        ["curl", "-s", API_TREE, "-H", f"Content-Type: application/json",
         "-H", f"Referer: {HEADERS['Referer']}", "-d", body],
        capture_output=True, text=True, timeout=30
    )
    data = json.loads(result.stdout)

    mapping = {}
    def walk(nodes, path_parts=[]):
        for n in nodes:
            rd = n.get("relateDocument", "")
            name = n.get("nodeName", "")
            if rd and name not in mapping:
                # Use longer path context to disambiguate
                key = " | ".join(path_parts + [name]) if path_parts else name
                mapping[name] = rd  # simple mapping
            if n.get("children"):
                walk(n["children"], path_parts + [name])
    
    for cat in data["value"]["catalogTreeList"]:
        walk(cat.get("children", [cat]))
    return mapping


def fetch_html(rd):
    body = json.dumps({
        'objectId': rd, 'version': '',
        'catalogName': 'design-guides', 'language': 'cn',
    })
    result = subprocess.run(
        ['curl', '-s', API, '-H', f'Content-Type: application/json',
         '-H', f'Referer: {HEADERS["Referer"]}', '-d', body],
        capture_output=True, text=True, timeout=30,
    )
    data = json.loads(result.stdout)
    return data['value']['content']['content']


def download_images(html_str, save_dir):
    soup = BeautifulSoup(html_str, 'html.parser')
    imgs = soup.find_all('img')
    os.makedirs(save_dir, exist_ok=True)
    for img in imgs:
        src = img.get('src', '')
        if not src.startswith('http'):
            continue
        parsed = urllib.parse.urlparse(src)
        fname = os.path.basename(parsed.path)
        if '?' in fname:
            fname = fname.split('?')[0]
        if not fname or '.' not in fname:
            continue
        local_path = os.path.join(save_dir, fname)
        if not os.path.exists(local_path):
            try:
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as resp:
                    with open(local_path, 'wb') as f:
                        f.write(resp.read())
            except Exception as e:
                print(f'    ✗ Download {fname}: {e}')
        img['src'] = f'./img/{fname}'
    return str(soup)


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
                        if target_row >= len(rows):
                            break
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
        if re.match(r'^#{1,6}\s*$', line):
            continue
        result.append(line)
    return '\n'.join(result)


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


def promote_headings_smart(md_text):
    code_pattern = re.compile(r'^#[^#\s]')
    lines = md_text.split('\n')
    result = []
    for line in lines:
        if line.startswith('#'):
            if code_pattern.match(line.lstrip()):
                result.append(line)
                continue
            depth = len(line) - len(line.lstrip('#'))
            new_depth = max(1, depth - 1)
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


def convert_one(rd, rel_path, title_h1):
    out_path = DOCS_DIR / rel_path
    img_dir = out_path.parent / 'img'

    print(f'\n─ {rd} → {rel_path}')

    html = fetch_html(rd)
    print(f'  HTML: {len(html)} chars')

    html = download_images(html, str(img_dir))
    html = explode_rowspan(html)

    tmpfile = Path(f'/tmp/{rd}_update.html')
    tmpfile.write_text(html, encoding='utf-8')
    
    md = MarkItDown()
    result = md.convert(str(tmpfile))
    md_text = result.text_content if hasattr(result, 'text_content') else str(result)
    print(f'  MD raw: {len(md_text)} chars')

    md_text = clean_md(md_text)
    md_text = remove_first_h1(md_text)
    md_text = promote_headings_smart(md_text)
    md_text = escape_mdx(md_text)

    final = f'---\ntitle: "{title_h1}"\n---\n\n# {title_h1}\n\n{md_text.strip()}'

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(final)
    print(f'  ✓ Written: {len(final)} chars')


if __name__ == '__main__':
    hw_map = get_catalog_mapping()
    
    for slug in TARGETS:
        fpath = DOCS_DIR / f"{slug}.md"
        if not fpath.exists():
            fpath = DOCS_DIR / f"{slug}.mdx"
        if not fpath.exists():
            print(f"  ✗ File not found: {slug}")
            continue
        
        with open(fpath) as f:
            content = f.read()
        
        # Extract heading
        heading = None
        for line in content.split('\n'):
            m = re.match(r'^#\s+(.+)', line)
            if m:
                heading = m.group(1).strip()
                heading = re.sub(r'\s*\{.*\}\s*', '', heading)
                break
        
        if not heading:
            print(f"  ✗ No heading found: {slug}")
            continue
        
        rd = hw_map.get(heading)
        if not rd:
            print(f"  ✗ No relateDocument for heading '{heading}': {slug}")
            continue
        
        try:
            convert_one(rd, f"{slug}.md", heading)
        except Exception as e:
            print(f"  ✗ FAILED: {e}")
    
    print('\n=== Done! ===')
