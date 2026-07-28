---
title: "fast_dsp_common.h"
upstream_id: "harmonyos-references/fast-kit-fast-dsp-common-8h"
catalog: "harmonyos-references"
content_hash: "c354772b6f65"
synced_at: "2026-07-28T16:51:03.020027"
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

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [HMS_FAST_HannWindowType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hannwindowtype-1) { HMS_FAST_HANN_DENORMALIZE_FULL = 0x00, HMS_FAST_HANN_NORMALIZE_FULL = 0x01, HMS_FAST_HANN_DENORMALIZE_HALF = 0x10, HMS_FAST_HANN_NORMALIZE_HALF = 0x11 } | 汉宁窗类型枚举。 |

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
| void [HMS_FAST_DSP_Zvabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_zvabs) (const FAST_SplitComplex* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 计算复数向量的幅值（单精度）。 |
| void [HMS_FAST_DSP_ZvabsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_zvabsd) (const FAST_SplitComplexD* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 计算复数向量的幅值（双精度）。 |
| void [HMS_FAST_DSP_Zvmags](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_zvmags) (const FAST_SplitComplex* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 计算复数向量的幅值平方（单精度）。 |
| void [HMS_FAST_DSP_ZvmagsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_zvmagsd) (const FAST_SplitComplexD* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 计算复数向量的幅值平方（双精度）。 |
| void [HMS_FAST_DSP_Zvphas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_zvphas) (const FAST_SplitComplex* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 计算复数向量的相位角（单精度）。 |
| void [HMS_FAST_DSP_ZvphasD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_zvphasd) (const FAST_SplitComplexD* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 计算复数向量的相位角（双精度）。 |
| void [HMS_FAST_DSP_Vsmul](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsmul) (const float* input, size_t strideInput, const float scalar, float* output, size_t strideOutput, size_t length) | 将向量的每个元素乘以标量（单精度）。 |
| void [HMS_FAST_DSP_VsmulD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsmuld) (const double* input, size_t strideInput, const double scalar, double* output, size_t strideOutput, size_t length) | 将向量的每个元素乘以标量（双精度）。 |
| void [HMS_FAST_DSP_Vsdiv](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsdiv) (const float* input, size_t strideInput, const float scalar, float* output, size_t strideOutput, size_t length) | 将向量的每个元素除以标量（单精度）。 |
| void [HMS_FAST_DSP_VsdivD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsdivd) (const double* input, size_t strideInput, const double scalar, double* output, size_t strideOutput, size_t length) | 将向量的每个元素除以标量（双精度）。 |
| void [HMS_FAST_DSP_Svdiv](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_svdiv) (const float scalar, const float* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 将标量除以向量的每个元素（单精度）。 |
| void [HMS_FAST_DSP_SvdivD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_svdivd) (const double scalar, const double* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 将标量除以向量的每个元素（双精度）。 |
| void [HMS_FAST_DSP_Vsadd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsadd) (const float* input, size_t strideInput, const float scalar, float* output, size_t strideOutput, size_t length) | 将标量加到向量的每个元素（单精度）。 |
| void [HMS_FAST_DSP_VsaddD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsaddd) (const double* input, size_t strideInput, const double scalar, double* output, size_t strideOutput, size_t length) | 将标量加到向量的每个元素（双精度）。 |
| void [HMS_FAST_DSP_Vadd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vadd) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, float* outputC, size_t strideC, size_t length) | 执行向量逐元素加法（单精度）。 |
| void [HMS_FAST_DSP_VaddD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vaddd) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, double* outputC, size_t strideC, size_t length) | 执行向量逐元素加法（双精度）。 |
| void [HMS_FAST_DSP_Vsub](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsub) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, float* outputC, size_t strideC, size_t length) | 执行向量逐元素减法（单精度）。 |
| void [HMS_FAST_DSP_VsubD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsubd) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, double* outputC, size_t strideC, size_t length) | 执行向量逐元素减法（双精度）。 |
| void [HMS_FAST_DSP_Vmul](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vmul) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, float* outputC, size_t strideC, size_t length) | 执行向量逐元素乘法（单精度）。 |
| void [HMS_FAST_DSP_VmulD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vmuld) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, double* outputC, size_t strideC, size_t length) | 执行向量逐元素乘法（双精度）。 |
| void [HMS_FAST_DSP_Vdiv](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vdiv) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, float* outputC, size_t strideC, size_t length) | 执行向量逐元素除法（单精度）。 |
| void [HMS_FAST_DSP_VdivD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vdivd) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, double* outputC, size_t strideC, size_t length) | 执行向量逐元素除法（双精度）。 |
| void [HMS_FAST_DSP_Vdist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vdist) (const float* inputA, size_t strideA, const float* inputB, size_t strideB, float* outputC, size_t strideC, size_t length) | 计算两个向量对应元素的欧几里得范数（单精度）。 |
| void [HMS_FAST_DSP_VdistD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vdistd) (const double* inputA, size_t strideA, const double* inputB, size_t strideB, double* outputC, size_t strideC, size_t length) | 计算两个向量对应元素的欧几里得范数（双精度）。 |
| float [HMS_FAST_DSP_Svesq](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_svesq) (const float* input, size_t stride, size_t length) | 计算向量元素的平方和（单精度）。 |
| double [HMS_FAST_DSP_SvesqD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_svesqd) (const double* input, size_t stride, size_t length) | 计算向量元素的平方和（双精度）。 |
| void [HMS_FAST_DSP_Minvi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_minvi) (const float* input, size_t stride, size_t length, float* value, size_t* index) | 查找步长实数向量中的最小值及其索引（单精度）。 |
| void [HMS_FAST_DSP_MinviD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_minvid) (const double* input, size_t stride, size_t length, double* value, size_t* index) | 查找步长实数向量中的最小值及其索引（双精度）。 |
| void [HMS_FAST_DSP_Vsq](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsq) (const float* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 计算向量每个元素的平方（单精度）。 |
| void [HMS_FAST_DSP_VsqD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsqd) (const double* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 计算向量每个元素的平方（双精度）。 |
| void [HMS_FAST_DSP_Vabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vabs) (const float* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 计算向量每个元素的绝对值（单精度）。 |
| void [HMS_FAST_DSP_VabsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vabsd) (const double* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 计算向量每个元素的绝对值（双精度）。 |
| void [HMS_FAST_DSP_Vthr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vthr) (const float* input, size_t strideInput, const float threshold, float* output, size_t strideOutput, size_t length) | 对向量应用阈值（单精度）。 |
| void [HMS_FAST_DSP_VthrD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vthrd) (const double* input, size_t strideInput, const double threshold, double* output, size_t strideOutput, size_t length) | 对向量应用阈值（双精度）。 |
| void [HMS_FAST_DSP_Vrvrs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vrvrs) (float* vector, size_t stride, size_t length) | 原地反转向量中元素的顺序（单精度）。 |
| void [HMS_FAST_DSP_VrvrsD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vrvrsd) (double* vector, size_t stride, size_t length) | 原地反转向量中元素的顺序（双精度）。 |
| void [HMS_FAST_DSP_Vspdp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vspdp) (const float* input, size_t strideInput, double* output, size_t strideOutput, size_t length) | 将单精度向量转换为双精度向量。 |
| void [HMS_FAST_DSP_Vdpsp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vdpsp) (const double* input, size_t strideInput, float* output, size_t strideOutput, size_t length) | 将双精度向量转换为单精度向量。 |
| void [HMS_FAST_DSP_Vfill](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vfill) (float* vector, size_t stride, size_t length, const float scalar) | 使用指定标量值填充向量（单精度）。 |
| void [HMS_FAST_DSP_VfillD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vfilld) (double* vector, size_t stride, size_t length, const double scalar) | 使用指定标量值填充向量（双精度）。 |
| void [HMS_FAST_DSP_Vclr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vclr) (float* vector, size_t stride, size_t length) | 将向量所有元素清零（单精度）。 |
| void [HMS_FAST_DSP_VclrD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vclrd) (double* vector, size_t stride, size_t length) | 将向量所有元素清零（双精度）。 |
| void [HMS_FAST_DSP_Conv](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_conv) (const float* input, size_t strideInput, const float* filter, size_t strideFilter, float* output, size_t strideOutput, size_t outputLength, size_t filterLength) | 执行两个向量的卷积运算（单精度）。 |
| void [HMS_FAST_DSP_ConvD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_convd) (const double* input, size_t strideInput, const double* filter, size_t strideFilter, double* output, size_t strideOutput, size_t outputLength, size_t filterLength) | 执行两个向量的卷积运算（双精度）。 |
| void [HMS_FAST_DSP_HannWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_hannwindow) (float* output, size_t length, HMS_FAST_HannWindowType type) | 生成汉宁窗序列（单精度）。 |
| void [HMS_FAST_DSP_HannWindowD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_hannwindowd) (double* output, size_t length, HMS_FAST_HannWindowType type) | 生成汉宁窗序列（双精度）。 |
| void [HMS_FAST_DSP_Mmul](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_mmul) (const float* matrixA, size_t strideA, const float* matrixB, size_t strideB, float* matrixC, size_t strideC, size_t rowsM, size_t colsN, size_t colsP) | 执行矩阵乘法：C = A * B（单精度）。 |
| void [HMS_FAST_DSP_MmulD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_mmuld) (const double* matrixA, size_t strideA, const double* matrixB, size_t strideB, double* matrixC, size_t strideC, size_t rowsM, size_t colsN, size_t colsP) | 执行矩阵乘法：C = A * B（双精度）。 |
| void [HMS_FAST_DSP_Vvpow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vvpow) (const float* inputA, const float* inputB, float* outputC, size_t length) | 执行向量逐元素幂运算：C[i] = pow(A[i], B[i])（单精度）。 |
| void [HMS_FAST_DSP_VvpowD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vvpowd) (const double* inputA, const double* inputB, double* outputC, size_t length) | 执行向量逐元素幂运算：C[i] = pow(A[i], B[i])（双精度）。 |
| void [HMS_FAST_DSP_Vsort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsort) (float* vector, size_t length, int order) | 对向量进行原地排序（单精度）。 |
| void [HMS_FAST_DSP_VsortD](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_dsp_vsortd) (double* vector, size_t length, int order) | 对向量进行原地排序（双精度）。 |
