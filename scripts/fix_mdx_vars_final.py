"""
Fix MDX variable references in docs/distribute/agc/*.md files.

Problem: {JWT}, {access_token}, {libraryName} get interpreted as JS expressions.
Fix: wrap them in backticks `{JWT}` etc.
"""
import re, os
from pathlib import Path

WORKDIR = "/Users/hhxi/developer_hos"
AGC_DIR = os.path.join(WORKDIR, "docs/distribute/agc")

VARS = ["JWT", "access_token", "libraryName"]

def fix_file(filepath):
    with open(filepath, 'rb') as f:
        raw = f.read()
    try:
        content = raw.decode('utf-8')
    except UnicodeDecodeError:
        return None
    
    original = content
    
    for var in VARS:
        var_curly = '{' + var + '}'  # {JWT}
        escaped_var = re.escape(var_curly)  # \{JWT\}
        
        # Phase 1: Clean up botched backtick wrapping (3+ backticks on either side)
        # e.g.: ```{JWT}````  ->  `{JWT}`
        p1 = re.compile(r'\x60{3,}' + escaped_var + r'\x60{3,}')
        content = p1.sub(lambda m: '`' + var_curly + '`', content)
        
        # Phase 2: Wrap any remaining bare {VAR} not already preceded by backtick
        # Also not already inside JSX escape like {'{JWT}'}
        p2 = re.compile(r'(?<!\x60)' + escaped_var + r'(?!\x60)')
        content = p2.sub(lambda m: '`' + m.group(0) + '`', content)
    
    if content != original:
        with open(filepath, 'wb') as f:
            f.write(content.encode('utf-8'))
        return True
    return False

def main():
    all_files = sorted(Path(AGC_DIR).rglob("*.md"))
    print(f"Found {len(all_files)} .md files")
    
    fixed = []
    errors = []
    
    for fp in all_files:
        try:
            if fix_file(str(fp)):
                rel = fp.relative_to(WORKDIR)
                fixed.append(rel)
                print(f"  ✓ {rel}")
        except Exception as e:
            rel = fp.relative_to(WORKDIR)
            errors.append((rel, str(e)))
            print(f"  ✗ {rel}: {e}")
    
    print(f"\nFixed: {len(fixed)} files")
    if errors:
        print(f"Errors: {len(errors)} files")
        for rel, err in errors[:5]:
            print(f"  {rel}: {err}")
    return len(fixed) > 0

if __name__ == "__main__":
    main()
