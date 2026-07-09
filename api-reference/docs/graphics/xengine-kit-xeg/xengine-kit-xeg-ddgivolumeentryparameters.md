---
title: "XEG_DDGIVolumeEntryParameters"
upstream_id: "harmonyos-references/xengine-kit-xeg-ddgivolumeentryparameters"
catalog: "harmonyos-references"
content_hash: "3882e4f75c95"
synced_at: "2026-07-09T01:01:10.266422"
---

# XEG_DDGIVolumeEntryParameters

#### 概述

此结构体描述每一个DDGI体积的必要参数。

起始版本： 6.0.0(20)

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

所在头文件： [xeg_vulkan_rtgi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-rtgi-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [volumeIndex](#volumeindex) | 体积索引范围为[0, 65535]，且唯一。 |
| uint32_t [raysPerProbe](#raysperprobe) | 探针发射光线数量，建议值为64，范围为[1, 1024]。 |
| float [probeMaxRayDistance](#probemaxraydistance) | 探针发射光线最大求交距离，建议值为1000.0。 |
| float [volumePosition](#volumeposition) [3] | 体积中心点坐标。 |
| float [probeSpacing](#probespacing) [3] | 探针放置间距，必须大于0。 |
| uint32_t [volumeLightingChannelMask](#volumelightingchannelmask) | 体积光照通道标记，建议值为0xFFFFFFFF。 |
| uint32_t [volumeProbeGridCounts](#volumeprobegridcounts) [3] | 探针放置数量，必须大于0，范围为[1, 32]。 |
| float [volumeProbeIrradianceEncodingGamma](#volumeprobeirradianceencodinggamma) | 辐照度的伽马校正系数，建议值为5.0，必须不为0。 |
| float [probeHysteresis](#probehysteresis) | 探针辐照度历史权重，建议值为0.95，范围为[0.0, 1.0]。 |
| float [probeChangeThreshold](#probechangethreshold) | 探针变化阈值，建议值为1.0。 |
| float [probeBrightnessThreshold](#probebrightnessthreshold) | 探针亮度阈值，建议值为1.0。 |
| float [volumeNormalBias](#volumenormalbias) | 探针法向偏移量，建议值为0.12。 |
| float [volumeViewBias](#volumeviewbias) | 探针视角偏移量，建议值为0.48。 |
| float [volumeBlendDistance](#volumeblenddistance) | 体积光照混合距离，建议值为1.0。 |
| float [volumeBlendDistanceBlack](#volumeblenddistanceblack) | 体积边缘光照渐暗范围，建议值为1.0。 |
| float [probeBackfaceThreshold](#probebackfacethreshold) | 探针反向判断阈值，建议值为0.0。 |
| float [probeMinFrontfaceDistance](#probeminfrontfacedistance) | 探针正向最小距离，建议值为0.0。 |
| float [volumeIrradianceScalar](#volumeirradiancescalar) | 体积辐照度缩放倍率，建议值为1.0，必须非负。 |
| float [emissiveMultiplier](#emissivemultiplier) | 发射光线强度倍率，建议值为1.0，必须非负。 |
| float [lightingMultiplier](#lightingmultiplier) | 光照倍率，建议值为1.0，必须非负。 |
| bool [bForceUpdate](#bforceupdate) | 是否强制更新所有探针，true为强制全部更新，false为选择部分更新，建议值为false。 |
| VkImageView [probeIrradianceSH](#probeirradiancesh) | 存储探针辐照度二阶球谐系数的3D图像，其宽度，高度和深度分别为：volumeProbeGridCounts.y * 4（二阶球谐系数的个数），volumeProbeGridCounts.x，volumeProbeGridCounts.z，VkFormat为VK_FORMAT_R32G32B32A32_SFLOAT。 |

#### 结构体成员变量说明

#### [h2]bForceUpdate

```
bool XEG_DDGIVolumeEntryParameters::bForceUpdate
```
 描述

是否强制更新所有探针，true为强制全部更新，false为选择部分更新，建议值为false。

#### [h2]emissiveMultiplier

```
float XEG_DDGIVolumeEntryParameters::emissiveMultiplier
```
 描述

发射光线强度倍率，建议值为1.0，必须非负。

#### [h2]lightingMultiplier

```
float XEG_DDGIVolumeEntryParameters::lightingMultiplier
```
 描述

光照倍率，建议值为1.0，必须非负。

#### [h2]probeBackfaceThreshold

```
float XEG_DDGIVolumeEntryParameters::probeBackfaceThreshold
```
 描述

探针反向判断阈值，建议值为0.0。

#### [h2]probeBrightnessThreshold

```
float XEG_DDGIVolumeEntryParameters::probeBrightnessThreshold
```
 描述

探针亮度阈值，建议值为1.0。

#### [h2]probeChangeThreshold

```
float XEG_DDGIVolumeEntryParameters::probeChangeThreshold
```
 描述

探针变化阈值，建议值为1.0。

#### [h2]probeHysteresis

```
float XEG_DDGIVolumeEntryParameters::probeHysteresis
```
 描述

探针辐照度历史权重，建议值为0.95，范围为[0.0, 1.0]。

#### [h2]probeIrradianceSH

```
VkImageView XEG_DDGIVolumeEntryParameters::probeIrradianceSH
```
 描述

存储探针辐照度二阶球谐系数的3D图像，其宽度，高度和深度分别为：volumeProbeGridCounts.y * 4（二阶球谐系数的个数），volumeProbeGridCounts.x，volumeProbeGridCounts.z，VkFormat为VK_FORMAT_R32G32B32A32_SFLOAT。

#### [h2]probeMaxRayDistance

```
float XEG_DDGIVolumeEntryParameters::probeMaxRayDistance
```
 描述

探针发射光线最大求交距离，建议值为1000.0。

#### [h2]probeMinFrontfaceDistance

```
float XEG_DDGIVolumeEntryParameters::probeMinFrontfaceDistance
```
 描述

探针正向最小距离，建议值为0.0。

#### [h2]probeSpacing

```
float XEG_DDGIVolumeEntryParameters::probeSpacing[3]
```
 描述

探针放置间距，必须大于0。

#### [h2]raysPerProbe

```
uint32_t XEG_DDGIVolumeEntryParameters::raysPerProbe
```
 描述

探针发射光线数量，建议值为64，范围为[1, 1024]。

#### [h2]volumeBlendDistance

```
float XEG_DDGIVolumeEntryParameters::volumeBlendDistance
```
 描述

体积光照混合距离，建议值为1.0。

#### [h2]volumeBlendDistanceBlack

```
float XEG_DDGIVolumeEntryParameters::volumeBlendDistanceBlack
```
 描述

体积边缘光照渐暗范围，建议值为1.0。

#### [h2]volumeIndex

```
uint32_t XEG_DDGIVolumeEntryParameters::volumeIndex
```
 描述

体积索引范围为[0, 65535]，且唯一。

#### [h2]volumeIrradianceScalar

```
float XEG_DDGIVolumeEntryParameters::volumeIrradianceScalar
```
 描述

体积辐照度缩放倍率，建议值为1.0，必须非负。

#### [h2]volumeLightingChannelMask

```
uint32_t XEG_DDGIVolumeEntryParameters::volumeLightingChannelMask
```
 描述

体积光照通道标记，建议值为0xFFFFFFFF。

#### [h2]volumeNormalBias

```
float XEG_DDGIVolumeEntryParameters::volumeNormalBias
```
 描述

探针法向偏移量，建议值为0.12。

#### [h2]volumePosition

```
float XEG_DDGIVolumeEntryParameters::volumePosition[3]
```
 描述

体积中心点坐标。

#### [h2]volumeProbeGridCounts

```
uint32_t XEG_DDGIVolumeEntryParameters::volumeProbeGridCounts[3]
```
 描述

探针放置数量，必须大于0，范围为[1, 32]。

#### [h2]volumeProbeIrradianceEncodingGamma

```
float XEG_DDGIVolumeEntryParameters::volumeProbeIrradianceEncodingGamma
```
 描述

辐照度的伽马校正系数，建议值为5.0，必须不为0。

#### [h2]volumeViewBias

```
float XEG_DDGIVolumeEntryParameters::volumeViewBias
```
 描述

探针视角偏移量，建议值为0.48。
