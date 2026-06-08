---
displayed_sidebar: appDevSidebar
title: "使用Picker选择媒体库资源"
original_url: /docs/dev/app-dev/media/medialibrary-kit/photoaccesshelper-photoviewpicker
format: md
upstream_id: dev/app-dev/media/medialibrary-kit/photoaccesshelper-photoviewpicker
last_sync: 2026-06-07
sync_hash: aaefc391
---
当用户需要分享图片、视频等文件时，开发者可以通过特定接口拉起系统图库，让用户自行选择待分享的资源，完成分享。此接口本身无需申请权限，目前适用于界面UIAbility，使用窗口组件触发。具体使用方式如下：

![](./img/d445bbd7.png)

Media Library Kit提供图片和视频的管理能力，当需要读取和保存音频文件时，请使用[AudioViewPicker（音频选择器对象）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker#audioviewpicker)。

1. 导入选择器模块和文件管理模块。

   ```
   import { fileIo } from '@kit.CoreFileKit';
   import { photoAccessHelper } from '@kit.MediaLibraryKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L16-L19" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>

2. 创建图片-音频类型文件选择选项实例。

   ```
   const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/pages/Index.ets#L46-L48" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

3. 配置可选的媒体文件类型和媒体文件的最大数目。

以下示例以图片选择为例，媒体文件类型请参见[PhotoViewMIMETypes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-e#photoviewmimetypes)。

```
photoSelectOptions.maxSelectNumber = 5;
photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;
photoSelectOptions.isPhotoTakingSupported = true;
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/pages/Index.ets#L51-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


1. 创建图库选择器实例，调用[PhotoViewPicker.select](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker#select)接口拉起图库界面进行文件选择。文件选择成功后，返回[PhotoSelectResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-class#photoselectresult)结果集。

   ```
   const result = await photoViewPicker.select(photoSelectOptions);

   // 文件选择成功后，返回PhotoSelectResult结果集
   console.info('选择成功，返回结果: ' + JSON.stringify(result));
   console.info('选择的文件数量: ' + result.photoUris.length);

   // 更新选中的URI列表
   this.selectedUris = result.photoUris;
   // 设置默认选中第一个URI用于读取操作
   if (this.selectedUris.length > 0) {
     this.selectedUriForRead = this.selectedUris[0];
   }

   // 调用工具类处理结果
   this.processedItems = MediaLibraryPickerUtils.handleSelectResult(this.selectedUris);
   console.info('处理后的结果数量: ' + this.processedItems.length);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/pages/Index.ets#L60-L77" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


   select返回的uri权限是只读权限，可以根据结果集中uri进行读取文件数据操作。注意不能在picker的回调里直接使用此uri进行打开文件操作，需要定义一个全局变量保存uri，类似使用一个按钮去触发打开文件。可参考[指定URI读取文件数据](#指定uri读取文件数据)。

   也可以通过返回的uri[获取图片或视频资源](#指定uri获取图片或视频资源)。

   如有获取元数据需求，可以通过[文件管理接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)和[文件URI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri)根据uri获取部分文件属性信息，比如文件大小、访问时间、修改时间、文件名、文件路径等。

## 指定URI读取文件数据

1. 待界面从图库返回后，再通过一个类似按钮的组件去调用其他函数，使用[fileIo.openSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileioopensync)接口，通过[媒体文件uri](/docs/dev/app-dev/application-framework/core-file-kit/user-files/user-file-uri-intro#媒体文件uri)打开这个文件得到fd。这里需要注意接口权限参数是fileIo.OpenMode.READ\_ONLY。

   ```
   try {
     const file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);
     console.info('file fd: ' + file.fd);
     return { fd: file.fd, file: file };
   } catch (error) {
     console.error('openSync failed with err: ' + error);
     return null;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L105-L114" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>

2. 通过fd使用[fileIo.readSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#readsync)接口读取这个文件内的数据，读取完成后关闭fd。

   ```
   try {
     const buffer = new ArrayBuffer(bufferSize);
     const readLen = fileIo.readSync(fileObj.fd, buffer);
     console.info('readSync data to file succeed and buffer size is:' + readLen);
     return { data: buffer, length: readLen };
   } catch (error) {
     console.error('readSync failed with err: ' + error);
     return null;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L124-L134" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>


## 指定URI获取图片或视频资源

媒体库支持Picker选择[媒体文件](/docs/dev/app-dev/application-framework/core-file-kit/user-files/user-file-uri-intro#媒体文件uri)URI后，根据指定URI获取图片或视频资源，下面以查询指定URI为'file://media/Photo/1/IMG\_datetime\_0001/displayName.jpg'为例。

1. 定义媒体资源处理器[MediaAssetDataHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaassetdatahandler)，系统在资源准备就绪时向应用回调onDataPrepared。

   ```
   export class MediaAssetDataHandler implements photoAccessHelper.MediaAssetDataHandler<ArrayBuffer> {
     private callback?: MediaDataHandlerCallback;

     constructor(callback?: MediaDataHandlerCallback) {
       this.callback = callback;
     }

     // 使用箭头函数确保this引用不会丢失
     onDataPrepared = (data: ArrayBuffer) => {
       if (data === undefined) {
         console.error('Error occurred when preparing data');
         return;
       }
       console.info('on image data prepared');
       // 现在this始终指向MediaAssetDataHandler实例
       if (this.callback) {
         this.callback(data);
       }
     };
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L55-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>

2. 使用[getAssets](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#getassets-1)接口获取要访问的资产，并通过[requestImageData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-mediaassetmanager#requestimagedata11)获取对应资源。

   ![](./img/9de2da82.png)

   出于对用户隐私安全的保护，对媒体资源EXIF中的地理位置和拍摄参数信息做了去隐私化处理。如果需要获取被去隐私化的EXIF信息，需要[申请相册管理模块权限](/docs/dev/app-dev/media/photoaccesshelper-preparation#申请相册管理模块功能相关权限)'ohos.permission.MEDIA\_LOCATION'。

   ```
   static async getMediaResourceByUri(uri: string, context: common.Context, callback?: MediaDataHandlerCallback)
   : Promise<void> {
     try {
       // 创建PhotoAccessHelper实例
       const phAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);

       // 创建查询条件
       const predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
       predicates.equalTo(photoAccessHelper.PhotoKeys.URI, uri);

       // 设置查询选项
       const fetchOptions: photoAccessHelper.FetchOptions = {
         fetchColumns: [photoAccessHelper.PhotoKeys.TITLE],
         predicates: predicates
       };

       // 查询资产
       const fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> =
         await phAccessHelper.getAssets(fetchOptions);

       const photoAsset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
       if (photoAsset) {
         console.info('getAssets photoAsset.uri : ' + photoAsset.uri);
         // 获取标题属性
         console.info('title : ' + photoAsset.get(photoAccessHelper.PhotoKeys.TITLE));

         // 设置请求选项
         const requestOptions: photoAccessHelper.RequestOptions = {
           deliveryMode: photoAccessHelper.DeliveryMode.HIGH_QUALITY_MODE,
         };

         // 请求图片数据
         await photoAccessHelper.MediaAssetManager.requestImageData(
           context, photoAsset, requestOptions, new MediaAssetDataHandler(callback));

         console.info('requestImageData successfully');
       } else {
         console.error('No asset found for URI: ' + uri);
       }

       // 关闭查询结果
       fetchResult.close();
     } catch (err) {
       console.error('getMediaResourceByUri failed with err: ' + err);
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Picker/PickerMediaLibrarySample/entry/src/main/ets/common/utils/MediaLibraryPickerUtils.ets#L181-L227" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MediaLibraryPickerUtils.ets</a></div>
