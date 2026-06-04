---
displayed_sidebar: appDevSidebar
title: "SetDimNum"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setdimnum
---

## 函数功能

设置dim num。

## 函数原型

```
void SetDimNum(const size_t dim_num)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| dim\_num | 输入 | 将Shape对象的dim\_num\_设置为dim\_num。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
Shape shape0({3, 256, 256});
shape0.SetDimNum(1);
auto dim_num = shape0.GetDimNum(); // 1
```
