---
displayed_sidebar: appDevSidebar
title: "音频工作组管理"
original_url: /docs/dev/app-dev/media/audio-kit/audio-performance-optimization/audio-workgroup
format: md
---


音频工作组是一套通过标记来帮助系统识别应用内音频关键线程的接口，系统通过应用提供的关键音频线程以及工作组运行信息可以让音频线程的运行状态更加健康。

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleC)。

## 使用说明

对于播放音频类应用，开发者需要先创建音频工作组，再将工作组运行信息的周期性告知系统。当工作结束后，需要对音频工作组进行清理。

### 创建音频工作组示例

开发者在使用OH\_AudioWorkgroup的API前，需要先用[OH\_AudioManager\_GetAudioResourceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-resource-manager-h#oh_audiomanager_getaudioresourcemanager)获取OH\_AudioResourceManager实例。

```
#include <ohaudio/native_audio_resource_manager.h>
// ...
OH_AudioResourceManager *resMgr;
// ...
    OH_AudioManager_GetAudioResourceManager(&resMgr);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleC/entry/src/main/cpp/renderer.cpp#L23-L277" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：renderer.cpp</a></div>


### 创建音频工作组并将关键线程加入音频工作组

开发者先使用[OH\_AudioResourceManager\_CreateWorkgroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-resource-manager-h#oh_audioresourcemanager_createworkgroup)创建一个新的音频工作组，再使用[OH\_AudioWorkgroup\_AddCurrentThread](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-resource-manager-h#oh_audioworkgroup_addcurrentthread)将关键线程加入音频工作组。

```
#include <chrono>
// ...
int32_t g_tokenId;
OH_AudioWorkgroup *grp = nullptr;
// ...
    OH_AudioResourceManager_CreateWorkgroup(resMgr, "workgroup", &grp);
    OH_AudioWorkgroup_AddCurrentThread(grp, &g_tokenId);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleC/entry/src/main/cpp/renderer.cpp#L26-L281" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：renderer.cpp</a></div>


### 通知系统音频工作组的开始与结束

当音频工作组开始一个工作周期时，开发者可以通知系统任务的开始时间和预期完成时间。在音频工作组完成当前周期内的工作时，开发者应再次通知系统任务已结束。

```
constexpr static uint64_t intervalMs = 20;
bool threadShouldRun = true;

while (threadShouldRun) {
    auto now = std::chrono::system_clock::now().time_since_epoch();
    auto startTimeMs = std::chrono::duration_cast<std::chrono::milliseconds>(now).count();
    OH_AudioWorkgroup_Start(grp, startTimeMs, startTimeMs + intervalMs);
    threadShouldRun = false;
    // 应用音频数据处理。
    OH_AudioWorkgroup_Stop(grp);
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleC/entry/src/main/cpp/renderer.cpp#L294-L263" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：renderer.cpp</a></div>


### 工作组任务结束后进行清理

```
// 当线程已经不需要接入分组时，将其从工作组中移除。
OH_AudioWorkgroup_RemoveThread(grp, g_tokenId);

OH_AudioResourceManager_ReleaseWorkgroup(resMgr, grp);
grp = nullptr;
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleC/entry/src/main/cpp/renderer.cpp#L308-L314" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：renderer.cpp</a></div>
