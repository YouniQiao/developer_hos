---
title: "接入要求"
displayed_sidebar: appDistSidebar
original_url: /docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/joint-operation-game-0000002024369570/joint-operation-access-0000002024211358
format: md
---


# 接入要求

联运合作的详细介绍请参见[联运服务介绍](/docs/monetize/promotion/service-introduction-0000001062607577)，本文仅介绍联运游戏的功能开发。

联运游戏需接入以下功能：

| 功能 | 接入说明 | 预估耗时（小时） |
| --- | --- | --- |
| [基础游戏服务](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/joint-operation-game-0000002024369570/joint-operation-login-0000002060409757) | 游戏必须接入基础游戏服务。 | 11.5~14.5 |
| [应用内支付服务](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/joint-operation-game-0000002024369570/joint-operation-pay-0000002060488817) | - IAP游戏必须接应用内支付服务。 - IAA游戏可选接应用内支付服务。 | - 包含订阅型商品支付：16~24 - 不含订阅型商品支付：8~16 |

![](./img/621b4cc79993.png)

各业务的预估耗时仅包含代码开发时长，不含测试时长。

联运游戏推荐接入以下功能：

| 功能 | 简介 |
| --- | --- |
| 游戏场景感知 | 游戏场景感知帮助开发者快速实现游戏与系统的交互，开发者通过游戏场景感知，完成向系统发送游戏数据以及从系统获取设备状态信息。详细接入指导请参见[游戏场景感知](/docs/dev/app-dev/application-services/game-service-kit-guide/gameservice-gameperformance-dev)。 |
| 游戏性能管理 | 游戏性能管理服务（Game Performance Management，GPM）是华为游戏中心推出的一款功能强大、集成简便的性能管理解决方案，支持实现低功耗、全方面地采集游戏运行时的性能数据。详细接入指导请参见[游戏性能管理](/docs/dev/game-dev/games-improve-performance-gpm-0000002252508218)。 |
| 游戏多媒体 | 游戏多媒体服务是华为游戏中心推出的一款快速实现游戏内实时语音、实时信令（Real-time Messaging，即RTM）、语音消息等功能的服务。详细接入指导请参见[游戏多媒体](/docs/dev/game-dev/games-gamemme-0000002252508214)。 |
| 崩溃服务 | 崩溃服务是一个功能强大、轻量级的崩溃解决方案。它能帮助您快速发现、定位、解决应用崩溃（又称闪退）问题，其使用非常简便，无需开发任何代码即可实现可视化数据报告的实时查看。详细接入指导请参见[性能监测（APMS）](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-0000002235870062)。 |
| Ads Kit（广告服务） | Ads Kit（广告服务）依托华为终端平台与数据能力为您提供流量变现服务，帮助您解决流量变现的难题；同时为广告主提供广告服务，配合华为终端平台向用户提供个性化的营销活动或商业广告。详细接入指导请参见[Ads Kit（广告服务）](/docs/dev/app-dev/application-services/ads-kit-guide)。 |
| Push Kit（推送服务） | Push Kit（推送服务）是华为提供的消息推送平台，建立了从云端到终端的消息推送通道。所有应用可通过集成Push Kit，实现向应用实时推送消息，使消息易见，构筑良好的用户关系，提升用户的感知度和活跃度。详细接入指导请参见[Push Kit（推送服务）](/docs/dev/app-dev/application-services/push-kit-guide)。 |
