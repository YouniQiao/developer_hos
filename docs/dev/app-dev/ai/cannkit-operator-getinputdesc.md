---
title: "GetInputDesc"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operator-getinputdesc
---

## 函数功能

根据算子Input名称或Input索引获取算子Input的TensorDesc。

## 函数原型

![](./img/25ad92fd.png)

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
TensorDesc GetInputDesc(const std::string &name) const;
TensorDesc GetInputDescByName(const char_t *name) const;
TensorDesc GetInputDesc(uint32_t index) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| name | 输入 | 算子Input名称。  当无此算子Input名称时，则返回TensorDesc默认构造的对象，其中，主要设置[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)为DT\_FLOAT（表示float类型），[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)为FORMAT\_NCHW（表示NCHW）。 |
| index | 输入 | 算子Input索引。  当无此算子Input索引时，则返回TensorDesc默认构造的对象，其中，主要设置[DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-datatype)为DT\_FLOAT（表示float类型），[Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-ge-format)为FORMAT\_NCHW（表示NCHW）。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| [TensorDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-construction-and-destructor) | 算子Input的TensorDesc。 |

## 异常处理

无

## 约束说明

无
