---
title: "初始化SDK"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612
format: md
---


进入房间前，需要先完成初始化联机对战SDK。

## 前提条件

* 您已[开通联机对战服务](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-enable-0000002395350369)。
* 您已[集成联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-integratingsdk-csharp-0000002395350421)。

## 开发步骤

1. 实现SDK日志打印回调，需要先自定义实现日志文件归档、并发写文件等逻辑。

   ![](./img/aefc3a08.png)

   建议在开发调试阶段使用，发布后可删除。

   ```
   SDKDebugLogger.LogCallBack =(log,logLevel) =>
    {
       switch (logLevel)
       {
           case LogLevel.ERROR:
                Debug.LogError(log);
                break;
           default:
                Debug.Log(log);
                break;
        }
    };
   SDKDebugLogger.APILogCallBack = (apiLog) =>
    {
     // 自定义实现日志打印，记录，归档等操作
     Debug.Log(apiLog);
    };
   ```
2. 设置SDK日志打印级别。

   ![](./img/130992e5.png)

   日志级别默认为OFF，不打印。建议在Debug模式下，设置SDK日志级别。在版本正式发布前，请删除此行代码。

   ```
   SDKDebugLogger.SDKLogLevel = LogLevel.DEBUG;
   ```
3. 设置证书路径和日志打印路径。

   ![](./img/afc5313c.png)

   * 此步骤为必选步骤，如不设置，在初始化时则会报错。
   * 推荐使用Application.persistentDataPath，可以解决平台兼容性问题。

   ```
   SDKCommonConfig.GOBE_STORAGE_PATH = Application.persistentDataPath + "/GOBE" ;
   ```
4. 实例化Client对象，注册[Client.OnInitResult](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#ZH-CN_TOPIC_0000002361516112__p1234210575488)监听回调，并调用[Client.Init](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section138221670168)方法进行初始化。

   ![](./img/13cd2343.png)

   * 为了提升服务的安全性，初始化SDK时，您还可以通过在您的服务器中计算出签名的方式进行安全加固，增强数据防篡改能力，具体请参见[使用签名初始化SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-signature-csharp-0000002361510692)。
   * 鉴权时传入“ClientSecret”或“AccessToken”其一即可。基于安全考虑，当您有自己的游戏服务器时，推荐您使用AccessToken。如果同时传入，将使用传入的AccessToken作为最终AGC接入凭证。“AccessToken”主要是通过在您的服务器中编写一段调用获取Token接口的代码进行获取，具体请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/games-guides/obtaintoken-0000002361510748)。

   ```
   ClientConfig clientConfig = new ClientConfig(){
       ClientAppId = "{ClientAppId}", // 应用ID，具体获取可参见准备游戏信息
       ClientOpenId = "{ClientOpenId}", // 玩家ID，区别不同用户
       ClientId = "{ClientId}", // 客户端ID，具体获取可参见准备游戏信息
       ClientSecret = "{ClientSecret}", // 客户端密钥，具体获取可参见准备游戏信息
       AccessToken = "{AccessToken}",  // AGC接入凭证（推荐）
   };
   Client client = new Client(clientConfig);
   // 注册Client.OnInitResult监听回调
   client.OnInitResult= response =>
     {
         if (response.RtnCode == 0) {
              // 初始化成功，处理游戏相应逻辑
        }else{
              // 初始化失败，重新初始化或联系华为技术支持
        }
     } ;

   Global.client.Init(); // Global是自定义类，详情可参考官方的Demo
   ```
5. 在退出游戏应用或者联机对战服务之前，调用[Client.Destroy](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section157274915581)方法销毁Client实例。

   ```
   Application.quitting += client.Destroy();
   ```
