---
title: "如何获取到resources下rawfile 的文件"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-30
format: md
---


可以通过[@ohos.resourceManager (资源管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager)模块中的[getRawFileContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfilecontent9)接口来获取resources/rawfile目录下对应的rawfile文件内容。参考代码如下：

```
import { fileIo } from '@kit.CoreFileKit';

@Component
export struct GetRawfile {
  @State message: string = 'Hello World';

  aboutToAppear(): void {
    this.getUIContext().getHostContext()?.resourceManager.getRawFileContent('test.txt', (_err, value) => {
      if (_err) {
        console.error('Failed to get raw file:', _err);
        return;
      }
      let fileBuffer: ArrayBufferLike = value.buffer;
      let context = this.getUIContext()
        .getHostContext(); // Obtain the application sandbox path for storing temporary files, and perform null checking
      let filePath = context!.filesDir + '/test.txt';
      console.info('testTag-filePath:' + filePath);
      let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
      let writeLen = fileIo.writeSync(file.fd, fileBuffer);
      console.info('testTag-write data to file succeed and size is:' + writeLen);
      fileIo.closeSync(file);
    });
  }

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('RawfileHelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
