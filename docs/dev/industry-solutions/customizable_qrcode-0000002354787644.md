---
title: "个性化二维码"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/customizable_qrcode-0000002354787644
---

## 场景介绍

个性化二维码是社交通讯类应用的典型场景之一，如使用个性化二维码营销、宣传或添加好友，增强识别度和记忆点。

本示例基于[QRCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-qrcode)组件实现个性化二维码的生成与展示，使用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)布局实现二维码Logo和背景图设置，使用[SaveButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-savebutton)与[组件截图方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-component-snapshot)保存二维码。

## 效果预览

![](./img/d2a5490c.png "点击放大")

## 实现思路

1. 使用[QRCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-qrcode)组件展示二维码信息，通过color和backgroundColor属性调整二维码前景色与背景色。

   ```
   QRCode(this.qrCodeContent)
     .color(this.qrCodeColor)
     .backgroundColor(this.isBackgroundImageSet ? '#00ffffff' : this.qrCodeBackgroundColor);
   ```
2. 使用if判断进行条件渲染，控制文字显示内容与位置。

   ```
   if (this.isTitleTop && this.title !== '') {
     Text(this.title);
   }
   ```
3. 使用[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)布局实现Logo与背景图显示，设置背景图后背景色设置将被覆盖。

   ```
   Stack({ alignContent: Alignment.Center }) {
     // 判断是否显示背景图片
     if (this.isBackgroundImageSet && this.backgroundImageResource !== undefined) {
       Image(this.backgroundImageResource);
     }

     // 显示单个二维码组件
     QRCode(this.qrCodeContent)
       .backgroundColor(this.isBackgroundImageSet ? '#00ffffff' : this.qrCodeBackgroundColor)

     // Logo
     if (this.isLogoSet && this.logoResource !== undefined) {
       Image(this.logoResource);
     }
   }
   ```
4. 使用[组件截图方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-component-snapshot)与[SaveButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-savebutton)实现二维码保存。

   ```
   Column() {}
     .id('wholeQRCode');
   SaveButton(this.saveButtonOptions)
     .onClick(async (event: ClickEvent, result: SaveButtonOnClickResult) => {
       const PIXEL_MAP = await this.getUIContext().getComponentSnapshot().get('wholeQRCode');
       if (result === SaveButtonOnClickResult.SUCCESS && PIXEL_MAP !== undefined) {
         this.savePixelMapToAlbum(PIXEL_MAP);
       }
     })
   ```

![](./img/9f47f379.png)

* 二维码内容字符串最大支持512个字符，若超出，则截取前512个字符。
* 二维码内容字符串内容必须有效，不支持null、undefined以及空内容，若传入无效内容，则生成无效二维码。
* 若个性化二维码扫描后无法识别，请调整相关参数设置。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──component
│  │  ├──BackgroundImagePanelSheet.ets        // 背景图片组件
│  │  ├──ColorPanelSheet.ets                  // 颜色设置组件
│  │  ├──LogoPanelSheet.ets                   // Logo设置组件
│  │  └──TitlePanelSheet.ets                  // 文字设置组件
│  ├──entryability
│  │  └──EntryAbility.ets                     // 程序入口类
│  └──pages
│     ├──MainPage.ets                         // 首页
│     └──QRCodeEditPage.ets                   // 二维码编辑页面
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[QRCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-qrcode)

[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)

[使用组件截图(ComponentSnapshot)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-uicontext-component-snapshot)

[SaveButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-savebutton)

## 代码下载

[个性化二维码示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310124048.66809055426637324738862257016744%3A20260604144258%3A2800%3AC961A3A2AF22EA650802866B92A55692F08D76D59D990233DC0B5F23FD73A7BB.zip?needInitFileName=true)
