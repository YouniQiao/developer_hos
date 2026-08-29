---
title: "Input_DeviceListener"
upstream_id: "harmonyos-references/capi-input-input-devicelistener"
catalog: "harmonyos-references"
content_hash: "54abf94a6322"
synced_at: "2026-08-29T18:17:05.426646"
---

# Input_DeviceListener

```
typedef struct Input_DeviceListener {
    // ...
} Input_DeviceListener
```

#### 概述

定义一个结构体用于监听设备热插拔，该功能适用于需要实时响应输入设备连接和断开场景的应用程序，如游戏、音乐播放器等。通过监听设备热插拔事件，应用程序可以及时更新输入状态，提升用户体验，避免因设备断开导致的异常情况。

起始版本： 13

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Input_DeviceAddedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#input_deviceaddedcallback) deviceAddedCallback | 定义一个回调函数，用于接收设备热插事件。 |
| [Input_DeviceRemovedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#input_deviceremovedcallback) deviceRemovedCallback | 定义一个回调函数，用于接收设备热拔事件。 |
