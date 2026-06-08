---
title: "使用Picker选择媒体库资源"
original_url: /docs/dev/atomic-dev/atomic-media-library-development/atomic-medialibrary-photoviewpicker
format: md
upstream_id: dev/atomic-dev/atomic-media-library-development/atomic-medialibrary-photoviewpicker
last_sync: 2026-06-07
sync_hash: 84bbedc5
---
用户有时需要分享图片、视频等用户文件，开发者可以通过特定接口拉起系统图库，用户自行选择待分享的资源，然后最终分享出去。此接口本身无需申请权限，目前适用于界面UIAbility，使用窗口组件触发。具体使用方式如下：

1. 导入[选择器模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-photoaccesshelper)(@ohos.file.photoAccessHelper)和[文件管理模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)(@ohos.file.fs)。

   ```
   import photoAccessHelper from '@kit.MediaLibraryKit';
   import fs from '@ohos.file.fs';
   import { BusinessError } from '@ohos.base';
   ```
2. 创建图片-音频类型文件选择选项实例。

   ```
   const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
   ```
3. 选择媒体文件类型和选择媒体文件的最大数目。

   以下示例以图片选择为例，媒体文件类型请参见PhotoViewMIMETypes。

   ```
   photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE; // 过滤选择媒体文件类型为IMAGE
   photoSelectOptions.maxSelectNumber = 5; // 选择媒体文件的最大数目
   ```
4. 创建图库选择器实例，调用PhotoViewPicker.select接口拉起图库界面进行文件选择。文件选择成功后，返回PhotoSelectResult结果集。

   select返回的uri权限是只读权限，可以根据结果集中uri进行读取文件数据操作。注意不能在picker的回调里直接使用此uri进行打开文件操作，需要定义一个全局变量保存uri，使用类似一个按钮去触发打开文件。

   如有获取元数据需求，可以通过[@ohos.file.fs (文件管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)和[文件URI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri)根据uri获取部分文件属性信息，比如文件大小、访问时间、修改时间、文件名、文件路径等。

   ```
   let uris: Array<string> = [];
   const photoViewPicker = new photoAccessHelper.PhotoViewPicker();
   photoViewPicker.select(photoSelectOptions).then((photoSelectResult: photoAccessHelper.PhotoSelectResult) => {
     uris = photoSelectResult.photoUris;
     console.info('photoViewPicker.select to file succeed and uris are:' + uris);
   }).catch((err: BusinessError) => {
     console.error(`Invoke photoViewPicker.select failed, code is ${err.code}, message is ${err.message}`);
   })
   ```
5. 待界面从图库返回后，再通过类似一个按钮调用其他函数，使用fs.openSync接口，通过uri打开这个文件得到fd。这里需要注意接口权限参数是fs.OpenMode.READ\_ONLY。

   ```
   let uri: string = '';
   let file = fs.openSync(uri, fs.OpenMode.READ_ONLY);
   console.info('file fd: ' + file.fd);
   ```
6. 通过fd使用fs.readSync接口读取这个文件内的数据，读取完成后关闭fd。

   ```
   let buffer = new ArrayBuffer(4096);
   let readLen = fs.readSync(file.fd, buffer);
   console.info('readSync data to file succeed and buffer size is:' + readLen);
   fs.closeSync(file);
   ```
