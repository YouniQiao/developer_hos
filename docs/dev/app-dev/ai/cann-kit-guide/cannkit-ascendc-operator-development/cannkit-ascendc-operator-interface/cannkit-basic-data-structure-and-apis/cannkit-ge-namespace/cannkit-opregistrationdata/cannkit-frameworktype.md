---
displayed_sidebar: appDevSidebar
title: "FrameworkType"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-frameworktype
---

## 函数功能

设置原始模型的框架类型。

## 函数原型

```
OpRegistrationData &FrameworkType(const domi::FrameworkType &fmk_type)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| fmk\_type | 输入 | 框架类型。  - CAFFE  - TENSORFLOW  - ONNX  FrameworkType枚举值如下：CAFFE、MINDSPORE、TENSORFLOW、ANDROID\_NN、ONNX、FRAMEWORK\_RESERVED。 |
