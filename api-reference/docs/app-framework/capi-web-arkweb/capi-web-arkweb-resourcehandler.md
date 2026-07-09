---
title: "ArkWeb_ResourceHandler_"
upstream_id: "harmonyos-references/capi-web-arkweb-resourcehandler"
catalog: "harmonyos-references"
content_hash: "9e156851d29e"
synced_at: "2026-07-09T00:58:55.465815"
---

# ArkWeb_ResourceHandler_

```
typedef struct ArkWeb_ResourceHandler_ ArkWeb_ResourceHandler
```

#### 概述

ArkWeb_ResourceHandler是用于处理被拦截的Scheme请求的资源处理器结构体。在ArkWeb_SchemeHandler拦截到指定scheme的请求后，通过该结构体可以向Web组件返回自定义的响应数据，包括响应状态码、响应头、响应体等。该结构体在onRequestStart回调中作为参数传入，开发者通过它实现对被拦截请求的完全自定义响应。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_scheme_handler.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-scheme-handler-h)
