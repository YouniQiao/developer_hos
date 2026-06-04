---
displayed_sidebar: appDevSidebar
title: "低时延音频播放(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-fast-playback
---

从API version 10开始支持低时延音频播放。

低时延音频播放是一种通过软硬芯协同设计实现的音频渲染方案。其核心机制是通过减少buffer大小、优化读写数据架构，使该模式下音频播放具有更低的时延。

## 使用前提

* 支持低时延模式的音频输出设备。
* 可通过[OH\_AudioRenderer\_GetFastStatus()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_getfaststatus)验证当前设备是否支持低时延模式。

## 开发指导

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleC)。

### 简介

为使用低时延模式，开发者需要参考[推荐使用OHAudio开发音频播放功能(C/C++)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-playback)进行音频开发。

当前OHAudio支持两种模式：普通模式（AUDIOSTREAM\_LATENCY\_MODE\_NORMAL）和低时延模式（AUDIOSTREAM\_LATENCY\_MODE\_FAST）。

### 设置低时延模式

开发者通过调用[OH\_AudioStreamBuilder\_SetLatencyMode()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setlatencymode)，设置[OH\_AudioStream\_LatencyMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiostream_latencymode)来决定音频流使用的模式。

设置低时延模式开发示例：

```
OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_FAST;
OH_AudioStreamBuilder_SetLatencyMode(builder, latencyMode);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleC/entry/src/main/cpp/renderer.cpp#L184-L187" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：renderer.cpp</a></div>


针对OHAudio开发音频播放，有以下相关实例可供参考：

* [OHAudio录制和播放](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/Audio/OHAudio)。

## 注意事项

### 低时延模式限制

在以下场景中，即使设置了低时延模式，系统仍会使用普通模式。

* 当前设备不支持低时延模式。
* 当前流格式不支持低时延模式。
* 系统低时延资源已被全部占用。
* 当前系统中存在更高优先级流（如：蜂窝通话）。

从API version 20开始，支持低时延相关查询接口。

* 开发者通过调用[OH\_AudioRenderer\_GetFastStatus()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_getfaststatus)来获取音频播放流是否正在低时延状态下工作。
* 在部分特殊场景（如：存在更高优先级流、当前连接设备不支持等）下，开发者可以通过调用[OH\_AudioRenderer\_OnFastStatusChange()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiorenderer-h#oh_audiorenderer_onfaststatuschange)来获取低时延状态改变事件。

![](./img/153b862f.png)

低时延模式下，不支持调整播放速度。

### 使用低时延流的场景

* 游戏、k歌、直播等对时延要求较高的场景，建议使用低时延模式。
* 视频播放、音乐播放等没有实时要求的场景，不建议使用低时延模式。

### 确保数据及时提供

低时延模式下，应用提供数据的频次比普通播放模式高，如果传送数据不及时可能导致杂音等问题。开发者应避免在数据回调线程中做耗时操作，确保数据回调线程可以及时返回。

### 数据回调线程

播放的音频数据需要通过回调接口写入。开发者要实现回调接口，使用[OH\_AudioStreamBuilder\_SetRendererWriteDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostreambuilder-h#oh_audiostreambuilder_setrendererwritedatacallback)设置写入音频数据的回调函数，在设置音频回调函数时，回调函数[OH\_AudioRenderer\_OnWriteDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audiostream-base-h#oh_audiorenderer_onwritedatacallback)（从API version 12开始支持）用于写入音频数据。

开发音频播放功能的示例代码请参考：[推荐使用OHAudio开发音频播放功能(C/C++)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohaudio-for-playback)。

设置数据回调函数示例：

```
// 自定义写入数据函数。
static OH_AudioData_Callback_Result MyOnWriteData_New(
    OH_AudioRenderer* renderer,
    void* userData,
    void* audioData,
    int32_t audioDataSize)
{
    // 将待播放的数据，按audioDataSize长度写入audioData。
    // 如果开发者不希望播放某段audioData，返回AUDIO_DATA_CALLBACK_RESULT_INVALID即可。
    int32_t readCount = fread(audioData, audioDataSize, 1, g_fp);
    if (readCount < 0) {
        return AUDIO_DATA_CALLBACK_RESULT_INVALID;
    }
    if (feof(g_fp)) {
        fseek(g_fp, 0, SEEK_SET);
    }
    return AUDIO_DATA_CALLBACK_RESULT_VALID;
}
// ...
    // 配置写入音频数据回调函数。
    OH_AudioRenderer_OnWriteDataCallback writeDataCb = MyOnWriteData_New;
    OH_AudioStreamBuilder_SetRendererWriteDataCallback(builder, writeDataCb, nullptr);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleC/entry/src/main/cpp/renderer.cpp#L56-L180" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：renderer.cpp</a></div>


* 为避免音频卡顿，禁止在回调方法OH\_AudioRenderer\_OnWriteData中执行耗时操作。
* 为保证OH\_AudioRenderer\_OnWriteData与流状态控制逻辑独立正常运行，禁止在OH\_AudioRenderer\_OnWriteData回调方法中调用音频流控制接口。

  | 音频流控制接口 | 说明 |
  | --- | --- |
  | OH\_AudioStream\_Result OH\_AudioRenderer\_Start(OH\_AudioRenderer\* renderer) | 开始播放。 |
  | OH\_AudioStream\_Result OH\_AudioRenderer\_Pause(OH\_AudioRenderer\* renderer) | 暂停播放。 |
  | OH\_AudioStream\_Result OH\_AudioRenderer\_Stop(OH\_AudioRenderer\* renderer) | 停止播放。 |
  | OH\_AudioStream\_Result OH\_AudioRenderer\_Flush(OH\_AudioRenderer\* renderer) | 释放缓存数据。 |
  | OH\_AudioStream\_Result OH\_AudioRenderer\_Release(OH\_AudioRenderer\* renderer) | 释放播放实例。 |

  ![](./img/09f981c5.png)

  音频流控制接口执行会有耗时（例如OH\_AudioRenderer\_Stop接口需要播完缓存，单次执行普遍超过50ms），应避免在主线程中直接调用，以免造成界面显示卡顿。
