#!/usr/bin/env python3
"""
全量检查文档中所有外部链接的可访问性。

用法:
    python3 scripts/check_links.py                    # 全量检查
    python3 scripts/check_links.py --concurrency 10   # 自定义并发数

输出:
    reports/broken_links.csv   — 不可访问链接清单
    reports/all_links.csv      — 全部链接状态
"""

import re
import csv
import sys
import time
import os
from pathlib import Path
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse

try:
    import httpx
except ImportError:
    print("需要 httpx: pip install httpx 或 uv pip install httpx")
    sys.exit(1)

DOCS_DIR = Path(__file__).resolve().parent.parent / "docs"
REPORT_DIR = Path(__file__).resolve().parent.parent / "reports"
URL_PATTERN = re.compile(r'https?://[^\s<>"`)\]]+')

# ── 已知的无效/占位 URL 模式，跳过检查 ──
SKIP_PATTERNS = [
    '__AID__', '__APP_ID__', '__CHANNEL_ID__', '__GROUP_ID__', '__OAID__',
    '__CALLBACK__', '__TS__', '__AID_NAME__', '__APP_NAME__', '__CHANNEL_NAME__',
    '__GROUP_NAME__', '__ACTION_TYPE__',
    'localhost', '127.0.0.1',
    'xxx.xxx.xxx',
    'example.com', 'example.org',
    'your-domain', 'your-server',
    'YOUR_', '<', '>',  # 模板变量
]

# ── 只报告这些 HTTP 状态的链接（其他错误如 timeout、DNS 失败都算 BROKEN）──
BROKEN_HTTP_STATUSES = {404, 410, 500, 502, 503}

# ══════════════════════════════════════════════════════════════════

def extract_urls_from_file(filepath: Path) -> list[tuple[str, int]]:
    """提取文件中的所有外部 URL，返回 [(url, line_number), ...]"""
    results = []
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            for i, line in enumerate(f, 1):
                urls = URL_PATTERN.findall(line)
                for u in urls:
                    # 清理尾部标点
                    u = u.rstrip('.,;:!?）)】』""'']}')
                    results.append((u, i))
    except Exception as e:
        pass
    return results


def should_skip(url: str) -> bool:
    """判断 URL 是否需要跳过"""
    for pat in SKIP_PATTERNS:
        if pat in url:
            return True
    # 跳过邮件链接
    if url.startswith('mailto:'):
        return True
    return False


