---
title: "指定二进制数据转换对称密钥(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key-ndk
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-convert-binary-data-to-sym-key-ndk
last_sync: 2026-06-07
sync_hash: d818fcb3
---
以3DES和HMAC为例，根据指定的对称密钥二进制数据生成密钥（OH\_CryptoSymKey），将外部或存储的二进制数据转换为算法库的密钥对象，该对象可用于后续的加解密操作。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libohcrypto.so)
```

## 指定二进制数据转换3DES密钥

查看[对称密钥生成和转换规格：3DES](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#section3des)。

1. 获取3DES二进制密钥数据，封装成[Crypto\_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob)。
2. 调用[OH\_CryptoSymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create)，指定字符串参数'3DES192'，创建密钥算法为3DES、密钥长度为192位的对称密钥生成器（OH\_CryptoSymKeyGenerator）。
3. 调用[OH\_CryptoSymKeyGenerator\_Convert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_convert)，根据指定的对称密钥二进制数据生成对称密钥对象（OH\_CryptoSymKey）。
4. 调用[OH\_CryptoSymKey\_GetKeyData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_getkeydata)，获取密钥对象的二进制数据。

以下以生成3DES密钥为例：

```
#include "CryptoArchitectureKit/crypto_common.h"
#include "CryptoArchitectureKit/crypto_sym_key.h"
#include "file.h"

OH_Crypto_ErrCode doTestDataCovertSymKey()
{
    const char *algName = "3DES192";
    OH_CryptoSymKeyGenerator *ctx = nullptr;
    OH_CryptoSymKey *convertKeyCtx = nullptr;
    Crypto_DataBlob out = {.data = nullptr, .len = 0};
    OH_Crypto_ErrCode ret;
    uint8_t arr[] = {0xba, 0x3d, 0xc2, 0x71, 0x21, 0x1e, 0x30, 0x56, 0xad, 0x47, 0xfc, 0x5a,
                     0x46, 0x39, 0xee, 0x7c, 0xba, 0x3b, 0xc2, 0x71, 0xab, 0xa0, 0x30, 0x72};
    Crypto_DataBlob convertBlob = {.data = arr, .len = sizeof(arr)};
    ret = OH_CryptoSymKeyGenerator_Create(algName, &ctx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    ret = OH_CryptoSymKeyGenerator_Convert(ctx, &convertBlob, &convertKeyCtx);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoSymKeyGenerator_Destroy(ctx);
        return ret;
    }
    ret = OH_CryptoSymKey_GetKeyData(convertKeyCtx, &out);
    OH_CryptoSymKeyGenerator_Destroy(ctx);
    OH_CryptoSymKey_Destroy(convertKeyCtx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    OH_Crypto_FreeDataBlob(&out);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSymmetricKeyBinaryFormat/entry/src/main/cpp/types/project/3des.cpp#L16-L49" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：3des.cpp</a></div>


## 指定二进制数据转换HMAC密钥

查看[对称密钥生成和转换规格：HMAC](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-sym-key-generation-conversion-spec#hmac)。

1. 获取HMAC二进制密钥，封装成[Crypto\_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob)。
2. 调用[OH\_CryptoSymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_create)，指定字符串参数'HMAC'，创建密钥算法为HMAC、密钥长度为[1, 32768]位的对称密钥生成器（OH\_CryptoSymKeyGenerator）。
3. 调用[OH\_CryptoSymKeyGenerator\_Convert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkeygenerator_convert)，根据指定的对称密钥二进制数据生成对称密钥对象（OH\_CryptoSymKey）。
4. 调用[OH\_CryptoSymKey\_GetKeyData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-sym-key-h#oh_cryptosymkey_getkeydata)，获取密钥对象的二进制数据。

以下以生成HMAC密钥为例：

```
#include "CryptoArchitectureKit/crypto_common.h"
#include "CryptoArchitectureKit/crypto_sym_key.h"
#include <cstring>
#include "file.h"

OH_Crypto_ErrCode testConvertHmacKey()
{
    const char *algName = "HMAC";
    OH_CryptoSymKeyGenerator *ctx = nullptr;
    OH_CryptoSymKey *convertKeyCtx = nullptr;
    Crypto_DataBlob out = {.data = nullptr, .len = 0};
    OH_Crypto_ErrCode ret;

    char *arr = const_cast<char *>("12345678abcdefgh12345678abcdefgh12345678abcdefgh12345678abcdefgh");
    Crypto_DataBlob convertBlob = {.data = (uint8_t *)(arr), .len = strlen(arr)};
    ret = OH_CryptoSymKeyGenerator_Create(algName, &ctx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    ret = OH_CryptoSymKeyGenerator_Convert(ctx, &convertBlob, &convertKeyCtx);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoSymKeyGenerator_Destroy(ctx);
        return ret;
    }
    ret = OH_CryptoSymKey_GetKeyData(convertKeyCtx, &out);
    OH_CryptoSymKeyGenerator_Destroy(ctx);
    OH_CryptoSymKey_Destroy(convertKeyCtx);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }
    OH_Crypto_FreeDataBlob(&out);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyGenerationConversion/ConvertSymmetricKeyBinaryFormat/entry/src/main/cpp/types/project/hmac.cpp#L16-L50" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：hmac.cpp</a></div>
