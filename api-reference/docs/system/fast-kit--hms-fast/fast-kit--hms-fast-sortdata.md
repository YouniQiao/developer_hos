---
title: "HMS_FAST_SortData"
upstream_id: "harmonyos-references/fast-kit--hms-fast-sortdata"
catalog: "harmonyos-references"
content_hash: "d63012555b8e"
synced_at: "2026-07-28T16:51:04.273602"
---

# HMS_FAST_SortData

#### 概述

描述待排序的连续内存数据块。

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

所在头文件： [fast_utils_algorithm.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast-utils-algorithm-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| size_t [sizeOf](#sizeof) | 连续内存容器中单个元素的大小。 |
| size_t [length](#length) | 连续内存容器中的元素个数。 |
| [HMS_FAST_SortElementPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sortelementptr) [data](#data) | 指向待排序的连续内存起始地址的指针。 |

#### 结构体成员变量说明

#### [h2]sizeOf

```
size_t HMS_FAST_SortData::sizeOf
```
 描述

data所指向的连续内存容器中单个元素的大小。

#### [h2]length

```
size_t HMS_FAST_SortData::length
```
 描述

data所指向的连续内存容器中的元素个数。

#### [h2]data

```
HMS_FAST_SortElementPtr HMS_FAST_SortData::data
```
 描述

指向待排序的连续内存起始地址的指针。
