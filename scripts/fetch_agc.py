#!/usr/bin/env python3
"""
抓取 AppGallery Connect（HarmonyOS 5及以上）文档到 developer_hos
- catalog: app
- 只取 "AppGallery Connect（HarmonyOS 5及以上）" 节点及其子内容
- 跳过顶层文件 agc-help-started-0000002235826560
- 输出到 docs/distribute/agc/
"""
import asyncio
import json
import os
import re
import sys
import html as html_module
from pathlib import Path

import aiohttp
from bs4 import BeautifulSoup
from markdownify import markdownify as md_convert

# ── 配置 ──────────────────────────────────────────────
CATALOG_NAME = "app"
OBJECT_ID = "50101"
BASE_API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
OUTPUT_DIR = Path("/Users/hhxi/developer_hos/docs/distribute/agc")
CACHE_FILE = Path("/tmp/agc_catalog_tree.json")
CONCURRENCY = 15
SKIP_RD = "agc-help-started-0000002235826560"  # 顶层文件，不要

HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/app/agc-help-started-0000002235826560",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
}

# ── 工具函数 ──────────────────────────────────────────

def safe_name(name: str) -> str:
    """处理目录名，避免以数字/特殊字符开头"""
    # 移除数字前缀
    name = re.sub(r'^\d+[-_]', '', name)
    if name and name[0] in '-_':
        name = 'x' + name
    if not name:
        name = 'untitled'
    # 替换不安全的文件名字符
    name = re.sub(r'[<>:"/\\|?*]', '-', name)
    return name

def html_to_md(html_content: str) -> str:
    """HTML → Markdown 转换"""
    soup = BeautifulSoup(html_content, 'lxml')
    
    # 移除空锚点
    for tag in soup.find_all('a', attrs={'name': True}):
        if not tag.get_text(strip=True) and not tag.get('href'):
            tag.decompose()
    
    # 移除空 p 标签
    for p in soup.find_all('p'):
        if not p.get_text(strip=True) and not p.find('img'):
            p.decompose()
    
    # 移除注释
    for comment in soup.find_all(string=lambda t: isinstance(t, type(soup.find('').string)) and str(t).startswith('<!--')):
        comment.extract()
    
    html_str = str(soup)
    
    # markdownify 转换
    md = md_convert(html_str, heading_style="ATX", bullets="-", strong_em_symbol="**", strip=["script", "style"])
    
    # 后处理
    # 修复 heading 级别
    lines = md.split('\n')
    new_lines = []
    for line in lines:
        # #### [h2]xxx → ### xxx
        m = re.match(r'^####\s+\[h([1-6])\]\s*(.*)', line)
        if m:
            new_level = int(m.group(1)) + 1
            new_lines.append('#' * new_level + ' ' + m.group(2))
            continue
        # #### xxx (no marker) → ## xxx
        m = re.match(r'^####\s+(.*)', line)
        if m:
            new_lines.append('## ' + m.group(1))
            continue
        new_lines.append(line)
    md = '\n'.join(new_lines)
    
    # 折叠连续空行
    md = re.sub(r'\n{4,}', '\n\n\n', md)
    md = md.strip()
    
    # 转义 MDX 不兼容的括号
    # 保护 code block
    parts = re.split(r'(```[\s\S]*?```)', md)
    for i in range(0, len(parts), 2):  # 只处理非 code block 部分
        # 保护已有的 markdown 链接和图片
        # 对裸 { } 进行转义
        parts[i] = re.sub(r'(?<!\\)\{(?!\s*[#%]|\s*code|\s*label)', r'\\{', parts[i])
        parts[i] = re.sub(r'(?<!\\)\}(?!\s*[#%]|\s*code)', r'\\}', parts[i])
    md = ''.join(parts)
    
    return md

def generate_frontmatter(title: str, original_url: str) -> str:
    """生成 frontmatter"""
    # 处理标题中的特殊字符
    safe_title = title.replace('"', "'")
    return f"""---
title: "{safe_title}"
original_url: {original_url}
---
"""

# ── 构建文档列表 ─────────────────────────────────────

def build_doc_list():
    """从 catalog tree 构建文档列表，返回 [(nodeName, relateDocument, parent_rd, depth, is_leaf), ...]"""
    if not CACHE_FILE.exists():
        print("❌ catalog tree JSON 不存在，先获取...")
        return None
    
    with open(CACHE_FILE) as f:
        data = json.load(f)
    
    tree = data.get('value', {}).get('catalogTreeList', [])
    
    # 找 AGC 节点
    agc_node = None
    for node in tree:
        if 'HarmonyOS 5' in node.get('nodeName', ''):
            agc_node = node
            break
    
    if not agc_node:
        print("❌ 未找到 AppGallery Connect（HarmonyOS 5及以上）节点")
        return None
    
    docs = []
    # 遍历所有子节点，跳过顶层文件
    for child in agc_node.get('children', []):
        _collect_docs(child, parent_rd=None, depth=0, docs=docs)
    
    return docs

