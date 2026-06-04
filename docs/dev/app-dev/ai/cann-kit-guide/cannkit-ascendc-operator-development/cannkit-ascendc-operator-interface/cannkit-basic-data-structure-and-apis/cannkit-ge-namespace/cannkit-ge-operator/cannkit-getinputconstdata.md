---
displayed_sidebar: appDevSidebar
title: "GetInputConstData"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getinputconstdata
---

## 函数功能

如果指定算子Input对应的节点为Const节点，可调用该接口获取Const节点的数据。

## 函数原型

![](./img/012ab5a8.png)

数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
graphStatus GetInputConstData(const std::string &dst_name, Tensor &data) const;
graphStatus GetInputConstData(const char_t *dst_name, Tensor &data) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| dst\_name | 输入 | 输入名称。 |
| data | 输出 | 返回Const节点的数据Tensor。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 如果指定算子Input对应的节点为Const节点且获取数据成功，返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
