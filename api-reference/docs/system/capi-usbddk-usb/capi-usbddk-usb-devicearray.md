---
title: "Usb_DeviceArray"
upstream_id: "harmonyos-references/capi-usbddk-usb-devicearray"
catalog: "harmonyos-references"
content_hash: "00b88ae126ce"
synced_at: "2026-07-09T00:59:57.440071"
---

# Usb_DeviceArray

```
typedef struct Usb_DeviceArray {...} Usb_DeviceArray
```

#### 概述

设备ID清单，用于存放[OH_Usb_GetDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_getdevices)接口获取到的设备ID列表和设备数量。

起始版本： 18

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t* deviceIds | 开发者申请好的设备ID数组首地址，申请的数组大小建议一般不超过128，以避免过度占用内存。 |
| uint32_t num | 实际返回的设备数量，根据数量遍历deviceIds获得设备ID。当该值为0时，表示不存在USB设备。 |
