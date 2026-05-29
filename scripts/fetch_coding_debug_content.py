#!/usr/bin/env python3
"""
Batch fetch + convert HarmonyOS IDE docs for the 4 DevEco Studio sections:
  1. 编写与调试应用 (391 docs)
  2. 构建应用 (49 docs)
  3. 优化应用性能 (30 docs)
  4. 发布应用 (1 doc)
Uses markitdown for HTML→MD conversion, downloads images locally.
"""
import json, re, os, sys, time, urllib.request, urllib.parse
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from bs4 import BeautifulSoup

# ── Config ──────────────────────────────────────────────
BASE = Path('/Users/hhxi/developer_hos')
DOC_DIR = BASE / 'docs' / 'tools' / 'coding-debug'
API_DOC = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
API_CATALOG = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/'}
CATALOG = 'harmonyos-guides'
SECTIONS = ['编写与调试应用', '构建应用', '优化应用性能', '发布应用']
MAX_WORKERS = 5
REQUEST_DELAY = 0.3  # seconds between API calls

# ── Helpers ──────────────────────────────────────────────

def api_post(url, data):
    """POST JSON to API, return parsed response."""
    req = urllib.request.Request(url, data=json.dumps(data).encode(), headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read())

def fetch_catalog_tree():
    """Fetch full catalog tree from API."""
    print("[1/5] Fetching catalog tree...")
    tree = api_post(API_CATALOG, {
        "language": "cn", "catalogName": CATALOG,
        "objectId": "ide-editer-overview"
    })
    return tree['value']['catalogTreeList']

def collect_section_leaves(nodes, section_names):
    """Recursively find sections by name and collect all leaf nodes."""
    results = {}
    
    def find_section(nodes, name):
        for n in nodes:
            if n.get('nodeName') == name:
                return n
            if n.get('children'):
                r = find_section(n['children'], name)
                if r: return r
        return None
    
    def collect_leaves(node):
        leaves = []
        rd = node.get('relateDocument', '')
        children = node.get('children', [])
        if rd and not children:
            leaves.append((rd, node.get('nodeName', '')))
        for c in children:
            leaves.extend(collect_leaves(c))
        return leaves
    
    for name in section_names:
        node = find_section(nodes, name)
        if node:
            leaves = collect_leaves(node)
            results[name] = leaves
            print(f"  {name}: {len(leaves)} leaves")
        else:
            print(f"  {name}: NOT FOUND!")
    return results

def explode_rowspan(html_str):
    """Pre-process HTML tables: duplicate rowspan cells."""
    soup = BeautifulSoup(html_str, 'html.parser')
    for table in soup.find_all('table'):
        rows = table.find_all('tr')
        insertions = {}
        for r, row in enumerate(rows):
            cells = row.find_all(['td', 'th'])
            col_offset = 0
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
                        insertions[target_row].append((c + col_offset, cell.name, cell.decode_contents()))
    return str(soup)

def download_images(html_str, save_dir, doc_name):
    """Download images and update src to local path."""
    soup = BeautifulSoup(html_str, 'html.parser')
    imgs = soup.find_all('img')
    if not imgs:
        return str(soup)
    
    os.makedirs(save_dir, exist_ok=True)
    for img in imgs:
        src = img.get('src', '')
        if not src or not src.startswith('http'):
            continue
        parsed = urllib.parse.urlparse(src)
        # Use URL hash as filename to avoid collisions
        fname = parsed.path.rsplit('/', 1)[-1]
        if not fname or '.' not in fname:
            fname = f"{doc_name}_{hash(src) & 0xffff}.png"
        local = save_dir / fname
        if not local.exists():
            try:
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as resp:
                    local.write_bytes(resp.read())
            except Exception as e:
                pass  # skip broken images
        img['src'] = f'./img/{fname}'
    return str(soup)

def clean_html_content(html_str):
    """Remove markitdown [h2] artifacts and fix common issues."""
    # Remove stray [h2]/[h3] markers
    html_str = re.sub(r'\[h[234]\]', '', html_str)
    return html_str

def fix_md_issues(md_text):
    """Fix common MDX issues after markitdown conversion."""
    # Fix ###缺少空格
    md_text = re.sub(r'^###([^ #\n])', r'### \1', md_text, flags=re.MULTILINE)
    # Fix markitdown leftover tags that cause MDX errors
    return md_text

# ── Main Pipeline ────────────────────────────────────────

