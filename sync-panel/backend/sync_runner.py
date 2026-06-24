"""同步数据采集模块（重写版）。

不依赖 content-map.json，改为：
  1. 扫描本地 docs/ 目录 .md 文件 frontmatter 构建文档注册表
  2. 用 SQLite doc_baselines 表存 baseline 指纹（不写文件 frontmatter）
  3. 增量检测：只对比有 baseline 的文档
  4. 目录树比对检测 added/deleted（不依赖 content-map）

主入口：
  run_sync(sample=None, section=None, batch_id=None) -> batch_id
  build_baselines(sample=None) -> int  # 首次建立 baseline
"""
import hashlib
import os
import random
import re
import time
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from difflib import SequenceMatcher

import httpx

from config import (
    REPO_DIR, DOCS_DIR, DOC_API, TREE_API, API_HEADERS,
    CONCURRENCY, REQUEST_TIMEOUT, TREE_TIMEOUT, TREE_SLEEP, SKIP_CATALOGS,
    CATALOG_MAP, EXTRA_CATALOGS, RELEASE_NOTE_PATTERNS,
    get_catalog, all_catalogs,
)
import models


# ==================== 工具函数 ====================

def _parse_frontmatter(content):
    """解析 Markdown frontmatter（简易 key: value）。"""
    if not content.startswith("---"):
        return {}
    m = re.search(r"\n---\s*\n", content[3:])
    if not m:
        m = re.search(r"\n---", content[3:])
        if not m:
            return {}
    raw = content[3:3 + m.start()]
    fm = {}
    for line in raw.strip().split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip().strip('"').strip("'")
    return fm


def _html_signature(html):
    """HTML 正文文本指纹（md5 前 12 位）。

    去掉所有标签，压缩空白，取 md5[:12]。
    这是唯一的指纹算法，baseline 和检测都用它。
    """
    if not html:
        return ""
    text = re.sub(r"<[^>]+>", "", html)
    text = re.sub(r"\s+", " ", text).strip()
    return hashlib.md5(text.encode()).hexdigest()[:12]


def _norm_title(t):
    """标题归一化：去掉【】「」和空白，用于模糊匹配。"""
    return re.sub(r"[【】「」\s]", "", t or "")


def _extract_jsx_strings(text):
    """从大写开头的 JSX 组件标签中提取字符串内容。"""
    def replace_tag(m):
        inner = m.group(0)
        strings = re.findall(r"'([^']*)'", inner)
        strings += re.findall(r'"([^"]*)"', inner)
        return " ".join(strings)
    text = re.sub(r"<[A-Z]\w*[^>]*?/>", replace_tag, text, flags=re.DOTALL)
    text = re.sub(r"<[A-Z]\w*[^>]*?>", replace_tag, text, flags=re.DOTALL)
    return text


def _content_core(text, is_markdown=False):
    """归一化文本为纯内容核心（中文+字母+数字），用于跨格式比较。

    is_markdown=True 时处理 Markdown/MDX，否则处理 HTML。
    去掉所有格式标记（标签、markdown 符号、代码围栏等），只留内容文字。
    """
    if not text:
        return ""
    if is_markdown:
        # 去 frontmatter
        if text.startswith("---"):
            end = text.find("\n---", 3)
            if end != -1:
                text = text[end + 4:]
        # 去 import 语句
        text = re.sub(r"^import\s+.*$", "", text, flags=re.MULTILINE)
        # 从 JSX 组件标签中提取字符串内容
        text = _extract_jsx_strings(text)
        # 去代码围栏标记
        text = re.sub(r"```[a-z]*\n?", "\n", text)
        # 去剩余 HTML 标签
        text = re.sub(r"<[^>]+>", "", text)
        text = text.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")
        # 去图片
        text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text)
        # 链接只保留文本
        text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
        text = re.sub(r"`([^`]*)`", r"\1", text)
        text = re.sub(r"\\([_*>#\[\]()])", r"\1", text)
        text = text.replace("\\", "")
        text = re.sub(r"^#+\s*", "", text, flags=re.MULTILINE)
        text = re.sub(r"\*\*([^*]*)\*\*", r"\1", text)
        text = re.sub(r"\*([^*]*)\*", r"\1", text)
        text = re.sub(r"^\s*[\-\*\+]\s+", "", text, flags=re.MULTILINE)
        text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.MULTILINE)
        text = re.sub(r"\|", " ", text)
        text = re.sub(r"查看源码[：:].*?$", "", text, flags=re.MULTILINE)
        text = re.sub(r"^---+$", "", text, flags=re.MULTILINE)
    else:
        # 去掉 <h1> 标题（标题在 frontmatter 中，不属于正文内容）
        text = re.sub(r"<h1[^>]*>.*?</h1>", "", text, flags=re.DOTALL | re.IGNORECASE)
        text = re.sub(r"<[^>]+>", "", text)
        text = text.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")
        text = text.replace("&nbsp;", " ").replace("&quot;", '"')

    # 共同：去 [h2] [h3] 等标记
    text = re.sub(r"\[h[1-6]\]", "", text)
    # 只保留中文、字母、数字
    text = re.sub(r"[^\u4e00-\u9fff\u3400-\u4dbfa-zA-Z0-9]", "", text)
    return text


