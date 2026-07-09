---
title: "net_ssl_c_type.h"
upstream_id: "harmonyos-references/capi-net-ssl-c-type-h"
catalog: "harmonyos-references"
content_hash: "d6b68ea1cda2"
synced_at: "2026-07-09T00:59:28.769991"
---

# net_ssl_c_type.h

#### 概述

定义SSL/TLS证书链校验模块的C接口需要的数据结构。

引用文件： <network/netstack/net_ssl/net_ssl_c_type.h>

库： libnet_ssl.so

系统能力： SystemCapability.Communication.NetStack

起始版本： 11

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [NetStack_CertBlob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-netstack-certblob) | - | 证书数据结构体。 |
| [NetStack_CertificatePinning](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-netstack-certificatepinning) | NetStack_CertificatePinning | 定义证书锁定信息。 |
| [NetStack_Certificates](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-netstack-certificates) | NetStack_Certificates | 定义证书信息。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [NetStack_CertType](#netstack_certtype) | - | 证书类型枚举。 |
| [NetStack_CertificatePinningKind](#netstack_certificatepinningkind) | NetStack_CertificatePinningKind | 定义证书锁定类型枚举。 |
| [NetStack_HashAlgorithm](#netstack_hashalgorithm) | NetStack_HashAlgorithm | 定义哈希算法。 |

#### 枚举类型说明

#### [h2]NetStack_CertType

```
enum NetStack_CertType
```
 描述

证书类型枚举。

起始版本： 11

| 枚举项 | 描述 |
| --- | --- |
| NETSTACK_CERT_TYPE_PEM = 0 | PEM证书类型 |
| NETSTACK_CERT_TYPE_DER = 1 | DER证书类型 |
| NETSTACK_CERT_TYPE_INVALID | 错误证书类型 |

#### [h2]NetStack_CertificatePinningKind

```
enum NetStack_CertificatePinningKind
```
 描述

定义证书锁定类型枚举。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| PUBLIC_KEY | 公钥锁定类型 |

#### [h2]NetStack_HashAlgorithm

```
enum NetStack_HashAlgorithm
```
 描述

定义哈希算法。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| SHA_256 | Sha256 |
