---
title: "OH_Http_Interceptor_Headers"
upstream_id: "harmonyos-references/capi-netstack-http-interceptor-headers"
catalog: "harmonyos-references"
content_hash: "1e3876ec3bcd"
synced_at: "2026-07-09T00:59:30.632670"
---

# OH_Http_Interceptor_Headers

```
typedef struct OH_Http_Interceptor_Headers {
    char *data;
    struct OH_Http_Interceptor_Headers *next;
} OH_Http_Interceptor_Headers;
```

#### 概述

定义拦截器的请求/响应头信息。

起始版本： 24

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [http_interceptor_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-interceptor-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *data | 拦截器请求/响应头信息。 |
| struct OH_Http_Interceptor_Headers *next | 指向下一个头信息的指针。 |
