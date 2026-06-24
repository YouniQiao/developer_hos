---
title: "Print_PageSize"
upstream_id: "harmonyos-references/capi-oh-print-print-pagesize"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:12.125596"
---

# Print_PageSize

```
typedef struct {...} Print_PageSize
```

#### 概述

表示纸张尺寸信息。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *id | 纸张 ID。 |
| char *name | 纸张名称。 |
| uint32_t width | 纸张宽度，单位：毫米。 |
| uint32_t height | 纸张高度，单位：毫米。 |
