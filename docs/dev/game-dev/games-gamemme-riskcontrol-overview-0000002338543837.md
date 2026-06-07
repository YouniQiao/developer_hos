---
title: "概述"
original_url: /docs/dev/game-dev/games-gamemme-riskcontrol-overview-0000002338543837
format: md
---


为了保障和谐健康的游戏环境，游戏多媒体服务提供了内容检测功能，对涉及广告、色情、辱骂等各类违规内容进行批量检测与精准识别。通过AGC控制台即可查看到相关检测结果，然后您可根据业务逻辑在游戏服务端进行后续处理（如玩家禁言或封号等），同时支持人工复审，以保证内容风控的准确性。游戏多媒体内容检测支持实时语音、实时信令文本消息和语音消息三种类型内容的检测，并且提供了自动和人工两种送检方式。

## 自动送检

实时语音、实时信令文本消息和语音消息内容检测支持自动送检，集成游戏多媒体SDK即可自动送检相关内容。需要注意的是，实时语音自动送检前，您还需先[开启内容检测](/docs/dev/game-dev/games-gamemme-console-servicemanagement-0000002338391901#section17288256144510)功能。

## 人工送检

实时信令文本消息内容检测还支持[在AGC控制台人工送检](/docs/dev/game-dev/games-gamemme-riskcontrol-agc-0000002304504622)和[使用REST API人工送检](/docs/dev/game-dev/games-gamemme-riskcontrol-restapi-0000002338703705)两种人工送检的方式，根据您的使用需要选择其中一种方式即可。
