---
title: "OH_AudioAccessoryInfo"
upstream_id: "harmonyos-references/capi-ohaudio-oh-audioaccessoryinfo"
catalog: "harmonyos-references"
content_hash: "c36b078feb5e"
synced_at: "2026-08-29T18:17:21.895313"
---

# OH_AudioAccessoryInfo

```
typedef struct OH_AudioAccessoryInfo {...} OH_AudioAccessoryInfo
```

#### 概述

定义音频配件的基本信息。

调用方在将此结构体传递给系统之前，需将structSize设置为sizeof(OH_AudioAccessoryInfo)。

起始版本： 26.0.0

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

所在头文件： [native_audio_accessory_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-accessory-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t structSize | 结构体大小，单位为字节（Byte）。 调用方需初始化此字段。 系统通过此字段校验结构体大小。 |
| const char *accessoryName | 配件名称（外部音频设备名称），用于UX展示。 系统会对此字段进行深拷贝。 |
| const char *manufacturer | 制造商名称。 系统会对此字段进行深拷贝。 |
| const char *modelNumber | 型号编号。 系统会对此字段进行深拷贝。 |
| const char *macAddress | 配件MAC地址。 系统会对此字段进行深拷贝。 |
| [OH_AudioAccessoryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-accessory-common-h#oh_audioaccessorytype) type | 配件连接类型。 |
| bool isUnidirectional | 标识配件是否为单向音频设备。true表示单向设备，false表示双向设备。 |
