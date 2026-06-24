---
title: "Http_Request"
upstream_id: "harmonyos-references/capi-netstack-http-request"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:55.526664"
---

# Http_Request

```
typedef struct Http_Request {...} Http_Request
```

#### 概述

HTTP请求结构体。

起始版本： 20

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t requestId | HTTP请求的ID。 |
| char *url | HTTP请求的URL。 |
| [Http_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-requestoptions) *options | HTTP请求配置，指向Http_RequestOptions的指针，参考[Http_RequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-requestoptions)。 |
