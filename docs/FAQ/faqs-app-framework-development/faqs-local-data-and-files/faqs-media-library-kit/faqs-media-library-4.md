---
title: "关于导入图片的使用权限和问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-media-library-4
format: md
---


**问题描述**

需要导入图片并获取图片地址，然后传递到底层C++代码。经过测试发现，导入后读取图片时失败。

**问题定位**

当前手机不支持在C++层直接打开公共路径。仅支持在TS侧打开后，将文件描述符（fd）传递到C侧，然后使用dopen进行打开。

**参考代码**

将公共路径下的文件保存至沙箱路径，并将文件描述符（fd）传入C侧。C侧通过fd操作文件。

```
import { BusinessError } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

let context = AppStorage.get("context") as UIContext;
let filesDir = context.getHostContext()?.filesDir;
function savePictureToContext(){
  const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
  photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE; // Filter and select media file type as IMAGE
  photoSelectOptions.maxSelectNumber = 5; // Select the maximum number of media files
  let uris: Array<string> = [];
  const photoViewPicker = new photoAccessHelper.PhotoViewPicker();
  photoViewPicker.select(photoSelectOptions).then((photoSelectResult: photoAccessHelper.PhotoSelectResult) => {
    uris = photoSelectResult.photoUris;
    console.info('photoViewPicker.select to file succeed and uris are:' + uris);
  }).catch((err: BusinessError) => {
    console.error('Invoke photoViewPicker.select failed, code is'+ err.code+', message is '+err.message);
  })
  let uri: string = uris[0];
  let file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);
  console.info('file fd: ' + file.fd);
  let fd =file.fd;
  fileIo.copyFileSync(fd, filesDir + '/test2.jpg')
  let file2 = fileIo.openSync(filesDir + '/test2.jpg', fileIo.OpenMode.READ_ONLY );
  let file3 = fileIo.openSync(filesDir + '/test3.jpg', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  // After passing fd in, the C end can call it
  // ReadFile(file2.fd,file3.fd)
}
```
