---
title: "XEG_HPSRadixSort"
upstream_id: "harmonyos-references/xengine-kit-xeg-hpsradixsort"
catalog: "harmonyos-references"
content_hash: "e86bfb969836"
synced_at: "2026-07-09T01:01:10.392813"
---

# XEG_HPSRadixSort

#### 概述

此结构体描述HPS基数排序扩展结构信息。

起始版本： 6.0.0(20)

相关模块： [XEngine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine)

所在头文件： [xeg_vulkan_hps.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xeg-vulkan-hps-8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| XEG_StructureType [sType](#stype) | 识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_HPS_RADIX_SORT。 |
| const void * [pNext](#pnext) | 指向扩展结构的指针。 |

#### 结构体成员变量说明

#### [h2]pNext

```
const void* XEG_HPSRadixSort::pNext
```
 描述

指向扩展结构的指针。

#### [h2]sType

```
XEG_StructureType XEG_HPSRadixSort::sType
```
 描述

识别此结构的[XEG_StructureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/xengine-kit-xengine#xeg_structuretype)值，必须是XEG_STRUCTURE_TYPE_HPS_RADIX_SORT。
