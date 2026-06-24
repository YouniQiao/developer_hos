---
title: "crypto_common.h"
upstream_id: "harmonyos-references/capi-crypto-common-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:31.121420"
---

# crypto_common.h

#### 概述

定义通用API接口。

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
| [OH_Crypto_ErrCode](#oh_crypto_errcode) | OH_Crypto_ErrCode | 加解密错误返回码枚举。 |
| [Crypto_CipherMode](#crypto_ciphermode) | Crypto_CipherMode | 定义加解密操作类型。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [void OH_Crypto_FreeDataBlob(Crypto_DataBlob *dataBlob)](#oh_crypto_freedatablob) | 释放dataBlob数据。 |

#### 枚举类型说明

#### [h2]OH_Crypto_ErrCode

```
enum OH_Crypto_ErrCode
```
 描述

加解密错误返回码枚举。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO_SUCCESS = 0 | 表示操作成功。 |
| CRYPTO_INVALID_PARAMS = 401 | 输入参数不合法。 |
| CRYPTO_NOT_SUPPORTED = 801 | 不支持的函数或算法。 |
| CRYPTO_MEMORY_ERROR = 17620001 | 内存错误。 |
| CRYPTO_PARAMETER_CHECK_FAILED = 17620003 | 参数检查失败。 **起始版本：** 20 |
| CRYPTO_INVALID_CALL = 17620004 | 表示无效的函数调用。 **起始版本：** 26.0.0 |
| CRYPTO_OPERTION_ERROR = 17630001 | 表示加解密操作错误。 |

#### [h2]Crypto_CipherMode

```
enum Crypto_CipherMode
```
 描述

定义加解密操作类型。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| CRYPTO_ENCRYPT_MODE = 0 | 加密操作。 |
| CRYPTO_DECRYPT_MODE = 1 | 解密操作。 |

#### 函数说明

#### [h2]OH_Crypto_FreeDataBlob()

```
void OH_Crypto_FreeDataBlob(Crypto_DataBlob *dataBlob)
```
 描述

释放dataBlob数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [Crypto_DataBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cryptocommonapi-crypto-datablob) *dataBlob | 需要释放的dataBlob数据。 |
