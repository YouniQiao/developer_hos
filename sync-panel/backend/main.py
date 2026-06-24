"""FastAPI 入口：文档同步审批工作台 API。

启动：python main.py   （端口 8766）

路由总览：
  POST   /api/auth/login            登录获取 token
  GET    /api/dashboard             仪表盘统计
  GET    /api/changes               变更列表（筛选 + 分页）
  GET    /api/changes/{id}          变更详情
  GET    /api/changes/{id}/diff     modified 类型内容对比
  POST   /api/changes/{id}/approve  批准（需鉴权）
  POST   /api/changes/{id}/reject   驳回（需鉴权）
  POST   /api/changes/{id}/ignore   忽略（需鉴权，下次同步跳过）
  POST   /api/changes/batch/approve 批量批准（需鉴权）
  POST   /api/changes/batch/reject  批量驳回（需鉴权）
  POST   /api/changes/batch/ignore  批量忽略（需鉴权）
  GET    /api/sync/history          同步批次历史
  POST   /api/sync/trigger          触发同步（需鉴权，后台运行）
  GET    /api/sync/baseline-status  baseline 覆盖率
  POST   /api/sync/build-baselines  建立 baseline（需鉴权，后台运行）
  GET    /api/ignore-rules          忽略规则列表
  POST   /api/ignore-rules          添加规则（需鉴权）
  DELETE /api/ignore-rules/{id}     删除规则（需鉴权）
"""
import difflib
import threading
from contextlib import asynccontextmanager
from typing import List, Optional

from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import models
import sync_runner
import executor
import rollback
import progress
import scheduler
from config import REPO_DIR
from auth import require_auth, verify_password, create_token


# ==================== 生命周期：启动/关闭定时任务 ====================

@asynccontextmanager
async def lifespan(app: FastAPI):
    """应用启动时拉起 APScheduler，关闭时优雅停止。"""
    scheduler.start_scheduler()
    try:
        yield
    finally:
        scheduler.shutdown_scheduler()


app = FastAPI(title="文档同步审批工作台", lifespan=lifespan)

# CORS：允许 Vite 前端 (localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 启动时初始化数据库（幂等）
models.init_db()


# ==================== 请求体模型 ====================

class LoginReq(BaseModel):
    password: str


class BatchReq(BaseModel):
    ids: List[int]


class IgnoreRuleReq(BaseModel):
    rule_type: str          # path_prefix / object_id / title_contains
    rule_value: str
    reason: str = ""


# ==================== 鉴权 ====================

@app.post("/api/auth/login")
def login(req: LoginReq):
    """验证密码，成功返回 token。"""
    if not verify_password(req.password):
        raise HTTPException(status_code=401, detail="密码错误")
    token = create_token()
    return {"token": token}


# ==================== 仪表盘 ====================

@app.get("/api/dashboard")
def dashboard():
    """仪表盘：当前待处理统计 + 已处理统计 + 最近同步批次。"""
    with models.get_db() as conn:
        # 待处理（各类型 pending 数量）
        pend_rows = conn.execute(
            "SELECT change_type, COUNT(*) AS cnt FROM changes "
            "WHERE status = 'pending' GROUP BY change_type"
        ).fetchall()
        pending = {r["change_type"]: r["cnt"] for r in pend_rows}

        # 已处理统计
        done_rows = conn.execute(
            "SELECT status, COUNT(*) AS cnt FROM changes "
            "WHERE status IN ('approved','rejected','ignored','done','failed') "
            "GROUP BY status"
        ).fetchall()
        processed = {r["status"]: r["cnt"] for r in done_rows}

    total_pending = sum(pending.values())
    batches = models.list_batches(limit=10)
    return {
        "pending": {
            "added": pending.get("added", 0),
            "deleted": pending.get("deleted", 0),
            "modified": pending.get("modified", 0),
        },
        "total_pending": total_pending,
        "processed": {
            "approved": processed.get("approved", 0),
            "rejected": processed.get("rejected", 0),
            "ignored": processed.get("ignored", 0),
            "done": processed.get("done", 0),
            "failed": processed.get("failed", 0),
        },
        "recent_batches": batches,
    }


