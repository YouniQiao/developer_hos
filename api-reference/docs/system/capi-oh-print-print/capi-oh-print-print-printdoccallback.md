---
title: "Print_PrintDocCallback"
upstream_id: "harmonyos-references/capi-oh-print-print-printdoccallback"
catalog: "harmonyos-references"
content_hash: "e7cbfe281b65"
synced_at: "2026-08-29T18:17:00.445539"
---

# Print_PrintDocCallback

```
typedef struct {...} Print_PrintDocCallback
```

#### 概述

表示打印文档回调结构体。用于 C/C++ 原生应用向打印框架提供文件生成和任务状态接收能力。

起始版本： 13

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Print_OnStartLayoutWrite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_onstartlayoutwrite) startLayoutWriteCb | 打印开始布局写入回调。当打印任务开始布局时，系统将调用此回调函数，要求应用写入打印文件内容。 |
| [Print_OnJobStateChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_onjobstatechanged) jobStateChangedCb | 打印任务状态变化回调。当打印任务状态发生变化时，系统将调用此回调函数通知应用打印任务状态变更。 |
