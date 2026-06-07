---
displayed_sidebar: appDevSidebar
title: "使用ImagePacker完成图片编码"
original_url: /docs/dev/app-dev/media/image-kit/image-arkts-dev/image-encoding-arts/image-encoding
format: md
---


图片编码指将PixelMap压缩成不同格式的图片文件，用于保存和传输。

支持使用[PackToData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtodata13-1)和[PackToFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtofile11-2)将[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)编码为JPEG、WebP、PNG和HEIC格式。

从API version 18开始，支持使用[PackToDataFromPixelmapSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtodatafrompixelmapsequence18)和[PackToFileFromPixelmapSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtofilefrompixelmapsequence18)将多个PixelMap编码为GIF格式。

## 开发步骤

图片编码相关API的详细介绍请参见[ImagePacker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker)。

### 图片编码进文件流

1. 导入相关模块包。

   ```
   // 导入相关模块。
   import { image } from '@kit.ImageKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { common } from '@kit.AbilityKit';
   import { fileIo } from '@kit.CoreFileKit';
   import { resourceManager } from '@kit.LocalizationKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/pages/EncodingPixelMap.ets#L16-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EncodingPixelMap.ets</a></div>

2. 设置编码选项[PackingOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#packingoption)。

   2.1 这里以编码成jpeg图片为例。编码的目标格式format遵循MIME标准定义，因此PackingOption.format应设置为image/jpeg，编码后的文件扩展名可设为.jpg或.jpeg。

   ```
   let packOpts : image.PackingOption = { format: 'image/jpeg', quality: 95 };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L104-L106" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>


   2.2 当图片源是HDR，且希望编码为HDR图片文件时，需要额外配置desiredDynamicRange。

   ```
   // 资源本身为hdr且设备支持HDR编码则会编码为hdr内容(需要资源本身为hdr且设备支持HDR编码，支持jpeg格式)。
   packOpts.desiredDynamicRange = image.PackingDynamicRange.AUTO;
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L107-L110" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>

3. 封装函数，传入imageSource或pixelMap，使用[packToData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtodata13)接口编码到ArrayBuffer，或使用[packToFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtofile11)接口编码到文件。

   ![](./img/ebc58c8e.png)

   在进行编码前，需要先获取imageSource或pixelMap，可参考[使用ImageSource完成图片解码](/docs/dev/app-dev/media/image-kit/image-arkts-dev/image-decoding-arts/image-decoding)。

   * 定义copyData，获取编码后的文件流，方便后续保存为图片或者用于解码显示。

     ```
     let copyData: ArrayBuffer = new ArrayBuffer(0);
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L20-L22" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>

   * pixelMap编码到ArrayBuffer。

     ```
     async function packToDataFromPixelMap(pixelMap : image.PixelMap) {
       const imagePackerApi = image.createImagePacker();
       let packOpts : image.PackingOption = { format: 'image/jpeg', quality: 95 };
       // 资源本身为hdr且设备支持HDR编码则会编码为hdr内容(需要资源本身为hdr且设备支持HDR编码，支持jpeg格式)。
       packOpts.desiredDynamicRange = image.PackingDynamicRange.AUTO;
       try{
         let data = await imagePackerApi.packToData(pixelMap, packOpts);
         // data 为编码获取到的文件流，写入文件保存即可得到一张图片。
         copyData = new ArrayBuffer(0);
         copyData = data;
       } catch (error) {
         console.error('Failed to pack the pixelMap to data. And the error is: ' + error);
       }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L99-L122" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>

   * imageSource编码到ArrayBuffer。

     ```
     async function packToDataFromImageSource(imageSource : image.ImageSource) {
       const imagePackerApi = image.createImagePacker();
       let packOpts : image.PackingOption = { format: 'image/jpeg', quality: 95 };
       try {
         let data = await imagePackerApi.packToData(imageSource, packOpts);
         // data 为编码获取到的文件流，写入文件保存即可得到一张图片。
         copyData = new ArrayBuffer(0);
         copyData = data;
       } catch (error) {
         console.error('Failed to pack the imageSource to data. And the error is: ' + error);
       }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L124-L139" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>

   * pixelMap编码到文件。

     ```
     async function packToFileFromPixelMap(context : Context, pixelMap : image.PixelMap) {
       const imagePackerApi = image.createImagePacker();
       let packOpts : image.PackingOption = { format: 'image/jpeg', quality: 95 };
       const path : string = context.cacheDir + '/pixel_map.jpg';
       let file: fileIo.File | undefined = undefined;
       try {
         file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
         await imagePackerApi.packToFile(pixelMap, file.fd, packOpts);
       } catch (error) {
         console.error('Failed to pack the pixelMap to file. And the error is: ' + error);
       } finally {
         if (file) {
           fileIo.closeSync(file.fd);
         }
       }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L141-L158" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>

   * imageSource编码到文件。

     ```
     async function packToFileFromImageSource(context : Context, imageSource : image.ImageSource) {
       const imagePackerApi = image.createImagePacker();
       let packOpts : image.PackingOption = { format: 'image/jpeg', quality: 95 };
       const filePath : string = context.cacheDir + '/image_source.jpg';
       let file: fileIo.File | undefined = undefined;
       try {
         file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
         await imagePackerApi.packToFile(imageSource, file.fd, packOpts);
       } catch (error) {
         console.error('Failed to pack the imageSource to file. And the error is: ' + error);
       } finally {
         if (file) {
           fileIo.closeSync(file.fd);
         }
       }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L160-L177" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CodecUtility.ets</a></div>

4. 将图片保存进图库。

将图片编码到ArrayBuffer或文件后，可使用[Media Library Kit](/docs/dev/app-dev/media/medialibrary-kit/photoaccesshelper-overview)的相关接口[保存媒体库资源](/docs/dev/app-dev/media/medialibrary-kit/photoaccesshelper-savebutton)保存进图库。

## 示例代码

* [图片压缩](https://gitcode.com/HarmonyOS_Samples/image-compression)
