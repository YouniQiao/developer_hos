---
title: "UsbSerial_Params"
upstream_id: "harmonyos-references/capi-serialddk-usbserial-params"
catalog: "harmonyos-references"
content_hash: "8fe697191d23"
synced_at: "2026-07-09T00:59:57.512902"
---

# UsbSerial_Params

```
typedef struct UsbSerial_Params {...} __attribute__((aligned(8))) UsbSerial_Params
```

#### 概述

定义USB Serial DDK使用的USB串口参数。

起始版本： 18

相关模块： [USBSerialDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-serialddk)

所在头文件： [usb_serial_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-serial-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t baudRate | 波特率，单位为波特。 |
| uint8_t nDataBits | 数据位比特数。 |
| uint8_t nStopBits | 停止位比特数。 |
| uint8_t parity | 校验参数设置（0：无校验；1：奇校验；2：偶校验；）。 |
