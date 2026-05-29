#!/usr/bin/env python3
"""批量搬迁设计指南内容：API抓取→markitdown→MDX修复"""
import os, re, json, sys, time, urllib.request, urllib.error

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://developer.huawei.com/",
    "Origin": "https://developer.huawei.com",
}

def fetch_doc(object_id):
    body = json.dumps({"objectId": object_id, "version": "", "catalogName": "design-guides", "language": "cn"}).encode("utf-8")
    req = urllib.request.Request(API_URL, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))

def fix_titles(md_text):
    lines = md_text.split("\n")
    result = []
    for line in lines:
        if line.startswith("# "):
            result.append(line)
        elif "[h2]" in line:
            result.append(line.replace("[h2]", "").replace("####", "##"))
        else:
            result.append(line.replace("####", "###"))
    return "\n".join(result)

def fix_mdx(text):
    lines = text.split("\n")
    result = []
    in_code_block = False
    for line in lines:
        if line.startswith("```"):
            in_code_block = not in_code_block
            result.append(line)
            continue
        if in_code_block:
            result.append(line)
            continue
        parts = re.split(r'(`[^`]*`)', line)
        processed = []
        for part in parts:
            if part.startswith("`") and part.endswith("`"):
                processed.append(part)
            else:
                part = part.replace("{", "&#123;").replace("}", "&#125;")
                part = re.sub(r'<(?!([a-zA-Z/][a-zA-Z0-9_]*|!--|https?://|/\w+)\s*[/>])', '&lt;', part)
                processed.append(part)
        result.append("".join(processed))
    return "\n".join(result)

def extract_frontmatter(content):
    """Extract frontmatter from the original file content"""
    parts = content.split("---", 2)
    if len(parts) >= 3:
        return "---" + parts[1] + "---", parts[2]
    return "", ""
    
def convert_doc(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract frontmatter and old body
    frontmatter, old_body = extract_frontmatter(content)
    if not frontmatter:
        print(f"  [SKIP] no frontmatter")
        return False
    
    # Extract source_url
    m = re.search(r'source_url:\s*https://developer\.huawei\.com/consumer/cn/doc/design-guides/(\S+)', content)
    if not m:
        print(f"  [SKIP] no source_url")
        return False
    object_id = m.group(1).strip()
    
    # Check if stub (short body starting with #)
    body_stripped = old_body.strip()
    if len(body_stripped) > 150 and not body_stripped.startswith("#"):
        print(f"  [SKIP] already has content")
        return False
    
    print(f"  fetching {object_id}...")
    try:
        doc = fetch_doc(object_id)
    except Exception as e:
        print(f"  [ERROR] fetch: {e}")
        return False
    
    html = doc.get("value", {}).get("content", {}).get("content", "")
    if not html:
        print(f"  [INFO] empty content")
        return False
    
    # Clean up HW-CC signed params from image URLs
    html = re.sub(r'\?HW-CC-[^"\'\\]*', '', html)
    
    # Run markitdown
    import tempfile
    from markitdown import MarkItDown
    with tempfile.NamedTemporaryFile(mode="w", suffix=".html", delete=False, encoding="utf-8") as ftmp:
        ftmp.write(html)
        html_path = ftmp.name
    try:
        md_converter = MarkItDown()
        result = md_converter.convert(html_path)
        md_text = result.text_content
    except Exception as e:
        print(f"  [ERROR] markitdown: {e}")
        os.unlink(html_path)
        return False
    finally:
        os.unlink(html_path)
    
    if len(md_text.strip()) < 50:
        print(f"  [WARN] minimal content ({len(md_text)} chars)")
    
    # Fix titles
    md_text = fix_titles(md_text)
    
    # Handle SourceLink for code blocks
    codehubs = []
    for match in re.finditer(r'<pre[^>]*codehub="([^"]*)"[^>]*>(.*?)</pre>', html, re.DOTALL):
        codehub_url = match.group(1)
        code_content = match.group(2).replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")
        filename = codehub_url.split("/")[-1].split("#")[0]
        codehubs.append({"url": codehub_url, "filename": filename, "code": code_content})
    
    if codehubs:
        code_blocks = []
        pattern = re.compile(r'```(\w*)\n(.*?)```', re.DOTALL)
        for match in pattern.finditer(md_text):
            code_blocks.append(match)
        
        match_map = {}
        for hi, hub in enumerate(codehubs):
            hub_fp = hub["code"].strip()[:80]
            for mi, mb in enumerate(code_blocks):
                if mi in match_map:
                    continue
                md_code = mb.group(2).strip()[:80]
                if hub_fp == md_code:
                    match_map[mi] = hub
                    break
        
        new_text = md_text
        for mi, hub in sorted(match_map.items(), reverse=True):
            mb = code_blocks[mi]
            pos = mb.end()
            new_text = new_text[:pos] + f'\n<SourceLink name="{hub["filename"]}" url="{hub["url"]}" />' + new_text[pos:]
        md_text = new_text
    
    # MDX cleanup
    md_text = fix_mdx(md_text)
    
    # Build new body: add imports/comments at the top
    new_body = []
    
    # SourceLink import
    if codehubs:
        new_body.append("import SourceLink from '@site/src/components/SourceLink';\n")
    
    # MergedTable note
    has_merged = bool(re.search(r'rowspan|colspan', html, re.IGNORECASE))
    if has_merged:
        new_body.append("{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用<MergedTable>组件还原 */}\n")
    
    new_body.append(md_text)
    
    # Write: frontmatter + \n + new_body
    new_content = frontmatter + "\n" + "\n".join(new_body)
    
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"  [OK] {len(new_content)} chars written")
    return True

def main():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    design_dir = os.path.join(base, "docs", "design")
    
    stubs = []
    for root, dirs, files in os.walk(design_dir):
        for f in files:
            if not f.endswith(".md") and not f.endswith(".mdx"):
                continue
            path = os.path.join(root, f)
            with open(path, "r", encoding="utf-8") as fh:
                content = fh.read()
            if "source_url" not in content:
                continue
            if content.count("---") >= 2:
                body = content.split("---", 2)[2].strip()
                if len(body) > 150 and not body.startswith("#"):
                    continue  # already has content
            stubs.append(path)
    
    print(f"Found {len(stubs)} stub files to fill\n")
    
    success = 0
    fail = 0
    for i, path in enumerate(stubs):
        rel = os.path.relpath(path, base)
        print(f"[{i+1}/{len(stubs)}] {rel}")
        try:
            if convert_doc(path):
                success += 1
            else:
                fail += 1
        except Exception as e:
            print(f"  [ERROR] {e}")
            fail += 1
        time.sleep(0.3)
    
    print(f"\nDone: {success} OK, {fail} failed (out of {len(stubs)})")

if __name__ == "__main__":
    main()
