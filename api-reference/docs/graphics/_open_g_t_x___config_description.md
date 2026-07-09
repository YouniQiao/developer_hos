---
title: "OpenGTX_ConfigDescription"
upstream_id: "harmonyos-references/_open_g_t_x___config_description"
catalog: "harmonyos-references"
content_hash: "1b96fa030b85"
synced_at: "2026-07-09T01:01:07.957111"
---

# OpenGTX_ConfigDescription

#### 概述

此结构体描述OpenGTX属性配置。

起始版本： 5.0.0(12)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [opengtx_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/opengtx__base_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OpenGTX_LTPO_Mode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_ltpo_mode-1) [mode](#mode) | LTPO方案模式，支持场景模式、触控模式、自适应模式。 |
| int32_t [targetFPS](#targetfps) | 游戏应用目标帧率，取值范围[30,144]。 |
| char* [packageName](#packagename) | 游戏包名，字节长度范围[1,256]。 |
| char* [appVersion](#appversion) | 游戏应用版本号，字节长度范围[1,256]。 |
| [OpenGTX_EngineType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_enginetype-1) [engineType](#enginetype) | 游戏引擎类型。 |
| char* [engineVersion](#engineversion) | 游戏引擎版本号，字节长度范围[0,256]。 |
| [OpenGTX_GameType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_gametype-1) [gameType](#gametype) | 游戏类型。 |
| [OpenGTX_PictureQualityMaxLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate#opengtx_picturequalitymaxlevel-1) [pictureQualityMaxLevel](#picturequalitymaxlevel) | 图像质量。 |
| [OpenGTX_ResolutionValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_open_g_t_x___resolution_value) [resolutionMaxValue](#resolutionmaxvalue) | 游戏应用支持的最高分辨率，取值范围360p-8k。 |
| int32_t [gameMainThreadId](#gamemainthreadid) | 游戏应用的逻辑线程ID，取值范围[0,∞)。 |
| int32_t [gameRenderThreadId](#gamerenderthreadid) | 游戏应用的渲染线程ID，取值范围[0,∞)。 |
| int32_t [gameKeyThreadIds](#gamekeythreadids5) [5] | 游戏应用的关键线程ID列表，取值范围[0,∞)。 |
| bool [vulkanSupport](#vulkansupport) | 是否支持Vulkan。 取值范围：[true, false]。 |

#### 结构体成员变量说明

#### [h2]appVersion

```
char* OpenGTX_ConfigDescription::appVersion
```
 描述

游戏应用版本号，字节长度范围[1,256]。

#### [h2]engineType

```
OpenGTX_EngineType OpenGTX_ConfigDescription::engineType
```
 描述

游戏引擎类型。

#### [h2]engineVersion

```
char* OpenGTX_ConfigDescription::engineVersion
```
 描述

游戏引擎版本号，字节长度范围[0,256]。

#### [h2]gameKeyThreadIds[5]

```
int32_t OpenGTX_ConfigDescription::gameKeyThreadIds[5]
```
 描述

游戏应用的关键线程ID列表，取值范围[0,∞)。

#### [h2]gameMainThreadId

```
int32_t OpenGTX_ConfigDescription::gameMainThreadId
```
 描述

游戏应用的逻辑线程ID，取值范围[0,∞)。

#### [h2]gameRenderThreadId

```
int32_t OpenGTX_ConfigDescription::gameRenderThreadId
```
 描述

游戏应用的渲染线程ID，取值范围[0,∞)。

#### [h2]gameType

```
OpenGTX_GameType OpenGTX_ConfigDescription::gameType
```
 描述

游戏类型。

#### [h2]mode

```
OpenGTX_LTPO_Mode OpenGTX_ConfigDescription::mode
```
 描述

LTPO方案模式，支持场景模式、触控模式、自适应模式。

#### [h2]packageName

```
char* OpenGTX_ConfigDescription::packageName
```
 描述

游戏包名，字节长度范围[1,256]。

#### [h2]pictureQualityMaxLevel

```
OpenGTX_PictureQualityMaxLevel OpenGTX_ConfigDescription::pictureQualityMaxLevel
```
 描述

图像质量。

#### [h2]resolutionMaxValue

```
OpenGTX_ResolutionValue OpenGTX_ConfigDescription::resolutionMaxValue
```
 描述

游戏应用支持的最高分辨率，取值范围360p-8k。

#### [h2]targetFPS

```
int32_t OpenGTX_ConfigDescription::targetFPS
```
 描述

游戏应用目标帧率，取值范围[30,144]。

#### [h2]vulkanSupport

```
bool OpenGTX_ConfigDescription::vulkanSupport
```
 描述

是否支持Vulkan。
