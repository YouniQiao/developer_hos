---
title: "HarmonyOS 5.0及以上"
original_url: /docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616
format: md
---


调用相关接口需要先完成初始化，初始化是通过创建实例来实现的。

![](./img/22a6b700.png)

游戏多媒体语音消息功能需要使用麦克风访问权限，而麦克风权限是user\_grant类型，需要动态申请，具体请参见[向用户申请权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)。

## 前提条件

* 您已[开通游戏多媒体服务](/docs/dev/game-dev/games-gamemme-enable-0000002338511697)。
* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332)。
* 您已[向用户动态申请麦克风访问权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)。

## 创建实例

在实现游戏多媒体相关功能前，需先完成游戏多媒体实例的创建。

![](./img/1a0922de.png)

游戏启动后，仅需要维护一个实例即可。

1. 构造游戏多媒体实例参数。

   ![](./img/d566886a.png)

   * 为了提升服务的安全性，初始化SDK时，您还可以通过在您的服务器中计算出签名的方式进行安全加固，增强数据防篡改能力，具体请参见[使用签名初始化SDK](/docs/dev/game-dev/games-initializing-signatures-harmonyos-0000002338768945)。如果您已[开启安全加固](/docs/dev/game-dev/games-gamemme-console-servicemanagement-0000002338391901#section92517364165)，则必须使用签名初始化SDK。
   * “clientSecret”和“cpAccessToken”传入其一即可。基于安全考虑，推荐您使用cpAccessToken。如果同时传入，将使用传入的“cpAccessToken”作为最终AGC接入凭证。“cpAccessToken”主要是通过在您的服务器中编写一段调用获取Token接口的代码进行获取，具体请参见[获取Token（项目级）](/docs/dev/game-dev/games-appendix-token-0000002304569840)。

   ```
   import { EngineCreateParams } from '@ohos/hms-multimediaengine-common';

   const options: EngineCreateParams = {
     context: uiAbilityContext         // UIAbilityContext,获取方式请参见应用上下文Context
     openId: '123',                    // 玩家ID
     appId: '123***57',                // 应用ID,具体获取可参见准备游戏信息
     clientId: '1a2b3c***4d5e6f',      // 客户端ID,具体获取可参见准备游戏信息
     clientSecret: 'a0b9c8***d7e6f5',  // 客户端ID对应的密钥,具体获取可参见准备游戏信息
     cpAccessToken: '1qa2ws***3zx3dc', // AGC接入凭证（推荐）
     apiKey: 'DAE***wnKd'              // API密钥（凭据）,仅实现语音转文本功能时需要,具体获取请参见准备游戏信息
   };
   ```
2. 根据使用需要，调用[GameAudioEngine.init](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gameaudioengine-harmonyos-0000002359123380#section366172114616)、[GameVoiceEngine.init](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamevoiceengine-harmonyos-0000002359123376#section366172114616)、[GameRtmEngine.init](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamertmengine-harmonyos-0000002392643489#section366172114616)、[GameSpatialSoundEngine.init](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamespatialsoundengine-harmonyos-0000002392723349#section366172114616)、[GameVoiceConversionEngine.init](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamevoiceconversionengine-harmonyos-0000002358963480#section366172114616)方法初始化相关特性。

   ```
   import { GameAudioEngine } from '@ohos/hms-multimediaengine-audio-msg';
   import { GameVoiceEngine } from '@ohos/hms-multimediaengine-voice';
   import { GameRtmEngine } from '@ohos/hms-multimediaengine-rtm';
   import { GameSpatialSoundEngine } from '@ohos/hms-multimediaengine-spatial-sound';
   import { GameVoiceConversionEngine } from '@ohos/hms-multimediaengine-voice-conversion';

   // 使用语音消息、语音转文本特性前，需先初始化该特性
   let audioEngineCode = GameAudioEngine.init();
   if (audioEngineCode != HWPGMEError.SUCCESS) {
      console.log(`init GameAudioEngine error, code = ` + audioEngineCode);
      return;
   }
   // 使用实时语音或效果音播放特性前，需先初始化该特性
   let voiceEngineCode = GameVoiceEngine.init();
   if (voiceEngineCode != HWPGMEError.SUCCESS) {
      console.log(`init GameVoiceEngine error, code = ` + voiceEngineCode);
      return;
   }
   // 使用实时信令特性前，需先初始化该特性
   let rtmEngineCode = GameRtmEngine.init();
   if (rtmEngineCode != HWPGMEError.SUCCESS) {
      this.logs.push(`init GameRtmEngine error, code = ` + rtmEngineCode);
      return;
   }
   // 使用3D音效特性前，需先初始化该特性
   let spatialSoundEngineCode: number = GameSpatialSoundEngine.init();
   if (spatialSoundEngineCode !== HWPGMEError.SUCCESS) {
       console.log(`init GameSpatialSoundEngine error, code = ` + spatialSoundEngineCode);
       return;
   }
   // 使用语音变声特性前，需先初始化该特性
   let voiceConversionEngineCode: number = GameVoiceConversionEngine.init();
   if (voiceConversionEngineCode !== HWPGMEError.SUCCESS) {
       console.log(`init GameVoiceConversionEngine error, code = ` + voiceConversionEngineCode);
       return;
   }
   ```
3. 调用[GameMediaEngine.create](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section366172114616)方法创建游戏多媒体实例。

   ```
   let gameMediaEngine: GameMediaEngine = null;
   let eventHandler: EventHandler = EventHandlerImpl.GetInstance(); // EventHandlerImpl是自定义类,详情可参考官方的Demo
   GameMediaEngine.create(options, eventHandler).then((engine) => {
     if (!engine) {
       return;
     }
     gameMediaEngine = engine;
   }).catch(e => {
   // 初始化多媒体对象异常
     console.log("code:" + e.code + ", msg:" + e.message); // 异常类型请参见HWPGMEException
   ))
   ```
4. 当创建实例完成后，可在EventHandler接口的[onCreate](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section12289737171019)方法中实现相关回调处理。

   ```
   onCreate(code: number, msg: string) {
     console.log('onCreate : code=' + code + ', msg=' + msg);
   }
   ```

## 销毁实例

如需退出游戏应用，建议先完成实例销毁，减少内存资源的占用。

1. 调用[GameMediaEngine.destroy](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section36632216465)方法，可销毁游戏多媒体对象。

   ```
   GameMediaEngine.destroy().then(() => {
     // 销毁对象成功
   }).catch(err => {
     // 销毁对象失败
     const {code, message} = err;
   });
   ```
2. 当销毁实例完成后，可在EventHandler接口的[onDestroy](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-eventhandler-harmonyos-0000002392723353#section25132046101118)方法中实现相关回调处理。

   ```
   onDestroy(code: number, msg: string) {
     console.log('onDestroy : code=' + code + ', msg=' + msg);
   }
   ```
