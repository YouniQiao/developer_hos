---
title: "在进行aes加密的时候，如何把字符串转换成Key对象"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-crypto-architecture-28
---

可参考如下代码：

```
import { buffer, util } from '@kit.ArkTS';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

@Entry
@Component
struct GetKey {
  // Convert string to byte stream
  stringToUint8Array(str: string) {
    return new Uint8Array(buffer.from(str, 'utf-8').buffer);
  }

  //Import key
  async getKey() {
    let symAlgName = 'AES128';
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator(symAlgName);
    let dataUint8Array = this.stringToUint8Array('294A2561FEFDF08D');
    let keyBlob: cryptoFramework.DataBlob = { data: dataUint8Array };
    console.info('keyBlob', JSON.stringify(keyBlob))
    let symKey = await symKeyGenerator.convertKey(keyBlob);
    return symKey;
  }

  build() {
    Column({ space: 10 }) {
      Button('aes加密时,字符串转换成Key对象')
        .onClick(() => {
          this.getKey();
        })
    }
    .alignItems(HorizontalAlign.Center)
    .height('100%')
    .width('100%')
  }
}
```
