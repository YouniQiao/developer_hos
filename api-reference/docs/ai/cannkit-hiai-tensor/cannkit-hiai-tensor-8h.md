---
title: "hiai_tensor.h"
upstream_id: "harmonyos-references/cannkit-hiai-tensor-8h"
catalog: "harmonyos-references"
content_hash: "aad4e0b1ec4d"
synced_at: "2026-07-09T01:01:40.825461"
---

# hiai_tensor.h

#### 概述

模型推理时使用的输入输出内存相关的辅助接口。

通过以下接口，可以关联AippParam到tensor中，也可计算图片格式需要申请的tensor内存大小。

引用文件： <CANNKit/hiai_tensor.h>

库： libhiai_foundation.so

系统能力： SystemCapability.AI.HiAIFoundation

起始版本： 4.1.0(11)

相关模块： [CANN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| size_t [HMS_HiAITensor_GetSizeWithImageFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaitensor_getsizewithimageformat) (NN_TensorDesc *desc, [HiAI_ImageFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_imageformat) format) | 根据NN_TensorDesc和HiAI_ImageFormat计算申请tensor的大小。 |
| OH_NN_ReturnCode [HMS_HiAITensor_SetAippParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaitensor_setaippparams) (NN_Tensor *tensor, [HiAI_AippParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_aippparam) *aippParams[], size_t aippNum) | 给NN_Tensor设置AippParams。 |
