---
title: "Camera_FrameShutterInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-frameshutterinfo"
catalog: "harmonyos-references"
content_hash: "c3ae880a77a4"
synced_at: "2026-07-09T01:00:25.997586"
---

# Camera_FrameShutterInfo

```
typedef struct Camera_FrameShutterInfo {...} Camera_FrameShutterInfo
```

#### 概述

帧快门回调信息。

起始版本： 11

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t captureId | 捕获id。 |
| uint64_t timestamp | 帧的时间戳，单位毫秒。 |
