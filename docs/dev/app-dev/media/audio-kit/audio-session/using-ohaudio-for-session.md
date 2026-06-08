---
displayed_sidebar: appDevSidebar
title: "使用OHAudio开发音频会话功能(C/C++)"
original_url: /docs/dev/app-dev/media/audio-kit/audio-session/using-ohaudio-for-session
format: md
upstream_id: dev/app-dev/media/audio-kit/audio-session/using-ohaudio-for-session
last_sync: 2026-06-07
sync_hash: ece66004
---
对于涉及多个音频流并发播放的场景，系统已预设了默认的[音频焦点策略](/docs/dev/app-dev/media/audio-kit/audio-session/audio-playback-concurrency#音频焦点策略)，该策略将对所有音频流（包括播放和录制）实施统一的焦点管理。

应用可利用音频会话管理（AudioSessionManager）提供的接口，通过AudioSession主动管理应用内音频流的焦点，自定义本应用音频流的焦点策略，调整本应用音频流释放音频焦点的时机，从而贴合应用特定的使用需求。

本文主要介绍AudioSession相关C API的使用方法和注意事项，更多音频焦点及音频会话的信息，可参考：[音频焦点介绍](/docs/dev/app-dev/media/audio-kit/audio-session/audio-playback-concurrency)和[音频会话管理](/docs/dev/app-dev/media/audio-kit/audio-session/audio-session-management)。

## 使用入门

应用要使用OHAudio提供的音频会话管理（AudioSessionManager）能力，需要添加对应的头文件。

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioSessionSampleC)。

### 在 CMake 脚本中链接动态库

```
target_link_libraries(sample PUBLIC libohaudio.so)
```

### 添加头文件

应用通过引入[native\_audio\_session\_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h)头文件，使用音频播放相关API。

```
#include "ohaudio/native_audio_session_manager.h"
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L25-L28" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 获取音频会话管理器

创建[OH\_AudioSessionManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiosessionmanager)实例。在使用音频会话管理功能前，需要先通过[OH\_AudioManager\_GetAudioSessionManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiomanager_getaudiosessionmanager)创建音频会话管理实例。

```
OH_AudioSessionManager *audioSessionManager;
// ...
    OH_AudioCommon_Result resultManager = OH_AudioManager_GetAudioSessionManager(&audioSessionManager);
    OH_AudioCommon_Result result = OH_AudioSessionManager_RegisterStateChangeCallback(audioSessionManager,
                                                                                      AudioSessionStateChangedCallback);
    if (resultManager == 0) {
        OH_LOG_Print(LOG_APP, LOG_INFO, g_audioSessionVariable->globalResmgr, SESSION_TAG,
                     " OH_AudioManager_GetAudioSessionManager success! ");
    }
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L56-L115" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 激活音频会话

应用可以通过[OH\_AudioSessionManager\_ActivateAudioSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_activateaudiosession)接口激活当前应用的音频会话。

