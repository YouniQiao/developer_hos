---
title: "FAST_BiquadCoefficients"
upstream_id: "harmonyos-references/fast-kit--fast-biquadcoefficients"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:14.907023"
---

# FAST_BiquadCoefficients

#### 概述

定义单精度二阶（biquad）IIR滤波器节的系数（直接I型或II型）。

传递函数：H(z) = (b0 + b1z⁻¹ + b2z⁻²) / (1 + a1z⁻¹ + a2z⁻²)

![](./img/caution_3.0-zh-cn.png) 分母中的1实际上为系数a0归一化后的结果。

系统能力： SystemCapability.FAST.Core

起始版本： 6.1.1(24)

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_dsp_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-dsp-common-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float [a1](#a1) | z⁻¹ 分母系数。 |
| float [a2](#a2) | z⁻² 分母系数。 |
| float [b0](#b0) | z⁰ 分子系数。 |
| float [b1](#b1) | z⁻¹ 分子系数。 |
| float [b2](#b2) | z⁻² 分子系数。 |

#### 结构体成员变量说明

#### [h2]a1

```
float FAST_BiquadCoefficients::a1
```
 描述

z⁻¹ 分母系数。

#### [h2]a2

```
float FAST_BiquadCoefficients::a2
```
 描述

z⁻² 分母系数。

#### [h2]b0

```
float FAST_BiquadCoefficients::b0
```
 描述

z⁰ 分子系数。

#### [h2]b1

```
float FAST_BiquadCoefficients::b1
```
 描述

z⁻¹ 分子系数。

#### [h2]b2

```
float FAST_BiquadCoefficients::b2
```
 描述

z⁻² 分子系数。
