---
displayed_sidebar: appDevSidebar
title: "使用SM2密钥对签名验签(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-sig-verify-pkcs1
format: md
---


对应的算法规格请查看[签名验签算法规格：SM2](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-overview#sm2)。

**签名**

1. 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)、[AsyKeyGenerator.generateKeyPair](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatekeypair-1)，生成非对称密钥算法为SM2、密钥长度为256位的密钥对（KeyPair）。

   如何生成SM2非对称密钥，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：SM2](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#sm2)和[随机生成非对称密钥对](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly)理解，参考文档与当前示例可能存在入参差异，请在阅读时注意区分。
2. 调用[cryptoFramework.createSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesign)，指定字符串参数'SM2\_256|SM3'，创建非对称密钥类型为SM2\_256、摘要算法为SM3的Sign实例，用于完成签名操作。
3. 调用[Sign.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-3)，使用私钥（PriKey）初始化Sign实例。
4. 调用[Sign.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-3)，传入待签名的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。
5. 调用[Sign.sign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#sign-1)，生成数据签名。

**验签**

1. 调用[cryptoFramework.createVerify](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateverify)，指定字符串参数'SM2\_256|SM3'，创建非对称密钥类型为SM2\_256、摘要算法为SM3的Verify实例，用于完成验签操作。
2. 调用[Verify.init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#init-5)，使用公钥（PubKey）初始化Verify实例。
3. 调用[Verify.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-5)，传入待验证的数据。当前单次update长度没有限制，开发者可以根据数据量判断如何调用update。
4. 调用[Verify.verify](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#verify-1)，对数据进行验签。

* 异步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  // 完整的明文被拆分为input1和input2
  let input1: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('This is Sign test plan1', 'utf-8').buffer) };
  let input2: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('This is Sign test plan2', 'utf-8').buffer) };

  async function signMessagePromise(priKey: cryptoFramework.PriKey) {
    let signAlg = 'SM2_256|SM3';
    let signer = cryptoFramework.createSign(signAlg);
    await signer.init(priKey);
    await signer.update(input1); // 如果明文较短，可以直接调用sign接口一次性传入
    let signData = await signer.sign(input2);
    return signData;
  }

  async function verifyMessagePromise(signMessageBlob: cryptoFramework.DataBlob, pubKey: cryptoFramework.PubKey) {
    let verifyAlg = 'SM2_256|SM3';
    let verifier = cryptoFramework.createVerify(verifyAlg);
    await verifier.init(pubKey);
    await verifier.update(input1); // 如果明文较短，可以直接调用verify接口一次性传入
    let res = await verifier.verify(input2, signMessageBlob);
    console.info('verify result = ' + res);
    return res;
  }

  async function main() {
    let keyGenAlg = 'SM2_256';
    let generator = cryptoFramework.createAsyKeyGenerator(keyGenAlg);
    let keyPair = await generator.generateKeyPair();
    let signData = await signMessagePromise(keyPair.priKey);
    let verifyResult = await verifyMessagePromise(signData, keyPair.pubKey);
    if (verifyResult === true) {
      console.info('verify result: success.');
    } else {
      console.error('verify result: failed.');
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/sm2_signature_verification/sm2_signature_verification_asynchronous.ets#L15-L56" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sm2_signature_verification_asynchronous.ets</a></div>

* 同步方法示例：

  ```
  import { cryptoFramework } from '@kit.CryptoArchitectureKit';
  import { buffer } from '@kit.ArkTS';

  // 完整的明文被拆分为input1和input2
  let input1: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('This is Sign test plan1', 'utf-8').buffer) };
  let input2: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('This is Sign test plan2', 'utf-8').buffer) };

  function signMessagePromise(priKey: cryptoFramework.PriKey) {
    let signAlg = 'SM2_256|SM3';
    let signer = cryptoFramework.createSign(signAlg);
    signer.initSync(priKey);
    signer.updateSync(input1); // 如果明文较短，可以直接调用sign接口一次性传入
    let signData = signer.signSync(input2);
    return signData;
  }

  function verifyMessagePromise(signMessageBlob: cryptoFramework.DataBlob, pubKey: cryptoFramework.PubKey) {
    let verifyAlg = 'SM2_256|SM3';
    let verifier = cryptoFramework.createVerify(verifyAlg);
    verifier.initSync(pubKey);
    verifier.updateSync(input1); // 如果明文较短，可以直接调用verify接口一次性传入
    let res = verifier.verifySync(input2, signMessageBlob);
    console.info('verify result = ' + res);
    return res;
  }

  function main() {
    let keyGenAlg = 'SM2_256';
    let generator = cryptoFramework.createAsyKeyGenerator(keyGenAlg);
    let keyPair = generator.generateKeyPairSync();
    let signData = signMessagePromise(keyPair.priKey);
    let verifyResult = verifyMessagePromise(signData, keyPair.pubKey);
    if (verifyResult === true) {
      console.info('verify result: success.');
    } else {
      console.error('verify result: failed.');
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/sm2_signature_verification/sm2_signature_verification_synchronous.ets#L15-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sm2_signature_verification_synchronous.ets</a></div>
