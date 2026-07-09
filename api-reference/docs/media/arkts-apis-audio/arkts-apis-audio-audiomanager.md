---
title: "Interface (AudioManager)"
upstream_id: "harmonyos-references/arkts-apis-audio-audiomanager"
catalog: "harmonyos-references"
content_hash: "fc4d0b33228a"
synced_at: "2026-07-09T01:00:07.820279"
---

# Interface (AudioManager)

音频音量和设备管理。

在使用AudioManager的接口之前，需先通过[getAudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-f#audiogetaudiomanager)获取AudioManager实例。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { audio } from '@kit.AudioKit';
```

#### getAudioScene8+

getAudioScene(callback: AsyncCallback<AudioScene>): void

获取音频场景模式。使用callback异步回调。

系统能力： SystemCapability.Multimedia.Audio.Communication

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。当获取音频场景模式成功，err为undefined，data为获取到的音频场景模式；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getAudioScene((err: BusinessError, value: audio.AudioScene) => {
  if (err) {
    console.error(`Failed to obtain the audio scene mode. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the audio scene mode is obtained ${value}.`);
});
```

#### getAudioScene8+

getAudioScene(): Promise<AudioScene>

获取音频场景模式。使用Promise异步回调。

系统能力： SystemCapability.Multimedia.Audio.Communication

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回音频场景模式。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getAudioScene().then((value: audio.AudioScene) => {
  console.info(`Promise returned to indicate that the audio scene mode is obtained ${value}.`);
}).catch ((err: BusinessError) => {
  console.error(`Failed to obtain the audio scene mode ${err}`);
});
```

#### getAudioSceneSync10+

getAudioSceneSync(): AudioScene

获取音频场景模式。同步返回结果。

系统能力： SystemCapability.Multimedia.Audio.Communication

返回值：

| 类型 | 说明 |
| --- | --- |
| [AudioScene](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audioscene8) | 音频场景模式。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let value: audio.AudioScene = audioManager.getAudioSceneSync();
  console.info(`indicate that the audio scene mode is obtained ${value}.`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to obtain the audio scene mode ${error}`);
}
```

#### on('audioSceneChange')20+

on(type: 'audioSceneChange', callback: Callback<AudioScene>): void

监听音频场景变化事件。使用callback异步回调。

系统能力： SystemCapability.Multimedia.Audio.Communication

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'audioSceneChange'，当音频场景模式发生变化时，触发该事件。 |
| callback | Callback | 是 | 回调函数，返回当前音频场景模式。 |

示例：

```
audioManager.on('audioSceneChange', (audioScene: audio.AudioScene) => {
  console.info(`audio scene : ${audioScene}.`);
});
```

#### off('audioSceneChange')20+

off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void

取消监听音频场景变化事件。使用callback异步回调。

系统能力： SystemCapability.Multimedia.Audio.Communication

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'audioSceneChange'，当取消监听当前音频场景变化事件时，触发该事件。 |
| callback | Callback | 否 | 回调函数，返回当前音频场景模式。 |

示例：

```
// 取消该事件的所有监听。
audioManager.off('audioSceneChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let audioSceneChangeCallback = (audioScene: audio.AudioScene) => {
  console.info(`audio scene : ${audioScene}.`);
};

audioManager.on('audioSceneChange', audioSceneChangeCallback);

audioManager.off('audioSceneChange', audioSceneChangeCallback);
```

#### getVolumeManager9+

getVolumeManager(): AudioVolumeManager

获取音频音量管理器。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Audio.Volume

返回值：

| 类型 | 说明 |
| --- | --- |
| [AudioVolumeManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager) | AudioVolumeManager实例。 |

示例：

```
import { audio } from '@kit.AudioKit';

let audioVolumeManager: audio.AudioVolumeManager = audioManager.getVolumeManager();
```

#### getStreamManager9+

getStreamManager(): AudioStreamManager

获取音频流管理器。

系统能力： SystemCapability.Multimedia.Audio.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [AudioStreamManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager) | AudioStreamManager实例。 |

示例：

```
import { audio } from '@kit.AudioKit';