def _content_sig(text, is_markdown=False):
    """内容指纹：归一化后取 md5[:12]。"""
    core = _content_core(text, is_markdown)
    return hashlib.md5(core.encode()).hexdigest()[:12]


def _should_exclude(title, breadcrumb):
    """排除 Release Notes 类节点。"""
    full = title + " ".join(breadcrumb)
    for pat in RELEASE_NOTE_PATTERNS:
        if re.search(pat, full, re.IGNORECASE):
            return True
    return False


# ==================== 文档注册表：从 frontmatter 扫描 ====================

def scan_doc_registry():
    """扫描本地 docs/ 目录所有 .md 文件的 frontmatter，构建文档注册表。

    返回: {uid: {"path", "title", "upstream_url", "object_id", "catalog"}}
      - uid: frontmatter 里的 upstream_id（华为文档唯一标识）
      - 没有 upstream_id 的文件视为本地原创，跳过
    """
    registry = {}
    for fp in DOCS_DIR.rglob("*.md"):
        if "/img/" in str(fp):
            continue
        try:
            raw = fp.read_text(encoding="utf-8")
        except Exception:
            continue
        fm = _parse_frontmatter(raw)
        uid = fm.get("upstream_id", "")
        if not uid:
            # 没有 upstream_id → 本地原创文档，跳过
            continue
        rel_path = str(fp.relative_to(REPO_DIR))
        # 清理 uid 中的 __dup 后缀
        clean_uid = uid.split("__dup")[0]
        object_id = clean_uid.rsplit("/", 1)[-1] if "/" in clean_uid else clean_uid
        registry[clean_uid] = {
            "path": rel_path,
            "title": fm.get("title", ""),
            "upstream_url": fm.get("original_url", ""),
            "object_id": object_id,
            "catalog": get_catalog(rel_path),
        }
    return registry


# ==================== 华为 API 调用 ====================

def fetch_doc(object_id, catalog_name):
    """获取单篇文档内容，返回 {'html', 'title'} 或 None。"""
    body = {"objectId": object_id, "version": "",
            "catalogName": catalog_name, "language": "cn"}
    try:
        r = httpx.post(DOC_API, json=body, headers=API_HEADERS,
                       timeout=REQUEST_TIMEOUT)
        r.raise_for_status()
        data = r.json()
    except Exception:
        return None
    value = data.get("value", {})
    content_info = value.get("content", {})
    return {"html": content_info.get("content", ""), "title": value.get("title", "")}


def fetch_catalog_tree(catalog_name):
    """拉取整个 catalog 的目录树，返回叶子节点 [(objectId, title, breadcrumb, depth)]。"""
    body = {"catalogName": catalog_name, "version": "", "language": "cn"}
    try:
        r = httpx.post(TREE_API, json=body, headers=API_HEADERS,
                       timeout=TREE_TIMEOUT)
        r.raise_for_status()
        data = r.json()
    except Exception:
        return []
    value = data.get("value", {})
    nodes = value.get("catalogTreeList", [])
    if not isinstance(nodes, list):
        nodes = [nodes] if nodes else []

    leaves = []

    def walk(ns, breadcrumb, depth):
        for n in ns:
            if isinstance(n, str):
                continue
            title = n.get("nodeName", "")
            oid = n.get("relateDocument", "")
            is_leaf = n.get("isLeaf", False)
            children = n.get("children", [])
            bc = breadcrumb + [title]
            if is_leaf and oid:
                leaves.append((oid, title, bc, depth))
            walk(children, bc, depth + 1)

    walk(nodes, [], 0)
    return leaves


