---
title: "native_avbuffer_info.h"
upstream_id: "harmonyos-references/capi-native-avbuffer-info-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:02.475308"
---

# native_avbuffer_info.h

#### 概述

声明了媒体数据结构AVBuffer属性的定义。

引用文件： <multimedia/player_framework/native_avbuffer_info.h>

库： libnative_media_core.so

系统能力： SystemCapability.Multimedia.Media.Core

起始版本： 9

相关模块： [Core](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core)

相关示例： [AVCodec](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/BasicFeature/Media/AVCodec)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AVCodecBufferAttr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-avcodecbufferattr) | OH_AVCodecBufferAttr | 定义OH_AVCodec的缓冲区描述信息。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AVCodecBufferFlags](#oh_avcodecbufferflags) | OH_AVCodecBufferFlags | 枚举OH_AVCodec缓冲区标记的类别。 |

#### 枚举类型说明

#### [h2]OH_AVCodecBufferFlags

```
enum OH_AVCodecBufferFlags
```
 描述

枚举OH_AVCodec缓冲区标记的类别。

系统能力： SystemCapability.Multimedia.Media.Core

起始版本： 9

| 枚举项 | 描述 |
| --- | --- |
| AVCODEC_BUFFER_FLAGS_NONE = 0 | 表示为普通帧。 |
| AVCODEC_BUFFER_FLAGS_EOS = 1