# ==================== 变更列表 / 详情 / diff ====================

def _query_changes(change_type=None, section=None, status=None, search=None,
                   page=1, page_size=20):
    """带筛选 + 分页的 changes 查询，返回 (items, total)。"""
    where = "WHERE 1=1"
    args = []
    if change_type:
        where += " AND change_type = ?"
        args.append(change_type)
    if section:
        where += " AND section = ?"
        args.append(section)
    if status:
        where += " AND status = ?"
        args.append(status)
    if search:
        where += " AND (title LIKE ? OR doc_path LIKE ? OR breadcrumb LIKE ?)"
        pat = f"%{search}%"
        args.extend([pat, pat, pat])
    offset = (page - 1) * page_size
    with models.get_db() as conn:
        total = conn.execute(
            f"SELECT COUNT(*) FROM changes {where}", args
        ).fetchone()[0]
        rows = conn.execute(
            f"SELECT * FROM changes {where} ORDER BY id DESC LIMIT ? OFFSET ?",
            args + [page_size, offset],
        ).fetchall()
    return [dict(r) for r in rows], total


@app.get("/api/changes")
def list_changes_api(
    change_type: Optional[str] = Query(default=None, alias="type"),
    section: Optional[str] = Query(default=None),
    status: Optional[str] = Query(default=None),
    search: Optional[str] = Query(default=None),
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=200),
):
    """变更列表，支持 type/section/status/search 筛选与分页。"""
    items, total = _query_changes(
        change_type=change_type, section=section, status=status,
        search=search, page=page, page_size=page_size,
    )
    return {"items": items, "total": total, "page": page}


@app.get("/api/changes/sections")
def list_sections():
    """返回所有变更中出现的板块列表（按数量降序）。"""
    with models.get_db() as conn:
        rows = conn.execute(
            "SELECT section, COUNT(*) AS cnt "
            "FROM changes WHERE section IS NOT NULL AND section != '' "
            "GROUP BY section ORDER BY cnt DESC"
        ).fetchall()
    return [{"value": r["section"], "count": r["cnt"]} for r in rows]


@app.get("/api/changes/{change_id}")
def get_change_api(change_id: int):
    """单条变更详情。"""
    change = models.get_change(change_id)
    if not change:
        raise HTTPException(status_code=404, detail="变更不存在")
    return change


@app.get("/api/changes/{change_id}/diff")
def change_diff(change_id: int):
    """内容预览，按类型返回不同内容：

    - modified: 拉取上游新内容，转 Markdown 后与本地对比，返回 old/new/diff
    - added:    拉取上游内容，转 Markdown，返回 new_content（old 为空）
    - deleted:  读取本地文件正文，返回 old_content（new 为空）
    """
    change = models.get_change(change_id)
    if not change:
        raise HTTPException(status_code=404, detail="变更不存在")

    ct = change["change_type"]
    obj_id = change.get("upstream_object_id") or ""
    catalog = change.get("upstream_catalog") or ""

    # ---- added: 预览上游新文档内容 ----
    if ct == "added":
        result = sync_runner.fetch_doc(obj_id, catalog)
        new_html = result["html"] if result else ""
        if new_html:
            md_result = executor._html_to_md(new_html)
            new_content = md_result[0] if md_result else ""
        else:
            new_content = ""
        return {
            "old_content": "",
            "new_content": new_content,
            "diff_text": "",
        }

    # ---- deleted: 预览本地即将删除的文件内容 ----
    if ct == "deleted":
        old_content = ""
        doc_path = change.get("doc_path") or ""
        if doc_path:
            fp = REPO_DIR / doc_path
            if fp.exists():
                raw = fp.read_text(encoding="utf-8")
                if raw.startswith("---"):
                    parts = raw.split("---", 2)
                    old_content = parts[2].strip() if len(parts) >= 3 else raw
                else:
                    old_content = raw
        return {
            "old_content": old_content,
            "new_content": "",
            "diff_text": "",
        }

    # ---- modified: 完整 diff ----
    result = sync_runner.fetch_doc(obj_id, catalog)
    new_html = result["html"] if result else ""

    if new_html:
        md_result = executor._html_to_md(new_html)
        new_content = md_result[0] if md_result else ""
    else:
        new_content = ""

    old_content = ""
    if change.get("doc_path"):
        fp = REPO_DIR / change["doc_path"]
        if fp.exists():
            raw = fp.read_text(encoding="utf-8")
            if raw.startswith("---"):
                parts = raw.split("---", 2)
                old_content = parts[2].strip() if len(parts) >= 3 else raw
            else:
                old_content = raw

    diff_lines = list(difflib.unified_diff(
        old_content.splitlines(),
        new_content.splitlines(),
        fromfile="本地",
        tofile="上游",
        lineterm="",
    ))
    diff_text = "\n".join(diff_lines)

    return {
        "old_content": old_content,
        "new_content": new_content,
        "diff_text": diff_text,
    }


