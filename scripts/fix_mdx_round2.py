#!/usr/bin/env python3
"""Round 2 targeted fixes for remaining MDX errors."""
from pathlib import Path
import re

BASE = Path('/Users/hhxi/developer_hos/docs/tools/coding-debug')

# 1. ide-coderlinter-recommended-rules.md: Chinese quotes + curly brace
f = BASE / 'ide-coderlinter-recommended-rules.md'
t = f.read_text()
# Replace the problematic line: "{" → use fullwidth curly brace or escape
t = t.replace('\u201c{\u201d', '\u201c&#123;\u201d')
f.write_text(t)
print("✅ ide-coderlinter-recommended-rules.md")

# 2. ide-hvigor-dependencies.md: broken <strong> pairs in table
f = BASE / 'ide-hvigor-dependencies.md'
t = f.read_text()
# Fix unmatched </strong> tags
# L116: | <strong>2</strong> | 23</strong> | → add missing <strong>
t = t.replace('| <strong>2</strong> | 23</strong> |', '| <strong>2</strong> | <strong>2</strong>3</strong> |')
t = t.replace('| 23</strong> | 4<strong>5</strong> | 67</strong> |', '| <strong>2</strong>3</strong> | 4<strong>5</strong> | <strong>6</strong>7</strong> |')
# Also fix L114 issues
t = t.replace('| 4<strong>5</strong> | 6<strong>7</strong> |', '| <strong>4</strong>5</strong> | <strong>6</strong>7</strong> |')
# Fix L116 more carefully
t = t.replace('<strong>2</strong> | 23</strong>', '<strong>2</strong> | <strong>2</strong>3</strong>')
f.write_text(t)
print("✅ ide-hvigor-dependencies.md")

# 3. ide_no-implicit-any-catch.md: JSON in text
f = BASE / 'ide_no-implicit-any-catch.md'
t = f.read_text()
t = t.replace(
    '接受{"allowExplicitAny": true}对象', 
    '接受 `{"allowExplicitAny": true}` 对象'
)
t = t.replace(
    '在配置{"allowExplicitAny": true}的条件下',
    '在配置 `{"allowExplicitAny": true}` 的条件下'
)
f.write_text(t)
print("✅ ide_no-implicit-any-catch.md")

# 4. ide_space-before-blocks.md: find any remaining { issues
f = BASE / 'ide_space-before-blocks.md'
t = f.read_text()
# Search for any { not in backticks or code blocks
lines = t.split('\n')
new_lines = []
in_code = False
in_fm = False
fm_count = 0
for line in lines:
    s = line.strip()
    if s == '---':
        fm_count += 1
        in_fm = (fm_count % 2 == 1)
        new_lines.append(line)
        continue
    if in_fm:
        new_lines.append(line)
        continue
    if s.startswith('```'):
        in_code = not in_code
        new_lines.append(line)
        continue
    if in_code:
        new_lines.append(line)
        continue
    # Replace any unescaped { that's not inside backticks
    if '{' in line and '}' in line:
        # Check if { is inside backticks
        parts = re.split(r'`[^`]*`', line)
        for part in parts:
            m = re.search(r'\{([^}]+)\}', part)
            if m and m.group(1) and not re.match(r'^[\d\s]+$', m.group(1)):
                inner = m.group(1)
                line = line.replace('{' + inner + '}', '`{' + inner + '}`')
    new_lines.append(line)

t = '\n'.join(new_lines)
f.write_text(t)
print("✅ ide_space-before-blocks.md")

# 5. deveco-studio-600.md: broken image URL with backticks
f = BASE / 'release-notes/deveco-studio-600.md'
t = f.read_text()
# Remove all backtick-wrapped URL portions: `https://` → https://
# Pattern: ![](`https://`rest-of-url) → ![](https://rest-of-url)
t = re.sub(r'\[([^\]]*)\]\(`(https?://)`([^)]*)\)', r'[\1](https://\3)', t)
t = re.sub(r'!\[\]\(`(https?://)`([^)]*)\)', r'![](https://\2)', t)
# Also fix any `https://`xxx patterns more generally
t = re.sub(r'`(https?://)`([^\s`\)]+)', r'https://\2', t)
f.write_text(t)
print("✅ release-notes/deveco-studio-600.md")

print("\nDone.")
