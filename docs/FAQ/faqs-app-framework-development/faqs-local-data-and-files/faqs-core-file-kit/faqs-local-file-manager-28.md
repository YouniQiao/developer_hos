---
format: md
title: "如何从一个二进制文件中读取其字节数组？通过fileIo.createStreamSync只能获取到ArrayBuffer，如何转成number[]"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-28
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-28
last_sync: 2026-06-07
sync_hash: 4722898a
---
```
@Component
export struct ArrayBufferConversionArray {
  @State fileLength: number = 10;
  private tempData: number[] = [];

  aboutToAppear(): void {
    // Convert ArrayBuffer to a number array
    let arrayBuffer: ArrayBuffer = new ArrayBuffer(this.fileLength);
    let dataView: DataView = new DataView(arrayBuffer);
    for (let index = 0; index < this.fileLength; index++) {
      this.tempData[index] = dataView.getInt8(index);
    }
    console.info(this.tempData.toString());
  }

  build() {
    RelativeContainer() {
      Text(this.tempData.toString())
        .id('ArrayBufferHelloWorld')
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
