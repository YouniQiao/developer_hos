#!/usr/bin/env python3
"""
检查文档中所有内部链接（相对路径 / 绝对路径 / MD 引用）的可访问性。

用法:
    python3 scripts/check_internal_links.py

输出:
    reports/internal_broken_links.csv
"""

import re
import csv
import os
from pathlib import Path
from collections import defaultdict, Counter

DOCS_DIR = Path(__file__).resolve().parent.parent / "docs"
REPORT_DIR = Path(__file__).resolve().parent.parent / "reports"

# ── Markdown 链接: [text](url) ──
MD_LINK = re.compile(r'\[([^\]]*)\]\(([^)]+)\)')
# ── HTML <a href="..."> ──
HTML_LINK = re.compile(r'href=["\']([^"\']+)["\']')
# ── Markdown 图片: ![alt](url) ──
MD_IMG = re.compile(r'!\[([^\]]*)\]\(([^)]+)\)')
# ── HTML <img src="..."> ──
HTML_IMG = re.compile(r'src=["\']([^"\']+)["\']')
# ── Docusaurus import: import X from '@site/...' ──
IMPORT_SITE = re.compile(r"""from\s+['"]@site/([^'"]+)['"]""")
# ── Docusaurus doc reference in MDX: {type: 'doc', id: '...'} ──
DOC_ID = re.compile(r"""id:\s*['"]([^'"]+)['"]""")

SKIP_PREFIXES = (
    'http://', 'https://', 'mailto:', 'tel:', '#', 'javascript:',
    'data:', 'ftp://',
)

def resolve_link(source_file: Path, link: str) -> Path | None:
    """将链接解析为实际文件路径，如果可以的话。返回 None 表示外部链接或无法解析。"""
    # 去掉锚点
    if '#' in link:
        link = link.split('#')[0]
    # 去掉查询参数
    if '?' in link:
        link = link.split('?')[0]
    
    link = link.strip()
    if not link:
        return None
    
    # 外部链接跳过
    for prefix in SKIP_PREFIXES:
        if link.lower().startswith(prefix):
            return None
    
    source_dir = source_file.parent
    
    # 绝对路径（相对于 docs/）
    if link.startswith('/docs/'):
        rel = link[len('/docs/'):]
        return DOCS_DIR / rel
    if link.startswith('/'):
        # 非 /docs/ 开头的绝对路径，可能指向 src/ 或其他
        return None
    
    # 相对路径
    resolved = (source_dir / link).resolve()
    
    # 确保在 docs 目录下
    try:
        resolved.relative_to(DOCS_DIR)
    except ValueError:
        return None
    
    return resolved


def check_file_exists(link_path: Path) -> tuple[bool, Path | None]:
    """检查链接指向的文件是否存在。支持 .md/.mdx 省略后缀。"""
    if link_path.exists():
        return True, link_path
    
    # 尝试加 .md
    md_path = link_path.with_suffix(link_path.suffix + '.md')
    if md_path.exists():
        return True, md_path
    # 如果已经是 .md 结尾，尝试替换为 .mdx
    if link_path.suffix == '.md':
        mdx_path = link_path.with_suffix('.mdx')
        if mdx_path.exists():
            return True, mdx_path
    
    # 尝试直接加 .md
    plain_md = Path(str(link_path) + '.md')
    if plain_md.exists():
        return True, plain_md
    plain_mdx = Path(str(link_path) + '.mdx')
    if plain_mdx.exists():
        return True, plain_mdx
    
    # 如果指向目录，尝试 index.md / index.mdx
    if link_path.is_dir():
        for idx in ['index.md', 'index.mdx', 'README.md']:
            idx_path = link_path / idx
            if idx_path.exists():
                return True, idx_path
    
    return False, None


