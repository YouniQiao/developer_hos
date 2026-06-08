---
title: "元服务信息"
original_url: /docs/dev/atomic-dev/ascf/apis-basis/apis-service-info
format: md
upstream_id: dev/atomic-dev/ascf/apis-basis/apis-service-info
last_sync: 2026-06-07
sync_hash: 7a4843d8
---
## has.getServiceInfoSync

has.getServiceInfoSync(): Object

使用同步方式获取元服务信息。

**起始版本：** 1.0.9

**返回值：**

返回元服务信息的Object对象，包括以下字段。

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| appId | string | 元服务appId。 |
| version | string | 元服务版本号。 |

**示例：**

```
const serviceInfo = has.getServiceInfoSync();
console.info(serviceInfo.appId);
console.info(serviceInfo.version);
```
