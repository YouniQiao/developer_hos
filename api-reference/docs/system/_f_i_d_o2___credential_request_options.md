---
title: "FIDO2_CredentialRequestOptions"
upstream_id: "harmonyos-references/_f_i_d_o2___credential_request_options"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:40.134919"
---

# FIDO2_CredentialRequestOptions

#### 概述

认证信息字典对象。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2_CredentialMediationRequirement](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_credentialmediationrequirement-1) [mediation](#mediation) | 操作是否需要用户参与。 |
| [FIDO2_PublicKeyCredentialRequestOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_request_options) [publicKey](#publickey) | publicKey凭证请求的选项。 |

#### 结构体成员变量说明

#### [h2]mediation

```
FIDO2_CredentialMediationRequirement FIDO2_CredentialRequestOptions::mediation
```
 描述

用户介入要求。

#### [h2]publicKey

```
FIDO2_PublicKeyCredentialRequestOptions FIDO2_CredentialRequestOptions::publicKey
```
 描述

publicKey凭证请求的选项。