应用在[激活音频会话](#激活音频会话)时，需指定[音频会话策略（OH\_AudioSession\_Strategy）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiosession-strategy)，其中包含[音频并发模式（OH\_AudioSession\_ConcurrencyMode）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-base-h#oh_audiosession_concurrencymode)参数，用于声明不同的音频并发策略。

```
// CONCURRENCY_MIX_WITH_OTHERS 是示例，实际使用时请根据情况修改。
OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};

// 设置音频并发模式并激活音频会话。
OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L125-L137" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 查询音频会话是否已激活

应用可以通过[OH\_AudioSessionManager\_IsAudioSessionActivated](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_isaudiosessionactivated)接口检查当前应用的音频会话是否已激活。

```
bool isActivated = OH_AudioSessionManager_IsAudioSessionActivated(audioSessionManager);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L139-L141" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 停用音频会话

应用可以通过[OH\_AudioSessionManager\_DeactivateAudioSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_deactivateaudiosession)接口停用当前应用的音频会话。

```
OH_AudioCommon_Result result;
// ...
result = OH_AudioSessionManager_DeactivateAudioSession(audioSessionManager);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L161-L177" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 监听音频会话停用事件

在使用AudioSession功能的过程中，推荐应用监听[音频会话停用事件（OH\_AudioSession\_DeactivatedEvent）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiosession-deactivatedevent)。

当AudioSession被停用（非主动停用）时，应用会收到[音频会话停用事件（OH\_AudioSession\_DeactivatedEvent）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiosession-deactivatedevent)，其中包含[音频会话停用原因（OH\_AudioSession\_DeactivatedReason）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosession_deactivatedreason)。

在收到AudioSessionDeactivatedEvent时，应用可根据自身业务需求，做相应的处理，例如释放相应资源、重新激活AudioSession等。

### 定义回调函数

```
int32_t MyAudioSessionDeactivatedCallback(OH_AudioSession_DeactivatedEvent event)
{
    switch (event.reason) {
        case DEACTIVATED_LOWER_PRIORITY:
          // 应用焦点被抢占。
            return 0;
        case DEACTIVATED_TIMEOUT:
          // 超时。
            return 0;
    }
}

OH_AudioSessionManager *audioSessionManager;
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L42-L61" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


### 注册音频会话停用事件回调

应用可以通过[OH\_AudioSessionManager\_RegisterSessionDeactivatedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_registersessiondeactivatedcallback)接口监听音频会话停用事件。

```
OH_AudioCommon_Result resultRegister = OH_AudioSessionManager_RegisterSessionDeactivatedCallback(
    audioSessionManager, MyAudioSessionDeactivatedCallback);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L147-L150" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


### 取消注册音频会话停用事件回调

应用可以通过[OH\_AudioSessionManager\_UnregisterSessionDeactivatedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_unregistersessiondeactivatedcallback)接口取消监听音频会话停用事件。

```
OH_AudioCommon_Result resultUnregister = OH_AudioSessionManager_UnregisterSessionDeactivatedCallback(
    audioSessionManager, MyAudioSessionDeactivatedCallback);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L182-L185" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


**音频会话从创建到激活并监听的完整示例：**

参考以下示例，完成音频会话从创建到激活并监听的过程。

```
#include <cstdint>
#include "ohaudio/native_audio_session_manager.h"
// ...
int32_t MyAudioSessionDeactivatedCallback(OH_AudioSession_DeactivatedEvent event)
{
    switch (event.reason) {
        case DEACTIVATED_LOWER_PRIORITY:
          // 应用焦点被抢占。
            return 0;
        case DEACTIVATED_TIMEOUT:
          // 超时。
            return 0;
    }
}

OH_AudioSessionManager *audioSessionManager;
// ...
    OH_AudioCommon_Result resultManager = OH_AudioManager_GetAudioSessionManager(&audioSessionManager);
    // ...
    OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};

    // 设置音频并发模式并激活音频会话。
    OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);
    // 查询音频会话是否已激活。
    bool isActivated = OH_AudioSessionManager_IsAudioSessionActivated(audioSessionManager);
    if (isActivated) {
        OH_LOG_Print(LOG_APP, LOG_INFO, g_audioSessionVariable->globalResmgr, SESSION_TAG,
                     " AudioSessionManager is activated! ");
    }
    // 监听音频会话停用事件。
    OH_AudioCommon_Result resultRegister = OH_AudioSessionManager_RegisterSessionDeactivatedCallback(
        audioSessionManager, MyAudioSessionDeactivatedCallback);
    // ...
    // 取消监听音频会话停用事件。
    result = OH_AudioSessionManager_UnregisterStateChangeCallback(audioSessionManager,
                                                                  AudioSessionStateChangedCallback);
    // ...
    // 停用音频会话。
    result = OH_AudioSessionManager_DeactivateAudioSession(audioSessionManager);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L23-L178" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 通过设置AudioSession场景参数申请焦点

应用通过AudioSession申请焦点。首先要调用接口[OH\_AudioSessionManager\_SetScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_setscene)设置场景参数，然后调用[OH\_AudioSessionManager\_ActivateAudioSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_activateaudiosession)接口激活AudioSession。

```
// AUDIO_SESSION_SCENE_MEDIA 仅为示例，实际使用时请根据具体情况进行修改。
OH_AudioSessionManager_SetScene(audioSessionManager, AUDIO_SESSION_SCENE_MEDIA);
// ...
// CONCURRENCY_MIX_WITH_OTHERS 是示例，实际使用时请根据情况修改。
OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};

// 设置音频并发模式并激活音频会话。
OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L116-L135" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 启用混音播放下静音建议通知

从API version 23开始，当本应用在并发模式为CONCURRENCY\_MIX\_WITH\_OTHERS下进行播放时，如果有其他应用的音频同时播放，此时两者会混合播放。部分场景下（如游戏或广播），应用可以通过启用静音建议通知，以给用户提供更好的体验。

