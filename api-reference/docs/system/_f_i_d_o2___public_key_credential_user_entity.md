---
title: "FIDO2_PublicKeyCredentialUserEntity"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_user_entity"
catalog: "harmonyos-references"
content_hash: "e3ee21cdff44"
synced_at: "2026-07-09T00:59:19.127719"
---

# FIDO2_PublicKeyCredentialUserEntity

#### 概述

创建新凭据时用户的属性。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [id](#id) | 凭据的标识符。 |
| char * [displayName](#displayname) | 前台显示的用户名。长度限制0到512。 |
| char * [name](#name) | 用户名。长度限制0到512。 |

#### 结构体成员变量说明

#### [h2]displayName

```
char* FIDO2_PublicKeyCredentialUserEntity::displayName
```
 描述

前台显示的用户名。

#### [h2]id

```
Uint8Buff FIDO2_PublicKeyCredentialUserEntity::id
```
 描述

凭据的标识符。

#### [h2]name

```
char* FIDO2_PublicKeyCredentialUserEntity::name
```
 描述

用户名。
