---
title: "Http_HeaderValue"
upstream_id: "harmonyos-references/capi-netstack-http-headervalue"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:55.207617"
---

# Http_HeaderValue

```
typedef struct Http_HeaderValue {...} Http_HeaderValue
```

#### 概述

请求或者响应的标头映射的值类型。

起始版本： 20

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *value | 标头键值对的值。 |
| struct Http_HeaderValue *next | 链式存储。指向下一个Http_HeaderValue。 |
