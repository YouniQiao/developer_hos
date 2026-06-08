---
title: "安全随机数生成(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-ndk
format: md
upstream_id: dev/app-dev/system/system-security/crypto-architecture-kit/crypto-compute-rand/crypto-generate-random-number-ndk
last_sync: 2026-06-07
sync_hash: 0b599928
---
![](./img/8da90efa.png)

从API version 12开始，轻量级智能穿戴设备支持获取随机数相关操作。

随机数主要用于临时会话密钥生成和非对称加密算法密钥生成等场景。在加解密场景中，安全随机数生成器需要具备随机性、不可预测性与不可重现性。当前系统生成的随机数满足密码学安全伪随机性要求。

开发者可以调用接口，完成以下功能：

* 生成指定长度的安全随机数，并将其用于生成对应的密钥。
* 指定随机种子，生成一系列的随机序列。

在开发前，开发者应该先对加解密基础知识有一定了解，并熟知以下随机数相关的基本概念：

* **内部状态**

  代表随机数生成器内存中的数值，当内部状态相同时，随机数生成器会生成固定的随机数序列。
* **随机种子**

  一个用来对伪随机数的内部状态进行初始化的数据，随机数生成器通过种子来生成一系列的随机序列。

  当前OpenSSL实现方式，随机数生成器内部状态是不断变化的，即使设置相同的种子，生成的随机数序列也不会相同。

## 支持的算法与规格

随机数生成算法使用OpenSSL的RAND\_priv\_bytes接口生成安全随机数。

| 算法 | 长度（Byte） |
| --- | --- |
| CTR\_DRBG | [1, INT\_MAX] |

## 开发步骤

1. 调用[OH\_CryptoRand\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-rand-h#oh_cryptorand_create)，创建随机数生成器。
2. （可选）调用[OH\_CryptoRand\_SetSeed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-rand-h#oh_cryptorand_setseed)，为随机数生成器设置种子。
3. 调用[OH\_CryptoRand\_GenerateRandom](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-rand-h#oh_cryptorand_generaterandom)，生成指定长度的安全随机数。指定字节长度范围为1~INT\_MAX。
4. 调用[OH\_CryptoRand\_GetAlgoName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-rand-h#oh_cryptorand_getalgoname)，获取随机数生成器使用的算法名称。

```
#include "CryptoArchitectureKit/crypto_architecture_kit.h"
#include <cstdio>
#include "file.h"

OH_Crypto_ErrCode doTestRandomNumber()
{
    // 创建随机数生成器。
    OH_CryptoRand *rand = nullptr;
    OH_Crypto_ErrCode ret = OH_CryptoRand_Create(&rand);
    if (ret != CRYPTO_SUCCESS) {
        return ret;
    }

    // 设置随机种子（可选）。
    uint8_t seedData[12] = {0x25, 0x65, 0x58, 0x89, 0x85, 0x55, 0x66, 0x77, 0x88, 0x99, 0x11, 0x22};
    Crypto_DataBlob seed = {
        .data = seedData,
        .len = sizeof(seedData)
    };
    ret = OH_CryptoRand_SetSeed(rand, &seed);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoRand_Destroy(rand);
        return ret;
    }

    // 生成指定长度的随机数。
    Crypto_DataBlob out = {0};
    uint32_t randomLength = 24; // 生成24字节的随机数。
    ret = OH_CryptoRand_GenerateRandom(rand, randomLength, &out);
    if (ret != CRYPTO_SUCCESS) {
        OH_CryptoRand_Destroy(rand);
        return ret;
    }

    // 获取并打印随机数生成器的算法名称。
    const char *algoName = OH_CryptoRand_GetAlgoName(rand);
    if (algoName != nullptr) {
        printf("Random number generator algorithm: %s\n", algoName);
    }

    printf("Generated random number length: %u\n", out.len);

    // 清理资源。
    OH_Crypto_FreeDataBlob(&out);
    OH_CryptoRand_Destroy(rand);
    return CRYPTO_SUCCESS;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/CryptoArchitectureKit/SecureRandomNumberGeneration/entry/src/main/cpp/types/project/rand_test.cpp#L16-L64" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：rand_test.cpp</a></div>
