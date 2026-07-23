#!/usr/bin/env python3
"""Compare local design pages with Huawei latest content and report differences."""
import subprocess, json, os, re, hashlib
from bs4 import BeautifulSoup

API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/"}

LOCAL_DIR = "/Users/hhxi/developer_hos/docs/design"


def fetch_huawei_text(rd):
    """Fetch HTML from Huawei API and extract normalized text."""
    body = json.dumps({"objectId": rd, "version": "", "catalogName": "design-guides", "language": "cn"})
    result = subprocess.run(
        ["curl", "-s", API, "-H", f"Content-Type: application/json",
         "-H", f"Referer: {HEADERS['Referer']}", "-d", body],
        capture_output=True, text=True, timeout=30
    )
    data = json.loads(result.stdout)
    html = data["value"]["content"]["content"]
    soup = BeautifulSoup(html, 'html.parser')
    # Remove script/style
    for tag in soup(['script', 'style']):
        tag.decompose()
    text = soup.get_text()
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def local_normalized_text(filepath):
    """Read local MD, strip markdown formatting, return normalized text."""
    with open(filepath) as f:
        content = f.read()
    # Remove frontmatter
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            content = parts[2]
    # Remove markdown formatting
    text = content
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)  # links → text
    text = re.sub(r'!\[.*?\]\([^)]*\)', '', text)          # images → ""
    text = re.sub(r'[*_~`#>{}\[\]|]', ' ', text)           # formatting chars → space
    text = re.sub(r'\n+', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def build_mapping():
    """Build relateDocument → (local_slug, filepath) mapping."""
    # Get Huawei tree
    API_TREE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree"
    body = json.dumps({"catalogName": "design-guides", "language": "cn", "version": ""})
    result = subprocess.run(
        ["curl", "-s", API_TREE, "-H", f"Content-Type: application/json",
         "-H", f"Referer: {HEADERS['Referer']}", "-d", body],
        capture_output=True, text=True, timeout=30
    )
    data = json.loads(result.stdout)

    def flatten(nodes):
        result = []
        for n in nodes:
            rd = n.get("relateDocument", "")
            name = n.get("nodeName", "")
            if rd:
                result.append((name, rd, []))  # (nodeName, relateDocument, path)
            if n.get("children"):
                result.extend(flatten(n["children"]))
        return result

    hw_docs = flatten(data["value"]["catalogTreeList"])

    # Get local files with headings
    local_info = []
    for root, dirs, files in os.walk(LOCAL_DIR):
        for f in files:
            if not (f.endswith('.md') or f.endswith('.mdx')):
                continue
            fpath = os.path.join(root, f)
            rel = os.path.relpath(fpath, LOCAL_DIR)
            slug = rel.replace('.mdx', '').replace('.md', '')
            with open(fpath) as fh:
                content = fh.read()
            heading = None
            for line in content.split('\n'):
                m = re.match(r'^#\s+(.+)', line)
                if m:
                    heading = m.group(1).strip()
                    heading = re.sub(r'\s*\{.*\}\s*', '', heading)
                    break
            if heading:
                local_info.append((slug, fpath, heading))

    # Match by heading
    mapping = {}
    used_rd = set()
    for slug, fpath, heading in local_info:
        for name, rd, _ in hw_docs:
            if rd in used_rd:
                continue
            if heading == name or heading == f"智能座舱 — {name}":
                mapping[rd] = (slug, fpath, name)
                used_rd.add(rd)
                break

    return mapping


if __name__ == '__main__':
    mapping = build_mapping()
    print(f"匹配到 {len(mapping)} 个页面，开始比对...\n")

    changed = []
    unchanged = 0
    errors = 0

    for rd, (slug, fpath, name) in sorted(mapping.items()):
        try:
            hw_text = fetch_huawei_text(rd)
            local_text = local_normalized_text(fpath)

            # Compare by hash
            hw_hash = hashlib.md5(hw_text.encode()).hexdigest()
            local_hash = hashlib.md5(local_text.encode()).hexdigest()

            if hw_hash != local_hash:
                # Calculate diff ratio for severity
                shorter = min(len(hw_text), len(local_text))
                if shorter == 0:
                    ratio = 1.0
                else:
                    common = sum(1 for a, b in zip(hw_text, local_text) if a == b)
                    ratio = 1.0 - common / max(len(hw_text), len(local_text))
                
                size_diff = abs(len(hw_text) - len(local_text))
                changed.append((slug, name, rd, len(hw_text), len(local_text), ratio))
                print(f"  🔄 {name} ({slug}) — 华为{len(hw_text)}字 vs 本地{len(local_text)}字, 差异度{ratio:.1%}")
            else:
                unchanged += 1
                print(f"  ✅ {name}")
        except Exception as e:
            errors += 1
            print(f"  ❌ {name} ({rd}): {e}")

    print(f"\n=== 结果汇总 ===")
    print(f"未变化: {unchanged}")
    print(f"有更新: {len(changed)}")
    print(f"出错: {errors}")

    if changed:
        print(f"\n--- 需要更新的页面 ---")
        # Sort by diff ratio descending
        changed.sort(key=lambda x: x[5], reverse=True)
        for slug, name, rd, hw_len, local_len, ratio in changed:
            print(f"  {name} ({slug}) — 差异度{ratio:.1%} | {hw_len}→{local_len}字")
