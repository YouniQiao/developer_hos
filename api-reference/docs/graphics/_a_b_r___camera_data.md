---
title: "ABR_CameraData"
upstream_id: "harmonyos-references/_a_b_r___camera_data"
catalog: "harmonyos-references"
content_hash: "00383778c4e7"
synced_at: "2026-07-09T01:01:06.943110"
---

# ABR_CameraData

#### 概述

此结构体描述游戏应用每帧的相机运动数据，ABR会结合相机运动数据自适应调整FrameBuffer（帧缓冲，下文简称Buffer）分辨率因子。

起始版本： 5.0.0(12)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [abr_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/abr__base_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___vector3) [rotation](#rotation) | 相机变换的世界空间旋转欧拉角。取值范围：[0, 360]，（单位：deg），参数不在范围内会返回ABR_INVALID_PARAMETER错误码。 |
| [ABR_Vector3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_a_b_r___vector3) [position](#position) | 相机变换的世界空间位移。 |

#### 结构体成员变量说明

#### [h2]position

```
ABR_Vector3 ABR_CameraData::position
```
 描述

相机变换的世界空间位移。

#### [h2]rotation

```
ABR_Vector3 ABR_CameraData::rotation
```
 描述

相机变换的世界空间旋转欧拉角。取值范围：[0, 360]，（单位：deg），参数不在范围内会返回ABR_INVALID_PARAMETER错误码。
