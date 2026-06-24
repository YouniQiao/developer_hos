---
title: "FIDO2_AuthenticatorResponse"
upstream_id: "harmonyos-references/_f_i_d_o2___authenticator_response"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:39.599645"
---

# FIDO2_AuthenticatorResponse

#### 概述

定义获取认证器断言响应的结构体。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [authenticatorData](#authenticatordata) | 身份认证器数据。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [signature](#signature) | 签名。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [userHandle](#userhandle) | 用户句柄（用户ID）。默认值为空。长度限制0到4096。可选。 |
| [Uint8Buff](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_uint8_buff) [clientDataJson](#clientdatajson) | 获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。 |

#### 结构体成员变量说明

#### [h2]authenticatorData

```
Uint8Buff FIDO2_AuthenticatorResponse::authenticatorData
```
 描述

身份认证器数据。

#### [h2]clientDataJson

```
Uint8Buff FIDO2_AuthenticatorResponse::clientDataJson
```
 描述

获取客户端数据，表示WebAuthn依赖方和客户端的上下文绑定，包含类型、挑战值及源等数据。

#### [h2]signature

```
Uint8Buff FIDO2_AuthenticatorResponse::signature
```
 描述

签名。

#### [h2]userHandle

```
Uint8Buff FIDO2_AuthenticatorResponse::userHandle
```
 描述

用户句柄。可选。