# ==================== 目录树比对（added / deleted）====================

def _detect_added_deleted(registry):
    """目录树比对，返回 (added_list, deleted_list)。

    registry: scan_doc_registry() 的返回值

    added_list: [{'catalog','object_id','title','breadcrumb','depth'}, ...]
    deleted_list: [{'upstream_id','title','path','catalog','object_id'}, ...]
    """
    # 1. 拉取所有 catalog 目录树
    tree_docs = {}
    for cat in sorted(all_catalogs()):
        leaves = fetch_catalog_tree(cat)
        if leaves:
            tree_docs[cat] = leaves
        time.sleep(TREE_SLEEP)

    # 2. 构建本地文档索引
    #    global_seg_index: object_id → [uid]（跨 catalog，L1 精确匹配用）
    #    cat_title_index:  (norm_title, catalog) → [uid]（L2 同 catalog 标题匹配用）
    global_seg_index = defaultdict(list)  # object_id → [uid, ...]
    cat_title_index = defaultdict(list)   # (norm_title, catalog) → [uid, ...]
    for uid, info in registry.items():
        seg = info["object_id"]
        global_seg_index[seg].append(uid)
        # x 前缀兼容：目录树里 50101 vs 本地 x50101
        if seg.startswith("x") and seg[1:].isdigit():
            global_seg_index[seg[1:]].append(uid)
        elif seg.isdigit():
            global_seg_index["x" + seg].append(uid)
        nt = _norm_title(info.get("title", ""))
        cat = info.get("catalog", "")
        if nt and cat:
            cat_title_index[(nt, cat)].append(uid)

    # 3. 收集目录树所有叶子（排除 SKIP_CATALOGS）
    #    Release Notes 节点标记为 excluded，但仍参与匹配和 deleted 检测
    all_leaves = []
    for cat, leaves in tree_docs.items():
        if cat in SKIP_CATALOGS:
            continue
        for oid, hw_title, bc, depth in leaves:
            excluded = _should_exclude(hw_title, bc)
            all_leaves.append((cat, oid, hw_title, bc, depth, excluded))

    # 4. 匹配
    #    L1: objectId 精确匹配（跨 catalog）
    #    L2: 同 catalog 内标题精确匹配，多个时用 slug 消歧
    #    Release Notes 节点参与匹配但不报为 added
    matched = set()
    added = []
    for cat, oid, hw_title, bc, depth, excluded in all_leaves:
        # L1: objectId 精确匹配
        if oid in global_seg_index:
            for uid in global_seg_index[oid]:
                matched.add(uid)
            continue
        # L2: 同 catalog 内标题匹配 + 完整路径 slug 验证
        nht = _norm_title(hw_title)
        if nht:
            same_cat = cat_title_index.get((nht, cat), [])
            if same_cat:
                # 从 oid 提取 slug 前缀（去掉尾部数字 ID）
                oid_slug = re.sub(r"-\d+$", "", oid).lower()
                has_alpha = any(c.isalpha() for c in oid_slug)

                if has_alpha:
                    # oid 含字母 → 用完整路径 slug 做 suffix 精确匹配
                    slug_matches = []
                    for uid in same_cat:
                        uid_full_slug = uid.replace("/", "-").lower()
                        if uid_full_slug.endswith(oid_slug) or oid_slug.endswith(uid_full_slug):
                            slug_matches.append(uid)
                    if len(slug_matches) == 1:
                        matched.add(slug_matches[0])
                        continue
                    # 0 或多个匹配 → 不确定，作为新增候选
                elif len(same_cat) == 1:
                    # oid 纯数字，同 catalog 内唯一同名 → 匹配
                    matched.add(same_cat[0])
                    continue
                # 其他情况 → 新增候选（excluded 节点除外）
        if excluded:
            continue
        # 未匹配 → 新增候选
        added.append({
            "catalog": cat,
            "object_id": oid,
            "title": hw_title,
            "breadcrumb": " > ".join(bc),
            "depth": depth,
        })

    # 5. 检测已删：本地有但目录树无（且同 catalog 内标题也没匹配到）
    #    使用所有叶子（含 excluded 的 Release Notes 节点）
    tree_cat_title_set = {(cat, _norm_title(t)) for cat, _, t, _, _, _ in all_leaves if _norm_title(t)}
    deleted = []
    for uid, info in registry.items():
        if uid in matched:
            continue
        nlt = _norm_title(info.get("title", ""))
        cat = info.get("catalog", "")
        if nlt and cat and (cat, nlt) in tree_cat_title_set:
            continue
        deleted.append({
            "upstream_id": uid,
            "title": info.get("title", ""),
            "path": info["path"],
            "catalog": info["catalog"],
            "object_id": info["object_id"],
        })

    return added, deleted


