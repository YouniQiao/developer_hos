import sys, json, time
sys.path.insert(0, '.')
from sync_runner import fetch_catalog_tree

leaves = fetch_catalog_tree('harmonyos-references')
if leaves:
    print(f'harmonyos-references total leaves: {len(leaves)}')
    
    depth_counts = {}
    for oid, title, bc, depth in leaves:
        depth_counts[depth] = depth_counts.get(depth, 0) + 1
    print(f'Depth distribution: {sorted(depth_counts.items())}')
    
    top_levels = {}
    for oid, title, bc, depth in leaves:
        if bc:
            top = bc[0]
            top_levels[top] = top_levels.get(top, 0) + 1
    
    print(f'\nTop level sections ({len(top_levels)}):')
    for t in sorted(top_levels, key=top_levels.get, reverse=True):
        print(f'  {t}: {top_levels[t]} pages')
    
    print(f'\nFirst 5 leaves:')
    for oid, title, bc, depth in leaves[:5]:
        print(f'  oid={oid}  title={title}  bc={" > ".join(bc)}')
else:
    print('Failed to fetch')
