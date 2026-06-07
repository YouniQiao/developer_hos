---
displayed_sidebar: appDevSidebar
title: "更新实况窗被频控的问题"
original_url: /docs/dev/app-dev/application-services/live-view-kit-guide/liveview-faq/liveview-faq-1
format: md
---


通过Push Kit更新实况窗时，单个实况窗消息，出行打车与赛事比分场景每个设备每5分钟最多更新30次，每小时最多更新180次。其余场景每个设备每5分钟最多更新10次，每小时最多更新60次。超过频次部分将丢弃不下发。详情见Push Kit[消息频控](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-msg-freq-control)。

实况窗创建和更新有流控机制：

* 系统级流控（针对所有应用），实况通知创建每秒最多15次，实况通知更新每秒最多30次，超过频次部分被丢弃不下发。
* 应用级流控（针对单个应用），实况通知创建每秒最多10次，实况通知更新每秒最多20次，超过频次部分被丢弃不下发。
