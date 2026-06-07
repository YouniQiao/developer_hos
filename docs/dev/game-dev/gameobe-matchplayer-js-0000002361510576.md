---
title: "在线匹配"
original_url: /docs/dev/game-dev/gameobe-matchplayer-js-0000002361510576
format: md
---


玩家个人通过发起在线匹配的方式，根据自定义规则中设置的等级、胜率等属性进行择优匹配。例如，当100个玩家选择了某一类型的游戏模式（比如排位赛等）进行匹配时，服务器根据这100个玩家的等级和胜率等自定义条件，为玩家进行匹配。

## 前提条件

* 您已[初始化联机对战SDK](/docs/dev/game-dev/gameobe-initializing-js-0000002395350377)。
* 您已在AGC控制台[配置匹配规则](/docs/dev/game-dev/gameobe-ruleconfiguration-0000002361670428)。

## 开发步骤

1. 调用[Client.matchPlayer](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section28079912514)方法进行在线匹配，并注册[Client.onMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section763981272918)监听回调用于监听匹配结果。

   ![](./img/d06896f0.png)

   * 由于在线匹配方式需要和AGC控制台中配置的[匹配规则](/docs/dev/game-dev/gameobe-ruleconfiguration-0000002361670428#section11254127113416)配合使用，因此在线匹配参数中的属性需要与[matchCode](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchplayerconfig-js-0000002395355909#ZH-CN_TOPIC_0000002395355909__p11735501214)所属规则中配置的[玩家属性](/docs/dev/game-dev/gameobe-ruleconfiguration-0000002361670428#ZH-CN_TOPIC_0000002361670428__p161123117394)一一对应。
   * [Client.onMatch](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-js-0000002361516044#section763981272918)监听接口同时监听在线匹配和[组队匹配](/docs/dev/game-dev/gameobe-creategroup-js-0000002361670448)的匹配结果，若您的游戏中同时存在在线匹配和组队匹配的场景，只需注册一次即可。

   ```
   // client初始化成功后可调用client.onMatch方法注册在线/组队匹配监听事件
   initListener() {
     // 如果注册在线/组队匹配监听接口的方法写在场景生命周期中时，请注意在注册前调用clear方法清除监听，避免多次订阅导致多次触发事件
     global.client.onMatch.clear();
     // 注册在线/组队匹配监听事件
     global.client.onMatch((onMatchResponse) => this.matchResponseHandler(onMatchResponse));
   }

   // 在线匹配参数
   const matchPlayerConfig = {
     playerInfo: {
       playerId: '{playerId}', //playerId为初始化后生成的玩家联机对战账号ID
       matchParams: {
         param1: '{param1}', // 匹配参数的属性需要与matchCode所属规则中配置的玩家属性一一对应
         param2: '{param2}', // 例如 'level': 10
       },
     },
     teamInfo: { // 仅非对称匹配时需要设置teamInfo，用于存放队伍编号值
       matchParams: {
          teamNumber: '{teamNumber}', // 即matchCode所属规则中配置的队伍编号值
       }
     },
     matchCode: '{matchCode}', //匹配规则编号。可前往AGC控制台获取匹配规则列表中对应的规则code
   };
   // 玩家自定义参数
   const playerConfig = {
     customPlayerStatus: 0,
     customPlayerProperties: '{customPlayerProperties}',
   }
   matchResponseHandler(res){
       if (res.rtnCode == 0){
           // 匹配成功
           global.room = res.room;
           global.player = res.room.player;
       } else {
           // 匹配失败
       }
   }
   global.client.matchPlayer(matchPlayerConfig, playerConfig).then((res) => {
     // 在线匹配开始成功
   }).catch((e) => {
     // 在线匹配开始失败
   });
   ```
2. 当新玩家加入房间时，房间内的其他玩家将通过[Room.onJoin](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-js-0000002395195985#section11321164309)方法收到事件通知。

   ```
   global.room.onJoin((playerInfo) => {
     // 判断是否为当前玩家加入房间
     if(playerInfo.playerId === global.room.playerId) {
       // 在线匹配成功，做相关游戏逻辑处理
     }
   });
   ```
