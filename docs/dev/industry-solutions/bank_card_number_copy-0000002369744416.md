---
title: "Pasteboard实现一键复制银行卡号"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/bank_card_number_copy-0000002369744416
---

## 场景介绍

Pasteboard实现一键复制银行卡号是理财保险类应用中的高频使用场景之一，如用户需发送银行卡账户信息时，可一键复制卡号。

本示例使用[剪贴板服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-pasteboard-to-copy-and-paste)提供数据的复制粘贴能力，实现卡号复制，通过[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件、[PromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)和[@ohos.inputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod)实现自定义密码验证弹窗，在弹窗开启页面设置防截屏模式，实现通过密码验证后一键复制卡号的功能。

## 效果预览

![](./img/0be16ed9.gif "点击放大")

![](./img/d294e2d4.png)

输入密码界面无法录制。

## 实现思路

1. 根据[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件和[PromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)构造自定义弹窗。
2. 将[@ohos.inputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod)与弹窗组件绑定，点击查看账号进入密码验证时将直接拉起输入法键盘，通过监听键盘输入事件获取输入字符，与Text绑定内容关联，实现多Text组件内容的刷新显示。
3. 使用[剪贴板服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-pasteboard-to-copy-and-paste)提供的[setData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pasteboard#setdata9-1)方法将卡号数据写入剪贴板，即可实现卡号复制粘贴效果。

```
// 1.自定义密码验证弹窗样式
@Builder
withdrawBuilder() {}

// 2.点击查看账号触发弹窗
uiContext: UIContext = this.getUIContext();
promptAction: PromptAction = this.uiContext.getPromptAction();
this.promptAction.openCustomDialog({
  builder: () => {
    this.withdrawBuilder();
  }})
// 3.监听输入法键盘输入与删除事件，操作内容与Text绑定
this.inputController.on('insertText', (text: string) => {
  // ...
});
this.inputController.on('deleteLeft', () => {
  // ...
});

// 4.剪贴板复制卡号
let pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, this.account);
let systemPasteboard = pasteboard.getSystemPasteboard();
await systemPasteboard.setData(pasteData);
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──common
│  │  └──Constants.ets                  // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──TransactionItem.ets            // 数据类
│  └──pages
│     ├──CardDetail.ets                 // 首页
│     └──Home.ets                       // 详情页
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)

[Class(PromptAction)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)

[使用剪贴板进行复制粘贴](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-pasteboard-to-copy-and-paste)

[@ohos.pasteboard（剪贴板）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pasteboard)

[@ohos.inputMethod（输入法框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod)

## 代码下载

[Pasteboard实现一键复制银行卡号示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170018.56348587786728290808064726311509%3A50001231000000%3A2800%3A48DC60B0D0AD96AE88502AC8BEFBF6961A97203D63D861577982BC9939A16C92.zip?needInitFileName=true)