def check_url(url: str, timeout: int = 15) -> dict:
    """检查单个 URL 的可访问性，优先 HEAD 再 GET"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
    }
    result = {
        'url': url,
        'status': None,
        'error': None,
        'effective_url': url,
    }
    try:
        with httpx.Client(timeout=timeout, follow_redirects=True, headers=headers,
                          verify=False) as client:
            # 先尝试 HEAD
            try:
                resp = client.head(url)
                if resp.status_code in (405, 501):  # Method Not Allowed
                    raise ValueError("HEAD not supported")
                result['status'] = resp.status_code
                result['effective_url'] = str(resp.url)
            except (ValueError, httpx.HTTPError):
                # 回退到 GET（只取前 1KB 节省带宽）
                resp = client.get(url, headers={
                    **headers,
                    'Range': 'bytes=0-1024',
                })
                result['status'] = resp.status_code
                result['effective_url'] = str(resp.url)
    except httpx.TimeoutException:
        result['error'] = 'timeout'
    except httpx.ConnectError:
        result['error'] = 'connection_failed'
    except Exception as e:
        err_str = str(e)
        if 'SSL' in err_str or 'certificate' in err_str.lower():
            result['error'] = 'ssl_error'
        else:
            result['error'] = f'{type(e).__name__}: {err_str[:200]}'

    return result


def is_broken(result: dict) -> tuple[bool, str]:
    """判断链接是否不可访问，返回 (是否broken, 原因)"""
    if result['error']:
        return True, result['error']
    if result['status'] in BROKEN_HTTP_STATUSES:
        return True, f'HTTP {result["status"]}'
    if result['status'] and result['status'] >= 400:
        return True, f'HTTP {result["status"]}'
    return False, 'ok'


def main():
    concurrency = 20
    if '--concurrency' in sys.argv:
        idx = sys.argv.index('--concurrency')
        concurrency = int(sys.argv[idx + 1])

    print(f"📂 扫描 docs/ 目录...")
    all_files = list(DOCS_DIR.rglob('*.md')) + list(DOCS_DIR.rglob('*.mdx'))
    print(f"   找到 {len(all_files)} 个文件")

    # ── Phase 1: 提取所有链接 ──
    print(f"🔍 提取链接...")
    url_to_files: dict[str, list[tuple[str, int]]] = defaultdict(list)
    total_urls = 0

    for idx, filepath in enumerate(all_files):
        urls = extract_urls_from_file(filepath)
        for url, line_no in urls:
            if should_skip(url):
                continue
            rel_path = str(filepath.relative_to(DOCS_DIR.parent))
            url_to_files[url].append((rel_path, line_no))
            total_urls += 1

        if (idx + 1) % 2000 == 0:
            print(f"   处理中... {idx + 1}/{len(all_files)} 文件")

    # 去重（清理尾部斜杠差异）
    normalized_urls = {}
    for url in url_to_files:
        key = url.rstrip('/')
        if key not in normalized_urls:
            normalized_urls[key] = (url, url_to_files[url])
        else:
            existing_url, existing_files = normalized_urls[key]
            existing_files.extend(url_to_files[url])

    unique_count = len(normalized_urls)
    print(f"   总链接引用: {total_urls}")
    print(f"   去重后独立 URL: {unique_count}")

    # ── Phase 2: 并发检查 ──
    print(f"\n🌐 并发检查 ({concurrency} 线程)...")
    print(f"   预计耗时: ~{unique_count / concurrency * 2 / 60:.0f} 分钟\n")

    all_results = {}  # url -> result dict
    broken_links: list[dict] = []
    checked = 0
    broken_count = 0

    with ThreadPoolExecutor(max_workers=concurrency) as executor:
        future_map = {}
        for norm_url, (orig_url, _) in normalized_urls.items():
            future = executor.submit(check_url, orig_url)
            future_map[future] = (norm_url, orig_url)

        for future in as_completed(future_map):
            norm_url, orig_url = future_map[future]
            try:
                result = future.result()
            except Exception as e:
                result = {'url': orig_url, 'status': None, 'error': str(e),
                          'effective_url': orig_url}

            all_results[norm_url] = result
            checked += 1
            broken, reason = is_broken(result)

            if broken:
                broken_count += 1
                for (file_path, line_no) in normalized_urls[norm_url][1]:
                    broken_links.append({
                        'url': orig_url,
                        'status': result['status'],
                        'error': result['error'],
                        'reason': reason,
                        'file': file_path,
                        'line': line_no,
                        'effective_url': result['effective_url'],
                    })

            if checked % 500 == 0 or checked == unique_count:
                elapsed = time.time() - start_time
                rate = checked / elapsed if elapsed > 0 else 0
                print(f"   [{checked}/{unique_count}] "
                      f"⛓️‍💥 {broken_count} broken | {rate:.1f} URL/s")

    # ── Phase 3: 输出报告 ──
    REPORT_DIR.mkdir(exist_ok=True)

    # 完整报告 (CSV)
    all_csv = REPORT_DIR / "all_links.csv"
    with open(all_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['url', 'status', 'error', 'files_count'])
        for norm_url, (orig_url, files) in normalized_urls.items():
            result = all_results.get(norm_url, {})
            writer.writerow([
                orig_url,
                result.get('status', ''),
                result.get('error', ''),
                len(files),
            ])
    print(f"\n📊 完整报告: {all_csv}")

    # 不可访问链接报告 (CSV)
    broken_csv = REPORT_DIR / "broken_links.csv"
    with open(broken_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['url', 'status', 'error', 'reason', 'file', 'line',
                         'effective_url'])
        for item in sorted(broken_links, key=lambda x: (x['reason'], x['url'])):
            writer.writerow([
                item['url'],
                item['status'] or '',
                item['error'] or '',
                item['reason'],
                item['file'],
                item['line'],
                item['effective_url'],
            ])
    print(f"📊 不可访问链接报告: {broken_csv}")

    # 汇总统计
    print(f"\n═══ 汇总 ═══")
    print(f"   总文件:          {len(all_files)}")
    print(f"   总链接引用:      {total_urls}")
    print(f"   去重独立 URL:    {unique_count}")
    print(f"   不可访问:        {broken_count} ({broken_count/unique_count*100:.1f}%)")

    # 按错误类型分组
    from collections import Counter
    error_types = Counter(item['reason'] for item in broken_links)
    print(f"\n   错误类型分布:")
    for error_type, count in error_types.most_common():
        print(f"     {error_type}: {count} 个引用")

    # 按文件分组
    file_counts = Counter(item['file'] for item in broken_links)
    print(f"\n   受影响最多的文件 (Top 15):")
    for file_path, count in file_counts.most_common(15):
        print(f"     [{count:4d}] {file_path}")

    return broken_links


if __name__ == '__main__':
    start_time = time.time()
    broken = main()
    elapsed = time.time() - start_time
    print(f"\n⏱️  总耗时: {elapsed:.0f}s ({elapsed/60:.1f} 分钟)")
