---
title: "FAST_BiquadmD"
upstream_id: "harmonyos-references/fast-kit--fast-biquadmd"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:15.527396"
---

# FAST_BiquadmD

#### 概述

定义双精度多通道、多节二阶IIR滤波器组的数据结构。

系统能力： SystemCapability.FAST.Core

起始版本： 6.1.1(24)

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_dsp_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-dsp-common-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t* [activeFilters](#activefilters) | 活跃滤波器掩码数组。 |
| uint8_t [isInitialized](#isinitialized) | 初始化标志。 |
| double* [channelGains](#channelgains) | 每通道线性增益因子数组。 |
| FAST_BiquadCoefficientsD* [coefficients](#coefficients) | 滤波器系数数组。 |
| size_t [maxFrames](#maxframes) | 单次处理最大采样数。 |
| size_t [numChannels](#numchannels) | 音频或信号通道数。 |
| size_t [numSections](#numsections) | 每通道级联的 biquad 节数。 |
| FAST_BiquadStateD* [states](#states) | 滤波器状态数组。 |

#### 结构体成员变量说明

#### [h2]activeFilters

```
uint8_t* FAST_BiquadmD::activeFilters
```
 描述

活跃滤波器掩码数组（大小为[numSections](#numsections)），非零表示该节滤波器处于激活状态。

#### [h2]channelGains

```
double* FAST_BiquadmD::channelGains
```
 描述

每通道线性增益因子数组（大小为[numChannels](#numchannels)），用于对每个通道的输出进行增益调整。

#### [h2]coefficients

```
FAST_BiquadCoefficientsD* FAST_BiquadmD::coefficients
```
 描述

滤波器系数数组（大小为[numChannels](#numchannels) * [numSections](#numsections)），存储所有通道的所有滤波器节系数。

#### [h2]isInitialized

```
uint8_t FAST_BiquadmD::isInitialized
```
 描述

初始化标志，值为1表示结构体已正确初始化，值为0表示未初始化。

#### [h2]maxFrames

```
size_t FAST_BiquadmD::maxFrames
```
 描述

单次处理的最大采样数（每通道），处理长度不能超过此值。

#### [h2]numChannels

```
size_t FAST_BiquadmD::numChannels
```
 描述

音频或信号通道数，必须大于0。

#### [h2]numSections

```
size_t FAST_BiquadmD::numSections
```
 描述

每通道级联的biquad节数，必须大于0。

#### [h2]states

```
FAST_BiquadStateD* FAST_BiquadmD::states
```
 描述

滤波器状态数组（大小为[numChannels](#numchannels) * [numSections](#numsections)），存储所有通道的所有滤波器节状态变量。
