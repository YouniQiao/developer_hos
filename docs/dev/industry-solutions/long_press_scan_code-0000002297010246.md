---
title: "聊天页-长按识别二维码"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/long_press_scan_code-0000002297010246
---

## 场景介绍

长按识别二维码是社交通讯类应用中高频使用场景之一。

本示例基于[detectBarcode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-imagedecode)和[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)，实现长按图片扫码并跳转网页的功能。

## 效果预览

![](./img/5e3aa7b5.gif "点击放大")

## 实现思路

1. 通过[bindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet)属性为图片绑定半模态弹窗，长按图片，通过[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)触发长按手势事件，出现半模态弹窗。

   ```
   Image()
     .gesture(
       // 长按手势事件
       LongPressGesture({ repeat: true })
         .onAction(() => {
           this.isShow = true;
         })
         .onActionEnd(() => {
           this.isShow = true;
         })
     )
     // 半模态弹窗
     .bindSheet($$this.isShow, this.popupBuilder(), {});
   ```
2. 调用[detectBarcode.decodeImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-imagedecode#section387381185013)接口识别图像二维码并返回扫码结果，调用函数scanQRFromImage识别二维码并跳转到相关网页。

   ```
   // 识别二维码，跳转网页
   async scanQRFromImage() {
     // 识别图像二维码
     this.decodeImageBuffer(pixelMap) {
       return detectBarcode.decodeImage(byteImg, options)
         .then((result: detectBarcode.DetectResult) => {
           return result;
         })
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

访问网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  └──pages
│     ├──ChatPage.ets                         // 聊天页面
│     └──WebPage.ets                          // 网页页面
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[detectBarcode（图像识码）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-imagedecode)

[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)

[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)

## 代码下载

[聊天页-长按识别二维码示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101010.14552902716649747791892569981868%3A50001231000000%3A2800%3A3E07DBF630663AB46F3E428CF122ECB5E96CA5A02748DB4CE2A30B7C10A36575.zip?needInitFileName=true)
