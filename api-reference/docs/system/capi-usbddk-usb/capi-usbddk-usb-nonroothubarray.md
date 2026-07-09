---
title: "Usb_NonRootHubArray"
upstream_id: "harmonyos-references/capi-usbddk-usb-nonroothubarray"
catalog: "harmonyos-references"
content_hash: "575e7f3cf46c"
synced_at: "2026-07-09T00:59:57.486755"
---

# Usb_NonRootHubArray

```
typedef struct Usb_NonRootHubArray {...} Usb_NonRootHubArray
```

#### 概述

非根集线器列表，用于存放[OH_Usb_GetNonRootHubs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_getnonroothubs)接口获取到的非根集线器设备ID列表和数量。

起始版本： 26.0.0

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t* nonRootHubIds | 开发者申请好的非根集线器设备ID数组首地址，申请的数组大小建议一般不超过128，以避免过度占用内存。非根USB集线器设备ID由总线号左移32位加上设备地址构造而成。 |
| uint32_t num | 实际返回的非根集线器数量，根据数量遍历nonRootHubIds获得非根集线器设备ID。当该值为0时，表示不存在非根集线器设备。 |
