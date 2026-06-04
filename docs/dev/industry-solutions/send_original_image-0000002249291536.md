---
title: "聊天页-是否原图发送"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/send_original_image-0000002249291536
---

## 场景介绍

是否发送原图是社交通讯类应用的高频使用场景之一。

本示例主要使用[PhotoPicker组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent)实现获取图库（相册）图片，并将图片压缩后发送非原图的效果。

## 效果预览

![](./img/1b9a4310.png "点击放大")

## 实现思路

1. 使用[PhotoPicker组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent)调用图库（相册）、选择图片、预览图片。
2. 使用compressImage函数将所选图片进行压缩后，转成base64格式发送。

   ```
   // 使用PhotoPickerComponent组件调用图库
   PhotoPickerComponent({
     // 定义Picker相关的配置
     pickerOptions:{
       // ...
     }
     // 设置Picker中点击图片后的回调事件
     onItemClicked: (itemInfo: ItemInfo, clickType: ClickType): boolean => this.onItemClicked(itemInfo,
       clickType),
     // 点击进入大图时的回调事件
     onEnterPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onEnterPhotoBrowser(photoBrowserInfo),
     // 退出大图时的回调事件
     onExitPhotoBrowser: (photoBrowserInfo: PhotoBrowserInfo): boolean => this.onExitPhotoBrowser(photoBrowserInfo),
     // 通过PickerController向picker组件发送数据
     pickerController: this.pickerController,
   })
   // pictureUri图片uri
   // format压缩后的目标格式，支持jpg、webp和png
   // quality压缩质量，取值范围0-100，压缩质量数字越小，图片越模糊
   compressImage(pictureUri: string, format: string, quality: number)
   // 选择和压缩图片，在此调用compressImage进行图片压缩，并将图片转为base64格式
   selectAndCompressPicture()
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └──Constants.ets                        // 常量
│  ├──component
│  │  └──ImageViewerComponent.ets             // 图片预览组件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──MainPage.ets                         // 主页界面
│  │  └──SendPage.ets                         // 图片发送页
│  └─utils
│     ├──ImageUtils.ets                       // 图片操作函数
│     └──Interface.ets                        // 接口
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[@ohos.file.PhotoPickerComponent（PhotoPicker组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-file-photopickercomponent)

## 代码下载

[聊天页-是否原图发送示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317171532.54718645223252383622521879013239%3A20260604143500%3A2800%3A2588C502BF37046E48AD66761D41933C75222989E62058355B653282442161AC.zip?needInitFileName=true)
