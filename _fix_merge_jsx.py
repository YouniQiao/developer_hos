#!/usr/bin/env python3
"""
Fix JSX syntax in converted MergeTable files.
Issues:
1. headers=["A","B"] → headers={["A","B"]} (need curly braces)
2. {{text:'...',rowspan:2}} needs proper escaping
3. Remove duplicate original markdown tables that were not replaced
"""
import os, re, glob

promo_dir = 'docs/monetize/promotion'

files = glob.glob(f'{promo_dir}/*.md') + glob.glob(f'{promo_dir}/*.mdx')

for fpath in sorted(files):
    with open(fpath) as f:
        content = f.read()
    
    if 'MergeTable' not in content:
        continue
    
    original = content
    
    # Fix 1: headers=["A","B"] → headers={["A","B"]}
    content = re.sub(
        r'(\s+headers=)(\[.*?\])',
        lambda m: m.group(1) + '{' + m.group(2) + '}',
        content
    )
    
    # Fix 2: Remove original markdown tables that precede MergeTable
    # Pattern: markdown table | ... | directly before <MergeTable
    # Look for | ... | lines followed by </table separator> followed by MergeTable
    content = re.sub(
        r'\|[^\n]*\|\s*\n\|[-:\s|]+\|\s*\n(\|[^\n]*\|\s*\n)*\s*(?=<MergeTable)',
        '',
        content
    )
    
    # Fix 3: Remove empty table starters |  |  |  |\n| --- | --- | ---
    # that are now orphaned
    content = re.sub(
        r'^\|[ -:\|]*\|\s*\n(?=<MergeTable)',
        '',
        content
    )
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        print(f"  Fixed: {os.path.basename(fpath)}")

print("Done!")
