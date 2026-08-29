---
title: "Print_Range"
upstream_id: "harmonyos-references/capi-oh-print-print-range"
catalog: "harmonyos-references"
content_hash: "b732f19b3370"
synced_at: "2026-08-29T18:17:00.014741"
---

# Print_Range

```
typedef struct {...} Print_Range
```

#### 概述

表示打印范围结构体，用于指定打印任务中的页码范围。可通过 startPage 和 endPage 指定连续页码范围，或通过 pagesArray 和 pagesArrayLen 指定不连续的打印页码数组。

起始版本： 13

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t startPage | 打印起始页，页码从 1 开始计数，取值应为文档中的有效页码且需小于等于 endPage。 |
| uint32_t endPage | 打印结束页，页码从 1 开始计数，取值应为文档中的有效页码且需大于等于 startPage。 |
| uint32_t pagesArrayLen | 打印页码数组长度，须与 pagesArray 数组实际元素数一致，仅在 pagesArray 不为 NULL 时有效。 |
| uint32_t* pagesArray | 打印页码数组，每个元素表示一个需要打印的页码，页码从 1 开始计数，取值应为文档中的有效页码，数组长度由 pagesArrayLen 决定。 |
