#!/usr/bin/env python3
"""搬迁体验建议内容：harmonyos-guides catalog"""
import os, re, json, sys, time, urllib.request, urllib.error

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://developer.huawei.com/",
    "Origin": "https://developer.huawei.com",
}

# ── Mapping: sidebar path → objectId ──────────────────────────────────
# Key = last segment of sidebar doc ID path
# Value = objectId for the getDocumentById API call
OBJECT_ID_MAP = {
    # Top-level
    "experience-suggestions-overview": "experience-suggestions-overview",
    "experience-suggestions-stability": "experience-suggestions-stability",
    "experience-suggestions-ux": "experience-suggestions-ux",
    # 兼容性
    "compatibility-overview": "compatibility-overview",
    "general-specifications": "general-specifications",
    "app-specifications": "app-specifications",
    "atomic-specifications": "atomic-specifications",
    "widget-specifications": "widget-specifications",
    "distributed-capability-specification": "distributed-capability-specification",
    "audio-specification": "audio-specification",
    "display-specification": "display-specification",
    "protocol-specification": "protocol-specification",
    "os-compatible": "os-compatible",
    "upgrade-compatible": "upgrade-compatible",
    "device-compatible": "device-compatible",
    # 性能
    "performance-overview": "performance-overview",
    "performance-delay": "performance-delay",
    "performance-frame-rate": "performance-frame-rate",
    "performance-content-display": "performance-content-display",
    "performance-memory-usage": "performance-memory-usage",
    "performance-cpu-usage": "performance-cpu-usage",
    # 功耗
    "app-power-experience-standards-overview": "app-power-experience-standards-overview",
    "standard-background-task": "standard-background-task",
    "standard-background-hardware": "standard-background-hardware",
    "standard-background-software": "standard-background-software",
    "standard-foreground-frame-rate": "standard-foreground-frame-rate",
    "standard-foreground-render": "standard-foreground-render",
    "standard-foreground-resource": "standard-foreground-resource",
    # 安全隐私
    "standard-security-privacy-overview": "standard-security-privacy-overview",
    "standard-security-base": "standard-security-base",
    "standard-security-debug": "standard-security-debug",
    "standard-security-release": "standard-security-release",
    "standard-security-update": "standard-security-update",
    "standard-security-maintain": "standard-security-maintain",
    "standard-security-realize": "standard-security-realize",
    "standard-privacy-policy": "standard-privacy-policy",
    "standard-privacy-user-consent": "standard-privacy-user-consent",
    "standard-privacy-collect-use": "standard-privacy-collect-use",
    "standard-privacy-permission": "standard-privacy-permission",
    "standard-privacy-ad-identifier": "standard-privacy-ad-identifier",
    "standard-privacy-deregister": "standard-privacy-deregister",
    "standard-pure-notice": "standard-pure-notice",
    "standard-pure-mislead": "standard-pure-mislead",
    "standard-pure-occupy": "standard-pure-occupy",
    "standard-pure-retain": "standard-pure-retain",
    "standard-pure-tampering": "standard-pure-tampering",
    "standard-pure-others": "standard-pure-others",
}

def fetch_doc(object_id):
    body = json.dumps({"objectId": object_id, "version": "", "catalogName": "harmonyos-guides", "language": "cn"}).encode("utf-8")
    req = urllib.request.Request(API_URL, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))

def fix_mdx(text):
    lines = text.split("\n")
    result = []
    in_code = False
    for line in lines:
        if line.startswith("```"):
            in_code = not in_code
            result.append(line)
            continue
        if in_code:
            result.append(line)
            continue
        parts = re.split(r'(`[^`]*`)', line)
        proc = []
        for p in parts:
            if p.startswith("`") and p.endswith("`"):
                proc.append(p)
            else:
                p = p.replace("{", "&#123;").replace("}", "&#125;")
                p = re.sub(r'<(?!([a-zA-Z/][a-zA-Z0-9_]*|!--|https?://|/\w+)\s*[/>])', '&lt;', p)
                proc.append(p)
        result.append("".join(proc))
    return "\n".join(result)

