---
title: "随机生成非对称密钥对(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-randomly
format: md
---


以RSA和SM2为例，随机生成非对称密钥对（KeyPair），并获得二进制数据。

非对称密钥对可用于后续加解密等操作，二进制数据可用于存储或传输。

## 随机生成RSA密钥对

对应的算法规格请查看[非对称密钥生成和转换规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#rsa)。

1. 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)，指定字符串参数'RSA1024|PRIMES\_2'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（AsyKeyGenerator）。
2. 调用[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，随机生成非对称密钥对象（KeyPair）。

   KeyPair对象中包括公钥PubKey、私钥PriKey。
3. 调用[PubKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)和[PriKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，分别获取密钥对象的二进制数据。

* 以使用Promise方式随机生成RSA密钥对为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function generateAsyKey() {
    // 创建一个AsyKeyGenerator实例
    let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');
    // 使用密钥生成器随机生成非对称密钥对
    let keyGenPromise = rsaGenerator.generateKeyPair();
    keyGenPromise.then(keyPair => {
      let pubKey = keyPair.pubKey;
      let priKey = keyPair.priKey;
      // 获取非对称密钥对的二进制数据
      let pkBlob = pubKey.getEncoded();
      let skBlob = priKey.getEncoded();
      console.info('pk bin data: ' + pkBlob.data);
      console.info('sk bin data: ' + skBlob.data);
    });
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateAsymmetricKeyPairArkTS/entry/src/main/ets/pages/rsa/Promise.ets#L16-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Promise.ets</a></div>

* 同步返回结果（调用方法[generateKeyPairSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypairsync12)）：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function generateAsyKeySync() {
    // 创建一个AsyKeyGenerator实例
    let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024|PRIMES_2');
    // 使用密钥生成器随机生成非对称密钥对
    try {
      let keyPair = rsaGenerator.generateKeyPairSync();
      if (keyPair != null) {
        let pubKey = keyPair.pubKey;
        let priKey = keyPair.priKey;
        // 获取非对称密钥对的二进制数据
        let pkBlob = pubKey.getEncoded();
        let skBlob = priKey.getEncoded();
        console.info('pk bin data: ' + pkBlob.data);
        console.info('sk bin data: ' + skBlob.data);
      } else {
        console.error('[Sync]: get key pair result: fail!');
      }
    } catch (e) {
      console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateAsymmetricKeyPairArkTS/entry/src/main/ets/pages/rsa/Sync.ets#L16-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>


## 随机生成SM2密钥对

对应的算法规格请查看[非对称密钥生成和转换规格：SM2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#sm2)。

1. 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)，指定字符串参数'SM2\_256'，创建密钥算法为SM2、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。
2. 调用[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，随机生成非对称密钥对象（KeyPair）。

   KeyPair对象中包括公钥PubKey、私钥PriKey。
3. 调用[PubKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)和[PriKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，分别获取密钥对象的二进制数据。

* 以使用Promise方式随机生成SM2密钥对为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function generateSM2Key() {
    // 创建一个AsyKeyGenerator实例
    let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');
    // 使用密钥生成器随机生成非对称密钥对
    let keyGenPromise = sm2Generator.generateKeyPair();
    keyGenPromise.then(keyPair => {
      let pubKey = keyPair.pubKey;
      let priKey = keyPair.priKey;
      // 获取非对称密钥对的二进制数据
      let pkBlob = pubKey.getEncoded();
      let skBlob = priKey.getEncoded();
      console.info('pk bin data: ' + pkBlob.data);
      console.info('sk bin data: ' + skBlob.data);
    });
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateAsymmetricKeyPairArkTS/entry/src/main/ets/pages/sm2/Promise.ets#L16-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Promise.ets</a></div>

* 同步返回结果（调用方法[generateKeyPairSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypairsync12)）：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';

  function generateSM2KeySync() {
    // 创建一个AsyKeyGenerator实例
    let sm2Generator = cryptoFramework.createAsyKeyGenerator('SM2_256');
    // 使用密钥生成器随机生成非对称密钥对
    try {
      let keyPair = sm2Generator.generateKeyPairSync();
      if (keyPair != null) {
        let pubKey = keyPair.pubKey;
        let priKey = keyPair.priKey;
        // 获取非对称密钥对的二进制数据
        let pkBlob = pubKey.getEncoded();
        let skBlob = priKey.getEncoded();
        console.info('pk bin data: ' + pkBlob.data);
        console.info('sk bin data: ' + skBlob.data);
      } else {
        console.error('[Sync]: get key pair result: fail!');
      }
    } catch (e) {
      console.error(`get key pair failed: errCode: ${e.code}, message: ${e.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateAsymmetricKeyPairArkTS/entry/src/main/ets/pages/sm2/Sync.ets#L16-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>
