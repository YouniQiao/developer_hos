---
displayed_sidebar: appDevSidebar
title: "使用ImagePacker完成多图对象编码"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-picture-encoding
---

图片编码指将[Picture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-picture)对象编码成不同格式的图片文件（当前仅支持编码为JPEG 和 HEIF 格式），用于后续处理，如保存、传输等。

## 开发步骤

图片编码相关API的详细介绍请参见[ImagePacker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker)。

1. 导入相关模块包。

   ```
   // 导入相关模块。
   import { image } from '@kit.ImageKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { common } from '@kit.AbilityKit';
   import { fileIo } from '@kit.CoreFileKit';
   import { resourceManager } from '@kit.LocalizationKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/pages/EncodingPicture.ets#L16-L23" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：EncodingPicture.ets</a></div>

2. 设置编码选项[PackingOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#packingoption)。

   ![](./img/36555f32.png)

   这里以编码成jpeg图片为例。编码的目标格式format遵循MIME标准定义，因此PackingOption.format应设置为image/jpeg，编码后的文件扩展名可设为.jpg或.jpeg。

   ```
   let packOpts: image.PackingOption = {
     format: 'image/jpeg',
     quality: 95,
     needsPackProperties: true
   };
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L39-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CodecUtility.ets</a></div>

3. 封装函数，传入picture，使用[packing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packing13)接口编码到ArrayBuffer，或使用[packToFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-imagepacker#packtofile11-2)接口编码到文件。

   ![](./img/bfe6bd04.png)

   在进行编码前，需要先通过解码获取picture，可参考[使用ImageSource完成多图对象解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-picture-decoding)。

   * picture编码到ArrayBuffer。

     ```
     async function packing(picture: image.Picture, packOpts: image.PackingOption) {
       const imagePackerApi = image.createImagePacker();
       try {
         let data = await imagePackerApi.packing(picture, packOpts);
         copyData = data;
         console.info('Succeeded in packing the image.');
       } catch (error) {
         console.error('Failed to pack the picture to data. And the error is: ' + error);
       } finally {
         await imagePackerApi.release();
       }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L179-L196" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CodecUtility.ets</a></div>

   * picture编码到文件。

     ```
     async function packToFile(picture: image.Picture, packOpts: image.PackingOption, context: Context) {
       let imagePackerApi: image.ImagePacker | undefined = undefined;
       let file: fileIo.File | undefined = undefined;
       try {
         const path : string = context.cacheDir + '/picture.jpg';
         file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
         imagePackerApi = image.createImagePacker();
         await imagePackerApi.packToFile(picture, file.fd, packOpts);
       } catch (error) {
         console.error('Failed to pack the picture to file. And the error is: ' + error);
       } finally {
         if (file) {
           fileIo.closeSync(file.fd);
         }
         if (imagePackerApi) {
           await imagePackerApi.release();
         }
       }
     }
     ```

     

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Image/ImageArkTSSample/entry/src/main/ets/tools/CodecUtility.ets#L198-L218" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CodecUtility.ets</a></div>
