---
title: "C#（Native）"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voicetotext-csharp-native-0000002393267033
format: md
---


## 前提条件

* 您已[开启语音转文本功能](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-console-servicemanagement-0000002338391901#section157881245131518)。
* 您已[集成游戏多媒体基础SDK和语音消息模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。
* 您已[开通机器学习服务](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/enable-service-0000001050038078)。

## 开发步骤

1. 实例化VoiceParam对象，构造语音转文本的必要参数。

   ```
   VoiceParam voiceParam = new VoiceParam
   {
        LanguageCode = "zh"
   };
   ```
2. 调用[GameMediaEngine.StartRecordAudioToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section136231037195510)方法开始录音。

   ![](./img/a47c9cb3.png)

   录入语音的时间最长10s，超过10s将自动结束录音。

   ```
   engine.StartRecordAudioToText(voiceParam);
   ```
3. 调用[GameMediaEngine.StopRecordAudioToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section1610815395556)来停止录音，语音内容将自动转写成文本内容。

   ![](./img/f4744f8e.png)

   如果录入的语音无实质内容，则将会导致语音转文本失败。

   ```
   engine.StopRecordAudioToText();
   ```
4. 当语音转文本时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[onVoiceToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656#section1289143220123)进行了封装，您只需注册OnVoiceToTextCompleteEvent事件监听，并实现VoiceToTextCompleteCallback委托函数即可。

   ```
   // 对语音转文本事件进行监听
   callBackHandler.OnVoiceToTextCompleteEvent += new VoiceToTextCompleteCallback(VoiceToTextImpl);

   // 监听处理
   void VoiceToTextImpl(string text, int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
