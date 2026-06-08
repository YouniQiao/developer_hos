---
title: "构建发布工程"
original_url: /docs/dev/game-dev/games-creator-release-0000002290527377
format: md
upstream_id: dev/game-dev/games-creator-release-0000002290527377
last_sync: 2026-06-07
sync_hash: 4f6e8c77
---
完成游戏适配后，需从Cocos Creator引擎中构建发布工程。此处以Cocos Creator 2.4.15引擎为例。

1. 在Cocos Creator 2.4.15顶部菜单选择“项目 &gt; 构建发布”，在弹出的“构建发布”窗口填写配置项后，其中：
   * “发布平台”请选择“HarmonyOS Next”。
   * “应用名称ID”请填写游戏包名。获取方式请参见[获取游戏包名](/docs/dev/game-dev/games-creator-preparation-0000002290527373#section177836993213)。
   * “js引擎”请选择“JSVM”。

   完成后点击“构建”，构建发布工程。

   ![](./img/5c25be7d.png)

   * Cocos Creator 2.X工程相对游戏项目路径为build\jsb-link\frameworks\runtime-src\proj.harmonyos-next。
   * Cocos Creator 3.X工程相对游戏项目路径为native\engine\harmonyos-next。
2. 在DevEco Studio中打开工程，工程目录结构说明如下：

   ![](./img/eaec80a5.png "点击放大")![](./img/19dd458a.png "点击放大")
