---
title: "图片解码"
original_url: /docs/dev/atomic-dev/atomic-image-development/atomic-image-decoding
format: md
---


图片解码指将所支持格式的图片文件解码成PixelMap，以便在应用或系统中显示或处理图片。当前支持的图片文件格式包括JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG、HEIF。不同硬件设备的支持情况可能不同 。

## 开发步骤

1. 全局导入Image模块。

   ```
   import image from '@ohos.multimedia.image';
   ```
2. 获取图片。

   * 方法一：通过沙箱路径直接获取图片。该方法仅适用于应用沙箱中的图片。具体请参考获取应用文件路径。应用沙箱的介绍及如何向应用沙箱推送文件，请参考[文件管理](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory)。

     ```
     function getFilePath(context: Context): string {
       const filePath: string = context.cacheDir + '/test.jpg';
       return filePath;
     }
     ```
   * 方法二：通过沙箱路径获取图片的文件描述符。该方法需要导入@kit.CoreFileKit模块。

     ```
     import { fileIo } from '@kit.CoreFileKit';

     function getFileFd(context: Context): number | undefined {
       const filePath: string = context.cacheDir + '/test.jpg';
       const file: fileIo.File = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE);
       const fd: number = file?.fd;
       return fd;
     }
     ```
   * 方法三：通过资源管理器获取资源文件的ArrayBuffer。该方法需要导入@kit.LocalizationKit模块。

     ```
     import { resourceManager } from '@kit.LocalizationKit';

     async function getFileBuffer(context: Context): Promise<ArrayBuffer | undefined> {
       try {
         const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
         // 获取资源文件内容，返回Uint8Array。
         const fileData: Uint8Array = await resourceMgr.getRawFileContent('test.jpg');
         console.info('Successfully got RawFileContent');
         // 转为ArrayBuffer并返回。
         const buffer: ArrayBuffer = fileData.buffer.slice(0);
         return buffer;
       } catch (error) {
         console.error("Failed to get RawFileContent");
         return undefined;
       }
     }
     ```
   * 方法四：通过资源管理器获取资源文件的RawFileDescriptor。该方法需要导入@kit.LocalizationKit模块。

     ```
     import { resourceManager } from '@kit.LocalizationKit';

     async function getRawFd(context: Context): Promise<resourceManager.RawFileDescriptor | undefined> {
       try {
         const resourceMgr: resourceManager.ResourceManager = context.resourceManager;
         const rawFileDescriptor: resourceManager.RawFileDescriptor = await resourceMgr.getRawFd('test.jpg');
         console.info('Successfully got RawFileDescriptor');
         return rawFileDescriptor;
       } catch (error) {
         console.error('Failed to get RawFileDescriptor:');
         return undefined;
       }
     }
     ```
3. 创建ImageSource实例。

   * 方法一：通过沙箱路径创建ImageSource。沙箱路径可以通过步骤2的方法一获取。

     ```
     // path为已获得的沙箱路径
     const imageSource : image.ImageSource = image.createImageSource(filePath);
     ```
   * 方法二：通过文件描述符fd创建ImageSource。文件描述符可以通过步骤2的方法二获取。

     ```
     // fd为已获得的文件描述符
     const imageSource : image.ImageSource = image.createImageSource(fd);
     ```
   * 方法三：通过缓冲区数组创建ImageSource。缓冲区数组可以通过步骤2的方法三获取。

     ```
     const imageSource : image.ImageSource = image.createImageSource(buffer);
     ```
   * 方法四：通过资源文件的RawFileDescriptor创建ImageSource。RawFileDescriptor可以通过步骤2的方案四获取。

     ```
     const imageSource : image.ImageSource = image.createImageSource(rawFileDescriptor);
     ```
4. 获取图片信息。

   通过ImageSource实例获取图片信息。

   ```
   imageSource.getImageInfo(0,(error : BusinessError, imageInfo : image.ImageInfo) => {
       if(error) {
           console.error('getImageInfo failed.');
       } else {
           console.info('getImageInfo succeeded.');
       }
   })
   ```
5. 设置解码参数DecodingOptions，解码获取PixelMap图片对象。

   ```
   import {BusinessError} from '@ohos.base';
   let decodingOptions : image.DecodingOptions = {
       editable: true,
       desiredPixelFormat: image.PixelMapFormat.RGBA_8888,
   }
   imageSource.createPixelMap(decodingOptions).then((pixelMap : image.PixelMap) => {
       console.info("Succeeded in creating PixelMap")
   }).catch((err : BusinessError) => {
       console.error("Failed to create PixelMap")
   });
   ```
