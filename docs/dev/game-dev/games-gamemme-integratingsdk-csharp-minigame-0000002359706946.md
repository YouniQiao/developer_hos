---
title: "C#（小游戏）"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-gamemme-integratingsdk-csharp-minigame-0000002359706946
---

游戏多媒体C# SDK提供了实时信令、语音消息和语音转文本功能，支持团结游戏开发引擎，可发布到华为快游戏、微信小游戏平台。

![](./img/15ca9fff.png)

当您使用团结引擎完成功能开发并准备打包时，您还需要进行相关配置才能打包成功，具体请参见[打包](https://developer.huawei.com/consumer/cn/doc/games-guides/games-export-csharp-minigame-0000002393227221)。

## 开发准备

团结引擎：推荐1.3.0版本（打包HarmonyOS包时使用）

## 集成步骤

1. 下载游戏多媒体SDK包并进行解压。

   | 目录名 | 说明 | 功能 |
   | --- | --- | --- |
   | GMMESDK | SDK接口代码文件。 | 提供API接口。 |
   | Plugins | SDK库文件。 | 存放库文件。 |
2. 将SDK中的GMMESDK整个文件夹复制到Unity工程的“**Assets &gt; Scripts**”文件夹中。

   ![](./img/83d64e7b.png)

   在项目代码中通过引入SDK的命名空间，即可使用SDK内部接口。
