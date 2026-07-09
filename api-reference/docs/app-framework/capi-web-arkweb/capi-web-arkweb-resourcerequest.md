---
title: "ArkWeb_ResourceRequest_"
upstream_id: "harmonyos-references/capi-web-arkweb-resourcerequest"
catalog: "harmonyos-references"
content_hash: "b9ef69d4a2b1"
synced_at: "2026-07-09T00:58:55.658103"
---

# ArkWeb_ResourceRequest_

```
typedef struct ArkWeb_ResourceRequest_ ArkWeb_ResourceRequest
```

#### 概述

ArkWeb_ResourceRequest是被拦截的Scheme请求的详细信息结构体，包含请求的URL、HTTP方法、请求头等元数据。该结构体在ArkWeb_SchemeHandler的onRequestStart回调中作为参数传入，开发者通过它获取被拦截请求的完整信息，据此决定是否拦截以及如何构建自定义响应。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_scheme_handler.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-scheme-handler-h)
