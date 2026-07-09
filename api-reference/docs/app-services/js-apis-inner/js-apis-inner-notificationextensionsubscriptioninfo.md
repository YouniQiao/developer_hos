---
title: "NotificationExtensionSubscriptionInfo"
upstream_id: "harmonyos-references/js-apis-inner-notificationextensionsubscriptioninfo"
catalog: "harmonyos-references"
content_hash: "e19f80f013e7"
synced_at: "2026-07-09T01:01:28.944707"
---

# NotificationExtensionSubscriptionInfo

用于描述通知扩展订阅的信息。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### NotificationExtensionSubscriptionInfo

系统能力： SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| type | [notificationExtensionSubscription.SubscribeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationextensionsubscription#subscribetype) | 否 | 否 | 表示订阅的类型，包括通过蓝牙订阅通知。 |
| addr | string | 否 | 否 | 表示设备的唯一标识符。例如："11:22:33:AA:BB:FF" |
