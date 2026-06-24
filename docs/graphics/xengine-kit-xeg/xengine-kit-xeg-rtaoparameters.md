---
title: "XEG_RTAOParameters"
upstream_id: "harmonyos-references/xengine-kit-xeg-rtaoparameters"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:16.979593"
---

# XEG_RTAOParameters

#### 概述

光线追踪环境光遮蔽（AO）算法参数。

起始版本： 6.0.0(20)

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

所在头文件： [xeg_vulkan_rt_visible_mask.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-visible-mask-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float [rayTMax](#raytmax) | 环境光遮蔽光线的tMax值，必须为非负数。 |
| float [rayTMin](#raytmin) | 环境光遮蔽光线的tMin值，必须为非负数。 |
| float [aoIntensity](#aointensity) = 1.0f | 环境光遮蔽的强度，值越大AO效果越重，值越小AO效果越轻。此参数的值将被限制在[0.5, 1.0]范围内。默认值为1.0。 |
| float [aoNormalBias](#aonormalbias) = 1.0f | 从着色点位置沿着法线方向偏移的距离，用于解决深度值转世界坐标时因为精度问题导致的自遮挡错误。默认值为1.0。 |
| uint32_t [aoCullMask](#aocullmask) = 0x5FF | 配置光线查询[rayQueryInitializeEXT](https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt)函数中的rayFlags和cullMask参数，高24bit表示rayFlags， 低8bit表示cullMask。 默认值为0x5FF，即 ((gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) 描述

环境光遮蔽剔除的世界空间距离，场景中像素超过此距离时不计算环境光遮蔽，必须大于0。

#### [h2]aoCullMask

```
uint32_t XEG_RTAOParameters::aoCullMask = 0x5FF
```
 描述

配置光线查询[rayQueryInitializeEXT](https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt)函数中的rayFlags和cullMask参数，高24bit表示rayFlags， 低8bit表示cullMask。 默认值为0x5FF，即 ((gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) << 8) | 0xFF。

#### [h2]aoIntensity

```
float XEG_RTAOParameters::aoIntensity = 1.0f
```
 描述

环境光遮蔽的强度，值越大AO效果越重，值越小AO效果越轻。此参数的值将被限制在[0.5, 1.0]范围内。默认值为1.0。

#### [h2]aoNormalBias

```
float XEG_RTAOParameters::aoNormalBias = 1.0f
```
 描述

从着色点位置沿着法线方向偏移的距离，用于解决深度值转世界坐标时因为精度问题导致的自遮挡错误。此参数的值将被限制在[0.0, 1.0]范围内。默认值为1.0。

#### [h2]rayPerPixel

```
uint32_t XEG_RTAOParameters::rayPerPixel = 1
```
 描述

每像素采样数，当前仅支持1spp。默认值为1。

#### [h2]rayTMax

```
float XEG_RTAOParameters::rayTMax
```
 描述

环境光遮蔽光线的tMax值，必须为非负数。

#### [h2]rayTMin

```
float XEG_RTAOParameters::rayTMin
```
 描述

环境光遮蔽光线的tMin值，必须为非负数。