let audioStreamManager: audio.AudioStreamManager = audioManager.getStreamManager();
```

#### getRoutingManager9+

getRoutingManager(): AudioRoutingManager

获取音频路由管理器。

系统能力： SystemCapability.Multimedia.Audio.Device

返回值：

| 类型 | 说明 |
| --- | --- |
| [AudioRoutingManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager) | AudioRoutingManager实例。 |

示例：

```
import { audio } from '@kit.AudioKit';

let audioRoutingManager: audio.AudioRoutingManager = audioManager.getRoutingManager();
```

#### getSessionManager12+

getSessionManager(): AudioSessionManager

获取音频会话管理器。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Audio.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [AudioSessionManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiosessionmanager) | AudioSessionManager实例。 |

示例：

```
import { audio } from '@kit.AudioKit';

let audioSessionManager: audio.AudioSessionManager = audioManager.getSessionManager();
```

#### getSpatializationManager18+

getSpatializationManager(): AudioSpatializationManager

获取空间音频管理器。

系统能力： SystemCapability.Multimedia.Audio.Spatialization

返回值：

| 类型 | 说明 |
| --- | --- |
| [AudioSpatializationManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiospatializationmanager) | AudioSpatializationManager实例。 |

示例：

```
import { audio } from '@kit.AudioKit';
let audioSpatializationManager: audio.AudioSpatializationManager = audioManager.getSpatializationManager();
```

#### setAudioParameter(deprecated)

setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void

音频参数设置。使用callback异步回调。

接口根据硬件设备的支持能力扩展音频配置。支持的参数与产品和设备强相关，非通用参数，示例代码内使用样例参数。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 11开始废弃，替代接口仅面向系统应用开放。

需要权限： ohos.permission.MODIFY_AUDIO_SETTINGS

系统能力： SystemCapability.Multimedia.Audio.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 被设置的音频参数的键。 |
| value | string | 是 | 被设置的音频参数的值。 |
| callback | AsyncCallback | 是 | 回调函数。当音频参数设置成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setAudioParameter('key_example', 'value_example', (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the audio parameter. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate a successful setting of the audio parameter.');
});
```

#### setAudioParameter(deprecated)

setAudioParameter(key: string, value: string): Promise<void>

音频参数设置。使用Promise异步回调。

接口根据硬件设备的支持能力扩展音频配置。支持的参数与产品和设备强相关，非通用参数，示例代码内使用样例参数。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 11开始废弃，替代接口仅面向系统应用开放。

需要权限： ohos.permission.MODIFY_AUDIO_SETTINGS

系统能力： SystemCapability.Multimedia.Audio.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 被设置的音频参数的键。 |
| value | string | 是 | 被设置的音频参数的值。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
audioManager.setAudioParameter('key_example', 'value_example').then(() => {
  console.info('Promise returned to indicate a successful setting of the audio parameter.');
});
```

#### getAudioParameter(deprecated)

getAudioParameter(key: string, callback: AsyncCallback<string>): void

获取指定音频参数值。使用callback异步回调。

本接口的使用场景为：根据硬件设备的支持能力扩展音频配置。在不同的设备平台上，所支持的音频参数会存在差异。示例代码内使用样例参数，实际支持的音频配置参数见具体设备平台的资料描述。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 11开始废弃，替代接口仅面向系统应用开放。

系统能力： SystemCapability.Multimedia.Audio.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 待获取的音频参数的键。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定音频参数值成功，err为undefined，data为获取到的指定音频参数值；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getAudioParameter('key_example', (err: BusinessError, value: string) => {
  if (err) {
    console.error(`Failed to obtain the value of the audio parameter. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the value of the audio parameter is obtained ${value}.`);
});
```

#### getAudioParameter(deprecated)

getAudioParameter(key: string): Promise<string>

获取指定音频参数值。使用Promise异步回调。

本接口的使用场景为：根据硬件设备的支持能力扩展音频配置。在不同的设备平台上，所支持的音频参数会存在差异。示例代码内使用样例参数，实际支持的音频配置参数见具体设备平台的资料描述。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 11开始废弃，替代接口仅面向系统应用开放。

系统能力： SystemCapability.Multimedia.Audio.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | string | 是 | 待获取的音频参数的键。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回获取的音频参数值。 |

示例：

