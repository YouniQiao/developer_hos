---
title: "OH_MediaKeySession_Callback"
upstream_id: "harmonyos-references/capi-drm-oh-mediakeysession-callback"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:21.698195"
---

# OH_MediaKeySession_Callback

```
typedef struct OH_MediaKeySession_Callback {...} OH_MediaKeySession_Callback
```

#### 概述

OH_MediaKeySession_Callback结构体，用于监听密钥过期、密钥更改等事件，返回媒体密钥会话实例，适用于多个媒体密钥会话的解密场景。

起始版本： 12

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_mediakeysession.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysession-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_MediaKeySession_EventCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysession-h#oh_mediakeysession_eventcallback) eventCallback | 正常事件回调，如密钥过期等。 |
| [OH_MediaKeySession_KeyChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-mediakeysession-h#oh_mediakeysession_keychangecallback) keyChangeCallback | 密钥更改事件的密钥更改回调。 |
