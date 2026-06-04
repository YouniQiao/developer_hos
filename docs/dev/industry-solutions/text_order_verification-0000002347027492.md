---
title: "基于Text和弹窗实现人机验证"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/text_order_verification-0000002347027492
---

## 场景介绍

基于Text和弹窗实现人机验证是各类应用中的高频使用场景之一，如用户在进行注册或登录时，需按照图片提示的顺序点击文字以通过人机验证。

本示例基于[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)和[弹窗组件封装](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-dialog-encapsulation)实现按顺序点击图文验证功能。

## 效果预览

![](./img/38800785.gif "点击放大")

## 实现思路

1. 通过全局@Builder封装自定义弹窗组件CustomDialogBuilder.ets，用于人机校验。

   ```
   @Builder
   export function customDialogBuilder(textList: TextModel[]) {
     Column() {
       descriptionAndCancel(textList);

       verifyContent(textList);
     }
     .width(Constants.NINETY_THREE_PERCENT)
     .height($r('app.float.height_236'))
     .backgroundColor($r('app.color.background_color_white'))
     .borderRadius($r('app.float.radius_16'))
   }
   ```
2. 通过[openCustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#opencustomdialog12)打开封装的弹窗组件，用于打开人机校验弹窗。

   ```
   static showDialog<T extends object>(type: DialogShowType, contentView: WrappedBuilder<[T]>, args: T,
     options?: promptAction.BaseDialogOptions):void {
     // 打开弹窗逻辑实现
   }
   ```
3. 通过[closeCustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#closecustomdialog12)关闭封装的弹窗组件，用于关闭人机校验弹窗。

   ```
   static closeDialog(type: DialogShowType): void {
     // 关闭弹窗逻辑实现
   }
   ```
4. 通过[update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent#update)更新封装的弹窗组件，用于在点击文字后刷新点击数字。

   ```
   static updateDialog<T extends object>(type: DialogShowType, args: T, options?: promptAction.BaseDialogOptions): void {
     // 更新弹窗逻辑实现
   }
   ```
5. 通过[contentModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer#contentmodifier12)自定义[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)内容区，实现人机验证后，发送验证码的倒计时。

   ```
   export class MyTextTimerModifier implements ContentModifier<TextTimerConfiguration> {
     constructor() {
     }
     applyContent(): WrappedBuilder<[TextTimerConfiguration]> {
       return wrapBuilder(customTextTimer);
     }
   }
   @Builder
   function customTextTimer(config: TextTimerConfiguration) {
     Row() {
       // 剩余时间：用初始时间减去计时器经过的时间
       Text(Math.max(config.count / 1000 - config.elapsedTime / 100, 0).toFixed(0))
         // 属性

       Text($r('app.string.unit_second'))
         // 属性
     }
   }
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
│  ├──components
│  │  ├──CustomDialogBuilder.ets        // 自定义弹窗组件
│  │  └──CustomTextTimer.ets            // 自定义文本显示计时组件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──TextModel.ets                  // 人机验证文字数据类
│  ├──pages
│  │  └──Login.ets                      // 登录页
│  └──utils
│     ├──DialogUtil.ets                 // 弹窗工具类
│     └──Logger.ets                     // 日志工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)

[弹窗组件封装](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-dialog-encapsulation)

[Class(PromptAction)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)

[ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent)

[TextTimer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-texttimer)

## 代码下载

[基于Text和弹窗实现人机验证示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100049.05299158826597134322495764824031%3A50001231000000%3A2800%3AF81AF351B95CB496A7FFC1D316ECA7FE13DA3297529732A212C0B171BB724991.zip?needInitFileName=true)
