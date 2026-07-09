---
title: "FIDO2_AuthenticatorTransportArray"
upstream_id: "harmonyos-references/_f_i_d_o2___authenticator_transport_array"
catalog: "harmonyos-references"
content_hash: "731743707536"
synced_at: "2026-07-09T00:59:18.540484"
---

# FIDO2_AuthenticatorTransportArray

#### 概述

认证器传输方式数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [transportNum](#transportnum) | 传输方式数量。 |
| [FIDO2_AuthenticatorTransport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_authenticatortransport-1) * [transports](#transports) | 认证器传输方式。 |

#### 结构体成员变量说明

#### [h2]transportNum

```
uint32_t FIDO2_AuthenticatorTransportArray::transportNum
```
 描述

传输方式数量。

#### [h2]transports

```
FIDO2_AuthenticatorTransport* FIDO2_AuthenticatorTransportArray::transports
```
 描述

认证器传输方式。
