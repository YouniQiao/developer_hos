---
title: "FAST_BiquadStateD"
upstream_id: "harmonyos-references/fast-kit--fast-biquadstated"
catalog: "harmonyos-references"
content_hash: "bf35868be4d6"
synced_at: "2026-07-09T00:59:46.468214"
---

# FAST_BiquadStateD

#### 概述

定义双精度二阶IIR滤波器节的状态变量。

系统能力： SystemCapability.FAST.Core

起始版本： 6.1.1(24)

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_dsp_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-dsp-common-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| double [d1](#d1) | 第一个延迟单元（y[n-1]）。 |
| double [d2](#d2) | 第二个延迟单元（y[n-2]）。 |

#### 结构体成员变量说明

#### [h2]d1

```
double FAST_BiquadStateD::d1
```
 描述

第一个延迟单元，存储上一时刻的输出值y[n-1]。

#### [h2]d2

```
double FAST_BiquadStateD::d2
```
 描述

第二个延迟单元，存储上上时刻的输出值y[n-2]。
