#!/usr/bin/env python3
"""Targeted fixes for the 7 remaining MDX errors."""
from pathlib import Path

BASE = Path('/Users/hhxi/developer_hos/docs/tools/coding-debug')

# 1. ide-build-expanding-context.md L1514: { isArkGuardEnabled: boolean } in type annotation
f = BASE / 'ide-build-expanding-context.md'
t = f.read_text()
t = t.replace('config: { isArkGuardEnabled: boolean }', 'config: `{ isArkGuardEnabled: boolean }`')
f.write_text(t)
print("✅ ide-build-expanding-context.md")

# 2. ide-coderlinter-recommended-rules.md L129: "{" → escape
f = BASE / 'ide-coderlinter-recommended-rules.md'
t = f.read_text()
t = t.replace('强制在"{"之前加空格。', '强制在`{"`之前加空格。')
f.write_text(t)
print("✅ ide-coderlinter-recommended-rules.md")

# 3. ide-hvigor-dependencies.md: remove null chars and fix broken <strong> tags
f = BASE / 'ide-hvigor-dependencies.md'
t = f.read_text()
# Remove all null characters
t = t.replace('\x00', '')
# Fix specific broken patterns
t = t.replace('<strong>5', '<strong>5</strong>')
t = t.replace('<strong>7', '<strong>7</strong>')
t = t.replace('</strong>3', '3</strong>')
t = t.replace('</strong>7', '7</strong>')
f.write_text(t)
print("✅ ide-hvigor-dependencies.md")

# 4. ide-ui-test.md L177: <strong>{</strong> → use HTML entity
f = BASE / 'ide-ui-test.md'
t = f.read_text()
t = t.replace('<strong>{</strong>', '<strong>&#123;</strong>')
f.write_text(t)
print("✅ ide-ui-test.md")

# 5. ide_no-implicit-any-catch.md L25,33,38: {"allowExplicitAny": true} → backtick
f = BASE / 'ide_no-implicit-any-catch.md'
t = f.read_text()
t = t.replace('{\\"allowExplicitAny\\": true}对象作为规则参数', '`{\"allowExplicitAny\": true}`对象作为规则参数')
t = t.replace('{\\"allowExplicitAny\\": true}的条件下', '`{\"allowExplicitAny\": true}`的条件下')
t = t.replace('[\\"error\\", {\\"allowExplicitAny\\": true}]', '[`"error"`, `{"allowExplicitAny": true}`]')
f.write_text(t)
print("✅ ide_no-implicit-any-catch.md")

# 6. ide_space-before-blocks.md L87: (`https://`...) → (https://...)
f = BASE / 'ide_space-before-blocks.md'
t = f.read_text()
t = t.replace('[Code Linter代码检查](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)', 
               '[Code Linter代码检查](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter)')
f.write_text(t)
print("✅ ide_space-before-blocks.md")

# 7. deveco-studio-600.md L534: ![](`https://`...) → ![](https://...)
f = BASE / 'release-notes/deveco-studio-600.md'
t = f.read_text()
# Fix all instances of backtick-wrapped URLs in images and links
import re
t = re.sub(r'!\[\]\(`(https?://[^`]+)`\)', r'![](\1)', t)
t = re.sub(r'\[([^\]]+)\]\(`(https?://[^`]+)`\)', r'[\1](\2)', t)
f.write_text(t)
print("✅ release-notes/deveco-studio-600.md")

print("\nAll 7 files fixed.")
