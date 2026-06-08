---
title: "如何用已有证书做RSA的公钥加密"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-23
format: md
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-23
last_sync: 2026-06-07
sync_hash: 5665cda1
---
**问题场景**

使用PEM格式证书中的公钥调用示例中的 `rsaPubKeyEncrypt()` 方法时，初始化失败。使用指南中示例的公钥可以成功加密，但加密后的数据转换为字符串后显示为乱码。

**解决措施**

将内容转换为字符串时，可以将其转换为Base64或十六进制。具体转换方法请参考以下代码：

```
function uint8ArrayToHexStr(data: Uint8Array): string {
  let hexString = '';
  let i: number;
  for (i = 0; i < data.length; i++) {
    let char = ('00' + data[i].toString(16)).slice(-2);
    hexString += char;
  }
  return hexString;
}
```

参考如下代码内容，使用正确的证书数据进行处理。

```
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function rsaPubKeyEncrypt(pubKey: cryptoFramework.PubKey, plainText: cryptoFramework.DataBlob) {
  try {
    let asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('RSA1024');
    let keyGenPromise: cryptoFramework.KeyPair =
      await asyKeyGenerator.convertKey({ data: pubKey.getEncoded().data }, null);
    let cipher = cryptoFramework.createCipher('RSA1024|PKCS1');
    await cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, keyGenPromise.pubKey, null);
    let encryptData = await cipher.doFinal(plainText);
    return uint8ArrayToHexStr(encryptData.data);
  } catch (err) {
    console.info(err);
    return uint8ArrayToHexStr(new Uint8Array());
  }
}
```
