---
title: "OH_RecorderInfo"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-recorderinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:40.276789"
---

# OH_RecorderInfo

```
typedef struct OH_RecorderInfo {...} OH_RecorderInfo
```

#### 概述

录制文件信息。

起始版本： 10

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* url | 录制文件的URL。 |
| uint32_t urlLen | 录制文件的URL的长度值。 |
| [OH_ContainerFormatType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_containerformattype) fileFormat | 录制文件的格式。 |
