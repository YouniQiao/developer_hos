#!/usr/bin/env python3
"""
批量修复文档中 #section... 锚点链接。

流程：
1. 扫描所有 .md/.mdx，收集带 #section 锚点的内部链接
2. 按目标页面分组，通过华为 API 获取原始 HTML
3. 解析 section ID → 标题 映射
4. 生成 Docusaurus 锚点（github-slugger 算法）
5. 批量替换所有文件

用法:
    python3 scripts/fix_section_anchors.py
    python3 scripts/fix_section_anchors.py --dry-run   # 仅分析，不修改
"""

import re
import json
import time
import csv
import sys
from pathlib import Path
from collections import defaultdict, Counter
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

DOCS_DIR = Path(__file__).resolve().parent.parent / "docs"
REPORT_DIR = Path(__file__).resolve().parent.parent / "reports"
CACHE_FILE = REPORT_DIR / "section_mapping_cache.json"

API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (compatible; HermesBot/1.0)',
    'Content-Type': 'application/json',
}

MD_LINK = re.compile(r'\[([^\]]*)\]\(([^)]+)\)')

# ══════════════════════════════════════════════════════════════════
# Docusaurus Anchor Generation (github-slugger compatible)
# ══════════════════════════════════════════════════════════════════

def docusaurus_anchor(heading_text: str) -> str:
    """将标题文本转为 Docusaurus/github-slugger 风格的锚点 ID。"""
    # Step 1: 转为小写（对中文无影响）
    slug = heading_text.lower().strip()
    
    # Step 2: 保留 Unicode 单词字符（含中文）、空格、连字符；其他转空格
    # github-slugger: 非单词字符 → ''，但保留 emoji 等
    # Docusaurus 行为：移除标点，空格→连字符
    slug = re.sub(r'[^\w\s-]', '', slug, flags=re.UNICODE)
    
    # Step 3: 空格和连续空格 → 单个连字符
    slug = re.sub(r'[\s]+', '-', slug)
    
    # Step 4: 去头尾连字符
    slug = slug.strip('-')
    
    # Step 5: 去重后缀由调用者处理
    return slug


# ══════════════════════════════════════════════════════════════════
# Step 1: 收集所有带 #section 锚点的内部链接
# ══════════════════════════════════════════════════════════════════

def collect_section_links() -> dict[str, list[dict]]:
    """
    扫描所有文件，收集 #section 锚点引用。
    返回: {target_page_path: [{source_file, line, full_url, link_text, anchor}, ...]}
    """
    print("📂 扫描文档中的 #section 锚点...")
    by_target = defaultdict(list)
    total = 0

    for md_file in sorted(DOCS_DIR.rglob('*.md')) + sorted(DOCS_DIR.rglob('*.mdx')):
        try:
            content = md_file.read_text(encoding='utf-8', errors='ignore')
        except:
            continue
        lines = content.split('\n')
        for i, line in enumerate(lines, 1):
            for m in MD_LINK.finditer(line):
                url = m.group(2)
                if '#section' not in url:
                    continue
                if url.startswith(('http://', 'https://')):
                    continue

                # 分离页面路径和锚点
                page_path, anchor = url.split('#', 1) if '#' in url else (url, '')
                if not anchor.startswith('section'):
                    continue

                # 标准化页面路径
                page_path = page_path.split('?')[0]
                if page_path.startswith('/docs/'):
                    rel = page_path[len('/docs/'):]
                elif page_path.startswith('./'):
                    # 相对路径，解析
                    rel = str((md_file.parent / page_path).resolve().relative_to(DOCS_DIR))
                else:
                    continue

                rel_source = str(md_file.relative_to(DOCS_DIR.parent))
                by_target[rel].append({
                    'source': rel_source,
                    'line': i,
                    'full_url': url,
                    'link_text': m.group(1)[:100],
                    'anchor': anchor,
                })
                total += 1

    unique_targets = len(by_target)
    print(f"   总引用: {total}")
    print(f"   目标页面: {unique_targets}")
    return by_target


# ══════════════════════════════════════════════════════════════════
# Step 2: 确定页面的 catalog_name
# ══════════════════════════════════════════════════════════════════

def guess_catalog(page_rel: str) -> str:
    """从相对路径推断 catalog_name。"""
    parts = page_rel.split('/')
    # 常见模式: monetize/promotion, distribute/agc, dev/app-dev 等
    if len(parts) >= 2:
        # 文件在如 monetize/promotion/xxx.md，catalog 可能就是一级或两级
        for depth in [2, 1]:
            candidate = '/'.join(parts[:depth])
            if candidate:
                return candidate
    return ''


# ══════════════════════════════════════════════════════════════════
# Step 3: 通过 API 获取 section 映射
# ══════════════════════════════════════════════════════════════════