```
audioManager.getAudioParameter('key_example').then((value: string) => {
  console.info(`Promise returned to indicate that the value of the audio parameter is obtained ${value}.`);
});
```

#### setVolume(deprecated)

setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void

设置指定流的音量等级。使用callback异步回调。

![](./img/note_3.0-zh-cn.png)

- 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。
- 应用无法直接调节系统音量，建议通过系统音量面板组件调节音量。具体样例和介绍请查看API文档：[音量面板](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avvolumepanel)。

需要权限： ohos.permission.ACCESS_NOTIFICATION_POLICY

仅设置铃声（即volumeType为AudioVolumeType.RINGTONE）在静音和非静音状态切换时需要该权限。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| volume | number | 是 | 音量等级，可设置范围通过[getMinVolume](#getminvolumedeprecated)和[getMaxVolume](#getmaxvolumedeprecated)获取。 |
| callback | AsyncCallback | 是 | 回调函数。当设置指定流的音量成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setVolume(audio.AudioVolumeType.MEDIA, 10, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the volume. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate a successful volume setting.');
});
```

#### setVolume(deprecated)

setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>

设置指定流的音量等级。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png)

- 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。
- 应用无法直接调节系统音量，建议通过系统音量面板组件调节音量。具体样例和介绍请查看API文档：[音量面板](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avvolumepanel)。

需要权限： ohos.permission.ACCESS_NOTIFICATION_POLICY

仅设置铃声（即volumeType为AudioVolumeType.RINGTONE）在静音和非静音状态切换时需要该权限。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| volume | number | 是 | 音量等级，可设置范围通过[getMinVolume](#getminvolumedeprecated)和[getMaxVolume](#getmaxvolumedeprecated)获取。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
audioManager.setVolume(audio.AudioVolumeType.MEDIA, 10).then(() => {
  console.info('Promise returned to indicate a successful volume setting.');
});
```

#### getVolume(deprecated)

getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void

