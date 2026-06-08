---
title: "C#（小游戏）"
original_url: /docs/dev/game-dev/games-gamemme-voicetotext-csharp-minigame-0000002359547174
format: md
upstream_id: dev/game-dev/games-gamemme-voicetotext-csharp-minigame-0000002359547174
last_sync: 2026-06-07
sync_hash: 0f1b66f5
---
## 前提条件

* 您已[开启语音转文本功能](/docs/dev/game-dev/games-gamemme-console-servicemanagement-0000002338391901#section157881245131518)。
* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-minigame-0000002359706946)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-csharp-minigame-0000002359706954#section10640141401010)。
* 您已[开通机器学习服务](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/enable-service-0000001050038078)。
* 您已申请白名单。

  ![](./img/b27d167f.png)

  当您的应用为JS小游戏或C#小游戏，且需要使用语音转文本功能时，需要申请白名单才可以获取语音转文本完成后的文本内容。请联系华为运营进行申请，或通过智能客服在线提单。

## 开发步骤

1. 调用[GameMediaEngineForMiniGames.UploadAudioMsgFile](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section1666356111311)方法上传语音消息文件。

   ```
   engine.UploadAudioMsgFile("xxx/xxx/20231130XXXXX.m4a", 5000);
   ```
2. 上传语音消息文件时，您可以进行相关回调处理以获取相应的FileId。由于游戏多媒体SDK已对回调函数[OnUploadAudioMsgFile](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section17164622185117)进行了封装，您只需注册OnUploadAudioMsgFileCompleteEvent事件监听，并实现OnUploadAudioMsgFileCallback委托函数即可。

   ```
   // 对上传语音消息文件事件进行监听
   callBackHandler.OnUploadAudioMsgFileCompleteEvent += OnUploadAudioMsgFileCallback;

   // 监听处理
   private void OnUploadAudioMsgFileCallback(string filePath, string fileId, int code, string msg)
   {
       // 根据返回结果做相应业务逻辑处理
   }
   ```
3. 调用[GameMediaEngineForMiniGames.StartAudioMessageToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section17566759124817)方法开始语音消息转文本。

   ![](./img/c43c1bcf.png)

   录入语音的时间最长60s，超过60s将报错。

   ```
   engine.StartAudioMessageToText(fileId, languageCode);
   ```
4. 当语音转文本时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnAudioMessageToText](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section28756523587)进行了封装，您只需注册OnAudioMessageToTextCompleteEvent事件监听，并实现OnAudioMessageToTextCallback委托函数即可。

   ```
   // 对语音转文本事件进行监听
   callBackHandler.OnAudioMessageToTextCompleteEvent += OnAudioMessageToTextCallback;

   // 监听处理
   void OnAudioMessageToTextCallback(int code, string msg, string text, string fileId)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
