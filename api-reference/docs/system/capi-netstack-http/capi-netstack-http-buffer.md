---
title: "Http_Buffer"
upstream_id: "harmonyos-references/capi-netstack-http-buffer"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:55.024770"
---

# Http_Buffer

```
typedef struct Http_Buffer {...} Http_Buffer
```

#### 概述

HTTP缓存结构体。

起始版本： 20

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char *buffer | 缓存区数据。 |
| uint32_t length | 缓存区长度。 |
