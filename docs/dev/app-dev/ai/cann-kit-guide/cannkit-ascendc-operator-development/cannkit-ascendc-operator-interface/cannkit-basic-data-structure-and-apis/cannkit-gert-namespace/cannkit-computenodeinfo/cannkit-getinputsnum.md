---
displayed_sidebar: appDevSidebar
title: "GetInputsNum"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getinputsnum
---

## 函数功能

获取算子在网络中的实际输入个数。

## 函数原型

```
size_t GetInputsNum() const
```

## 参数说明

无

## 返回值

算子的实际输入个数。

## 约束说明

无

## 调用示例

```
size_t index = compute_node_info->GetInputsNum();
```
