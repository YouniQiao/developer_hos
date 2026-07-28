---
title: "FAST_Poly"
upstream_id: "harmonyos-references/fast-kit--fast-poly"
catalog: "harmonyos-references"
content_hash: "e12c75067a45"
synced_at: "2026-07-28T16:51:03.942963"
---

# FAST_Poly

#### 概述

定义稀疏格式多项式的数据结构。多项式![](./img/zh-cn_image_0000002686088885.png)由系数数组coeff和指数数组pow共同描述，且需按指数升序排列。

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_solver_polynomial.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-solver-polynomial-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| double * [coeff](#coeff) | 多项式的系数数组。 |
| uint32_t * [pow](#pow) | 多项式的指数数组。 |
| size_t [length](#length) | 多项式的项数。 |

#### 结构体成员变量说明

#### [h2]coeff

```
double * FAST_Poly::coeff
```
 描述

多项式的系数数组，与pow数组一一对应，表示对应指数项的系数值。

#### [h2]length

```
size_t FAST_Poly::length
```
 描述

多项式的项数，即coeff和pow数组的长度。

#### [h2]pow

```
uint32_t * FAST_Poly::pow
```
 描述

多项式的指数数组，与coeff数组一一对应，且需按指数升序排列。
