"""执行进度追踪（内存，非持久化）。SSE 友好。

进度只存在于进程内存，重启即丢失——它只用于实时反馈正在执行的合入任务，
持久状态由 changes.status / execution_log 承担。

用法：
  from progress import set_progress, get_progress, get_all_progress, clear_progress
"""
import threading
from typing import Optional

import models

_lock = threading.Lock()
# change_id -> {change_id, title, current_step, total_steps, message, status}
_store: dict = {}


def set_progress(change_id, step, total_steps, message, status="executing"):
    """更新某条变更的执行进度。

    title 首次设置时从数据库读取并缓存，避免每步都查库。
    """
    with _lock:
        title = _store.get(change_id, {}).get("title", "")
        if not title:
            ch = models.get_change(change_id)
            title = (ch or {}).get("title") or ""
        _store[change_id] = {
            "change_id": change_id,
            "title": title,
            "current_step": step,
            "total_steps": total_steps,
            "message": message,
            "status": status,
        }


def get_progress(change_id) -> Optional[dict]:
    """返回单条进度，不存在返回 None。"""
    with _lock:
        return _store.get(change_id)


def get_all_progress() -> list:
    """返回所有进度条目（含正在执行与刚完成的）。SSE 可按 status 自行过滤。"""
    with _lock:
        return list(_store.values())


def clear_progress(change_id):
    """清除某条进度（执行结束并通知前端后调用）。"""
    with _lock:
        _store.pop(change_id, None)
