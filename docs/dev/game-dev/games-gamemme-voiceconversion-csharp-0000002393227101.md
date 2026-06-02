---
title: "语音变声"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voiceconversion-csharp-0000002393227101
---

游戏多媒体语音变声能力，通过对实时语音进行变声处理，可让聊天环境变得更加有趣，提升语音体验。目前，游戏多媒体服务提供了机器人、怪兽、萝莉等多款声音特效。

## 前提条件

* 您已[集成游戏多媒体基础SDK、实时语音和变声模块](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-native-0000002393227057)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-engine-csharp-native-0000002393227065#section10640141401010)。
* 您已[加入房间](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-voice-joinroom-roomid-csharp-0000002393227073)。
* 如需测试变声效果，需[开启麦克风](https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-enablemic-csharp-0000002359706970)。

## 开发步骤

1. 调用[GameMediaEngine.EnableVoiceConversion](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section89210581872)方法开启/关闭房间内语音变声。

   ```
   // roomId：房间ID; voiceType：变声类型,原声类型表示关闭变声，其他枚举值请参考voiceType
   engine.EnableVoiceConversion(roomId, voiceType, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       int result = data.Get<int>("data");
       // 处理业务逻辑
   }));
   ```
2. 如需查询当前房间的变声类型，可通过调用[GameMediaEngine.GetVoiceConversionType](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section18778641592)方法获取。如变声类型为原声类型，则表示已关闭变声。

   ```
   engine.GetVoiceConversionType(roomId, new OpenHarmonyJSCallback(args =>{
       OpenHarmonyJSObject data = args[0];
       string result = data.Get<string>("data");
       // 处理业务逻辑
   }));
   ```
3. 如需测试变声效果，可通过调用[GameMediaEngine.EnableEarsBack](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section76434111117)方法开启耳返，即可听到发声者自己的语音变声效果。

   ```
   // enable：是否开启耳返,true表示开启,false表示关闭
   engine.EnableEarsBack(enable, new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       int result = data.Get<int>("data");
       // 处理业务逻辑
   }));
   ```
4. 如需查询耳返是否已开启，可通过调用[GameMediaEngine.IsEarsBackEnable](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-csharp-native-0000002392723521#section62336012136)方法获取耳返的开启状态。

   ```
   engine.IsEarsBackEnable(new OpenHarmonyJSCallback(args => {
       OpenHarmonyJSObject data = args[0];
       string result = data.Get<string>("data");
       // 处理业务逻辑
   }));
   ```
