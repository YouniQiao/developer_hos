"""
Batch fetch & convert App Market content from Huawei API.
Maps API objectId → local x{objectId}.md files.
"""
import json, re, subprocess, os, urllib.request
from pathlib import Path

WORKDIR = "/Users/hhxi/developer_hos"
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
API_DOC = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
LOCAL_BASE = Path(WORKDIR) / "docs/distribute/app-dist/app-market"

# All objectIds in the App Market section (from catalog tree)
# Map: objectId -> local filename (without .md)
PAGES = {
    "50101": "x50101",       # 业务介绍 ✓ done
    "classify-1": "classify-1",     # 鸿蒙应用
    "ability-1": "ability-1",       # 鸿蒙元服务
    "50103": "x50103",             # 应用分类（HarmonyOS 3.1/4.0及以下）
    "50104": "x50104",             # 应用审核指南
    "50129": "x50129",             # 元服务审核指南
    "80301": "x80301",             # 应用资质审核要求
    "80302": "x80302",             # 元服务资质审核要求
    "50109": "x50109",             # 开发者账号与应用处理原因及措施
    "50120": "x50120",             # 应用侵权投诉处理指引
    "50000-1": "x50000-1",         # 联系我们
    "50125": "x50125",             # 应用年龄分级标准
    "50130": "x50130",             # APP核准指引
    "50121": "x50121",             # 应用审核相关讲解课程
    "50170": "x50170",             # 应用审核Checklist
    "50106": "x50106",             # 应用审核FAQ
    "50118": "x50118",             # 游戏审核FAQ
    "50150": "x50150",             # 元服务审核FAQ
    "50142": "x50142",             # 应用年龄分级问卷FAQ
    "50166": "x50166",             # APP自动续费服务FAQ
    "privacy-label": "privacy-label",   # AppGallery隐私标签服务说明
    "50124": "x50124",             # 华为绿色应用认证指南
    "help-greenapp-faq": "help-greenapp-faq",   # 检测认证FAQ
    "50123": "x50123",             # 《软件绿色联盟应用体验标准5.0》
    "50113": "x50113",             # 华为终端质量检测和安全审查标准
    "50116": "x50116",             # 三方管家类应用软件质量检测
    "signing-guide": "signing-guide",     # 协议签署指南
    "20208": "x20208",             # 协议包
    # ... add more as needed
}

def clean_headings(md_text):
    """Fix heading levels: #### [h2]xxx -> ### xxx, #### xxx -> ## xxx"""
    lines = md_text.split('\n')
    fixed = []
    for line in lines:
        m = re.match(r'^####\s+\[h2\]\s*(.*)', line)
        if m:
            fixed.append('### ' + m.group(1))
            continue
        m = re.match(r'^####\s+(.*)', line)
        if m:
            fixed.append('## ' + m.group(1))
            continue
        fixed.append(line)
    return '\n'.join(fixed)

def clean_mdx(md_text):
    """Additional MDX cleanup: fix ### spacing, bold, URLs, etc."""
    # Fix ###Title -> ### Title
    md_text = re.sub(r'###([^ #\n])', r'### \1', md_text)
    return md_text

def fetch_and_convert(object_id, catalog="app"):
    """Fetch document from API and convert to MD."""
    req = urllib.request.Request(API_DOC,
        data=json.dumps({"objectId": object_id, "version": "", "catalogName": catalog, "language": "cn"}).encode(),
        headers={"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/"})
    resp = urllib.request.urlopen(req, timeout=30)
    data = json.loads(resp.read())
    html = data["value"]["content"]["content"]
    title = data["value"]["title"]
    
    # Save temp files
    tmp_html = f"/tmp/app_{object_id}.html"
    tmp_md = f"/tmp/app_{object_id}.md"
    with open(tmp_html, "w") as f:
        f.write(html)
    
    # Skip if HTML is empty (placeholder page)
    if len(html) < 200:
        return title, None, True  # empty
    
    # Convert
    subprocess.run([MARKITDOWN, tmp_html, "-o", tmp_md], check=True, capture_output=True)
    with open(tmp_md) as f:
        md = f.read()
    
    return title, md, False

def main():
    skipped = 0
    done = 0
    errors = 0
    empty = 0
    
    for object_id, local_name in PAGES.items():
        local_file = LOCAL_BASE / f"{local_name}.md"
        
        # Skip if already has content (>500 bytes)
        if local_file.exists() and local_file.stat().st_size > 500:
            skipped += 1
            continue
        
        if not local_file.exists():
            print(f"  ⚠ skipping: {local_name}.md not found")
            skipped += 1
            continue
        
        try:
            title, md, is_empty = fetch_and_convert(object_id)
            
            if is_empty:
                print(f"  ⊘ {local_name}: empty API response")
                empty += 1
                continue
            
            md = clean_headings(md)
            md = clean_mdx(md)
            
            # Read existing frontmatter
            with open(local_file) as f:
                old = f.read()
            
            # Extract frontmatter
            fm_match = re.match(r'(---\n.*?\n---)\n', old, re.DOTALL)
            if fm_match:
                frontmatter = fm_match.group(1)
                # Add original_url if missing
                if 'original_url' not in frontmatter:
                    frontmatter = frontmatter.rstrip('---\n').rstrip() + \
                        f'\noriginal_url: https://developer.huawei.com/consumer/cn/doc/app/{object_id}\n---'
            else:
                frontmatter = f'---\ntitle: "{title}"\noriginal_url: https://developer.huawei.com/consumer/cn/doc/app/{object_id}\n---'
            
            # Write new content
            new_content = frontmatter + '\n' + md
            with open(local_file, "w") as f:
                f.write(new_content)
            
            print(f"  ✓ {local_name}: {title} ({len(md)} chars)")
            done += 1
            
        except Exception as e:
            print(f"  ✗ {local_name}: {e}")
            errors += 1
    
    print(f"\nDone: {done} pages, Skipped: {skipped}, Empty: {empty}, Errors: {errors}")

if __name__ == "__main__":
    main()
