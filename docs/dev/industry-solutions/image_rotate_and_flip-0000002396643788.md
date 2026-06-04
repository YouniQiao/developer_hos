---
title: "静态图片旋转与翻转"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/image_rotate_and_flip-0000002396643788
---

## 场景介绍

静态图片旋转与翻转是拍摄美化类应用的高频使用场景之一，如用户在编辑图片时，需要将图片进行旋转（向左90°、向右90°）或翻转（水平、垂直）。

本示例基于[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)实现图片编辑功能，使用[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)从相册选择图片，通过PixelMap的[rotateSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#rotatesync12)和[flipSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#flipsync12)方法实现图片旋转与翻转，使用[SaveButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-savebutton)安全控件保存图片。

## 效果预览

![](./img/1dc77e38.png "点击放大")

## 实现思路

1. 调用[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)从相册选择图片。

   ```
   async getPixelMapFromGallery(prompt: PromptAction): Promise<image.PixelMap | undefined> {
     // 选择图片逻辑处理
   }
   ```
2. 调用[rotateSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#rotatesync12)接口对图片进行旋转。

   ```
   rotate(angle: number, pixelMap: image.PixelMap) {
     let pixelMapTemp = pixelMap;
     if (pixelMapTemp && pixelMapTemp !== undefined && pixelMapTemp !== null) {
       try {
         pixelMapTemp.rotateSync(angle);
       } catch(e) {
         // 错误处理
       } finally {
       }
     }
     return pixelMapTemp;
   }
   ```
3. 调用[flipSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#flipsync12)接口对图片进行翻转。

   ```
   flip(horizontal: boolean, vertical: boolean, pixelMap: image.PixelMap): Promise<image.PixelMap> {
     let pixelMapTemp = pixelMap;
     if (pixelMapTemp && pixelMapTemp !== undefined && pixelMapTemp !== null) {
       try {
         pixelMapTemp.flipSync(horizontal, vertical);
       } catch(e) {
         // 错误处理
       } finally {
       }
     }
     return pixelMapTemp;
   }
   ```
4. 使用[SaveButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-savebutton)安全控件，完成图片保存。

   ```
   SaveButton({ text: SaveDescription.SAVE })
     .onClick(async (event: ClickEvent, result: SaveButtonOnClickResult) => {
       // 保存图片逻辑实现
     })
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
│  │  ├──IconModel.ets                  // 功能图标数据类
│  │  └──ImageModel.ets                 // 图片数据类
│  ├──pages
│  │  ├──ImageEditPage.ets              // 图片编辑页
│  │  └──MainPage.ets                   // 主页
│  └──utils
│     ├──ImageUtil.ets                  // 图片处理工具类
│     └──Logger.ets                     // 日志工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Interface(PixelMap)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)

[Class(PhotoViewPicker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)

[SaveButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-security-components-savebutton)

## 代码下载

[静态图片旋转与翻转示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170812.66795648322225335188077629021371%3A50001231000000%3A2800%3A6420560E744B749F91E063A13937012BEF1624787BCEA87D0334D1A8FA9E2967.zip?needInitFileName=true)
