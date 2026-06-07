---
format: md
title: "如何获取系统支持的编解码能力"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-avcodec-kit/faqs-avcodec-4
---


提供两种方法来获取音视频编解码能力实例：

方式一：通过OH\_AVCodec\_GetCapability获取系统推荐的音视频编解码器能力实例。该接口的推荐策略与OH\_XXX\_CreateByMime系列接口一致。

```
// Obtain an example of the recommended audio AAC decoder capability from the system
OH_AVCapability *capability = OH_AVCodec_GetCapability(OH_AVCODEC_MIMETYPE_AUDIO_AAC, false);
```

方式二：通过OH\_AVCodec\_GetCapabilityByCategory获取指定软件或硬件的编解码能力实例

```
// Obtain an instance of video AVC encoder capability for the specified hardware
OH_AVCapability *capability = OH_AVCodec_GetCapabilityByCategory(OH_AVCODEC_MIMETYPE_VIDEO_AVC, true, HARDWARE);
```

获取能力实例成功后，可继续执行。系统会自动回收OH\_AVCapability实例，开发者无需关注。

**参考链接**

[获取支持的编解码能力](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/obtain-supported-codecs)
