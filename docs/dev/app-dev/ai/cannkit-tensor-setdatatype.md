---
title: "SetDataType"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensor-setdatatype
---

## 函数功能

设置Tensor的Datatype。

## 函数原型

```
graphStatus SetDataType(const ge::DataType &dtype);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| dtype | 输入 | 需设置的DataType值。  关于DataType类型，请参见[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 设置成功返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
