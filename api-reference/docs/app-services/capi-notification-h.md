---
title: "notification.h"
upstream_id: "harmonyos-references/capi-notification-h"
catalog: "harmonyos-references"
content_hash: "6e7429e3f933"
synced_at: "2026-07-09T01:01:29.437256"
---

# notification.h

#### 概述

定义通知服务API接口。

引用文件： <NotificationKit/notification.h>

库： libohnotification.so

系统能力： SystemCapability.Notification.Notification

起始版本： 13

相关模块： [NOTIFICATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-notification)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [bool OH_Notification_IsNotificationEnabled(void)](#oh_notification_isnotificationenabled) | 查询当前应用通知使能状态。 |

#### 函数说明

#### [h2]OH_Notification_IsNotificationEnabled()

```
bool OH_Notification_IsNotificationEnabled(void)
```
 描述

查询当前应用通知使能状态。

起始版本： 13

返回：

| 类型 | 说明 |
| --- | --- |
| bool | true - 表示当前应用已使能通知。 false - 表示当前应用未使能通知。 |
