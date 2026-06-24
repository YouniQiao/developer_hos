---
title: "Camera_ConcurrentInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-concurrentinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:17.402076"
---

# Camera_ConcurrentInfo

```
typedef struct Camera_ConcurrentInfo {...} Camera_ConcurrentInfo
```

#### 概述

相机并发能力信息。

起始版本： 18

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera_Device](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-device) camera | 相机实例。 |
| [Camera_ConcurrentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_concurrenttype) type | 相机并发状态。 |
| [Camera_SceneMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_scenemode)* sceneModes | 相机并发支持的模式。 |
| [Camera_OutputCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-outputcapability)* outputCapabilities | 相机输出能力集。 |
| uint32_t modeAndCapabilitySize | 相机输出能力集大小。 |
