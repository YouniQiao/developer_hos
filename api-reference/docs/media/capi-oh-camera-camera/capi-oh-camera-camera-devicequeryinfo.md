---
title: "Camera_DeviceQueryInfo"
upstream_id: "harmonyos-references/capi-oh-camera-camera-devicequeryinfo"
catalog: "harmonyos-references"
content_hash: "323db1e1573d"
synced_at: "2026-09-30T19:55:02.000795"
---

# Camera_DeviceQueryInfo

```
typedef struct Camera_DeviceQueryInfo {...} Camera_DeviceQueryInfo
```

#### 概述

相机设备的查询信息。

起始版本： 23

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| Camera_Type* cameraType | 相机类型属性列表。 |
| uint32_t cameraTypeSize | 相机类型属性列表的大小。 |
| [Camera_Position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_position) cameraPosition | 相机位置属性。 |
| [Camera_Connection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_connection) connectionType | 相机连接类型属性。 |
