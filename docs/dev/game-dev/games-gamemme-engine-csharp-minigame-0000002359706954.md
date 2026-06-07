---
title: "C#（小游戏）"
original_url: /docs/dev/game-dev/games-gamemme-engine-csharp-minigame-0000002359706954
format: md
---


调用相关接口需要先完成初始化，初始化是通过创建实例来实现的。

![](./img/de225340.png)

游戏多媒体服务语音相关功能需使用麦克风，因此，您需要在设备中打开应用的麦克风访问权限。

## 前提条件

* 您已[开通游戏多媒体服务](/docs/dev/game-dev/games-gamemme-enable-0000002338511697)。
* 您已[集成游戏多媒体SDK](/docs/dev/game-dev/games-gamemme-integratingsdk-csharp-minigame-0000002359706946)。

## 创建实例

在进行加入房间等操作前，需先完成游戏多媒体实例的创建。

![](./img/c9383613.png)

游戏启动后，仅需要维护一个实例即可。

1. 引入头文件。

   ```
   using GMME.MiniGames;
   ```
2. 构造游戏多媒体实例参数。

   ![](./img/e11c7ac5.png)

   * 为了提升服务的安全性，初始化SDK时，您还可以通过在您的服务器中计算出签名的方式进行安全加固，增强数据防篡改能力，具体请参见[使用签名初始化SDK](/docs/dev/game-dev/games-initializing-signatures-csharp-0000002359707102)。如果您已[开启安全加固](/docs/dev/game-dev/games-gamemme-console-servicemanagement-0000002338391901#section92517364165)，则必须使用签名初始化SDK。
   * “ClientSecret”和“CpAccessToken”二者传其一即可。基于安全考虑，推荐您使用CpAccessToken。如果同时传入，将使用传入的“CpAccessToken”作为最终AGC接入凭证。“CpAccessToken”主要是通过在您的服务器中编写一段调用获取Token接口的代码进行获取，具体请参见[获取Token（项目级）](/docs/dev/game-dev/games-appendix-token-0000002304569840)。

   ```
   EngineCreateParamsForMiniGames engineParams = new();
   engineParams.OpenId = openId;                          // 玩家ID
   engineParams.ClientId = clientId;                      // 客户端ID,具体获取请参见准备游戏信息
   engineParams.ClientSecret = clientSecret;              // 客户端密钥,具体获取请参见准备游戏信息
   engineParams.AppId = appId;                            // 应用ID,具体获取请参见准备游戏信息
   engineParams.ApiKey = apiKey;                          // API密钥（凭据）,仅实现语音转文本功能时需要,具体获取请参见准备游戏信息
   engineParams.CpAccessToken = cpAccessToken;            // AGC接入凭证（推荐）
   engineParams.IsEnableAudioMsg = true;                  // 是否启用语音消息特性,true表示启用,false表示不启用
   engineParams.IsEnableRtm = true;                       // 是否启用RTM特性,true表示启用,false表示不启用
   ```
3. 调用[GameMediaEngineForMiniGames.Create](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section8688204817219)方法创建游戏多媒体实例。

   ```
   IGameMMEEventHandlerForMiniGames callBackHandler = new(); // 创建回调对象
   ...
   GameMediaEngineForMiniGames.GetInstance().Create(engineParams, callBackHandler);
   GameMediaEngineForMiniGames engine = GameMediaEngineForMiniGames.GetInstance();
   ```
4. 创建游戏多媒体实例时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnCreate](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section151452274152)进行了封装，您只需注册OnEngineCreateCompleteEvent事件监听，并实现EngineCreateCompleteCallback委托函数即可。

   ```
   // 对创建事件进行监听
   callBackHandler.OnEngineCreateCompleteEvent += EngineCreateImpl;

   // 监听处理
   void EngineCreateImpl(int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```

## 销毁实例

如需退出游戏应用，建议先完成实例销毁，减少内存资源的占用。

1. 引入头文件。

   ```
   using GMME.MiniGames;
   ```
2. 调用[GameMediaEngineForMiniGames.Destory](https://developer.huawei.com/consumer/cn/doc/games-references/gamemediaengineforminigames-csharp-minigame-0000002358963772#section133755208521)方法来销毁实例。

   ```
   engine.Destroy();
   ```
3. 销毁实例时，您可进行相关回调处理。由于游戏多媒体SDK已对回调函数[OnDestroyEngine](https://developer.huawei.com/consumer/cn/doc/games-references/igamemmeeventhandlerforminigames-csharp-minigame-0000002392643789#section131942010470)进行了封装，您只需注册OnDestroyEngineCompleteEvent事件监听，并实现DestroyEngineCompleteCallback委托函数即可。

   ```
   // 对销毁事件进行监听
   callBackHandler.OnDestroyEngineCompleteEvent += DestroyEngineImpl;

   // 监听处理
   void DestroyEngineImpl(int code, string msg)
   {
      // 根据返回结果做相应业务逻辑处理
   }
   ```