获取指定流的音量等级。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[getVolume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getvolumedeprecated)替代；API version 20及以后，建议使用[getVolumeByStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#getvolumebystream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定流的音量成功，err为undefined，data为获取到的指定流的音量等级；否则为错误对象。指定流的音量等级范围可通过[getMinVolume](#getminvolumedeprecated)和[getMaxVolume](#getmaxvolumedeprecated)获取。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getVolume(audio.AudioVolumeType.MEDIA, (err: BusinessError, value: number) => {
  if (err) {
    console.error(`Failed to obtain the volume. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the volume is obtained.');
});
```

#### getVolume(deprecated)

getVolume(volumeType: AudioVolumeType): Promise<number>

获取指定流的音量等级。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[getVolume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getvolumedeprecated)替代；API version 20及以后，建议使用[getVolumeByStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#getvolumebystream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回指定流的音量等级。指定流的音量等级范围可通过[getMinVolume](#getminvolumedeprecated)和[getMaxVolume](#getmaxvolumedeprecated)获取。 |

示例：

```
audioManager.getVolume(audio.AudioVolumeType.MEDIA).then((value: number) => {
  console.info(`Promise returned to indicate that the volume is obtained ${value} .`);
});
```

#### getMinVolume(deprecated)

getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void

获取指定流的最小音量等级。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[getMinVolume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getminvolumedeprecated)替代；API version 20及以后，建议使用[getMinVolumeByStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#getminvolumebystream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定流的最小音量成功，err为undefined，data为获取到的指定流的最小音量等级；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getMinVolume(audio.AudioVolumeType.MEDIA, (err: BusinessError, value: number) => {
  if (err) {
    console.error(`Failed to obtain the minimum volume. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the minimum volume is obtained. ${value}`);
});
```

#### getMinVolume(deprecated)

getMinVolume(volumeType: AudioVolumeType): Promise<number>

获取指定流的最小音量等级。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[getMinVolume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getminvolumedeprecated)替代；API version 20及以后，建议使用[getMinVolumeByStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#getminvolumebystream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回最小音量等级。 |

示例：

```
audioManager.getMinVolume(audio.AudioVolumeType.MEDIA).then((value: number) => {
  console.info(`Promised returned to indicate that the minimum volume is obtained. ${value}`);
});
```

#### getMaxVolume(deprecated)

getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void

获取指定流的最大音量等级。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[getMaxVolume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getmaxvolumedeprecated)替代；API version 20及以后，建议使用[getMaxVolumeByStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#getmaxvolumebystream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定流的最大音量成功，err为undefined，data为获取到的指定流的最大音量等级；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getMaxVolume(audio.AudioVolumeType.MEDIA, (err: BusinessError, value: number) => {
  if (err) {
    console.error(`Failed to obtain the maximum volume. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the maximum volume is obtained. ${value}`);
});
```

#### getMaxVolume(deprecated)

getMaxVolume(volumeType: AudioVolumeType): Promise<number>

获取指定流的最大音量等级。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[getMaxVolume](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getmaxvolumedeprecated)替代；API version 20及以后，建议使用[getMaxVolumeByStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#getmaxvolumebystream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回最大音量等级。 |

示例：

```
audioManager.getMaxVolume(audio.AudioVolumeType.MEDIA).then((data: number) => {
  console.info('Promised returned to indicate that the maximum volume is obtained.');
});
```

#### mute(deprecated)

mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void

设置指定音量流静音。使用callback异步回调。

当该音量流可设置的最小音量不能为0时，不支持静音操作。例如：闹钟和通话。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| mute | boolean | 是 | 是否设置指定音量流为静音状态。true表示静音，false表示非静音。 |
| callback | AsyncCallback | 是 | 回调函数。当设置指定音量流静音成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.mute(audio.AudioVolumeType.MEDIA, true, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to mute the stream. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the stream is muted.');
});
```

#### mute(deprecated)

mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>

设置指定音量流静音。使用Promise异步回调。

当该音量流可设置的最小音量不能为0时，不支持静音操作。例如：闹钟和通话。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| mute | boolean | 是 | 是否设置指定音量流为静音状态。true表示静音，false表示非静音。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
audioManager.mute(audio.AudioVolumeType.MEDIA, true).then(() => {
  console.info('Promise returned to indicate that the stream is muted.');
});
```

#### isMute(deprecated)

isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void

获取指定音量流的静音状态。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[isMute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#ismutedeprecated)替代；API version 20及以后，建议使用[isSystemMutedForStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#issystemmutedforstream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定音量流的静音状态成功，err为undefined，data为true表示静音，false表示非静音；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.isMute(audio.AudioVolumeType.MEDIA, (err: BusinessError, value: boolean) => {
  if (err) {
    console.error(`Failed to obtain the mute status. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the mute status of the stream is obtained. ${value}`);
});
```

#### isMute(deprecated)

isMute(volumeType: AudioVolumeType): Promise<boolean>

获取指定音量流的静音状态。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[isMute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#ismutedeprecated)替代；API version 20及以后，建议使用[isSystemMutedForStream](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumemanager#issystemmutedforstream20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示静音；返回false表示非静音。 |

示例：

```
audioManager.isMute(audio.AudioVolumeType.MEDIA).then((value: boolean) => {
  console.info(`Promise returned to indicate that the mute status of the stream is obtained ${value}.`);
});
```

#### isActive(deprecated)

isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void

获取指定音量流的活跃状态。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[isActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager#isactivedeprecated)替代；API version 20及以后，建议使用[isStreamActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager#isstreamactive20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定音量流的活跃状态成功，err为undefined，data为true表示活跃，false表示不活跃；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.isActive(audio.AudioVolumeType.MEDIA, (err: BusinessError, value: boolean) => {
  if (err) {
    console.error(`Failed to obtain the active status of the stream. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the active status of the stream is obtained ${value}.`);
});
```

#### isActive(deprecated)

isActive(volumeType: AudioVolumeType): Promise<boolean>

获取指定音量流的活跃状态。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用[isActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager#isactivedeprecated)替代；API version 20及以后，建议使用[isStreamActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiostreammanager#isstreamactive20)替代。

系统能力： SystemCapability.Multimedia.Audio.Volume

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volumeType | [AudioVolumeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audiovolumetype) | 是 | 音频音量类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示流状态为活跃；返回false表示流状态不活跃。 |

示例：

```
audioManager.isActive(audio.AudioVolumeType.MEDIA).then((value: boolean) => {
  console.info(`Promise returned to indicate that the active status of the stream is obtained ${value}.`);
});
```

#### setRingerMode(deprecated)

setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void

设置铃声模式。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。

需要权限： ohos.permission.ACCESS_NOTIFICATION_POLICY

仅在静音和非静音状态切换时需要该权限。

系统能力： SystemCapability.Multimedia.Audio.Communication

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | [AudioRingMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audioringmode) | 是 | 音频铃声模式。 |
| callback | AsyncCallback | 是 | 回调函数。当设置铃声模式成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setRingerMode(audio.AudioRingMode.RINGER_MODE_NORMAL, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the ringer mode. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate a successful setting of the ringer mode.');
});
```

#### setRingerMode(deprecated)

setRingerMode(mode: AudioRingMode): Promise<void>

设置铃声模式。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。

需要权限： ohos.permission.ACCESS_NOTIFICATION_POLICY

仅在静音和非静音状态切换时需要该权限。

系统能力： SystemCapability.Multimedia.Audio.Communication

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | [AudioRingMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#audioringmode) | 是 | 音频铃声模式。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
audioManager.setRingerMode(audio.AudioRingMode.RINGER_MODE_NORMAL).then(() => {
  console.info('Promise returned to indicate a successful setting of the ringer mode.');
});
```

#### getRingerMode(deprecated)

getRingerMode(callback: AsyncCallback<AudioRingMode>): void

获取铃声模式。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[getRingerMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getringermode9)替代。

系统能力： SystemCapability.Multimedia.Audio.Communication

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。当获取铃声模式成功，err为undefined，data为获取到的铃声模式；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getRingerMode((err: BusinessError, value: audio.AudioRingMode) => {
  if (err) {
    console.error(`Failed to obtain the ringer mode. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the ringer mode is obtained ${value}.`);
});
```

#### getRingerMode(deprecated)

getRingerMode(): Promise<AudioRingMode>

获取铃声模式。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[getRingerMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#getringermode9)替代。

系统能力： SystemCapability.Multimedia.Audio.Communication

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回系统的铃声模式。 |

示例：

```
audioManager.getRingerMode().then((value: audio.AudioRingMode) => {
  console.info(`Promise returned to indicate that the ringer mode is obtained ${value}.`);
});
```

#### getDevices(deprecated)

getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void

获取音频设备列表。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[getDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#getdevices9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | [DeviceFlag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#deviceflag) | 是 | 音频设备类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取音频设备列表成功，err为undefined，data为获取到的音频设备列表；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG, (err: BusinessError, value: audio.AudioDeviceDescriptors) => {
  if (err) {
    console.error(`Failed to obtain the device list. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the device list is obtained.');
});
```

#### getDevices(deprecated)

getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>

获取音频设备列表。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[getDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#getdevices9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceFlag | [DeviceFlag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#deviceflag) | 是 | 音频设备类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回设备列表。 |

示例：

```
audioManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG).then((data: audio.AudioDeviceDescriptors) => {
  console.info('Promise returned to indicate that the device list is obtained.');
});
```

#### setDeviceActive(deprecated)

setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void

设置设备激活状态。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[setCommunicationDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#setcommunicationdevice9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#activedevicetypedeprecated) | 是 | 活跃音频设备类型。 |
| active | boolean | 是 | 是否设置设备为激活状态。true表示已激活，false表示未激活。 |
| callback | AsyncCallback | 是 | 回调函数。当设置设备激活状态成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setDeviceActive(audio.ActiveDeviceType.SPEAKER, true, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to set the active status of the device. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the device is set to the active status.');
});
```

#### setDeviceActive(deprecated)

setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>

设置设备激活状态。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[setCommunicationDevice](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#setcommunicationdevice9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#activedevicetypedeprecated) | 是 | 活跃音频设备类型。 |
| active | boolean | 是 | 是否设置设备为激活状态。true表示已激活，false表示未激活。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
audioManager.setDeviceActive(audio.ActiveDeviceType.SPEAKER, true).then(() => {
  console.info('Promise returned to indicate that the device is set to the active status.');
});
```

#### isDeviceActive(deprecated)

isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void

获取指定设备的激活状态。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[isCommunicationDeviceActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#iscommunicationdeviceactive9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#activedevicetypedeprecated) | 是 | 活跃音频设备类型。 |
| callback | AsyncCallback | 是 | 回调函数。当获取指定设备的激活状态成功，err为undefined，data为true表示激活，false表示未激活；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.isDeviceActive(audio.ActiveDeviceType.SPEAKER, (err: BusinessError, value: boolean) => {
  if (err) {
    console.error(`Failed to obtain the active status of the device. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the active status of the device is obtained.');
});
```

#### isDeviceActive(deprecated)

isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>

获取指定设备的激活状态。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[isCommunicationDeviceActive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#iscommunicationdeviceactive9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceType | [ActiveDeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-e#activedevicetypedeprecated) | 是 | 活跃音频设备类型。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示设备已激活；返回false表示设备未激活。 |

示例：

```
audioManager.isDeviceActive(audio.ActiveDeviceType.SPEAKER).then((value: boolean) => {
  console.info(`Promise returned to indicate that the active status of the device is obtained ${value}.`);
});
```

#### setMicrophoneMute(deprecated)

setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void

设置麦克风静音状态。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。

需要权限： ohos.permission.MICROPHONE

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | 是否设置麦克风为静音状态。true表示静音，false表示非静音。 |
| callback | AsyncCallback | 是 | 回调函数。当设置麦克风静音状态成功，err为undefined，否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.setMicrophoneMute(true, (err: BusinessError) => {
  if (err) {
    console.error(`Failed to mute the microphone. ${err}`);
    return;
  }
  console.info('Callback invoked to indicate that the microphone is muted.');
});
```

#### setMicrophoneMute(deprecated)

setMicrophoneMute(mute: boolean): Promise<void>

设置麦克风静音状态。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，替代接口仅面向系统应用开放。

需要权限： ohos.permission.MICROPHONE

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mute | boolean | 是 | 是否设置麦克风为静音状态。true表示静音，false表示非静音。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
audioManager.setMicrophoneMute(true).then(() => {
  console.info('Promise returned to indicate that the microphone is muted.');
});
```

#### isMicrophoneMute(deprecated)

isMicrophoneMute(callback: AsyncCallback<boolean>): void

获取麦克风静音状态。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[isMicrophoneMute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#ismicrophonemute9)替代。

需要权限： ohos.permission.MICROPHONE

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。当获取麦克风静音状态成功，err为undefined，data为true表示静音，false表示非静音；否则为错误对象。 |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

audioManager.isMicrophoneMute((err: BusinessError, value: boolean) => {
  if (err) {
    console.error(`Failed to obtain the mute status of the microphone. ${err}`);
    return;
  }
  console.info(`Callback invoked to indicate that the mute status of the microphone is obtained ${value}.`);
});
```

#### isMicrophoneMute(deprecated)

isMicrophoneMute(): Promise<boolean>

获取麦克风静音状态。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[isMicrophoneMute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiovolumegroupmanager#ismicrophonemute9)替代。

需要权限： ohos.permission.MICROPHONE

系统能力： SystemCapability.Multimedia.Audio.Device

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回true表示麦克风被静音；返回false表示麦克风未被静音。 |

示例：

```
audioManager.isMicrophoneMute().then((value: boolean) => {
  console.info(`Promise returned to indicate that the mute status of the microphone is obtained ${value}.`);
});
```

#### on('deviceChange')(deprecated)

on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void

监听音频设备连接变化事件（当音频设备连接状态发生变化时触发）。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[on('deviceChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#ondevicechange9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'deviceChange'，当音频设备连接状态发生变化时，触发该事件。 |
| callback | Callback | 是 | 回调函数，返回设备更新详情。 |

示例：

```
audioManager.on('deviceChange', (deviceChanged: audio.DeviceChangeAction) => {
  console.info(`device change type : ${deviceChanged.type} `);
  console.info(`device descriptor size : ${deviceChanged.deviceDescriptors.length} `);
  console.info(`device change descriptor : ${deviceChanged.deviceDescriptors[0].deviceRole} `);
  console.info(`device change descriptor : ${deviceChanged.deviceDescriptors[0].deviceType} `);
});
```

#### off('deviceChange')(deprecated)

off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void

取消监听音频设备连接变化事件。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 9开始废弃，建议使用[off('deviceChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audioroutingmanager#offdevicechange9)替代。

系统能力： SystemCapability.Multimedia.Audio.Device

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'deviceChange'，当取消监听音频设备连接变化事件时，触发该事件。 |
| callback | Callback | 否 | 回调函数，返回设备更新详情。 |

示例：

```
// 取消该事件的所有监听。
audioManager.off('deviceChange');

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let deviceChangeCallback = (deviceChanged: audio.DeviceChangeAction) => {
  console.info(`device change type : ${deviceChanged.type} `);
  console.info(`device descriptor size : ${deviceChanged.deviceDescriptors.length} `);
  console.info(`device change descriptor : ${deviceChanged.deviceDescriptors[0].deviceRole} `);
  console.info(`device change descriptor : ${deviceChanged.deviceDescriptors[0].deviceType} `);
};

audioManager.on('deviceChange', deviceChangeCallback);

audioManager.off('deviceChange', deviceChangeCallback);
```

#### on('interrupt')(deprecated)

on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void

监听音频打断事件（当音频焦点发生变化时触发）。使用callback异步回调。

与[on('audioInterrupt')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer#onaudiointerrupt9)作用一致，均用于监听焦点变化。为无音频流的场景（未曾创建AudioRenderer对象），比如FM、语音唤醒等提供焦点变化监听功能。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 11开始废弃，建议使用[on('audioInterrupt')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiocapturer#onaudiointerrupt10)替代。

系统能力： SystemCapability.Multimedia.Audio.Renderer

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'interrupt'，当音频焦点状态发生变化时，触发该事件。 |
| interrupt | [AudioInterrupt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-i#audiointerruptdeprecated) | 是 | 音频打断事件类型的参数。 |
| callback | Callback | 是 | 回调函数，返回打断事件信息。 |

示例：

```
import { audio } from '@kit.AudioKit';

let interAudioInterrupt: audio.AudioInterrupt = {
  streamUsage: audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION,
  contentType: audio.ContentType.CONTENT_TYPE_UNKNOWN,
  pauseWhenDucked: true
};

audioManager.on('interrupt', interAudioInterrupt, (interruptAction: audio.InterruptAction) => {
  if (interruptAction.actionType === 0) {
    console.info('An event to gain the audio focus starts.');
    console.info(`Focus hint: ${interruptAction.hint} `);
  }
  if (interruptAction.actionType === 1) {
    console.info('An audio interruption event starts.');
    console.info(`Audio interruption hint: ${interruptAction.hint} `);
  }
});
```

#### off('interrupt')(deprecated)

off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void

取消监听音频打断事件。使用callback异步回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 11开始废弃，建议使用[off('audioInterrupt')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiocapturer#offaudiointerrupt10)替代。

系统能力： SystemCapability.Multimedia.Audio.Renderer

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为'interrupt'，当取消监听音频打断事件时，触发该事件。 |
| interrupt | [AudioInterrupt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-i#audiointerruptdeprecated) | 是 | 音频打断事件类型的参数。 |
| callback | Callback | 否 | 回调函数，返回打断事件信息。 |

示例：

```
import { audio } from '@kit.AudioKit';

let interAudioInterrupt: audio.AudioInterrupt = {
  streamUsage: audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION,
  contentType: audio.ContentType.CONTENT_TYPE_UNKNOWN,
  pauseWhenDucked: true
};

// 取消该事件的所有监听。
audioManager.off('interrupt', interAudioInterrupt);

// 同一监听事件中，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。
let interruptCallback = (interruptAction: audio.InterruptAction) => {
  if (interruptAction.actionType === 0) {
    console.info('An event to gain the audio focus starts.');
    console.info(`Focus hint: ${interruptAction.hint} `);
  }
  if (interruptAction.actionType === 1) {
    console.info('An audio interruption event starts.');
    console.info(`Audio interruption hint: ${interruptAction.hint} `);
  }
};

audioManager.on('interrupt', interAudioInterrupt, interruptCallback);

audioManager.off('interrupt', interAudioInterrupt, interruptCallback);
```
