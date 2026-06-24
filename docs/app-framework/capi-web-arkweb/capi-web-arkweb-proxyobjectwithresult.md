---
title: "ArkWeb_ProxyObjectWithResult"
upstream_id: "harmonyos-references/capi-web-arkweb-proxyobjectwithresult"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:09.416470"
---

# ArkWeb_ProxyObjectWithResult

```
typedef struct {...} ArkWeb_ProxyObjectWithResult
```

#### 概述

注入的Proxy对象通用结构体。

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
