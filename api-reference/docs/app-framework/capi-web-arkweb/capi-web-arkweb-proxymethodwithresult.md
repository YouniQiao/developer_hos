---
title: "ArkWeb_ProxyMethodWithResult"
upstream_id: "harmonyos-references/capi-web-arkweb-proxymethodwithresult"
catalog: "harmonyos-references"
content_hash: "803acf93df13"
synced_at: "2026-08-29T18:16:03.522460"
---

# ArkWeb_ProxyMethodWithResult

```
typedef struct {...} ArkWeb_ProxyMethodWithResult
```

#### 概述

ArkWeb_ProxyMethodWithResult是带返回值的JavaScript代理方法结构体，扩展了ArkWeb_ProxyMethod的能力，支持在JavaScript调用Native方法后获取返回值。该结构体在方法名称和回调函数的基础上，增加了返回值处理能力，适用于需要向Web前端返回执行结果的调用场景。

起始版本： 18

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* methodName | 注入到JavaScript环境的Native方法名称，用于在Web前端调用指定的Native方法。该参数必须为非空指针，建议使用具有明确业务含义的命名，避免与JavaScript已有方法冲突。 |
| [ArkWeb_OnJavaScriptProxyCallbackWithResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#arkweb_onjavascriptproxycallbackwithresult) callback | JavaScript调用Native代理方法时执行的回调函数，用于处理方法调用并返回执行结果。该参数必须为有效的函数指针，不能为NULL。 |
| void* userData | 自定义数据，由调用方分配和释放，需确保在回调执行期间保持有效，用于在回调中传递业务上下文或状态对象。不传时为NULL。 |
