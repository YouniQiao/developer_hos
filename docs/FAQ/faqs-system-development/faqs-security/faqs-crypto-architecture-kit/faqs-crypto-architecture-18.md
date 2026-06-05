---
title: "如何将公钥转为十六进制或者base64进制数据"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-crypto-architecture-18
format: md
---


公钥转为十六进制或Base64编码数据，参考代码如下：

```
import { buffer, util } from '@kit.ArkTS';

@Entry
@Component
struct PubKeysConvert {
  build() {
    Column(){
      Button('公钥转十六进制').onClick(() => {
        let pubKeyData = '公钥'
        let res = buffer.from(pubKeyData).toString('hex')
        console.info('公钥转十六进制',res)
      })
      Button('公钥转base64').onClick(() => {
        let pubKeyUint8Array = new Uint8Array(buffer.from('公钥','utf-8').buffer)
        let res = new util.Base64Helper().encodeToStringSync(pubKeyUint8Array)
        console.info('公钥转base64',res)
      })
    }
  }
}
```
