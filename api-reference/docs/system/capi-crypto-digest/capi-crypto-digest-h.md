---
title: "crypto_digest.h"
upstream_id: "harmonyos-references/capi-crypto-digest-h"
catalog: "harmonyos-references"
content_hash: "2b1a261ebbeb"
synced_at: "2026-07-28T16:50:21.993256"
---

# crypto_digest.h

#### 概述

定义摘要算法接口。

引用文件： <CryptoArchitectureKit/crypto_digest.h>

库： libohcrypto.so

系统能力： SystemCapability.Security.CryptoFramework

起始版本： 12

相关模块： [CryptoDigestApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) | OH_CryptoDigest | 摘要结构体，表示摘要上下文。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [OH_Crypto_ErrCode OH_CryptoDigest_Create(const char *algoName, OH_CryptoDigest **ctx)](#oh_cryptodigest_create) | 根据给定的算法名称创建摘要上下文。 注意：创建的资源必须通过[OH_DigestCrypto_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_digestcrypto_destroy)销毁。 |
| [OH_Crypto_ErrCode OH_CryptoDigest_Update(OH_CryptoDigest *ctx, Crypto_DataBlob *in)](#oh_cryptodigest_update) | 更新摘要数据。 |
| [OH_Crypto_ErrCode OH_CryptoDigest_Final(OH_CryptoDigest *ctx, Crypto_DataBlob *out)](#oh_cryptodigest_final) | 完成摘要操作，输出摘要结果。 注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。 |
| [uint32_t OH_CryptoDigest_GetLength(OH_CryptoDigest *ctx)](#oh_cryptodigest_getlength) | 获取摘要结果的长度。 |
| [const char *OH_CryptoDigest_GetAlgoName(OH_CryptoDigest *ctx)](#oh_cryptodigest_getalgoname) | 获取摘要上下文的算法名称。 |
| [void OH_DigestCrypto_Destroy(OH_CryptoDigest *ctx)](#oh_digestcrypto_destroy) | 销毁摘要上下文。 |

#### 函数说明

#### [h2]OH_CryptoDigest_Create()

```
OH_Crypto_ErrCode OH_CryptoDigest_Create(const char *algoName, OH_CryptoDigest **ctx)
```
 描述

根据给定的算法名称创建摘要上下文。

注意：创建的资源必须通过[OH_DigestCrypto_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_digestcrypto_destroy)销毁。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const char *algoName | [in] 摘要算法名称，不能为NULL。取值如下： - 从API version 12开始支持"SHA1"、"SHA224"、"SHA256"、"SHA384"、"SHA512"、"MD5"、"SM3"。 - 从API version 22开始支持"SHA3-256"、"SHA3-384"、"SHA3-512"。 |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) **ctx | [out] 指向摘要上下文指针的指针。ctx不能为NULL，*ctx必须为NULL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) | - - CRYPTO_SUCCESS：操作成功。 - - - CRYPTO_INVALID_PARAMS：ctx为NULL、algoName为NULL、或algoName不是支持的摘要算法名称。 - - - CRYPTO_NOT_SUPPORTED：不支持的操作或算法。 - - - CRYPTO_MEMORY_ERROR：内存分配失败。 - - - CRYPTO_OPERTION_ERROR：摘要操作失败。 - - |

参考：

[OH_CryptoDigest_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_cryptodigest_update) 更新摘要数据。

#### [h2]OH_CryptoDigest_Update()

```
OH_Crypto_ErrCode OH_CryptoDigest_Update(OH_CryptoDigest *ctx, Crypto_DataBlob *in)
```
 描述

更新摘要数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx | [in] 摘要上下文。不能为NULL。 |
| [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *in | [in] 待计算摘要的数据。不能为NULL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) | - - CRYPTO_SUCCESS：操作成功。 - - - CRYPTO_INVALID_PARAMS：ctx或in为NULL。 - - - CRYPTO_NOT_SUPPORTED：不支持的操作或算法。 - - - CRYPTO_MEMORY_ERROR：内存操作失败。 - - - CRYPTO_OPERTION_ERROR：摘要更新失败。 - - |

参考：

[OH_CryptoDigest_Final](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-digest-h#oh_cryptodigest_final) 完成摘要操作，输出摘要结果。

#### [h2]OH_CryptoDigest_Final()

```
OH_Crypto_ErrCode OH_CryptoDigest_Final(OH_CryptoDigest *ctx, Crypto_DataBlob *out)
```
 描述

完成摘要操作，输出摘要结果。

注意：使用完成后必须通过[OH_Crypto_FreeDataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_freedatablob)释放out内存。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx | [in] 摘要上下文。不能为NULL。 |
| [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *out | [out] 指向用于存储摘要结果的Crypto_DataBlob结构体的指针。不能为NULL。调用前需将out初始化为{0}，不要预分配out->data内存。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Crypto_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-crypto-common-h#oh_crypto_errcode) | - - CRYPTO_SUCCESS：操作成功。 - - - CRYPTO_INVALID_PARAMS：ctx或out为NULL。 - - - CRYPTO_NOT_SUPPORTED：不支持的操作或算法。 - - - CRYPTO_MEMORY_ERROR：内存操作失败。 - - - CRYPTO_OPERTION_ERROR：摘要完成操作失败。 - - |

#### [h2]OH_CryptoDigest_GetLength()

```
uint32_t OH_CryptoDigest_GetLength(OH_CryptoDigest *ctx)
```
 描述

获取摘要结果的长度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx | [in] 摘要上下文。不能为NULL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| uint32_t | 返回摘要结果的字节长度。 特殊说明：如果输入参数ctx为NULL，返回401；其他失败场景返回0。 |

#### [h2]OH_CryptoDigest_GetAlgoName()

```
const char *OH_CryptoDigest_GetAlgoName(OH_CryptoDigest *ctx)
```
 描述

获取摘要上下文的算法名称。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx | [in] 摘要上下文。不能为NULL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| const char * | 返回摘要算法名称，不需要调用者释放，在上下文销毁后不可使用。 |

#### [h2]OH_DigestCrypto_Destroy()

```
void OH_DigestCrypto_Destroy(OH_CryptoDigest *ctx)
```
 描述

销毁摘要上下文。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_CryptoDigest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptodigestapi-oh-cryptodigest) *ctx | [in] 摘要上下文。 |
