---
title: "随机乱序键盘设置"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/out_of_order_custom_keyboard-0000002425425873
---

## 场景介绍

设置随机乱序键盘是理财保险类应用中的高频使用场景之一，如用户在登录账号、转账输入密码时使用乱序键盘，可有效保护隐私。

本示例基于[ArkTS中随机数生成](https://developer.huawei.com/consumer/cn/doc/architecture-guides/tourist-v1_2-ts_1-0000002363076309)实现键盘乱序，基于[自定义键盘](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-custom-keyboard)实现TextInput绑定乱序自定义键盘，基于[防截屏功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-3)实现当乱序自定义键盘拉起时，窗口进入隐私模式，不允许截屏录屏。

## 效果预览

![](./img/51f90071.png "点击放大")

## 实现思路

1. 通过安全随机数，实现键位数组的随机排序。

   ```
   // ABCKeyboardComponent.ets
   resortABCKeyboardData() {
     this.abcMenuData.sort(() => this.keyboardController.createSecurityRandom() - KeyboardConstant.NUM_0_POINT_5);
   }
   ```

   ```
   // KeyboardController.ets
   createSecurityRandom(): number {
     let rand = cryptoFramework.createRandom();
     let randData = rand.generateRandomSync(1);
     let num: number = randData.data[0] / 255;
     return num;
   }
   ```
2. 在键盘拉起时设置窗口进入隐私模式，在键盘关闭时设置窗口退出隐私模式。

   ```
   // OutOrderKeyboard.ets
   Flex({ direction: FlexDirection.Column }) {
     ...
   }
   .onAppear(()=>{
     windowUtils.setWindowPrivacyModeInPage(this.getUIContext().getHostContext() as common.UIAbilityContext, true);
   })
   .onDisAppear(()=>{
     windowUtils.setWindowPrivacyModeInPage(this.getUIContext().getHostContext() as common.UIAbilityContext, false);
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取将窗口设置为隐私窗口、禁止截屏录屏的权限：[ohos.permission.PRIVACY\_WINDOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionprivacy_window)。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──common
│  │  └──CommonConstants.ets              // 公共常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──outorderkeyboard                    // 乱序自定义键盘代码区
│  │  ├──ABCKeyboardComponent.ets         // 英文键盘页面
│  │  ├──KeyboardConstants.ets            // 键盘常量
│  │  ├──KeyboardController.ets           // 键盘工具类
│  │  ├──KeyboardData.ets                 // 键盘数据类型
│  │  ├──NumKeyboardComponent.ets         // 数字键盘页面
│  │  ├──OutOrderKeyboard.ets             // 键盘主页面
│  │  └──SymbolKeyboardComponent.ets      // 符号键盘页面
│  ├──pages
│  │  ├──LoginPage.ets                    // 登录页面
│  │  └──NavigationPage.ets               // 主页面
│  └──utils
│     └──DisplayUtil.ets                  // 页面显示工具类
└──entry/src/main/resources               // 资源目录
```

## 参考文档

[ArkTS中随机数生成](https://developer.huawei.com/consumer/cn/doc/architecture-guides/tourist-v1_2-ts_1-0000002363076309)

[如何实现防截屏功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-3)

[自定义键盘](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-custom-keyboard)

## 代码下载

[随机乱序键盘设置示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101612.78474573820747378342278807198520%3A50001231000000%3A2800%3AFF371A89E1788FE0028304B7F8DBEAA7B9AA39E45DA9D413EDD6827C69399D7C.zip?needInitFileName=true)
