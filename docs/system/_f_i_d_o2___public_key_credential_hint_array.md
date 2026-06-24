---
title: "FIDO2_PublicKeyCredentialHintArray"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_hint_array"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:40.431520"
---

# FIDO2_PublicKeyCredentialHintArray

#### 概述

认证方式指示数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [hintNum](#hintnum) | 认证方式指示数目。 |
| [FIDO2_PublicKeyCredentialHint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_publickeycredentialhint-1) * [hints](#hints) | 认证方式指示列表。 |

#### 结构体成员变量说明

#### [h2]hintNum

```
uint32_t FIDO2_PublicKeyCredentialHintArray::hintNum
```
 描述

认证方式指示数目。

#### [h2]hints

```
FIDO2_PublicKeyCredentialHint* FIDO2_PublicKeyCredentialHintArray::hints
```
 描述

认证方式指示列表。
