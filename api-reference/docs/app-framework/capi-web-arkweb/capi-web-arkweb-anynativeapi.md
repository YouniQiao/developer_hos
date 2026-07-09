---
title: "ArkWeb_AnyNativeAPI"
upstream_id: "harmonyos-references/capi-web-arkweb-anynativeapi"
catalog: "harmonyos-references"
content_hash: "a13541421ed8"
synced_at: "2026-07-09T00:58:55.124742"
---

# ArkWeb_AnyNativeAPI

```
typedef struct {...} ArkWeb_AnyNativeAPI
```

#### 概述

ArkWeb_AnyNativeAPI是ArkWeb Native API的基础结构体类型，用于统一表示通过[OH_ArkWeb_GetNativeAPI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-interface-h#oh_arkweb_getnativeapi)接口获取到的各类Native API结构体指针。该结构体包含一个size_t类型的size成员，用于记录当前结构体的大小，便于在不同版本的SDK与设备ROM之间进行二进制兼容性校验。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_interface.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-interface-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| size_t size | 结构体对应的大小。 |
