---
displayed_sidebar: appDevSidebar
title: "随机生成对称密钥(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-sym-key-randomly
format: md
---


以AES和SM4为例，随机生成对称密钥（SymKey），并获得二进制数据。

对称密钥对象可用于后续加解密操作，二进制数据可用于存储或传输。

## 随机生成AES密钥

对应的算法规格请查看[对称密钥生成和转换规格：AES](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec#aes)。

1. 调用[cryptoFramework.createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator)，指定字符串参数'AES256'，创建密钥算法为AES、密钥长度为256位的对称密钥生成器（SymKeyGenerator）。
2. 调用[SymKeyGenerator.generateSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatesymkey-1)，随机生成对称密钥对象（SymKey）。
3. 调用[SymKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，获取密钥对象的二进制数据。

* 以使用Promise方式随机生成AES密钥为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function testGenerateAesKey() {
    // 创建SymKeyGenerator实例
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
    // 使用密钥生成器随机生成对称密钥
    let promiseSymKey = symKeyGenerator.generateSymKey();
    promiseSymKey.then(key => {
      // 获取对称密钥的二进制数据，输出256位密钥。长度为32字节
      let encodedKey = key.getEncoded();
      console.info('key hex: ' + encodedKey.data);
    });
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateSymmetricKeyArkTS/entry/src/main/ets/pages/aes/Promise.ets#L16-L30" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Promise.ets</a></div>

* 同步方法（调用方法[generateSymKeySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatesymkeysync12)）：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function testSyncGenerateAesKey() {
    // 创建SymKeyGenerator实例
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES256');
    // 使用密钥生成器随机生成对称密钥
    let promiseSymKey = symKeyGenerator.generateSymKeySync();
    // 获取对称密钥的二进制数据，输出256位密钥。长度为32字节
    let encodedKey = promiseSymKey.getEncoded();
    console.info('key hex: ' + encodedKey.data);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateSymmetricKeyArkTS/entry/src/main/ets/pages/aes/Sync.ets#L16-L28" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>


## 随机生成SM4密钥

对应的算法规格请查看[对称密钥生成和转换规格：SM4](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec#sm4)。

1. 调用[cryptoFramework.createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator)，指定字符串参数'SM4\_128'，创建密钥算法为SM4、密钥长度为128位的对称密钥生成器（SymKeyGenerator）。

   如果开发者需要使用其他算法，请注意修改此处入参的字符串参数。
2. 调用[SymKeyGenerator.generateSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatesymkey-1)，随机生成对称密钥对象（SymKey）。
3. 调用[SymKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，获取密钥对象的二进制数据。

* 以使用Promise方式随机生成SM4密钥为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function testGenerateSM4Key() {
    // 创建SymKeyGenerator实例
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('SM4_128');
    // 使用密钥生成器随机生成对称密钥
    let promiseSymKey = symKeyGenerator.generateSymKey();
    promiseSymKey.then(key => {
      // 获取对称密钥的二进制数据，输出128位字节流。长度为16字节
      let encodedKey = key.getEncoded();
      console.info('key hex: ' + encodedKey.data);
    });
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateSymmetricKeyArkTS/entry/src/main/ets/pages/sm4/Promise.ets#L16-L30" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Promise.ets</a></div>

* 同步方法（调用方法[generateSymKeySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatesymkeysync12)）：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function testSyncGenerateSm4Key() {
    // 创建SymKeyGenerator实例
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('SM4_128');
    // 使用密钥生成器随机生成对称密钥
    let promiseSymKey = symKeyGenerator.generateSymKeySync();
    // 获取对称密钥的二进制数据，输出128位字节流。长度为16字节
    let encodedKey = promiseSymKey.getEncoded();
    console.info('key hex: ' + encodedKey.data);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateSymmetricKeyArkTS/entry/src/main/ets/pages/sm4/Sync.ets#L16-L28" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>
