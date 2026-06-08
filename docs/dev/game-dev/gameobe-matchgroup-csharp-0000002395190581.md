---
title: "队伍匹配"
original_url: /docs/dev/game-dev/gameobe-matchgroup-csharp-0000002395190581
format: md
upstream_id: dev/game-dev/gameobe-matchgroup-csharp-0000002395190581
last_sync: 2026-06-07
sync_hash: 44ead694
---
玩家还可以先组建队伍，然后通过发起组队匹配的方式，并根据自定义规则中设置的等级、胜率等属性进行择优匹配。此种方式主要适用于好友组队开黑等玩法。

## 前提条件

* 您已在AGC控制台[配置匹配规则](/docs/dev/game-dev/gameobe-ruleconfiguration-0000002361670428)。
* 玩家已[创建队伍](/docs/dev/game-dev/gameobe-creategroup-csharp-0000002395350465)。

## 开发步骤

1. 调用[Client.MatchGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section3470101083815)方法进行组队匹配，并注册[Client.OnMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section10313116544)监听回调用于监听匹配结果。

   ![](./img/2f2ab5f7.png)

   * 由于在线匹配方式需要和AGC控制台中配置的[匹配规则](/docs/dev/game-dev/gameobe-ruleconfiguration-0000002361670428#section11254127113416)配合使用，因此在线匹配参数中的属性需要与[MatchCode](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchgroupconfig-csharp-0000002361516140#ZH-CN_TOPIC_0000002361516140__p87772413116)所属规则中配置的[玩家属性](/docs/dev/game-dev/gameobe-ruleconfiguration-0000002361670428#ZH-CN_TOPIC_0000002361670428__p56619400352)一一对应。
   * [Client.OnMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section10313116544)监听接口同时监听[在线匹配](/docs/dev/game-dev/gameobe-matchplayer-csharp-0000002395190569)和组队匹配的匹配结果，若您的游戏中同时存在在线匹配和组队匹配的场景，只需注册一次即可。

   ```
   // 创建匹配信息
   MatchPlayerInfoParam matchPlayerInfoParam = new MatchPlayerInfoParam();
   matchPlayerInfoParam.PlayerId = "{PlayerId}";

   Dictionary<string, string> matchParams = new Dictionary<string, string>();
   matchParams.Add("level", "{level}"); // 匹配参数的属性需要与matchCode所属规则中配置的属性一一对应
   matchPlayerInfoParam.MatchParams = matchParams;

   MatchPlayerInfoParam[] playerInfos = new MatchPlayerInfoParam[1];
   playerInfos[0] = matchPlayerInfoParam;

   // 封装 matchGroupConfig
   MatchGroupConfig matchGroupConfig = new MatchGroupConfig();
   matchGroupConfig.MatchCode = "{MatchCode }"; // matchCode为AGC控制台上已配置的匹配规则对应的Code
   matchGroupConfig.PlayerInfos = playerInfos;

   // 封装 playerConfig
   PlayerConfig playerConfig = new PlayerConfig();
   playerConfig.CustomPlayerStatus = {CustomPlayerStatus};
   playerConfig.CustomPlayerProperties = "{CustomPlayerProperties}";

   Client client = Global.client; // 从Global类的client属性中获取初始化后的client对象
   client.MatchGroup(matchGroupConfig, playerConfig, response => {
   	Debug.Log("组队匹配中：" + Util.ErrorMessage(response));
           // 开始匹配
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
                   }
                   else
                  {
                       // 匹配超时等其他匹配异常
                   }
               };
   ```
2. 当队长发起组队匹配时，队伍中的其他成员可通过实现[Group.OnMatchStart](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004#ZH-CN_TOPIC_0000002361676004__p11416198183116)委托监听该事件，并调用[Client.MatchGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112#section3470101083815)方法发起组队匹配。

   ```
   Global.Group.OnMatchStart = OnMatchStart;
   void OnMatchStart() {
   	if (!this.isOwner) {
   		// 匹配开始，队伍成员发起组队匹配
                   Global.client.MatchGroup(matchGroupConfig, playerConfig, response => {
   	                if (response.RtnCode == 0)
   	                {
   		                // 匹配成功逻辑
   	                }
   	                else
   	                {
   		                // 匹配失败逻辑
   	                }
                   });
   	}
   }
   ```
