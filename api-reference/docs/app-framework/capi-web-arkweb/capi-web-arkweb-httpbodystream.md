---
title: "ArkWeb_HttpBodyStream_"
upstream_id: "harmonyos-references/capi-web-arkweb-httpbodystream"
catalog: "harmonyos-references"
content_hash: "129c6f2219de"
synced_at: "2026-07-09T00:58:55.805140"
---

# ArkWeb_HttpBodyStream_

```
typedef struct ArkWeb_HttpBodyStream_ ArkWeb_HttpBodyStream
```

#### 概述

ArkWeb_HttpBodyStream是HTTP请求体流结构体，用于在自定义Scheme请求拦截场景中获取HTTP请求的body数据。当拦截到的POST等包含请求体的HTTP请求时，可通过该结构体读取请求体的原始字节流数据。该结构体通常与ArkWeb_ResourceRequest配合使用，在ArkWeb_SchemeHandler的回调中获取完整的请求信息。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_scheme_handler.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-scheme-handler-h)
