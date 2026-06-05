---
title: "JS（小游戏）"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voicetotext-minigame-0000002393227189
format: md
---


## 前提条件

* 您已[开启语音转文本功能](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-console-servicemanagement-0000002338391901#section157881245131518)。
* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-minigame-0000002393266905)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-minigame-0000002393266909#section10640141401010)。
* 您已[开通机器学习服务](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/enable-service-0000001050038078)。
* 您已申请白名单。

  ![](./img/ac9b5648.png)

  当您的应用为JS小游戏或C#小游戏，且需要使用语音转文本功能时，需要申请白名单才可以获取语音转文本完成后的文本内容。请联系华为运营进行申请，或通过智能客服在线提单。

## 开发步骤

1. 调用[GameMediaEngine.uploadAudioMsgFile](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section66813455911)方法上传语音消息文件。

   ```
   gameMediaEngine.uploadAudioMsgFile('xxxxx', 5000);
   ```
2. 语音消息文件上传时，可在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onUploadAudioMsgFile](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section7757652199)”事件，实现该事件的回调处理以获取相应的fileId。

   ```
   GameMediaEngine.on("onUploadAudioMsgFile", (filePath: string, fileId: string, code: number, msg: string) =>   {
       console.log('onUploadAudioMsgFile: filePath=' + filePath + ', fileId=' + fileId + ', code=' + code + ', msg=' + msg);
   });
   ```
3. 调用[GameMediaEngine.startAudioMessageToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section17522142117169)方法开始语音消息转文本。

   ![](./img/846e4af0.png)

   语音的时间最长60s，超过60s将转文本失败。

   ```
   gameMediaEngine.startAudioMessageToText(fileId, languageCode);// 语言编码只支持zh和en-US两种
   ```
4. 当转写文本完成时，可在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“[onAudioMessageToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventname-minigame-0000002392723465#section821715399511)”事件，并实现该事件的回调处理。

   ```
   GameMediaEngine.on("onAudioMessageToText", (code: number, msg: string, text: string, fileId: string) =>   {
       console.log('onAudioMessageToText: code=' + code + ', msg=' + msg + ', text:' + text);
   })
   ```
