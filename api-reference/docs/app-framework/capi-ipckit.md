---
title: "IPCKit"
upstream_id: "harmonyos-references/capi-ipckit"
catalog: "harmonyos-references"
content_hash: "ab0c2f7bb526"
synced_at: "2026-08-29T18:16:14.861628"
---

# IPCKit

#### 概述

IPC头文件包含入口，方便开发者引用。IPC（Inter-Process Communication，进程间通信）Kit提供了进程间通信的能力，支持跨进程数据传输、方法调用等功能，帮助开发者快速构建稳定可靠的进程间通信能力。开发者可以通过引用ipc_kit.h头文件，使用IPC Kit提供的API进行进程间通信开发。典型使用场景包括：多进程协作、服务间通信、跨进程数据共享等。

系统能力： SystemCapability.Communication.IPC.Core

起始版本： 12

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [ipc_kit.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ipc-kit-h) | IPC Kit主头文件，包含IPC能力的核心接口定义，引用此文件可使用IPC Kit全部功能。 |
