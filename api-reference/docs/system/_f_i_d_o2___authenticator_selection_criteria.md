---
title: "FIDO2_AuthenticatorSelectionCriteria"
upstream_id: "harmonyos-references/_f_i_d_o2___authenticator_selection_criteria"
catalog: "harmonyos-references"
content_hash: "9ff0ab76520b"
synced_at: "2026-07-09T00:59:18.354065"
---

# FIDO2_AuthenticatorSelectionCriteria

#### 概述

由WebAuthn依赖方指定，与认证器有关。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2_AuthenticatorAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_authenticatorattachment-1) [authenticatorAttachment](#authenticatorattachment) | 认证器信息（FIDO2_PLATFORM表示平台，FIDO2_ROAMING表示漫游）。默认值为FIDO2_PLATFORM。可选。 |
| const char * [residentKey](#residentkey) | 常驻键。默认空。可选。 |
| bool [requireResidentKey](#requireresidentkey) | 是否需要常驻键，true代表需要常驻键，false代表不需要。默认值为false。可选。 |
| [FIDO2_UserVerificationRequirement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_userverificationrequirement-1) [userVerification](#userverification) | 用户认证需求枚举。默认值为FIDO2_PREFERRED。可选。 |

#### 结构体成员变量说明

#### [h2]authenticatorAttachment

```
FIDO2_AuthenticatorAttachment FIDO2_AuthenticatorSelectionCriteria::authenticatorAttachment
```
 描述

认证器信息（平台、漫游）。可选。

#### [h2]requireResidentKey

```
bool FIDO2_AuthenticatorSelectionCriteria::requireResidentKey
```
 描述

是否需要常驻键，true代表需要常驻键，false代表不需要。默认值为false。可选。当不需要常驻键时，默认设置为false以提高兼容性。

#### [h2]residentKey

```
const char* FIDO2_AuthenticatorSelectionCriteria::residentKey
```
 描述

常驻键。可选。默认为空。

#### [h2]userVerification

```
FIDO2_UserVerificationRequirement FIDO2_AuthenticatorSelectionCriteria::userVerification
```
 描述

用户认证需求枚举。默认值为FIDO2_PREFERRED。可选。
