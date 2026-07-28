---
title: "fast_utils_algorithm.h"
upstream_id: "harmonyos-references/fast-kit-fast-utils-algorithm-8h"
catalog: "harmonyos-references"
content_hash: "730bb79ac367"
synced_at: "2026-07-28T16:51:03.367810"
---

# fast_utils_algorithm.h

#### 概述

通用算法工具头文件，目前提供排序相关的数据结构和函数定义。

引用文件： <FASTKit/fast_utils_algorithm.h>

库： libfast_utils.so

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--hms-fast-sortdata) | 描述待排序的连续内存数据块。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--hms-fast-sortdata) [HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sortdata) | 描述待排序的连续内存数据块。 |
| typedef void* [HMS_FAST_SortElementPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sortelementptr) | 表示通用容器中单个元素的opaque pointer类型。 |
| typedef const void* [HMS_FAST_SortElementConstPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sortelementconstptr) | 表示通用容器中单个元素的const opaque pointer类型。 |
| typedef int32_t(*[HMS_FAST_Sort_CompFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sort_compfunc)) ([HMS_FAST_SortElementConstPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sortelementconstptr) first, [HMS_FAST_SortElementConstPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sortelementconstptr) second) | 开发者自定义比较函数的回调函数指针类型。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Algo_Sort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_algo_sort) ([HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--hms-fast-sortdata) *data, [HMS_FAST_Sort_CompFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sort_compfunc) comp) | 使用开发者提供的比较函数对任意类型数组进行完整排序。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Algo_PartialSortAt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_algo_partialsortat) ([HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--hms-fast-sortdata) *data, size_t offset, size_t count, [HMS_FAST_Sort_CompFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_sort_compfunc) comp) | 对数组进行原地部分排序，使指定区间对应排序后的相应段。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Algo_NaturalSort](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_algo_naturalsort) ([HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--hms-fast-sortdata) *data, int32_t ascend) | 使用自然语言规则对UTF-8字符串数组进行排序。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Algo_NaturalPartialSortAt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_algo_naturalpartialsortat) ([HMS_FAST_SortData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--hms-fast-sortdata) *data, size_t offset, size_t count, int32_t ascend) | 使用自然语言规则对UTF-8字符串数组进行部分排序，使指定区间对应排序后的相应段。 |
