---
title: "使用ECC压缩/非压缩公钥格式转换(ArkTS)"
original_url: /docs/dev/app-dev/system/crypto-convert-compressed-or-uncompressed-ecc-pubkey
format: md
upstream_id: dev/app-dev/system/crypto-convert-compressed-or-uncompressed-ecc-pubkey
last_sync: 2026-06-07
sync_hash: d26b3a4d
---
可通过指定ECC公钥数据生成公钥对象（PubKey），也可以从公钥对象（PubKey）中获取ECC公钥数据。

当前仅支持满足X509规范的ECC算法压缩和非压缩格式的公钥数据。此处的公钥数据应当是完整的X509公钥，对于只使用点数据的情况，请参考[使用ECC压缩/非压缩点格式转换](/docs/dev/app-dev/system/crypto-convert-compressed-or-uncompressed-ecc-point)。

ECC的算法规格请查看[非对称密钥生成和转换规格：ECC](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#ecc)。

通过传入字符串参数format，可指定需要获取的ECC公钥数据格式。如果需要获取满足X509规范的压缩格式数据，则指定format为："X509|COMPRESSED"；需要获取非压缩格式，则指定format为："X509|UNCOMPRESSED"。

## 指定非压缩公钥数据转换为压缩公钥数据

1. 将Uint8Array类型的ECC非压缩公钥数据封装成[DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#datablob)对象。

   公钥和私钥可只传入其中一个。此处示例传入非压缩公钥。
2. 调用[cryptoFramework.createAsyKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreateasykeygenerator)，指定字符串参数'ECC\_BrainPoolP256r1'，创建密钥算法为ECC、密钥长度为256位的非对称密钥生成器（AsyKeyGenerator）。
3. 调用[AsyKeyGenerator.convertKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkey-3)，传入封装后的DataBlob对象，生成非对称密钥对象（KeyPair）。
4. 调用[PubKey.getEncodedDer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#getencodedder12)，设置参数为'X509|COMPRESSED'，获取压缩公钥数据的字节流。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function eccPubUncompressedToCompressed() {
  let pkData =
    new Uint8Array([48, 90, 48, 20, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 9, 43, 36, 3, 3, 2, 8, 1, 1, 7, 3, 66, 0, 4,
      143, 39, 57, 249, 145, 50, 63, 222, 35, 70, 178, 121, 202, 154, 21, 146, 129, 75, 76, 63, 8, 195, 157, 111, 40,
      217, 215, 148, 120, 224, 205, 82, 83, 92, 185, 21, 211, 184, 5, 19, 114, 33, 86, 85, 228, 123, 242, 206, 200, 98,
      178, 184, 130, 35, 232, 45, 5, 202, 189, 11, 46, 163, 156, 152]);
  let pubKeyBlob: cryptoFramework.DataBlob = { data: pkData };
  let generator = cryptoFramework.createAsyKeyGenerator('ECC_BrainPoolP256r1');
  let keyPair = await generator.convertKey(pubKeyBlob, null);
  let returnBlob = keyPair.pubKey.getEncodedDer('X509|COMPRESSED');
  console.info('returnBlob data: ' + returnBlob.data);
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ECCCompressPublicKeyFormatConversion/entry/src/main/ets/pages/SpecifyUncompressedPublicKey.ets#L16-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SpecifyUncompressedPublicKey.ets</a></div>
