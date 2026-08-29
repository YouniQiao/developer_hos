---
title: "@ohos.multimedia.systemSoundManager (系统声音管理)"
upstream_id: "harmonyos-references/js-apis-systemsoundmanager"
catalog: "harmonyos-references"
content_hash: "2f7dd69588b7"
synced_at: "2026-08-29T18:17:19.434401"
---

# @ohos.multimedia.systemSoundManager (系统声音管理)

本模块提供系统声音管理能力，包括系统音效类型的定义、系统音效播放器的获取等。当需要在应用内播放系统音效以统一使用系统预设音效、带来一致的用户体验时，使用本模块接口完成相关操作。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { systemSoundManager } from '@kit.AudioKit';
```

#### SystemSoundType

枚举，表示系统音效类型。

模型约束：此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Multimedia.SystemSound.Core

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PHOTO_SHUTTER | 0 | 拍照音效。 |
| VIDEO_RECORDING_BEGIN | 1 | 视频录制开始音效。 |
| VIDEO_RECORDING_END | 2 | 视频录制结束音效。 |

#### systemSoundManager.createSystemSoundPlayer

createSystemSoundPlayer(): Promise<SystemSoundPlayer | null>

创建系统音效播放器对象。使用Promise异步回调。

![](./img/note_3.0-zh-cn.png)

- 调用createSystemSoundPlayer()创建播放器后，必须在使用完毕后调用release()释放播放器资源。
- 详细的使用说明和方法关系请参见[SystemSoundPlayer (音效播放器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer)。

系统能力： SystemCapability.Multimedia.SystemSound.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | 成功返回系统音效播放器对象，用于播放拍照音效、视频录制音效等系统音效；失败返回null。 |

错误码：

以下错误码的详细介绍请参见[Media错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-media)。

| 错误码ID | 错误信息 |
| --- | --- |
| 5400101 | No memory. Return by promise. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

let systemSoundPlayer: systemSoundManager.SystemSoundPlayer | null = null;

systemSoundManager.createSystemSoundPlayer().then((systemSoundPlayerInstance) => {
  systemSoundPlayer = systemSoundPlayerInstance;
  console.info('Succeeded in creating the system sound player.');
}).catch((err: BusinessError) => {
  console.error(`Failed to create the system sound player. Code: ${err.code}, message: ${err.message}`);
});
```

#### SystemSoundPlayer

type SystemSoundPlayer = _SystemSoundPlayer

系统音效播放器对象，用于播放拍照音效、视频录制音效等系统音效。

系统能力： SystemCapability.Multimedia.SystemSound.Core

| 类型 | 说明 |
| --- | --- |
| [_SystemSoundPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-multimedia-systemsoundplayer#systemsoundplayer) | 系统音效播放器对象。 |