def main():
    print(f"📂 扫描 docs/ 目录...")
    all_files = list(DOCS_DIR.rglob('*.md')) + list(DOCS_DIR.rglob('*.mdx'))
    print(f"   找到 {len(all_files)} 个文件")
    
    # 建立文件存在性索引（加速查询）
    file_set = set()
    for f in all_files:
        file_set.add(f)
    
    broken = []  # [(source_file, line, link_text, link_url, reason)]
    checked = 0
    
    for idx, filepath in enumerate(all_files):
        try:
            content = filepath.read_text(encoding='utf-8', errors='ignore')
            lines = content.split('\n')
        except:
            continue
        
        for i, line in enumerate(lines, 1):
            # 提取所有类型的链接
            links_found = []
            
            # Markdown 链接
            for m in MD_LINK.finditer(line):
                url = m.group(2)
                if url.startswith(('http://', 'https://', 'mailto:', '#', 'tel:')):
                    continue
                links_found.append((m.group(2), m.group(1), 'md_link'))
            
            # Markdown 图片
            for m in MD_IMG.finditer(line):
                url = m.group(2)
                if url.startswith(('http://', 'https://', 'data:')):
                    continue
                links_found.append((url, m.group(1), 'md_img'))
            
            # HTML 链接
            for m in HTML_LINK.finditer(line):
                url = m.group(1)
                if url.startswith(('http://', 'https://', 'mailto:', '#', 'javascript:', 'tel:')):
                    continue
                links_found.append((url, '', 'html_link'))
            
            # HTML 图片
            for m in HTML_IMG.finditer(line):
                url = m.group(1)
                if url.startswith(('http://', 'https://', 'data:')):
                    continue
                links_found.append((url, '', 'html_img'))
            
            for url, text, link_type in links_found:
                checked += 1
                target = resolve_link(filepath, url)
                if target is None:
                    continue
                
                exists, actual = check_file_exists(target)
                if not exists:
                    rel_path = filepath.relative_to(DOCS_DIR.parent)
                    broken.append({
                        'file': str(rel_path),
                        'line': i,
                        'link_url': url[:200],
                        'link_text': text[:100],
                        'link_type': link_type,
                        'resolved_path': str(target.relative_to(DOCS_DIR.parent)),
                    })
        
        if (idx + 1) % 2000 == 0:
            print(f"   处理中... {idx + 1}/{len(all_files)} 文件，已发现 {len(broken)} 个断裂链接")
    
    # ── 输出 ──
    REPORT_DIR.mkdir(exist_ok=True)
    
    broken_csv = REPORT_DIR / "internal_broken_links.csv"
    with open(broken_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['file', 'line', 'link_url', 'link_type', 'resolved_path', 'link_text'])
        for b in sorted(broken, key=lambda x: (x['file'], x['line'])):
            writer.writerow([b['file'], b['line'], b['link_url'], b['link_type'], b['resolved_path'], b['link_text']])
    
    # ── 汇总 ──
    print(f"\n═══ 汇总 ═══")
    print(f"   总文件:         {len(all_files)}")
    print(f"   检查的内部链接: {checked}")
    print(f"   断裂链接:       {len(broken)}")
    
    # 去重统计
    unique_broken = set((b['file'], b['link_url']) for b in broken)
    print(f"   去重后:         {len(unique_broken)}")
    
    # 按文件
    file_counts = Counter(b['file'] for b in broken)
    print(f"\n   受影响最多的文件 (Top 20):")
    for f, c in file_counts.most_common(20):
        print(f"     [{c:4d}] {f}")
    
    # 按目录
    dirs = Counter()
    for b in broken:
        parts = b['file'].split('/')
        if len(parts) >= 3:
            dirs['/'.join(parts[:3])] += 1
    print(f"\n   按目录:")
    for d, c in dirs.most_common(15):
        print(f"     [{c:4d}] {d}")
    
    # 样例
    print(f"\n   断裂链接样例 (前20):")
    seen = set()
    count = 0
    for b in sorted(broken, key=lambda x: x['file']):
        key = (b['file'], b['link_url'])
        if key in seen:
            continue
        seen.add(key)
        count += 1
        if count > 20:
            break
        print(f"     {b['file']}:{b['line']} → {b['link_url'][:100]}")
    
    print(f"\n📊 报告: {broken_csv}")
    return broken


if __name__ == '__main__':
    main()
