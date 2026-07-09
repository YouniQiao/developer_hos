---
title: "OH_AudioInfo"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-audioinfo"
catalog: "harmonyos-references"
content_hash: "c2502b5eb139"
synced_at: "2026-07-09T01:00:43.513371"
---

# OH_AudioInfo

```
typedef struct OH_AudioInfo {...} OH_AudioInfo
```

#### 概述

音频信息。

同时采集音频麦克风和音频内录数据时，两路音频的audioSampleRate和audioChannels采样参数需要相同。

起始版本： 10

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AudioCaptureInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-audiocaptureinfo) micCapInfo | 音频麦克风采样信息。 |
| [OH_AudioCaptureInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-audiocaptureinfo) innerCapInfo | 音频内录采样信息。 |
| [OH_AudioEncInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture-oh-audioencinfo) audioEncInfo | 音频编码信息，原始码流时不需要设置。 |
