---
title: "使用ECC压缩/非压缩点格式转换(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-compressed-or-uncompressed-ecc-point
---

支持将压缩/非压缩的点数据转换为Point对象，用于密钥对象生成；也支持将Point对象转换为压缩/非压缩的点数据。

ECC的算法规格请查看[非对称密钥生成和转换规格：ECC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#ecc)。

通过传入字符串参数format，可指定需要获取的点数据格式。如果需要获取压缩格式，则指定format为："COMPRESSED"；需要获取非压缩格式，则指定format为："UNCOMPRESSED"。

## 指定非压缩点数据转换为压缩点数据

1. 指定Uint8Array类型的ECC非压缩点数据，调用[ECCKeyUtil.convertPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertpoint12)，构造[Point](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#point10)对象，用于生成点数据。
2. 调用[ECCKeyUtil.getEncodedPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencodedpoint12)，获取压缩点数据。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function eccPointUncompressedToCompressed() {
  let pkData =
    new Uint8Array([4, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195,
      157, 111, 40, 217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242,
      206, 200, 98, 178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152]);
  let returnPoint = cryptoFramework.ECCKeyUtil.convertPoint('NID_brainpoolP256r1', pkData);
  console.info('convertPoint result: success.');
  let returnData = cryptoFramework.ECCKeyUtil.getEncodedPoint('NID_brainpoolP256r1', returnPoint, 'COMPRESSED');
  console.info('returnData: ' + returnData);
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ECCCompressPublicKeyFormatConversion/entry/src/main/ets/pages/CompressedPointData.ets#L16-L29" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：CompressedPointData.ets</a></div>


## 指定压缩点数据获取密钥对象

1. 指定Uint8Array类型的ECC压缩点数据，调用[ECCKeyUtil.convertPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertpoint12)，得到[Point](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#point10)对象，用于密钥对象生成。
2. 调用[ECCKeyUtil.genECCCommonParamsSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#genecccommonparamsspec11)，指定曲线名'NID\_brainpoolP256r1'，生成ECC的非对称公共密钥参数。
3. 构造[ECCPubKeySpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#eccpubkeyspec10)对象，用于指定ECC算法中公钥包含的参数。ECCPubKeySpec是AsyKeySpec的子类。需要通过参数algName指定算法'ECC'；指定密钥参数类型[AsyKeySpecType.PUBLIC\_KEY\_SPEC](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#asykeyspectype10)，参数pk指定为得到的point对象。
4. 通过得到的公钥参数，调用[createAsyKeyGeneratorBySpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygeneratorbyspec10)，创建非对称密钥生成器（AsyKeyGeneratorBySpec）。
5. 调用[AsyKeyGeneratorBySpec.generatePubKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#generatepubkey10)，得到指定的公钥。
6. 调用[ECCKeyUtil.getEncodedPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencodedpoint12)，得到非压缩点数据。
7. 调用[PubKey.getAsyKeySpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getasykeyspec10)，获取ECC算法中公钥pk的x坐标。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function eccPointCompressedToPoint() {
  let pkData =
    new Uint8Array([2, 143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195,
      157, 111, 40, 217, 215, 148, 120, 224, 205, 82]);
  let returnPoint = cryptoFramework.ECCKeyUtil.convertPoint('NID_brainpoolP256r1', pkData);
  console.info('convertPoint result: success.');
  let eccCommonParamsSpec = cryptoFramework.ECCKeyUtil.genECCCommonParamsSpec('NID_brainpoolP256r1');
  let eccPubKeySpec: cryptoFramework.ECCPubKeySpec = {
    algName: 'ECC',
    specType: cryptoFramework.AsyKeySpecType.PUBLIC_KEY_SPEC,
    params: eccCommonParamsSpec,
    pk: returnPoint
  };
  let generatorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(eccPubKeySpec);
  let pubKey = await generatorBySpec.generatePubKey();
  let returnData = cryptoFramework.ECCKeyUtil.getEncodedPoint('NID_brainpoolP256r1', returnPoint, 'UNCOMPRESSED');
  console.info('returnData: ' + returnData);
  let eccPkX = pubKey.getAsyKeySpec(cryptoFramework.AsyKeySpecItem.ECC_PK_X_BN);
  console.info('returnPoint x data: ' + returnPoint.x);
  console.info('ECC_PK_X_BN: ' + eccPkX);
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ECCCompressPublicKeyFormatConversion/entry/src/main/ets/pages/GetKeyObject.ets#L16-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：GetKeyObject.ets</a></div>
