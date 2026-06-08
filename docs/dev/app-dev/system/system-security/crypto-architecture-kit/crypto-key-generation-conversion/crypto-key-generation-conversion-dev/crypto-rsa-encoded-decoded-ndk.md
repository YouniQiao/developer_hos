---
displayed_sidebar: appDevSidebar
title: "使用RSA私钥进行编码解码(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-rsa-encoded-decoded-ndk
last_sync: 2026-06-07
sync_hash: d6d5fe23
---
**编码**

1. 调用[OH\_CryptoAsymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create)、[OH\_CryptoAsymKeyGenerator\_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_generate)，生成RSA密钥类型为RSA2048、素数个数为2的非对称密钥对（keyPair）。keyPair对象中包括公钥PubKey、私钥PriKey。

   如何生成RSA非对称密钥对，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：RSA](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa)和[随机生成非对称密钥对(C/C++)](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk)理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。
2. 调用[OH\_CryptoPrivKeyEncodingParams\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoprivkeyencodingparams_create)创建参数对象（params），并通过[OH\_CryptoPrivKeyEncodingParams\_SetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoprivkeyencodingparams_setparam)设置加密算法和密码。
3. 调用[OH\_CryptoPrivKey\_Encode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoprivkey_encode)，传入参数CRYPTO\_PEM/CRYPTO\_DER、PKCS1/PKCS8和参数对象（params）生成编码后的私钥字符串。

**解码**