# ==================== 内容指纹检测（modified）====================

def _diff_one(uid_info, baselines):
    """单个文档的内容变化检测（线程安全，只读）。

    逻辑（local-vs-upstream 对比）：
      1. 读本地 .md 文件，算 _content_sig(is_markdown=True)
      2. 拉上游 HTML，算 _content_sig(is_markdown=False)
      3. 两个指纹不同 → 'changed'
      4. 相同 → 'unchanged'
      5. 无 baseline 且无本地文件 → 'no_baseline'
      6. 上游拉取失败 → 'error'
    """
    uid, info = uid_info
    fm_object_id = info["object_id"]
    fm_catalog = info["catalog"]
    doc_path = info["path"]

    # 用 doc_path 查 baseline（获取正确的 object_id）
    baseline = baselines.get(doc_path)
    api_object_id = baseline["object_id"] if baseline else fm_object_id
    api_catalog = baseline["catalog"] if baseline else fm_catalog

    # 读本地文件
    local_path = os.path.join(REPO_DIR, doc_path)
    try:
        local_raw = open(local_path, "r", encoding="utf-8").read()
        local_sig = _content_sig(local_raw, is_markdown=True)
    except Exception:
        local_sig = ""

    # 拉上游
    result = fetch_doc(api_object_id, api_catalog)
    if result is None or not result["html"]:
        return {"uid": uid, "path": doc_path, "type": "error",
                "catalog": api_catalog, "object_id": api_object_id}

    upstream_sig = _content_sig(result["html"], is_markdown=False)
    upstream_hash = _html_signature(result["html"])  # 保留用于 baseline 更新

    if not baseline or not baseline["content_hash"]:
        # 无 baseline → 仍可比 local vs upstream
        if local_sig and local_sig != upstream_sig:
            return {"uid": uid, "path": doc_path, "type": "changed",
                    "title": info.get("title", ""), "old_hash": local_sig[:12],
                    "new_hash": upstream_hash,
                    "object_id": api_object_id, "catalog": api_catalog}
        return {"uid": uid, "path": doc_path, "type": "no_baseline",
                "object_id": api_object_id, "catalog": api_catalog,
                "new_hash": upstream_hash, "title": result.get("title", "")}

    # local vs upstream
    if local_sig and local_sig != upstream_sig:
        return {"uid": uid, "path": doc_path, "type": "changed",
                "title": info.get("title", ""), "old_hash": local_sig[:12],
                "new_hash": upstream_hash,
                "object_id": api_object_id, "catalog": api_catalog}
    else:
        return {"uid": uid, "path": doc_path, "type": "unchanged",
                "object_id": api_object_id, "catalog": api_catalog,
                "new_hash": upstream_hash}


# ==================== 主入口：run_sync ====================

