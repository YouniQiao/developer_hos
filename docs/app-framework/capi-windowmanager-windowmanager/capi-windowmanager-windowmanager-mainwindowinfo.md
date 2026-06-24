---
title: "WindowManager_MainWindowInfo"
upstream_id: "harmonyos-references/capi-windowmanager-windowmanager-mainwindowinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:56.586987"
---

# WindowManager_MainWindowInfo

```
typedef struct {...} WindowManager_MainWindowInfo
```

#### 概述

主窗口信息。

起始版本： 21

相关模块： [WindowManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager)

所在头文件： [oh_window_comm.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-window-comm-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t displayId | 主窗口所在的屏幕ID。 |
| int32_t windowId | 主窗口ID。 |
| bool showing | 主窗口的前后台状态。true表示主窗口在前台，false表示主窗口不在前台。 |
| const char* label | 主窗口任务名称。 |
