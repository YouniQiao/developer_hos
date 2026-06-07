---
title: "SM2签名数据格式转换(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-sign-sig-verify/crypto-sign-sig-verify-dev/crypto-sm2-sign-data-format-conversion
format: md
---


当前支持DER格式与（r、s）格式互转的能力。

开发者可指定SM2签名数据，将其转换成DER格式密文。反之，也可以从DER格式密文中取出具体的SM2签名数据。

**指定密文参数，转换为DER格式**

1. 构造[EccSignatureSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#eccsignaturespec20)对象，用于指定SM2密文参数。
2. 调用[genEccSignature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#geneccsignature20)，将EccSignatureSpec对象传入，转换为DER格式的SM2密文。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

function testSm2SignDataRsToDer() {
  try {
    let spec: cryptoFramework.EccSignatureSpec = {
      r: BigInt('97726608965854271693043443511967021777934035174185659091642456228829830775155'),
      s: BigInt('23084224202834231287427338597254751764391338275617140205467537273296855150376'),
    };

    let data = cryptoFramework.SignatureUtils.genEccSignature(spec);
    console.info('genEccSignature result: success.');
    console.info('data = ' + data);
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`ecc failed: errCode: ${e.code}, message: ${e.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/sm2_data_format_convertion/sm2_sign_data_rs_to_der.ets#L15-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sm2_sign_data_rs_to_der.ets</a></div>


**指定DER格式，转换为（r、s）格式**

1. 指定DER格式的SM2密文参数。
2. 调用[genEccSignatureSpec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#geneccsignaturespec20)，将DER格式数据传入，转换为(r、s)格式的SM2密文。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

function testSm2SignDataDerToRs() {
  try {
    let data =
      new Uint8Array([48, 69, 2, 33, 0, 216, 15, 76, 238, 158, 165, 108, 76, 72, 63, 115, 52, 255, 51, 149, 54, 224,
        179, 49, 225, 70, 36, 117, 88, 154, 154, 27, 194, 161, 3, 1, 115, 2, 32, 51, 9, 53, 55, 248, 82, 7, 159, 179,
        144, 57, 151, 195, 17, 31, 106, 123, 32, 139, 219, 6, 253, 62, 240, 181, 134, 214, 107, 27, 230, 175, 40]);
    let spec: cryptoFramework.EccSignatureSpec = cryptoFramework.SignatureUtils.genEccSignatureSpec(data);
    console.info('genEccSignatureSpec result: success.');
  } catch (err) {
    let e: BusinessError = err as BusinessError;
    console.error(`ecc failed: errCode: ${e.code}, message: ${e.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SignatureVerification/SigningSignatureVerificationArkTs/entry/src/main/ets/pages/sm2_data_format_convertion/sm2_sign_data_der_to_rs.ets#L15-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：sm2_sign_data_der_to_rs.ets</a></div>
