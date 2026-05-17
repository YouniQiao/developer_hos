#!/usr/bin/env python3
"""
基于 catalog tree 生成 AppGallery Connect 目录结构和占位 MD 文件
只生成标题 + frontmatter，不抓取完整内容
"""
import json
import re
from pathlib import Path

CACHE_FILE = Path("/tmp/app_catalog_tree.json")
OUTPUT_DIR = Path("/Users/hhxi/developer_hos/docs/distribute/agc")
SKIP_RD = "agc-help-started-0000002235826560"

# ── 加载 catalog tree ────────────────────────────
with open(CACHE_FILE) as f:
    data = json.load(f)

tree = data.get('value', {}).get('catalogTreeList', [])

agc_node = None
for node in tree:
    if 'HarmonyOS 5' in node.get('nodeName', ''):
        agc_node = node
        break

if not agc_node:
    print("❌ 未找到目标节点")
    exit(1)

print(f"目标节点: {agc_node['nodeName']}")

# ── 递归收集所有有 RD 的节点 ────────────────────
all_docs = []

def safe_name(name):
    name = re.sub(r'^\d+[-_]', '', name)
    if name and name[0] in '-_':
        name = 'x' + name
    return name or 'untitled'

def collect_docs(node, parent_rd=None, depth=0, path_parts=None):
    """收集文档并计算路径"""
    if path_parts is None:
        path_parts = []
    
    rd = node.get('relateDocument', '')
    name = node.get('nodeName', '')
    children = node.get('children', [])
    
    if rd:
        if rd == SKIP_RD:
            # 跳过顶层文件，但仍处理其子节点
            for child in children:
                collect_docs(child, parent_rd=None, depth=depth, path_parts=path_parts)
            return
        
        all_docs.append({
            'name': name,
            'rd': rd,
            'parent_rd': parent_rd,
            'depth': depth,
            'has_children': bool(children),
            'path_parts': list(path_parts),
        })
        
        if children:
            new_parts = path_parts + [rd]
            for child in children:
                collect_docs(child, parent_rd=rd, depth=depth+1, path_parts=new_parts)
    elif children:
        for child in children:
            collect_docs(child, parent_rd=parent_rd, depth=depth, path_parts=path_parts)

# ── 遍历 ──────────────────────────────────────
for child in agc_node.get('children', []):
    collect_docs(child, parent_rd=None, depth=0)

print(f"文档总数: {len(all_docs)}")

# ── 清理旧内容 ────────────────────────────────
import shutil
if OUTPUT_DIR.exists():
    for item in list(OUTPUT_DIR.iterdir()):
        if item.name in ('.gitkeep',):
            continue
        if item.is_dir():
            shutil.rmtree(item)
        else:
            item.unlink()
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# ── 生成 MD 文件 ──────────────────────────────
# 文件路径规则：
#   - 直接子节点（parent_rd=None）：agc/{rd}.md
#   - 子节点（有 parent_rd）：agc/{parent_rd}/{rd}.md
#   - 有子节点的非叶子节点：先创建目录，自身内容放 agc/{rd}/{rd}.md

created = 0
for doc in all_docs:
    rd = doc['rd']
    name = doc['name']
    
    # 确定文件路径
    if doc['has_children']:
        # 非叶子：自身是目录，内容放在 {rd}/{rd}.md
        file_path = OUTPUT_DIR / rd / f"{rd}.md"
    elif doc['parent_rd']:
        # 叶子，有父节点
        file_path = OUTPUT_DIR / doc['parent_rd'] / f"{rd}.md"
    else:
        # 叶子，直接子节点
        file_path = OUTPUT_DIR / f"{rd}.md"
    
    file_path.parent.mkdir(parents=True, exist_ok=True)
    
    # 生成 frontmatter + 标题
    safe_title = name.replace('"', "'")
    upstream_url = f"https://developer.huawei.com/consumer/cn/doc/app/{rd}"
    
    content = f"""---
title: "{safe_title}"
original_url: {upstream_url}
---

# {name}
"""
    file_path.write_text(content, encoding='utf-8')
    created += 1

print(f"MD 文件: {created}")

# ── 生成 _category_.json ──────────────────────
# 构建 rd → nodeName 映射
rd_to_name = {}
def map_names(node):
    rd = node.get('relateDocument', '')
    if rd:
        rd_to_name[rd] = node.get('nodeName', '')
    for child in node.get('children', []):
        map_names(child)

for child in agc_node.get('children', []):
    map_names(child)

# 收集哪些目录需要 _category_.json
dirs_needed = set()
for doc in all_docs:
    if doc['has_children']:
        dirs_needed.add(doc['rd'])

cat_count = 0
for rd in sorted(dirs_needed):
    label = rd_to_name.get(rd, rd)
    dir_path = OUTPUT_DIR / rd
    cat_file = dir_path / "_category_.json"
    cat_content = {"label": label, "collapsed": True}
    cat_file.write_text(json.dumps(cat_content, ensure_ascii=False, indent=2), encoding='utf-8')
    cat_count += 1

print(f"_category_.json: {cat_count}")

# ── 保留 overview.md 占位 ─────────────────────
overview = OUTPUT_DIR / "overview.md"
if not overview.exists():
    overview.write_text("""---
title: "AppGallery Connect"
sidebar_position: 1
---

# AppGallery Connect

AppGallery Connect 为开发者提供一站式应用服务。
""", encoding='utf-8')

# ── 统计 ──────────────────────────────────────
md_count = len(list(OUTPUT_DIR.rglob("*.md")))
print(f"\n✅ 完成！共 {md_count} 个 MD 文件")
print(f"输出目录: {OUTPUT_DIR}")
