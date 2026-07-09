---
title: "Camera_AutoDeviceSwitchStatusInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-autodeviceswitchstatusinfo"
catalog: "harmonyos-references"
content_hash: "369fa5f23cc5"
synced_at: "2026-07-09T01:00:26.461174"
---

# Camera_AutoDeviceSwitchStatusInfo

```
typedef struct Camera_AutoDeviceSwitchStatusInfo {...} Camera_AutoDeviceSwitchStatusInfo
```

#### 概述

自动设备切换状态信息。

起始版本： 13

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool isDeviceSwitched | 设备是否已切换，true表示已切换，false表示未切换。 |
| bool isDeviceCapabilityChanged | 设备功能是否改变，true表示已改变，false表示未改变。 |