启用静音建议通知后，本应用播放音频的同时，其他应用播放了不可与本应用并发播放的音频，本应用会收到静音建议通知，此时本应用可以选择不做处理，让本应用和其他应用进行并发播放；也可以选择将自身静音播放，让其他应用单独播放音频。

启用混音播放下静音建议通知，需要先调用接口[OH\_AudioSessionManager\_SetScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_setscene)设置场景参数并订阅音频会话状态更改事件[OH\_AudioSession\_StateChangeHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosession_statechangehint)，启用后再调用[OH\_AudioSessionManager\_ActivateAudioSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-manager-h#oh_audiosessionmanager_activateaudiosession)接口激活AudioSession。启用静音建议通知的前提是[OH\_AudioSession\_ConcurrencyMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-session-base-h#oh_audiosession_concurrencymode)模式必须为CONCURRENCY\_MIX\_WITH\_OTHERS。

```
// AUDIO_SESSION_SCENE_MEDIA 仅为示例，实际使用时请根据具体情况进行修改。
OH_AudioSessionManager_SetScene(audioSessionManager, AUDIO_SESSION_SCENE_MEDIA);
// 启用混音播放下静音建议。
OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers(audioSessionManager, true);
// ...
OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};

// 设置音频并发模式并激活音频会话。
OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L117-L136" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>


## 监听AudioSession焦点状态变化事件

通过[AudioSession焦点状态事件（OH\_AudioSession\_StateChangedEvent）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudio-oh-audiosession-statechangedevent)监听音频会话焦点状态的变化。

**AudioSession申请焦点以及监听焦点变化事件的完整示例：**

```
OH_AudioSessionManager *audioSessionManager;

void AudioSessionStateChangedCallback(OH_AudioSession_StateChangedEvent event)
{
    switch (event.stateChangeHint) {
        case AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE:
          // 此分支表示系统已将音频流暂停（临时失去焦点），为保持状态一致，应用需切换至音频暂停状态。
          // 临时失去焦点：其他音频流释放音频焦点后，本音频流会收到resume事件，可继续播放。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_RESUME:
          // 此分支表示系统解除对AudioSession焦点的暂停操作。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_STOP:
          // 此分支表示系统已将音频流停止（永久失去焦点），为保持状态一致，应用需切换至音频暂停状态。
          // 永久失去焦点：后续不会再收到任何音频焦点事件，若想恢复播放，需要用户主动触发。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP:
          // 此分支表示由于长时间没有音频流播放，为防止系统资源被长时间无效占用，系统已将AudioSession停止（永久失去焦点），
          // 为保持状态一致，应用需切换至音频暂停状态。
          // 永久失去焦点：后续不会再收到任何音频焦点事件，若想恢复播放，需要用户主动触发。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_DUCK:
          // 此分支表示系统已将音频音量降低（默认降到正常音量的20%）。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK:
          // 此分支表示系统已将音频音量恢复正常。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION:
          // 此分支表示其他应用开始播放非混音音频，系统可自行决定是否静音。
            break;
        case AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION:
          // 此分支表示其他应用的非混音音频播放结束，系统可自行决定是否取消静音。
            break;
        default:
            break;
    }
}
// ...
    OH_AudioCommon_Result result = OH_AudioSessionManager_RegisterStateChangeCallback(audioSessionManager,
                                                                                      AudioSessionStateChangedCallback);
    // ...
    // AUDIO_SESSION_SCENE_MEDIA 仅为示例，实际使用时请根据具体情况进行修改。
    OH_AudioSessionManager_SetScene(audioSessionManager, AUDIO_SESSION_SCENE_MEDIA);
    // 启用混音播放下静音建议。
    OH_AudioSessionManager_EnableMuteSuggestionWhenMixWithOthers(audioSessionManager, true);
    // CONCURRENCY_MIX_WITH_OTHERS 是示例，实际使用时请根据情况修改。
    OH_AudioSession_Strategy strategy = {CONCURRENCY_MIX_WITH_OTHERS};

    // 设置音频并发模式并激活音频会话。
    OH_AudioSessionManager_ActivateAudioSession(audioSessionManager, &strategy);
    // ...
    result = OH_AudioSessionManager_DeactivateAudioSession(audioSessionManager);
    // ...
    OH_AudioCommon_Result resultUnregister = OH_AudioSessionManager_UnregisterSessionDeactivatedCallback(
        audioSessionManager, MyAudioSessionDeactivatedCallback);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleC/entry/src/main/cpp/audiosession.cpp#L57-L186" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：audiosession.cpp</a></div>
