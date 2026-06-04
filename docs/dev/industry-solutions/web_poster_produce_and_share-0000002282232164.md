---
title: "网页海报生成及分享"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/web_poster_produce_and_share-0000002282232164
---

## 场景介绍

网页海报生成及分享是实用工具类应用中高频使用场景之一，如用户在浏览网页时，可以生成海报图片并分享至其他应用。

本示例基于[Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)组件先将网页内容保存至图片沙箱文件，再通过[systemShare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share)分享至其他应用。

## 效果预览

![](./img/2a69a07c.gif "点击放大")

![](./img/9772cd93.png)

运行本示例前，请先在WebPage.ets中设置变量url值为需要访问的网址，否则使用默认网址。

## 实现思路

1. 设置网页开启全量绘制能力，并获取网页截图。

   ```
   aboutToAppear(): void {
     try {
       webview.WebviewController.enableWholeWebPageDrawing(); // 设置网页开启全量绘制能力
     } catch (error) {
       // ...
     }
   }
   this.webController.webPageSnapshot(
     // 全量绘制相关参数设置
   ); // 获取网页全量绘制结果
   ```
2. 调用[ImagePacker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker)的packToFile方法将海报图片保存至沙箱文件。
3. 通过[systemShare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share)设置分享参数，拉起分享弹窗，把保存的图片分享到其他应用。

   ```
   export async function shareFunc(context: common.UIAbilityContext, imagePixelMap: image.PixelMap) {
     // 获取沙箱目录并把截图保存至沙箱
     let dir: string = context.filesDir;
     let filePath: string = dir + '/webPic.jpeg';
     let res = fileIo.accessSync(filePath);
     if (res) {
       try {
         fileIo.rmdirSync(filePath);
       } catch (err) {
         // ...
       }
     }
     let fileSand =
       fileIo.openSync(filePath, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
     // 使用图片打包器把图片源编码写入对应的图片沙箱文件
     // 指定打包参数，将PixelMap图片源编码后直接打包进文件
     const imagePackerApi: image.ImagePacker = image.createImagePacker();
     let packOpts: image.PackingOption = { format: 'image/jpeg', quality: 100 };
     try {
       await imagePackerApi.packToFile(imagePixelMap, fileSand.fd, packOpts);
     } catch (error) {
       // ...
     } finally {
       fileIo.close(fileSand.fd); // 主动关闭文件句柄
       imagePackerApi.release(); // 主动调用release方法释放内存
     }
     // 分享沙箱内保存的图片
     let shareData: systemShare.SharedData = new systemShare.SharedData({
       utd: utd.UniformDataType.JPEG,
       uri: fileUri.getUriFromPath(filePath),
       description: 'webPic',
       label: '图片',
     });
     let shareController: systemShare.ShareController = new systemShare.ShareController(shareData);
     shareController.show(context, {
       previewMode: systemShare.SharePreviewMode.DETAIL,
       selectionMode: systemShare.SelectionMode.SINGLE
     }).then(() => {
       // ...
     }).catch((error: BusinessError) => {
       // ...
     });
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

使用网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                                   // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──WebPage.ets                                    // 入口界面
│  └──toolability
│     └──ShareAbility.ets                               // 分享工具类
└──entry/src/main/resources                             // 应用资源目录
```

## 参考文档

[Web组件描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web)

[systemShare（分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share)

[Interface(ImagePacker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker)

## 代码下载

[网页海报生成及分享示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101750.56082031192792793055161839794776%3A50001231000000%3A2800%3A88289117405C0456111A930C144D06FAC97309DAC365F9E31BC11EF0BC8E222C.zip?needInitFileName=true)
