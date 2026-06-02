---
title: "队伍匹配"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-matchgroup-js-0000002361510588
---

玩家还可以先组建队伍，然后通过发起组队匹配的方式，并根据自定义规则中设置的等级、胜率等属性进行择优匹配。此种方式主要适用于好友组队开黑等玩法。

## 前提条件

* 您已在AGC控制台[配置匹配规则](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-ruleconfiguration-0000002361670428)。
* 玩家已[创建队伍](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-creategroup-js-0000002361670448)。

## 开发步骤

1. 调用[Client.matchGroup](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section3470101083815)方法进行组队匹配，并注册[Client.onMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section763981272918)监听回调用于监听匹配结果。

   ![](./img/50d5f6b3.png)

   * 由于组队匹配方式需要和AGC控制台中配置的[匹配规则](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-ruleconfiguration-0000002361670428#section11254127113416)配合使用，因此组队匹配参数中的属性需要与[matchCode](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchgroupconfig-js-0000002361675952#ZH-CN_TOPIC_0000002361675952__p11735501214)所属规则中配置的[玩家属性](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-ruleconfiguration-0000002361670428#ZH-CN_TOPIC_0000002361670428__p56619400352)一一对应。
   * [Client.onMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section763981272918)监听接口同时监听[在线匹配](https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-matchplayer-js-0000002361510576)和组队匹配的匹配结果，若您的游戏中同时存在在线匹配和组队匹配的场景，只需注册一次即可。

   ```
   // 组队匹配参数
   const matchGroupConfig = {
     playerInfos: [
       {
         playerId: "{playerId}",
         matchParams: {
           param1: '{param1}', // 匹配参数的属性需要与matchCode所属规则中配置的玩家属性一一对应
           param2: '{param2}', // 例如 'level': 10
         },
       },
     ],
     teamInfo: { // 仅非对称匹配时需要设置teamInfo，用于存放队伍编号值
       matchParams: {
         teamNumber: '{teamNumber}', // 即matchCode所属规则中配置的队伍编号值
       },
     },
     matchCode: "{matchCode}", //匹配规则编号。可前往AGC控制台获取匹配规则列表中对应的规则code
   };
   // 玩家自定义参数
   const playerConfig = {
     customPlayerStatus: 0,
     customPlayerProperties: "{customPlayerProperties}",
   };

   // 注册匹配查询监听
   global.client.onMatch((onMatchResponse) => this.onMatch(onMatchResponse));

   onMatch(res){
       if (res.rtnCode == 0){
           // 匹配成功
           global.room = res.room;
           global.player = room.player;
       } else {
           // 匹配失败
       }
   }

   global.client.matchGroup(matchGroupConfig, playerConfig).then(res => {
       // 组队匹配开始成功
   }).catch(err => {
       // 组队匹配开始失败
   })
   ```
2. 当队长发起组队匹配时，队伍中的其他成员可通过调用[Group.onMatchStart](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-js-0000002361675928#section19313911106)方法监听该事件，并调用[Client.matchQuery](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section1155919556103)方法发起组队匹配查询，同时通过[Client.onMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section763981272918)监听自己的匹配结果。

   ```
   // 匹配开始监听
   global.group.onMatchStart(() => {
     // 匹配开始，队伍成员发起组队匹配
     if (global.group.ownerId != global.group.player.playerId) {
        global.client.matchQuery();
     }
   });
   ```
