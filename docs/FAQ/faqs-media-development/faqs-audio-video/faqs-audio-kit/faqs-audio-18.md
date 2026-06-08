---
format: md
title: "如何在录制采集音频时获取麦克风的音量大小"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-18
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-18
last_sync: 2026-06-07
sync_hash: 098fa5ff
---
**问题现象**

使用AVRecorder或者AudioCapturer录制音频时，如何实时获取麦克风的音量大小。

**问题根因**

AVRecorder或者AudioCapturer暂不支持监听麦克风音量大小，同时不提供相应API接口。

**解决****措施**

（1）AVRecorder可以通过[getAudioCapturerMaxAmplitude()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder#getaudiocapturermaxamplitude11)接口获取当前音频最大振幅，用以实现振幅UI效果。具体实现可参考[示例代码](https://gitcode.com/HarmonyOS-Cases/cases/tree/master/CommonAppDevelopment/feature/voicerecordynamiceffect)。

（2）还可以使用AudioVolumeGroupManager中的[getMaxAmplitudeForInputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getmaxamplitudeforinputdevice12)接口获取输入设备音频流的最大电平值，取值范围为[0, 1]。电平值越大，表示麦克风的音量越大。
