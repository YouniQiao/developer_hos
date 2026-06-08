---
title: "使用入门"
original_url: /docs/dev/game-dev/games-gamemme-rtm-restapi-gettingstarted-0000002339533486
format: md
upstream_id: dev/game-dev/games-gamemme-rtm-restapi-gettingstarted-0000002339533486
last_sync: 2026-06-07
sync_hash: 6b2ad87b
---
游戏多媒体服务实时信令提供了标准定义的Restful API，支持通过使用Restful API接口向华为RTM服务器发送消息，并广播给指定玩家或频道订阅用户，例如发送游戏公告、消息通知等游戏使用场景。

## 创建API客户端

API客户端是AppGallery Connect用于管理用户访问AppGallery Connect API的身份凭据，您可以给不同角色创建不同的API客户端，使不同角色可以访问对应权限的AppGallery Connect API。在访问某个API前，必须创建有权访问该API的API客户端。具体请参见[创建API客户端](/docs/dev/game-dev/games-appendix-api-client-0000002304729552)。

## 获取访问API的Token

创建完API客户端后，需要到华为AppGallery Connect平台进行鉴权，鉴权通过后将获得用于访问API的Access Token。因此，您需要在您的应用程序中编写一段调用[获取Token](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-obtaintoken-restapi-0000002358963836)接口的代码来获取Access Token。
