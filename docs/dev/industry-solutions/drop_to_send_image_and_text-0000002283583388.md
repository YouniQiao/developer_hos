---
title: "拖拽发送中转站图片文本"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/drop_to_send_image_and_text-0000002283583388
---

## 场景介绍

中转站图片文本拖拽发送是社交通讯类应用中的典型场景之一，如用户可以将与好友A聊天记录中的图片文字暂存至中转站，在与好友B聊天时从中转站拖拽发送。

本示例基于[拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop)实现拖拽发送图片文字的功能。

## 效果预览

![](./img/611dcbbc.gif "点击放大")

## 实现思路

基于[拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop)实现拖拽发送图片文字的功能。

```
List({ space: StyleConstants.MESSAGE_LIST_SPACE, scroller: this.listScroller }) {
  // 聊天区域
}
.onDrop((event: DragEvent) => {
  let dragData = event.getData();
  if (dragData === undefined) {
    return;
  }
  let record = dragData.getRecords();
  let key: string = record[0].getType();
  if (key === StyleConstants.TEXT_KEY) {
    let text = (record[0]) as unifiedDataChannel.PlainText;
    this.mess = text.textContent;
  } else if (key === StyleConstants.IMAGE_KEY) {
    decode((record[0] as unifiedDataChannel.Image).imageUri).then((pixlmap) => {
      this.arr.push(new MessageItem(pixlmap!, StyleConstants.IMAGE_TYPE, true));
    });
  }
});
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                // 代码区
│  ├──components
│  │  ├──ChatDetails.ets             // 聊天记录组件
│  │  └──Send.ets                    // 消息发送栏组件
│  ├──constants
│  │  └──StyleConstants.ets          // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  └──pages
│     ├──ChatPage.ets                // 好友聊天页面
│     ├──Home.ets                    // 主页
│     └──TabsPage.ets                // 导航页
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-drag-drop)

## 代码下载

[拖拽发送中转站图片文本示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101008.64362008702510659247510799337018%3A50001231000000%3A2800%3AFC811E2CEA6BAF185E438C66689CC32F8004A8BEE5C76E7342FD14AAAEF365C0.zip?needInitFileName=true)
