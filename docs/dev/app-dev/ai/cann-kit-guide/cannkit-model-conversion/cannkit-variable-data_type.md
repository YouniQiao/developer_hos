---
displayed_sidebar: appDevSidebar
title: "可变data_type"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-variable-data_type
---

## 概述

可变data\_type是OMG工具支持的一个功能，用于模型输入输出数据类型多样性的场景，无需修改训练好的模型，在使用OMG工具进行[模型转换](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-overall-parameter)时，通过指定输入、输出数据类型使得同一个模型适用于不同输入输出的场景。

## 使用说明

在进行模型转换时，输入输出数据类型指定分别需要通过[OMG参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-overall-parameter)的input\_type、output\_type来实现。

使用示例：

```
./omg --model=./model.pb --framework=3 --output=./model --input_shape="inputs:1,512,512,1" --out_nodes="outputs:0" --input_type="inputs:FP16" --output_type="outputs:UINT8"
```
