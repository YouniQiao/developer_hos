---
title: "使用RSA密钥对（PKCS1模式）签名及签名恢复(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-sign-sig-verify-recover-pkcs1
format: md
---


对应的算法规格请查看[签名验签算法规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sign-sig-verify-overview#rsa)。

**签名**

1. 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)、[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，生成密钥算法为RSA、密钥长度为1024位、素数个数为2的非对称密钥对象（KeyPair），包括公钥（PubKey）和私钥（PriKey）。

   如何生成RSA非对称密钥，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#rsa)和[随机生成非对称密钥对](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-randomly)理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。
2. 调用[cryptoFramework.createSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesign)，指定字符串参数'RSA1024|PKCS1|SHA256|SignOnly'，创建非对称密钥类型为RSA1024、填充模式为PKCS1、摘要算法为SHA256的Sign实例，用于完成仅签名操作。
3. 调用[Sign.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-3)，使用私钥（PriKey）初始化Sign实例。
4. 调用[Sign.sign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#sign-1)，生成数据签名。

**验签**

1. 调用[cryptoFramework.createVerify](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateverify)，指定字符串参数'RSA1024|PKCS1|SHA256|Recover'，与签名的Sign实例保持一致。创建Verify实例，用于完成验签操作。
2. 调用[Verify.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-5)，使用公钥（PubKey）初始化Verify实例。
3. 调用[Verify.recover](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#recover12)，对数据进行签名恢复。

* 异步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  // 完整的明文被拆分为input1和input2
  let input1: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('This is Sign test plan1', 'utf-8').buffer) };

  async function signMessagePromise(priKey: cryptoFramework.PriKey) {
    let signAlg = 'RSA1024|PKCS1|NoHash|OnlySign';
    let signer = cryptoFramework.createSign(signAlg);
    await signer.init(priKey);
    let signData = await signer.sign(input1);
    return signData;
  }

  async function verifyMessagePromise(signMessageBlob: cryptoFramework.DataBlob, pubKey: cryptoFramework.PubKey) {
    let verifyAlg = 'RSA1024|PKCS1|NoHash|Recover';
    let verifier = cryptoFramework.createVerify(verifyAlg);
    await verifier.init(pubKey);
    let rawSignData = await verifier.recover(signMessageBlob);
    return rawSignData;
  }

  async function main() {
    let keyGenAlg = 'RSA1024';
    let generator = cryptoFramework.createAsyKeyGenerator(keyGenAlg);
    let keyPair = await generator.generateKeyPair();
    let signData = await signMessagePromise(keyPair.priKey);
    let rawSignData = await verifyMessagePromise(signData, keyPair.pubKey);
    if (rawSignData != null) {
      console.info('recover result: ' + rawSignData.data);
    } else {
      console.error('get verify recover result: fail!');
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/rsa_pkcs1_signature_restoration/rsa_pkcs1_signature_restoration_asynchronous.ets#L16-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：rsa_pkcs1_signature_restoration_asynchronous.ets</a></div>

* 同步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  // 完整的明文被拆分为input1和input2
  let input1: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('This is Sign test plan1', 'utf-8').buffer) };

  function signMessagePromise(priKey: cryptoFramework.PriKey) {
    let signAlg = 'RSA1024|PKCS1|NoHash|OnlySign';
    let signer = cryptoFramework.createSign(signAlg);
    signer.initSync(priKey);
    let signData = signer.signSync(input1);
    return signData;
  }

  function verifyMessagePromise(signMessageBlob: cryptoFramework.DataBlob, pubKey: cryptoFramework.PubKey) {
    let verifyAlg = 'RSA1024|PKCS1|NoHash|Recover';
    let verifier = cryptoFramework.createVerify(verifyAlg);
    verifier.initSync(pubKey);
    let rawSignData = verifier.recoverSync(signMessageBlob);
    return rawSignData;
  }

  function main() {
    let keyGenAlg = 'RSA1024';
    let generator = cryptoFramework.createAsyKeyGenerator(keyGenAlg);
    let keyPair = generator.generateKeyPairSync();
    let signData = signMessagePromise(keyPair.priKey);
    let rawSignData = verifyMessagePromise(signData, keyPair.pubKey);
    if (rawSignData != null) {
      console.info('recover result: ' + rawSignData.data);
    } else {
      console.error('get verify recover result: fail!');
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/rsa_pkcs1_signature_restoration/rsa_pkcs1_signature_restoration_synchronous.ets#L16-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：rsa_pkcs1_signature_restoration_synchronous.ets</a></div>
