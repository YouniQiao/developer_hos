---
displayed_sidebar: appDevSidebar
title: "使用RSA非对称密钥（PKCS1模式）加解密(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-pkcs1-ndk
format: md
---


对应的算法规格请查看[非对称密钥加解密算法规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-encrypt-decrypt-spec#rsa)。

**加密**

1. 调用[OH\_CryptoAsymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create)、[OH\_CryptoAsymKeyGenerator\_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_generate)，生成RSA密钥类型为RSA1024、素数个数为2的非对称密钥对（keyPair）。keyPair对象中包括公钥PubKey、私钥PriKey。

   如何生成RSA非对称密钥对，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：RSA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-key-generation-conversion-spec#rsa)和[随机生成非对称密钥对](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-asym-key-pair-randomly)理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。
2. 调用[OH\_CryptoAsymCipher\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_create)，指定字符串参数'RSA1024|PKCS1'，创建非对称密钥类型为RSA1024、填充模式为PKCS1的Cipher实例，用于完成加解密操作。
3. 调用[OH\_CryptoAsymCipher\_Init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_init)，设置模式为加密（CRYPTO\_ENCRYPT\_MODE），指定加密密钥（keyPair），初始化加密Cipher实例。
4. 调用[OH\_CryptoAsymCipher\_Final](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final)，传入明文，获取加密后的数据。

   * OH\_CryptoAsymCipher\_Final输出结果可能为NULL，在访问具体数据前，需要先判断结果是否为NULL，避免产生异常。
   * 当数据量较大时，可以多次调用OH\_CryptoAsymCipher\_Final，即[分段加解密](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-rsa-asym-encrypt-decrypt-by-segment-ndk)。

**解密**

1. 由于RSA算法的Cipher实例不支持重复init操作，需要调用[OH\_CryptoAsymCipher\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_create)，重新生成Cipher实例。
2. 调用[OH\_CryptoAsymCipher\_Init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_init)，设置模式为解密（CRYPTO\_DECRYPT\_MODE），指定解密密钥（keyPair）初始化解密Cipher实例。
3. 调用[OH\_CryptoAsymCipher\_Final](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-cipher-h#oh_cryptoasymcipher_final)，传入密文，获取解密后的数据。

```
#include "CryptoArchitectureKit/crypto_architecture_kit.h"
#include <cstring>

static OH_Crypto_ErrCode doRsaEncrypt(const Crypto_DataBlob *plainData, OH_CryptoKeyPair **keyPair,
    OH_CryptoAsymKeyGenerator **keyGen, Crypto_DataBlob *encryptedData)
{
    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create("RSA1024", keyGen);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    ret = OH_CryptoAsymKeyGenerator_Generate(*keyGen, keyPair);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoAsymKeyGenerator_Destroy(*keyGen);
        return ret;
    }

    OH_CryptoAsymCipher *cipher = nullptr;
    ret = OH_CryptoAsymCipher_Create("RSA1024|PKCS1", &cipher);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKeyPair_Destroy(*keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(*keyGen);
        return ret;
    }

    ret = OH_CryptoAsymCipher_Init(cipher, CRYPTO_ENCRYPT_MODE, *keyPair);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoAsymCipher_Destroy(cipher);
        OH_CryptoKeyPair_Destroy(*keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(*keyGen);
        return ret;
    }

    ret = OH_CryptoAsymCipher_Final(cipher, plainData, encryptedData);
    OH_CryptoAsymCipher_Destroy(cipher);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKeyPair_Destroy(*keyPair);
        OH_CryptoAsymKeyGenerator_Destroy(*keyGen);
        return ret;
    }

    return ret;
}

static OH_Crypto_ErrCode doRsaDecrypt(const Crypto_DataBlob *encryptedData, OH_CryptoKeyPair *keyPair,
    const Crypto_DataBlob *expectedPlainData)
{
    OH_CryptoAsymCipher *cipher = nullptr;
    OH_Crypto_ErrCode ret = OH_CryptoAsymCipher_Create("RSA1024|PKCS1", &cipher);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    ret = OH_CryptoAsymCipher_Init(cipher, CRYPTO_DECRYPT_MODE, keyPair);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoAsymCipher_Destroy(cipher);
        return ret;
    }

    Crypto_DataBlob decrypted = { 0 };
    ret = OH_CryptoAsymCipher_Final(cipher, encryptedData, &decrypted);
    OH_CryptoAsymCipher_Destroy(cipher);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    if ((decrypted.len != expectedPlainData->len) ||
        (memcmp(decrypted.data, expectedPlainData->data, decrypted.len) != 0)) {
        OH_Crypto_FreeDataBlob(&decrypted);
        return CRYPTO_OPERTION_ERROR;
    }

    OH_Crypto_FreeDataBlob(&decrypted);
    return ret;
}

OH_Crypto_ErrCode doTestRsaEncDec()
{
    const char *testData = "Hello, RSA!";
    Crypto_DataBlob plainData = {
        .data = (uint8_t *)testData,
        .len = strlen(testData)
    };

    OH_CryptoKeyPair *keyPair = nullptr;
    OH_CryptoAsymKeyGenerator *keyGen = nullptr;
    Crypto_DataBlob encryptedData = { 0 };

    OH_Crypto_ErrCode ret = doRsaEncrypt(&plainData, &keyPair, &keyGen, &encryptedData);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    ret = doRsaDecrypt(&encryptedData, keyPair, &plainData);
    OH_Crypto_FreeDataBlob(&encryptedData);
    OH_CryptoKeyPair_Destroy(keyPair);
    OH_CryptoAsymKeyGenerator_Destroy(keyGen);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/EncryptionDecryption/EncryptionDecryptionGuidanceCpp/entry/src/main/cpp/types/project/rsa/PKCS1_RSA.cpp#L16-L118" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PKCS1_RSA.cpp</a></div>
