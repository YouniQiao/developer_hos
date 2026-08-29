---
title: "Print_Resolution"
upstream_id: "harmonyos-references/capi-oh-print-print-resolution"
catalog: "harmonyos-references"
content_hash: "1ee415137f90"
synced_at: "2026-08-29T18:17:00.321116"
---

# Print_Resolution

```
typedef struct {...} Print_Resolution
```

#### 概述

Print_Resolution用于表示以 dpi 为单位的打印分辨率，可控制打印输出的精细度与质量。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t horizontalDpi | 水平方向的打印分辨率，单位为 dpi。 |
| uint32_t verticalDpi | 垂直方向的打印分辨率，单位为 dpi。 |
