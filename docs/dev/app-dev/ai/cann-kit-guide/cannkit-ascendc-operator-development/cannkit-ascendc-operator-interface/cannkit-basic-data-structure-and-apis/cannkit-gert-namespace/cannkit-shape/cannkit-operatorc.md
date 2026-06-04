---
displayed_sidebar: appDevSidebar
title: "operator[]"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-operatorc
---

## 函数功能

获取指定index轴的dim值。

## 函数原型

```
const int64_t &operator[](size_t idx) const
int64_t &operator[](size_t idx)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| idx | 输入 | dim的index，调用者需要保证index合法。 |

## 返回值

* const int64\_t &operator[](size\_t idx) const：dim值，在idx>=kMaxDimNum时，行为未定义。
* int64\_t &operator[](size\_t idx)：dim值，在idx>=kMaxDimNum时，行为未定义。

## 约束说明

调用者需要保证index合法，即idx<kMaxDimNum。

## 调用示例

```
Shape shape0({3, 256, 256});
auto dim0 = shape0[0]; // 3
auto dim5 = shape0[5]; // 5
auto invalid_dim = shape0[kMaxDimNum]; // 行为未定义
```
