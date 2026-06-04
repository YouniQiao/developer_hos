---
title: "聊天列表未读消息提醒和标记"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/chat_unread_reminder-0000002282675266
---

## 场景介绍

聊天列表未读消息提醒和标记是社交通讯类应用的典型场景之一，如用户需要查看未读消息及数量，对消息进行已读或未读标记。

本示例基于[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现聊天列表，使用[Badge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-badge)组件作为未读提醒标识，使用[swipeAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeaction9)设置左划按钮，用户可点击该按钮标记消息状态。

## 效果预览

![](./img/4054f403.gif "点击放大")

## 实现思路

1. 使用[setInterval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer#setinterval)定时发送消息，模拟消息接收。
2. 使用[Badge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-badge)组件绑定未读状态消息数量，作为未读消息提醒标识。
3. 聊天列表项及其左滑组件标记按钮的点击事件绑定消息状态更改方法。

   ```
   // 启动定时器
   this.startTimers();
   // 聊天列表
   ListItem() {
     this.SessionItem()
   }
   // 设置滑出组件
   .swipeAction({
     this.itemEnd()
   })
   @Builder
   SessionItem(item: SessionItem, index: number) {
     Row() {
       // 未读消息红点标识
       Badge({
         count: this.reminders.get(item.receiver),
       })
     }
     .onClick(() => {
       AppRouter.push('Chat');
       // 进入聊天页转换消息状态
       changeMessageStatus();
     })
   }
   @Builder
   itemEnd(item: SessionItem, index: number) {
     Column() {}
       .onClick(() => {
         if (this.reminders.get(item.receiver)! > 0) {
           // 标为已读
           this.changeMessageStatus(item);
           this.getUnreadMessageNum(item.receiver);
         } else {
           // 标为未读
           this.reminders.set(item.receiver, Constants.UNREAD_MARK);
         }
       })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                    // 代码区
│  ├──components
│  │  ├──MessageSend.ets                 // 消息发送组件
│  │  ├──MyChat.ets                      // 聊天列表组件
│  │  └──TabContent.ets                  // 导航栏组件
│  ├──constant
│  │  └──Constants.ets                   // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──Message.ets                     // 消息模型
│  │  ├──SessionData.ets                 // 会话数据
│  │  └──SessionItem.ets                 // 会话模型
│  ├──pages
│  │  ├──ChatPage.ets                    // 聊天页
│  │  └──HomePage.ets                    // 首页
│  └──utils
│     └──AppRouter.ets                   // 导航工具
└──entry/src/main/resources              // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[Badge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-badge)

[ListItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem)

[Timer（定时器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-timer)

## 代码下载

[聊天列表未读消息提醒和标记示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101007.74485831337572180898082755844151%3A50001231000000%3A2800%3AC2CCBA507A2536DF1E976CFB50DBB23F79DEB485EAF88F742D9F1467CD5B35CF.zip?needInitFileName=true)
