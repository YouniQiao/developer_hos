---
displayed_sidebar: appDevSidebar
title: "指定二进制数据转换对称密钥(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key
last_sync: 2026-06-07
sync_hash: dfa49ccb
---
以3DES和HMAC为例，根据指定的对称密钥二进制数据，生成对称密钥对象（SymKey），即将外部或存储的二进制数据转换为算法库的密钥对象，该对象可用于后续的加解密等操作。

## 指定二进制数据转换3DES密钥

对应的算法规格请查看[对称密钥生成和转换规格：3DES](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#section3des)。

1. 获取3DES二进制密钥数据，封装成[DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#datablob)对象。
2. 调用[cryptoFramework.createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator)，指定字符串参数'3DES192'，创建密钥算法为3DES、密钥长度为192位的对称密钥生成器（SymKeyGenerator）。
3. 调用[SymKeyGenerator.convertKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkey-1)，根据指定的对称密钥二进制数据生成对称密钥对象（SymKey）。
4. 调用[SymKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，获取密钥对象的二进制数据。

* 以使用callback方式生成3DES密钥为例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { BusinessError } from '@kit.BasicServicesKit';

  function genKeyMaterialBlob(): cryptoFramework.DataBlob {
    let arr = [
    0xba, 0x3d, 0xc2, 0x71, 0x21, 0x1e, 0x30, 0x56,
      0xad, 0x47, 0xfc, 0x5a, 0x46, 0x39, 0xee, 0x7c,
      0xba, 0x3b, 0xc2, 0x71, 0xab, 0xa0, 0x30, 0x72]; // 密钥长度为192位，即24字节。
    let keyMaterial = new Uint8Array(arr);
    return { data: keyMaterial };
  }

  function testConvertSymKey() {
    // 创建SymKeyGenerator实例
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('3DES192');
    // 根据指定的数据生成对称密钥
    let keyMaterialBlob = genKeyMaterialBlob();
    try {
      symKeyGenerator.convertKey(keyMaterialBlob, (error, key) => {
        if (error) { // 如果业务逻辑执行失败，则callback的第一个参数返回错误信息，即异步抛出异常
          let e: BusinessError = error as BusinessError;
          console.error(`convertKey failed: errCode: ${e.code}, message: ${e.message}`);
          return;
        }
        console.info('key algName: ' + key.algName);
        console.info('key format: ' + key.format);
        let encodedKey = key.getEncoded(); // 获取对称密钥的二进制数据，并以字节数组形式输出。长度为24字节
        console.info('key getEncoded hex: ' + encodedKey.data);
      })
    } catch (error) { // 参数检查发现错误立即抛出异常
      let e: BusinessError = error as BusinessError;
      console.error(`convertKey failed: errCode: ${e.code}, message: ${e.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSymmetricKeyBinaryFormatArkTS/entry/src/main/ets/pages/3des/Callback.ets#L16-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Callback.ets</a></div>

* 同步方法（调用方法[convertKeySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkeysync12)）：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { BusinessError } from '@kit.BasicServicesKit';

  function genKeyMaterialBlob(): cryptoFramework.DataBlob {
    let arr = [
    0xba, 0x3d, 0xc2, 0x71, 0x21, 0x1e, 0x30, 0x56,
      0xad, 0x47, 0xfc, 0x5a, 0x46, 0x39, 0xee, 0x7c,
      0xba, 0x3b, 0xc2, 0x71, 0xab, 0xa0, 0x30, 0x72]; // 密钥长度为192位，即24字节。
    let keyMaterial = new Uint8Array(arr);
    return { data: keyMaterial };
  }

  function testConvertSymKey() {
    // 创建SymKeyGenerator实例
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('3DES192');
    // 根据指定的数据生成对称密钥
    let keyMaterialBlob = genKeyMaterialBlob();
    try {
      let key = symKeyGenerator.convertKeySync(keyMaterialBlob);
      console.info('key algName: ' + key.algName);
      console.info('key format: ' + key.format);
      let encodedKey = key.getEncoded(); // 获取对称密钥的二进制数据，长度为24字节。
      console.info('key getEncoded length: ' + encodedKey.data.length);
    } catch (error) { // 参数检查发现错误立即抛出异常
      let e: BusinessError = error as BusinessError;
      console.error(`convertKeySync failed: errCode: ${e.code}, message: ${e.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSymmetricKeyBinaryFormatArkTS/entry/src/main/ets/pages/3des/Sync.ets#L16-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>


## 指定二进制数据转换HMAC密钥

请查看[对称密钥生成和转换规格：HMAC](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#hmac)。

1. 获取HMAC二进制密钥并封装成[DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#datablob)对象。
2. 调用[cryptoFramework.createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator)，指定字符串参数'HMAC'，创建密钥算法为HMAC、密钥长度为[1, 32768]位的对称密钥生成器（SymKeyGenerator）。
3. 调用[SymKeyGenerator.convertKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkey-1)，根据指定的对称密钥二进制数据，生成对称密钥对象（SymKey）。
4. 调用[SymKey.getEncoded](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencoded)，获取密钥的二进制数据。

* 以生成HMAC密钥为例，使用await方式：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  async function testConvertHmacKey() {
    // 对称密钥长度为64字节，512比特
    let keyMessage = '12345678abcdefgh12345678abcdefgh12345678abcdefgh12345678abcdefgh';
    let keyBlob: cryptoFramework.DataBlob = {
      data: new Uint8Array(buffer.from(keyMessage, 'utf-8').buffer)
    }
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('HMAC');
    let key = await symKeyGenerator.convertKey(keyBlob);
    let encodedKey = key.getEncoded();
    console.info('key encoded data: ' + encodedKey.data);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSymmetricKeyBinaryFormatArkTS/entry/src/main/ets/pages/hmac/Await.ets#L16-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Await.ets</a></div>

* 同步方法（调用方法[convertKeySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkeysync12)）：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  function testConvertKeySync() {
    // 对称密钥长度为64字节，512比特
    let keyMessage = '12345678abcdefgh12345678abcdefgh12345678abcdefgh12345678abcdefgh';
    let keyBlob: cryptoFramework.DataBlob = {
      data : new Uint8Array(buffer.from(keyMessage, 'utf-8').buffer)
    }
    let symKeyGenerator = cryptoFramework.createSymKeyGenerator('HMAC');
    let key = symKeyGenerator.convertKeySync(keyBlob);
    let encodedKey = key.getEncoded();
    console.info('key encoded data: ' + encodedKey.data);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSymmetricKeyBinaryFormatArkTS/entry/src/main/ets/pages/hmac/Sync.ets#L16-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Sync.ets</a></div>
