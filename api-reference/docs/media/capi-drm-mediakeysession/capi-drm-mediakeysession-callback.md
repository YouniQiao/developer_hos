---
title: "MediaKeySession_Callback"
upstream_id: "harmonyos-references/capi-drm-mediakeysession-callback"
catalog: "harmonyos-references"
content_hash: "403d720a6df6"
synced_at: "2026-08-29T18:17:34.205839"
---

# MediaKeySession_Callback

```
typedef struct MediaKeySession_Callback {...} MediaKeySession_Callback
```

#### 概述

MediaKeySession_Callback结构体，用于监听密钥过期、密钥更改等事件，不返回媒体密钥会话实例，适用于单媒体密钥会话解密场景。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_mediakeysession.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysession-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [MediaKeySession_EventCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysession-h#mediakeysession_eventcallback) eventCallback | 正常事件回调函数指针，用于处理密钥过期等常规事件。当MediaKeySession状态发生常规变化时，系统会调用此回调函数通知应用。 |
| [MediaKeySession_KeyChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysession-h#mediakeysession_keychangecallback) keyChangeCallback | 密钥更改事件回调函数指针，用于处理密钥状态变化事件。当密钥状态发生变化（如密钥可用、密钥过期等）时，系统会调用此回调函数通知应用，回调参数中包含变化的密钥信息。 |
