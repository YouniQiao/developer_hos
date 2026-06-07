---
title: "使用RSA密钥对分段签名验签（PKCS1模式）(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-rsa-sign-sig-verify-pkcs1-by-segment
format: md
---


对应的算法规格请查看[签名验签算法规格：RSA](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#rsa)。

**签名**

1. 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)、[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，生成密钥算法为RSA、密钥长度为1024位、素数个数为2的非对称密钥对象（KeyPair），包括公钥（PubKey）和私钥（PriKey）。

   如何生成RSA非对称密钥，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：RSA](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa)和[随机生成非对称密钥对](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly)理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。
2. 调用[cryptoFramework.createSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesign)，指定字符串参数'RSA1024|PKCS1|SHA256'，创建非对称密钥类型为RSA1024、填充模式为PKCS1、摘要算法为SHA256的Sign实例，用于完成签名操作。
3. 调用[Sign.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-3)，使用私钥（PriKey）初始化Sign实例。
4. 将一次传入数据量设置为64字节，多次调用[Sign.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-3)，传入待签名的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。
5. 调用[Sign.sign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#sign-1)，生成数据签名。

**验签**

1. 调用[cryptoFramework.createVerify](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateverify)，指定字符串参数'RSA1024|PKCS1|SHA256'，与签名的Sign实例保持一致。创建Verify实例，用于完成验签操作。
2. 调用[Verify.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-5)，使用公钥（PubKey）初始化Verify实例。
3. 调用[Verify.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-5)，传入待验证的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。
4. 调用[Verify.verify](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#verify-1)，对数据进行验签。

* 异步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  async function signMessageBySegment(priKey: cryptoFramework.PriKey, plainText: Uint8Array) {
    let signAlg = 'RSA1024|PKCS1|SHA256';
    let signer = cryptoFramework.createSign(signAlg);
    await signer.init(priKey);
    let textSplitLen = 64; // 自定义的数据拆分长度，此处取64
    for (let i = 0; i < plainText.length; i += textSplitLen) {
      let updateMessage = plainText.subarray(i, i + textSplitLen);
      let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
      // 分段update
      await signer.update(updateMessageBlob);
    }
    // 已通过分段传入所有明文，故此处sign传入null
    let signData = await signer.sign(null);
    return signData;
  }

  async function verifyMessageBySegment(pubKey: cryptoFramework.PubKey, plainText: Uint8Array,
    signMessageBlob: cryptoFramework.DataBlob) {
    let verifyAlg = 'RSA1024|PKCS1|SHA256';
    let verifier = cryptoFramework.createVerify(verifyAlg);
    await verifier.init(pubKey);
    let textSplitLen = 64; // 自定义的数据拆分长度，此处取64
    for (let i = 0; i < plainText.length; i += textSplitLen) {
      let updateMessage = plainText.subarray(i, i + textSplitLen);
      let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
      // 分段update
      await verifier.update(updateMessageBlob);
    }
    // 已通过分段传入所有明文，故此处verify第一个参数传入null
    let res = await verifier.verify(null, signMessageBlob);
    console.info('verify result: ' + res);
    return res;
  }

  async function rsaSignatureBySegment() {
    let message = 'This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!';
    let keyGenAlg = 'RSA1024';
    let generator = cryptoFramework.createAsyKeyGenerator(keyGenAlg);
    let keyPair = await generator.generateKeyPair();
    let messageData = new Uint8Array(buffer.from(message, 'utf-8').buffer);
    let signData = await signMessageBySegment(keyPair.priKey, messageData);
    let verifyResult = await verifyMessageBySegment(keyPair.pubKey, messageData, signData);
    if (verifyResult === true) {
      console.info('verify result: success.');
    } else {
      console.error('verify result: failed.');
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/rsa_pkcs1_segment_signature/rsa_pkcs1_segment_signature_asynchronous.ets#L16-L76" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：rsa_pkcs1_segment_signature_asynchronous.ets</a></div>

* 同步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  function signMessageBySegment(priKey: cryptoFramework.PriKey, plainText: Uint8Array) {
    let signAlg = 'RSA1024|PKCS1|SHA256';
    let signer = cryptoFramework.createSign(signAlg);
    signer.initSync(priKey);
    let textSplitLen = 64; // 自定义的数据拆分长度，此处取64
    for (let i = 0; i < plainText.length; i += textSplitLen) {
      let updateMessage = plainText.subarray(i, i + textSplitLen);
      let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
      // 分段update
      signer.updateSync(updateMessageBlob);
    }
    // 已通过分段传入所有明文，故此处sign传入null
    let signData = signer.signSync(null);
    return signData;
  }

  function verifyMessageBySegment(pubKey: cryptoFramework.PubKey, plainText: Uint8Array,
    signMessageBlob: cryptoFramework.DataBlob) {
    let verifyAlg = 'RSA1024|PKCS1|SHA256';
    let verifier = cryptoFramework.createVerify(verifyAlg);
    verifier.initSync(pubKey);
    let textSplitLen = 64; // 自定义的数据拆分长度，此处取64
    for (let i = 0; i < plainText.length; i += textSplitLen) {
      let updateMessage = plainText.subarray(i, i + textSplitLen);
      let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
      // 分段update
      verifier.updateSync(updateMessageBlob);
    }
    // 已通过分段传入所有明文，故此处verify第一个参数传入null
    let res = verifier.verifySync(null, signMessageBlob);
    console.info('verify result: ' + res);
    return res;
  }

  function rsaSignatureBySegment() {
    let message = 'This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!' +
      'This is a long plainText! This is a long plainText! This is a long plainText! This is a long plainText!';
    let keyGenAlg = 'RSA1024';
    let generator = cryptoFramework.createAsyKeyGenerator(keyGenAlg);
    let keyPair = generator.generateKeyPairSync();
    let messageData = new Uint8Array(buffer.from(message, 'utf-8').buffer);
    let signData = signMessageBySegment(keyPair.priKey, messageData);
    let verifyResult = verifyMessageBySegment(keyPair.pubKey, messageData, signData);
    if (verifyResult === true) {
      console.info('verify result: success.');
    } else {
      console.error('verify result: failed.');
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/rsa_pkcs1_segment_signature/rsa_pkcs1_segment_signature_synchronous.ets#L16-L76" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：rsa_pkcs1_segment_signature_synchronous.ets</a></div>