# ==================== 决策操作 ====================

@app.post("/api/changes/{change_id}/approve",
          dependencies=[Depends(require_auth)])
def approve(change_id: int):
    """批准单条变更。"""
    if not models.get_change(change_id):
        raise HTTPException(status_code=404, detail="变更不存在")
    models.decide_change(change_id, "approved", "web")
    return {"ok": True, "id": change_id, "status": "approved"}


@app.post("/api/changes/{change_id}/reject",
          dependencies=[Depends(require_auth)])
def reject(change_id: int):
    """驳回单条变更。"""
    if not models.get_change(change_id):
        raise HTTPException(status_code=404, detail="变更不存在")
    models.decide_change(change_id, "rejected", "web")
    return {"ok": True, "id": change_id, "status": "rejected"}


@app.post("/api/changes/{change_id}/ignore",
          dependencies=[Depends(require_auth)])
def ignore(change_id: int):
    """忽略单条变更——下次同步不再重复检测。"""
    if not models.get_change(change_id):
        raise HTTPException(status_code=404, detail="变更不存在")
    models.decide_change(change_id, "ignored", "web")
    return {"ok": True, "id": change_id, "status": "ignored"}


@app.post("/api/changes/batch/approve",
          dependencies=[Depends(require_auth)])
def batch_approve(req: BatchReq):
    """批量批准。"""
    updated = []
    for cid in req.ids:
        if models.get_change(cid):
            models.decide_change(cid, "approved", "web")
            updated.append(cid)
    return {"ok": True, "updated": updated}


@app.post("/api/changes/batch/reject",
          dependencies=[Depends(require_auth)])
def batch_reject(req: BatchReq):
    """批量驳回。"""
    updated = []
    for cid in req.ids:
        if models.get_change(cid):
            models.decide_change(cid, "rejected", "web")
            updated.append(cid)
    return {"ok": True, "updated": updated}


@app.post("/api/changes/batch/ignore",
          dependencies=[Depends(require_auth)])
def batch_ignore(req: BatchReq):
    """批量忽略。"""
    updated = []
    for cid in req.ids:
        if models.get_change(cid):
            models.decide_change(cid, "ignored", "web")
            updated.append(cid)
    return {"ok": True, "updated": updated}


# ==================== 执行 ====================

@app.post("/api/changes/{change_id}/execute",
          dependencies=[Depends(require_auth)])
def execute_change_api(change_id: int):
    """执行单条变更合入（后台线程）。"""
    change = models.get_change(change_id)
    if not change:
        raise HTTPException(status_code=404, detail="变更不存在")
    if change["status"] not in ("approved", "failed"):
        raise HTTPException(status_code=400, detail="仅 approved 或 failed 状态可执行")
    threading.Thread(target=executor.execute_change, args=(change_id,), daemon=True).start()
    return {"ok": True, "id": change_id, "status": "executing"}


