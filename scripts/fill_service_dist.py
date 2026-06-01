#!/usr/bin/env python3
"""
Fill service-dist stub files with actual content from Huawei API.
Usage: python3 fill_service_dist.py
"""
import os
import re
import json
import time
import html as html_mod
import subprocess
import urllib.request
import urllib.error
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = Path(__file__).parent.parent
DOCS_DIR = BASE_DIR / "docs" / "distribute" / "service-dist"
VENV_PYTHON = "/Users/hhxi/.hermes/hermes-agent/venv/bin/python3"
MARKITDOWN_BIN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
CATALOG_NAME = "service"
MAX_WORKERS = 4

HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/service/huawei_business_touch-0000001054309149",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# All leaf documents from the service catalog tree for the 3 sections
# Format: (objectId, local_md_relative_path)
DOCS_TO_FILL = [
    # === 华为服务号 ===
    ("huawei_business_touch-0000001054309149", "huawei-service-account/huawei_business_touch-0000001054309149.md"),
    ("negative_screen-0000001053484085", "huawei-service-account/entrance-0000001052924071/negative_screen-0000001053484085.md"),
    ("service_message_center-0000001151986766", "huawei-service-account/entrance-0000001052924071/service_message_center-0000001151986766.md"),
    ("discovery_follow-0000001053724049", "huawei-service-account/entrance-0000001052924071/discovery_follow-0000001053724049.md"),
    ("register_account-0000002508822779", "huawei-service-account/merchants_enter_process-0000001053604051/register_account-0000002508822779.md"),
    ("real_name_authentication-0000002476702796", "huawei-service-account/merchants_enter_process-0000001053604051/real_name_authentication-0000002476702796.md"),
    ("sign_agreement-0000002476862788", "huawei-service-account/merchants_enter_process-0000001053604051/sign_agreement-0000002476862788.md"),
    ("create_service_account-0000002508942747", "huawei-service-account/merchants_enter_process-0000001053604051/create_service_account-0000002508942747.md"),
    ("set_developer_information-0000002508822781", "huawei-service-account/merchants_enter_process-0000001053604051/set_developer_information-0000002508822781.md"),
    ("welcome_message-0000002476867088", "huawei-service-account/operationguide-0000001263024771/welcome_message-0000002476867088.md"),
    ("atuo_message-0000002476875974", "huawei-service-account/operationguide-0000001263024771/atuo_message-0000002476875974.md"),
    ("keyword_message-0000002509259387", "huawei-service-account/operationguide-0000001263024771/keyword_message-0000002509259387.md"),
    ("servicer_menu-0000002508947049", "huawei-service-account/operationguide-0000001263024771/servicer_menu-0000002508947049.md"),
    ("modify_information-0000002508947055", "huawei-service-account/operationguide-0000001263024771/modify_information-0000002508947055.md"),
    ("article-0000002508827071", "huawei-service-account/operationguide-0000001263024771/article-0000002508827071.md"),
    ("homepage_decoration-0000002476707102", "huawei-service-account/operationguide-0000001263024771/homepage_decoration-0000002476707102.md"),
    ("association_service-0000002508947051", "huawei-service-account/operationguide-0000001263024771/association_service-0000002508947051.md"),
    ("promotion_service-0000002476867092", "huawei-service-account/operationguide-0000001263024771/promotion_service-0000002476867092.md"),
    ("follow_component-0000002508827073", "huawei-service-account/operationguide-0000001263024771/follow_component-0000002508827073.md"),
    ("jump_configuration-0000002503821730", "huawei-service-account/operationguide-0000001263024771/jump_configuration-0000002503821730.md"),
    ("reports-0000002501533916", "huawei-service-account/operationguide-0000001263024771/reports-0000002501533916.md"),
    ("team-0000002476725124", "huawei-service-account/operationguide-0000001263024771/team-0000002476725124.md"),
    ("content_specification-0000001053325353", "huawei-service-account/specification-0000001053205318/content_specification-0000001053325353.md"),
    ("registration_rules-0000001058075206", "huawei-service-account/specification-0000001053205318/registration_rules-0000001058075206.md"),
    ("portal_rules-0000001057117474", "huawei-service-account/specification-0000001053205318/portal_rules-0000001057117474.md"),
    ("cooperation_agreement-0000002486560952", "huawei-service-account/serviceterms-0000002518840813/cooperation_agreement-0000002486560952.md"),
    ("cooperation-0000001053724051", "huawei-service-account/cooperation-0000001053724051.md"),
    ("faq-0000001053844042", "huawei-service-account/faq-0000001053844042.md"),
    # === 智慧助手·今天 ===
    ("intents-kit-0000002493694390", "smart-assistant-today/intents-kit-0000002493694390.md"),
    ("intents-kit311-0000002505489674", "smart-assistant-today/intents-kit3-0000002493534406/intents-kit311-0000002505489674.md"),
    ("intents-kit312-0000002537329447", "smart-assistant-today/intents-kit3-0000002493534406/intents-kit312-0000002537329447.md"),
    ("intents-kit314-0000002537459053", "smart-assistant-today/intents-kit313-0000002505499078/intents-kit314-0000002537459053.md"),
    ("intents-kit315-0000002505659156", "smart-assistant-today/intents-kit313-0000002505499078/intents-kit315-0000002505659156.md"),
    ("intents-kit316-0000002505723642", "smart-assistant-today/intents-kit12-0000002504446028/intents-kit316-0000002505723642.md"),
    ("intents-kit317-0000002537523401", "smart-assistant-today/intents-kit12-0000002504446028/intents-kit317-0000002537523401.md"),
    ("intents-kit70-0000002504608300", "smart-assistant-today/intents-kit69-0000002536245863/intents-kit70-0000002504608300.md"),
    ("intents-kit73-0000002504448462", "smart-assistant-today/intents-kit69-0000002536245863/intents-kit73-0000002504448462.md"),
    ("intents-kit90-0000002536248275", "smart-assistant-today/intents-kit69-0000002536245863/intents-kit90-0000002536248275.md"),
    # === AirTouch ===
    ("service-overview-0000002140771877", "AirTouch/introduction-0000002140926573/service-overview-0000002140771877.md"),
    ("restricted-0000002105332610", "AirTouch/introduction-0000002140926573/restricted-0000002105332610.md"),
    ("create-service-0000002105172798", "AirTouch/create-service-0000002105172798.md"),
    ("custom-setting-2-0000002147612981", "AirTouch/custom-setting-0000002140771881/custom-setting-2-0000002147612981.md"),
    ("custom-setting-1-0000002111894556", "AirTouch/custom-setting-0000002140771881/custom-setting-1-0000002111894556.md"),
    ("jump-desc-0000002552632529", "AirTouch/jump-0000002105332614/jump-desc-0000002552632529.md"),
    ("jump-normal-0000002552678999", "AirTouch/jump-0000002105332614/jump-2-0000002112095246/jump-normal-0000002552678999.md"),
    ("jump-applinking-0000002521479036", "AirTouch/jump-0000002105332614/jump-2-0000002112095246/jump-applinking-0000002521479036.md"),
    ("jump-1-0000002112254990", "AirTouch/jump-0000002105332614/jump-1-0000002112254990.md"),
    ("format-description-0000002112248816", "AirTouch/make-label-0000002140931465/format-description-0000002112248816.md"),
    ("make-0000002148047737", "AirTouch/make-label-0000002140931465/make-0000002148047737.md"),
    ("make-tool-0000002563220571", "AirTouch/make-label-0000002140931465/make-tool-0000002563220571.md"),
    ("faq-0000002105172802", "AirTouch/faq-0000002105172802.md"),
    ("callback-0000002148323061", "AirTouch/appebdices-0000002140931469/callback-0000002148323061.md"),
]

