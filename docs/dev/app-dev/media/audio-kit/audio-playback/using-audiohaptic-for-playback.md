---
displayed_sidebar: appDevSidebar
title: "使用AudioHaptic开发音振协同播放功能(ArkTs)"
original_url: /docs/dev/app-dev/media/audio-kit/audio-playback/using-audiohaptic-for-playback
format: md
upstream_id: dev/app-dev/media/audio-kit/audio-playback/using-audiohaptic-for-playback
last_sync: 2026-06-07
sync_hash: ff71f08b
---
AudioHaptic提供音频与振动协同播放及管理的方法，适用于需要在播放音频时同步发起振动的场景，如来电铃声随振、键盘按键反馈、消息通知反馈等。

## 开发指导

使用AudioHaptic播放音频并同步开启振动，涉及到音频及振动资源的管理、音频时延模式及音频流使用类型的配置、音振播放器的创建及管理等。本开发指导将以一次音振协同播放的过程为例，向开发者讲解如何使用AudioHaptic进行音振协同播放，建议配合[audioHaptic](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic)的API说明阅读。

### 权限申请

如果应用创建的AudioHapticPlayer需要触发振动，则需要校验应用是否拥有该权限：ohos.permission.VIBRATE。

1. [声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。
2. [向用户申请授权](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)。

### 开发步骤及注意事项

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleJS)。

1. 获取音振管理器实例，并注册音频及振动资源，资源支持情况可以查看[AudioHapticManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#audiohapticmanager)。

   ![](./img/89c64b1b.png)

   开发者可通过如下两种方式注册资源：

   * 方式1：使用[registerSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#registersource)接口，通过文件URI来注册资源。
   * 方式2（推荐）：从API version 20开始，支持使用[registerSourceFromFd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#registersourcefromfd20)接口，通过文件描述符来注册资源，更便于开发者使用。

   ```
   import { audio, audioHaptic } from '@kit.AudioKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { common } from '@kit.AbilityKit';

   let audioHapticManagerInstance: audioHaptic.AudioHapticManager = audioHaptic.getAudioHapticManager();

   // 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。
   // 推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。

   // ...
     // 方法1：使用registerSource接口注册资源。
     let audioUri = 'data/audioTest.wav'; // 此处仅作示例，实际使用时需要将文件替换为应用目标音频资源的Uri。
     let hapticUri = 'data/hapticTest.json'; // 此处仅作示例，实际使用时需要将文件替换为应用目标振动资源的Uri。
     let idForUri = 0;

     audioHapticManagerInstance.registerSource(audioUri, hapticUri).then((value: number) => {
       console.info(`Promise returned to indicate that the source id of the registered source ${value}.`);
       idForUri = value;
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to register source ${err}`);
       // ...
     });
     // ...
     // 方法2:使用registerSourceFromFd接口注册资源。
     // 此处仅作示例,实际使用时需要将文件替换为应用rawfile目录下的对应文件。
     let audioFile = context.resourceManager.getRawFdSync('audioTest.ogg');
     let audioFd: audioHaptic.AudioHapticFileDescriptor = {
       fd: audioFile.fd,
       offset: audioFile.offset,
       length: audioFile.length,
     };
     // 此处仅作示例,实际使用时需要将文件替换为应用rawfile目录下的对应文件。
     let hapticFile = context.resourceManager.getRawFdSync('hapticTest.json');
     let hapticFd: audioHaptic.AudioHapticFileDescriptor = {
       fd: hapticFile.fd,
       offset: hapticFile.offset,
       length: hapticFile.length,
     };
     audioHapticManagerInstance.registerSourceFromFd(audioFd, hapticFd).then((value: number) => {
       console.info('Succeeded in doing registerSourceFromFd.');
       idForFd = value;
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to registerSourceFromFd. Code: ${err.code}, message: ${err.message}`);
       // ...
     });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L16-L117" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>

2. 设置音振播放器参数，各参数作用可以查看[AudioHapticManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#audiohapticmanager)。

   ```
   let latencyMode: audioHaptic.AudioLatencyMode = audioHaptic.AudioLatencyMode.AUDIO_LATENCY_MODE_FAST;
   audioHapticManagerInstance.setAudioLatencyMode(idForFd, latencyMode);

   let usage: audio.StreamUsage = audio.StreamUsage.STREAM_USAGE_NOTIFICATION;
   audioHapticManagerInstance.setStreamUsage(idForFd, usage);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L83-L89" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>

3. 调用[createPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#createplayer)方法，创建AudioHapticPlayer实例。

   ```
   let options: audioHaptic.AudioHapticPlayerOptions = {muteAudio: false, muteHaptics: false};
   let audioHapticPlayer: audioHaptic.AudioHapticPlayer | undefined = undefined;
   // ...
     audioHapticManagerInstance.createPlayer(idForFd, options).then((value: audioHaptic.AudioHapticPlayer) => {
       console.info(`Create the audio haptic player successfully.`);
       audioHapticPlayer = value;
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to create player ${err}`);
       // ...
     });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L24-L107" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>

4. 调用[start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#start)方法，开启音频播放并同步开启振动。

   ```
   audioHapticPlayer.start().then(() => {
     console.info(`Promise returned to indicate that start playing successfully.`);
     // ...
   }).catch((err: BusinessError) => {
     console.error(`Failed to start playing. ${err}`);
     // ...
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L127-L143" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>

5. 调用[stop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#stop)方法，停止音频播放并同步停止振动。

   ```
   audioHapticPlayer.stop().then(() => {
     console.info(`Promise returned to indicate that stop playing successfully.`);
     // ...
   }).catch((err: BusinessError) => {
     console.error(`Failed to stop playing. ${err}`);
     // ...
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L154-L170" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>

6. 调用[release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#release)方法，释放AudioHapticPlayer实例。

   ```
   audioHapticPlayer.release().then(() => {
     console.info(`Promise returned to indicate that release the audio haptic player successfully.`);
     // ...
   }).catch((err: BusinessError) => {
     console.error(`Failed to release the audio haptic player. ${err}`);
     // ...
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L181-L197" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>

7. 调用[unregisterSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic#unregistersource)方法，将已注册的音频及振动资源移除注册。

   ```
   // 对于不再需要使用的资源，建议应用及时取消注册，避免出现资源泄漏或资源数量超上限等问题。
   audioHapticManagerInstance.unregisterSource(idForFd).then(() => {
     console.info(`Promise returned to indicate that unregister source successfully`);
     // ...
   }).catch((err: BusinessError) => {
     console.error(`Failed to unregister source ${err}`);
     // ...
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRendererSampleJS/entry/src/main/ets/pages/haptic.ets#L198-L214" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：haptic.ets</a></div>
