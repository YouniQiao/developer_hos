---
title: "FIDO2_PublicKeyAttestationCredential"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_attestation_credential"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:40.256482"
---

# FIDO2_PublicKeyAttestationCredential

#### 概述

定义获取注册结果结构体。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [rawId](#rawid) | 原始凭据标识符。 |
| [FIDO2_AuthenticatorAttestationResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_attestation_response) [response](#response) | 认证器证明响应。 |
| [FIDO2_AuthenticatorAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_authenticatorattachment-1) [authenticatorAttachment](#authenticatorattachment) | 认证器信息（FIDO2_PLATFORM表示平台，FIDO2_ROAMING表示漫游）。默认值为FIDO2_PLATFORM。可选。 |
| const char * [id](#id) | 凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。 |
| const char * [type](#type) | 此属性返回接口对象中指定凭据类型的插槽，它指定此对象所代表的凭据类型。 |
| [AuthenticationExtensionsClientOutputs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_authentication_extensions_client_outputs) [clientExtensionResults](#clientextensionresults) | 客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。 |

#### 结构体成员变量说明

#### [h2]authenticatorAttachment

```
FIDO2_AuthenticatorAttachment FIDO2_PublicKeyAttestationCredential::authenticatorAttachment
```
 描述

认证器信息（平台、漫游）。可选。

#### [h2]clientExtensionResults

```
AuthenticationExtensionsClientOutputs FIDO2_PublicKeyAttestationCredential::clientExtensionResults
```
 描述

客户端扩展结果。当前版本不支持扩展，因此占位符始终为NULL，必须将clientExtensionResults键对应的值解析为{}。

#### [h2]id

```
const char* FIDO2_PublicKeyAttestationCredential::id
```
 描述

凭据的标识符。对于每种类型的凭据，标识符的要求都是不同的。

#### [h2]rawId

```
Uint8Buff FIDO2_PublicKeyAttestationCredential::rawId
```
 描述

原始凭据标识符。

#### [h2]response

```
FIDO2_AuthenticatorAttestationResponse FIDO2_PublicKeyAttestationCredential::response
```
 描述

认证器证明响应。

#### [h2]type

```
const char* FIDO2_PublicKeyAttestationCredential::type
```
 描述

此属性返回接口对象中指定凭据类型的插槽，它指定此对象所代表的凭据类型。
