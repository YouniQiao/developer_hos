---
title: "Http_HeaderEntry"
upstream_id: "harmonyos-references/capi-netstack-http-headerentry"
catalog: "harmonyos-references"
content_hash: "07d44e1bbd2f"
synced_at: "2026-07-09T00:59:30.233566"
---

# Http_HeaderEntry

```
typedef struct Http_HeaderEntry {...} Http_HeaderEntry
```

#### 概述

请求或者响应的标头的所有键值对。

起始版本： 20

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *key | 请求或者响应的标头中的键。 |
| [Http_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headervalue) *value | 请求或者响应的标头中的键对应的值，参考[Http_HeaderValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-headervalue)。 |
| struct Http_HeaderEntry *next | 链式存储。指向下一个Http_HeaderEntry。 |
