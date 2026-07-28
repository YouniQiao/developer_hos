---
title: "NotificationInfo"
upstream_id: "harmonyos-references/js-apis-inner-notification-notificationinfo"
catalog: "harmonyos-references"
content_hash: "ca4e86bc5049"
synced_at: "2026-07-28T16:52:48.067157"
---

# NotificationInfo

通知订阅扩展能力中[onReceiveMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationsubscriberextensionability#onreceivemessage)回调的通知信息。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### NotificationInfo

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| hashCode | string | 是 | 否 | 通知的唯一标识符。 |
| notificationSlotType | [notificationManager.SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#slottype) | 是 | 否 | 通知渠道类型，标识通知所属的渠道分类（如社交通讯、服务提醒等）。不同渠道类型对应不同的提醒方式。 |
| content | [NotificationExtensionContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-notification-notificationextensioncontent) | 是 | 否 | 通知内容。包含通知的标题和正文。 |
| bundleName | string | 是 | 否 | 创建通知的应用包名。 |
| appIndex | number | 是 | 否 | 创建通知的应用的分身索引标识，仅在分身应用中生效。 |
| appName | string | 是 | 是 | 创建通知的应用名称。 |
| deliveryTime | number | 是 | 是 | 通知发布的时间戳。 数据格式：时间戳。 单位：毫秒。 |
| groupName | string | 是 | 是 | 通知组名称。 |
