---
title: "HiAI_SingleOpExecutorFusedConvolutionActivationParam"
upstream_id: "harmonyos-references/cannkit-sopexec-fusedconv-actparam"
catalog: "harmonyos-references"
content_hash: "124fdac37d01"
synced_at: "2026-07-09T01:01:41.178239"
---

# HiAI_SingleOpExecutorFusedConvolutionActivationParam

```
typedef struct HiAI_SingleOpExecutorFusedConvolutionActivationParam {...} HiAI_SingleOpExecutorFusedConvolutionActivationParam
```

#### 概述

[HMS_HiAISingleOpExecutor_CreateFusedConvolutionActivation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation)输入参数。

起始版本： 5.0.0(12)

相关模块： [CANN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit)

所在头文件： [hiai_single_op.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit-hiai-single-op-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [HiAI_SingleOpOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopoptions) * [options](#options) | 指向[HiAI_SingleOpOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopoptions)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor) * [convOpDesc](#convopdesc) | 指向卷积算子对应的[HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor) * [actOpDesc](#actopdesc) | 指向激活算子对应的[HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensordesc) * [input](#input) | 指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensordesc) * [output](#output) | 指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensor) * [filter](#filter) | 指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。 |
| [HiAI_SingleOpTensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleoptensor) * [bias](#bias) | 指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。 |

#### 结构体成员变量说明

#### [h2]actOpDesc

```
HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::actOpDesc
```
 描述

指向激活算子对应的[HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。

#### [h2]bias

```
HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::bias
```
 描述

指向偏置Tensor的指针。如果卷积没有偏置，则该值可以是空指针。

#### [h2]convOpDesc

```
HiAI_SingleOpDescriptor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::convOpDesc
```
 描述

指向卷积算子对应的[HiAI_SingleOpDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopdescriptor)对象的指针。该值不能为空指针，否则接口调用失败。

#### [h2]filter

```
HiAI_SingleOpTensor* HiAI_SingleOpExecutorFusedConvolutionActivationParam::filter
```
 描述

指向卷积核Tensor的指针。该值不能为空指针，否则接口调用失败。

#### [h2]input

```
HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::input
```
 描述

指向输入Tensor描述的指针。该值不能为空指针，否则接口调用失败。

#### [h2]options

```
HiAI_SingleOpOptions* HiAI_SingleOpExecutorFusedConvolutionActivationParam::options
```
 描述

指向[HiAI_SingleOpOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_singleopoptions)对象的指针。该值不能为空指针，否则接口调用失败。

#### [h2]output

```
HiAI_SingleOpTensorDesc* HiAI_SingleOpExecutorFusedConvolutionActivationParam::output
```
 描述

指向输出Tensor描述的指针。该值不能为空指针，否则接口调用失败。
