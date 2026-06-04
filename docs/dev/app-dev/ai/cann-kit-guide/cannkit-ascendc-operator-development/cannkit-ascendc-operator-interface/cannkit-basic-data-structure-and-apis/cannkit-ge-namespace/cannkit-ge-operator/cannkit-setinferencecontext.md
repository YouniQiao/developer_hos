---
displayed_sidebar: appDevSidebar
title: "SetInferenceContext"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setinferencecontext
---

## 函数功能

向当前算子传递InferShape推导所需要的关联信息，比如前面算子的shape和DataType信息。

## 函数原型

```
void SetInferenceContext(const InferenceContextPtr &inference_context);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| inference\_context | 输入 | 当前operator的推理上下文。  InferenceContextPtr是指向InferenceContext类的指针的别名：  using InferenceContextPtr = std::shared\_ptr<InferenceContext>; |

## 返回值

无

## 异常处理

无

## 约束说明

无
