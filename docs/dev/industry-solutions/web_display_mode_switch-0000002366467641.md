---
title: "折叠屏网页布局自适应切换"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/web_display_mode_switch-0000002366467641
---

## 场景介绍

折叠屏网页布局自适应切换是实用工具类应用的高频使用场景之一。

本示例通过[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)组件、[WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)和[Window](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window)能力，实现折叠屏折叠、展开时，网页自适应切换为对应模式，或随着展开状态下分屏与全屏的切换，网页自动调整布局。

## 效果预览

![](./img/e1b7dee1.png "点击放大")

## 实现思路

1. 在EntryAbility中通过[Window](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window)能力获取窗口尺寸和设备屏幕宽度的一半的数值，存入[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management#appstorage)，后在网页显示页面获取。

   ```
   // EntryAbility.ets
   windowStage.getMainWindow().then((windowClass) => {
     // 获取窗口尺寸，存入AppStorage
     AppStorage.setOrCreate('winWidth', windowClass.getWindowProperties().windowRect.width);
     AppStorage.setOrCreate('winHeight', windowClass.getWindowProperties().windowRect.height);
     // 监听窗口尺寸变化
     windowClass.on('windowSizeChange', (windowSize) => {
        AppStorage.setOrCreate('winWidth', windowSize.width);
        AppStorage.setOrCreate('winHeight', windowSize.height);
        AppStorage.setOrCreate('foldableScreenMiddleWidth', this.getDisplayWidth() / 2);

        display.on('foldStatusChange', (data: display.FoldStatus) => {
           AppStorage.setOrCreate('foldableScreenMiddleWidth', this.getDisplayWidth() / 2);
           AppStorage.setOrCreate('winWidth', windowClass.getWindowProperties().windowRect.width);
        });

     });
   });
   ```

2. 在[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)页面判断设备是否是折叠屏、设备的折叠状态、网页窗口宽度是否超过屏幕宽度的一半，按条件匹配情况（通过[WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)进行设置）显示相适应的网页布局方式。

   ```
   // WebPage.ets
   if (this.winWidth > this.foldableScreenMiddleWidth && this.isFoldable &&
     this.foldStatus !== display.FoldStatus.FOLD_STATUS_FOLDED) {  // Windows系统端网页布局显示模式
     Column() {
       Web({ src: '', controller: this.webController })
         ...
         .onControllerAttached(() => {
           // Windows系统用UA
           this.webController.setCustomUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
             'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
           this.webController.loadUrl($r('app.string.uri_example'));
         })
     };
   } else if (this.winWidth <= this.foldableScreenMiddleWidth && this.isFoldable &&
     this.foldStatus === display.FoldStatus.FOLD_STATUS_FOLDED) {...  // 移动端网页布局显示模式
   } else {  // 移动端网页布局显示模式
     Column() {
       Web({ src: $r('app.string.uri_example'), controller: this.webController })
         ...
         .onControllerAttached(() => {
           // 移动端用户代理
           this.webController.setCustomUserAgent('Mozilla/5.0 (Linux; Android 9; VRD-AL10; HMSCore 6.3.0.331) ' +
             'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/12.0.4.1 Mobile Safari/537.36');
         })
         .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP]);
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets             // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets         // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──WebPage.ets              // Web页面
└──entry/src/main/resources       // 应用资源目录
```

## 参考文档

[Web组件描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)

[Class(WebviewController)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)

[Interface(Window)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window)

[应用级变量的状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management)

## 代码下载

[折叠屏网页布局自适应切换示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260311161405.74207862127971175264409314794085%3A20260604160054%3A2800%3A002853483B56346FE64617CA6FAAB0871BAEE1070AF83ED56476DCCDA0382028.zip?needInitFileName=true)
