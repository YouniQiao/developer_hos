import sys, re, json
sys.path.insert(0, '.')
from sync_runner import fetch_catalog_tree, fetch_doc

leaves = fetch_catalog_tree('harmonyos-references')
if not leaves:
    print('Failed to fetch tree')
    exit(1)

# 取叶子节点的前 20 和后 20 估算
sample_size = min(40, len(leaves))
import random
random.seed(42)
samples = random.sample(leaves, sample_size)

total_html = 0
total_text = 0
success = 0
for oid, title, bc, depth in samples:
    r = fetch_doc(oid, 'harmonyos-references')
    if r and r.get('html'):
        html = r['html']
        text = re.sub(r'<[^>]+>', '', html)
        text = re.sub(r'\s+', ' ', text).strip()
        total_html += len(html)
        total_text += len(text)
        success += 1

avg_html = total_html / success if success else 0
avg_text = total_text / success if success else 0
total_est_html = avg_html * len(leaves)
total_est_text = avg_text * len(leaves)

print(f'Sampled: {success}/{sample_size}')
print(f'Avg HTML size: {avg_html:.0f} chars')
print(f'Avg text size: {avg_text:.0f} chars')
print(f'Estimated total HTML: {total_est_html/1024/1024:.1f} MB')
print(f'Estimated total text: {total_est_text/1024/1024:.1f} MB')

# 转 Markdown 后可能更小（去掉了 HTML 标签开销）
print(f'\nComparison:')
print(f'  Current docs/ guide pages: 10853 files, ~7.9 GB')
print(f'  API ref to add:            3786 files, ~{total_est_html/1024/1024/1024:.1f} GB HTML raw')
print(f'  API ref as Markdown (est): ~{total_est_html/1024/1024/3:.0f} MB (HTML→MD ~3x smaller)')
