---
title: "DRM_MediaKeySystemInfo"
upstream_id: "harmonyos-references/capi-drm-drm-mediakeysysteminfo"
catalog: "harmonyos-references"
content_hash: "7969f03fc593"
synced_at: "2026-08-29T18:17:33.970337"
---

# DRM_MediaKeySystemInfo

```
typedef struct DRM_MediaKeySystemInfo {...} DRM_MediaKeySystemInfo
```

#### 概述

加密媒体内容的DRM信息。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t psshCount | PSSH信息的数量，表示psshInfo数组中有效元素的个数。一个媒体文件可能包含多个DRM系统的PSSH，取值范围为[0, MAX_PSSH_INFO_COUNT]。 |
| [DRM_PsshInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm-drm-psshinfo) psshInfo[MAX_PSSH_INFO_COUNT] | PSSH信息数组，每项包含一个DRM内容保护系统专用头的信息。数组长度由MAX_PSSH_INFO_COUNT宏定义，每项包含DRM系统UUID和初始化数据。 |
