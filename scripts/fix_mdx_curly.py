#!/usr/bin/env python3
"""Fix remaining MDX curly brace issues in specific patterns."""
import re
from pathlib import Path

BASE = Path('/Users/hhxi/developer_hos/docs/tools/coding-debug')

def fix_file(path):
    text = path.read_text()
    lines = text.split('\n')
    new_lines = []
    in_code = False
    in_fm = False
    fm_count = 0
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        if stripped == '---':
            fm_count += 1
            in_fm = (fm_count % 2 == 1)
            new_lines.append(line)
            continue
        if in_fm:
            new_lines.append(line)
            continue
        if stripped.startswith('```'):
            in_code = not in_code
            new_lines.append(line)
            continue
        if in_code:
            new_lines.append(line)
            continue
        
        # Fix pattern 1: {text} template placeholders (not in backticks)
        # {版本号}, {packageName}, {el1,el2}, {模拟器类型} etc.
        # Strategy: wrap standalone {xxx} in backticks
        parts = re.split(r'(`[^`]*`)', line)
        for j, part in enumerate(parts):
            if part.startswith('`') or not part.strip():
                continue
            # Match {something} patterns
            # But don't match markdown links [...](...) and don't match already-fixed patterns
            fixed = re.sub(
                r'(?<![`\[\(])\{([^}\n]{1,60})\}(?![`\]\)])',
                lambda m: f'`{{{m.group(1)}}}`' if not re.match(r'^[\d\s,]+$', m.group(1)) and 
                          not re.match(r'^"', m.group(1))
                          else m.group(0),
                part
            )
            parts[j] = fixed
        new_lines.append(''.join(parts))
    
    result = '\n'.join(new_lines)
    if result != text:
        path.write_text(result)
        return True
    return False

files = [
    "ide-arktsdoc-link.md", "ide-build-expanding-context.md",
    "ide-coderlinter-recommended-rules.md", "ide-device-file-explorer.md",
    "ide-emulator-command-line.md", "ide-file-naming-convention.md",
    "ide-hvigor-dependencies.md", "ide-hvigor-so.md", "ide-ui-test.md",
    "ide_ban-types.md", "ide_no-implicit-any-catch.md",
    "ide_space-before-blocks.md", "release-notes/deveco-studio-600.md"
]

for fname in files:
    path = BASE / fname
    if path.exists():
        changed = fix_file(path)
        print(f"{'✅' if changed else '⏭️'} {fname}")
    else:
        print(f"❌ not found: {fname}")
