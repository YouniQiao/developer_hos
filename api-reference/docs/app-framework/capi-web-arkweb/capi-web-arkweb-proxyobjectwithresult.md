---
title: "ArkWeb_ProxyObjectWithResult"
upstream_id: "harmonyos-references/capi-web-arkweb-proxyobjectwithresult"
catalog: "harmonyos-references"
content_hash: "020a4e617245"
synced_at: "2026-08-29T18:16:03.665315"
---

# ArkWeb_ProxyObjectWithResult

```
typedef struct {...} ArkWeb_ProxyObjectWithResult
```

#### 概述

ArkWeb_ProxyObjectWithResult是带返回值的JavaScript代理对象结构体，扩展了ArkWeb_ProxyObject的能力。该结构体将多个ArkWeb_ProxyMethodWithResult组织成对象注入到Web页面中，支持JavaScript调用Native方法后获取返回值。解决了ArkWeb_ProxyObject无法返回执行结果的问题，简化了开发流程，提升了开发效率。适用于需要向Web前端返回结构化执行结果的API场景。

起始版本： 18

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* objName | 注入的对象名，用于JavaScript调用时引用该对象。命名应遵循JavaScript标识符规则，不支持特殊字符。 |
| const [ArkWeb_ProxyMethodWithResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-proxymethodwithresult)* methodList | 注入的对象携带的方法结构体数组，数组长度由 size 参数指定。数组中的每个方法会被注册到Web页面中，JavaScript可通过“对象名.方法名”的方式进行调用。 |
| size_t size | 方法结构体数组的长度，即数组中元素的个数。该值必须与 methodList 数组的实际长度一致，最小值为 0，最大值取决于系统资源限制。 |
