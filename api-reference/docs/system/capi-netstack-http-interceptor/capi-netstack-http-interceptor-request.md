---
title: "OH_Http_Interceptor_Request"
upstream_id: "harmonyos-references/capi-netstack-http-interceptor-request"
catalog: "harmonyos-references"
content_hash: "28a0757bf35e"
synced_at: "2026-07-09T00:59:30.640946"
---

# OH_Http_Interceptor_Request

```
typedef struct OH_Http_Interceptor_Request {
    Http_Buffer url;
    Http_Buffer method;
    OH_Http_Interceptor_Headers *headers;
    Http_Buffer body;
} OH_Http_Interceptor_Request;
```

#### 概述

定义拦截器的HTTP请求数据包结构。

起始版本： 24

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [http_interceptor_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-interceptor-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| Http_Buffer url | 请求URL，详情请参考[Http_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer)定义。 |
| Http_Buffer method | 请求方法，详情请参考[Http_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer)定义。 |
| OH_Http_Interceptor_Headers *headers | HTTP请求头信息，详情请参考[OH_Http_Interceptor_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-headers)定义。 |
| Http_Buffer body | 请求体内容，详情请参考[Http_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer)定义。 |
