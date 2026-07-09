---
title: "FAST_SplitComplexD"
upstream_id: "harmonyos-references/fast-kit--fast-splitcomplexd"
catalog: "harmonyos-references"
content_hash: "b1b43c7aafa4"
synced_at: "2026-07-09T00:59:46.707989"
---

# FAST_SplitComplexD

#### 概述

定义双精度浮点复数信号的数据结构（分离格式：实部和虚部分开存储）。

系统能力： SystemCapability.FAST.Core

起始版本： 6.1.1(24)

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_dsp_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-dsp-common-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| double* [real](#real) | 实部数组指针。 |
| double* [imag](#imag) | 虚部数组指针。 |

#### 结构体成员变量说明

#### [h2]imag

```
double* FAST_SplitComplexD::imag
```
 描述

指向虚部数组的指针。数组长度应与实部数组相同，存储复数信号的虚部数据。

#### [h2]real

```
double* FAST_SplitComplexD::real
```
 描述

指向实部数组的指针。数组长度应与虚部数组相同，存储复数信号的实部数据。
