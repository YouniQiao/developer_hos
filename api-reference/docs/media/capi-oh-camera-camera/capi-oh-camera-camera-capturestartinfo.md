---
title: "Camera_CaptureStartInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-capturestartinfo"
catalog: "harmonyos-references"
content_hash: "99e37bcfd58c"
synced_at: "2026-07-09T01:00:26.281271"
---

# Camera_CaptureStartInfo

```
typedef struct Camera_CaptureStartInfo {...} Camera_CaptureStartInfo
```

#### 概述

拍照开始信息。

起始版本： 12

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t captureId | 拍照id。 |
| int64_t time | 预估的单次拍照底层出sensor采集帧时间，如果上报-1，代表没有预估时间。 |
