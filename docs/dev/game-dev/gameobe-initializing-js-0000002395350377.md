---
title: "初始化SDK"
original_url: /docs/dev/game-dev/gameobe-initializing-js-0000002395350377
format: md
upstream_id: dev/game-dev/gameobe-initializing-js-0000002395350377
last_sync: 2026-06-07
sync_hash: b1760010
---
进入房间前，需要先完成初始化联机对战SDK。

## 前提条件

* 您已[开通联机对战服务](/docs/dev/game-dev/gameobe-enable-0000002395350369)。
* 您已[集成联机对战SDK](/docs/dev/game-dev/gameobe-integratingsdk-js-0000002361670432)。

## 开发步骤

1. 设置全局变量global，方便后续示例代码使用。

   ![](./img/d4cc4d88.png)

   如果运行时环境已有global对象，也可直接将实例挂载在global对象上，或另外声明对象接收。

   ```
   // 设置全局变量global
   let global = {
     client: null, // Client实例
     room: null,   // Room实例
     group: null,  // Group实例
     player: null, // Player实例
   }
   ```
2. 设置SDK日志打印级别。

   ![](./img/9421d0ca.png)

   日志级别默认为OFF，不打印。建议在Debug模式下，设置SDK日志级别。在版本正式发布前，请删除此行代码。

   ```
   window.GOBE.Logger.level = window.GOBE.LogLevel.INFO;
   ```
3. 实例化Client对象，注册[Client.onInitResult](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section1527014524285)监听回调，并调用[Client.init](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section138221670168)方法进行初始化。

   ![](./img/a0cfed43.png)

   * 为了提升服务的安全性，初始化SDK时，您还可以通过在您的服务器中计算出签名的方式进行安全加固，增强数据防篡改能力，具体请参见[使用签名初始化SDK](/docs/dev/game-dev/gameobe-signature-js-0000002395350417)。
   * 鉴权时传入“clientSecret”或“accessToken”其一即可。基于安全考虑，当您有自己的游戏服务器时，推荐您使用accessToken。如果同时传入，将使用传入的accessToken作为最终AGC接入凭证。“accessToken”主要是通过在您的服务器中编写一段调用获取Token接口的代码进行获取，具体请参见[获取Token](/docs/dev/game-dev/obtaintoken-0000002361510748)。
   * “platform”和“cerPath”分别表示平台类型和证书路径，两个字段配套使用。
     + 当在Cocos Creator引擎中发布Android游戏时，“platform”字段应填入“GOBE.PlatformType.ANDROID”，“cerPath”字段应填入cer证书的绝对路径。
     + 当在Cocos Creator引擎中发布HarmonyOS 5.0及以上游戏时，“platform”字段应填入“GOBE.PlatformType.OHOS”，“cerPath”字段应填入cer证书的绝对路径。
     + 若发布非Android和HarmonyOS 5.0及以上游戏，则“cerPath”字段无需填写。

   ```
   // 实例化Client对象
   global.client = new window.GOBE.Client({
     appId: '101*****795',              // 应用ID，具体获取可参见准备游戏信息
     openId: '258*****049',             // 玩家ID，区别不同用户
     clientId: '382*****115',           // 客户端ID，具体获取可参见准备游戏信息
     clientSecret: 'C1BD67*****52DD13', // 客户端密钥，具体获取可参见准备游戏信息
     accessToken: '3AC36D*****2B428E',  // AGC接入凭证(推荐)
     platform: {platform},          // 平台类型（选填）
     cerPath: '{cerPath}',          // 证书绝对路径（选填）
   });
   // 注册Client.onInitResult监听回调
   global.client.onInitResult((resultCode) => {
     if(resultCode === 0){
       // 初始化成功，做相关游戏逻辑处理
     } else {
       // 初始化失败，重新初始化或联系华为技术支持
     }
   });
   let playerId = '';
   // 调用Client.init方法进行初始化
   global.client.init().then((client) => {
     // 已完成初始化请求，具体初始化结果通过onInitResult回调获取
     playerId = client.playerId;
   }).catch((err) => {
     // 初始化请求失败，重新初始化或联系华为技术支持
   });
   ```
4. 在退出游戏应用或者联机对战服务之前，调用[Client.destroy](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section157274915581)方法销毁Client实例。

   ```
   global.client.destroy();
   ```
