---
title: "FIDO2_AuthenticatorAttestationResponse"
upstream_id: "harmonyos-references/_f_i_d_o2___authenticator_attestation_response"
catalog: "harmonyos-references"
content_hash: "e8d1a7bf28c5"
synced_at: "2026-07-09T00:59:18.161171"
---

# FIDO2_AuthenticatorAttestationResponse

#### 概述

认证器声明响应。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [attestationObject](#attestationobject) | 声明对象。 |
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

声明对象。

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
