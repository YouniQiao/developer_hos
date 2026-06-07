---
displayed_sidebar: appDevSidebar
title: "游戏如何实现不展示官方账号登录？"
original_url: /docs/dev/app-dev/application-services/game-service-kit-guide/gameservice-faq/gameservice-faq-unlogin/gameservice-faq-3
format: md
---


在游戏调用[unionLogin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-gameplayer#gameplayerunionlogin)接口时，将thirdAccountInfos参数传空数组，即可实现玩家登录游戏时不展示“游戏官方账号登录”选项，默认使用华为账号登录。
