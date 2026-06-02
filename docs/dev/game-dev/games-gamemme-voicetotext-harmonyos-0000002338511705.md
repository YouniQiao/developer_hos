---
title: "HarmonyOS 5.0及以上"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voicetotext-harmonyos-0000002338511705
---

## 前提条件

* 您已[开启语音转文本功能](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-console-servicemanagement-0000002338391901#section157881245131518)。
* 您已[集成游戏多媒体基础SDK和语音消息模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-harmonyos-0000002304632332#ZH-CN_TOPIC_0000002382173737__zh-cn_topic_0000001717945166_li16904125719267)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。
* 您已[开通机器学习服务](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-agc-harmonyos-0000001245919249#section13396143595911)。

## 开发步骤

1. 实例化[VoiceParam](https://developer.huawei.com/consumer/cn/doc/games-references/voiceparam-harmonyos-0000002392643585)对象，构造语音转文本的必要参数。

   ```
   let voiceParam: VoiceParam = {
     languageCode: 'zh'
   };
   ```
2. 调用[GameMediaEngine.startRecordAudioToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section136231037195510)方法开始录音。

   ![](./img/d9084f98.png)

   录入语音的时间最长10s，超过10s将自动结束录音。

   ```
   gameMediaEngine.startRecordAudioToText(voiceParam);
   ```
3. 调用[GameMediaEngine.stopRecordAudioToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1610815395556)方法停止录音，语音内容将自动转写成文本内容。

   ![](./img/1e04bb5a.png)

   如果录入的语音无实质内容，则将会导致语音转文本失败。

   ```
   gameMediaEngine.stopRecordAudioToText();
   ```
4. 当转写文本完成时，可在EventHandler接口的[onVoiceToText](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section89281254516)方法中实现该事件的回调处理。

   ```
   onVoiceToText(text: string, code: number, msg: string) {
      console.log('onVoiceToText : text=' + text + ', code=' + code + ', reason=' + msg);
   }
   ```