def process_document(rd, node_name, doc_dir):
    """Fetch, convert, save one document."""
    md_path = doc_dir / f"{rd}.md"
    
    # Skip if already has content (not just skeleton)
    if md_path.exists():
        existing = md_path.read_text()
        content_lines = [l for l in existing.split('\n') if l.strip() and not l.strip().startswith('---') 
                        and not l.strip().startswith('title:') and not l.strip().startswith('displayed_sidebar:')
                        and not l.strip().startswith('# ')]
        if content_lines:
            return f"skip (has content): {rd}"
    
    # Fetch HTML
    try:
        resp = api_post(API_DOC, {
            "objectId": rd, "version": "", "catalogName": CATALOG, "language": "cn"
        })
        content = resp.get('value', {}).get('content', {})
        html = content.get('content', '')
        if not html:
            return f"empty: {rd}"
    except Exception as e:
        return f"fetch error: {rd} - {e}"
    
    # Pre-process HTML
    html = explode_rowspan(html)
    img_dir = doc_dir / 'img'
    html = download_images(html, img_dir, rd)
    
    # Write temp HTML for markitdown
    tmp_html = doc_dir / f".tmp_{rd}.html"
    tmp_html.write_text(html, encoding='utf-8')
    
    # Convert via markitdown CLI
    import subprocess
    markitdown_path = '/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown'
    try:
        result = subprocess.run(
            [markitdown_path, str(tmp_html)],
            capture_output=True, text=True, timeout=60
        )
        md_text = result.stdout
        if not md_text.strip():
            return f"markitdown empty: {rd}"
    except Exception as e:
        tmp_html.unlink(missing_ok=True)
        return f"markitdown error: {rd} - {e}"
    finally:
        tmp_html.unlink(missing_ok=True)
    
    # Post-process
    md_text = clean_html_content(md_text)
    md_text = fix_md_issues(md_text)
    
    # Build final content with frontmatter
    final = f"""---\ntitle: "{node_name}"\ndisplayed_sidebar: toolsSidebar\n---\n\n{md_text}"""
    
    md_path.write_text(final, encoding='utf-8')
    size = len(final)
    return f"ok ({size}B): {rd}"

def main():
    start_time = time.time()
    
    print("=" * 60)
    print("DevEco Studio 内容批量抓取")
    print("=" * 60)
    
    # 1. Get catalog tree
    nodes = fetch_catalog_tree()
    
    # 2. Collect leaves per section
    print("\n[2/5] Collecting leaf nodes...")
    sections = collect_section_leaves(nodes, SECTIONS)
    
    # Flatten all leaves
    all_tasks = []
    for section_name, leaves in sections.items():
        for rd, node_name in leaves:
            all_tasks.append((rd, node_name))
    
    total = len(all_tasks)
    print(f"\n  Total documents to process: {total}")
    
    # Check what already has content
    print("\n[3/5] Checking existing content...")
    to_process = []
    already_done = 0
    for rd, node_name in all_tasks:
        md_path = DOC_DIR / f"{rd}.md"
        if md_path.exists():
            existing = md_path.read_text()
            content_lines = [l for l in existing.split('\n') if l.strip() and not l.strip().startswith('---') 
                           and not l.strip().startswith('title:') and not l.strip().startswith('displayed_sidebar:')
                           and not l.strip().startswith('# ')]
            if content_lines:
                already_done += 1
                continue
        to_process.append((rd, node_name))
    
    print(f"  Already have content: {already_done}")
    print(f"  Need to fetch: {len(to_process)}")
    
    if not to_process:
        print("\n✅ All documents already have content. Nothing to do.")
        return
    
    # 4. Process documents
    print(f"\n[4/5] Fetching and converting {len(to_process)} documents...")
    print(f"  Concurrency: {MAX_WORKERS} workers, delay={REQUEST_DELAY}s")
    
    ok_count = 0
    err_count = 0
    skip_count = 0
    done_count = 0
    
    def worker(task):
        rd, node_name = task
        time.sleep(REQUEST_DELAY)
        return process_document(rd, node_name, DOC_DIR)
    
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(worker, task): task for task in to_process}
        for future in as_completed(futures):
            done_count += 1
            try:
                result = future.result()
            except Exception as e:
                result = f"exception: {futures[future][0]} - {e}"
            
            if result.startswith('ok'):
                ok_count += 1
            elif result.startswith('skip'):
                skip_count += 1
            else:
                err_count += 1
            
            if done_count % 20 == 0 or done_count == len(to_process):
                elapsed = time.time() - start_time
                pct = done_count * 100 // len(to_process)
                print(f"  [{done_count}/{len(to_process)} {pct}%] ok={ok_count} skip={skip_count} err={err_count} ({elapsed:.0f}s)")
    
    # 5. Summary
    elapsed = time.time() - start_time
    print(f"\n[5/5] Done in {elapsed:.0f}s ({elapsed/60:.1f}min)")
    print(f"  ✅ Success: {ok_count}")
    print(f"  ⏭️  Skipped (had content): {skip_count}")
    print(f"  ❌ Errors: {err_count}")
    print(f"  📊 Total: {ok_count + skip_count + err_count}/{total}")

if __name__ == '__main__':
    main()
