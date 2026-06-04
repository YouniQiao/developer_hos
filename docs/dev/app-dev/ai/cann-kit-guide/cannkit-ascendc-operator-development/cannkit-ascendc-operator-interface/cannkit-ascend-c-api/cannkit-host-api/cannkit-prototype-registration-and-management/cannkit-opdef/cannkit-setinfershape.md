---
displayed_sidebar: appDevSidebar
title: "SetInferShape"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setinfershape
---

## 函数功能

注册Shape推导函数。

## 函数原型

```
OpDef &SetInferShape(gert::OpImplRegisterV2::InferShapeKernelFunc func);
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| func | 输入 | Shape推导函数。InferShapeKernelFunc类型定义如下。  using InferShapeKernelFunc = UINT32 (\*)(InferShapeContext \*); |

## 返回值

[OpDef](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-input)算子定义。

## 约束说明

无
