---
title: "OH_AVRecorder_Config"
upstream_id: "harmonyos-references/capi-avrecorder-oh-avrecorder-config"
catalog: "harmonyos-references"
content_hash: "95f00a9ee7a8"
synced_at: "2026-08-03T17:12:02.904925"
---

# OH_AVRecorder_Config

```
typedef struct OH_AVRecorder_Config {...} OH_AVRecorder_Config
```

#### 概述

提供媒体AVRecorder的配置定义，用于设置音视频录制时的音频源类型、视频源类型、编码配置、输出文件路径、文件生成模式、元数据及最大录制时长等参数，适用于需要自定义录制配置的场景。

起始版本： 18

相关模块： [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

所在头文件： [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AVRecorder_AudioSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_audiosourcetype) audioSourceType | 录制音频源类型，用于指定录制时采集音频的输入源。 |
| [OH_AVRecorder_VideoSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_videosourcetype) videoSourceType | 录制视频源类型，用于指定录制时采集视频的输入源。 |
| [OH_AVRecorder_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-profile) profile | 包含音视频录制的详细参数，如编码格式、比特率、分辨率等，建议根据业务场景选择合适的编码配置以提升编码效率。 |
| char* url | 指定录制输出文件的URL，格式为fd://xx，其中xx为文件描述符（fd）的数值。传入不符合该格式的URL时，录制准备失败。使用时应确保文件描述符（fd）在录制期间保持有效，避免因fd失效导致录制异常。 |
| [OH_AVRecorder_FileGenerationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h#oh_avrecorder_filegenerationmode) fileGenerationMode | 指定录制输出文件的生成模式，如系统创建模式适用于无需指定文件名的录制场景，应用创建模式适用于需要自定义文件存储路径的录制场景。默认值为应用创建模式。 |
| [OH_AVRecorder_Metadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-metadata) metadata | 包含录制媒体的附加元数据。用于为录制文件添加描述性属性，如标题、作者、创作时间等。 |
| int32_t maxDuration | 指定最大录制时长，单位为秒（s）。值小于等于0时表示无时长限制，默认值为0。达到最大录制时长后自动停止录制。 |
