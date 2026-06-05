---
title: "如何进行base64编码"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-92
format: md
---


可使用util中的Base64Helper()方法进行base64编码，参考代码如下：

```
import { util } from '@kit.ArkTS';

@Entry
@Component
struct Base64Encode {
  @State message: string = 'Base64 encoding';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            let base64 = new util.Base64Helper();
            let arr = new Uint8Array([48, 49, 2, 1, 1, 4, 32, 115, 56]);
            let base64Str = base64.encodeToStringSync(arr); // Uint8Array to base64
            console.log('encodeToStringSync',base64Str);
            // base64.decodeSync(''); // base64 to Uint8Array
            // console.log('decodeSync',base64.decodeSync(''));
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
