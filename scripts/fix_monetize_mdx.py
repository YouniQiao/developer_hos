#!/usr/bin/env python3
"""Fix MDX compilation issues in monetize documentation files."""
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
    
    # 1. Remove [h2], [h3], [h4] markers (from HTML section numbering)
    content = re.sub(r'\[h[234]\]\s*', '', content)
    # Also handle "## [h2]" -> "## "  (already handled above but be safe)
    content = re.sub(r'^#+\s*\[h[234]\]\s*', '', content, flags=re.MULTILINE)
    
    # 2. Fix bare types like <Integer>, <String> etc. in table cells
    # Pattern: | ... | Integer |  (bare capital type name between pipes)
    # These should be wrapped in backticks when they appear as a standalone column
    # Replace | Integer | with | `Integer` | in table context
    content = re.sub(
        r'(\|)(\s*)(Integer|String|Long|Boolean|Float|Double|Object|Short|Byte|Character|Void)(\s*)(\|)',
        r'\1\2`\3`\4\5', content
    )
    
    # 3. Fix <Integer(name)>, <String(name)> etc. in table cells
    # Replace with `Integer(name)` or similar
    content = re.sub(
        r'<(Integer|String|Long|Boolean|Float|Double|Object|Short|Byte|List|Map)([^>]*)>',
        r'`\1\2`', content
    )
    
    # 4. Fix generic HashMap<String, String> patterns
    content = re.sub(
        r'(\w+)(<(?:Integer|String|Long|Boolean|Float|Double|Object),\s*(?:Integer|String|Long|Boolean|Float|Double|Object)>)',
        r'`\1\2`', content
    )
    
    # 5. Fix remaining ${...} patterns by replacing ${
    import textwrap
    zws = '\u200b'
    content = re.sub(r'\$\{(?!\s)', f'${{{zws}', content)  # zero-width space breaks the MDX expression
    
    # 6. Fix bare Integer/String after pipe followed by ( or [ (JSON syntax)
    # e.g. "| Integer(32) |" -> "| `Integer(32)` |"
    content = re.sub(
        r'\|(\s*)(Integer|String|Long|Boolean|Float|Double|Object|Short|Byte|List)(\s*\([^)]*\))(\s*)\|',
        r'|\1`\2\3`\4|', content
    )
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        print(f"Fixed: {fname}")
        changed = True

print("\nDone!")
