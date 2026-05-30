#!/usr/bin/env python3
"""Fix {ChineseVariable} patterns that MDX evaluates as JS expressions."""
import re
import os

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

def fix_file(fpath):
    with open(fpath, 'r', errors='replace') as f:
        content = f.read()
    original = content

    # Fix {chinese_text} patterns - wrap in backticks
    # Match { followed by Chinese chars and ends with }
    # But NOT inside code blocks already in backticks
    lines = content.split('\n')
    new_lines = []
    in_fence = False
    
    for line in lines:
        if line.strip().startswith('```'):
            in_fence = not in_fence
            new_lines.append(line)
            continue
        if in_fence:
            new_lines.append(line)
            continue
        
        # Replace {chinese chars} with escaped version
        # Pattern: { at least one CJK char }
        line = re.sub(
            r'(?<!\\)\{([\u4e00-\u9fff][^}]*)\}',
            r'`{\1}`',
            line
        )
        
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        return True
    return False

def main():
    # First find all occurrences
    occurrences = 0
    files_with_issues = set()
    
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(root, fname)
            with open(fpath, 'r', errors='replace') as f:
                content = f.read()
            for m in re.finditer(r'(?<!\\)\{([\u4e00-\u9fff][^}]*)\}', content):
                # Check if inside code fence
                before = content[:m.start()]
                fences = before.count('\n```') - before.count('\n\\```')
                if fences % 2 == 0:  # not inside code fence
                    occurrences += 1
                    files_with_issues.add(fpath)
    
    print(f"Found {occurrences} occurrences in {len(files_with_issues)} files")
    
    # Fix them
    fixed = 0
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            if fix_file(os.path.join(root, fname)):
                fixed += 1
    
    print(f"Fixed {fixed} files")

if __name__ == '__main__':
    main()
