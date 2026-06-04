---
title: "聊天消息多选及转发"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/chat_multi_selection-0000002332574910
---

## 场景介绍

聊天消息多选及转发是社交通讯类应用的高频使用场景之一，如用户长按任一消息时显示弹窗，点击弹窗“多选”项，即可选择消息并转发给任意联系人。

本示例基于[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件实现消息列表，并结合[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)、[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)和[@ohos.vibrator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator)等能力实现多选及转发功能。

## 效果预览

![](./img/44642dcd.gif "点击放大")

## 实现思路

1. 通过[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现消息列表，根据消息来源（发送者或接收者）控制消息的左右顺序。

   ```
   List({ scroller: this.listScroller }) {
     ForEach(this.data, (item: MsgContent, index: number) => {
       ListItem() {
         Flex({
           direction: item.isSelf ? FlexDirection.RowReverse : FlexDirection.Row,
           space: { main: LengthMetrics.vp(8) },
           alignItems: ItemAlign.Center,
           justifyContent: FlexAlign.SpaceBetween
         }) {
           // ...
         }
       }
     })
   }
   ```
2. 通过[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)、[bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup)和[@ohos.vibrator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator)实现长按消息后，震动提示并弹出气泡弹窗，点击“多选”选择转发消息。

   ```
   Text() {
     ForEach(item.content, (content: string) => {
       Span(content)
         .fontSize(18)
     })
   }
     .bindPopup(index === this.popupIndex, {
       builder: this.popupBuilder, // 气泡的内容
       placement: Placement.Top, // 气泡的弹出位置
       popupColor: Color.Black, // 气泡的背景色
       backgroundBlurStyle: BlurStyle.NONE,
       onStateChange: (e) => {
         if (!e.isVisible) {
           this.popupIndex = -1;
         }
       }
     })
     .gesture(
       LongPressGesture({ duration: 500 })
         .onAction((event) => {
           vibrator.startVibration({
             type: 'time',
             duration: 80
           }, {
             id: 0,
             usage: 'alarm'
           }, (error: BusinessError) => {
             this.popupIndex = index;
           })
         })
     )
   ```
3. 将待转发消息存入消息数据中。

   ```
   Image($r('app.media.share_enable'))
     .onClick(() => {
       this.multiSelectMode = false;
       if (this.multiSelectIndex.size > 0) {
         let multiSelChatInfo: ChatInfo = {
           // 待转发消息内容
         }
         let tmpArr: number[] = Array.from(this.multiSelectIndex);
         tmpArr = tmpArr.sort()
         tmpArr.forEach(idx => {
           multiSelChatInfo.msgContents.push(this.chatInfo!.msgContents[idx]);
         })
         this.navPathStack.pushPath({ name: CHAT_SELECTION_PAGE, param: multiSelChatInfo })
       }
     })
   ```

## 约束与限制

* 本示例支持API Version 17 Release及以上版本。
* 本示例支持HarmonyOS 5.0.5 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 5.0.5 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──common
│  │  ├──ChatInfo.ets                         // 聊天信息Bean
│  │  └──Constants.ets                        // 公共常量
│  ├──component
│  │  ├──ChatListView.ets                     // 聊天列表组件
│  │  ├──CustomRichEditor.ets                 // 合并聊天组件
│  │  └──MergedChat.ets                       // 消息发送组件
│  ├──entryability
│  │  └──EntryAbility.ets                     // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets               // 应用备份恢复能力
│  └──pages
│     ├──ChatDetail.ets                       // 聊天详情页
│     ├──ChatHistory.ets                      // 聊天历史页
│     ├──ChatSelection.ets                    // 聊天选择页
│     └──Index.ets                            // 主页
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[Popup控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)

[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)

[@ohos.vibrator（振动）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator)

## 代码下载

[聊天消息多选及转发示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101013.12146429682209862677081388838601%3A50001231000000%3A2800%3A40A0EBE5E885AC4B538DA98F527029D7DF599E508BDA6B4BFA42434DB89A6BAC.zip?needInitFileName=true)
