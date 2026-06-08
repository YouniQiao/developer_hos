---
displayed_sidebar: appDevSidebar
title: "使用SM2密文格式转换(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-dev/crypto-sm2-ciphertext-conversion
last_sync: 2026-06-07
sync_hash: dba7bc3d
---
当前支持的SM2密文格式为国密标准的ASN.1格式，其中各参数组合顺序为C1C3C2，具体参数含义请参考[转换SM2密文格式](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#转换sm2密文格式)。

开发者可指定SM2密文的参数，将其转换成符合国密标准的ASN.1格式密文。反之，也可以从国密标准的ASN.1格式密文中取出具体的SM2密文参数，便于开发者自行组合成其他格式的SM2密文。

**指定密文参数，生成标准ASN.1密文**

1. 构造[SM2CipherTextSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#sm2ciphertextspec12)对象，用于指定SM2密文参数。如果开发者使用的不是国密标准的ASN.1格式密文，需自行提取所需要的参数。
2. 调用[genCipherTextBySpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#genciphertextbyspec12)，将SM2CipherTextSpec对象传入，生成符合国密标准的ASN.1格式的SM2密文。
3. 生成的密文可直接使用cryptoFramework进行SM2解密。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function testGenCipherTextBySpec() {
  let spec: cryptoFramework.SM2CipherTextSpec = {
    xCoordinate: BigInt('20625015362595980457695435345498579729138244358573902431560627260141789922999'),
    yCoordinate: BigInt('48563164792857017065725892921053777369510340820930241057309844352421738767712'),
    cipherTextData: new Uint8Array([100, 227, 78, 195, 249, 179, 43, 70, 242, 69, 169, 10, 65, 123]),
    hashData: new Uint8Array([87, 167, 167, 247, 88, 146, 203, 234, 83, 126, 117, 129, 52, 142, 82, 54, 152, 226, 201,
      111, 143, 115, 169, 125, 128, 42, 157, 31, 114, 198, 109, 244]),
  }
  // 此处的data可直接使用cryptoFramework进行SM2解密
  let data = cryptoFramework.SM2CryptoUtil.genCipherTextBySpec(spec, 'C1C3C2');
  console.info('genCipherTextBySpec result: success.');
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/EncryptionDecryption/EncryptionDecryptionGuidanceSM2/entry/src/main/ets/pages/sm2/CreateASN.1Ciphertext.ets#L16-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CreateASN.1Ciphertext.ets</a></div>


**从标准ASN.1密文中，获取密文参数**

1. 准备符合国密标准的ASN.1格式的SM2密文。
2. 调用[getCipherTextSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#genciphertextbyspec12)，从标准密文中，获取具体的SM2密文参数。
3. 根据业务需要，自行拼接SM2密文参数，形成其他格式的SM2密文。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function testGetCipherTextSpec() {
  let cipherTextArray =
    new Uint8Array([48, 118, 2, 32, 45, 153, 88, 82, 104, 221, 226, 43, 174, 21, 122, 248, 5, 232, 105, 41, 92, 95, 102,
      224, 216, 149, 85, 236, 110, 6, 64, 188, 149, 70, 70, 183, 2, 32, 107, 93, 198, 247, 119, 18, 40, 110, 90, 156,
      193, 158, 205, 113, 170, 128, 146, 109, 75, 17, 181, 109, 110, 91, 149, 5, 110, 233, 209, 78, 229, 96, 4, 32, 87,
      167, 167, 247, 88, 146, 203, 234, 83, 126, 117, 129, 52, 142, 82, 54, 152, 226, 201, 111, 143, 115, 169, 125, 128,
      42, 157, 31, 114, 198, 109, 244, 4, 14, 100, 227, 78, 195, 249, 179, 43, 70, 242, 69, 169, 10, 65, 123]);
  let cipherText: cryptoFramework.DataBlob = { data: cipherTextArray };
  let spec: cryptoFramework.SM2CipherTextSpec = cryptoFramework.SM2CryptoUtil.getCipherTextSpec(cipherText, 'C1C3C2');
  console.info('getCipherTextSpec result: success.');
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/EncryptionDecryption/EncryptionDecryptionGuidanceSM2/entry/src/main/ets/pages/sm2/ObtainCiphertext.ets#L16-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ObtainCiphertext.ets</a></div>
