---
title: "Print_Range"
upstream_id: "harmonyos-references/capi-oh-print-print-range"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:12.253382"
---

# Print_Range

```
typedef struct {...} Print_Range
```

#### 概述

表示打印范围结构体。

起始版本： 13

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t startPage | 打印起始页。 |
| uint32_t endPage | 打印结束页。 |
| uint32_t pagesArrayLen | 打印页数组长度。 |
| uint32_t* pagesArray | 打印页数组。 |
