#!/usr/bin/env python3
"""Fix MDX angle bracket issues in AGC docs."""
import re
import os

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

def fix_file(fpath):
    with open(fpath, 'r', errors='replace') as f:
        content = f.read()
    original = content

    # 1. Promise<[xxx](url)> -> Promise<[xxx]> (strip link, wrap in backtick)
    content = re.sub(
        r'Promise<\[([^\]]+)\]\([^)]+\)>',
        r'`Promise<\1>`',
        content
    )

    # 2. API<10 style: API<number
    content = re.sub(r'API<(\d+)', r'API&lt;\1', content)

    # 3. Array<Map<String>> in backtick-safe way
    content = re.sub(r'\bArray<Map<String>>', r'Array&lt;Map&lt;String&gt;', content)

    # 4. In pipe tables, wrap remaining <...> constructs in backticks
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if line.strip().startswith('|') and line.count('|') >= 3:
            line = re.sub(r'(?<!`)(Promise|Array|Map|Set|List)<([^>]+)>', r'`\1<\2>`', line)
        new_lines.append(line)
    content = '\n'.join(new_lines)

    # 5. Fix <![CDATA[ leftovers
    content = content.replace('<![CDATA[', '')
    content = content.replace(']]>', '')

    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        return True
    return False

def main():
    fixed = 0
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            if fix_file(os.path.join(root, fname)):
                fixed += 1
    print(f'Fixed {fixed} files')

if __name__ == '__main__':
    main()
