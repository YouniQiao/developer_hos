---
title: "使用限制"
original_url: /docs/dev/game-dev/gameobe-restrictions-0000002395350545
format: md
upstream_id: dev/game-dev/gameobe-restrictions-0000002395350545
last_sync: 2026-06-07
sync_hash: 87f6cdee
---
## 设备限制

设备限制是指联机对战SDK对用户终端的限制。

| 限制项 | 限制 |
| --- | --- |
| 设备品牌 | 无限制。 |
| Android OS | 无限制。 |
| iOS OS | 无限制。 |
| Web浏览器 | * Chrome 51及以上 * Edge 79及以上 * Firefox 54及以上 * 华为浏览器 * Safari 10及以上 * UC桌面浏览器 建议最新版(6.2.4094.1) * QQ桌面浏览器 10.4及以上 * IE11 |
| EMUI（针对华为手机） | 无限制。 |
| HMS Core APK | 无限制。 |
| 应用市场客户端 | 无限制。 |

## 配额限制

| 配额类型 | 配额 |
| --- | --- |
| 单个房间的maxPlayers值 | [1, 100] |
| 当前游戏所有房间maxPlayers值之和 | 同一时间，所有房间maxPlayers值之和≤10000。  说明：  如需申请调整，您可通过企业QQ：2851508860 / 2851508868联系华为工作人员。 |
| 接口限流 | 不同接口的流控值不同，具体分为：   * ①发送帧数据（sendFrame）：120次请求/s * ②房主更新房间信息（updateRoomProperties） + 发送消息给房间内其他玩家（sendToClient） + 发送消息给实时服务器（sendToServer） + 更新玩家自定义状态（updateCustomStatus） + 更新玩家自定义属性（updateCustomProperties） + 请求补帧（requestFrame）：50次请求/s * ③单个游戏的所有方法限流：10000次请求/s   说明：  如需申请调整，您可通过企业QQ：2851508860 / 2851508868联系华为工作人员。 |
| 补帧数 | 单次最大支持500帧。 |
