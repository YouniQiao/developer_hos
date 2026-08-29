---
title: "deviceInfo错误码"
upstream_id: "harmonyos-references/errorcode-device-info"
catalog: "harmonyos-references"
content_hash: "dece29e8ca87"
synced_at: "2026-08-29T18:17:01.548734"
---

# deviceInfo错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 14700103 操作因权限被拒绝

错误信息

The operation on the system permission is denied.

错误描述

应用没有对应字段的权限时，系统会报此错误码。比如ohos.permission.sec.ACCESS_UDID权限。

可能原因

应用没有配置需要的权限，比如ohos.permission.sec.ACCESS_UDID。

处理步骤

在配置文件中添加相应的权限，例如：{"name": "ohos.permission.sec.ACCESS_UDID"}。不同字段可能需要不同权限，请参考[@ohos.deviceInfo (设备信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)。
