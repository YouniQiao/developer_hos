---
title: "AVSession_OutputDeviceInfo"
upstream_id: "harmonyos-references/capi-ohavsession-avsession-outputdeviceinfo"
catalog: "harmonyos-references"
content_hash: "d87a2133ea35"
synced_at: "2026-08-29T18:17:28.242940"
---

# AVSession_OutputDeviceInfo

```
typedef struct AVSession_OutputDeviceInfo {...} AVSession_OutputDeviceInfo
```

#### 概述

输出设备信息的定义。

起始版本： 23

相关模块： [OHAVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession)

所在头文件： [native_deviceinfo.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-deviceinfo-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t size | 设备信息数组的大小，表示deviceInfos数组的元素数量。 |
| [AVSession_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-avsession-deviceinfo) **deviceInfos | 指向设备信息数组的指针，数组长度由size字段指定。 |
