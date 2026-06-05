---
title: "接入流程"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/gameobe-flowchart-real-time-server-0000002395350533
format: md
---


联机对战实时服务器与客户端的交互主要是以“发消息-监听消息”的方式进行，您需要在实时服务器上实现您自定义的业务逻辑，然后将相关代码托管到实时服务器。当客户端SDK发起相关操作时，联机对战服务器会广播到实时服务器，并可在相关监听中执行您的拓展逻辑（如游戏仲裁、存储数据至缓存中），强烈建议您在实现拓展逻辑的同时进行相应的异常捕获。

![](./img/2b94648e.png)
