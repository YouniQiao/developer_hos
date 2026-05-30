#!/usr/bin/env python3
"""Fix remaining MDX issues in monetize docs: <[ and <= patterns."""
import re, os

BASE = '/Users/hhxi/developer_hos/docs/monetize/monetization'

for fname in sorted(os.listdir(BASE)):
    if not fname.endswith('.md'):
        continue
    fpath = os.path.join(BASE, fname)
    with open(fpath) as f:
        content = f.read()
    
    original = content
    changed = False
    
    # Fix 1: <[pattern> in table cells - List<[Text](url)>
    # Add space after < to prevent JSX parsing: List< [Text](url)>
    # But NOT inside code blocks (``` ```)
    blocks = content.split('```')
    for i in range(0, len(blocks), 2):  # Only process non-code blocks
        # Fix <[ -> < [ (space after <)
        blocks[i] = re.sub(r'<(?=\[)', '< ', blocks[i])
        
        # Fix <= -> <= (space after <) but only for comparisons like width<=0
        # Use word boundary: \w<= -> \w <=
        blocks[i] = re.sub(r'(\w)<=(\d)', r'\1 <=\2', blocks[i])
        
        # Fix bare < not related to HTML/JSX when it's followed by word and angle
        # e.g. Iist<[ReportMediaInfo] -> Iist< [ReportMediaInfo]
        # This is already handled by the <[ fix above
        
        # Fix lingering <[ etc
        # Also handle List<[Text] patterns where < is not a comparison
        blocks[i] = re.sub(r'(\w+)(<)(?=\[)', r'\1 < ', blocks[i])
        
        # Also fix List<Integer> etc - make sure they're in backticks
        blocks[i] = re.sub(r'(\w+)(<)(Integer|String|Long|Boolean|Float|Double|Object|List|Map)', r'`\1<\3`', blocks[i])
    
    content = '```'.join(blocks)
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        print(f"Fixed: {fname}")
        changed = True

print("\nDone!")
