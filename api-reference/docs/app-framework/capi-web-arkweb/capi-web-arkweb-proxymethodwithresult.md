---
title: "ArkWeb_ProxyMethodWithResult"
upstream_id: "harmonyos-references/capi-web-arkweb-proxymethodwithresult"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:09.222867"
---

# ArkWeb_ProxyMethodWithResult

```
typedef struct {...} ArkWeb_ProxyMethodWithResult
```

#### 概述

注入的Proxy方法通用结构体。

起始版本： 18

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* methodName | 注入的方法名。 |
| [ArkWeb_OnJavaScriptProxyCallbackWithResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#arkweb_onjavascriptproxycallbackwithresult) callback | Proxy方法执行的回调。 |
| void* userData | 需要在回调中携带的自定义数据。 |
