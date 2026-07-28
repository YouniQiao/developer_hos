---
title: "OH_VideoEncInfo"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-videoencinfo"
catalog: "harmonyos-references"
content_hash: "c47282abd51d"
synced_at: "2026-07-28T16:52:00.925536"
---

# OH_VideoEncInfo

```
typedef struct OH_VideoEncInfo {...} OH_VideoEncInfo
```

#### 概述

视频编码参数。

用于配置屏幕录制的视频编码参数，支持设置编码格式、比特率和帧率。videoCodec指定编码格式（如H.264、H.265等），videoBitrate影响视频清晰度和文件大小，videoFrameRate影响视频流畅度。通常在调用屏幕录制接口前设置这些参数。

起始版本： 10

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_VideoCodecFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_videocodecformat) videoCodec | 视频编码格式。不同编码格式影响视频的压缩效率与兼容性，具体各格式效果参见[OH_VideoCodecFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_videocodecformat)枚举说明。 |
| int32_t videoBitrate | 视频编码比特率，单位为比特每秒（bit/s）。取值范围需根据编码格式和实际需求确定，默认取值为10000000，值越大画质越好但文件也越大。 |
| int32_t videoFrameRate | 视频编码帧率，单位为帧每秒（FPS）。常见取值范围为15~60 FPS。 |
