---
displayed_sidebar: appDevSidebar
title: "查询和监听音频输入设备"
original_url: /docs/dev/app-dev/media/audio-kit/audio-device/audio-input-device-management
format: md
upstream_id: dev/app-dev/media/audio-kit/audio-device/audio-input-device-management
last_sync: 2026-06-07
sync_hash: 42f7fcc7
---
本模块提供音频输入设备管理能力，包括查询输入设备信息、监听设备连接状态变化等。具体API说明可参考文档[AudioRoutingManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager)。

以下各步骤示例为片段代码，可通过示例代码右下方链接获取[完整示例](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS)。

## 创建AudioRoutingManager实例

在使用AudioRoutingManager管理音频设备前，需要先导入模块并创建实例。

```
import { audio } from '@kit.AudioKit'; // 导入audio模块。

let audioManager = audio.getAudioManager(); // 需要先创建AudioManager实例。
let audioRoutingManager = audioManager.getRoutingManager(); // 再调用AudioManager的方法创建AudioRoutingManager实例。
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRoutingManagerSampleJS/entry/src/main/ets/pages/FindAndListenAudioInputDevice.ets#L16-L24" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：FindAndListenAudioInputDevice.ets</a></div>


## 支持的音频输入设备类型

目前支持的音频输入设备见下表：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| WIRED\_HEADSET | 3 | 有线耳机，带麦克风。 |
| BLUETOOTH\_SCO | 7 | 蓝牙设备SCO（Synchronous Connection Oriented）连接。 |
| MIC | 15 | 麦克风。 |
| USB\_HEADSET | 22 | USB耳机，带麦克风。 |
| NEARLINK | 31 | 星闪设备。 |

## 获取输入设备信息

使用[getDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#getdevices9)方法可以获取当前所有输入设备的信息。

```
import { audio } from '@kit.AudioKit'; // 导入audio模块。
// ...
  audioRoutingManager.getDevices(audio.DeviceFlag.INPUT_DEVICES_FLAG).then((data: audio.AudioDeviceDescriptors) => {
    console.info('Promise returned to indicate that the device list is obtained.');

    // ...
  });
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRoutingManagerSampleJS/entry/src/main/ets/pages/FindAndListenAudioInputDevice.ets#L17-L93" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：FindAndListenAudioInputDevice.ets</a></div>


## 监听设备连接状态变化

可以设置监听事件来监听设备连接状态的变化，当有设备连接或断开时触发回调：

```
import { audio } from '@kit.AudioKit';  // 导入audio模块。
// ...
  // 监听音频设备状态变化。
  audioRoutingManager.on('deviceChange', audio.DeviceFlag.INPUT_DEVICES_FLAG,
    (deviceChanged: audio.DeviceChangeAction) => {
    console.info('device change type : ' + deviceChanged.type);  // 设备连接状态变化,0为连接,1为断开连接。
    console.info('device descriptor size : ' + deviceChanged.deviceDescriptors.length);
    console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceRole);  // 设备角色。
    console.info('device change descriptor : ' + deviceChanged.deviceDescriptors[0].deviceType);  // 设备类型。

    // ...
  });
  // ...
  // 取消监听音频设备状态变化。
  audioRoutingManager.off('deviceChange', (deviceChanged: audio.DeviceChangeAction) => {
    console.info('Should be no callback.');
  });
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Audio/AudioRoutingManagerSampleJS/entry/src/main/ets/pages/FindAndListenAudioInputDevice.ets#L18-L60" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：FindAndListenAudioInputDevice.ets</a></div>
