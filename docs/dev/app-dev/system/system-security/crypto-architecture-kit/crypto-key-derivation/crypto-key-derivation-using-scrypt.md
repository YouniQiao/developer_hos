---
title: "使用SCRYPT进行密钥派生(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-scrypt
format: md
---


对应的算法规格请查看[密钥派生算法规格：SCRYPT](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-overview#scrypt算法)。

## 开发步骤

1. 构造[ScryptSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#scryptspec18)对象，作为密钥派生参数进行密钥派生。

   ScryptSpec是[KdfSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#kdfspec11)的子类，需要指定：

   * algName：指定算法名为'SCRYPT'。
   * passphrase：用于生成派生密钥的原始密码。

     如果使用string类型，需要直接传入用于密钥派生的数据，而不是HexString、base64等字符串类型。同时需要确保该字符串为utf-8编码，否则派生结果会有差异。
   * salt：盐值。
   * n：迭代次数，需要为正整数。
   * p：并行化参数，需要为正整数。
   * r：块大小参数，需要为正整数。
   * maxMemory：最大内存限制参数，需要为正整数。
   * keySize：目标密钥的字节长度，需要为正整数。
2. 调用[cryptoFramework.createKdf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatekdf11)，指定字符串参数'SCRYPT'，创建密钥派生算法为SCRYPT的密钥派生函数对象（Kdf）。
3. 输入SCRYPT对象，调用[Kdf.generateSecret](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatesecret11)进行密钥派生。

   Kdf.generateSecret的多种调用形式如表所示。

   | 接口名 | 返回方式 |
   | --- | --- |
   | generateSecret(params: KdfSpec, callback: AsyncCallback\<DataBlob\>): void | callback异步生成。 |
   | generateSecret(params: KdfSpec): Promise\<DataBlob\> | Promise异步生成。 |
   | generateSecretSync(params: KdfSpec): DataBlob | 同步生成。 |

* 通过await返回结果：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  import { buffer } from '@kit.ArkTS';

  async function scryptAwait() {
    try {
      let spec: cryptoFramework.ScryptSpec = {
        algName: 'SCRYPT',
        salt: new Uint8Array(16),
        passphrase: 'password',
        n:1024,
        p:16,
        r:8,
        maxMemory:1024 * 16 * 8 * 10, //n * p * r * 10
        keySize: 64
      };
      let kdf = cryptoFramework.createKdf('SCRYPT');
      let secret = await kdf.generateSecret(spec);
      console.info('key derivation output: ' + secret.data);
    } catch(error) {
      let e: BusinessError = error as BusinessError;
      console.error('key derivation failed, errCode: ' + e.code + ', errMsg: ' + e.message);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyDerivation/SCRYPTDerivation/entry/src/main/ets/pages/Await.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Await.ets</a></div>

* 通过Promise返回结果：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  import { buffer } from '@kit.ArkTS';

  function scryptPromise() {
    let spec: cryptoFramework.ScryptSpec = {
      algName: 'SCRYPT',
      passphrase: '123456',
      salt: new Uint8Array(16),
      n:1024,
      p:16,
      r:8,
      maxMemory:1024 * 16 * 8 * 10, //n * p * r * 10
      keySize: 64
    };
    let kdf = cryptoFramework.createKdf('SCRYPT');
    let kdfPromise = kdf.generateSecret(spec);
    kdfPromise.then((secret) => {
      console.info('key derivation output: ' + secret.data);
    }).catch((error: BusinessError) => {
      console.error(`key derivation failed: errCode: ${error.code}, message: ${error.message}`);
    });
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyDerivation/SCRYPTDerivation/entry/src/main/ets/pages/Promise.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Promise.ets</a></div>

* 通过同步方式返回结果：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  import { buffer } from '@kit.ArkTS';

  function kdfSync() {
    try {
      let spec: cryptoFramework.ScryptSpec = {
        algName: 'SCRYPT',
        passphrase: '123456',
        salt: new Uint8Array(16),
        n:1024,
        p:16,
        r:8,
        maxMemory:1024 * 16 * 8 * 10, //n * p * r * 10
        keySize: 64
      };
      let kdf = cryptoFramework.createKdf('SCRYPT');
      let secret = kdf.generateSecretSync(spec);
      console.info('[Sync]key derivation output: ' + secret.data);
    } catch(error) {
      let e: BusinessError = error as BusinessError;
      console.error('key derivation failed, errCode: ' + e.code + ', errMsg: ' + e.message);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyDerivation/SCRYPTDerivation/entry/src/main/ets/pages/Sync.ets#L15-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>
