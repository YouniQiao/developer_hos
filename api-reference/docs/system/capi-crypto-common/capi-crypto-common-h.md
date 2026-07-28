---
title: "crypto_common.h"
upstream_id: "harmonyos-references/capi-crypto-common-h"
catalog: "harmonyos-references"
content_hash: "57aae07ac26f"
synced_at: "2026-07-28T16:50:21.611170"
---

# crypto_common.h

#### 概述

定义加解密通用的数据结构和错误码。

引用文件： <CryptoArchitectureKit/crypto_common.h>

库： libohcrypto.so

系统能力： SystemCapability.Security.CryptoFramework

起始版本： 12

相关模块： [CryptoCommonApi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) | Crypto_DataBlob | 加解密数据结构体。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_Crypto_ErrCode](#oh_crypto_errcode) | OH_Crypto_ErrCode | 枚举错误码。 |
| [Crypto_CipherMode](#crypto_ciphermode) | Crypto_CipherMode | 定义加解密模式。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [void OH_Crypto_FreeDataBlob(Crypto_DataBlob *dataBlob)](#oh_crypto_freedatablob) | 释放数据Blob的内存。 |

#### 枚举类型说明

#### [h2]OH_Crypto_ErrCode

```
enum OH_Crypto_ErrCode
```
 描述

枚举错误码。

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO_SUCCESS = 0 | 表示操作成功。 **起始版本：** 12 |
| CRYPTO_INVALID_PARAMS = 401 | 表示输入参数无效。 **起始版本：** 12 |
| CRYPTO_NOT_SUPPORTED = 801 | 表示不支持的功能或算法。 **起始版本：** 12 |
| CRYPTO_MEMORY_ERROR = 17620001 | 表示内存操作失败。 **起始版本：** 12 |
| CRYPTO_PARAMETER_CHECK_FAILED = 17620003 | 表示参数校验失败。 **起始版本：** 20 |
| CRYPTO_INVALID_CALL = 17620004 | 表示无效的函数调用。 **起始版本：** 26.0.0 |
| CRYPTO_OPERTION_ERROR = 17630001 | 表示加解密操作错误。 **起始版本：** 12 |

#### [h2]Crypto_CipherMode

```
enum Crypto_CipherMode
```
 描述

定义加解密模式。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO_ENCRYPT_MODE = 0 | 表示加密操作。 |
| CRYPTO_DECRYPT_MODE = 1 | 表示解密操作。 |

#### 函数说明

#### [h2]OH_Crypto_FreeDataBlob()

```
void OH_Crypto_FreeDataBlob(Crypto_DataBlob *dataBlob)
```
 描述

释放数据Blob的内存。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *dataBlob | [in] 待释放的数据Blob。 |
