---
title: "如何使用SM3算法进行消息鉴别码计算"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-24
format: md
---


1. 设置算法，通过createMac接口生成消息鉴别码实例。
2. 接收对称密钥，通过init接口初始化Mac。
3. 接收数据，通过update接口更新Mac。此步骤可重复。
4. 通过doFinal接口，返回MAC计算结果。
5. 将结果转换为十六进制。

核心代码如下：

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer } from '@kit.ArkTS';

@Entry
@Component
struct Hmac {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Button('使用SM3算法进行消息鉴别码计算')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            getHmac('密钥')
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}

// Convert understandable strings into byte streams
function stringToUint8Array(str: string) {
  let arr = new Uint8Array(str.length);
  for (let i = 0, j = str.length; i < j; ++i) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

async function getHmac(message:string){

  try {
    let macAlgName = 'SM3';
    let mac =cryptoFramework.createMac(macAlgName)
    let arr = stringToUint8Array('30a86dc9056c44cc05420fec269270214bbb6914954e871e83771c9810ac1db0')
    let KeyBlob: cryptoFramework.DataBlob = {data:arr};
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('HMAC');
    const  symKey=await symKeyGenerator.convertKey(KeyBlob);
    await mac.init(symKey)
    await mac.update({data:stringToUint8Array(message)});
    let macOutpt= await mac.doFinal();
    const res=buffer.from(macOutpt.data).toString('hex');
    console.log('Hmac---:'+res);
  }catch (err){
    console.log('err:'+err)
  }

}
```
