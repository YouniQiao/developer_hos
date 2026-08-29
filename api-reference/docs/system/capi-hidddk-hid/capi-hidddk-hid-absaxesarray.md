---
title: "Hid_AbsAxesArray"
upstream_id: "harmonyos-references/capi-hidddk-hid-absaxesarray"
catalog: "harmonyos-references"
content_hash: "dee98c68016e"
synced_at: "2026-08-29T18:17:10.476869"
---

# Hid_AbsAxesArray

```
typedef struct Hid_AbsAxesArray {...} Hid_AbsAxesArray
```

#### 概述

绝对坐标属性数组，用于存储HID设备的多个绝对坐标轴的属性信息，支持描述如触摸屏、游戏摇杆等输入设备的坐标特征，适用于需要精确读取和处理多维输入数据的驱动开发场景，例如在手柄、触摸板等输入设备中记录轴位数据。

起始版本： 11

相关模块： [HidDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk)

所在头文件： [hid_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Hid_AbsAxes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h#hid_absaxes)* hidAbsAxes | 指向绝对坐标属性编码数组首元素的指针。需与length配合使用，指针需有效且不为 NULL。 |
| uint16_t length | 数组的有效长度，表示hidAbsAxes指针指向的有效元素个数。取值范围：[0, 65535]。 |
