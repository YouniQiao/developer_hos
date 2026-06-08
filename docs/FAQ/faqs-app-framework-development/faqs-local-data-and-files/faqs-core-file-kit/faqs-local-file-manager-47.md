---
title: "如何创建临时文件"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-47
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-47
last_sync: 2026-06-07
sync_hash: b12c65d5
upstream_hash: 2fcd29b8785c
---

可以参考如下示例：

```
import { fileIo, ReadOptions } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { buffer } from '@kit.ArkTS';

@Entry
@Component
struct CreateFileDemo {
  @State message: string = 'Hello World';
  @State writeStr: string = 'write content';
  @State readStr: string = 'read content';

  build() {
    Column() {
      Text(this.message)
      Button(this.writeStr)
        .margin({ top: 15, bottom: 15 })
        .onClick(() => {
          let context = this.getUIContext().getHostContext();
          let filesDir = context!.tempDir;
          let file = fileIo.openSync(filesDir + 'test.txt', fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
          // Write a paragraph of content to a file
          fileIo.writeSync(file.fd, 'Try to write str.');
          console.info('str has been written');
          // close file
          fileIo.closeSync(file);
        })
      Button(this.readStr)
        .onClick(() => {
          let context = this.getUIContext().getHostContext();
          let filesDir = context!.tempDir;
          let file = fileIo.openSync(filesDir + 'test.txt', fileIo.OpenMode.READ_WRITE);
          // Read a section of content from a file
          let arrayBuffer = new ArrayBuffer(1024);
          let readOptions: ReadOptions = {
            offset: 0,
            length: arrayBuffer.byteLength
          };
          let readLen = fileIo.readSync(file.fd, arrayBuffer, readOptions);
          let buf = buffer.from(arrayBuffer, 0, readLen);
          this.message = buf.toString();
          // close file
          fileIo.closeSync(file);
        })
    }
    .height('100%')
    .width('100%')
  }
}
```
