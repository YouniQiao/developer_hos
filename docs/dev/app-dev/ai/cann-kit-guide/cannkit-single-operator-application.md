---
displayed_sidebar: appDevSidebar
title: "单算子应用"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-single-operator-application
---

## 概述

CANN Kit提供独立的算子创建和计算通路，三方框架可以在模型加载、推理过程中，将卷积、深度卷积等算子通过单算子对接的方式迁移至NPU，经过硬件平台的加速计算，与整网模式对比灵活度更高，相比于整网CPU计算性能更优。

![](./img/8b09ebcb.jpg)

以下为单算子Tensor创建，单算子执行器创建、加载、执行接口，接口使用请参见[开发步骤](#开发步骤)。如要使用更丰富的设置和查询接口，请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit)。

**表1** 单算子接口及功能介绍

| 接口名 | 描述 |
| --- | --- |
| HiAI\_SingleOpTensorDesc \* HMS\_HiAISingleOpTensorDesc\_Create (const int64\_t \*dims, size\_t dimNum, HiAI\_SingleOpDataType dataType, HiAI\_SingleOpFormat format, bool isVirtual); | 创建HiAI\_SingleOpTensorDesc对象。 |
| void HMS\_HiAISingleOpTensorDesc\_Destroy (HiAI\_SingleOpTensorDesc \*\*tensorDesc); | 释放HiAI\_SingleOpTensorDesc对象。 |
| HiAI\_SingleOpBuffer \* HMS\_HiAISingleOpBuffer\_Create (size\_t dataSize); | 按照指定的内存大小创建HiAI\_SingleOpBuffer对象。 |
| size\_t HMS\_HiAISingleOpBuffer\_GetSize (const HiAI\_SingleOpBuffer \*buffer); | 查询HiAI\_SingleOpBuffer的字节大小。 |
| void \* HMS\_HiAISingleOpBuffer\_GetData (const HiAI\_SingleOpBuffer \*buffer); | 查询HiAI\_SingleOpBuffer的内存地址。 |
| OH\_NN\_ReturnCode HMS\_HiAISingleOpBuffer\_Destroy (HiAI\_SingleOpBuffer \*\*buffer); | 释放HiAI\_SingleOpBuffer对象。 |
| HiAI\_SingleOpTensor \* HMS\_HiAISingleOpTensor\_CreateFromTensorDesc (const HiAI\_SingleOpTensorDesc \*desc); | 根据HiAI\_SingleOpTensorDesc创建HiAI\_SingleOpTensor对象。 |
| HiAI\_SingleOpTensor \* HMS\_HiAISingleOpTensor\_CreateFromConst (const HiAI\_SingleOpTensorDesc \*desc, void \*data, size\_t dataSize); | 根据HiAI\_SingleOpTensorDesc、常量数据（如卷积权重、偏置等）的内存地址和数据大小创建HiAI\_SingleOpTensor对象。 |
| HiAI\_SingleOpTensorDesc \* HMS\_HiAISingleOpTensor\_GetTensorDesc (const HiAI\_SingleOpTensor \*tensor); | 获取HiAI\_SingleOpTensor的Tensor描述。 |
| HiAI\_SingleOpBuffer \* HMS\_HiAISingleOpTensor\_GetBuffer (const HiAI\_SingleOpTensor \*tensor); | 获取HiAI\_SingleOpTensor的Buffer。 |
| OH\_NN\_ReturnCode HMS\_HiAISingleOpTensor\_Destroy (HiAI\_SingleOpTensor \*\*tensor); | 释放HiAI\_SingleOpTensor对象。 |
| HiAI\_SingleOpOptions \* HMS\_HiAISingleOpOptions\_Create (void); | 创建HiAI\_SingleOpOptions对象。 |
| void HMS\_HiAISingleOpOptions\_Destroy (HiAI\_SingleOpOptions \*\*options); | 释放HiAI\_SingleOpOptions对象。 |
| HiAI\_SingleOpDescriptor\* HMS\_HiAISingleOpDescriptor\_CreateConvolution(HiAISingleOpDescriptor\_ConvolutionParam param); | 创建卷积类（普通卷积、转置卷积、深度卷积）的描述符对象。 |
| void HMS\_HiAISingleOpDescriptor\_Destroy (HiAI\_SingleOpDescriptor \*\*opDesc); | 释放HiAI\_SingleOpDescriptor对象。 |
| HiAI\_SingleOpExecutor\* HMS\_HiAISingleOpExecutor\_CreateConvolution(HiAI\_SingleOpExecutorConvolutionParam param); | 创建卷积类算子对应的HiAI\_SingleOpExecutor对象。 |
| size\_t HMS\_HiAISingleOpExecutor\_GetWorkspaceSize (const HiAI\_SingleOpExecutor \*executor); | 查询HiAI\_SingleOpExecutor所需的ION内存工作空间的字节大小。 |
| OH\_NN\_ReturnCode HMS\_HiAISingleOpExecutor\_Init (HiAI\_SingleOpExecutor \*executor, void \*workspace, size\_t workspaceSize); | 加载HiAI\_SingleOpExecutor。 |
| OH\_NN\_ReturnCode HMS\_HiAISingleOpExecutor\_Execute (HiAI\_SingleOpExecutor \*executor, HiAI\_SingleOpTensor \*input[], int32\_t inputNum, HiAI\_SingleOpTensor \*output[], int32\_t outputNum); | 执行同步运算推理。 |
| OH\_NN\_ReturnCode HMS\_HiAISingleOpExecutor\_Destroy (HiAI\_SingleOpExecutor \*\*executor); | 销毁HiAI\_SingleOpExecutor对象，释放执行器占用的内存。 |

## 开发步骤

以下开发步骤以卷积单算子为例。

1. 创建单算子执行器。

   1. 调用[HMS\_HiAISingleOpOptions\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopoptions_create)，创建单算子配置对象。
   2. 调用[HMS\_HiAISingleOpDescriptor\_CreateConvolution](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopdescriptor_createconvolution)，创建卷积类算子描述符对象。
   3. 调用[HMS\_HiAISingleOpTensor\_CreateFromConst](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleoptensor_createfromconst)，分别创建卷积算子的权重、偏置单算子Tensor。
   4. 调用[HMS\_HiAISingleOpTensorDesc\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleoptensordesc_create)，分别创建单算子输入Tensor、输出Tensor的描述对象。
   5. 调用[HMS\_HiAISingleOpExecutor\_CreateConvolution](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_createconvolution)，将上述创建好的卷积类算子描述符对象、卷积算子的权重Tensor、卷积算子的偏置Tensor、输入Tensor描述、输出Tensor描述作为输入，创建单算子执行器；

      如果需要创建卷积算子与激活算子的融合算子执行器，还需要调用[HMS\_HiAISingleOpDescriptor\_CreateActivation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopdescriptor_createactivation)，创建激活类算子描述符对象，然后调用[HMS\_HiAISingleOpExecutor\_CreateFusedConvolutionActivation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_createfusedconvolutionactivation)创建融合算子执行器。
   6. 创建成功后，调用[HMS\_HiAISingleOpDescriptor\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopdescriptor_destroy)释放算子描述符对象，调用[HMS\_HiAISingleOpOptions\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopoptions_destroy)释放单算子创建配置对象。
2. 创建输入/输出Tensor。

   1. 调用[HMS\_HiAISingleOpTensor\_CreateFromTensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleoptensor_createfromtensordesc)，分别创建单算子输入Tensor、输出Tensor。
   2. 创建成功后，调用[HMS\_HiAISingleOpTensorDesc\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleoptensordesc_destroy)释放Tensor描述符对象。
   3. 调用[HMS\_HiAISingleOpTensor\_GetBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleoptensor_getbuffer)，获取输入/输出Tensor内部的Buffer对象。
   4. 调用[HMS\_HiAISingleOpBuffer\_GetData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopbuffer_getdata)，获取申请好的输入/输出ION内存地址，可用于该单算子在模型整网推理中的输入写入、输出读取。
3. 加载单算子执行器。

   1. 调用[HMS\_HiAISingleOpExecutor\_GetWorkspaceSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_getworkspacesize)，获取已创建的单算子执行器在执行推理计算时需要的ION内存工作空间大小。
   2. 调用[HMS\_HiAISingleOpBuffer\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopbuffer_create)，根据单算子执行器所需的ION内存工作空间大小创建足够的工作空间。
   3. 调用[HMS\_HiAISingleOpBuffer\_GetData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopbuffer_getdata)，获取申请好的ION内存工作空间的地址。
   4. 调用[HMS\_HiAISingleOpExecutor\_Init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_init)，使用工作空间内存地址、工作空间大小，加载创建好的单算子执行器。
4. 执行推理运算。

   调用[HMS\_HiAISingleOpExecutor\_Execute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_execute)，执行同步运算推理。
5. 卸载单算子执行器，释放资源。

   * 调用[HMS\_HiAISingleOpTensor\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleoptensor_destroy)，释放输入、输出Tensor对象
   * 调用[HMS\_HiAISingleOpBuffer\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopbuffer_destroy)，释放工作空间。
   * 调用[HMS\_HiAISingleOpExecutor\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaisingleopexecutor_destroy)，释放执行器对象。

## 示例说明

假定现在有一个深度卷积算子，输入维度为1x8x224x224，输入NCHW格式排布的float32类型数据，准备好NCHW排布的权重与偏置数据，调用单算子接口推理运算获得NCHW格式float32类型的输出可以参考如下示例代码：

```
#include "CANNKit/hiai_single_op.h"
#include <cstdio>
#include <cstdlib>
#include <cstring>
// 示例算子参数
// 单算子卷积模式
HiAI_SingleOpConvMode convMode = HIAI_SINGLEOP_CONV_MODE_DEPTHWISE;
int64_t strides[2] = {1, 1};
int64_t dilations[2] = {1, 1};
int64_t pads[4] = {0, 0, 0, 0};
int64_t groups = 1;
// 单算子填充模式
HiAI_SingleOpPadMode padMode = HIAI_SINGLEOP_PAD_MODE_SAME;
int64_t filterDims[4] = {8, 1, 3, 3};
size_t filterDataSize = 8 * 1 * 3 * 3 * sizeof(float);
void* filterData = malloc(filterDataSize);
int64_t biasDims[1] = {8};
size_t biasDataSize = 8 * sizeof(float);
void* biasData = malloc(biasDataSize);
int64_t inputDims[4] = {1, 8, 224, 224};
HiAI_SingleOpDataType inputDataType = HIAI_SINGLEOP_DT_FLOAT;
// 单算子张量排布格式
HiAI_SingleOpFormat inputFormat = HIAI_SINGLEOP_FORMAT_NCHW;
bool inputIsVirtual = false;
// 若不指定算子输出数据类型和排布格式，请设置数据类型为HIAI_SINGLEOP_DT_UNDEFINED，排布格式为HIAI_SINGLEOP_FORMAT_RESERVED
// 在单算子创建完成后，调用HMS_HiAISingleOpExecutor_UpdateOutputTensorDesc，将输出Tensor描述更新为硬件适配最优的数据类型和排布格式
int64_t outputDims[4] = {1, 8, 224, 224};
HiAI_SingleOpDataType outputDataType = HIAI_SINGLEOP_DT_FLOAT;
HiAI_SingleOpFormat outputFormat = HIAI_SINGLEOP_FORMAT_NCHW;
bool outputIsVirtual = false;

// 创建单算子执行器
HiAI_SingleOpOptions* options = HMS_HiAISingleOpOptions_Create();
HiAISingleOpDescriptor_ConvolutionParam convOpDescCreateParam = {convMode, {0}, {0}, {0}, groups, padMode};
memcpy(convOpDescCreateParam.strides, strides, 2 * sizeof(int64_t));
memcpy(convOpDescCreateParam.dilations, dilations, 2 * sizeof(int64_t));
memcpy(convOpDescCreateParam.pads, pads, 4 * sizeof(int64_t));
// 创建卷积类的描述符对象
HiAI_SingleOpDescriptor* convOpDesc = HMS_HiAISingleOpDescriptor_CreateConvolution(convOpDescCreateParam);
// 创建一个单算子tensor描述对象，根据维度、数据类型和格式
HiAI_SingleOpTensorDesc* filterDesc = HMS_HiAISingleOpTensorDesc_Create(filterDims, 4, HIAI_SINGLEOP_DT_FLOAT, HIAI_SINGLEOP_FORMAT_NCHW, false);
// 创建一个单算子tensor对象
HiAI_SingleOpTensor* filter = HMS_HiAISingleOpTensor_CreateFromConst(filterDesc, filterData, filterDataSize);
HiAI_SingleOpTensorDesc* biasDesc = HMS_HiAISingleOpTensorDesc_Create(biasDims, 1, HIAI_SINGLEOP_DT_FLOAT, HIAI_SINGLEOP_FORMAT_NCHW, false);
HiAI_SingleOpTensor* bias = HMS_HiAISingleOpTensor_CreateFromConst(biasDesc, biasData, biasDataSize);
HiAI_SingleOpTensorDesc* inputDesc = HMS_HiAISingleOpTensorDesc_Create(inputDims, 4, inputDataType, inputFormat, inputIsVirtual);
HiAI_SingleOpTensorDesc* outputDesc = HMS_HiAISingleOpTensorDesc_Create(outputDims, 4, outputDataType, outputFormat, outputIsVirtual);
// 构造单算子卷积executor参数
HiAI_SingleOpExecutorConvolutionParam executorCreateParam = {options, convOpDesc, inputDesc, outputDesc, filter, bias};
// 创建卷积单算子executor
HiAI_SingleOpExecutor* executor = HMS_HiAISingleOpExecutor_CreateConvolution(executorCreateParam);
if (executor == nullptr) {
    printf("HMS_HiAISingleOp executor create failed. \n");
}
// 对不需要的资源建议即时销毁
HMS_HiAISingleOpTensorDesc_Destroy(&filterDesc);
HMS_HiAISingleOpTensorDesc_Destroy(&biasDesc);
HMS_HiAISingleOpOptions_Destroy(&options);
HMS_HiAISingleOpDescriptor_Destroy(&convOpDesc);
OH_NN_ReturnCode ret = HMS_HiAISingleOpTensor_Destroy(&filter);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp filter destroy failed.\n");
}
ret = HMS_HiAISingleOpTensor_Destroy(&bias);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp bias destroy failed.\n");
}

// 创建输入/输出Tensor
HiAI_SingleOpTensor* input = HMS_HiAISingleOpTensor_CreateFromTensorDesc(inputDesc);
HMS_HiAISingleOpTensorDesc_Destroy(&inputDesc);
HiAI_SingleOpTensor* output = HMS_HiAISingleOpTensor_CreateFromTensorDesc(outputDesc);
HMS_HiAISingleOpTensorDesc_Destroy(&outputDesc);
// 单算子输入Tensor和输出Tensor的内存必须为ION内存以节省拷贝开销
// 创建输入Tensor成功后，可以使用以下方式获取输入Tensor内的ION内存地址进行输入数据填装
// 输出Tensor内的ION内存地址也可以用以下方式获取，在推理计算成功后用于输出数据读取
HiAI_SingleOpBuffer* inputBuffer = HMS_HiAISingleOpTensor_GetBuffer(input);
void* inputData = HMS_HiAISingleOpBuffer_GetData(inputBuffer);
size_t inputDataSize = HMS_HiAISingleOpBuffer_GetSize(inputBuffer);
memset(inputData, 0, inputDataSize);

// 查询单算子执行器所需的ION内存工作空间的字节大小
size_t workspaceSize = HMS_HiAISingleOpExecutor_GetWorkspaceSize(executor);
// 若存在多个单算子执行器，各个执行器的工作空间内存可以复用，只需要申请所需的最大工作空间即可
HiAI_SingleOpBuffer* workspaceBuffer = HMS_HiAISingleOpBuffer_Create(workspaceSize);
void* workspace = HMS_HiAISingleOpBuffer_GetData(workspaceBuffer);
ret = HMS_HiAISingleOpExecutor_Init(executor, workspace, workspaceSize);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp executor init failed.\n");
}

// 执行推理运算
HiAI_SingleOpTensor* inputs[] = {input};
HiAI_SingleOpTensor* outputs[] = {output};
ret = HMS_HiAISingleOpExecutor_Execute(executor, inputs, 1, outputs, 1);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp executor execute failed.\n");
}

// 卸载单算子执行器，释放资源
ret = HMS_HiAISingleOpTensor_Destroy(&input);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp input destroy failed.\n");
}
ret = HMS_HiAISingleOpTensor_Destroy(&output);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp output destroy failed.\n");
}
ret = HMS_HiAISingleOpBuffer_Destroy(&workspaceBuffer);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp workspaceBuffer destroy failed.\n");
}
ret = HMS_HiAISingleOpExecutor_Destroy(&executor);
if (ret != OH_NN_SUCCESS) {
    printf("HMS_HiAISingleOp executor destroy failed.\n");
}
free(filterData);
free(biasData);
```