def run_sync(sample=None, section=None, batch_id=None):
    """执行一次同步检测，返回 batch_id。

    流程：
      1. 扫描本地文档注册表（从 frontmatter）
      2. 加载 baseline 指纹（从 SQLite）
      3. 目录树比对 → added / deleted
      4. 内容指纹比对（有 baseline 的才比） → modified
      5. 去重：跳过已有 pending / ignored 的变更
      6. 批量写入 changes 表
      7. 更新 baseline（changed/unchanged 的刷新 fetched_at 和 hash）
      8. 更新 batch 统计
    """
    models.init_db()
    if batch_id is None:
        batch_id = models.create_batch()

    try:
        # 1. 扫描本地文档注册表
        registry = scan_doc_registry()

        # 按板块筛选
        targets = dict(registry)
        if section:
            sec_prefix = f"docs/dev/{section}" if section != "FAQ" else f"docs/{section}"
            targets = {uid: info for uid, info in targets.items()
                       if sec_prefix in info["path"]}
        if sample and sample < len(targets):
            keys = random.sample(list(targets.keys()), sample)
            targets = {k: targets[k] for k in keys}

        # 2. 加载 baseline 和忽略签名
        baselines = models.get_all_baselines()
        ign_mod, ign_add, ign_del = models.get_ignored_signatures()
        pend_mod, pend_add, pend_del = models.get_pending_signatures()

        # 3. 目录树比对
        added, deleted = _detect_added_deleted(registry)

        # 过滤已忽略/已 pending 的新增和删除
        added = [d for d in added if d["object_id"] not in ign_add
                 and d["object_id"] not in pend_add]
        deleted = [d for d in deleted if d["path"] not in ign_del
                   and d["path"] not in pend_del]

        # 4. 内容指纹比对（只对比有 baseline 的文档）
        diff_targets = {uid: info for uid, info in targets.items()
                        if info["path"] in baselines}

        modified = []
        no_baseline = []
        baseline_updates = []  # 待批量更新的 baseline

        if diff_targets:
            with ThreadPoolExecutor(max_workers=CONCURRENCY) as executor:
                futures = {executor.submit(_diff_one, item, baselines): item
                           for item in diff_targets.items()}
                for future in as_completed(futures):
                    r = future.result()
                    if r["type"] == "changed":
                        modified.append(r)
                        # 记录 baseline 更新（hash 变了，下次比对用新 hash）
                        baseline_updates.append({
                            "object_id": r["object_id"],
                            "catalog": r["catalog"],
                            "content_hash": r["new_hash"],
                        })
                    elif r["type"] == "unchanged":
                        # hash 没变，也刷新 fetched_at（证明这次拉过了）
                        baseline_updates.append({
                            "object_id": r["object_id"],
                            "catalog": r["catalog"],
                            "content_hash": r["new_hash"],
                        })
                    elif r["type"] == "no_baseline":
                        no_baseline.append(r)

        # 5. 过滤已忽略/已 pending 的 modified
        new_modified = []
        updated_modified = 0
        for r in modified:
            existing = pend_mod.get(r["path"])
            if existing:
                existing_id, existing_hash = existing
                if existing_hash == r["new_hash"]:
                    continue
                else:
                    models.update_change(existing_id, new_hash=r["new_hash"],
                                         sync_batch_id=batch_id)
                    updated_modified += 1
            elif (r["path"], r["new_hash"]) not in ign_mod:
                new_modified.append(r)
        skipped_modified = len(modified) - len(new_modified) - updated_modified

        # 6. 组装 change 记录
        added_records = [{
            "sync_batch_id": batch_id,
            "change_type": "added",
            "doc_path": "",
            "upstream_object_id": d["object_id"],
            "upstream_catalog": d["catalog"],
            "title": d["title"],
            "breadcrumb": d["breadcrumb"],
            "section": d["catalog"],
        } for d in added]

        deleted_records = [{
            "sync_batch_id": batch_id,
            "change_type": "deleted",
            "doc_path": d["path"],
            "upstream_object_id": d["object_id"],
            "upstream_catalog": d["catalog"],
            "title": d["title"],
            "section": d["catalog"],
        } for d in deleted]

        modified_records = [{
            "sync_batch_id": batch_id,
            "change_type": "modified",
            "doc_path": r["path"],
            "upstream_object_id": r.get("object_id", ""),
            "upstream_catalog": r.get("catalog", ""),
            "title": r.get("title", ""),
            "section": r.get("catalog", ""),
            "old_hash": r["old_hash"],
            "new_hash": r["new_hash"],
        } for r in new_modified]

        # 7. 批量写入
        added_ids = models.add_changes_batch(added_records)
        deleted_ids = models.add_changes_batch(deleted_records)
        modified_ids = models.add_changes_batch(modified_records)

        # 8. 应用 ignore_rules
        for cid, d in zip(added_ids, added):
            _apply_ignore(cid, "", d["title"], d["object_id"])
        for cid, d in zip(deleted_ids, deleted):
            _apply_ignore(cid, d["path"], d["title"], d["upstream_id"])
        for cid, r in zip(modified_ids, new_modified):
            _apply_ignore(cid, r["path"], r.get("title", ""), r.get("object_id", ""))

        # 9. 更新 baseline（changed + unchanged 都刷新）
        if baseline_updates:
            models.upsert_baselines_batch(baseline_updates)

        # 10. 更新 batch 统计
        added_count = len(added_records)
        deleted_count = len(deleted_records)
        modified_count = len(modified_records)
        skipped_count = (skipped_modified + updated_modified
                         + (len(targets) - len(diff_targets)))  # 无 baseline 跳过的也算
        models.update_batch_stats(
            batch_id,
            status="completed",
            total_changes=added_count + deleted_count + modified_count,
            added_count=added_count,
            deleted_count=deleted_count,
            modified_count=modified_count,
            skipped_count=skipped_count,
            finished_at=datetime.now().isoformat(),
        )

    except Exception:
        models.update_batch_stats(
            batch_id, status="failed", finished_at=datetime.now().isoformat()
        )
        raise

    return batch_id


