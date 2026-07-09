---
title: "Rcp_ServerAuthentication"
upstream_id: "harmonyos-references/_rcp___server_authentication"
catalog: "harmonyos-references"
content_hash: "2637309ad697"
synced_at: "2026-07-09T00:59:35.457242"
---

# Rcp_ServerAuthentication

#### 概述

服务器身份验证。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp_Credential](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___credential) [credential](#credential) | 服务器的凭据。 |
| [Rcp_AuthenticationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_authenticationtype) [authenticationType](#authenticationtype) | 服务器的身份验证类型。如果未设置，请与服务器协商。 |

#### 结构体成员变量说明

#### [h2]authenticationType

```
Rcp_AuthenticationType Rcp_ServerAuthentication::authenticationType
```
 描述

服务器的身份验证类型。如果未设置，请与服务器协商。

#### [h2]credential

```
Rcp_Credential Rcp_ServerAuthentication::credential
```
 描述

服务器的凭据。
