---
title: "热点加速错误码"
upstream_id: "harmonyos-references/errorcode-hotspot-accelerate"
catalog: "harmonyos-references"
content_hash: "f62a2db662da"
synced_at: "2026-07-28T16:51:11.817792"
---

# 热点加速错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 501 资源被其他线程占用

错误信息

Resource occupied by another thread.

错误描述

当前资源正在被其他线程使用，无法完成操作。

可能原因

1. 同一个热点加速上下文被多个线程同时操作。
2. 前一个异步操作尚未完成就进行了新的调用。

处理步骤

1. 确保同一上下文只在一个线程中使用。
2. 等待前一个操作完成后再进行新的操作。

#### 801 设备不支持此 API

错误信息

Device does not support this API.

错误描述

当前设备不支持该API。

可能原因

1. 设备硬件不支持热点加速功能。
2. 设备系统版本过低，不支持该API。

处理步骤

1. 检查设备是否支持热点加速功能。
2. 确保设备系统版本符合API要求。

#### 1026800001 API 未正确初始化

错误信息

API not initialized properly.

错误描述

在使用热点加速API之前，需要先调用初始化接口。

可能原因

1. 未调用初始化接口就使用了其他API。
2. 初始化接口调用失败。

处理步骤

1. 确保在使用其他热点加速API之前先调用初始化接口。
2. 检查初始化接口的返回值，确保初始化成功。

#### 1026800002 无效的上下文索引

错误信息

Invalid context index.

错误描述

传入的上下文索引无效。

可能原因

1. 传入的上下文索引超出了有效范围。
2. 上下文已经被销毁或失效。

处理步骤

1. 检查传入的上下文索引是否在有效范围内。
2. 确保上下文仍然有效且未被销毁。
