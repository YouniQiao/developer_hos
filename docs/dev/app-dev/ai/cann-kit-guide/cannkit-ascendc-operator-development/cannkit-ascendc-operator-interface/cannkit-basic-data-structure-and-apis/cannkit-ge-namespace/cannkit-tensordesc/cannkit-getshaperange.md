---
displayed_sidebar: appDevSidebar
title: "GetShapeRange"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-getshaperange
---

## 函数功能

获取设置的shape变化范围。

## 函数原型

```
graphStatus GetShapeRange(std::vector<std::pair<int64_t,int64_t>> &range) const;
```

## 参数说明

| 参数名 | 输入/输出 | 描述 |
| --- | --- | --- |
| range | 输出 | 设置过的shape变化范围。 |

## 返回值

| 类型 | 描述 |
| --- | --- |
| graphStatus | 函数执行结果。若成功，则该值为GRAPH\_SUCCESS(即0)，其他值则为执行失败。 |

## 异常处理

无

## 约束说明

无
