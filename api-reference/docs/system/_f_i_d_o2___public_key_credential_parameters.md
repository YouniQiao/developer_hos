---
title: "FIDO2_PublicKeyCredentialParameters"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_parameters"
catalog: "harmonyos-references"
content_hash: "6c1b4149a1d8"
synced_at: "2026-07-28T16:50:31.696239"
---

# FIDO2_PublicKeyCredentialParameters

#### 概述

认证凭据的附加参数。

起始版本： 6.0.0(20)

相关模块： [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

所在头文件： [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2_PublicKeyCredentialType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_publickeycredentialtype-1) [type](#type) | PublicKey凭证类型。 |
| [FIDO2_Algorithm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_algorithm-1) [alg](#alg) | 凭证所使用的密码算法。 |

#### 结构体成员变量说明

#### [h2]alg

```
FIDO2_Algorithm FIDO2_PublicKeyCredentialParameters::alg
```
 描述

凭证所使用的密码算法。

#### [h2]type

```
FIDO2_PublicKeyCredentialType FIDO2_PublicKeyCredentialParameters::type
```
 描述

PublicKey凭证类型。
