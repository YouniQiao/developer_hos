---
displayed_sidebar: appDevSidebar
title: "使用X963KDF进行密钥派生(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-using-x963kdf-ndk
format: md
---


从API version 22开始，算法库支持使用该算法进行密钥派生操作。

对应算法规格请查看[密钥派生算法规格：X963KDF](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-key-derivation-overview#x963kdf算法)。

## 开发步骤

1. 调用[OH\_CryptoKdfParams\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdfparams_create)，指定字符串参数'X963KDF'，创建密钥派生参数对象。
2. 调用[OH\_CryptoKdfParams\_SetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdfparams_setparam)，设置X963KDF所需的参数。示例如下：

   * CRYPTO\_KDF\_KEY\_DATABLOB：用于生成派生密钥的原始密钥材料。
   * CRYPTO\_KDF\_INFO\_DATABLOB：应用程序特定的信息（可选）。
3. 调用[OH\_CryptoKdf\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdf_create)，指定字符串参数'X963KDF|SHA256'，创建密钥派生函数对象。
4. 调用[OH\_CryptoKdf\_Derive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-kdf-h#oh_cryptokdf_derive)，指定目标密钥的字节长度，进行密钥派生。

```
#include "CryptoArchitectureKit/crypto_architecture_kit.h"
#include <cstdio>
#include <cstring>
#include "file.h"

OH_Crypto_ErrCode doTestX963Kdf()
{
    // 创建X963KDF参数对象。
    OH_CryptoKdfParams *params = nullptr;
    OH_Crypto_ErrCode ret = OH_CryptoKdfParams_Create("X963KDF", &params);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    // 设置原始密钥材料。
    const char *keyData = "012345678901234567890123456789";
    Crypto_DataBlob key = {
        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(keyData)),
        .len = strlen(keyData)
    };
    ret = OH_CryptoKdfParams_SetParam(params, CRYPTO_KDF_KEY_DATABLOB, &key);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKdfParams_Destroy(params);
        return ret;
    }

    // 设置应用程序特定信息。
    const char *infoData = "infostring";
    Crypto_DataBlob info = {
        .data = reinterpret_cast<uint8_t *>(const_cast<char *>(infoData)),
        .len = strlen(infoData)
    };
    ret = OH_CryptoKdfParams_SetParam(params, CRYPTO_KDF_INFO_DATABLOB, &info);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKdfParams_Destroy(params);
        return ret;
    }

    // 创建密钥派生函数对象。
    OH_CryptoKdf *kdfCtx = nullptr;
    ret = OH_CryptoKdf_Create("X963KDF|SHA256", &kdfCtx);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKdfParams_Destroy(params);
        return ret;
    }

    // 派生密钥。
    Crypto_DataBlob out = {0};
    uint32_t keyLength = 32; // 生成32字节的密钥。
    ret = OH_CryptoKdf_Derive(kdfCtx, params, keyLength, &out);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoKdf_Destroy(kdfCtx);
        OH_CryptoKdfParams_Destroy(params);
        return ret;
    }

    printf("Derived key length: %u\n", out.len);

    // 清理资源。
    OH_Crypto_FreeDataBlob(&out);
    OH_CryptoKdf_Destroy(kdfCtx);
    OH_CryptoKdfParams_Destroy(params);
    return CRYPTO_SUCCESS;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyDerivation/X963KDFDerivation/entry/src/main/cpp/types/project/x963kdf_test.cpp#L16-L81" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：x963kdf_test.cpp</a></div>
