#!/usr/bin/env python3
"""Fix last failing MDX file by escaping { as \{."""
fpath = '/Users/hhxi/developer_hos/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274.md'

with open(fpath, 'r', errors='replace') as f:
    content = f.read()

original = content

# Fix 1: Line with introVideos - the { at start of {"frameUrl" needs escaping
# Pattern: ["{"frameUrl" -> ["\{"frameUrl"  (escape the {)
# Line 13 content
content = content.replace(
    '示例："introVideos": ["{"\\"frameUrl\\"',
    '示例："introVideos": [\\"\\{"\\"frameUrl\\"'
)

# Fix 2: Line with rcmdVideos - same pattern
content = content.replace(
    '示例："rcmdVideos": ["{"\\"frameUrl\\"',
    '示例："rcmdVideos": [\\"\\{"\\"frameUrl\\"'
)

if content != original:
    with open(fpath, 'w') as f:
        f.write(content)
    print("Fixed!")
else:
    print("No change")
    # Sh ow what's around introVideos/rcmdVideos
    for line in open(fpath, 'r'):
        if 'introVideos' in line or 'rcmdVideos' in line:
            # find the { after [" 
            idx = line.find('[\\"')
            if idx >= 0:
                print(f'  After [\\": ...{line[idx:idx+30]}...')
