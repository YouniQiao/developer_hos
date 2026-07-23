#!/usr/bin/env python3
"""Pull DevEco Code & CLI pages — fix heading hierarchy based on [h2] markers."""
import json, re, os, subprocess, urllib.request, urllib.parse
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/'}
DOCS_DIR = Path('/Users/hhxi/developer_hos/docs/tools/deveco-code')

PAGES = [
    ('ide-deveco-code-overview',         'overview.md',                       '工具概述',        'harmonyos-guides'),
    ('ide-deveco-code-install',          'deveco-code-install.md',            '下载与安装',      'harmonyos-guides'),
    ('ide-deveco-code-agent',            'deveco-code-agent.md',              'Agent模式',       'harmonyos-guides'),
    ('ide-deveco-code-model',            'deveco-code-model.md',              '模型配置',        'harmonyos-guides'),
    ('ide-deveco-code-common-configure', 'deveco-code-common-configure.md',   '常用配置',        'harmonyos-guides'),
    ('ide-deveco-cli-overview',          'deveco-cli.md',                     '工具概述',        'harmonyos-guides'),
    ('ide-deveco-cli-install',           'deveco-cli-install.md',             '下载与安装',      'harmonyos-guides'),
    ('ide-deveco-cli-options',           'deveco-cli-options.md',             '常用命令',        'harmonyos-guides'),
]


def fetch_html(rd, catalog):
    body = json.dumps({'objectId': rd, 'version': '', 'catalogName': catalog, 'language': 'cn'})
    result = subprocess.run(['curl', '-s', API, '-H', f'Content-Type: application/json',
         '-H', f'Referer: {HEADERS["Referer"]}', '-d', body],
        capture_output=True, text=True, timeout=30)
    return json.loads(result.stdout)['value']['content']['content']


def fix_headings(html_str):
    """
    Fix heading hierarchy based on [h2] markers.
    Huawei convention:
      <h1> = page title
      <h4>X = section (→ h2)
      <h4>[h2]X = sub-section (→ h3)
      <h4>[h3]X = sub-sub-section (→ h4) — if any
    Strategy: bump h4+h2 to h5, then everything shifts:
      h1→h1, h4→h4, h5→h5
    After markitdown+promotion: h1 removed, h4→##, h5→###
    """
    soup = BeautifulSoup(html_str, 'html.parser')
    
    for tag in soup.find_all(['h2','h3','h4','h5','h6','h7']):
        text = tag.get_text()
        # Check for [h2], [h3] markers
        if re.match(r'^\[h2\]', text):
            tag.name = 'h5'  # demote deeper → will become ###
            tag.string = re.sub(r'^\[h2\]\s*', '', text)
        elif re.match(r'^\[h3\]', text):
            tag.name = 'h6'  # even deeper → will become ####
            tag.string = re.sub(r'^\[h3\]\s*', '', text)
        # else: h4 stays h4 → will become ##
    
    return str(soup)


def protect_pre_blocks(html_str):
    soup = BeautifulSoup(html_str, 'html.parser')
    for pre in soup.find_all('pre'):
        text = pre.get_text()
        text = re.sub(r'^#', r'\\#', text, flags=re.MULTILINE)
        text = re.sub(r'^---', r'\\---', text, flags=re.MULTILINE)
        pre.string = text
    return str(soup)


def download_images(html_str, save_dir):
    soup = BeautifulSoup(html_str, 'html.parser')
    os.makedirs(save_dir, exist_ok=True)
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if not src.startswith('http'): continue
        fname = os.path.basename(urllib.parse.urlparse(src).path).split('?')[0]
        if not fname or '.' not in fname: continue
        lp = os.path.join(save_dir, fname)
        if not os.path.exists(lp):
            try:
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as r:
                    with open(lp, 'wb') as f: f.write(r.read())
            except: pass
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
                        tr = r + dr
                        if tr >= len(rows): break
                        if tr not in insertions: insertions[tr] = []
                        insertions[tr].append((c, cell.name, cell.decode_contents()))
        for r in sorted(insertions.keys()):
            for col_idx, tag_name, cell_html in sorted(insertions[r], key=lambda x: -x[0]):
                new_cell = soup.new_tag(tag_name)
                new_cell.append(BeautifulSoup(cell_html, 'html.parser'))
                existing = rows[r].find_all(['td', 'th'])
                if col_idx >= len(existing): rows[r].append(new_cell)
                else: existing[col_idx].insert_before(new_cell)
    return str(soup)


for rd, fname, title, catalog in PAGES:
    out_path = DOCS_DIR / fname
    img_dir = out_path.parent / 'img'
    print(f'\n─ {rd} → {fname}')

    html = fetch_html(rd, catalog)
    html = fix_headings(html)        # fix h4→h5 for [h2] subsections
    html = protect_pre_blocks(html)  # escape # in <pre>
    html = download_images(html, str(img_dir))
    html = explode_rowspan(html)

    tmp = Path(f'/tmp/dc4_{rd}.html')
    tmp.write_text(html, encoding='utf-8')
    md_text = MarkItDown().convert(str(tmp)).text_content

    md_text = re.sub(r'\[h2\]\s*', '', md_text)
    md_text = re.sub(r'\[h3\]\s*', '', md_text)

    # Remove first h1 (page title — we'll add our own)
    lines = md_text.split('\n')
    out_lines = []
    skipped = False
    for i, line in enumerate(lines):
        if not skipped and line.startswith('# '):
            skipped = True
            continue
        if skipped and i == 1 and not line.strip():
            continue
        out_lines.append(line)
    md_text = '\n'.join(out_lines)

    # Promote: everything up 2 levels (h4→h2, h5→h3)
    code_p = re.compile(r'^#[^#\s]')
    result = []
    for line in md_text.split('\n'):
        stripped = line.lstrip('#')
        if line.startswith('#') and not code_p.match(line.lstrip()):
            depth = len(line) - len(stripped)
            new_depth = max(1, depth - 2)
            result.append('#' * new_depth + stripped)
        else:
            result.append(line)
    md_text = '\n'.join(result)

    # Remove empty headings
    md_text = re.sub(r'^#{1,6}\s*$', '', md_text, flags=re.MULTILINE)

    final = f'---\ntitle: "{title}"\n---\n\n# {title}\n\n{md_text.strip()}'
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(final, encoding='utf-8')
    print(f'  ✓ {len(final)} chars')

print('\n=== Done! ===')
