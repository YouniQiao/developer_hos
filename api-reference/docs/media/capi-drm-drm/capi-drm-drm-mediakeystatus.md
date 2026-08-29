---
title: "DRM_MediaKeyStatus"
upstream_id: "harmonyos-references/capi-drm-drm-mediakeystatus"
catalog: "harmonyos-references"
content_hash: "00655c970a4f"
synced_at: "2026-08-29T18:17:33.960445"
---

# DRM_MediaKeyStatus

```
typedef struct DRM_MediaKeyStatus {...} DRM_MediaKeyStatus
```

#### 概述

媒体密钥状态。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t statusCount | 媒体密钥状态项的数量，表示statusName和statusValue数组中有效元素的个数。取值范围为[0, MAX_MEDIA_KEY_STATUS_COUNT]。 |
| char statusName[MAX_MEDIA_KEY_STATUS_COUNT][MAX_MEDIA_KEY_STATUS_NAME_LEN] | 媒体密钥状态名称数组，每行存储一个状态的名称。常见状态名称包括"Usable"（可用）、"Expired"（已过期）、"OutputRestricted"（输出受限）等，具体由DRM解决方案定义。数组维度由MAX_MEDIA_KEY_STATUS_COUNT和MAX_MEDIA_KEY_STATUS_NAME_LEN宏定义。 |
| char statusValue[MAX_MEDIA_KEY_STATUS_COUNT][MAX_MEDIA_KEY_STATUS_VALUE_LEN] | 媒体密钥状态值数组，每行存储对应statusName的状态值。状态值格式由DRM解决方案定义，可能包含时间戳、级别等信息。数组维度由MAX_MEDIA_KEY_STATUS_COUNT和MAX_MEDIA_KEY_STATUS_VALUE_LEN宏定义。 |
