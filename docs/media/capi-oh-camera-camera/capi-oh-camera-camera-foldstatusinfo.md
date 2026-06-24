---
title: "Camera_FoldStatusInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-foldstatusinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:17.272642"
---

# Camera_FoldStatusInfo

```
typedef struct Camera_FoldStatusInfo {...} Camera_FoldStatusInfo
```

#### 概述

折叠状态信息。

起始版本： 13

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device)** supportedCameras | 相机实例列表。 |
| uint32_t cameraSize | 相机列表数量。 |
| [Camera_FoldStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_foldstatus) foldStatus | 当前折叠状态。 |