def fetch_section_mapping(page_rel: str) -> dict[str, str] | None:
    """通过华为 API 获取页面的 section ID → heading 映射。"""
    # 提取 object_id（文件名去后缀）
    filename = page_rel.split('/')[-1]
    object_id = filename.replace('.mdx', '').replace('.md', '')

    # 只处理带华为数字 ID 的页面
    if not re.search(r'-\d{13,}', object_id):
        return None

    # 检查缓存
    cache = load_cache()
    if object_id in cache:
        return cache[object_id]

    # 尝试不同的 catalog_name（前缀路径 + 各层级单独尝试）
    parts = page_rel.split('/')[:-1]  # 去掉文件名
    catalogs = []
    for depth in range(len(parts), 0, -1):
        catalogs.append('/'.join(parts[:depth]))
    # 也加单独每层
    for p in parts:
        if p not in catalogs:
            catalogs.append(p)
    catalogs.append('')
    catalogs = list(dict.fromkeys(catalogs))  # 去重保持顺序

    for catalog in catalogs:
        try:
            resp = httpx.post(
                f"{API}/getDocumentById",
                json={"objectId": object_id, "version": "", "catalogName": catalog, "language": "cn"},
                headers=HEADERS, timeout=20,
            )
            data = resp.json()
            if data.get("code") != 0 and not data.get("value"):
                continue
            break
        except Exception:
            continue
    else:
        print(f"   ❌ API 失败: {object_id}")
        return None

    html = data.get("value", {}).get("content", {}).get("content", "")
    if not html:
        return None

    # 解析 section ID → heading
    soup = BeautifulSoup(html, 'html.parser')
    sections = soup.find_all(id=re.compile(r'^section\d+'))
    
    mapping = {}
    for sec in sections:
        sec_id = sec.get('id')
        heading = sec.find(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        if heading:
            heading_text = heading.get_text(strip=True)
            mapping[sec_id] = heading_text
        else:
            prev = sec.find_previous(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
            if prev:
                mapping[sec_id] = prev.get_text(strip=True)

    # 保存缓存
    cache[object_id] = mapping
    save_cache(cache)
    return mapping


def load_cache() -> dict:
    if CACHE_FILE.exists():
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def save_cache(cache: dict):
    REPORT_DIR.mkdir(exist_ok=True)
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)


# ══════════════════════════════════════════════════════════════════
# Step 4: 批量替换
# ══════════════════════════════════════════════════════════════════

def apply_replacements(replacements: dict[str, dict[str, str]], dry_run: bool = False) -> int:
    """
    在所有文件中执行锚点替换。
    replacements: {target_page_rel: {old_section_id: new_docusaurus_anchor}}
    """
    print(f"\n🔧 应用替换...")
    
    # 构建全文替换映射: old_anchor → new_anchor
    # 需要按页面区分，因为同一个 section ID 在不同页面可能映射不同
    anchor_map = {}  # "#old_section_id" → "#new_anchor"
    for page_rel, mapping in replacements.items():
        for old_id, new_anchor in mapping.items():
            anchor_map[f"#{old_id}"] = f"#{new_anchor}"

    if dry_run:
        print(f"   [DRY RUN] 将替换 {len(anchor_map)} 个锚点")
        for old, new in list(anchor_map.items())[:20]:
            print(f"   {old} → {new}")
        return 0

    fixed_files = 0
    for md_file in sorted(DOCS_DIR.rglob('*.md')) + sorted(DOCS_DIR.rglob('*.mdx')):
        try:
            content = md_file.read_text(encoding='utf-8', errors='ignore')
        except:
            continue
        
        new_content = content
        for old, new in anchor_map.items():
            new_content = new_content.replace(old, new)
        
        if new_content != content:
            md_file.write_text(new_content, encoding='utf-8')
            fixed_files += 1

    print(f"   修改了 {fixed_files} 个文件")
    return fixed_files


# ══════════════════════════════════════════════════════════════════
# Main
# ══════════════════════════════════════════════════════════════════

def main():
    dry_run = '--dry-run' in sys.argv

    # Step 1: 收集
    by_target = collect_section_links()

    # Step 2+3: 获取映射
    print(f"\n🌐 通过 API 获取 section 映射...")
    all_mappings = {}  # {target_page: {section_id: docusaurus_anchor}}
    success = 0
    failed = 0
    total_targets = len(by_target)

    for idx, (page_rel, refs) in enumerate(sorted(by_target.items())):
        print(f"   [{idx+1}/{total_targets}] {page_rel} ({len(refs)} 引用)...", end=' ')
        section_map = fetch_section_mapping(page_rel)
        
        if section_map is None:
            print("❌ 跳过")
            failed += 1
            continue
        
        # 转为 Docusaurus 锚点
        anchor_map = {}
        for sec_id, heading_text in section_map.items():
            anchor_map[sec_id] = docusaurus_anchor(heading_text)
        
        all_mappings[page_rel] = anchor_map
        print(f"✓ {len(anchor_map)} sections")
        success += 1

        # 速率控制
        if idx % 20 == 19:
            time.sleep(0.5)

    print(f"\n   成功: {success}, 失败: {failed}")

    # Step 4: 应用
    fixed = apply_replacements(all_mappings, dry_run=dry_run)

    # 统计
    print(f"\n═══ 汇总 ═══")
    print(f"   API 调用: {success} 成功 / {failed} 失败")
    print(f"   Section 映射: {sum(len(m) for m in all_mappings.values())}")
    print(f"   修改文件: {fixed}")
    
    if not dry_run:
        # 验证残留
        remaining = 0
        for f in DOCS_DIR.rglob('*.md'):
            if '#section' in f.read_text(encoding='utf-8', errors='ignore'):
                remaining += 1
        print(f"   残留 #section 的文件: {remaining}")


if __name__ == '__main__':
    start = time.time()
    main()
    print(f"\n⏱️  总耗时: {time.time() - start:.0f}s")
