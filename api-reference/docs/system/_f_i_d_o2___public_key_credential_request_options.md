---
title: "FIDO2_PublicKeyCredentialRequestOptions"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_request_options"
catalog: "harmonyos-references"
content_hash: "ce5b22d751bf"
synced_at: "2026-07-09T00:59:19.016314"
---

# FIDO2_PublicKeyCredentialRequestOptions

#### 概述

定义通行密钥认证请求参数。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [challenge](#challenge) | 获取挑战值。 |
| uint32_t [timeout](#timeout) | 注册操作最长时间，单位为ms。默认为300000（5分钟），最大为600000（10分钟）。可选。 |
| char * [rpId](#rpid) | 依赖方标识（如域名等）。默认空。可选。 |
| [FIDO2_PublicKeyCredentialDescriptorArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor_array) [allowCredentials](#allowcredentials) | 认证凭据的附加参数列表。默认空列表。可选。 |
| [FIDO2_UserVerificationRequirement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_userverificationrequirement-1) [userVerification](#userverification) | 用户认证需求枚举。默认值为FIDO2_PREFERRED。可选。 |
| [FIDO2_PublicKeyCredentialHintArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_hint_array) [hints](#hints) | 认证方式指示。默认值为[]。可选。 |
| char * [extensions](#extensions) | 扩展名必须是表示Map object的JSON字符串。默认空。可选，最大长度为2048字符。 |

#### 结构体成员变量说明

#### [h2]allowCredentials

```
FIDO2_PublicKeyCredentialDescriptorArray FIDO2_PublicKeyCredentialRequestOptions::allowCredentials
```
 描述

认证凭据的附加参数列表。可选。

#### [h2]challenge

```
Uint8Buff FIDO2_PublicKeyCredentialRequestOptions::challenge
```
 描述

获取挑战值。

#### [h2]extensions

```
char* FIDO2_PublicKeyCredentialRequestOptions::extensions
```
 描述

扩展名必须是表示Map<string, Object> object的JSON字符串。可选。

#### [h2]hints

```
FIDO2_PublicKeyCredentialHintArray FIDO2_PublicKeyCredentialRequestOptions::hints
```
 描述

认证方式指示。默认值为[]。可选。

#### [h2]rpId

```
char* FIDO2_PublicKeyCredentialRequestOptions::rpId
```
 描述

依赖方标识。可选。

#### [h2]timeout

```
uint32_t FIDO2_PublicKeyCredentialRequestOptions::timeout
```
 描述

认证操作最长时间，单位为ms。可选。

#### [h2]userVerification

```
FIDO2_UserVerificationRequirement FIDO2_PublicKeyCredentialRequestOptions::userVerification
```
 描述

用户认证需求枚举。默认值为FIDO2_PREFERRED。可选。
