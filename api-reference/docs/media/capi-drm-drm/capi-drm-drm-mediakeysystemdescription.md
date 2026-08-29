---
title: "DRM_MediaKeySystemDescription"
upstream_id: "harmonyos-references/capi-drm-drm-mediakeysystemdescription"
catalog: "harmonyos-references"
content_hash: "b0dbfc5f8646"
synced_at: "2026-08-29T18:17:33.988465"
---

# DRM_MediaKeySystemDescription

```
typedef struct DRM_MediaKeySystemDescription {...} DRM_MediaKeySystemDescription
```

#### 概述

DRM解决方案名称及其UUID的列表。

起始版本： 12

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char name[MAX_MEDIA_KEY_SYSTEM_NAME_LEN] | DRM插件的名称，用于唯一标识一个DRM解决方案。名称格式由DRM解决方案定义，如"com.widevine.alpha"、"com.microsoft.playready"等。数组长度由MAX_MEDIA_KEY_SYSTEM_NAME_LEN宏定义。 |
| uint8_t uuid[DRM_UUID_LEN] | DRM系统的UUID（通用唯一标识符），用于唯一标识一个DRM内容保护系统。UUID长度为16字节（DRM_UUID_LEN），由DRM解决方案提供商分配。UUID与name对应同一DRM解决方案的不同表示形式。 |
