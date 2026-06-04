---
displayed_sidebar: appDevSidebar
title: "SetOriginShapeDim"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setoriginshapedim
---

## 函数功能

设置原始shape第idx维度。

## 函数原型

```
graphStatus SetOriginShapeDim(const size_t idx, const int64_t dim_value);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| idx | 输入 | 维度的索引，索引从0开始。 |
| dim\_value | 输入 | 需设置的值。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 设置成功返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
