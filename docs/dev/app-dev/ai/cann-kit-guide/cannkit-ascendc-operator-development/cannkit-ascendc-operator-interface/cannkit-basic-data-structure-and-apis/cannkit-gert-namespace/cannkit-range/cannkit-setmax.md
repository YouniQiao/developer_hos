---
displayed_sidebar: appDevSidebar
title: "SetMax"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-setmax
---

## 函数功能

设置最大的T对象指针。

## 函数原型

```
void SetMax(T *max)
```

## 参数说明

| 参数 | 输入/输出 | 说明 |
| --- | --- | --- |
| max | 输入 | 最大的T对象指针。 |

## 返回值

无

## 约束说明

无

## 调用示例

```
Range<int> range;
int max = 1024;
range.SetMax(&max);
```
