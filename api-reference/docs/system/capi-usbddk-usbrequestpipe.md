---
title: "UsbRequestPipe"
upstream_id: "harmonyos-references/capi-usbddk-usbrequestpipe"
catalog: "harmonyos-references"
content_hash: "65c7a045278a"
synced_at: "2026-07-21T16:26:03.233618"
---

# UsbRequestPipe

```
typedef struct UsbRequestPipe {...} __attribute__((aligned(8))) UsbRequestPipe
```

#### 概述

请求管道。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t interfaceHandle | 接口操作句柄。 |
| uint32_t timeout | 超时时间，单位是毫秒。 |
| uint8_t endpoint | 要通信的端点的地址。 |
