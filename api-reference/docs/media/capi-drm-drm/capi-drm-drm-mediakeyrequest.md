---
title: "DRM_MediaKeyRequest"
upstream_id: "harmonyos-references/capi-drm-drm-mediakeyrequest"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:20.746253"
---

# DRM_MediaKeyRequest

```
typedef struct DRM_MediaKeyRequest {...} DRM_MediaKeyRequest
```

#### 概述

媒体密钥请求。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [DRM_MediaKeyRequestType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h#drm_mediakeyrequesttype) type | 媒体密钥请求类型。 |
| int32_t dataLen | 媒体密钥请求数据长度。 |
| uint8_t data[MAX_MEDIA_KEY_REQUEST_DATA_LEN] | 发送到媒体密钥服务器的媒体密钥请求数据。 |
| char defaultUrl[MAX_DEFAULT_URL_LEN] | 媒体密钥服务器URL。 |
