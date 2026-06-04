---
displayed_sidebar: appDevSidebar
title: "SetOriginShapeDimNum"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setoriginshapedimnum
---

## 函数功能

设置原始shape的维度大小，即rank大小。

## 函数原型

```
graphStatus SetOriginShapeDimNum(const size_t dim_num);
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| dim\_num | 输入 | 原始shape的维度大小，即原始shape的rank。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 设置成功返回GRAPH\_SUCCESS，否则，返回GRAPH\_FAILED。 |

## 异常处理

无

## 约束说明

无
