---
title: "在线匹配"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-matchplayer-csharp-0000002395190569
---

玩家个人通过发起在线匹配的方式，根据自定义规则中设置的等级、胜率等属性进行择优匹配。例如，当100个玩家选择了某一类型的游戏模式（比如排位赛等）进行匹配时，服务器根据这100个玩家的等级和胜率等自定义条件，为玩家进行匹配。

## 前提条件

* 您已[初始化联机对战SDK](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-initializing-csharp-0000002361510612)。
* 您已在AGC控制台[配置匹配规则](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-ruleconfiguration-0000002361670428)。

## 开发步骤

1. 调用[Client.MatchPlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section28079912514)方法进行在线匹配，并注册[Client.OnMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section10313116544)监听回调用于监听匹配结果。

   ![](./img/b5c146c1.png)

   * 由于在线匹配方式需要和AGC控制台中配置的[匹配规则](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-ruleconfiguration-0000002361670428#section11254127113416)配合使用，因此在线匹配参数中的属性需要与[MatchCode](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchplayerconfig-csharp-0000002395196085#ZH-CN_TOPIC_0000002395196085__p87772413116)所属规则中配置的[玩家属性](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-ruleconfiguration-0000002361670428#ZH-CN_TOPIC_0000002361670428__p161123117394)一一对应。
   * [Client.OnMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section10313116544)监听接口同时监听在线匹配和[组队匹配](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-groupmatch-csharp-0000002361670528)的匹配结果，若您的游戏中同时存在在线匹配和组队匹配的场景，只需注册一次即可。

   ```
   Dictionary<string, string> matchParams = new Dictionary<string, string>(); // 自定义匹配参数，最多支持5条
   matchParams.Add("level", "10"); // 匹配参数的属性需要与matchCode所属规则中配置的属性一一对应
   matchParams.Add("matchRule", "{matchRule}");

   MatchPlayerConfig matchPlayerConfig = new MatchPlayerConfig()
   {
   	MatchCode = "{MatchCode}",
   	PlayerInfo = new MatchPlayerInfoParam
   	{
   		PlayerId = "{PlayerId}",
   		MatchParams = matchParams
   	},
           teamInfo = new MatchTeamInfoParam  // 仅非对称匹配时需要设置teamInfo，用于存放队伍编号值
   	{
   		MatchParams = {
   			teamNumber = "{teamNumber}", // 即matchCode所属规则中配置的队伍编号值
   		}
   	}
   };
   PlayerConfig playerConfig = new PlayerConfig
   {
   	CustomPlayerStatus = {CustomPlayerStatus},
   	CustomPlayerProperties = "{CustomPlayerProperties}"
   };

   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.MatchPlayer(matchPlayerConfig, playerConfig, response =>
   {
   	if (response.RtnCode == 0)
   	{
   		// 匹配成功逻辑
   	}
   	else
   	{
   		// 匹配失败逻辑
   	}
   });
   client.OnMatch = response =>
               {
                   if ((int) ErrorCode.PLAYER_MATCH_CANCELED == response.RtnCode) {
                       // 匹配取消
                   }
                   else if ((int) ErrorCode.COMMON_OK == response.RtnCode ||
                            (int) ErrorCode.PLAYER_MATCH_CANCEL_WHEN_SUCCESS == response.RtnCode)
                   {
                       // 匹配成功
                       Global.Room = response.Room;
                   }
                   else
                  {
                       // 匹配超时等其他匹配异常
                   }
               };
   ```
