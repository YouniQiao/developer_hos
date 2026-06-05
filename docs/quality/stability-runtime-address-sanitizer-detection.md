---
title: "地址越界类问题检测方法"
source_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-runtime-address-sanitizer-detection
format: md
---


# 地址越界类问题检测方法

## 地址越界定义

地址越界是指程序访问了本不属于自己的内存区域，导致数据被意外修改、程序崩溃、产生不可预期的行为。这种错误通常发生在对不属于当前进程的内存进行读写操作时，主要涉及全局存储区（.data/.bss）、堆内存和栈内存三种类型。

## 检测原理与使用方法

可参看[地址越界类问题检测](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-ram-detection)。

## 订阅地址越界事件

发生地址越界事件后，可参看[地址越界事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/address-sanitizer-events)。