def _collect_docs(node, parent_rd, depth, docs):
    """递归收集文档"""
    rd = node.get('relateDocument', '')
    name = node.get('nodeName', '')
    children = node.get('children', [])
    is_leaf = not children
    
    if rd:
        if rd == SKIP_RD:
            # 跳过顶层文件，但仍处理其子节点
            if children:
                for child in children:
                    _collect_docs(child, parent_rd=None, depth=depth, docs=docs)
            return
        
        docs.append({
            'name': name,
            'rd': rd,
            'parent_rd': parent_rd,
            'depth': depth,
            'is_leaf': is_leaf,
            'has_children': bool(children),
        })
        
        if children:
            for child in children:
                _collect_docs(child, parent_rd=rd, depth=depth+1, docs=docs)
    elif children:
        for child in children:
            _collect_docs(child, parent_rd=parent_rd, depth=depth, docs=docs)

# ── 异步抓取 ─────────────────────────────────────────

async def fetch_one(session, sem, rd, retries=3):
    """抓取单个文档"""
    url = f"{BASE_API}/getDocumentById"
    body = {
        "objectId": rd,
        "version": "",
        "catalogName": CATALOG_NAME,
        "language": "cn",
    }
    
    for attempt in range(retries):
        try:
            async with sem:
                async with session.post(url, json=body, headers=HEADERS, timeout=aiohttp.ClientTimeout(total=30)) as resp:
                    if resp.status != 200:
                        if attempt < retries - 1:
                            await asyncio.sleep(2 ** attempt)
                            continue
                        return None
                    data = await resp.json()
                    if data.get('code') != 0:
                        return None
                    value = data.get('value', {})
                    return {
                        'title': value.get('title', ''),
                        'content': value.get('content', {}).get('content', ''),
                    }
        except Exception as e:
            if attempt < retries - 1:
                await asyncio.sleep(2 ** attempt)
                continue
            print(f"  ⚠️ {rd}: {e}")
            return None
    return None

async def fetch_all(docs):
    """批量抓取所有文档"""
    results = {}
    sem = asyncio.Semaphore(CONCURRENCY)
    
    async with aiohttp.ClientSession() as session:
        tasks = []
        for doc in docs:
            tasks.append((doc, fetch_one(session, sem, doc['rd'])))
        
        total = len(tasks)
        done = 0
        for i in range(0, len(tasks), CONCURRENCY):
            batch = tasks[i:i+CONCURRENCY]
            batch_results = await asyncio.gather(*[t[1] for t in batch])
            for (doc, _), result in zip(batch, batch_results):
                if result:
                    results[doc['rd']] = result
                else:
                    print(f"  ❌ 抓取失败: {doc['name']} ({doc['rd']})")
                done += 1
            print(f"  进度: {done}/{total}")
    
    return results

# ── 文件生成 ─────────────────────────────────────────

def save_docs(docs, results):
    """生成目录结构和 MD 文件"""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # 清理旧内容
    for item in OUTPUT_DIR.iterdir():
        if item.is_dir():
            import shutil
            shutil.rmtree(item)
        elif item.name != '.gitkeep':
            item.unlink()
    
    # 按文档分组：确定每个文档的文件路径
    # 路径规则：
    #   - 叶子文档且无子节点：agc/{parent_rd}/{rd}.md
    #   - 叶子文档且 direct child of AGC：agc/{rd}.md
    #   - 非叶子（有子节点）：agc/{rd}/{rd}.md
    
    created_dirs = set()
    
    for doc in docs:
        rd = doc['rd']
        if rd not in results:
            continue
        
        result = results[rd]
        content = result['content']
        title = result['title']
        
        if not content:
            print(f"  ⚠️ 空内容: {title} ({rd})")
            continue
        
        # 确定路径
        if doc['parent_rd']:
            dir_path = OUTPUT_DIR / doc['parent_rd']
            if doc['has_children']:
                # 非叶子：作为目录，自身内容放在 index-like 文件中
                file_path = dir_path / rd / f"{rd}.md"
            else:
                # 叶子
                file_path = dir_path / f"{rd}.md"
        else:
            # 直接子节点（29个分类的直接子文档）
            if doc['has_children']:
                file_path = OUTPUT_DIR / rd / f"{rd}.md"
            else:
                file_path = OUTPUT_DIR / f"{rd}.md"
        
        file_path.parent.mkdir(parents=True, exist_ok=True)
        
        # 生成 frontmatter
        original_url = f"https://developer.huawei.com/consumer/cn/doc/app/{rd}"
        fm = generate_frontmatter(title, original_url)
        
        # HTML → MD
        try:
            md_body = html_to_md(content)
        except Exception as e:
            print(f"  ⚠️ MD 转换失败 {title}: {e}")
            continue
        
        full_md = fm + "\n" + md_body
        
        file_path.write_text(full_md, encoding='utf-8')
        print(f"  ✅ {file_path.relative_to(OUTPUT_DIR)} — {title}")
    
    print(f"\n总计生成: {len(results)} 个文档")

