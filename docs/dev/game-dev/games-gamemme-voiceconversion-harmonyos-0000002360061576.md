---
title: "语音变声"
original_url: /docs/dev/game-dev/games-gamemme-voiceconversion-harmonyos-0000002360061576
format: md
upstream_id: dev/game-dev/games-gamemme-voiceconversion-harmonyos-0000002360061576
last_sync: 2026-06-07
sync_hash: 74bd9f80
---
游戏多媒体语音变声能力，通过对实时语音进行变声处理，可让聊天环境变得更加有趣，提升语音体验。目前，游戏多媒体提供了机器人、怪兽、萝莉等多款声音特效。

## 前提条件

* 您已[集成游戏多媒体基础SDK、实时语音和变声模块](/docs/dev/game-dev/games-gamemme-integratingsdk-harmonyos-0000002304632332#ZH-CN_TOPIC_0000002382173737__zh-cn_topic_0000001717945166_li16904125719267)。
* 您已[创建游戏多媒体实例](/docs/dev/game-dev/games-gamemme-engine-harmonyos-0000002304472616#section1093713161034)。
* 您已[加入房间](/docs/dev/game-dev/games-gamemme-voice-joinroom-roomid-harmonyos-0000002393661673)。

* 如需测试变声效果，需[开启麦克风](/docs/dev/game-dev/games-gamemme-enablemic-harmonyos-0000002393621541)。

## 开发步骤

1. 调用[GameMediaEngine.enableVoiceConversion](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1697917281186)方法开启/关闭房间内语音变声。

   ```
   gameMediaEngine.enableVoiceConversion(roomId, voiceType); // roomId：自定义的房间ID;voiceType：变声类型,原声类型表示关闭变声，其他枚举值请参考VoiceType
   ```
2. 如需查询当前房间的变声类型，可通过调用[GameMediaEngine.getVoiceConversionType](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section185397466105)方法获取。如变声类型为原声类型，则表示已关闭变声。

   ```
   const type: VoiceType = await gameMediaEngine.getVoiceConversionType(roomId); // roomId：自定义的房间ID
   ```
3. 如需测试变声效果，可通过调用[GameMediaEngine.enableEarsBack](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section1517010421127)方法开启耳返，即可听到发声者自己的语音变声效果。

   ```
   gameMediaEngine.enableEarsBack(true);
   ```
4. 如需查询耳返是否已开启，可通过调用[GameMediaEngine.isEarsBackEnable](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-harmonyos-0000002392643485#section777841881417)方法获取耳返的开启状态。

   ```
    const status: boolean = await gameMediaEngine.isEarsBackEnable();
   ```
