---
title: "fast_dsp_common.h"
upstream_id: "harmonyos-references/fast-kit-fast-dsp-common-8h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:14.679767"
---

# fast_dsp_common.h

#### 概述

数字信号处理（DSP）通用数据结构和工具函数定义，包括向量运算、复数处理以及二阶IIR滤波器管理。支持单精度（float）和双精度（double）算术运算。

引用文件： <FASTKit/fast_dsp_common.h>

库： libfast_dsp.so

系统能力： SystemCapability.FAST.Core

起始版本： 6.1.1(24)

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [FAST_SplitComplex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-splitcomplex) | 定义单精度浮点复数信号的数据结构（分离格式：实部和虚部分开存储）。 |
| struct [FAST_SplitComplexD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-splitcomplexd) | 定义双精度浮点复数信号的数据结构（分离格式：实部和虚部分开存储）。 |
| struct [FAST_BiquadCoefficients](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadcoefficients) | 定义单精度二阶（biquad）IIR滤波器节的系数。 |
| struct [FAST_BiquadCoefficientsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadcoefficientsd) | 定义双精度二阶（biquad）IIR滤波器节的系数。 |
| struct [FAST_BiquadState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadstate) | 定义单精度二阶IIR滤波器节的状态变量。 |
| struct [FAST_BiquadStateD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadstated) | 定义双精度二阶IIR滤波器节的状态变量。 |
| struct [FAST_Biquadm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadm) | 定义单精度多通道、多节二阶IIR滤波器组的数据结构。 |
| struct [FAST_BiquadmD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadmd) | 定义双精度多通道、多节二阶IIR滤波器组的数据结构。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [FAST_SplitComplex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-splitcomplex) [FAST_SplitComplex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-splitcomplex) | 单精度浮点复数信号结构体。 |
| typedef struct [FAST_SplitComplexD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-splitcomplexd) [FAST_SplitComplexD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-splitcomplexd) | 双精度浮点复数信号结构体。 |
| typedef struct [FAST_BiquadCoefficients](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadcoefficients) [FAST_BiquadCoefficients](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadcoefficients) | 单精度二阶IIR滤波器系数。 |
| typedef struct [FAST_BiquadCoefficientsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadcoefficientsd) [FAST_BiquadCoefficientsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadcoefficientsd) | 双精度二阶IIR滤波器系数。 |
| typedef struct [FAST_BiquadState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadstate) [FAST_BiquadState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadstate) | 单精度二阶IIR滤波器状态。 |
| typedef struct [FAST_BiquadStateD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadstated) [FAST_BiquadStateD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadstated) | 双精度二阶IIR滤波器状态。 |
| typedef struct [FAST_Biquadm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadm) [FAST_Biquadm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadm) | 单精度多通道多节IIR滤波器组。 |
| typedef struct [FAST_BiquadmD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadmd) [FAST_BiquadmD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-biquadmd) | 双精度多通道多节IIR滤波器组。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| float [HMS_FAST_DSP_Maxmgv](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_maxmgv) (const float* input, size_t stride, size_t length) | 计算步长实数向量中的最大幅值（单精度）。 |
| double [HMS_FAST_DSP_MaxmgvD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_maxmgvd) (const double* input, size_t stride, size_t length) | 计算步长实数向量中的最大幅值（双精度）。 |
| void [HMS_FAST_DSP_Maxvi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_maxvi) (const float* input, size_t stride, size_t length, float* value, size_t* index) | 查找步长实数向量中的最大值及其索引（单精度）。 |
| void [HMS_FAST_DSP_MaxviD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_maxvid) (const double* input, size_t stride, size_t length, double* value, size_t* index) | 查找步长实数向量中的最大值及其索引（双精度）。 |
| float [HMS_FAST_DSP_Meamgv](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_meamgv) (const float* input, size_t stride, size_t length) | 计算步长实数向量绝对值的均值（单精度）。 |
| double [HMS_FAST_DSP_MeamgvD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_meamgvd) (const double* input, size_t stride, size_t length) | 计算步长实数向量绝对值的均值（双精度）。 |
| float [HMS_FAST_DSP_Sve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_sve) (const float* input, size_t stride, size_t length) | 计算步长实数向量的和（单精度）。 |
| double [HMS_FAST_DSP_SveD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_sved) (const double* input, size_t stride, size_t length) | 计算步长实数向量的和（双精度）。 |
| float [HMS_FAST_DSP_Svemg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_svemg) (const float* input, size_t stride, size_t length) | 计算步长向量的绝对值之和（L1范数）（单精度）。 |
| double [HMS_FAST_DSP_SvemgD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_svemgd) (const double* input, size_t stride, size_t length) | 计算步长向量的绝对值之和（L1范数）（双精度）。 |
| float [HMS_FAST_DSP_Dotpr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_dotpr) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, size_t length) | 计算两个步长实数向量的点积（单精度）。 |
| double [HMS_FAST_DSP_DotprD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_dotprd) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, size_t length) | 计算两个步长实数向量的点积（双精度）。 |
| void [HMS_FAST_DSP_Vsbsm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsbsm) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, float scalar, float* outputC, size_t strideC, size_t length) | 执行向量减法：outputC[i] = (inputA[i] - inputB[i]) * scalar（单精度）。 |
| void [HMS_FAST_DSP_VsbsmD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsbsmd) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, double scalar, double* outputC, size_t strideC, size_t length) | 执行向量减法：outputC[i] = (inputA[i] - inputB[i]) * scalar（双精度）。 |
| void [HMS_FAST_DSP_Ctoz](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_ctoz) (const float* input, size_t strideInput, FAST_SplitComplex* output, size_t strideOutput, size_t length) | 将交错复数数组转换为分离格式（单精度）。 |
| void [HMS_FAST_DSP_CtozD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_ctozd) (const double* input, size_t strideInput, FAST_SplitComplexD* output, size_t strideOutput, size_t length) | 将交错复数数组转换为分离格式（双精度）。 |
| void [HMS_FAST_DSP_Ztoc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_ztoc) (const FAST_SplitComplex* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 将分离复数数组转换为交错格式（单精度）。 |
| void [HMS_FAST_DSP_ZtocD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_ztocd) (const FAST_SplitComplexD* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 将分离复数数组转换为交错格式（双精度）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_SetActiveFilters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_setactivefilters) (FAST_Biquadm* filter, const uint8_t* activeMask) | 设置二阶滤波器节的激活掩码（单精度）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_SetActiveFiltersD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_setactivefiltersd) (FAST_BiquadmD* filter, const uint8_t* activeMask) | 设置二阶滤波器节的激活掩码（双精度）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_SetCoeffSingle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_setcoeffsingle) (FAST_Biquadm* filter, const float* coeff, size_t stride) | 从单精度源数组设置所有二阶滤波器系数（单精度滤波器）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_SetCoeffDouble](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_setcoeffdouble) (FAST_Biquadm* filter, const double* coeff, size_t stride) | 从双精度源数组设置所有二阶滤波器系数（单精度滤波器）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_SetCoeffSingleD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_setcoeffsingled) (FAST_BiquadmD* filter, const float* coeff, size_t stride) | 从单精度源数组设置所有二阶滤波器系数（双精度滤波器）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_SetCoeffDoubleD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_setcoeffdoubled) (FAST_BiquadmD* filter, const double* coeff, size_t stride) | 从双精度源数组设置所有二阶滤波器系数（双精度滤波器）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_create) (size_t numChannels, size_t numSections, size_t maxFrames, FAST_Biquadm** filter) | 创建并初始化多通道多节二阶IIR滤波器组（单精度）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm_CreateD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_created) (size_t numChannels, size_t numSections, size_t maxFrames, FAST_BiquadmD** filter) | 创建并初始化多通道多节二阶IIR滤波器组（双精度）。 |
| void [HMS_FAST_Biquadm_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_destroy) (FAST_Biquadm* filter) | 销毁二阶滤波器实例（单精度）。 |
| void [HMS_FAST_Biquadm_DestroyD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm_destroyd) (FAST_BiquadmD* filter) | 销毁二阶滤波器实例（双精度）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Biquadm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadm) (FAST_Biquadm* filter, const float** input, const size_t strideInput, float** output, const size_t strideOutput, size_t length) | 通过二阶滤波器组处理多通道音频（单精度）。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_BiquadmD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_biquadmd) (FAST_BiquadmD* filter, const double** input, const size_t strideInput, double** output, const size_t strideOutput, size_t length) | 通过二阶滤波器组处理多通道音频（双精度）。 |