def convert_file(md_path):
    # Read existing frontmatter
    with open(md_path, "r", encoding="utf-8") as f:
        raw = f.read()
    
    # Parse frontmatter
    parts = raw.split("---", 2)
    if len(parts) < 3:
        print(f"  [SKIP] no frontmatter")
        return False
    
    fm_text = "---" + parts[1] + "---"
    old_body = parts[2].strip()
    
    # Check if stub (body is just a heading + possibly source line)
    if len(old_body) > 150 and not old_body.startswith("#"):
        print(f"  [SKIP] already has content")
        return False
    
    # Extract title from frontmatter
    title_match = re.search(r'title:\s*"([^"]+)"', fm_text)
    title = title_match.group(1) if title_match else ""
    
    # Determine objectId from filename
    fname = os.path.splitext(os.path.basename(md_path))[0]
    object_id = OBJECT_ID_MAP.get(fname)
    if not object_id:
        print(f"  [SKIP] no object_id mapping for {fname}")
        return False
    
    source_url = f"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/{object_id}"
    
    # Fetch content
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
    
    # Clean HW-CC signed params
    html = re.sub(r'\?HW-CC-[^"\'\\]*', '', html)
    
    # Save temp file and run markitdown
    import tempfile
    from markitdown import MarkItDown
    with tempfile.NamedTemporaryFile(mode="w", suffix=".html", delete=False, encoding="utf-8") as ftmp:
        ftmp.write(html)
        tmp_path = ftmp.name
    try:
        md_converter = MarkItDown()
        result = md_converter.convert(tmp_path)
        md_text = result.text_content
    except Exception as e:
        print(f"  [ERROR] markitdown: {e}")
        os.unlink(tmp_path)
        return False
    finally:
        os.unlink(tmp_path)
    
    if len(md_text.strip()) < 50:
        print(f"  [WARN] minimal content ({len(md_text)} chars)")
    
    # Fix titles: [h2] → ##, others (h4) → ###
    lines = md_text.split("\n")
    fixed = []
    for line in lines:
        if line.startswith("# "):
            fixed.append(line)
        elif "[h2]" in line:
            fixed.append(line.replace("[h2]", "").replace("####", "##"))
        else:
            fixed.append(line.replace("####", "###"))
    md_text = "\n".join(fixed)
    
    # Extract codehub and insert SourceLink
    codehubs = []
    for m in re.finditer(r'<pre[^>]*codehub="([^"]*)"[^>]*>(.*?)</pre>', html, re.DOTALL):
        url = m.group(1)
        code = m.group(2).replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")
        fn = url.split("/")[-1].split("#")[0]
        codehubs.append({"url": url, "filename": fn, "code": code})
    
    if codehubs:
        blocks = [m for m in re.finditer(r'```(\w*)\n(.*?)```', md_text, re.DOTALL)]
        match_map = {}
        for hi, hub in enumerate(codehubs):
            fp = hub["code"].strip()[:80]
            for mi, blk in enumerate(blocks):
                if mi in match_map: continue
                if blk.group(2).strip()[:80] == fp:
                    match_map[mi] = hub
                    break
        for mi, hub in sorted(match_map.items(), reverse=True):
            pos = blocks[mi].end()
            link = f'\n<SourceLink name="{hub["filename"]}" url="{hub["url"]}" />'
            md_text = md_text[:pos] + link + md_text[pos:]
    
    # MDX cleanup
    md_text = fix_mdx(md_text)
    
    # Build new body: imports + comments + content
    new_body = []
    if codehubs:
        new_body.append("import SourceLink from '@site/src/components/SourceLink';\n")
    
    has_merged = bool(re.search(r'rowspan|colspan', html, re.IGNORECASE))
    if has_merged:
        new_body.append("import MergedTable from '@site/src/components/MergedTable';\n")
        new_body.append("{/* TODO: 含合并单元格的表格已降级为标准Markdown表格，建议使用<MergedTable>组件还原 */}\n")
    
    new_body.append(md_text)
    
    # Rebuild frontmatter with source_url
    new_fm_lines = ["---"]
    if title:
        new_fm_lines.append(f'title: "{title}"')
    new_fm_lines.append(f"source_url: {source_url}")
    new_fm_lines.append("---")
    new_fm = "\n".join(new_fm_lines)
    
    new_content = new_fm + "\n\n" + "\n".join(new_body)
    
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"  [OK] {len(new_content)} chars written")
    return True

def main():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    exp_dir = os.path.join(base, "docs", "experience-suggestions")
    
    files = sorted(os.path.join(dp, f) for dp, dn, filenames in os.walk(exp_dir) for f in filenames if f.endswith(".md"))
    
    # Filter to stub files (no source_url in frontmatter)
    stubs = []
    for path in files:
        with open(path, "r", encoding="utf-8") as fh:
            content = fh.read()
        if "source_url" in content:
            continue
        # Check if stub
        if content.count("---") >= 2:
            body = content.split("---", 2)[2].strip()
            if len(body) > 150 and not body.startswith("#"):
                continue
        stubs.append(path)
    
    print(f"Found {len(stubs)} stub files to fill\n")
    
    success = 0
    for i, path in enumerate(stubs):
        rel = os.path.relpath(path, base)
        print(f"[{i+1}/{len(stubs)}] {rel}")
        try:
            if convert_file(path):
                success += 1
        except Exception as e:
            print(f"  [ERROR] {e}")
        time.sleep(0.3)
    
    print(f"\nDone: {success}/{len(stubs)} succeeded")

if __name__ == "__main__":
    main()
