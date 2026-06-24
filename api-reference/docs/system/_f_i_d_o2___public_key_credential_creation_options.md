---
title: "FIDO2_PublicKeyCredentialCreationOptions"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_creation_options"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:40.180026"
---

# FIDO2_PublicKeyCredentialCreationOptions

#### 概述

创建新的认证凭据的选项。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2_PublicKeyCredentialRpEntity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_rp_entity) [rp](#rp) | 创建新凭据时的依赖方属性。 |
| [FIDO2_PublicKeyCredentialUserEntity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_user_entity) [user](#user) | 创建新凭据时用户的属性。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [challenge](#challenge) | 挑战值。 |
| [FIDO2_CredentialCreationOptionArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___credential_creation_option_array) [pubKeyCredParams](#pubkeycredparams) | 认证凭据的附加参数数组。 |
| uint32_t [timeout](#timeout) | 注册操作最长时间，单位为ms。默认为300000（5分钟），最大为600000（10分钟）。可选。 |
| [FIDO2_PublicKeyCredentialDescriptorArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor_array) [excludeCredentials](#excludecredentials) | FIDO服务器已注册的凭据列表。默认值为[]。可选。 |
| [FIDO2_AuthenticatorSelectionCriteria](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_selection_criteria) [authenticatorSelection](#authenticatorselection) | 身份认证器相关配置项。 |
| [FIDO2_PublicKeyCredentialHintArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_hint_array) [hints](#hints) | 认证方式指示。默认值为[]。可选。 |
| [FIDO2_AttestationConveyancePreference](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_attestationconveyancepreference-1) [attestation](#attestation) | 凭据传递首选项。默认值为FIDO2_NONE，可选。 |
| [FIDO2_AttestationFormatsArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___attestation_formats_array) [attestationFormats](#attestationformats) | 依赖方可以使用此选项指定有关认证方使用的证明声明格式的偏好。默认值为[]。 |
| char * [extensions](#extensions) | 扩展名必须是表示Map对象的JSON字符串。默认空。可选，最大长度为2048字符。 |

#### 结构体成员变量说明

#### [h2]attestation

```
FIDO2_AttestationConveyancePreference FIDO2_PublicKeyCredentialCreationOptions::attestation
```
 描述

凭据传递首选项。默认值为FIDO2_NONE，可选。

#### [h2]attestationFormats

```
FIDO2_AttestationFormatsArray FIDO2_PublicKeyCredentialCreationOptions::attestationFormats
```
 描述

依赖方可以使用此选项指定有关认证方使用的证明声明格式的偏好。默认值为[]。

#### [h2]authenticatorSelection

```
FIDO2_AuthenticatorSelectionCriteria FIDO2_PublicKeyCredentialCreationOptions::authenticatorSelection
```
 描述

身份认证器相关配置项。

#### [h2]challenge

```
Uint8Buff FIDO2_PublicKeyCredentialCreationOptions::challenge
```
 描述

挑战。

#### [h2]excludeCredentials

```
FIDO2_PublicKeyCredentialDescriptorArray FIDO2_PublicKeyCredentialCreationOptions::excludeCredentials
```
 描述

FIDO服务器已注册的凭据列表。默认值为[]。可选。

#### [h2]extensions

```
char* FIDO2_PublicKeyCredentialCreationOptions::extensions
```
 描述

扩展名必须是表示Map<string, Object>对象的JSON字符串。可选。

#### [h2]hints

```
FIDO2_PublicKeyCredentialHintArray FIDO2_PublicKeyCredentialCreationOptions::hints
```
 描述

认证方式指示。默认值为[]。可选。

#### [h2]pubKeyCredParams

```
FIDO2_CredentialCreationOptionArray FIDO2_PublicKeyCredentialCreationOptions::pubKeyCredParams
```
 描述

认证凭据的附加参数数组。

#### [h2]rp

```
FIDO2_PublicKeyCredentialRpEntity FIDO2_PublicKeyCredentialCreationOptions::rp
```
 描述

创建新凭据时的依赖方属性。

#### [h2]timeout

```
uint32_t FIDO2_PublicKeyCredentialCreationOptions::timeout
```
 描述

注册操作最长时间，单位为ms。可选。

#### [h2]user

```
FIDO2_PublicKeyCredentialUserEntity FIDO2_PublicKeyCredentialCreationOptions::user
```
 描述

创建新凭据时用户的属性。
