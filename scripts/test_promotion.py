#!/usr/bin/env python3
"""Test the promotion content migration pipeline."""
import asyncio, aiohttp, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))

from fill_promotion_content import (
    fetch_json, html_to_md, download_image, fix_mdx,
    DOCS_DIR, IMG_DIR, CATALOG_NAME, IMG_CACHE
)
from bs4 import BeautifulSoup

async def test():
    async with aiohttp.ClientSession() as session:
        # Test 1: Fetch catalog
        print("=== Test 1: Fetch catalog tree ===")
        data = await fetch_json(session, 'getCatalogTree', {
            'language': 'cn', 'catalogName': CATALOG_NAME,
            'objectId': 'ads-ggtfzstp-0000002285988928'
        })
        tree = data['value']['catalogTreeList']
        
        # Find first leaf doc with relateDocument
        def find_first_leaf(nodes):
            for n in nodes:
                rd = n.get('relateDocument', '')
                if rd and n.get('isLeaf'):
                    return n
                if n.get('children'):
                    result = find_first_leaf(n['children'])
                    if result:
                        return result
            return None
        
        first = find_first_leaf(tree)
        oid = first['relateDocument']
        print(f"First leaf: {first['nodeName']} -> {oid}")
        
        # Test 2: Fetch content
        print(f"\n=== Test 2: Fetch content for {oid} ===")
        doc_data = await fetch_json(session, 'getDocumentById', {
            'objectId': oid, 'version': '', 'catalogName': CATALOG_NAME, 'language': 'cn'
        })
        value = doc_data.get('value', {})
        title = value.get('title', '')
        html_content = value.get('content', {}).get('content', '')
        print(f"Title: {title}")
        print(f"HTML length: {len(html_content)} chars")
        
        if not html_content:
            print("⚠ Empty content, trying next doc...")
            # Find next leaf
            def find_all_leaves(nodes, found=[]):
                for n in nodes:
                    rd = n.get('relateDocument', '')
                    if rd and n.get('isLeaf'):
                        found.append(n)
                    if n.get('children'):
                        find_all_leaves(n['children'], found)
                return found
            all_leaves = find_all_leaves(tree)
            for leaf in all_leaves[:5]:
                oid = leaf['relateDocument']
                print(f"\nTrying: {leaf['nodeName']} -> {oid}")
                doc_data = await fetch_json(session, 'getDocumentById', {
                    'objectId': oid, 'version': '', 'catalogName': CATALOG_NAME, 'language': 'cn'
                })
                html = doc_data.get('value', {}).get('content', {}).get('content', '')
                title = doc_data.get('value', {}).get('title', '')
                print(f"  Title: {title}, HTML len: {len(html)}")
                if html:
                    html_content = html
                    break
        
        # Test 3: Localize images
        print(f"\n=== Test 3: Download images ===")
        soup = BeautifulSoup(html_content, 'html.parser')
        imgs = soup.find_all('img')
        print(f"Images found: {len(imgs)}")
        for img in imgs:
            src = img.get('src', '')
            if isinstance(src, str) and src.startswith('http'):
                local = await download_image(session, src, IMG_DIR)
                img['src'] = local
                print(f"  {src[:60]}... -> {local}")
        
        html_local = str(soup)
        
        # Test 4: Convert to MD
        print(f"\n=== Test 4: HTML -> Markdown ===")
        md = html_to_md(html_local, title)
        md = fix_mdx(md)
        print(f"MD length: {len(md)} chars")
        print(f"MD preview:\n{md[:500]}")
        
        # Test 5: Write to the existing file
        print(f"\n=== Test 5: Write to file ===")
        test_path = DOCS_DIR / f"{oid}.md"
        if test_path.exists():
            old_size = test_path.stat().st_size
            print(f"Old file {oid}.md size: {old_size} bytes")
            
            from fill_promotion_content import flatten_leaves
            cat_path = []
            for cat in tree:
                for child in cat.get('children', []):
                    if child.get('relateDocument') == oid:
                        cat_path = [cat['nodeName']]
                        break
                    
            frontmatter = [
                '---',
                f'title: "{title}"',
                f'original_url: https://developer.huawei.com/consumer/cn/doc/promotion/{oid}',
                '---',
                ''
            ]
            full = '\n'.join(frontmatter) + md
            test_path.write_text(full, encoding='utf-8')
            new_size = test_path.stat().st_size
            print(f"New file size: {new_size} bytes (+{new_size - old_size})")
        else:
            print(f"⚠ File {oid}.md does not exist, skipping write")
        
        print(f"\n✅ Pipeline test complete!")

asyncio.run(test())