# ==================== 忽略规则匹配 ====================

def _match_ignore_rules(doc_path, title, object_id):
    """检查是否匹配 ignore_rules 表中的规则。"""
    rules = models.list_ignore_rules()
    for rule in rules:
        rt, rv = rule["rule_type"], rule["rule_value"]
        if rt == "path_prefix" and doc_path and doc_path.startswith(rv):
            return rule
        if rt == "object_id" and object_id and rv == object_id:
            return rule
        if rt == "title_contains" and title and rv in title:
            return rule
    return None


def _apply_ignore(change_id, doc_path, title, object_id):
    """若匹配 ignore_rules 则标记为 ignored。"""
    rule = _match_ignore_rules(doc_path, title, object_id)
    if rule:
        models.update_change(
            change_id, status="ignored",
            execution_log=f"auto-ignored by rule #{rule['id']} ({rule['rule_type']})",
        )
        return True
    return False


# ==================== Baseline 建立 ====================

def build_baselines(sample=None, section=None):
    """首次建立 baseline：对所有本地文档拉 API，存 content_hash 到 SQLite。

    返回建立的 baseline 数量。
    这个函数只需在首次使用时调用一次，之后 run_sync 会自动维护 baseline。
    """
    models.init_db()
    registry = scan_doc_registry()

    targets = dict(registry)
    if section:
        sec_prefix = f"docs/dev/{section}" if section != "FAQ" else f"docs/{section}"
        targets = {uid: info for uid, info in targets.items()
                   if sec_prefix in info["path"]}
    if sample and sample < len(targets):
        keys = random.sample(list(targets.keys()), sample)
        targets = {k: targets[k] for k in keys}

    print(f"建立 baseline: {len(targets)} 篇文档")
    total = len(targets)
    done = 0
    error_count = 0
    batch_updates = []

    with ThreadPoolExecutor(max_workers=CONCURRENCY) as executor:
        futures = {}
        for uid, info in targets.items():
            futures[executor.submit(fetch_doc, info["object_id"], info["catalog"])] = (uid, info)

        for future in as_completed(futures):
            uid, info = futures[future]
            result = future.result()
            done += 1
            if done % 100 == 0 or done == total:
                print(f"  {done}/{total}  (errors: {error_count})", flush=True)

            if result is None or not result["html"]:
                error_count += 1
                continue

            content_hash = _html_signature(result["html"])
            batch_updates.append({
                "object_id": info["object_id"],
                "catalog": info["catalog"],
                "content_hash": content_hash,
                "doc_path": info["path"],
                "title": info.get("title") or result.get("title", ""),
            })

            # 每 200 条写一次，避免内存堆积
            if len(batch_updates) >= 200:
                models.upsert_baselines_batch(batch_updates)
                batch_updates = []

    # 写剩余的
    if batch_updates:
        models.upsert_baselines_batch(batch_updates)

    print(f"\n=== Baseline 建立完成 ===")
    print(f"  成功: {total - error_count}  错误: {error_count}")
    return total - error_count


if __name__ == "__main__":
    import sys
    _sample = None
    _section = None
    _mode = "sync"
    for i, a in enumerate(sys.argv):
        if a == "--sample" and i + 1 < len(sys.argv):
            _sample = int(sys.argv[i + 1])
        elif a == "--section" and i + 1 < len(sys.argv):
            _section = sys.argv[i + 1]
        elif a == "--build-baseline":
            _mode = "baseline"

    if _mode == "baseline":
        build_baselines(sample=_sample, section=_section)
    else:
        bid = run_sync(sample=_sample, section=_section)
        b = models.get_batch(bid) or {}
        print(f"batch: {bid}")
        print(f"  added: {b.get('added_count', 0)}")
        print(f"  deleted: {b.get('deleted_count', 0)}")
        print(f"  modified: {b.get('modified_count', 0)}")
        print(f"  skipped: {b.get('skipped_count', 0)}")
