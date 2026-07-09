---
title: "UsbDdkInterface"
upstream_id: "harmonyos-references/capi-usbddk-usbddkinterface"
catalog: "harmonyos-references"
content_hash: "1f358cd196eb"
synced_at: "2026-07-09T00:59:57.164523"
---

# UsbDdkInterface

```
typedef struct UsbDdkInterface {...} UsbDdkInterface
```

#### 概述

USB接口，是特定接口下备用设置的集合。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t numAltsetting | 接口的备用设置数量。 |
| [struct UsbDdkInterfaceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkinterfacedescriptor)* altsetting | 接口的备用设置。 |
