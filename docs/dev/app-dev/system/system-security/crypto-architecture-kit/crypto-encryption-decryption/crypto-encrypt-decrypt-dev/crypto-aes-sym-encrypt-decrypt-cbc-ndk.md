---
displayed_sidebar: appDevSidebar
title: "使用AES对称密钥（CBC模式）加解密(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-aes-sym-encrypt-decrypt-cbc-ndk
---

请查看[对称密钥加解密算法规格：AES](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-encrypt-decrypt-spec#aes)。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libohcrypto.so)
```

## 开发步骤

**创建对象**

调用[OH\_CryptoSymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create)和[OH\_CryptoSymKeyGenerator\_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate)，生成密钥算法为AES、密钥长度为128位的对称密钥（OH\_CryptoSymKey）。

如何生成AES对称密钥，请参考以下示例，并结合[对称密钥生成和转换规格：AES](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec#aes)和[随机生成对称密钥](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-sym-key-randomly-ndk)理解，参考文档与当前示例可能存在入参差异，请注意区分。

**加密**

1. 调用[OH\_CryptoSymCipher\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_create)，指定字符串参数'AES128|CBC|PKCS7'，创建对称密钥类型为AES128、分组模式为CBC、填充模式为PKCS7的Cipher实例，用于加密操作。
2. 调用[OH\_CryptoSymCipherParams\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_create)创建参数对象，并调用[OH\_CryptoSymCipherParams\_SetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipherparams_setparam)设置加密参数。
3. 调用[OH\_CryptoSymCipher\_Init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_init)，设置模式为加密（CRYPTO\_ENCRYPT\_MODE），指定加密密钥（OH\_CryptoSymKey）和CBC模式对应的加密参数（OH\_CryptoSymCipherParams），初始化加密Cipher实例。
4. 加密内容较短时，可以直接调用[OH\_CryptoSymCipher\_Final](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_final)，无需调用[OH\_CryptoSymCipher\_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_update)，获取加密后的数据。

**解密**

1. 调用[OH\_CryptoSymCipher\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_create)，指定字符串参数'AES128|CBC|PKCS7'，创建对称密钥类型为AES128、分组模式为CBC、填充模式为PKCS7的Cipher实例，用于解密操作。
2. 调用[OH\_CryptoSymCipher\_Init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_init)，设置模式为解密（CRYPTO\_DECRYPT\_MODE），指定解密密钥（OH\_CryptoSymKey）和CBC模式对应的解密参数（OH\_CryptoSymCipherParams），初始化解密Cipher实例。
3. 解密内容较短时，可直接调用[OH\_CryptoSymCipher\_Final](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_final)，无需调用[OH\_CryptoSymCipher\_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_update)，获取解密后的数据。

**销毁对象**

调用[OH\_CryptoSymKeyGenerator\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_destroy)、[OH\_CryptoSymCipher\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-cipher-h#oh_cryptosymcipher_destroy)、[OH\_CryptoSymKey\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_destroy)、[OH\_Crypto\_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放申请的内存，销毁对象。

```
#include "CryptoArchitectureKit/crypto_common.h"
#include "CryptoArchitectureKit/crypto_sym_cipher.h"
#include <cstring>
#include "file.h"

OH_Crypto_ErrCode doTestAesCbc()
{
    OH_CryptoSymKeyGenerator *genCtx = nullptr;
    OH_CryptoSymCipher *encCtx = nullptr;
    OH_CryptoSymCipher *decCtx = nullptr;
    OH_CryptoSymKey *keyCtx = nullptr;
    OH_CryptoSymCipherParams *params = nullptr;
    Crypto_DataBlob outUpdate = {.data = nullptr, .len = 0};
    Crypto_DataBlob decUpdate = {.data = nullptr, .len = 0};
    char *plainText = const_cast<char *>("this is test!");
    Crypto_DataBlob msgBlob = {.data = (uint8_t *)(plainText), .len = strlen(plainText)};
    uint8_t iv[16] = {1, 2, 4, 12, 3, 4, 2, 3, 3, 2, 0, 4, 3, 1, 0, 10}; // iv使用安全随机数生成
    Crypto_DataBlob ivBlob = {.data = iv, .len = sizeof(iv)};
    // 生成对称密钥
    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create("AES128", &genCtx);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
    ret = OH_CryptoSymKeyGenerator_Generate(genCtx, &keyCtx);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }

    // 设置参数
    ret = OH_CryptoSymCipherParams_Create(&params);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
    ret = OH_CryptoSymCipherParams_SetParam(params, CRYPTO_IV_DATABLOB, &ivBlob);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }

    // 加密
    ret = OH_CryptoSymCipher_Create("AES128|CBC|PKCS7", &encCtx);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
    ret = OH_CryptoSymCipher_Init(encCtx, CRYPTO_ENCRYPT_MODE, keyCtx, params);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
    ret = OH_CryptoSymCipher_Final(encCtx, &msgBlob, &outUpdate);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }

    // 解密
    ret = OH_CryptoSymCipher_Create("AES128|CBC|PKCS7", &decCtx);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
    ret = OH_CryptoSymCipher_Init(decCtx, CRYPTO_DECRYPT_MODE, keyCtx, params);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }
    ret = OH_CryptoSymCipher_Final(decCtx, &outUpdate, &decUpdate);
    if (ret != CRYPTO_SUCCESS) {
        goto end;
    }

end:
    OH_CryptoSymCipherParams_Destroy(params);
    OH_CryptoSymCipher_Destroy(encCtx);
    OH_CryptoSymCipher_Destroy(decCtx);
    OH_CryptoSymKeyGenerator_Destroy(genCtx);
    OH_CryptoSymKey_Destroy(keyCtx);
    OH_Crypto_FreeDataBlob(&outUpdate);
    OH_Crypto_FreeDataBlob(&decUpdate);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/EncryptionDecryption/EncryptionDecryptionGuidanceAes/entry/src/main/cpp/types/project/aes_cbc_encryption_decryption.cpp#L16-L93" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：aes_cbc_encryption_decryption.cpp</a></div>
