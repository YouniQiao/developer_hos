---
title: "Camera_TorchStatusInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-torchstatusinfo"
catalog: "harmonyos-references"
content_hash: "e76cbdac04cd"
synced_at: "2026-07-09T01:00:26.178442"
---

# Camera_TorchStatusInfo

```
typedef struct Camera_TorchStatusInfo {...} Camera_TorchStatusInfo
```

#### 概述

手电筒状态信息。

起始版本： 12

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool isTorchAvailable | 手电筒是否可用，true表示可用，false表示不可用。 |
| bool isTorchActive | 手电筒是否激活，true表示激活，false表示未激活。 |
| float torchLevel | 手电筒亮度等级。取值范围为[0,1]，越靠近1，亮度越大。 |
