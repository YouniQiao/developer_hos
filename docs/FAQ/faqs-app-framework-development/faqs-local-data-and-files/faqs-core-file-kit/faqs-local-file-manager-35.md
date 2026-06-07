---
title: "如何将数据持续写入文件内"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-35
format: md
---


fileIo.writeSync方法中的WriteOptions.offset表示期望的文件写入位置。可以通过[filelo.read](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileioread)获取偏移量offset，然后在之前的数据位置继续写入数据。参考代码如下：

```
import { fileIo, WriteOptions } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Component
export struct ContinuousWrite {
  @State message: string = 'Hello World';

  aboutToAppear(): void {
    let context = this.getUIContext().getHostContext(); // Sandbox Path
    let filePath = context!.filesDir + '/test.txt';
    let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
    let arrayBuffer = new ArrayBuffer(4096);
    fileIo.read(file.fd, arrayBuffer).then((readLen: number) => {
      console.info(readLen.toString());
      let str: string = 'hello, world';
      let options: WriteOptions = { offset: readLen };
      let writeLen = fileIo.writeSync(file.fd, str, options);
      console.info('write data to file succeed and size is:' + writeLen);
    }).catch((err: BusinessError) => {
      console.error('read file data failed with error message: ' + err.message + ', error code: ' + err.code);
    }).finally(() => {
      fileIo.closeSync(file);
    });
  }

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('WriteHelloWorld')
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
