---
title: "HiAI_SingleOpExecutorConvolutionParam"
upstream_id: "harmonyos-references/cannkit-sopexec-convparam"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:55.698522"
---

# HiAI_SingleOpExecutorConvolutionParam

```
typedef struct HiAI_SingleOpExecutorConvolutionParam {...} HiAI_SingleOpExecutorConvolutionParam
```

#### 概述

[HMS_HiAISingleOpExecutor_CreateConvolution](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_createconvolution)输入参数。

起始版本： 5.0.0(12)

相关模块： [CANN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit)

所在头文件： [hiai_single_op.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-single-op-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [HiAI_SingleOpOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopoptions) * [options](#options) | 指向[HiAI_SingleOpOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopoptions)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor) * [opDesc](#opdesc) | 指向卷积算子对应的[HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensordesc) * [input](#input) | 指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensordesc) * [output](#output) | 指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensor) * [filter](#filter) | 指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensor) * [bias](#bias) | 指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。 |

#### 结构体成员变量说明

#### [h2]bias

```
HiAI_SingleOpTensor* HiAI_SingleOpExecutorConvolutionParam::bias
```
 描述

指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。

#### [h2]filter

```
HiAI_SingleOpTensor* HiAI_SingleOpExecutorConvolutionParam::filter
```
 描述

指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。

#### [h2]input

```
HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorConvolutionParam::input
```
 描述

指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。

#### [h2]opDesc

```
HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorConvolutionParam::opDesc
```
 描述

指向卷积算子对应的[HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。

#### [h2]options

```
HiAI_SingleOpOptions* HiAI_SingleOpExecutorConvolutionParam::options
```
 描述

指向[HiAI_SingleOpOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopoptions)对象的指针。该值不能为空指针，否则接口调用失败。

#### [h2]output

```
HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorConvolutionParam::output
```
 描述

指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。
