"""APScheduler 定时任务：每天 03:00 (Asia/Shanghai) 自动执行文档同步检测。

同步完成后，若产生 pending 变更，通过飞书 webhook 发送通知。

在 main.py 启动时调用 start_scheduler()，应用关闭时调用
shutdown_scheduler()。使用 BackgroundScheduler，调度器在后台线程运行，
不会阻塞 FastAPI 主线程。
"""
import logging
from typing import Optional

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

import models
import notifier
import sync_runner

logger = logging.getLogger("sync-panel.scheduler")

# 同步触发时间：每天 03:00（Asia/Shanghai）
SYNC_HOUR = 3
SYNC_MINUTE = 0

# 模块级 scheduler 实例，避免重复创建
_scheduler: Optional[BackgroundScheduler] = None


def _daily_sync():
    """每日同步任务：执行 run_sync，若有 pending 变更则发飞书通知。"""
    logger.info("定时同步任务启动")
    try:
        batch_id = sync_runner.run_sync()
    except Exception as exc:
        logger.exception("定时同步执行失败")
        # 同步本身失败也通知一声
        notifier.send_notification(f"❌ 文档同步检测失败: {exc}")
        return

    # 统计本次同步产生的 pending 变更数
    try:
        with models.get_db() as conn:
            row = conn.execute(
                "SELECT COUNT(*) FROM changes "
                "WHERE sync_batch_id = ? AND status = 'pending'",
                (batch_id,),
            ).fetchone()
            pending = row[0] if row else 0
    except Exception:
        logger.exception("统计 pending 变更失败")
        pending = 0

    if pending > 0:
        logger.info("检测到 %d 条 pending 变更，发送飞书通知", pending)
        notifier.notify_sync_complete(batch_id)
    else:
        logger.info("本次同步无 pending 变更，跳过通知")


def start_scheduler() -> BackgroundScheduler:
    """启动后台调度器（幂等：重复调用不会创建多个实例）。"""
    global _scheduler
    if _scheduler is not None:
        logger.warning("scheduler 已启动，跳过重复启动")
        return _scheduler

    sched = BackgroundScheduler(timezone="Asia/Shanghai")
    sched.add_job(
        _daily_sync,
        trigger=CronTrigger(hour=SYNC_HOUR, minute=SYNC_MINUTE),
        id="daily_sync",
        replace_existing=True,
    )
    sched.start()
    _scheduler = sched
    logger.info("scheduler 已启动，每日 %02d:%02d (Asia/Shanghai) 触发同步",
                SYNC_HOUR, SYNC_MINUTE)
    return sched


def shutdown_scheduler(wait: bool = True) -> None:
    """关闭调度器（应用退出时调用）。"""
    global _scheduler
    if _scheduler is None:
        return
    try:
        _scheduler.shutdown(wait=wait)
    except Exception:
        logger.exception("关闭 scheduler 失败")
    _scheduler = None
    logger.info("scheduler 已关闭")


if __name__ == "__main__":
    # 手动测试：立即执行一次同步（不等定时点）
    logging.basicConfig(level=logging.INFO)
    _daily_sync()
