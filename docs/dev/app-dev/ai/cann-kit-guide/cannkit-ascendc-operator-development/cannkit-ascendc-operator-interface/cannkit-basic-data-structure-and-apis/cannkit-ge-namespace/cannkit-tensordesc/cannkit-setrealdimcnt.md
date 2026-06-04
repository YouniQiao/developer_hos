---
displayed_sidebar: appDevSidebar
title: "SetRealDimCnt"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setrealdimcnt
---

## 函数功能

向TensorDesc中设置Tensor的实际维度数目。

通过[GetShape](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-tensordesc-getshape)接口返回的Shape的维度可能存在补1的场景，因此可以通过该接口设置Shape的实际维度个数。

## 函数原型

```
void SetRealDimCnt(const int64_t real_dim_cnt);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| real\_dim\_cnt | 输入 | 需设置的TensorDesc的实际数据维度数目信息。 |

## 返回值

无

## 异常处理

无

## 约束说明

无
