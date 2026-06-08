---
format: md
title: "录屏帧率是否有限制，如何设置最大帧率"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-8
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-8
last_sync: 2026-06-07
sync_hash: a94b18d4
upstream_hash: 23a55e2402de
---

可以调用OH\_AVScreenCapture\_SetMaxVideoFrameRate()设置录屏时的最大帧率，实际帧率受限于设备能力，具体规格可参考[设置录屏时的最大帧率](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-h#oh_avscreencapture_setmaxvideoframerate)。录屏的帧率需同时满足编解码的规格，请参考[设置正确的视频帧率](/docs/dev/app-dev/media/avcodec-kit/audio-video-codec/obtain-supported-codecs#设置正确的视频帧率)。
