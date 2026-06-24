---
title: "DRM_KeysInfo"
upstream_id: "harmonyos-references/capi-drm-drm-keysinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:21.066043"
---

# DRM_KeysInfo

```
typedef struct DRM_KeysInfo {...} DRM_KeysInfo
```

#### 概述

媒体密钥信息。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t keysInfoCount | 密钥计数。 |
| uint8_t keyId[MAX_KEY_INFO_COUNT][MAX_KEY_ID_LEN] | 密钥ID集合。 |
| char statusValue[MAX_KEY_INFO_COUNT][MAX_KEY_STATUS_VALUE_LEN] | 密钥状态值。 |
