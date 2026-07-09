---
title: "UsbEndpointDescriptor"
upstream_id: "harmonyos-references/capi-usbddk-usbendpointdescriptor"
catalog: "harmonyos-references"
content_hash: "b6724210a9d7"
synced_at: "2026-07-09T00:59:57.068531"
---

# UsbEndpointDescriptor

```
typedef struct UsbEndpointDescriptor {...} __attribute__((packed)) UsbEndpointDescriptor
```

#### 概述

标准端点描述符，对应USB协议中Standard Endpoint Descriptor。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t bLength | 该描述符的大小，单位为字节。 |
| uint8_t bDescriptorType | 描述符类型。 |
| uint8_t bEndpointAddress | 端点地址，包含端点编号以及端点方向。 |
| uint8_t bmAttributes | 端点属性，包括传输类型、同步类型、使用类型。 |
| uint16_t wMaxPacketSize | 该端点所能承载的最大包的大小。 |
| uint8_t bInterval | 数据传输轮询端点的时间间隔。 |
| uint8_t bRefresh | 用于音频类设备，同步反馈的速率。 |
| uint8_t bSynchAddress | 用于音频类设备，同步端点的地址。 |
