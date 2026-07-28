---
title: "FIDO2_CredentialCreationOptionArray"
upstream_id: "harmonyos-references/_f_i_d_o2___credential_creation_option_array"
catalog: "harmonyos-references"
content_hash: "66cca568aa46"
synced_at: "2026-07-28T16:50:31.304038"
---

# FIDO2_CredentialCreationOptionArray

#### 概述

认证凭据的附加参数数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

所在头文件： [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [pubKeyCredParamNum](#pubkeycredparamnum) | PubKeyCredParam参数数目。 |
| [FIDO2_PublicKeyCredentialParameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_parameters) * [pubKeyCredParams](#pubkeycredparams) | 认证凭据的附加参数。 |

#### 结构体成员变量说明

#### [h2]pubKeyCredParamNum

```
uint32_t FIDO2_CredentialCreationOptionArray::pubKeyCredParamNum
```
 描述

PubKeyCredParam参数数目。

#### [h2]pubKeyCredParams

```
FIDO2_PublicKeyCredentialParameters* FIDO2_CredentialCreationOptionArray::pubKeyCredParams
```
 描述

认证凭据的附加参数。
