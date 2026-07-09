---
title: "OH_VideoEncInfo"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-videoencinfo"
catalog: "harmonyos-references"
content_hash: "37bc205c313c"
synced_at: "2026-07-09T01:00:43.501219"
---

# OH_VideoEncInfo

```
typedef struct OH_VideoEncInfo {...} OH_VideoEncInfo
```

#### 概述

视频编码参数。

起始版本： 10

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_VideoCodecFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h#oh_videocodecformat) videoCodec | 视频采集编码格式。 |
| int32_t videoBitrate | 视频采集比特率。单位为比特每秒（bit/s）。 |
| int32_t videoFrameRate | 视频采集帧率。单位为帧率（FPS）。 |
