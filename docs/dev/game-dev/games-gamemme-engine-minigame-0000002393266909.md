---
title: "JS（小游戏）"
original_url: /docs/dev/game-dev/games-gamemme-engine-minigame-0000002393266909
format: md
---


调用相关接口需要先完成初始化，初始化是通过创建实例来实现的。

![](./img/8dcb3c20.png)

游戏多媒体服务语音相关功能需使用麦克风，因此，您需要在设备中打开应用的麦克风访问权限。

## 前提条件

* 您已[开通游戏多媒体服务](/docs/dev/game-dev/games-gamemme-enable-0000002338511697)。
* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-minigame-0000002393266905)。

## 创建对象

在进行录制与播放语言信息等操作前，需先完成游戏多媒体对象的创建。

![](./img/4373e535.png)

游戏启动后，仅需要维护一个对象即可。

1. 构造游戏多媒体对象参数。

   ![](./img/c89900e6.png)

   * 为了提升服务的安全性，初始化SDK时，您还可以通过在您的服务器中计算出签名的方式进行安全加固，增强数据防篡改能力，具体请参见[使用签名初始化SDK](/docs/dev/game-dev/games-initializing-signatures-minigame-0000002393227213)。如果您已[开启安全加固](/docs/dev/game-dev/games-gamemme-console-servicemanagement-0000002338391901#section92517364165)，则必须使用签名初始化SDK。
   * “clientSecret”和“cpAccessToken”传入其一即可。基于安全考虑，推荐您使用cpAccessToken。如果同时传入，将使用传入的“cpAccessToken”作为最终AGC接入凭证。“cpAccessToken”主要是通过在您的服务器中编写一段调用获取Token接口的代码进行获取，具体请参见[获取Token（项目级）](/docs/dev/game-dev/games-appendix-token-0000002304569840)。

   ```
   const options: EngineCreateParams = {
     openId: '123',                    // 玩家ID
     clientId: '1a2b3c**4d5e6f',       // 客户端ID,具体获取请参见准备游戏信息
     appId: '123***57',                // 应用ID,具体获取请参见准备游戏信息
     clientSecret: 'a0b9c8***d7e6f5',  // 客户端ID对应的密钥,具体获取请参见准备游戏信息
     cpAccessToken: '1qa2ws***3zx3dc', // AGC接入凭证（推荐）
     apiKey: 'DAE***wnKd'              // API密钥（凭据）,仅实现语音转文本功能时需要,具体获取请参见准备游戏信息
   };
   ```
2. 调用[GameMediaEngine.create](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section366172114616)方法创建游戏多媒体对象。

   ```
   GameMediaEngine.create(options).then((gameMediaEngine) => {
     const gameMediaEngine = gameMediaEngine;
   }).catch((e) => {
     // 初始化多媒体对象异常
     console.log("code:" + e.code + ", msg:" + e.message); // 异常类型请参见ErrorResult
   });
   ```

   ![](./img/80793a00.png)

   创建游戏多媒体对象会自动检测运行环境是否兼容游戏多媒体服务SDK。当运行环境为华为快游戏、微信小游戏、支付宝小游戏和字节跳动小游戏时，若版本太低不支持游戏多媒体服务SDK，会返回错误码[3002](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-errorresult-minigame-0000002358963652#ZH-CN_TOPIC_0000002358963652__p16679121734016)。当运行环境为华为快游戏、微信小游戏、支付宝小游戏和字节跳动小游戏以外的环境时，会返回错误码[3001](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-errorresult-minigame-0000002358963652#ZH-CN_TOPIC_0000002358963652__p14444914145719)。

## 销毁对象

如需退出游戏应用，建议先完成对象销毁，减少内存资源的占用。

1. 调用[GameMediaEngine.destroy](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section36632216465)方法销毁游戏多媒体对象。

   ```
   gameMediaEngine.destroy();
   ```
2. 销毁游戏多媒体对象时，可在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gamemediaengine-minigame-0000002392643589#section1487511413163)接口中监听“destroyEngine”事件，并实现该事件的回调处理。

   ```
   GameMediaEngine.on("destroyEngine", (code: number, msg: string) => this.destroyEngine());
   private destroyEngine() {
       // 资源清理
   }
   ```
