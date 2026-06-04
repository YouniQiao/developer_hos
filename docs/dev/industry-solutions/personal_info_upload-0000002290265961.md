---
title: "个人头像上传"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/personal_info_upload-0000002290265961
---

## 场景介绍

个人头像上传是社交通讯类应用中高频使用场景之一，如用户在设置或更换头像时需要从图片中截取出圆形。

本示例通过[photoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)方法加载本地图片，使用ImageCrop方法裁剪图片成圆形，转换成base64格式并使用[Preferences](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-preferences)本地保存，再回到主页面展示。

## 效果预览

![](./img/56c9660e.png "点击放大")

## 实现思路

1. 点击更换头像，使用[photoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f#photoaccesshelpergetphotoaccesshelper)方法打开图库。

   ```
   // 设置图片选择器选项
   const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
   // 限制只能选择一张图片
   photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
   photoSelectOptions.maxSelectNumber = MAX_NUM;
   const filter = new photoAccessHelper.MimeTypeFilter();
   filter.mimeTypeArray = ['image/png'];
   photoSelectOptions.mimeTypeFilter = filter;
   // 创建并实例化图片选择器
   const photoViewPicker = new photoAccessHelper.PhotoViewPicker();
   // 选择图片并获取图片URI
   let uris: photoAccessHelper.PhotoSelectResult = await photoViewPicker.select(photoSelectOptions);
   ```
2. 选择图片，使用ImageCrop裁剪图片成圆形。
3. 点击保存，把图片转换成base64格式，使用[Preferences](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-preferences)保存。

   ```
   let imagePackerApi: image.ImagePacker = image.createImagePacker();
   let packOpts: image.PackingOption = { format: 'image/png', quality: 100 };
   try {
     let readBuffer: ArrayBuffer = await imagePackerApi.packToData(data, packOpts);
     let bufferArr = new Uint8Array(readBuffer);
     let help = new util.Base64Helper();
     let base = help.encodeToStringSync(bufferArr);
     return base
   } catch (err) {
     return ''
   };
   ```
4. 回到主页面，将base64格式图片展示在头像页。

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──constants
│  │  └──StyleConstants.ets             // 样式常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──Home.ets                       // 入口页
│  │  └──MainPage.ets                   // 主页
│  ├──utils
│  │  ├──LocalDataManager.ets           // 更新缓存数据页
│  │  ├──PersonalInfoModel.ets          // 定义类型页
│  │  └──Preference.ets                 // preferences类型定义页
│  └──views
│     ├──ChangeDate.ets                 // 更新日期页
│     ├──ChangeGender.ets               // 更改性别页
│     ├──ChangeName.ets                 // 更新名称页
│     ├──ChangePhone.ets                // 更改电话号码页
│     ├──ChangeSignature.ets            // 更改签名页
│     └──ImageCrop.ets                  // 图片裁剪页
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[相册管理模块Functions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-f)

[@ohos.data.preferences（用户首选项）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-preferences)

## 代码下载

[个人头像上传示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260225101005.17522464142710505683817420319974%3A50001231000000%3A2800%3A428370CC4ECE924668C10FC8206A2ED942256E81A6509FC6178E213BA979D738.zip?needInitFileName=true)
