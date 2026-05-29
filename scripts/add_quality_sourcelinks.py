#!/usr/bin/env python3
"""批量给quality板块的MD文件添加SourceLink。
从华为开发者API获取HTML，提取codehub属性，匹配代码块后插入SourceLink。
"""
import re
import json
import time
import os
import sys
import urllib.request
import urllib.error

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://developer.huawei.com/",
    "Origin": "https://developer.huawei.com",
}

def fetch_document(object_id):
    """通过API获取文档HTML内容"""
    body = json.dumps({
        "objectId": object_id,
        "version": "",
        "catalogName": "best-practices",
        "language": "cn"
    }).encode("utf-8")
    req = urllib.request.Request(API_URL, data=body, headers=HEADERS, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data
    except Exception as e:
        print(f"  [ERROR] API fetch failed: {e}")
        return None

def extract_codehub_blocks(html):
    """从HTML中提取所有带codehub属性的代码块。
    返回 [{codehub_url, code_content, filename}, ...]
    """
    results = []
    # 匹配 <pre ... codehub="URL">CODE</pre>
    pattern = re.compile(
        r'<pre[^>]*\scodehub="([^"]*)"[^>]*>(.*?)</pre>',
        re.DOTALL
    )
    for match in pattern.finditer(html):
        codehub_url = match.group(1)
        code_content = match.group(2)
        # HTML实体解码
        code_content = code_content.replace("&lt;", "<").replace("&gt;", ">")
        code_content = code_content.replace("&amp;", "&").replace("&quot;", '"')
        code_content = code_content.replace("&#39;", "'").replace("\\n", "\n")
        # 处理 \\ 转义（API返回的JSON中反斜杠被转义）
        code_content = code_content.replace("\\\\", "\\")
        # 提取文件名（从URL中）
        filename = codehub_url.split("/")[-1].split("#")[0] if "/" in codehub_url else codehub_url
        results.append({
            "codehub_url": codehub_url,
            "code_content": code_content,
            "filename": filename
        })
    return results

def normalize_code(text):
    """规范化代码用于匹配"""
    # 去除首尾空白，统一换行
    text = text.strip()
    # 取前80个非空字符作为匹配指纹（代码块开头通常唯一）
    lines = [l.strip() for l in text.split("\n") if l.strip()]
    return "\n".join(lines[:5])[:200]  # 前5行作为指纹

def extract_md_code_blocks(md_text):
    """从markdown中提取所有代码块。
    返回 [{start_pos, end_pos, content, lang}, ...]
    """
    results = []
    # 匹配 ```lang\nCODE\n```
    pattern = re.compile(r'```(\w*)\n(.*?)```', re.DOTALL)
    for match in pattern.finditer(md_text):
        lang = match.group(1) or ""
        code = match.group(2)
        results.append({
            "start": match.start(),
            "end": match.end(),
            "lang": lang,
            "code": code,
            "fingerprint": normalize_code(code)
        })
    return results

def add_source_links(md_path):
    """给单个MD文件添加SourceLink"""
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    # 提取source_url中的objectId
    source_match = re.search(r'source_url:\s*https://developer\.huawei\.com/consumer/cn/doc/best-practices/(\S+)', md_text)
    if not source_match:
        print(f"  [SKIP] 无 source_url")
        return False
    object_id = source_match.group(1).strip()

    # 已有SourceLink则跳过
    if "import SourceLink" in md_text and "<SourceLink" in md_text:
        print(f"  [SKIP] 已有 SourceLink")
        return False
    
    # 无代码块则跳过
    md_blocks = extract_md_code_blocks(md_text)
    if not md_blocks:
        print(f"  [SKIP] 无代码块")
        return False

    # 获取HTML
    print(f"  fetching {object_id}...")
    doc = fetch_document(object_id)
    if not doc:
        return False
    
    html = doc.get("value", {}).get("content", {}).get("content", "")
    if not html:
        print(f"  [ERROR] 无HTML内容")
        return False

    # 提取codehub代码块
    html_blocks = extract_codehub_blocks(html)
    if not html_blocks:
        print(f"  [INFO] 无 codehub 代码块")
        return False

    print(f"  HTML: {len(html_blocks)} codehub, MD: {len(md_blocks)} code blocks")

    # 匹配：对每个HTML代码块，在MD中找到匹配的代码块
    match_map = {}  # md_block_index -> html_block
    for hi, hb in enumerate(html_blocks):
        hb_fp = normalize_code(hb["code_content"])
        for mi, mb in enumerate(md_blocks):
            if mi in match_map:
                continue
            # 指纹匹配
            if hb_fp[:60] == mb["fingerprint"][:60] and hb_fp[:60]:
                match_map[mi] = hb
                break

    if not match_map:
        print(f"  [WARN] 无法匹配任何代码块")
        return False

    print(f"  matched {len(match_map)}/{len(html_blocks)} codehub blocks")

    # 从后往前插入SourceLink（避免位置偏移）
    insertions = []
    for mi, hb in sorted(match_map.items()):
        mb = md_blocks[mi]
        insert_pos = mb["end"]  # 在 ``` 之后
        source_link = f'\n<SourceLink name="{hb["filename"]}" url="{hb["codehub_url"]}" />'
        insertions.append((insert_pos, source_link))

    # 用字符串拼接方式插入（从后往前）
    new_text = md_text
    for pos, text in sorted(insertions, reverse=True):
        new_text = new_text[:pos] + text + new_text[pos:]
    
    # 如果没有import，添加import
    if "import SourceLink" not in new_text:
        # 在frontmatter闭标签后添加
        fm_end = new_text.find("---\n", 4)  # 跳过第一个---
        if fm_end > 0:
            fm_end += 4  # 跳过 ---\n
            import_line = '\nimport SourceLink from \'@site/src/components/SourceLink\';\n'
            new_text = new_text[:fm_end] + import_line + new_text[fm_end:]

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(new_text)
    
    print(f"  [OK] inserted {len(match_map)} SourceLinks")
    return True

def main():
    quality_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs", "quality")
    
    # 找到所有有代码块但无SourceLink的文件
    md_files = sorted(f for f in os.listdir(quality_dir) if f.endswith(".md"))
    todo = []
    for f in md_files:
        path = os.path.join(quality_dir, f)
        with open(path, "r") as fh:
            content = fh.read()
        has_code = "```" in content
        has_sl = "import SourceLink" in content or "<SourceLink" in content
        if has_code and not has_sl:
            todo.append(path)

    print(f"共 {len(md_files)} 个MD文件，{len(todo)} 个需要处理\n")

    success = 0
    for i, path in enumerate(todo):
        fname = os.path.basename(path)
        print(f"[{i+1}/{len(todo)}] {fname}")
        try:
            if add_source_links(path):
                success += 1
        except Exception as e:
            print(f"  [ERROR] {e}")
        time.sleep(0.5)  # 避免请求过快

    print(f"\n完成: {success}/{len(todo)} 成功")

if __name__ == "__main__":
    main()
