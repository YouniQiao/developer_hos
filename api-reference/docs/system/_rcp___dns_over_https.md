---
title: "Rcp_DnsOverHttps"
upstream_id: "harmonyos-references/_rcp___dns_over_https"
catalog: "harmonyos-references"
content_hash: "05e1c34eeafd"
synced_at: "2026-07-09T00:59:34.046352"
---

# Rcp_DnsOverHttps

#### 概述

HTTPS上的DNS配置如果设置，则首选由DOH DNS服务器解析的地址。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char * [url](#url) | DOH服务器的URL。 |
| bool [skipCertificatesValidation](#skipcertificatesvalidation) | 判断是否跳过证书验证。true代表跳过，false代表不跳过，默认值为false。 |

#### 结构体成员变量说明

#### [h2]skipCertificatesValidation

```
bool Rcp_DnsOverHttps::skipCertificatesValidation
```
 描述

判断是否跳过证书验证。true代表跳过，false代表不跳过，默认值为false。

#### [h2]url

```
const char* Rcp_DnsOverHttps::url
```
 描述

DOH服务器的URL。
