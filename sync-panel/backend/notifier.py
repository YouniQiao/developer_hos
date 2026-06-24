"""飞书 webhook 通知模块。

通过环境变量 FEISHU_WEBHOOK_URL 发送飞书机器人消息。
未配置 webhook 时静默跳过，不影响同步流程。

主要接口：
  send_notification(message)       发送一条文本消息
  notify_sync_complete(batch_id)   统计本次同步并发送完成通知
"""
import logging
import os
from typing import Optional

import httpx

import models

logger = logging.getLogger("sync-panel.notifier")

# 工作台前端地址（通知中的“点击查看”链接）
PANEL_URL = "https://sync.developer.harmonyos.cool/changes"


def send_notification(message: str) -> bool:
    """发送一条飞书文本消息。

    未配置 FEISHU_WEBHOOK_URL 时静默跳过，返回 False。
    发送失败仅记录日志、不抛异常，避免影响同步主流程。
    """
    webhook = os.environ.get("FEISHU_WEBHOOK_URL", "").strip()
    if not webhook:
        logger.debug("未配置 FEISHU_WEBHOOK_URL，跳过通知")
        return False

    payload = {"msg_type": "text", "content": {"text": message}}
    try:
        resp = httpx.post(webhook, json=payload, timeout=10)
        resp.raise_for_status()
        logger.info("飞书通知发送成功")
        return True
    except Exception:
        logger.exception("飞书通知发送失败")
        return False


def notify_sync_complete(batch_id: str) -> bool:
    """同步完成通知：统计本次 batch 的 added/deleted/modified 与 pending 数量后发送。

    added/deleted/modified 取自 sync_batches 表中已汇总的统计字段；
    pending 为该 batch 下 status='pending' 的变更条数。
    若本次无任何变更，则跳过通知。
    """
    batch: Optional[dict] = models.get_batch(batch_id)
    if not batch:
        logger.warning("批次 %s 不存在，跳过通知", batch_id)
        return False

    added = batch.get("added_count") or 0
    deleted = batch.get("deleted_count") or 0
    modified = batch.get("modified_count") or 0

    # 本次同步的 pending 变更数
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

    # 无任何变更时不发送，避免噪音
    if added == 0 and deleted == 0 and modified == 0 and pending == 0:
        logger.info("批次 %s 无变更，跳过通知", batch_id)
        return False

    message = (
        "📊 文档同步检测完成\n"
        f"新增: {added} 篇 | 删除: {deleted} 篇 | 变更: {modified} 篇\n"
        f"待处理: {pending} 条\n"
        f"👉 点击查看: {PANEL_URL}"
    )
    return send_notification(message)


if __name__ == "__main__":
    # 手动测试：python notifier.py [batch_id]
    # 不带参数则发送一条测试消息。
    import sys

    logging.basicConfig(level=logging.INFO)
    if len(sys.argv) > 1:
        notify_sync_complete(sys.argv[1])
    else:
        send_notification("✅ sync-panel 飞书通知测试")
