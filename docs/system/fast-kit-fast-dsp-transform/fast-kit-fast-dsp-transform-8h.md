---
title: "fast_dsp_transform.h"
upstream_id: "harmonyos-references/fast-kit-fast-dsp-transform-8h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:14.688886"
---

# fast_dsp_transform.h

#### 概述

提供高性能数字信号处理（DSP）变换函数，包括FFT（快速傅里叶变换）、IFFT（逆快速傅里叶变换）等。

引用文件： <FASTKit/fast_dsp_transform.h>

库： libfast_dsp.so

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [FAST_FFTConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_fftconfig) [FAST_FFTConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_fftconfig) | 快速傅里叶变换的不透明配置。 |

#### [h2]常量

| 名称 | 描述 |
| --- | --- |
| const uint32_t [FAST_MAX_FFT_LOG2N](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_max_fft_log2n) = 16 | FFT支持的最大点数对应的以2为底的对数值。值为16，即最大点数为65536。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_FFT_CreateConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_fft_createconfig) (FAST_FFTConfig** config, const uint32_t log2n) | 创建单精度FFT配置对象（log2n为FFT点数对应的以2为底的对数值，必须满足0
