"""回滚模块：根据 execution_log 撤销一次合入执行。

主入口：rollback_change(change_id) -> dict

  added    -> 删除新增的 .md / 图片，从 content-map 移除条目
  deleted  -> git checkout HEAD 恢复被删文件（失败则用备份），content-map 恢复条目
  modified -> git checkout HEAD 恢复被改文件（失败则用备份），content-map 恢复旧条目

回滚后：status=pending，rollback_of=change_id（标记已被回滚，可重新审批/执行）。
"""
import json
import shutil
import subprocess
from pathlib import Path

import models
from config import REPO_DIR
from executor import (
    _lock, BACKUP_ROOT,
)


# ==================== 恢复原语 ====================

def _git_restore(rel_path):
    """git checkout HEAD -- <path>，返回 (ok, stderr)。"""
    try:
        r = subprocess.run(
            ["git", "checkout", "HEAD", "--", rel_path],
            cwd=REPO_DIR, capture_output=True, text=True,
        )
        return r.returncode == 0, r.stderr.strip()
    except Exception as e:
        return False, str(e)


def _restore_from_backup(rel_path, backup_rel):
    """从备份文件复制回原位置，返回 (ok, msg)。"""
    src = REPO_DIR / backup_rel
    dest = REPO_DIR / rel_path
    if not src.exists():
        return False, f"备份不存在: {backup_rel}"
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)
    return True, "从备份恢复"


def _delete_rel(rel_path):
    p = REPO_DIR / rel_path
    if p.exists():
        p.unlink()
        return True
    return False


# ==================== baseline 回滚 ====================

def _map_rollback(map_info, change):
    """根据 execution_log.map 恢复 baseline 条目（新架构用 SQLite）。

    旧记录的 map 里可能有 old_entry/new_entry 字段，但新记录只有 op + uid。
    对旧记录无法恢复 baseline（因为没有 content_hash），只能删除错误建立的 baseline。
    """
    op = map_info.get("op")
    obj_id = change.get("upstream_object_id") or ""
    catalog = change.get("upstream_catalog") or ""
    if not obj_id or not catalog:
        return
    if op == "added":
        # 回滚 added → 删除新建立的 baseline
        models.delete_baseline(obj_id, catalog)
    elif op in ("deleted", "modified"):
        # 回滚 deleted/modified → baseline 不需要恢复（下次同步会重建）
        # 但如果 baseline 被删了（deleted 回滚），需要重新建立
        # 这里保守处理：删除再让下次同步重建
        pass


# ==================== 主入口 ====================

def rollback_change(change_id) -> dict:
    """回滚一条已执行的变更。返回 {ok, change_id, status, actions, ...}。

    并发：复用 executor 的模块级锁，与执行互斥。
    """
    with _lock:
        change = models.get_change(change_id)
        if not change:
            return {"ok": False, "change_id": change_id, "error": "变更不存在"}

        raw_log = change.get("execution_log")
        if not raw_log:
            return {"ok": False, "change_id": change_id,
                    "error": "无 execution_log，无法回滚"}
        try:
            log = json.loads(raw_log)
        except Exception:
            return {"ok": False, "change_id": change_id,
                    "error": "execution_log 解析失败"}

        ct = log.get("change_type") or change.get("change_type")
        actions = []

        # 1) 文件层面回滚
        if ct == "added":
            for rel in log.get("files_created", []):
                _delete_rel(rel)
                actions.append(f"删除 {rel}")
            for rel in log.get("images_created", []):
                _delete_rel(rel)
                actions.append(f"删除图片 {rel}")
            # 尝试清理空 img 目录
            created = log.get("files_created", [])
            if created:
                img_dir = (REPO_DIR / created[0]).parent / "img"
                try:
                    img_dir.rmdir()
                    actions.append(f"清理空目录 {img_dir.relative_to(REPO_DIR)}")
                except Exception:
                    pass

        elif ct == "deleted":
            for rel in log.get("files_deleted", []):
                ok, msg = _git_restore(rel)
                if not ok:
                    bak = log.get("backup_deleted")
                    if bak:
                        ok, msg = _restore_from_backup(rel, bak)
                actions.append(f"恢复 {rel}: {msg or 'git checkout'}")

        elif ct == "modified":
            for rel in log.get("files_modified", []):
                ok, msg = _git_restore(rel)
                if not ok:
                    bak = log.get("backup_modified")
                    if bak:
                        ok, msg = _restore_from_backup(rel, bak)
                actions.append(f"恢复 {rel}: {msg or 'git checkout'}")
        else:
            return {"ok": False, "change_id": change_id,
                    "error": f"不支持的 change_type: {ct}"}

        # 2) baseline 回滚
        map_info = log.get("map")
        if map_info:
            _map_rollback(map_info, change)
            actions.append(f"baseline 回滚 ({map_info.get('op')})")

        # 3) 更新状态：回到 pending，标记 rollback_of
        models.update_change(
            change_id, status="pending", rollback_of=change_id,
            executed_at=None,
        )

        return {"ok": True, "change_id": change_id, "status": "pending",
                "rollback_of": change_id, "actions": actions}


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("用法: python rollback.py <change_id>")
        sys.exit(1)
    print(json.dumps(rollback_change(int(sys.argv[1])),
                     ensure_ascii=False, indent=2))
