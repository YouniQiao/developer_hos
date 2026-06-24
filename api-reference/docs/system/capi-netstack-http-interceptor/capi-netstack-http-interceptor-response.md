---
title: "OH_Http_Interceptor_Response"
upstream_id: "harmonyos-references/capi-netstack-http-interceptor-response"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:55.904089"
---

# OH_Http_Interceptor_Response

```
typedef struct OH_Http_Interceptor_Response {
    Http_Buffer body;
    Http_ResponseCode responseCode;
    OH_Http_Interceptor_Headers *headers;
    Http_PerformanceTiming performanceTiming;
} OH_Http_Interceptor_Response;
```

#### 概述

定义拦截器的HTTP响应数据包结构。

起始版本： 24

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [http_interceptor_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-interceptor-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| Http_Buffer body | 响应体内容，详情请参考[Http_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-buffer)定义。 |
| Http_ResponseCode responseCode | 响应状态码，详情请参考[Http_ResponseCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h#http_responsecode) 枚举定义。 |
| OH_Http_Interceptor_Headers *headers | HTTP响应头信息，详情请参考[OH_Http_Interceptor_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-headers)定义。 |
| Http_PerformanceTiming performanceTiming | 响应性能信息，详情请参考[Http_PerformanceTiming](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-performancetiming)定义。 |