# ── 生成 _category_.json ────────────────────────────

def generate_category_jsons(docs):
    """为有子文档的目录生成 _category_.json"""
    # 从 catalog tree 读取中文标签
    with open(CACHE_FILE) as f:
        data = json.load(f)
    
    agc_node = None
    for node in data.get('value', {}).get('catalogTreeList', []):
        if 'HarmonyOS 5' in node.get('nodeName', ''):
            agc_node = node
            break
    
    # 构建 rd → nodeName 映射
    rd_to_name = {}
    def _map_names(node):
        rd = node.get('relateDocument', '')
        if rd:
            rd_to_name[rd] = node.get('nodeName', '')
        for child in node.get('children', []):
            _map_names(child)
    
    for child in agc_node.get('children', []):
        _map_names(child)
    
    # 为每个有子文档的目录生成 _category_.json
    # 收集哪些目录有子文件
    dirs_with_children = set()
    for doc in docs:
        if doc['has_children'] and doc['rd'] in rd_to_name:
            dirs_with_children.add(doc['rd'])
    
    for rd in sorted(dirs_with_children):
        label = rd_to_name.get(rd, rd)
        dir_path = OUTPUT_DIR / rd
        if dir_path.exists():
            cat_file = dir_path / "_category_.json"
            cat_content = {
                "label": label,
                "collapsed": True,
            }
            cat_file.write_text(json.dumps(cat_content, ensure_ascii=False, indent=2), encoding='utf-8')
            print(f"  📁 _category_.json: {rd} → {label}")
    
    print(f"\n_category_.json 生成完成: {len(dirs_with_children)} 个")

# ── Main ─────────────────────────────────────────────

async def main():
    print("=" * 60)
    print("AppGallery Connect 文档抓取")
    print("=" * 60)
    
    # Step 1: 构建文档列表
    print("\n[1/4] 构建文档列表...")
    docs = build_doc_list()
    if not docs:
        sys.exit(1)
    
    # 过滤：跳过 SKIP_RD
    docs = [d for d in docs if d['rd'] != SKIP_RD]
    print(f"  共 {len(docs)} 篇文档待抓取")
    
    # 显示分类统计
    categories = {}
    for d in docs:
        if d['depth'] == 0:
            cat = d['name']
        elif d['depth'] == 1 and d['parent_rd']:
            cat = d['name']
        else:
            continue
    top_level = [d for d in docs if d['depth'] == 0]
    print(f"  直接子分类: {len(top_level)} 个")
    for d in top_level:
        # 统计此分类下的总文档数
        count = 1  # 自身
        # 简化统计：只统计直接子节点
        sub = [x for x in docs if x['parent_rd'] == d['rd']]
        count += len(sub)
        print(f"    {d['name']}: {count} 篇")
    
    # Step 2: 抓取
    print(f"\n[2/4] 开始抓取（并发 {CONCURRENCY}）...")
    results = await fetch_all(docs)
    print(f"  成功抓取: {len(results)}/{len(docs)}")
    
    # Step 3: 生成文件
    print("\n[3/4] 生成 MD 文件...")
    save_docs(docs, results)
    
    # Step 4: 生成 _category_.json
    print("\n[4/4] 生成 _category_.json...")
    generate_category_jsons(docs)
    
    # 统计
    md_files = list(OUTPUT_DIR.rglob("*.md"))
    print(f"\n{'=' * 60}")
    print(f"✅ 完成！共 {len(md_files)} 个 MD 文件")
    print(f"输出目录: {OUTPUT_DIR}")
    print(f"{'=' * 60}")

if __name__ == "__main__":
    asyncio.run(main())
