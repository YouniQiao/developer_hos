---
title: "如何选择文件保存路径"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-media-library-5
format: md
---


官网中保存用户文件提供的方法是FilePicker需要拉起系统应用，再由用户选择具体路径保存文件的，参考文档：[保存用户文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/save-user-file)。

保存文件到媒体库时，使用SaveButton控件，示例如下：

```
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { fileIo } from '@kit.CoreFileKit';

@Entry
@Component
struct WebComponent {
  build() {
    Row() {
      Column() {
        Image($r('app.media.startIcon'))
          .height(200)
          .width(200)
        SaveButton().onClick(async (event: ClickEvent, result: SaveButtonOnClickResult) => {
          if (result === SaveButtonOnClickResult.SUCCESS) {
            try {
              const context = this.getUIContext().getHostContext()!;
              let helper = photoAccessHelper.getPhotoAccessHelper(context);
              // Create image files through the Create Asset interface within 10 seconds after the nClick trigger, and revoke the Create Asset permission after 10 seconds.
              let uri = await helper.createAsset(photoAccessHelper.PhotoType.IMAGE, 'jpg');
              // Using URI to open files allows for continuous writing of content without time constraints during the writing process
              let file = await fileIo.open(uri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
              try {
                context.resourceManager.getMediaContent($r('app.media.startIcon').id, 0)
                  .then(async value => {
                    let media = value.buffer;
                    // Write to the media library file
                    await fileIo.write(file.fd, media);
                    await fileIo.close(file.fd);
                    this.getUIContext().showAlertDialog({ message: 'Saved to album!' });
                  });
              } catch (err) {
                console.error('error is ' + JSON.stringify(err))
              }
            } catch (error) {
              console.error('error is ' + JSON.stringify(error));
            }
          } else {
            this.getUIContext().showAlertDialog({ message: 'Failed to set permissions' })
          }
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
