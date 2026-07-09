---
title: "ArkWeb_ProxyObject"
upstream_id: "harmonyos-references/capi-web-arkweb-proxyobject"
catalog: "harmonyos-references"
content_hash: "f0592ac5b962"
synced_at: "2026-07-09T00:58:56.159911"
---

# ArkWeb_ProxyObject

```
typedef struct {...} ArkWeb_ProxyObject
```

#### 概述

ArkWeb_ProxyObject是注入到Web页面的JavaScript代理对象结构体，用于将一组相关的ArkWeb_ProxyMethod方法组织成对象整体暴露给Web前端。该结构体指定了对象在JavaScript中的名称（objName）、包含的方法数组（methodList）和方法数量（size），使得Native应用可以向Web页面暴露结构化的API集合。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* objName | 注入的对象名。 |
| const [ArkWeb_ProxyMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-proxymethod)* methodList | 注入的对象携带的方法结构体数组。 |
| size_t size | 方法结构体数组的长度。 |
