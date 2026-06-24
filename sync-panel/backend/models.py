"""SQLite 数据库模型与基础 CRUD（纯 sqlite3，无 ORM）。

4 张表：
  - sync_batches: 一次同步批次
  - changes:      单条文档变更（属于某个 batch）
  - ignore_rules: 自动忽略规则
  - auth_tokens:  访问令牌

使用：
  from models import init_db, get_db, ...
  init_db()          # 幂等，启动时调用一次
"""
import sqlite3
import uuid
from contextlib import contextmanager
from datetime import datetime

from config import DB_PATH


SCHEMA = """
CREATE TABLE IF NOT EXISTS sync_batches (
    id              TEXT PRIMARY KEY,
    started_at      TEXT NOT NULL,
    finished_at     TEXT,
    total_changes   INTEGER DEFAULT 0,
    added_count     INTEGER DEFAULT 0,
    deleted_count   INTEGER DEFAULT 0,
    modified_count  INTEGER DEFAULT 0,
    skipped_count   INTEGER DEFAULT 0,   -- 去重跳过的数量（已 pending 的重复变更）
    status          TEXT NOT NULL DEFAULT 'running'   -- running/completed/failed
);

CREATE TABLE IF NOT EXISTS changes (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    sync_batch_id     TEXT NOT NULL,
    change_type       TEXT NOT NULL,                 -- added/deleted/modified
    doc_path          TEXT,
    upstream_object_id TEXT,
    upstream_catalog  TEXT,
    title             TEXT,
    breadcrumb        TEXT,
    section           TEXT,
    old_hash          TEXT,
    new_hash          TEXT,
    status            TEXT NOT NULL DEFAULT 'pending',  -- pending/approved/rejected/ignored/executing/done/failed
    decided_at        TEXT,
    decided_by        TEXT,
    executed_at       TEXT,
    execution_log     TEXT,
    rollback_of       INTEGER,
    created_at        TEXT NOT NULL,
    FOREIGN KEY (sync_batch_id) REFERENCES sync_batches(id)
);
CREATE INDEX IF NOT EXISTS idx_changes_batch ON changes(sync_batch_id);
CREATE INDEX IF NOT EXISTS idx_changes_status ON changes(status);
CREATE INDEX IF NOT EXISTS idx_changes_type  ON changes(change_type);

CREATE TABLE IF NOT EXISTS ignore_rules (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    rule_type   TEXT NOT NULL,    -- path_prefix/object_id/title_contains
    rule_value  TEXT NOT NULL,
    reason      TEXT,
    created_at  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS auth_tokens (
    token       TEXT PRIMARY KEY,
    label       TEXT,
    created_at  TEXT NOT NULL
);

-- baseline 指纹：记录每篇文档最近一次从华为 API 拉取的内容指纹。
-- 同步时用这个做比对，不再依赖文件 frontmatter 的 upstream_hash。
CREATE TABLE IF NOT EXISTS doc_baselines (
    object_id       TEXT NOT NULL,          -- 华为文档 objectId（唯一）
    catalog         TEXT NOT NULL,          -- 所属 catalog
    doc_path        TEXT,                   -- 本地 .md 文件相对路径（可空，新增文档还没落地）
    title           TEXT,                   -- 文档标题
    content_hash    TEXT NOT NULL,          -- HTML 正文指纹 md5[:12]
    fetched_at      TEXT NOT NULL,          -- 上次拉取时间
    PRIMARY KEY (object_id, catalog)
);
"""


