---
title: "验证签名"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-devicesecurity-taas-verifysignature
---

如果需要在端侧校验安全地理位置数据签名的有效性，可以使用[Crypto Architecture Kit](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-architecture-kit-intro)，使用方法请参考开发指南中“[使用ECDSA密钥对签名验签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-ecdsa-sign-sig-verify)”章节。

![](./img/76857a0b.png)

推荐应用开发者在服务器端完成安全地理位置的签名验证，请参考“[Device Ceritificate Kit 设备真实性证明服务器端开发](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device-attestation-servers)”。

## 安全地理位置数据格式

安全地理位置数据的结构请参考[TrustedAppService（可信应用服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-taas-api)。

对安全地理位置数据验签时，需要将返回的结构体中的数据拼接成字符串形式，格式要求如下：

1. 数据排列顺序为：纬度、经度、高度、精确度、时间戳和用户数据。
2. 纬度、经度和高度类型为浮点型，精度为小数点后保留15位；精确度为浮点型，精度为小数点后保留6位；时间戳类型为64位正整数；用户数据类型为字符串。
3. 数据之间的分隔符使用英文逗号。

签名数据是Base64编码后的签名结果。获取签名和签名原始数据的参考代码（不含异常处理逻辑，由开发者根据业务场景实现）如下：

```
import { trustedAppService } from '@kit.DeviceSecurityKit';
import { util } from '@kit.ArkTS';

// 以下均为示例值，仅用于展示如何获取原始签名数据和签名结果
const location: trustedAppService.Location = {
  latitude: 40.053903635898685,
  longitude: 116.17356591910897,
  altitude: 0,
  accuracy: 11.160304069519043,
  timestamp: 1722151680187
};
const userData = "trusted_app_service_userdata";
const secureLocation: trustedAppService.SecureLocation = {
  originalLocation: location,
  userData: userData,
  signature: "MEQCIEAcJHgaU8aAoMqD1wgoxiXR5I4jmwVG6ncgSKkW4uBHAiBnfv96T+gt1ef83kNZ+U0gBLsq9byuBLP1RBx30hByuQ=="
};
// 获取原始数据
const originString = secureLocation.originalLocation.latitude.toFixed(15) + ',' +
  secureLocation.originalLocation.longitude.toFixed(15) + ',' +
  secureLocation.originalLocation.altitude.toFixed(15) + ',' +
  secureLocation.originalLocation.accuracy.toFixed(6) + ',' +
  secureLocation.originalLocation.timestamp + ',' + secureLocation.userData.toString();
const textEncoder = new util.TextEncoder();
const originData = textEncoder.encodeInto(originString);
// 获取签名结果
const base64Helper = new util.Base64Helper();
const signatureData = base64Helper.decodeSync(secureLocation.signature.toString());
```

## 验证签名

结合“[安全地理位置场景](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-devicesecurity-taas-securelocation)”中获取到的原始数据和签名结果，验证签名的参考代码（不含异常处理逻辑，由开发者根据业务场景实现）如下：

1. 从匿名证书链中获取公钥。

   ```
   import { cert } from '@kit.DeviceCertificateKit';
   import { cryptoFramework } from '@kit.CryptoArchitectureKit';
   import { util } from '@kit.ArkTS';
   import { trustedAppService } from '@kit.DeviceSecurityKit';

   // 以安全地理位置场景为例，忽略异常情况处理
   const userData = "trusted_app_service_demo";
   const deviceId = 7483679320805398131;
   const initProperties: Array<trustedAppService.AttestParam> = [
     {
       tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_TYPE,
       value: trustedAppService.AttestType.ATTEST_TYPE_LOCATION
     },
     {
       tag: trustedAppService.AttestTag.ATTEST_TAG_DEVICE_ID,
       value: BigInt(deviceId)
     }
   ];
   const initOptions: trustedAppService.AttestOptions = {
     properties: initProperties
   };
   const returnResult = await trustedAppService.initializeAttestContext(userData, initOptions);
   // 解析匿名证书链数据，获取三级证书
   const certChain = returnResult.certChains;
   const certList = certChain[0].split('-----BEGIN CERTIFICATE-----');
   const thirdCert = '-----BEGIN CERTIFICATE-----' + certList[1];
   // 获取公钥
   const textEncoder = new util.TextEncoder();
   const encodingBlob: cert.EncodingBlob = {
     data: textEncoder.encodeInto(thirdCert),
     encodingFormat: cert.EncodingFormat.FORMAT_PEM
   };
   const x509Cert = await cert.createX509Cert(encodingBlob);
   const asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('ECC256');
   const keyPair = asyKeyGenerator.convertKeySync(x509Cert.getPublicKey().getEncoded(), null);
   const pubKey = keyPair.pubKey; // 证书中的公钥需要转换成cryptoFramework能够接收的格式
   ```
2. 创建非对称密钥类型为ECC256、摘要算法为SHA256的verify实例，并使用步骤1中获取到的公钥进行初始化。

   ```
   const verifier = cryptoFramework.createVerify('ECC256|SHA256');
   verifier.initSync(pubKey);
   ```
3. 使用原始数据和签名结果进行验证签名。

   ```
   const originData = ...; // 请使用获取到的安全地理位置数据
   const signatureData = ...; // 请使用获取到的签名结果
   const inputData: cryptoFramework.DataBlob = {
     data: new Uint8Array(originData)
   };
   const signature: cryptoFramework.DataBlob = {
     data: new Uint8Array(signatureData)
   };
   // 验证签名结果
   const result = verifier.verifySync(inputData, signature);
   ```
