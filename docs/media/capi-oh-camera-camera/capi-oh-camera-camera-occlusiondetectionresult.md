---
title: "Camera_OcclusionDetectionResult"
upstream_id: "harmonyos-references/capi-oh-camera-camera-occlusiondetectionresult"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:18.827049"
---

# Camera_OcclusionDetectionResult

```
typedef struct {...} Camera_OcclusionDetectionResult
```

#### 概述

相机镜头遮挡、脏污检测结果。

起始版本： 23

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool isCameraOccluded | 检查相机镜头是否被遮挡。true表示被遮挡，false表示未被遮挡。 |
| bool isCameraLensDirty | 检查相机镜头是否有脏污。true表示有脏污，false表示没有脏污。 |
