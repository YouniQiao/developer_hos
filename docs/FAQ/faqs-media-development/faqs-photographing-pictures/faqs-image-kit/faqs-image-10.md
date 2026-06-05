---
title: "如何读取相册中的图片"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-image-10
format: md
---


使用photoAccessHelper.PhotoSelectOptions接口读取相册中的图片

```
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { image } from '@kit.ImageKit';
import { fileIo } from '@kit.CoreFileKit';

@Entry
@Component
struct Index {
  @State getAlbum: string = '显示相册中的图片';
  @State pixel: image.PixelMap | undefined = undefined;
  @State albumPath: string = '';
  @State photoSize: number = 0;

  async getPictureFromAlbum() {
    // Pull up the album and select the pictures
    let PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
    PhotoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
    PhotoSelectOptions.maxSelectNumber = 1;
    let photoPicker = new photoAccessHelper.PhotoViewPicker();
    let photoSelectResult: photoAccessHelper.PhotoSelectResult = await photoPicker.select(PhotoSelectOptions);
    this.albumPath = photoSelectResult.photoUris[0];

    // Read the image as a buffer
    const file = fileIo.openSync(this.albumPath, fileIo.OpenMode.READ_ONLY);
    this.photoSize = fileIo.statSync(file.fd).size;
    console.info('Photo Size: ' + this.photoSize);
    let buffer = new ArrayBuffer(this.photoSize);
    fileIo.readSync(file.fd, buffer);
    fileIo.closeSync(file);

    // Decoding into PixelMap
    const imageSource = image.createImageSource(buffer);
    console.log('imageSource: ' + JSON.stringify(imageSource));
    this.pixel = await imageSource.createPixelMap({});
  }

  build() {
    Row() {
      Column() {
        Image(this.pixel)
          .width('100%')
          .aspectRatio(1)
        Button('显示照片')
          .onClick(() => {
            this.getPictureFromAlbum();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
