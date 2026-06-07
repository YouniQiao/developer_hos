---
title: "HarmonyOS 5.0及以上"
original_url: /docs/dev/game-dev/games-gamemme-playlocalaudioclip-harmonyos-0000002304472624
format: md
---


## 前提条件

* 您已[集成游戏多媒体基础SDK和实时语音模块](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332#ZH-CN_TOPIC_0000002382173737__zh-cn_topic_0000001717945166_li16904125719267)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。

## 开始播放

1. 实例化[LocalAudioInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-audiomsgfileinfo-harmonyos-0000002392643581)对象，构造本地音效文件的必要参数。

   ```
   let info: LocalAudioInfo = {
     soundId: 1, // SoundId:音效ID,大于等于0
     volume: 100,  // Volume:音效音量系数,取值范围[0, 100],默认值100
     filePath: '/data/data/1.m4a', // FilePath:音效文件路径,本地路径和网络URL均可
     loop: 1 // Loop：循环播放次数,大于等于0,默认值0表示无限循环
   }
   ```
2. 调用[GameMediaEngine.playLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section43433259718)方法，播放本地音效。

   ```
   gameMediaEngine.playLocalAudioClip(localAudioInfo); // localAudioInfo:本地音效文件信息
   ```
3. 音效播放状态更新时，可在EventHandler接口的[onAudioClipStateChangedNotify](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section1379514121414)方法中实现该事件的回调处理。

   ```
   onAudioClipStateChangedNotify(localAudioClipStateInfo: LocalAudioClipStateInfo) {
     console.log('onTransferOwner : state=' + localAudioClipStateInfo.state + ', soundId=' + localAudioClipStateInfo.soundId + ', reason=' + localAudioClipStateInfo.reason);
   }
   ```

## 暂停/恢复/停止

1. 播放本地音效过程中，可通过调用如下方法，暂停播放指定音效或所有正在播放的音效。
   * 调用[GameMediaEngine.pauseLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section992018344713)方法，可暂停播放指定的本地音效。

     ```
     mHwRtcEngine.pauseLocalAudioClip(soundId); // soundId:音效ID
     ```
   * 调用[GameMediaEngine.pauseAllLocalAudioClips](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1891015149619)方法，可暂停所有本地音效。

     ```
     mHwRtcEngine.pauseAllLocalAudioClips();
     ```
2. 音效暂停播放后，可通过调用如下方法，恢复指定音效或所有已暂停音效的播放。
   * 调用[GameMediaEngine.resumeLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section157188236618)方法，可恢复播放指定的本地音效。

     ```
     mHwRtcEngine.resumeLocalAudioClip(soundId); // soundId:音效ID
     ```
   * 调用[GameMediaEngine.resumeAllLocalAudioClips](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section355711301766)方法，可恢复播放所有本地音效。

     ```
     mHwRtcEngine.resumeAllLocalAudioClips();
     ```

3. 在播放本地音效过程中，可通过调用如下方法，停止播放指定的本地音效或所有本地音效。
   * 调用[GameMediaEngine.stopLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section123014361964)方法，可停止播放指定的本地音效。

     ```
     mHwRtcEngine.stopLocalAudioClip(soundId); // soundId:音效ID
     ```
   * 调用[GameMediaEngine.stopAllLocalAudioClips](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section175414420615)方法，可停止播放所有本地音效。

     ```
     mHwRtcEngine.stopAllLocalAudioClips();
     ```

## 调节/获取音量系数

1. 在播放本地音效时，可通过调用如下方法，单个调节指定音效或批量调节所有音效的音量系数。

   ![](./img/b6b5a351.png)

   * 本地音效实际播放音量（V）=本地音效音量系数（X）\*所有本地音效的音量系数（Y）%
   * 目前仅支持在播放音效时设置所有本地音效的音量系数，或指定的本地音效音量系数。

   * 调用[GameMediaEngine.setLocalAudioClipsVolume](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section266115217610)方法，设置所有本地音效的音量系数。

     ```
     gameMediaEngine.setLocalAudioClipsVolume(volume); // volume:所有本地音效的音量系数,默认值100
     ```
   * 调用[GameMediaEngine.setVolumeOfLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section15621164715619)方法，设置指定的本地音效音量系数。

     ```
     gameMediaEngine.setVolumeOfLocalAudioClip(soundId, volume); // soundId:音效ID; volume:本地音效的音量系数,默认值100
     ```

2. 在播放本地音效时，可通过调用如下方法，获取指定音效或所有音效的音量系数。
   * 调用[GameMediaEngine.getVolumeOfLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1478113577613)方法，获取指定的本地音效音量系数。

     ```
     gameMediaEngine.getVolumeOfLocalAudioClip(soundId); // soundId:音效ID
     ```
   * 调用[GameMediaEngine.getLocalAudioClipsVolume](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section135661021079)方法，获取所有本地音效的音量系数。

     ```
     gameMediaEngine.getLocalAudioClipsVolume();
     ```