@contextmanager
def get_db():
    """获取 sqlite3 连接（上下文管理器，自动提交/回滚/关闭）。"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def init_db():
    """初始化数据库（幂等），创建所有表与索引。"""
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with get_db() as conn:
        conn.executescript(SCHEMA)
        # 迁移：给已有的 sync_batches 加 skipped_count 列
        try:
            conn.execute("ALTER TABLE sync_batches ADD COLUMN skipped_count INTEGER DEFAULT 0")
        except sqlite3.OperationalError:
            pass  # 列已存在


# ==================== sync_batches ====================

def create_batch():
    """创建一个新的 sync_batch（status=running），返回 batch_id (UUID)。"""
    batch_id = str(uuid.uuid4())
    with get_db() as conn:
        conn.execute(
            "INSERT INTO sync_batches (id, started_at, status) VALUES (?, ?, 'running')",
            (batch_id, datetime.now().isoformat()),
        )
    return batch_id


def get_batch(batch_id):
    with get_db() as conn:
        row = conn.execute(
            "SELECT * FROM sync_batches WHERE id = ?", (batch_id,)
        ).fetchone()
        return dict(row) if row else None


def list_batches(limit=50):
    with get_db() as conn:
        rows = conn.execute(
            "SELECT * FROM sync_batches ORDER BY started_at DESC LIMIT ?", (limit,)
        ).fetchall()
        return [dict(r) for r in rows]


def update_batch_stats(batch_id, *, status=None, total_changes=None,
                       added_count=None, deleted_count=None, modified_count=None,
                       skipped_count=None, finished_at=None):
    """部分更新 batch 统计字段（仅更新非 None 的字段）。"""
    sets, args = [], []
    for k, v in [("status", status), ("total_changes", total_changes),
                 ("added_count", added_count), ("deleted_count", deleted_count),
                 ("modified_count", modified_count), ("skipped_count", skipped_count),
                 ("finished_at", finished_at)]:
        if v is not None:
            sets.append(f"{k} = ?")
            args.append(v)
    if not sets:
        return
    args.append(batch_id)
    with get_db() as conn:
        conn.execute(
            f"UPDATE sync_batches SET {', '.join(sets)} WHERE id = ?", args
        )


def finish_batch(batch_id, status="completed"):
    update_batch_stats(batch_id, status=status,
                       finished_at=datetime.now().isoformat())


def delete_batch(batch_id):
    with get_db() as conn:
        conn.execute("DELETE FROM changes WHERE sync_batch_id = ?", (batch_id,))
        conn.execute("DELETE FROM sync_batches WHERE id = ?", (batch_id,))


# ==================== changes ====================

def add_change(**kwargs):
    """插入一条 change 记录。必需：sync_batch_id, change_type。其余可选。"""
    kwargs.setdefault("status", "pending")
    kwargs.setdefault("created_at", datetime.now().isoformat())
    cols = ", ".join(kwargs.keys())
    placeholders = ", ".join(["?"] * len(kwargs))
    with get_db() as conn:
        cur = conn.execute(
            f"INSERT INTO changes ({cols}) VALUES ({placeholders})",
            list(kwargs.values()),
        )
        return cur.lastrowid


def add_changes_batch(records):
    """批量插入 change 记录（单连接、单事务），返回自增 id 列表。

    records: list[dict]，每个 dict 至少含 sync_batch_id 与 change_type。
    不同记录可含不同键，缺失键以 NULL 填充。
    """
    if not records:
        return []
    now = datetime.now().isoformat()
    norm = []
    for r in records:
        r = dict(r)
        r.setdefault("status", "pending")
        r.setdefault("created_at", now)
        norm.append(r)
    keys = sorted({k for r in norm for k in r.keys()})
    cols = ", ".join(keys)
    placeholders = ", ".join(["?"] * len(keys))
    sql = f"INSERT INTO changes ({cols}) VALUES ({placeholders})"
    ids = []
    with get_db() as conn:
        for r in norm:
            cur = conn.execute(sql, [r.get(k) for k in keys])
            ids.append(cur.lastrowid)
    return ids


def get_change(change_id):
    with get_db() as conn:
        row = conn.execute(
            "SELECT * FROM changes WHERE id = ?", (change_id,)
        ).fetchone()
        return dict(row) if row else None


def list_changes(batch_id=None, status=None, change_type=None, limit=500, offset=0):
    q = "SELECT * FROM changes WHERE 1=1"
    args = []
    if batch_id is not None:
        q += " AND sync_batch_id = ?"
        args.append(batch_id)
    if status is not None:
        q += " AND status = ?"
        args.append(status)
    if change_type is not None:
        q += " AND change_type = ?"
        args.append(change_type)
    q += " ORDER BY id DESC LIMIT ? OFFSET ?"
    args.extend([limit, offset])
    with get_db() as conn:
        rows = conn.execute(q, args).fetchall()
        return [dict(r) for r in rows]


def update_change(change_id, **fields):
    """部分更新 change 字段。"""
    if not fields:
        return
    sets, args = [], []
    for k, v in fields.items():
        sets.append(f"{k} = ?")
        args.append(v)
    args.append(change_id)
    with get_db() as conn:
        conn.execute(
            f"UPDATE changes SET {', '.join(sets)} WHERE id = ?", args
        )


def decide_change(change_id, status, decided_by):
    """记录审批决定：approved/rejected/ignored 等。"""
    update_change(change_id, status=status, decided_by=decided_by,
                  decided_at=datetime.now().isoformat())


def get_ignored_signatures():
    """返回所有 status='ignored' 的变更指纹集合，供 sync_runner 跳过重复检测。

    返回: (modified_set, added_set, deleted_set)
      - modified_set: {(doc_path, new_hash)} — 内容变更用路径+新指纹
      - added_set:    {upstream_object_id}   — 新增用上游 object_id
      - deleted_set:  {doc_path}             — 删除用本地路径
    """
    modified, added, deleted = set(), set(), set()
    with get_db() as conn:
        rows = conn.execute(
            "SELECT change_type, doc_path, upstream_object_id, new_hash "
            "FROM changes WHERE status = 'ignored'"
        ).fetchall()
        for r in rows:
            if r["change_type"] == "modified":
                if r["doc_path"] and r["new_hash"]:
                    modified.add((r["doc_path"], r["new_hash"]))
            elif r["change_type"] == "added":
                if r["upstream_object_id"]:
                    added.add(r["upstream_object_id"])
            elif r["change_type"] == "deleted":
                if r["doc_path"]:
                    deleted.add(r["doc_path"])
    return modified, added, deleted


def get_pending_signatures():
    """返回所有 status='pending' 的变更指纹，供 sync_runner 去重。

    返回: (pending_mod_by_path, pending_add_oids, pending_del_paths)
      - pending_mod_by_path: {doc_path: (change_id, new_hash)}
      - pending_add_oids:    {upstream_object_id: change_id}
      - pending_del_paths:   {doc_path: change_id}
    """
    mod, add_o, del_p = {}, {}, {}
    with get_db() as conn:
        rows = conn.execute(
            "SELECT id, change_type, doc_path, upstream_object_id, new_hash "
            "FROM changes WHERE status = 'pending'"
        ).fetchall()
        for r in rows:
            if r["change_type"] == "modified" and r["doc_path"]:
                mod[r["doc_path"]] = (r["id"], r["new_hash"])
            elif r["change_type"] == "added" and r["upstream_object_id"]:
                add_o[r["upstream_object_id"]] = r["id"]
            elif r["change_type"] == "deleted" and r["doc_path"]:
                del_p[r["doc_path"]] = r["id"]
    return mod, add_o, del_p


def delete_change(change_id):
    with get_db() as conn:
        conn.execute("DELETE FROM changes WHERE id = ?", (change_id,))


# ==================== ignore_rules ====================

def add_ignore_rule(rule_type, rule_value, reason=""):
    with get_db() as conn:
        cur = conn.execute(
            "INSERT INTO ignore_rules (rule_type, rule_value, reason, created_at) "
            "VALUES (?, ?, ?, ?)",
            (rule_type, rule_value, reason, datetime.now().isoformat()),
        )
        return cur.lastrowid


def get_ignore_rule(rule_id):
    with get_db() as conn:
        row = conn.execute(
            "SELECT * FROM ignore_rules WHERE id = ?", (rule_id,)
        ).fetchone()
        return dict(row) if row else None


def list_ignore_rules():
    with get_db() as conn:
        rows = conn.execute(
            "SELECT * FROM ignore_rules ORDER BY id DESC"
        ).fetchall()
        return [dict(r) for r in rows]


def delete_ignore_rule(rule_id):
    with get_db() as conn:
        conn.execute("DELETE FROM ignore_rules WHERE id = ?", (rule_id,))


# ==================== auth_tokens ====================

def add_token(token, label=""):
    with get_db() as conn:
        conn.execute(
            "INSERT OR REPLACE INTO auth_tokens (token, label, created_at) "
            "VALUES (?, ?, ?)",
            (token, label, datetime.now().isoformat()),
        )


def get_token(token):
    with get_db() as conn:
        row = conn.execute(
            "SELECT * FROM auth_tokens WHERE token = ?", (token,)
        ).fetchone()
        return dict(row) if row else None


def list_tokens():
    with get_db() as conn:
        rows = conn.execute(
            "SELECT * FROM auth_tokens ORDER BY created_at DESC"
        ).fetchall()
        return [dict(r) for r in rows]


def delete_token(token):
    with get_db() as conn:
        conn.execute("DELETE FROM auth_tokens WHERE token = ?", (token,))


# ==================== doc_baselines ====================

def get_all_baselines():
    """返回所有 baseline 指纹，供 sync_runner 做比对。

    返回: {doc_path: {"object_id": str, "catalog": str, "title": str, "content_hash": str, "fetched_at": str}}
    用 doc_path 做 key，因为补建 baseline 时 object_id 可能和 frontmatter 的不同。
    """
    with get_db() as conn:
        rows = conn.execute(
            "SELECT object_id, catalog, doc_path, title, content_hash, fetched_at "
            "FROM doc_baselines"
        ).fetchall()
        return {
            r["doc_path"]: {
                "object_id": r["object_id"],
                "catalog": r["catalog"],
                "title": r["title"],
                "content_hash": r["content_hash"],
                "fetched_at": r["fetched_at"],
            }
            for r in rows
        }


def upsert_baseline(object_id, catalog, content_hash, doc_path=None, title=None):
    """插入或更新一条 baseline 指纹（UPSERT）。"""
    now = datetime.now().isoformat()
    with get_db() as conn:
        conn.execute(
            "INSERT INTO doc_baselines (object_id, catalog, doc_path, title, content_hash, fetched_at) "
            "VALUES (?, ?, ?, ?, ?, ?) "
            "ON CONFLICT(object_id, catalog) DO UPDATE SET "
            "  content_hash = excluded.content_hash, "
            "  fetched_at = excluded.fetched_at, "
            "  doc_path = COALESCE(excluded.doc_path, doc_baselines.doc_path), "
            "  title = COALESCE(excluded.title, doc_baselines.title)",
            (object_id, catalog, doc_path, title, content_hash, now),
        )


def upsert_baselines_batch(records):
    """批量 UPSERT baseline（单连接单事务）。

    records: [{object_id, catalog, content_hash, doc_path?, title?}, ...]
    """
    if not records:
        return
    now = datetime.now().isoformat()
    with get_db() as conn:
        for r in records:
            conn.execute(
                "INSERT INTO doc_baselines (object_id, catalog, doc_path, title, content_hash, fetched_at) "
                "VALUES (?, ?, ?, ?, ?, ?) "
                "ON CONFLICT(object_id, catalog) DO UPDATE SET "
                "  content_hash = excluded.content_hash, "
                "  fetched_at = excluded.fetched_at, "
                "  doc_path = COALESCE(excluded.doc_path, doc_baselines.doc_path), "
                "  title = COALESCE(excluded.title, doc_baselines.title)",
                (r["object_id"], r["catalog"], r.get("doc_path"),
                 r.get("title"), r["content_hash"], now),
            )


def delete_baseline(object_id, catalog):
    """删除一条 baseline（文档已从上游删除时调用）。"""
    with get_db() as conn:
        conn.execute(
            "DELETE FROM doc_baselines WHERE object_id = ? AND catalog = ?",
            (object_id, catalog),
        )


def baseline_count():
    """返回 baseline 总数。"""
    with get_db() as conn:
        return conn.execute("SELECT COUNT(*) FROM doc_baselines").fetchone()[0]
