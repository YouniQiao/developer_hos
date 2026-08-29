---
title: "Print_StringList"
upstream_id: "harmonyos-references/capi-oh-print-print-stringlist"
catalog: "harmonyos-references"
content_hash: "697532ebd21d"
synced_at: "2026-08-29T18:17:00.412590"
---

# Print_StringList

```
typedef struct {...} Print_StringList
```

#### 概述

表示字符串列表，用于在打印模块中传递多个字符串数据。该结构体通过count字段记录字符串数量、list字段指向字符串数组，适用于需要批量传递多个字符串数据的场景。相关接口请参见[OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t count | 字符串数量，表示list数组中的元素数量。 |
| char **list | 指向字符串数组的指针，数组元素数量须与count值一致。 |
