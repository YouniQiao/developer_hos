---
title: "Scan_ScannerOptions"
upstream_id: "harmonyos-references/capi-oh-scan-scan-scanneroptions"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:12.901842"
---

# Scan_ScannerOptions

```
typedef struct {...} Scan_ScannerOptions
```

#### 概述

表示一个扫描仪的所有参数选项

起始版本： 12

相关模块： [OH_Scan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-scan)

所在头文件： [ohscan.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohscan-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char** titles | 选项标题 |
| char** descriptions | 选项描述 |
| char** ranges | 选项可设置的范围 |
| int32_t optionCount | 可设置的参数选项数量 |
