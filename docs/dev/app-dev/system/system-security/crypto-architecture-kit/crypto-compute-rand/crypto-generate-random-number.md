---
title: "安全随机数生成(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number
format: md
---


![](./img/3dfddc02.png)

从API version 12开始，轻量级智能穿戴设备支持获取随机数相关操作。

随机数主要用于临时会话密钥生成和非对称加密算法密钥生成等场景。在加解密场景中，安全随机数生成器需要具备随机性、不可预测性与不可重现性。当前系统生成的随机数满足密码学安全伪随机性要求。

开发者可以调用接口，完成以下功能：

* 生成指定长度的安全随机数，并将其用于生成对应的密钥。
* 指定随机种子，生成一系列的随机序列。

在开发前，开发者应该先对加解密基础知识有一定了解，并熟知以下随机数相关的基本概念：

* **内部状态**

  代表随机数生成器内存中的数值，当内部状态相同时，随机数生成器会生成固定的随机数序列。
* **随机种子**

  一个用来对伪随机数的内部状态进行初始化的数据，随机数生成器通过种子来生成一系列的随机序列。

  当前OpenSSL实现方式，随机数生成器内部状态是不断变化的，即使设置相同的种子，生成的随机数序列也不会相同。

## 支持的算法与规格

随机数生成算法使用OpenSSL的RAND\_priv\_bytes接口生成安全随机数。

| 算法 | 长度（Byte） |
| --- | --- |
| CTR\_DRBG | [1, INT\_MAX] |

## 开发步骤

1. 调用[cryptoFramework.createRandom](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreaterandom)，生成随机数实例。
2. （可选）设置DataBlob数据，调用[Random.setSeed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#setseed)，为随机数生成池设置种子。
3. 设置指定字节长度，调用[Random.generateRandom](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generaterandom)或[Random.generateRandomSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generaterandomsync10)，生成安全随机数。

   指定字节长度范围为1~INT\_MAX。

* 通过await返回异步结果：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  async function doRand() {
      let rand = cryptoFramework.createRandom();
      let seed = new Uint8Array([1, 2, 3]);
      rand.setSeed({ data: seed });
      let len = 12;
      let randOutput = await rand.generateRandom(len);
      console.info('rand output: ' + randOutput.data);
    }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SecureRandomNumberGeneration/entry/src/main/ets/pages/Await.ets#L15-L27" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Await.ets</a></div>

* 同步返回结果：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { BusinessError } from '@kit.BasicServicesKit';

  function doRandBySync() {
    let rand = cryptoFramework.createRandom();
    let len = 24; // Generate a 24-byte random number.
    try {
      let randData = rand.generateRandomSync(len);
      if (randData.data.length !== 0) {
        console.info('[Sync]: rand result: ' + randData.data);
      } else {
        console.error('[Sync]: get rand result: fail!');
      }
    } catch (error) {
      let e: BusinessError = error as BusinessError;
      console.error(`do rand failed: errCode: ${e.code}, message: ${e.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SecureRandomNumberGeneration/entry/src/main/ets/pages/Sync.ets#L15-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>
