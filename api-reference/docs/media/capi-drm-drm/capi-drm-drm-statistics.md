---
title: "DRM_Statistics"
upstream_id: "harmonyos-references/capi-drm-drm-statistics"
catalog: "harmonyos-references"
content_hash: "9b1adf3326be"
synced_at: "2026-07-09T01:00:28.512052"
---

# DRM_Statistics

```
typedef struct DRM_Statistics {...} DRM_Statistics
```

#### 概述

MediaKeySystem的度量信息。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t statisticsCount | 度量计数。 |
| char statisticsName[MAX_STATISTICS_COUNT][MAX_STATISTICS_NAME_LEN] | 度量信息名称集合。 |
| char statisticsDescription[MAX_STATISTICS_COUNT][MAX_STATISTICS_BUFFER_LEN] | 度量信息描述集合。 |
