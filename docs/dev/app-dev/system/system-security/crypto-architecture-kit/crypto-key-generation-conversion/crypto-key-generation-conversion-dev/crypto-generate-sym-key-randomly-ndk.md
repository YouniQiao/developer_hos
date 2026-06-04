---
displayed_sidebar: appDevSidebar
title: "随机生成对称密钥(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-generate-sym-key-randomly-ndk
---

以AES和SM4为例，随机生成对称密钥（OH\_CryptoSymKey）。

对称密钥对象可用于后续加解密操作，二进制数据可用于存储或传输。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libohcrypto.so)
```

## 随机生成AES密钥

对应的算法规格请查看[对称密钥生成和转换规格：AES](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec#aes)。

1. 调用[OH\_CryptoSymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create)，指定字符串参数'AES256'，创建密钥算法为AES、密钥长度为256位的对称密钥生成器（OH\_CryptoSymKeyGenerator）。
2. 调用[OH\_CryptoSymKeyGenerator\_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate)，随机生成对称密钥对象（OH\_CryptoSymKey）。
3. 调用[OH\_CryptoSymKey\_GetKeyData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_getkeydata)，获取密钥对象的二进制数据。

```
#include "CryptoArchitectureKit/crypto_common.h"
#include "CryptoArchitectureKit/crypto_sym_key.h"
#include "file.h"

OH_Crypto_ErrCode testGenerateSymKey()
{
    OH_CryptoSymKeyGenerator *ctx = nullptr;
    OH_CryptoSymKey *keyCtx = nullptr;
    Crypto_DataBlob out = {.data = nullptr, .len = 0};
    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create("AES256", &ctx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    ret = OH_CryptoSymKeyGenerator_Generate(ctx, &keyCtx);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoSymKeyGenerator_Destroy(ctx);
        return ret;
    }
    ret = OH_CryptoSymKey_GetKeyData(keyCtx, &out);
    OH_CryptoSymKeyGenerator_Destroy(ctx);
    OH_CryptoSymKey_Destroy(keyCtx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    OH_Crypto_FreeDataBlob(&out);
    return ret;
}
```

## 随机生成SM4密钥

对应的算法规格请查看[对称密钥生成和转换规格：SM4](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec#sm4)。

1. 调用[OH\_CryptoSymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create)，指定字符串参数'SM4\_128'，创建密钥算法为SM4、密钥长度为128位的对称密钥生成器（OH\_CryptoSymKeyGenerator）。
2. 调用[OH\_CryptoSymKeyGenerator\_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_generate)，随机生成对称密钥对象（OH\_CryptoSymKey）。
3. 调用[OH\_CryptoSymKey\_GetKeyData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_getkeydata)，获取密钥对象的二进制数据。

```
#include "CryptoArchitectureKit/crypto_common.h"
#include "CryptoArchitectureKit/crypto_sym_key.h"
#include "file.h"

OH_Crypto_ErrCode testGenerateSM4Key()
{
    OH_CryptoSymKeyGenerator *ctx = nullptr;
    OH_CryptoSymKey *keyCtx = nullptr;
    Crypto_DataBlob out = {.data = nullptr, .len = 0};
    OH_Crypto_ErrCode ret = OH_CryptoSymKeyGenerator_Create("SM4_128", &ctx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    ret = OH_CryptoSymKeyGenerator_Generate(ctx, &keyCtx);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoSymKeyGenerator_Destroy(ctx);
        return ret;
    }
    ret = OH_CryptoSymKey_GetKeyData(keyCtx, &out);
    OH_CryptoSymKeyGenerator_Destroy(ctx);
    OH_CryptoSymKey_Destroy(keyCtx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    OH_Crypto_FreeDataBlob(&out);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/RandomlyGenerateSymmetricKey/entry/src/main/cpp/types/project/sm4.cpp#L16-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：sm4.cpp</a></div>