@app.post("/api/changes/execute-all",
          dependencies=[Depends(require_auth)])
def execute_all_approved():
    """执行所有 approved 状态的变更（逐条顺序执行）。"""
    items, total = _query_changes(status="approved", page=1, page_size=500)
    if not items:
        return {"ok": True, "queued": 0, "message": "没有待执行的变更"}

    def run_batch(ids):
        for cid in ids:
            executor.execute_change(cid)

    ids = [item["id"] for item in items]
    threading.Thread(target=run_batch, args=(ids,), daemon=True).start()
    return {"ok": True, "queued": len(ids)}


@app.post("/api/changes/{change_id}/rollback",
          dependencies=[Depends(require_auth)])
def rollback_change_api(change_id: int):
    """回滚已执行的合入。"""
    change = models.get_change(change_id)
    if not change:
        raise HTTPException(status_code=404, detail="变更不存在")
    if change["status"] not in ("done", "failed"):
        raise HTTPException(status_code=400, detail="仅 done 或 failed 状态可回滚")
    result = rollback.rollback_change(change_id)
    return result


@app.get("/api/execution/status")
def execution_status():
    """当前执行任务进度（内存中）。"""
    return {"items": progress.get_all_progress()}


@app.get("/api/execution/history")
def execution_history():
    """执行历史：所有 done/failed 的变更。"""
    items, total = _query_changes(status="done", page=1, page_size=50)
    failed_items, _ = _query_changes(status="failed", page=1, page_size=50)
    items.extend(failed_items)
    items.sort(key=lambda x: x.get("executed_at") or x.get("created_at", ""), reverse=True)
    return {"items": items[:50], "total": len(items)}


# ==================== 同步 ====================

@app.get("/api/sync/history")
def sync_history():
    """同步批次列表。"""
    return {"batches": models.list_batches(limit=50)}


@app.post("/api/sync/trigger", dependencies=[Depends(require_auth)])
def trigger_sync():
    """触发一次同步：先创建 batch 拿到 id 立即返回，后台线程执行检测。"""
    batch_id = models.create_batch()
    threading.Thread(
        target=sync_runner.run_sync,
        kwargs={"batch_id": batch_id},
        daemon=True,
    ).start()
    return {"batch_id": batch_id, "status": "running"}


@app.get("/api/sync/baseline-status")
def baseline_status():
    """返回 baseline 建立状态：已建立多少条、本地文档总数。"""
    registry = sync_runner.scan_doc_registry()
    return {
        "baseline_count": models.baseline_count(),
        "doc_count": len(registry),
        "coverage": round(models.baseline_count() / max(len(registry), 1) * 100, 1),
    }


@app.post("/api/sync/build-baselines", dependencies=[Depends(require_auth)])
def build_baselines():
    """触发 baseline 建立（后台运行，全量拉 API 建立指纹基线）。"""
    def _build():
        sync_runner.build_baselines()
    threading.Thread(target=_build, daemon=True).start()
    return {"status": "running", "message": "baseline 建立中，预计需要数分钟"}


# ==================== 忽略规则 ====================

@app.get("/api/ignore-rules")
def list_ignore_rules_api():
    """忽略规则列表。"""
    return {"items": models.list_ignore_rules()}


@app.post("/api/ignore-rules", dependencies=[Depends(require_auth)])
def add_ignore_rule_api(req: IgnoreRuleReq):
    """添加忽略规则。"""
    rule_id = models.add_ignore_rule(req.rule_type, req.rule_value, req.reason)
    return {"ok": True, "id": rule_id}


@app.delete("/api/ignore-rules/{rule_id}",
            dependencies=[Depends(require_auth)])
def delete_ignore_rule_api(rule_id: int):
    """删除忽略规则。"""
    if not models.get_ignore_rule(rule_id):
        raise HTTPException(status_code=404, detail="规则不存在")
    models.delete_ignore_rule(rule_id)
    return {"ok": True}


# ==================== 启动 ====================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8766)
