---
title: "FAST_BiquadCoefficientsD"
upstream_id: "harmonyos-references/fast-kit--fast-biquadcoefficientsd"
catalog: "harmonyos-references"
content_hash: "51a7744e8a6e"
synced_at: "2026-07-09T00:59:46.125909"
---

# FAST_BiquadCoefficientsD

#### 概述

定义双精度二阶（biquad）IIR滤波器节的系数（直接I型或II型）。

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
| double [a1](#a1) | z⁻¹ 分母系数。 |
| double [a2](#a2) | z⁻² 分母系数。 |
| double [b0](#b0) | z⁰ 分子系数。 |
| double [b1](#b1) | z⁻¹ 分子系数。 |
| double [b2](#b2) | z⁻² 分子系数。 |

#### 结构体成员变量说明

#### [h2]a1

```
double FAST_BiquadCoefficientsD::a1
```
 描述

z⁻¹ 分母系数。

#### [h2]a2

```
double FAST_BiquadCoefficientsD::a2
```
 描述

z⁻² 分母系数。

#### [h2]b0

```
double FAST_BiquadCoefficientsD::b0
```
 描述

z⁰ 分子系数。

#### [h2]b1

```
double FAST_BiquadCoefficientsD::b1
```
 描述

z⁻¹ 分子系数。

#### [h2]b2

```
double FAST_BiquadCoefficientsD::b2
```
 描述

z⁻² 分子系数。
