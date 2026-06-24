"""补建 694 条缺失 baseline。

策略：
  1. 拉所有 catalog 目录树，建 (normalized_title, catalog) → [objectId] 索引
  2. 对每条缺失 baseline 的文档：
     a. 同 catalog 内精确标题匹配 → 用该 objectId 调 API
     b. 同 catalog 内无匹配 → 跨 catalog 精确标题匹配（只取唯一匹配）
     c. 都不行 → 尝试用原 object_id 直接调 API（可能之前是临时网络错误）
     d. 仍不行 → 记录为 unmatched
  3. 匹配到正确 objectId 的调 API 建 baseline
"""
import sqlite3
import time
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed

import sync_runner
from sync_runner import (
    scan_doc_registry, fetch_doc, fetch_catalog_tree,
    _norm_title, _html_signature, all_catalogs,
)
import models


def build_title_index():
    """拉所有目录树，建 (title, catalog) → [(objectId, hw_title)] 索引。"""
    print("拉取目录树...")
    # 同 catalog 内：title → [(objectId, catalog)]
    by_cat = defaultdict(list)
    # 跨 catalog：title → [(objectId, catalog)]
    global_idx = defaultdict(list)

    for cat in sorted(all_catalogs()):
        leaves = fetch_catalog_tree(cat)
        for oid, title, bc, depth in leaves:
            nt = _norm_title(title)
            if nt:
                by_cat[(nt, cat)].append((oid, cat, title))
                global_idx[nt].append((oid, cat, title))
        print(f"  {cat}: {len(leaves)} leaves")
        time.sleep(0.5)

    return by_cat, global_idx


def find_correct_oid(info, by_cat, global_idx):
    """为缺失 baseline 的文档找到正确的 objectId。

    返回 (correct_oid, correct_catalog) 或 None。
    """
    title = info.get("title", "")
    nt = _norm_title(title)
    orig_oid = info.get("object_id", "")
    cat = info.get("catalog", "")

    if not nt:
        return None

    # L1: 同 catalog 内精确标题匹配
    same_cat = by_cat.get((nt, cat), [])
    if len(same_cat) == 1:
        return same_cat[0][0], same_cat[0][1]
    if len(same_cat) > 1:
        # 多个匹配，尝试用 object_id slug 匹配
        for oid, c, t in same_cat:
            if orig_oid in oid or oid in orig_oid:
                return oid, c
        # 无法消歧，跳过
        return None

    # L2: 跨 catalog 精确标题匹配（只接受唯一匹配）
    cross = global_idx.get(nt, [])
    if len(cross) == 1:
        return cross[0][0], cross[0][1]

    return None


def rebuild():
    models.init_db()
    conn = sqlite3.connect("sync_panel.db")
    baseline_ids = set(r[0] for r in conn.execute("SELECT object_id FROM doc_baselines").fetchall())
    conn.close()

    registry = scan_doc_registry()
    missing = []
    for uid, info in registry.items():
        if info.get("object_id", "") not in baseline_ids:
            missing.append((uid, info))

    print(f"\n缺 baseline: {len(missing)}")

    # 建标题索引
    by_cat, global_idx = build_title_index()

    # 匹配
    targets = []  # [(uid, info, correct_oid, correct_catalog)]
    unmatched = []
    ambiguous = []

    for uid, info in missing:
        result = find_correct_oid(info, by_cat, global_idx)
        if result:
            correct_oid, correct_cat = result
            targets.append((uid, info, correct_oid, correct_cat))
        else:
            # 最后再试一次用原 object_id 直接调 API
            # （可能之前是临时网络错误，不是 ID 问题）
            orig_oid = info.get("object_id", "")
            if "000000" in orig_oid:
                # 有标准编号，加入重试列表
                targets.append((uid, info, orig_oid, info.get("catalog", "")))
            else:
                unmatched.append((uid, info))

    print(f"\n匹配到正确 objectId: {len(targets)}")
    print(f"未匹配: {len(unmatched)}")

    # 并发拉 API 建 baseline
    total = len(targets)
    done = 0
    success = 0
    error = 0
    batch_updates = []
    error_list = []

    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {}
        for uid, info, oid, cat in targets:
            futures[executor.submit(fetch_doc, oid, cat)] = (uid, info, oid, cat)

        for future in as_completed(futures):
            uid, info, oid, cat = futures[future]
            result = future.result()
            done += 1
            if done % 50 == 0 or done == total:
                print(f"  {done}/{total}  (ok: {success}, err: {error})", flush=True)

            if result is None or not result["html"]:
                error += 1
                error_list.append((oid, cat, info.get("title", "")))
                continue

            content_hash = _html_signature(result["html"])
            batch_updates.append({
                "object_id": oid,
                "catalog": cat,
                "content_hash": content_hash,
                "doc_path": info["path"],
                "title": info.get("title") or result.get("title", ""),
            })
            success += 1

            if len(batch_updates) >= 200:
                models.upsert_baselines_batch(batch_updates)
                batch_updates = []

    if batch_updates:
        models.upsert_baselines_batch(batch_updates)

    print(f"\n=== 补建完成 ===")
    print(f"  成功: {success}")
    print(f"  失败: {error}")
    print(f"  未匹配(跳过): {len(unmatched)}")

    if error_list:
        print(f"\n=== 失败列表 (前30) ===")
        for oid, cat, title in error_list[:30]:
            print(f"  {oid:55s}  {cat:20s}  {title[:30]}")

    if unmatched:
        print(f"\n=== 未匹配列表 (前30) ===")
        for uid, info in unmatched[:30]:
            print(f"  {info.get('object_id','?'):35s}  {info.get('catalog','?'):20s}  {info.get('title','')[:30]}")

    # 最终统计
    conn = sqlite3.connect("sync_panel.db")
    total_baseline = conn.execute("SELECT count(*) FROM doc_baselines").fetchone()[0]
    conn.close()
    print(f"\nBaseline 总数: {total_baseline}")


if __name__ == "__main__":
    rebuild()
