---
displayed_sidebar: appDevSidebar
title: "使用DH进行密钥协商(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-dev/crypto-key-agreement-using-dh-ndk
last_sync: 2026-06-07
sync_hash: 48f0f2ad
---
对应的算法规格请查看[密钥协商算法规格：DH](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview#dh)。

## 开发步骤

1. 调用[OH\_CryptoAsymKeyGenerator\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_create)、[OH\_CryptoAsymKeyGenerator\_Generate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-asym-key-h#oh_cryptoasymkeygenerator_generate)生成密钥算法为DH\_modp1536的非对称密钥（keyPair）。

   如何生成DH非对称密钥，开发者可参考下文示例，并结合[非对称密钥生成和转换规格：DH](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-spec/crypto-asym-key-generation-conversion-spec#dh)和[随机生成非对称密钥对](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-generation-conversion/crypto-key-generation-conversion-dev/crypto-generate-asym-key-pair-randomly-ndk)理解。参考文档与当前示例可能存在入参差异，请在阅读时注意区分。
2. 调用[OH\_CryptoKeyAgreement\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-key-agreement-h#oh_cryptokeyagreement_create)，指定字符串参数'DH\_modp1536'，创建密钥算法为DH\_modp1536的密钥协议生成器。
3. 调用[OH\_CryptoKeyAgreement\_GenerateSecret](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-key-agreement-h#oh_cryptokeyagreement_generatesecret)，基于传入的私钥（keyPair.priKey）与公钥（keyPair.pubKey）进行密钥协商，返回共享密钥。

```
#include "CryptoArchitectureKit/crypto_architecture_kit.h"
#include "CryptoArchitectureKit/crypto_key_agreement.h"
#include "file.h"
#include <cstdio>
#include <cstring>

static OH_Crypto_ErrCode GenerateSecret(OH_CryptoKeyAgreement *dhKeyAgreement, OH_CryptoKeyPair *keyPairA,
    OH_CryptoKeyPair *keyPairB, Crypto_DataBlob *secret)
{
    OH_CryptoPrivKey *privKey = OH_CryptoKeyPair_GetPrivKey(keyPairA);
    OH_CryptoPubKey *pubKey = OH_CryptoKeyPair_GetPubKey(keyPairB);
    return OH_CryptoKeyAgreement_GenerateSecret(dhKeyAgreement, privKey, pubKey, secret);
}

static OH_Crypto_ErrCode compareSecrets(const Crypto_DataBlob *secret1, const Crypto_DataBlob *secret2)
{
    if ((secret1->len == secret2->len) &&
        (memcmp(secret1->data, secret2->data, secret1->len) == 0)) {
        return CRYPTO_SUCCESS;
    }
    return CRYPTO_OPERTION_ERROR;
}

OH_Crypto_ErrCode doTestDHKeyAgreement()
{
    OH_CryptoAsymKeyGenerator *dhGen = nullptr;
    OH_CryptoKeyPair *keyPairA = nullptr;
    OH_CryptoKeyPair *keyPairB = nullptr;
    OH_CryptoKeyAgreement *dhKeyAgreement = nullptr;
    Crypto_DataBlob secret1 = { 0 };
    Crypto_DataBlob secret2 = { 0 };
    OH_Crypto_ErrCode ret = OH_CryptoAsymKeyGenerator_Create("DH_modp1536", &dhGen);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    // 生成公私钥对A 和 B。
    ret = OH_CryptoAsymKeyGenerator_Generate(dhGen, &keyPairA);
    if (ret != CRYPTO_SUCCESS) {
        goto goto_cleanup;
    }

    ret = OH_CryptoAsymKeyGenerator_Generate(dhGen, &keyPairB);
    if (ret != CRYPTO_SUCCESS) {
        goto goto_cleanup;
    }

    ret = OH_CryptoKeyAgreement_Create("DH_modp1536", &dhKeyAgreement);
    if (ret != CRYPTO_SUCCESS) {
        goto goto_cleanup;
    }

    // 使用A的公钥和B的私钥进行密钥协商。
    ret = GenerateSecret(dhKeyAgreement, keyPairB, keyPairA, &secret1);
    if (ret != CRYPTO_SUCCESS) {
        goto goto_cleanup;
    }

    // 使用B的公钥和A的私钥进行密钥协商。
    ret = GenerateSecret(dhKeyAgreement, keyPairA, keyPairB, &secret2);
    if (ret != CRYPTO_SUCCESS) {
        goto goto_cleanup;
    }

    // 比较两次协商的结果。
    ret = compareSecrets(&secret1, &secret2);
    if (ret != CRYPTO_SUCCESS) {
        printf("dh result is not equal\n");
        goto goto_cleanup;
    }

goto_cleanup:
    OH_Crypto_FreeDataBlob(&secret1);
    OH_Crypto_FreeDataBlob(&secret2);
    OH_CryptoKeyAgreement_Destroy(dhKeyAgreement);
    OH_CryptoKeyPair_Destroy(keyPairA);
    OH_CryptoKeyPair_Destroy(keyPairB);
    OH_CryptoAsymKeyGenerator_Destroy(dhGen);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/KeyNegotiationCpp/entry/src/main/cpp/types/project/DH.cpp#L16-L99" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DH.cpp</a></div>
