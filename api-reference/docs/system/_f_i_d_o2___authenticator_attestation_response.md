---
title: "FIDO2_AuthenticatorAttestationResponse"
upstream_id: "harmonyos-references/_f_i_d_o2___authenticator_attestation_response"
catalog: "harmonyos-references"
content_hash: "54a6733f6d91"
synced_at: "2026-07-28T16:50:30.792120"
---

# FIDO2_AuthenticatorAttestationResponse

#### 概述

认证器声明响应。

起始版本： 6.0.0(20)

相关模块： [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

所在头文件： [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [attestationObject](#attestationobject) | 注册凭证的响应报文中，用于向服务器证明新生成密钥对合法性的数据结构。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [clientDataJson](#clientdatajson) | 获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [publicKey](#publickey) | 注册时生成的公钥数据，包含公钥算法类型和密钥参数，用于服务器保存并后续验证认证签名。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [authenticatorData](#authenticatordata) | 认证器数据，包含依赖方ID哈希、用户存在/已验证标志位、签名计数器、凭证数据等信息，用于验证认证响应的合法性。 |
| [FIDO2_Algorithm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_algorithm-1) [publicKeyAlgorithm](#publickeyalgorithm) | 密码算法。 |
| [FIDO2_AuthenticatorTransportArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_transport_array) [transports](#transports) | 定义身份认证器访问类型数组。 |

#### 结构体成员变量说明

#### [h2]attestationObject

```
Uint8Buff FIDO2_AuthenticatorAttestationResponse::attestationObject
```
 描述

注册凭证的响应报文中，用于向服务器证明新生成密钥对合法性的数据结构。

#### [h2]authenticatorData

```
Uint8Buff FIDO2_AuthenticatorAttestationResponse::authenticatorData
```
 描述

认证器数据，包含依赖方ID哈希、用户存在/已验证标志位、签名计数器、凭证数据等信息，用于验证认证响应的合法性。

#### [h2]clientDataJson

```
Uint8Buff FIDO2_AuthenticatorAttestationResponse::clientDataJson
```
 描述

获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。

#### [h2]publicKey

```
Uint8Buff FIDO2_AuthenticatorAttestationResponse::publicKey
```
 描述

注册时生成的公钥数据，包含公钥算法类型和密钥参数，用于服务器保存并后续验证认证签名。

#### [h2]publicKeyAlgorithm

```
FIDO2_Algorithm FIDO2_AuthenticatorAttestationResponse::publicKeyAlgorithm
```
 描述

密码算法。

#### [h2]transports

```
FIDO2_AuthenticatorTransportArray FIDO2_AuthenticatorAttestationResponse::transports
```
 描述

定义身份认证器访问类型数组。
