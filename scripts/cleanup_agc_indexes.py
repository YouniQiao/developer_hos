"""
Delete redundant AGC index pages and clean sidebar.
Pattern: directory-name.md inside same-named directory.
"""
import os, re

WORKDIR = "/Users/hhxi/developer_hos"
AGC = os.path.join(WORKDIR, "docs/distribute/agc")

# Step 1: Find and delete redundant files
deleted = []
for dirpath, dirnames, filenames in os.walk(AGC):
    dir_name = os.path.basename(dirpath)
    redundant_file = dir_name + ".md"
    if redundant_file in filenames:
        full_path = os.path.join(dirpath, redundant_file)
        os.remove(full_path)
        deleted.append(full_path)

print(f"Deleted {len(deleted)} files")
for f in deleted[:10]:
    print(f"  {f.replace(WORKDIR + '/', '')}")
print(f"  ... and {len(deleted)-10} more\n")

# Step 2: Remove sidebar references from sidebars-agc.js
sidebar_path = os.path.join(WORKDIR, "sidebars-agc.js")
with open(sidebar_path, 'r') as f:
    content = f.read()

original = content
removed = 0

# For each deleted file, remove its sidebar entry
for full_path in deleted:
    # Convert filesystem path to sidebar path
    rel = full_path.replace(WORKDIR + "/docs/", "")
    # Remove .md extension
    sidebar_entry = rel.replace(".md", "")
    
    # The sidebar entry looks like: 'distribute/agc/xxx/xxx'
    # Find and remove this line (with optional comma)
    pattern = f"'{sidebar_entry}',?\\s*"
    new_content = re.sub(pattern + r'\n', '', content)
    if new_content != content:
        removed += 1
        content = new_content

print(f"Removed {removed} sidebar entries")

if content != original:
    with open(sidebar_path, 'w') as f:
        f.write(content)
    print("sidebars-agc.js updated")
else:
    print("sidebars-agc.js unchanged")
