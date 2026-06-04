---
title: "GetDataType"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-getdatatype
---

## 函数功能

获取TensorDesc所描述Tensor的数据类型。

## 函数原型

```
DataType GetDataType() const;
```

## 参数说明

无

## 返回值

| 类型 | 描述 |
| --- | --- |
| [DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype) | TensorDesc所描述的Tensor的数据类型。 |

## 异常处理

无

## 约束说明

由于返回的DataType信息为值拷贝，因此修改返回的DataType信息，不影响TensorDesc中已有的DataType信息。