# Image cache: url_key -> local_path
IMAGE_CACHE = {}


def fetch_document(object_id):
    """Fetch document HTML from Huawei API."""
    payload = json.dumps({
        "objectId": object_id,
        "version": "",
        "catalogName": CATALOG_NAME,
        "language": "cn"
    }).encode('utf-8')
    
    req = urllib.request.Request(API_URL, data=payload, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        if data.get('code') == 0:
            val = data.get('value', {})
            content = val.get('content', {})
            html_body = content.get('content', '')
            title = val.get('title', '')
            return html_body, title
        else:
            return None, f"API error: {data.get('message', 'unknown')}"
    except Exception as e:
        return None, str(e)


def download_image(url, md_file_path):
    """Download image and return local relative path."""
    url_key = re.sub(r'\?.*$', '', url)
    if url_key in IMAGE_CACHE:
        return IMAGE_CACHE[url_key]
    
    # Create img directory next to md file
    md_dir = md_file_path.parent
    img_dir = md_dir / "img"
    img_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate filename from URL hash
    import hashlib
    url_hash = hashlib.md5(url_key.encode()).hexdigest()[:12]
    
    # Determine extension from URL
    ext = os.path.splitext(url_key.split('/')[-1])[1]
    if not ext or len(ext) > 5:
        ext = '.png'
    ext = ext.lower()
    if ext not in ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp'):
        ext = '.png'
    
    img_name = f"{url_hash}{ext}"
    img_path = img_dir / img_name
    
    if not img_path.exists():
        try:
            decoded_url = html_mod.unescape(url)
            req = urllib.request.Request(decoded_url, headers={'User-Agent': HEADERS['User-Agent']})
            with urllib.request.urlopen(req, timeout=30) as resp:
                img_path.write_bytes(resp.read())
        except Exception as e:
            print(f"    ⚠️ Failed to download image: {url[:80]}... ({e})")
            return url  # Keep original URL
    
    rel_path = f"./img/{img_name}"
    IMAGE_CACHE[url_key] = rel_path
    return rel_path


def extract_merge_tables(html_content):
    """Detect merged cells in HTML tables and replace with MergeTable JSX."""
    from html.parser import HTMLParser
    
    class TableParser(HTMLParser):
        def __init__(self):
            super().__init__()
            self.tables = []
            self.current_table = None
            self.current_row = None
            self.current_cell = None
            self.in_table = False
            self.in_row = False
            self.in_cell = False
            self.text_content = ""
        
        def handle_starttag(self, tag, attrs):
            attrs_dict = dict(attrs)
            if tag == 'table':
                self.in_table = True
                self.current_table = {'headers': [], 'rows': [], 'has_merge': False}
            elif tag == 'tr':
                self.in_row = True
                self.current_row = []
            elif tag in ('td', 'th'):
                self.in_cell = True
                self.text_content = ""
                rs = int(attrs_dict.get('rowspan', 1))
                cs = int(attrs_dict.get('colspan', 1))
                self.current_cell = {'text': '', 'rowspan': rs, 'colspan': cs}
                if rs > 1 or cs > 1:
                    if self.current_table:
                        self.current_table['has_merge'] = True
        
        def handle_endtag(self, tag):
            if tag in ('td', 'th'):
                self.in_cell = False
                if self.current_cell:
                    self.current_cell['text'] = self.text_content.strip()
                    self.current_row.append(self.current_cell)
                    self.current_cell = None
            elif tag == 'tr':
                self.in_row = False
                if self.current_table:
                    # Detect header row (first row with th)
                    is_header = any(
                        c.get('text', '').strip() and True 
                        for c in self.current_row
                    )
                    self.current_table['rows'].append(self.current_row)
                    self.current_row = None
            elif tag == 'table':
                self.in_table = False
                if self.current_table and self.current_table['has_merge']:
                    self.tables.append(self.current_table)
                self.current_table = None
        
        def handle_data(self, data):
            if self.in_cell:
                self.text_content += data
    
    parser = TableParser()
    try:
        parser.feed(html_content)
    except Exception:
        pass
    
    return parser.tables


def convert_table_to_merge_jsx(table_data):
    """Convert parsed table data to MergeTable JSX string."""
    rows = table_data['rows']
    if not rows:
        return ""
    
    # First row = headers
    headers = [c['text'] for c in rows[0]]
    headers_str = ', '.join(f"'{h}'" for h in headers)
    
    # Data rows
    row_strs = []
    occupied = {}  # (row_idx, col_idx) -> True for rowspan placeholders
    
    for ri, row in enumerate(rows[1:], 1):
        cells = []
        ci = 0
        for cell in row:
            # Skip cells consumed by rowspan
            while (ri, ci) in occupied:
                cells.append('null')
                ci += 1
            
            rs = cell.get('rowspan', 1)
            cs = cell.get('colspan', 1)
            text = cell['text'].replace("'", "\\'").replace('\n', ' ')
            
            if rs > 1 or cs > 1:
                parts = [f"text: '{text}'"]
                if rs > 1:
                    parts.append(f"rowspan: {rs}")
                    # Mark occupied cells
                    for dr in range(1, rs):
                        for dc in range(cs):
                            occupied[(ri + dr, ci + dc)] = True
                if cs > 1:
                    parts.append(f"colspan: {cs}")
                cells.append('{ ' + ', '.join(parts) + ' }')
            else:
                cells.append(f"'{text}'")
            
            ci += 1
        
        row_strs.append('    [' + ', '.join(cells) + ']')
    
    rows_str = ',\n'.join(row_strs)
    
    jsx = f"""<MergeTable
  headers={{{{{headers_str}}}}}
  rows={{
{rows_str}
  }}
/>"""
    return jsx


def html_to_markdown(html_content, md_file_path):
    """Convert HTML to Markdown using markitdown, with image localization."""
    import tempfile
    
    # Download images and rewrite URLs
    img_pattern = re.compile(r'<img[^>]+src="([^"]+)"', re.IGNORECASE)
    img_count = 0
    
    def replace_img(m):
        nonlocal img_count
        url = m.group(1)
        local = download_image(url, md_file_path)
        if local != url:
            img_count += 1
        return m.group(0).replace(url, local)
    
    html_with_local_imgs = img_pattern.sub(replace_img, html_content)
    
    # Extract merge tables before conversion
    merge_tables = extract_merge_tables(html_content)
    
    # Write HTML to temp file
    with tempfile.NamedTemporaryFile(mode='w', suffix='.html', delete=False, encoding='utf-8') as f:
        f.write(f"<html><body>{html_with_local_imgs}</body></html>")
        tmp_path = f.name
    
    # Convert with markitdown
    try:
        result = subprocess.run(
            [MARKITDOWN_BIN, tmp_path],
            capture_output=True, text=True, timeout=60
        )
        md_content = result.stdout
    except Exception as e:
        print(f"    ⚠️ markitdown failed: {e}")
        md_content = html_content  # fallback
    finally:
        os.unlink(tmp_path)
    
    # Clean up markdown
    md_content = clean_markdown(md_content, merge_tables, md_file_path)
    
    return md_content, img_count


def clean_markdown(md_content, merge_tables, md_file_path):
    """Post-process markdown content."""
    lines = md_content.split('\n')
    new_lines = []
    img_dir = md_file_path.parent / "img"
    
    for line in lines:
        # Fix heading levels from markitdown output
        # markitdown converts h1→#, h4→####
        # Original HTML semantics:
        #   <h1> = page title → keep as #
        #   <h4> (no marker) = top-level section → ##
        #   <h4>[h2]xxx = sub-section → ### (strip [h2])
        m_h2 = re.match(r'^(#{1,6})\s+\[h2\]\s*(.*)', line)
        if m_h2:
            text = m_h2.group(2).strip()
            new_lines.append('### ' + text)
            continue
        
        if line.startswith('# '):
            new_lines.append(line)
        elif line.startswith('## '):
            new_lines.append(line)
        elif line.startswith('### '):
            new_lines.append('##' + line[3:])
        elif line.startswith('#### '):
            new_lines.append('##' + line[4:])
        elif line.startswith('##### '):
            new_lines.append('###' + line[5:])
        elif line.startswith('###### '):
            new_lines.append('####' + line[6:])
        else:
            # Remove stray [h2] markers in non-heading lines
            if '[h2]' in line:
                line = line.replace('[h2]', '')
            new_lines.append(line)
    
    md_content = '\n'.join(new_lines)
    
    # Remove duplicate heading (same text as title immediately after #)
    # Pattern: # Title\n\n### Title\n → # Title\n
    title_match = re.match(r'^#\s+(.+)$', md_content.split('\n')[0] if not md_content.startswith('---') else '')
    if not title_match and md_content.startswith('---'):
        # Find title in body after frontmatter
        body = md_content.split('---', 2)[-1] if md_content.count('---') >= 2 else md_content
        title_match = re.match(r'^#\s+(.+)$', body.strip().split('\n')[0])
    
    # Fix image paths
    md_content = re.sub(
        r'!\[([^\]]*)\]\(([^)]+)\)',
        lambda m: fix_image_ref(m, img_dir),
        md_content
    )
    
    # Clean up: collapse multiple blank lines
    md_content = re.sub(r'\n{4,}', '\n\n\n', md_content)
    
    return md_content


def fix_image_ref(match, img_dir):
    """Fix image reference path."""
    alt = match.group(1)
    src = match.group(2)
    
    # If already relative, keep
    if src.startswith('./'):
        return match.group(0)
    
    # If it's a local path, check if file exists
    if not src.startswith('http'):
        return match.group(0)
    
    # External URL that wasn't downloaded - keep as-is
    return match.group(0)


def process_doc(object_id, rel_path):
    """Process a single document: fetch, convert, save."""
    md_path = DOCS_DIR / rel_path
    
    # Re-process all files to fix heading levels
    pass  # Always process, never skip
    
    print(f"  📥 {rel_path.split('/')[-1]}...", end=' ', flush=True)
    
    html_content, title = fetch_document(object_id)
    
    if html_content is None:
        print(f"❌ {title}")
        return False
    
    if not html_content.strip():
        print(f"⚠️ Empty content")
        return False
    
    md_content, img_count = html_to_markdown(html_content, md_path)
    
    # Build frontmatter
    displayed_sidebar = "serviceDistSidebar"
    original_url = f"https://developer.huawei.com/consumer/cn/doc/service/{object_id}"
    
    # Check if file already has import for MergeTable
    has_merge = bool(re.search(r'rowspan|colspan', html_content, re.IGNORECASE))
    
    fm = f"""---
title: "{title or object_id}"
displayed_sidebar: {displayed_sidebar}
original_url: {original_url}
---

"""
    if has_merge:
        fm += "import MergeTable from '@site/src/components/MergeTable';\n\n"
    
    full_content = fm + md_content
    
    # Ensure parent directory exists
    md_path.parent.mkdir(parents=True, exist_ok=True)
    img_dir = md_path.parent / "img"
    
    md_path.write_text(full_content, encoding='utf-8')
    
    img_info = f"📷 {img_count} images" if img_count > 0 else ""
    print(f"✅ ({len(md_content)} bytes) {img_info}")
    return True


def main():
    print(f"Service-dist content filler")
    print(f"Total docs to process: {len(DOCS_TO_FILL)}")
    print()
    
    # Group docs by section for cleaner output
    sections = {
        "华为服务号": [],
        "智慧助手·今天": [],
        "AirTouch": []
    }
    
    for oid, path in DOCS_TO_FILL:
        if "huawei-service-account" in path:
            sections["华为服务号"].append((oid, path))
        elif "smart-assistant" in path:
            sections["智慧助手·今天"].append((oid, path))
        else:
            sections["AirTouch"].append((oid, path))
    
    total = 0
    success = 0
    
    for section_name, docs in sections.items():
        print(f"📁 {section_name} ({len(docs)} 篇)")
        
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = {
                executor.submit(process_doc, oid, path): (oid, path)
                for oid, path in docs
            }
            for future in as_completed(futures):
                oid, path = futures[future]
                total += 1
                try:
                    if future.result():
                        success += 1
                except Exception as e:
                    print(f"    ❌ {path}: {e}")
        
        print()
    
    print(f"Done: {success}/{total} succeeded")
    
    # Check for any missing files
    missing = []
    for oid, path in DOCS_TO_FILL:
        md_path = DOCS_DIR / path
        if not md_path.exists():
            missing.append(path)
    
    if missing:
        print(f"\n⚠️ Missing files ({len(missing)}):")
        for m in missing:
            print(f"  {m}")


if __name__ == "__main__":
    main()
