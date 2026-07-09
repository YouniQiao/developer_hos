---
title: "OH_AudioDeviceDescriptorArray"
upstream_id: "harmonyos-references/capi-ohaudio-oh-audiodevicedescriptorarray"
catalog: "harmonyos-references"
content_hash: "c17a795f952d"
synced_at: "2026-07-09T01:00:11.299702"
---

# OH_AudioDeviceDescriptorArray

```
typedef struct OH_AudioDeviceDescriptorArray {...} OH_AudioDeviceDescriptorArray
```

#### 概述

声明音频设备描述符数组。

起始版本： 12

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

所在头文件： [native_audio_device_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-device-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t size | 音频设备描述符数组大小。 |
| [OH_AudioDeviceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiodevicedescriptor)** descriptors | 音频设备描述符数组。 |
