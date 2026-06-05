import os, re

base = "/Users/hhxi/developer_hos/docs"

def has_mdx_import(content):
    """Check if content has import statements OUTSIDE of fenced code blocks."""
    # Remove fenced code blocks
    cleaned = re.sub(r'```[\s\S]*?```', '', content)
    # Remove indented code blocks (4-space indented lines)
    # Check for 'import ' at the start of a line in the cleaned content
    return bool(re.search(r'^import\s+', cleaned, re.MULTILINE))

count = 0
skipped = 0
for root, dirs, files in os.walk(base):
    for f in files:
        if not f.endswith('.md') and not f.endswith('.mdx'):
            continue
        path = os.path.join(root, f)
        try:
            with open(path, 'rb') as fh:
                raw = fh.read()
            content = raw.decode('utf-8', errors='replace')
        except:
            continue
        
        if 'format: md' in content:
            continue
        
        if has_mdx_import(content):
            skipped += 1
            continue
        
        result = re.sub(r'^(---)\n', r'\1\nformat: md\n', content, count=1)
        
        if result != content:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(result)
            count += 1

print(f"Updated {count} files, skipped {skipped} (have MDX imports)")
