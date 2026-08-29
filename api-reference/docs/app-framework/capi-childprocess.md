---
title: "ChildProcess"
upstream_id: "harmonyos-references/capi-childprocess"
catalog: "harmonyos-references"
content_hash: "194218a9a2ec"
synced_at: "2026-08-29T18:12:07.611505"
---

# ChildProcess

#### 概述

提供子进程的管理能力，支持创建Native子进程并在父子进程间建立IPC通道，用于实现多进程应用开发。

创建的子进程不支持UI界面，也不支持Context相关的接口调用。通过本模块和[childProcessManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-childprocessmanager)启动的子进程总数最大为512个，其中childProcessManager在SELF_FORK模式下启动的子进程不计入总数。

系统能力： SystemCapability.Ability.AbilityRuntime.Core

起始版本： 12

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [native_child_process.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h) | 支持创建Native子进程，并在父子进程间建立IPC通道。 引用文件： 库：libchild_process.so |
