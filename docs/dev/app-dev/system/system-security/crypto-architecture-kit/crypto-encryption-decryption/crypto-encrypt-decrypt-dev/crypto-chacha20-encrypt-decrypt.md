---
displayed_sidebar: appDevSidebar
title: "使用ChaCha20对称密钥加解密(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-chacha20-encrypt-decrypt
last_sync: 2026-06-07
sync_hash: d89ac9c3
---
从API22开始，算法库支持该算法。

对应的算法规格请查看[对称密钥加解密算法规格：ChaCha20](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-sym-encrypt-decrypt-spec#chacha20)。

## 开发步骤

**创建对象**

调用[cryptoFramework.createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator)、[SymKeyGenerator.generateSymKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatesymkey-1)，生成密钥算法为ChaCha20的对称密钥（SymKey）。

如何生成ChaCha20对称密钥，开发者可参考下文示例，并结合[对称密钥生成和转换规格：ChaCha20](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#chacha20)和[随机生成对称密钥](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-sym-key-randomly)理解。参考文档与示例可能存在入参差异，请注意区分。

**加密**

1. 调用[cryptoFramework.createCipher](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatecipher)，指定字符串参数'ChaCha20'，创建对称密钥的Cipher实例，用于完成加密操作。
2. 调用[Cipher.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-1)，设置模式为加密（cryptoFramework.CryptoMode.ENCRYPT\_MODE），指定加密密钥（SymKey）和对应的加密参数（IvParamsSpec），初始化加密Cipher实例。
3. 调用[Cipher.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-1)，更新数据（明文）。
4. 调用[Cipher.doFinal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#dofinal-1)，获取加密后的数据。

   ![](./img/78b5d473.png)

   由于已使用update传入数据，此处data传入null。

   doFinal输出结果可能为null，在访问具体数据前，需要先判断结果是否为null，避免产生异常。

**解密**

1. 调用[cryptoFramework.createCipher](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatecipher)，指定字符串参数'ChaCha20'，创建对称密钥的Cipher实例，用于完成解密操作。
2. 调用[Cipher.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-1)，设置模式为解密（cryptoFramework.CryptoMode.DECRYPT\_MODE），指定解密密钥（SymKey）和对应的解密参数（IvParamsSpec），初始化解密Cipher实例。
3. 调用[Cipher.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-1)，更新数据（密文）。
4. 调用[Cipher.doFinal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#dofinal-1)，获取解密后的数据。

* 异步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  function generateRandom(len: number) {
    let rand = cryptoFramework.createRandom();
    let generateRandSync = rand.generateRandomSync(len);
    return generateRandSync;
  }

  function genIvParamsSpec() {
    let ivBlob = generateRandom(16);
    let ivParamsSpec: cryptoFramework.IvParamsSpec = {
      algName: 'IvParamsSpec',
      iv: ivBlob
    };
    return ivParamsSpec;
  }
  let ivSpec = genIvParamsSpec();

  // 加密消息。
  async function encryptMessagePromise(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {
    let cipher = cryptoFramework.createCipher('ChaCha20');
    await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, ivSpec);
    let encryptData = await cipher.doFinal(plainText);
    return encryptData;
  }

  // 解密消息。
  async function decryptMessagePromise(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {
    let decoder = cryptoFramework.createCipher('ChaCha20');
    await decoder.init(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, ivSpec);
    let decryptData = await decoder.doFinal(cipherText);
    return decryptData;
  }

  async function genSymKeyByData(symKeyData: Uint8Array) {
    let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };
    let chacha20Generator = cryptoFramework.createSymKeyGenerator('ChaCha20');
    let symKey = await chacha20Generator.convertKey(symKeyBlob);
    console.info('convertKey result: success.');
    return symKey;
  }

  async function main() {
    try {
      let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159, 83,
        217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);
      let symKey = await genSymKeyByData(keyData);
      let message = 'This is a test';
      let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };
      let encryptText = await encryptMessagePromise(symKey, plainText);
      let decryptText = await decryptMessagePromise(symKey, encryptText);
      if (plainText.data.toString() === decryptText.data.toString()) {
        console.info('decrypt ok.');
        console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));
      } else {
        console.error('decrypt failed.');
      }
    } catch (error) {
      console.error(`decrypt failed: errCode: ${error.code}, message: ${error.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/EncryptionDecryption/EncryptionDecryptionGuidanceChaCha20/entry/src/main/ets/pages/chacha20/ChaCha20EncryptionDecryptionAsync.ets#L16-L81" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ChaCha20EncryptionDecryptionAsync.ets</a></div>

* 同步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  function generateRandom(len: number) {
    let rand = cryptoFramework.createRandom();
    let generateRandSync = rand.generateRandomSync(len);
    return generateRandSync;
  }

  function genIvParamsSpec() {
    let ivBlob = generateRandom(16);
    let ivParamsSpec: cryptoFramework.IvParamsSpec = {
      algName: 'IvParamsSpec',
      iv: ivBlob
    };
    return ivParamsSpec;
  }

  let ivSpec = genIvParamsSpec();

  // 加密消息。
  function encryptMessage(symKey: cryptoFramework.SymKey, plainText: cryptoFramework.DataBlob) {
    let cipher = cryptoFramework.createCipher('ChaCha20');
    cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, symKey, ivSpec);
    let encryptData = cipher.doFinalSync(plainText);
    return encryptData;
  }

  // 解密消息。
  function decryptMessage(symKey: cryptoFramework.SymKey, cipherText: cryptoFramework.DataBlob) {
    let decoder = cryptoFramework.createCipher('ChaCha20');
    decoder.initSync(cryptoFramework.CryptoMode.DECRYPT_MODE, symKey, ivSpec);
    let decryptData = decoder.updateSync(cipherText);
    return decryptData;
  }

  function genSymKeyByData(symKeyData: Uint8Array) {
    let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };
    let chacha20Generator = cryptoFramework.createSymKeyGenerator('ChaCha20');
    let symKey = chacha20Generator.convertKeySync(symKeyBlob);
    console.info('convertKeySync result: success.');
    return symKey;
  }

  function main() {
    try {
      let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159, 83,
        217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);
      let symKey = genSymKeyByData(keyData);
      let message = 'This is a test';
      let plainText: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(message, 'utf-8').buffer) };
      let encryptText = encryptMessage(symKey, plainText);
      let decryptText = decryptMessage(symKey, encryptText);
      if (plainText.data.toString() === decryptText.data.toString()) {
        console.info('decrypt ok.');
        console.info('decrypt plainText: ' + buffer.from(decryptText.data).toString('utf-8'));
      } else {
        console.error('decrypt failed.');
      }
    } catch (error) {
      console.error(`decrypt failed: errCode: ${error.code}, message: ${error.message}`);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/EncryptionDecryption/EncryptionDecryptionGuidanceChaCha20/entry/src/main/ets/pages/chacha20/ChaCha20EncryptionDecryptionSync.ets#L16-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ChaCha20EncryptionDecryptionSync.ets</a></div>
