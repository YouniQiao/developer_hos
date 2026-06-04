---
title: "证件照标签设置及推荐"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/recommend_id_photos-0000002344341185
---

## 场景介绍

证件照标签设置及推荐是综合办公类应用中的高频使用场景之一，如用户注册、实名认证时，需要从相册快速选择并上传证件照。

本示例[使用Picker选择媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-photoviewpicker)实现相册证件照图片推荐功能，通过设置推荐图片类型，在相册中筛选出符合条件的图片并展示，缩短用户筛选时间。

## 效果预览

![](./img/12ed5e52.gif "点击放大")

## 实现思路

1. 通过[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)拉起系统相册。

   ```
   let photoPicker = new photoAccessHelper.PhotoViewPicker();
   result = (await photoPicker.select(option)).photoUris[0];
   ```
2. 设置推荐图片类型[recommendationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-e#recommendationtype11)为身份证（ID\_CARD），筛选相册身份证图片供用户选择。

   ```
   let option: photoAccessHelper.PhotoSelectOptions = {
     recommendationOptions: { recommendationType: recommendType },
     isPhotoTakingSupported: true,
     maxSelectNumber: 1,
     MIMEType: photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE
   };
   ```
3. 将用户选中的图片URI，在[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)组件中展示。

   ```
   await this.imagePicker(photoAccessHelper.RecommendationType.ID_CARD);
   Image(this.frontIdCard)
     .width(272)
     .height(164)
     .objectFit(ImageFit.Cover);
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets           // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──Index.ets              // 证件照选择与展示
└──entry/src/main/resources     // 应用资源目录
```

## 参考文档

[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)

[使用Picker选择媒体库资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/photoaccesshelper-photoviewpicker)

[Class(PhotoViewPicker)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)

## 代码下载

[证件照标签设置及推荐示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164301.06412558976320983223550801785785%3A50001231000000%3A2800%3AFBE2E3F127644B197C6D968B1C6A69D7C81026A592C61B7039DC19E06078D286.zip?needInitFileName=true)
