---
title: "NotificationExtensionSubscriptionInfo"
upstream_id: "harmonyos-references/js-apis-inner-notificationextensionsubscriptioninfo"
catalog: "harmonyos-references"
content_hash: "113b5b1869ac"
synced_at: "2026-07-28T16:52:48.514702"
---

# NotificationExtensionSubscriptionInfo

用于描述通知扩展订阅的信息。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### NotificationExtensionSubscriptionInfo

系统能力： SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| type | [notificationExtensionSubscription.SubscribeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationextensionsubscription#subscribetype) | 否 | 否 | 订阅的类型，指定通知扩展的订阅方式。当前仅支持SubscribeType.BLUETOOTH，表示通过蓝牙订阅通知。 |
| addr | string | 否 | 否 | 表示设备的唯一标识符。当type为SubscribeType.BLUETOOTH时，指定对应的蓝牙设备地址。例如："11:22:33:AA:BB:FF" |
