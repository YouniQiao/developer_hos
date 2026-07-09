---
title: "DRM_OfflineMediakeyIdArray"
upstream_id: "harmonyos-references/capi-drm-drm-offlinemediakeyidarray"
catalog: "harmonyos-references"
content_hash: "5d19b9985236"
synced_at: "2026-07-09T01:00:28.621350"
---

# DRM_OfflineMediakeyIdArray

```
typedef struct DRM_OfflineMediakeyIdArray {...} DRM_OfflineMediakeyIdArray
```

#### 概述

离线媒体密钥ID数组。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t idsCount | ID计数。 |
| int32_t idsLen[MAX_OFFLINE_MEDIA_KEY_ID_COUNT] | ID长度集合。 |
| uint8_t ids[MAX_OFFLINE_MEDIA_KEY_ID_COUNT][MAX_OFFLINE_MEDIA_KEY_ID_LEN] | ID数据集合。 |
