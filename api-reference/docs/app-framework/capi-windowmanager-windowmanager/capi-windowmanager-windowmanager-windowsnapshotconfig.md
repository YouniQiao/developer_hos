---
title: "WindowManager_WindowSnapshotConfig"
upstream_id: "harmonyos-references/capi-windowmanager-windowmanager-windowsnapshotconfig"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:56.744548"
---

# WindowManager_WindowSnapshotConfig

```
typedef struct {...} WindowManager_WindowSnapshotConfig
```

#### 概述

主窗口截图的配置项。

起始版本： 21

相关模块： [WindowManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager)

所在头文件： [oh_window_comm.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-window-comm-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool useCache | 是否使用主窗口的已有截图。默认值为true。 true表示使用主窗口的已有截图，若主窗口无保存的截图，则使用主窗口的最新截图。false表示使用主窗口的最新截图。 |
