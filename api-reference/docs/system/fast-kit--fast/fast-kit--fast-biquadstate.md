---
title: "FAST_BiquadState"
upstream_id: "harmonyos-references/fast-kit--fast-biquadstate"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:15.512894"
---

# FAST_BiquadState

#### 概述

定义单精度二阶IIR滤波器节的状态变量。

系统能力： SystemCapability.FAST.Core

起始版本： 6.1.1(24)

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_dsp_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-dsp-common-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float [d1](#d1) | 第一个延迟单元（y[n-1]）。 |
| float [d2](#d2) | 第二个延迟单元（y[n-2]）。 |

#### 结构体成员变量说明

#### [h2]d1

```
float FAST_BiquadState::d1
```
 描述

第一个延迟单元，存储上一时刻的输出值y[n-1]。

#### [h2]d2

```
float FAST_BiquadState::d2
```
 描述

第二个延迟单元，存储上上时刻的输出值y[n-2]。
