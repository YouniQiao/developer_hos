---
displayed_sidebar: appDevSidebar
title: "实现音频输出设备路由切换"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-switcher
---

当应用进行音频输出时，系统会根据音频流类型选择对应的输出设备（[STREAM\_USAGE\_MUSIC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#streamusage)：扬声器发声；[STREAM\_USAGE\_VOICE\_COMMUNICATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#streamusage)：听筒发声）。如果系统提供的默认输出设备不满足应用需求，应用可通过AVCastPicker或setDefaultOutputDevice实现音频输出设备路由切换。

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS)。

## 媒体类应用实现输出设备路由切换

应用可使用[AVCastPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avcastpicker#avcastpicker)投播组件进行媒体类应用输出设备路由切换。

## 通话类应用实现输出设备路由切换

### 外接设备路由切换

应用可[使用通话设备切换组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-switch-call-devices)进行通话类应用外接输出设备路由切换。

### 内置听筒和扬声器路由切换

如果未连接外设，语音通话场景系统默认听筒发声，其他场景系统默认扬声器发声；如果连接了外设，系统默认通过外接设备发声。

调用setDefaultOutputDevice设置音频输出设备后，如需取消，可将参数设为audio.DeviceType.DEFAULT，将音频输出设备选择权交还给系统。

1. 从API version 12开始，应用可使用AudioRenderer的[setDefaultOutputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer#setdefaultoutputdevice12)设置听筒和扬声器路由切换，调用前需要先获取[AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-f#audiocreateaudiorenderer8)实例。

   ![](./img/2f23d038.png)

   * 由于AudioRenderer是流级别，调用本接口设置的默认音频输出设备仅对当前流生效。
   * 本接口优先级低于AudioSessionManager的[setDefaultOutputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20)。如果使用AudioSessionManager的[setDefaultOutputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20)设置了默认音频输出设备，本接口的设置将不会生效。

   ```
   import { audio } from '@kit.AudioKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   // ...
       // 设置默认输出设备为本机扬声器。
       audioRenderer.setDefaultOutputDevice(audio.DeviceType.SPEAKER).then(() => {
         console.info('Succeeded in setting default output device.');
         // ...
       }).catch((err: BusinessError) => {
         console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);
         // ...
       });
       // ...
       // 设置默认输出设备为系统默认输出设备,即取消应用设置的默认设备,交由系统选择设备。
       audioRenderer.setDefaultOutputDevice(audio.DeviceType.DEFAULT).then(() => {
         console.info('Succeeded in setting default output device.');
         // ...
       }).catch((err: BusinessError) => {
         console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);
         // ...
       });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRoutingManagerSampleJS/entry/src/main/ets/pages/OutputDeviceChangePause.ets#L17-L133" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：OutputDeviceChangePause.ets</a></div>

2. 从API version 20开始，应用可使用AudioSessionManager的[setDefaultOutputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20)设置听筒和扬声器路由切换。

   ![](./img/152fbd17.png)

   由于AudioSessionManager是应用级设置，调用本接口设置默认音频输出设备，会对当前应用所有适用范围内的音频流生效，且会覆盖AudioRenderer的[setDefaultOutputDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer#setdefaultoutputdevice12)接口设置的默认音频输出设备信息。

   ```
   import { audio } from '@kit.AudioKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   // ...

   let audioManager = audio.getAudioManager();
   // 创建音频会话管理器。
   let audioSessionManager: audio.AudioSessionManager = audioManager.getSessionManager();
   // ...

     // 设置音频并发模式。
     let strategy: audio.AudioSessionStrategy = {
       concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS
     };

     // 激活音频会话。
     audioSessionManager.activateAudioSession(strategy).then(() => {
       console.info('Succeeded in activating audio session.');
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);
       // ...
     });

     // ...
     // 设置默认输出设备为听筒。
     audioSessionManager.setDefaultOutputDevice(audio.DeviceType.EARPIECE).then(() => {
       console.info('Succeeded in setting default output device.');
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);
       // ...
     });
     // ...

     // 设置默认输出设备为默认设备,即取消应用设置的默认设备,交由系统选择设备。
     audioSessionManager.setDefaultOutputDevice(audio.DeviceType.DEFAULT).then(() => {
       console.info('Succeeded in setting default output device.');
     }).catch((err: BusinessError) => {
       console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);
     });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioSessionSampleJS/entry/src/main/ets/pages/Index.ets#L25-L510" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>
