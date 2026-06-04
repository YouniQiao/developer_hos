---
displayed_sidebar: appDevSidebar
title: "GetShape"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-getshape
---

## 函数功能

获取TensorDesc所描述Tensor的Shape。

## 函数原型

```
Shape GetShape() const;
```

## 参数说明

无

## 返回值

| 类型 | 描述 |
| --- | --- |
| [Shape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-shape-construction-and-destructor) | TensorDesc描述的shape。 |

## 异常处理

无

## 约束说明

由于返回的Shape信息为值拷贝，因此修改返回的Shape信息，不影响TensorDesc中已有的Shape信息。
