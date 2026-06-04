---
displayed_sidebar: appDevSidebar
title: "指定PEM格式字符串数据转换非对称密钥对(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-convert-string-data-to-asym-key-pair-ndk
---

以RSA为例，根据指定的非对称密钥字符串数据，生成非对称密钥对（OH\_CryptoKeyPair）。

![](./img/4732d4d9.png)

针对非对称密钥的convertPemKey操作：

* 公钥需满足X.509规范、PKCS#1规范、PEM编码格式。
* 私钥需满足PKCS#8规范、PKCS#1规范、PEM编码格式。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libohcrypto.so)
```

## 指定PEM格式字符串数据转换RSA密钥对

对应的算法规格请查看[非对称密钥生成和转换规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#rsa)。

1. 调用[OH\_CryptoAsymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create)，指定字符串参数'RSA1024'，创建RSA密钥类型为RSA1024、素数个数为2的非对称密钥生成器（OH\_CryptoAsymKeyGenerator）。

   生成RSA非对称密钥时，默认素数为2，此处省略了参数PRIMES\_2。
2. 调用[OH\_CryptoAsymKeyGenerator\_Convert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_convert)，传入二进制密钥数据，生成非对称密钥对象（OH\_CryptoKeyPair）。
3. 调用[OH\_CryptoPubKey\_Encode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptopubkey_encode)，将非对称密钥对象中的公钥转换成pkcs1或x509格式。

* 以下以生成RSA密钥对为例：

  ```
  #include "CryptoArchitectureKit/crypto_common.h"
  #include "CryptoArchitectureKit/crypto_asym_key.h"
  #include "file.h"

  OH_Crypto_ErrCode doTestPemDataCovertAsymKey()
  {
      OH_CryptoAsymKeyGenerator *ctx = nullptr;
      OH_Crypto_ErrCode ret;

      ret = OH_CryptoAsymKeyGenerator_Create("RSA1024", &ctx);
      if (ret != CRYPTO_SUCCESS) {
          return ret;
      }

      uint8_t sm2PubKeyBlobData[] = {
          48,  129, 159, 48,  13,  6,   9,   42,  134, 72,  134, 247, 13,  1,   1,   1,   5,   0,   3,   129, 141,
          0,   48,  129, 137, 2,   129, 129, 0,   235, 184, 151, 247, 130, 216, 140, 187, 64,  124, 219, 137, 140,
          184, 53,  137, 216, 105, 156, 141, 137, 165, 30,  80,  232, 55,  96,  46,  23,  237, 197, 123, 121, 27,
          240, 190, 14,  111, 237, 172, 67,  42,  47,  164, 226, 248, 211, 157, 213, 194, 131, 109, 181, 41,  173,
          217, 127, 252, 121, 126, 26,  130, 55,  4,   134, 104, 73,  5,   132, 91,  214, 146, 232, 64,  99,  87,
          33,  222, 155, 159, 9,   59,  212, 144, 46,  183, 83,  89,  220, 189, 148, 13,  176, 5,   139, 156, 230,
          143, 16,  152, 79,  36,  8,   112, 40,  174, 35,  83,  82,  57,  137, 87,  123, 215, 99,  199, 66,  131,
          150, 31,  143, 56,  252, 2,   73,  41,  70,  159, 2,   3,   1,   0,   1};

      OH_CryptoKeyPair *dupKeyPair = nullptr;
      Crypto_DataBlob pubBlob = {.data = sm2PubKeyBlobData, .len = sizeof(sm2PubKeyBlobData)};
      ret = OH_CryptoAsymKeyGenerator_Convert(ctx, CRYPTO_DER, &pubBlob, nullptr, &dupKeyPair);
      if (ret != CRYPTO_SUCCESS) {
          OH_CryptoAsymKeyGenerator_Destroy(ctx);
          return ret;
      }

      OH_CryptoPubKey *pubKey1 = OH_CryptoKeyPair_GetPubKey(dupKeyPair);
      Crypto_DataBlob retBlob = {.data = nullptr, .len = 0};
      ret = OH_CryptoPubKey_Encode(pubKey1, CRYPTO_PEM, "PKCS1", &retBlob);
      if (ret != CRYPTO_SUCCESS) {
          OH_CryptoAsymKeyGenerator_Destroy(ctx);
          OH_CryptoKeyPair_Destroy(dupKeyPair);
          return ret;
      }
      OH_Crypto_FreeDataBlob(&retBlob);
      OH_CryptoAsymKeyGenerator_Destroy(ctx);
      OH_CryptoKeyPair_Destroy(dupKeyPair);
      return ret;
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSpecifiedPEMAsymmetricKeyPair/entry/src/main/cpp/types/project/rsa.cpp#L16-L62" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：rsa.cpp</a></div>
