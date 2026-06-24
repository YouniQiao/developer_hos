---
title: "deviceInfo错误码"
upstream_id: "harmonyos-references/errorcode-device-info"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:14.007170"
---

# deviceInfo错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 14700103 操作权限被拒绝

错误信息

The operation on the system permission is denied.

错误描述

应用没有对应字段的权限时，系统会报此错误码。比如ohos.permission.sec.ACCESS_UDID权限。

可能原因

应用没有配置需要的权限，比如ohos.permission.sec.ACCESS_UDID。

处理步骤

添加相应的权限。
