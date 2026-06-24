---
title: "ArkTS API错误码"
upstream_id: "harmonyos-references/fast-kit-errorcode"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:14.250627"
---

# ArkTS API错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 1023100001 数组长度无效

错误信息

Array length invalid.

错误描述

数组长度无效。

可能原因

传入的采样点数组长度不足2个。

处理步骤

检查传入的samples数组是否包含至少2个数据点。