1. 调用[OH\_CryptoAsymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create)生成RSA非对称密钥生成器keyGen。

   如何生成RSA非对称密钥对，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：RSA](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#rsa)。
2. 调用[OH\_CryptoAsymKeyGenerator\_SetPassword](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_setpassword)，传入编码后的私钥字符串与编码口令。
3. 调用[OH\_CryptoAsymKeyGenerator\_Convert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_convert)，传入参数CRYPTO\_PEM和编码后的私钥字符串，返回RSA密钥对。

* 编码示例：

```
#include "CryptoArchitectureKit/crypto_architecture_kit.h"
#include "file.h"

static OH_Crypto_ErrCode SetParams(OH_CryptoPrivKeyEncodingParams *params)
{
    Crypto_DataBlob password = {(uint8_t *)"1234567890", 10};
    Crypto_DataBlob cipher = {(uint8_t *)"AES-128-CBC", 11};
    OH_Crypto_ErrCode ret = OH_CryptoPrivKeyEncodingParams_SetParam(params,
        CRYPTO_PRIVATE_KEY_ENCODING_PASSWORD_STR, &password);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    ret = OH_CryptoPrivKeyEncodingParams_SetParam(params, CRYPTO_PRIVATE_KEY_ENCODING_SYMMETRIC_CIPHER_STR, &cipher);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    return CRYPTO_SUCCESS;
}

OH_Crypto_ErrCode doTestPriKeyPkcs1Encoded()
{
    OH_CryptoAsymKeyGenerator *keyGen = nullptr;
    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create("RSA2048", &keyGen);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    OH_CryptoKeyPair *keyPair = nullptr;
    ret = OH_CryptoAsymKeyGenerator_Generate(keyGen, &keyPair);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoAsymKeyGenerator_Destroy(keyGen);
        return ret;
    }

    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPair);
    if (privKey == nullptr) {
        OH_CryptoKeyPair_Destroy(keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(keyGen);
        return CRYPTO_OPERTION_ERROR;
    }
    OH_CryptoPrivKeyEncodingParams *params = nullptr;
    ret = OH_CryptoPrivKeyEncodingParams_Create(&params);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKeyPair_Destroy(keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(keyGen);
        return ret;
    }
    ret = SetParams(params);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoPrivKeyEncodingParams_Destroy(params);
        OH_CryptoKeyPair_Destroy(keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(keyGen);
        return ret;
    }

    Crypto_DataBlob pemData = {0};
    ret = OH_CryptoPrivKey_Encode(privKey, CRYPTO_PEM, "PKCS1", params, &pemData);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoPrivKeyEncodingParams_Destroy(params);
        OH_CryptoKeyPair_Destroy(keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(keyGen);
        return ret;
    }
    OH_Crypto_FreeDataBlob(&pemData);
    OH_CryptoPrivKeyEncodingParams_Destroy(params);
    OH_CryptoKeyPair_Destroy(keyPair);
    OH_CryptoAsymKeyGenerator_Destroy(keyGen);
    return ret;
}
```

* 解码示例：

  ```
  #include "CryptoArchitectureKit/crypto_architecture_kit.h"
  #include <string>
  #include "file.h"

  OH_Crypto_ErrCode doTestPriKeyPkcs1Decoded()
  {
      std::string priKeyPkcs1EncodingStr =
          "-----BEGIN RSA PRIVATE KEY-----\n"
          "Proc-Type: 4,ENCRYPTED\n"
          "DEK-Info: AES-128-CBC,815A066131BF05CF87CE610A59CC69AE\n\n"
          "7Jd0vmOmYGFZ2yRY8fqRl3+6rQlFtNcMILvcb5KWHDSrxA0ULmJE7CW0DSRikHoA\n"
          "t0KgafhYXeQXh0dRy9lvVRAFSLHCLJVjchx90V7ZSivBFEq7+iTozVp4AlbgYsJP\n"
          "vx/1sfZD2WAcyMJ7IDmJyft7xnpVSXsyWGTT4f3eaHJIh1dqjwrso7ucAW0FK6rp\n"
          "/TONyOoXNfXtRbVtxNyCWBxt4HCSclDZFvS9y8fz9ZwmCUV7jei/YdzyQI2wnE13\n"
          "W8cKlpzRFL6BWi8XPrUtAw5MWeHBAPUgPWMfcmiaeyi5BJFhQCrHLi+Gj4EEJvp7\n"
          "mP5cbnQAx6+paV5z9m71SKrI/WSc4ixsYYdVmlL/qwAK9YliFfoPl030YJWW6rFf\n"
          "T7J9BUlHGUJ0RB2lURNNLakM+UZRkeE9TByzCzgTxuQtyv5Lwsh2mAk3ia5x0kUO\n"
          "LHg3Eoabhdh+YZA5hHaxnpF7VjspB78E0F9Btq+A41rSJ6zDOdToHey4MJ2nxdey\n"
          "Z3bi81TZ6Fp4IuROrvZ2B/Xl3uNKR7n+AHRKnaAO87ywzyltvjwSh2y3xhJueiRs\n"
          "BiYkyL3/fnocD3pexTdN6h3JgQGgO5GV8zw/NrxA85mw8o9im0HreuFObmNj36T9\n"
          "k5N+R/QIXW83cIQOLaWK1ThYcluytf0tDRiMoKqULiaA6HvDMigExLxuhCtnoF8I\n"
          "iOLN1cPdEVQjzwDHLqXP2DbWW1z9iRepLZlEm1hLRLEmOrTGKezYupVv306SSa6J\n"
          "OA55lAeXMbyjFaYCr54HWrpt4NwNBX1efMUURc+1LcHpzFrBTTLbfjIyq6as49pH\n"
          "-----END RSA PRIVATE KEY-----\n";

      OH_CryptoAsymKeyGenerator *keyGen = nullptr;
      OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create("RSA2048", &keyGen);
      if (ret != CRYPTO_SUCCESS) {
          return ret;
      }

      OH_CryptoKeyPair *dupKeyPair = nullptr;
      Crypto_DataBlob priKeyPkcs1EncodingData = {};
      priKeyPkcs1EncodingData.data = reinterpret_cast<uint8_t *>(const_cast<char *>(priKeyPkcs1EncodingStr.c_str()));
      priKeyPkcs1EncodingData.len = strlen(priKeyPkcs1EncodingStr.c_str());
      std::string password = "123456";
      ret = OH_CryptoAsymKeyGenerator_SetPassword(keyGen, reinterpret_cast<const unsigned char *>(password.c_str()),
          password.size());
      if (ret != CRYPTO_SUCCESS) {
          OH_CryptoAsymKeyGenerator_Destroy(keyGen);
          return ret;
      }
      ret = OH_CryptoAsymKeyGenerator_Convert(keyGen, CRYPTO_PEM, nullptr, &priKeyPkcs1EncodingData, &dupKeyPair);
      if (ret != CRYPTO_SUCCESS) {
          OH_CryptoAsymKeyGenerator_Destroy(keyGen);
          return ret;
      }
      OH_CryptoKeyPair_Destroy(dupKeyPair);
      OH_CryptoAsymKeyGenerator_Destroy(keyGen);
      return ret;
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/PrikeyOperation/entry/src/main/cpp/types/project/prikey_decoding.cpp#L16-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：prikey_decoding.cpp</a></div>
