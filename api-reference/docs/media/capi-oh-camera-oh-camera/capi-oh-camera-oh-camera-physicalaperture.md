---
title: "OH_Camera_PhysicalAperture"
upstream_id: "harmonyos-references/capi-oh-camera-oh-camera-physicalaperture"
catalog: "harmonyos-references"
content_hash: "29a1f7e460af"
synced_at: "2026-07-09T01:00:27.447048"
---

# OH_Camera_PhysicalAperture

```
typedef struct OH_Camera_PhysicalAperture {...} OH_Camera_PhysicalAperture
```

#### 概述

物理光圈配置。

起始版本： 24

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_Camera_ZoomRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-oh-camera-zoomrange) zoomRange | 变焦范围。 |
| float* apertures | 支持的光圈值数组。 |
| size_t apertureCount | 光圈值数量。 |
