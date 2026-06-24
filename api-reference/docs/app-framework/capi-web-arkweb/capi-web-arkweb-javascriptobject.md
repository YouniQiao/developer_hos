---
title: "ArkWeb_JavaScriptObject"
upstream_id: "harmonyos-references/capi-web-arkweb-javascriptobject"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:09.140237"
---

# ArkWeb_JavaScriptObject

```
typedef struct {...} ArkWeb_JavaScriptObject
```

#### 概述

注入的JavaScript结构体。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const uint8_t* buffer | 注入的JavaScript代码。 |
| size_t size | JavaScript代码长度。 |
| [ArkWeb_OnJavaScriptCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#arkweb_onjavascriptcallback) callback | JavaScript执行完成的回调。 |
| void* userData | 需要在回调中携带的自定义数据。 |
