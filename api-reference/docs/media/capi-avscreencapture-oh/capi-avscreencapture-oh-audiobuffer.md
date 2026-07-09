---
title: "OH_AudioBuffer"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-audiobuffer"
catalog: "harmonyos-references"
content_hash: "151d55930b74"
synced_at: "2026-07-09T01:00:43.971012"
---

# OH_AudioBuffer

```
typedef struct OH_AudioBuffer {...} OH_AudioBuffer
```

#### 概述

定义了音频数据的大小、类型、时间戳等配置信息。

起始版本： 10

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t* buf | 音频buffer内存。 |
| int32_t size | 音频buffer内存大小。 |
| int64_t timestamp | 音频buffer时间戳。单位为纳秒（ns）。 |
| [OH_AudioCaptureSourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_audiocapturesourcetype) type | 音频录制源类型。 |
