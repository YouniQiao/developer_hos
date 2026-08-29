---
title: "native_audio_accessory_common.h"
upstream_id: "harmonyos-references/capi-native-audio-accessory-common-h"
catalog: "harmonyos-references"
content_hash: "ab593e850229"
synced_at: "2026-08-29T18:17:20.075460"
---

# native_audio_accessory_common.h

#### 概述

声明外部音频配件设备接口的公共数据结构。

定义音频配件接口的公共类型。

引用文件： <ohaudio/native_audio_accessory_common.h>

库： libohaudio.so

系统能力： SystemCapability.Multimedia.Audio.Core

起始版本： 26.0.0

相关模块： [OHAudio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AudioAccessoryManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audioaccessorymanager) | OH_AudioAccessoryManager | 声明音频配件管理器。 |
| [OH_AudioAccessory](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audioaccessory) | OH_AudioAccessory | 声明音频配件。 |
| [OH_AudioAccessoryInputStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audioaccessoryinputstream) | OH_AudioAccessoryInputStream | 声明音频配件输入流。 |
| [OH_AudioAccessoryInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audioaccessoryinfo) | OH_AudioAccessoryInfo | 定义音频配件的基本信息。 |
| [OH_AudioAccessoryNoiseReductionCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audioaccessorynoisereductioncapability) | OH_AudioAccessoryNoiseReductionCapability | 定义音频配件的降噪能力。 |
| [OH_AudioAccessoryCapabilities](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audioaccessorycapabilities) | OH_AudioAccessoryCapabilities | 定义音频配件的能力。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AudioAccessoryType](#oh_audioaccessorytype) | OH_AudioAccessoryType | 枚举音频配件连接类型。 |

#### 枚举类型说明

#### [h2]OH_AudioAccessoryType

```
enum OH_AudioAccessoryType
```
 描述

枚举音频配件连接类型。

起始版本： 26.0.0

| 枚举项 | 描述 |
| --- | --- |
| AUDIO_ACCESSORY_TYPE_BT_SPP = 1 | 蓝牙串行端口配置文件（Serial Port Profile，SPP）连接。 |
