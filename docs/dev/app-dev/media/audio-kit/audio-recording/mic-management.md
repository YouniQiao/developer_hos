---
displayed_sidebar: appDevSidebar
title: "管理麦克风静音状态"
original_url: /docs/dev/app-dev/media/audio-kit/audio-recording/mic-management
format: md
upstream_id: dev/app-dev/media/audio-kit/audio-recording/mic-management
last_sync: 2026-06-07
sync_hash: 4e80f79f
---
因为在录制过程中需要使用麦克风录制相关音频数据，所以建议开发者在调用录制接口前查询麦克风状态，并在录制过程中监听麦克风的状态变化，避免影响录制效果。

在音频录制过程中，用户可以将麦克风静音，此时录音过程正常进行，录制生成的数据文件的大小随录制时长递增，但写入文件的数据均为0，即无声数据（空白数据）。

录音不支持音量调节。

## 开发步骤及注意事项

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCaptureSampleJS)。

在AudioVolumeGroupManager中提供了管理麦克风状态的方法，接口的详细说明请参考音量API文档[AudioVolumeGroupManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager)。

1. 创建audioVolumeGroupManager对象。

   ```
   import { audio } from '@kit.AudioKit';

   let audioVolumeGroupManager: audio.AudioVolumeGroupManager;
   // 创建audioVolumeGroupManager对象。
   async function loadVolumeGroupManager(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {
     const groupid = audio.DEFAULT_VOLUME_GROUP_ID;
     audioVolumeGroupManager = await audio.getAudioManager().getVolumeManager().getVolumeGroupManager(groupid);
     console.info('audioVolumeGroupManager create success.');
     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioCaptureSampleJS/entry/src/main/ets/pages/MacManager.ets#L15-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MacManager.ets</a></div>

2. 调用[on('micStateChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#onmicstatechange9)监听麦克风状态变化，当麦克风静音状态发生变化时将通知应用。

   目前此订阅接口在单进程多[AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiomanager)实例的使用场景下，仅最后一个实例的订阅生效，其他实例的订阅会被覆盖（即使最后一个实例没有进行订阅），因此推荐使用单一AudioManager实例进行开发。

   ```
   // 监听麦克风状态变化。
   async function on() {
     audioVolumeGroupManager.on('micStateChange', (micStateChange: audio.MicStateChangeEvent) => {
       console.info(`Current microphone status is: ${micStateChange.mute} `);
     });
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioCaptureSampleJS/entry/src/main/ets/pages/MacManager.ets#L34-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MacManager.ets</a></div>

3. 调用[isMicrophoneMute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#ismicrophonemute9)查询麦克风当前静音状态，返回true为静音，false为非静音。

   ```
   // 查询麦克风是否静音。
   async function isMicrophoneMute(updateCallback?: (msg: string, isError: boolean) => void): Promise<void> {
     await audioVolumeGroupManager.isMicrophoneMute().then((value: boolean) => {
       console.info(`isMicrophoneMute is: ${value}.`);
       // ...
     });
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioCaptureSampleJS/entry/src/main/ets/pages/MacManager.ets#L43-L56" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MacManager.ets</a></div>
