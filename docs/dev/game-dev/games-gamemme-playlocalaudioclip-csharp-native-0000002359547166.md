---
title: "C#（Native）"
original_url: /docs/dev/game-dev/games-gamemme-playlocalaudioclip-csharp-native-0000002359547166
format: md
---


## 前提条件

* 您已[集成游戏多媒体基础SDK和实时语音模块](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。

## 开始播放

1. 实例化[LocalAudioInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-localaudioinfo-csharp-native-0000002358963764)对象，构造本地音效文件的必要参数。

   ```
   LocalAudioInfo localAudioInfo = new LocalAudioInfo();
   localAudioInfo.SoundId = 1;                                          // SoundId: 音效ID,大于等于0
   localAudioInfo.Volume = 100;                                         // Volume: 音效音量系数,取值范围[0, 100],默认值100
   localAudioInfo.FilePath = Application.temporaryCachePath + "/1.m4a"; // FilePath: 音效文件路径,本地路径和网络URL均可
   localAudioInfo.Loop = 1 ;                                            // Loop: 循环播放次数,大于等于0,默认值0表示无限循环
   ```
2. 调用[GameMediaEngine.PlayLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section10826204201816)方法，播放本地音效。

   ```
   engine.PlayLocalAudioClip(localAudioInfo, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       int result = data.Get<int>("data");
       // 处理业务逻辑
   }));
   ```
3. 音效播放状态更新（如播放、暂停等）时，您可执行相关回调处理。由于游戏多媒体SDK已对回调函数[onAudioClipStateChangedNotify](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section12505121617242)进行了封装，您只需注册OnAudioClipStateChangedNotifyEvent事件监听，并实现AudioClipStateChangedNotifyCallback委托函数即可。

   ```
   // 对音效播放状态更新事件进行监听
   callBackHandler.OnAudioClipStateChangedNotifyEvent += AudioClipStateChangeImpl;

   void AudioClipStateChangeImpl(AudioPlayStateInfo audioPlayStateInfo)
   {
       Loom.QueueOnMainThread(() =>
       {
           // 监听处理相关事件
       }
   }
   ```

## 暂停/恢复/停止

1. 播放本地音效过程中，可通过调用如下方法，暂停播放指定音效或所有正在播放的音效。
   * 调用[GameMediaEngine.PauseLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section69242027182211)方法，可暂停播放指定的本地音效。

     ```
     engine.PauseLocalAudioClip(soundId, new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         int result = data.Get<int>("data");
         // 处理业务逻辑
     }));
     ```
   * 调用[GameMediaEngine.PauseAllLocalAudioClips](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section091563472318)方法，可暂停播放所有本地音效。

     ```
     engine.PauseAllLocalAudioClips(new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```
2. 音效暂停播放后，可通过调用如下方法，恢复指定音效或所有已暂停音效的播放。
   * 调用[GameMediaEngine.ResumeLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section178782410246)方法，可恢复播放指定的本地音效。

     ```
     engine.ResumeLocalAudioClip(soundId, new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         int result = data.Get<int>("data");
         // 处理业务逻辑
     }));
     ```
   * 调用[GameMediaEngine.ResumeAllLocalAudioClips](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section557111913252)方法，可恢复播放所有本地音效。

     ```
     engine.ResumeAllLocalAudioClips(new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```

3. 在播放本地音效过程中，可通过调用如下方法，停止播放指定音效或所有正在播放的音效。
   * 调用[GameMediaEngine.StopLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section14885336197)方法，可停止播放指定的本地音效。

     ```
     engine.StopLocalAudioClip(soundId, new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         int result = data.Get<int>("data");
         // 处理业务逻辑
     }));
     ```
   * 调用[GameMediaEngine.StopAllLocalAudioClips](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section9317188112116)方法，可停止播放所有本地音效。

     ```
     engine.StopAllLocalAudioClips(new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```

## 调节/获取音量系数

1. 在播放本地音效时，可通过调用如下方法，单个调节指定音效或批量调节所有音效的音量系数。

   ![](./img/f4b1d033.png)

   * 本地音效实际播放音量（V）=本地音效音量系数（X）\*所有本地音效的音量系数（Y）%
   * 目前仅支持在播放音效时设置所有本地音效的音量系数，或指定的本地音效音量系数。

   * 调用[GameMediaEngine.SetLocalAudioClipsVolume](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section14667151262818)方法，设置所有本地音效的音量系数。

     ```
     engine.SetLocalAudioClipsVolume(volume, new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```
   * 调用[GameMediaEngine.SetVolumeOfLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section156271198279)方法，设置指定的本地音效音量系数。

     ```
     engine.SetVolumeOfLocalAudioClip(soundId, volume, new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```

2. 在播放本地音效时，可通过调用如下方法，获取指定音效或所有音效的音量系数。
   * 调用[GameMediaEngine.GetVolumeOfLocalAudioClip](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1396123213297)方法，获取指定的本地音效音量系数。

     ```
     engine.GetVolumeOfLocalAudioClip(soundId, new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```
   * 调用[GameMediaEngine.GetLocalAudioClipsVolume](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section19514926103017)方法，获取所有本地音效的音量系数。

     ```
     engine.GetLocalAudioClipsVolume(new OpenHarmonyJSCallback(args => {
         OpenHarmonyJSObject data = args[0];
         string result = data.Get<string>("data");
         // 处理业务逻辑
     }));
     ```
