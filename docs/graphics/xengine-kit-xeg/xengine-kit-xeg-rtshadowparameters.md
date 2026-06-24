---
title: "XEG_RTShadowParameters"
upstream_id: "harmonyos-references/xengine-kit-xeg-rtshadowparameters"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:17.362408"
---

# XEG_RTShadowParameters

#### 概述

光线追踪阴影（Shadow）算法参数。

起始版本： 6.0.0(20)

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

所在头文件： [xeg_vulkan_rt_visible_mask.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rt-visible-mask-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float [rayTMax](#raytmax) | 阴影光线的tMax值，必须为非负数。 |
| float [rayTMin](#raytmin) | 阴影光线的tMin值，必须为非负数。 |
| float [sunDirection](#sundirection) [3] | 方向光的方向。 |
| float [raySourceAngleInDegree](#raysourceangleindegree) = 0.0f | 沿光源方向进行阴影采样的角度范围，值越大，半影区域越大。此参数的值将被限制在[0.0, 90.0]范围内。默认值为0.0。 |
| uint32_t [shadowCullMask](#shadowcullmask) = 0x5FF | 配置光线查询[rayQueryInitializeEXT](https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt)函数中的rayFlags和cullMask参数，高24bit表示rayFlags，低8bit表示cullMask。 默认值为0x5FF，即 ((gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) 描述

每像素采样数，当前仅支持1spp。默认值为1。

#### [h2]raySourceAngleInDegree

```
float XEG_RTShadowParameters::raySourceAngleInDegree = 0.0f
```
 描述

沿光源方向进行阴影采样的角度范围，值越大，半影区域越大。此参数的值将被限制在[0.0, 90.0]范围内。默认值为0.0。

#### [h2]rayTMax

```
float XEG_RTShadowParameters::rayTMax
```
 描述

阴影光线的tMax值，必须为非负数。

#### [h2]rayTMin

```
float XEG_RTShadowParameters::rayTMin
```
 描述

阴影光线的tMin值，必须为非负数。

#### [h2]shadowCullDistance

```
float XEG_RTShadowParameters::shadowCullDistance
```
 描述

阴影剔除的世界空间距离，场景中像素超过此距离时不计算阴影，必须大于0。

#### [h2]shadowCullMask

```
uint32_t XEG_RTShadowParameters::shadowCullMask = 0x5FF
```
 描述

配置光线查询[rayQueryInitializeEXT](https://github.com/KhronosGroup/GLSL/blob/main/extensions/ext/GLSL_EXT_ray_query.txt)函数中的rayFlags和cullMask参数，高24bit表示rayFlags，低8bit表示cullMask。 默认值为0x5FF，即 ((gl_RayFlagsOpaqueEXT | gl_RayFlagsTerminateOnFirstHitEXT) << 8) | 0xFF。

#### [h2]sunDirection

```
float XEG_RTShadowParameters::sunDirection[3]
```
 描述

方向光的方向。
