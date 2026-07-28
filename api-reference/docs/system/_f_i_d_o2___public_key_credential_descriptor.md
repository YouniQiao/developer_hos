---
title: "FIDO2_PublicKeyCredentialDescriptor"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_descriptor"
catalog: "harmonyos-references"
content_hash: "0a476315fa79"
synced_at: "2026-07-28T16:50:31.565053"
---

# FIDO2_PublicKeyCredentialDescriptor

#### 概述

用于注册或认证凭据的参数。

起始版本： 6.0.0(20)

相关模块： [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

所在头文件： [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2_PublicKeyCredentialType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_publickeycredentialtype-1) [type](#type) | 凭证类型。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [id](#id) | 凭据标识符。 |
| [FIDO2_AuthenticatorTransportArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_transport_array) [transports](#transports) | 定义身份认证器访问类型数组。 |

#### 结构体成员变量说明

#### [h2]id

```
Uint8Buff FIDO2_PublicKeyCredentialDescriptor::id
```
 描述

凭据标识符。

#### [h2]transports

```
FIDO2_AuthenticatorTransportArray FIDO2_PublicKeyCredentialDescriptor::transports
```
 描述

定义身份认证器访问类型数组。

#### [h2]type

```
FIDO2_PublicKeyCredentialType FIDO2_PublicKeyCredentialDescriptor::type
```
 描述

凭证类型。
