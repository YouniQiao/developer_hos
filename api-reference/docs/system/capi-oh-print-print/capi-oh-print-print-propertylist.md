---
title: "Print_PropertyList"
upstream_id: "harmonyos-references/capi-oh-print-print-propertylist"
catalog: "harmonyos-references"
content_hash: "7d2ba7f1ce6c"
synced_at: "2026-08-29T18:17:00.316441"
---

# Print_PropertyList

```
typedef struct {...} Print_PropertyList
```

#### 概述

打印机属性列表，用于存储和管理打印机属性，支持通过属性数量和属性数组的指针对打印机属性进行批量访问和操作。其中count表示属性数量，list为指向属性数组的指针，两者配合表示一组完整的打印机属性，适用于需要查询或设置打印机多项属性信息的场景。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t count | 属性数量。与list指向的属性数组实际元素数一致。 |
| [Print_Property](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-property) *list | 指向属性数组的指针，用于存储打印机属性信息。须与count配合使用，数组长度由count指定。 |
