---
title: "未读消息清除"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/clear_unread_messages-0000002341399506
---

## 场景介绍

清除未读消息是购物比价类应用的高频使用场景之一。

本示例基于[@ObservedV2和@Trace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)实现两种方式清除未读消息：

1. 长按消息列表对话框，对某条具体对话标记为已读；
2. 点击一键清除按钮，将全部未读消息标记为已读。

## 效果预览

![](./img/1002cc2b.gif "点击放大")

## 实现思路

利用[@ObservedV2和@Trace](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)实现对未读消息的类属性变化进行监测，当改变未读消息类属性时会通知相关组件刷新。

```
// 定义消息类
@ObservedV2
export class MessageInfo {
  @Trace picture?: Resource;
  // ...
}

@ObservedV2
export class MessageInfoModel {
  // 初始化对象数组
  @Trace messageList: MessageInfo[] = [
    // ...
  ]

  // 一键清除改变消息类属性
  public updateMessage() {
    for (let i = 0; i < this.messageList.length; i++) {
      this.messageList[i].numbers = 0
    }
  }

  // 通过索引值清除改变对应消息类属性
  public cleanSingleMessage(index: number){
    this.messageList[index].numbers = 0
  }

  // 拿到对象类
  private static _instance: MessageInfoModel;
  public static get instance() {
    if (!MessageInfoModel._instance) {
      MessageInfoModel._instance = new MessageInfoModel();
    }
    return MessageInfoModel._instance;
  }
}
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──components
│  │  └──MessageInfoCom.ets               // 消息信息组件
│  ├──constants
│  │  └──Constants.ets                    // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──MessageInfoModel.ets             // 消息信息模型
│  └──pages
│     └──Pages.ets                        // 主页面
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[@ObservedV2装饰器和@Trace装饰器：类属性变化观测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace)

## 代码下载

[未读消息清除示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170141.55725365812952389846739984539975%3A50001231000000%3A2800%3A421BED4551CF0D1F2511430B5A81FCCBBEFAEB57727DFBE89830BAE551F10E3A.zip?needInitFileName=true)
