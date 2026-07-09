---
title: "ArkWeb_ProxyObjectWithResult"
upstream_id: "harmonyos-references/capi-web-arkweb-proxyobjectwithresult"
catalog: "harmonyos-references"
content_hash: "bf1e44eb64b7"
synced_at: "2026-07-09T00:58:56.177696"
---

# ArkWeb_ProxyObjectWithResult

```
typedef struct {...} ArkWeb_ProxyObjectWithResult
```

#### 概述

ArkWeb_ProxyObjectWithResult是带返回值的JavaScript代理对象结构体，扩展了ArkWeb_ProxyObject的能力。该结构体将多个ArkWeb_ProxyMethodWithResult组织成对象注入到Web页面中，支持JavaScript调用Native方法后获取返回值。适用于需要向Web前端返回结构化执行结果的API场景。

起始版本： 18

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* objName | 注入的对象名。 |
| const [ArkWeb_ProxyMethodWithResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-proxymethodwithresult)* methodList | 注入的对象携带的方法结构体数组。 |
| size_t size | 方法结构体数组的长度。 |
