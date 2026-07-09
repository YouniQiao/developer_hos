---
title: "Print_PropertyList"
upstream_id: "harmonyos-references/capi-oh-print-print-propertylist"
catalog: "harmonyos-references"
content_hash: "7e85c77ecde6"
synced_at: "2026-07-09T00:59:44.126800"
---

# Print_PropertyList

```
typedef struct {...} Print_PropertyList
```

#### 概述

打印机属性列表。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t count | 属性数量。 |
| [Print_Property](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-property) *list | 属性指针数组。 |
