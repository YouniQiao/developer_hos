---
displayed_sidebar: appDevSidebar
title: "SetConstData"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setconstdata
---

## 函数功能

如果TensorDesc是常量节点的描述，向TensorDesc中设置权重值。

## 函数原型

```
void SetConstData(std::unique_ptr<uint8_t[]> const_data_buffer, const size_t &const_data_len);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| const\_data\_buffer | 输入 | 权重地址。 |
| const\_data\_len | 输入 | 权重长度。 |

## 返回值

无

## 异常处理

无

## 约束说明

无
