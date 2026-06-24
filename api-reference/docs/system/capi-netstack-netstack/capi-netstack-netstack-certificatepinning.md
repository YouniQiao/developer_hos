---
title: "NetStack_CertificatePinning"
upstream_id: "harmonyos-references/capi-netstack-netstack-certificatepinning"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.529808"
---

# NetStack_CertificatePinning

```
typedef struct NetStack_CertificatePinning {...} NetStack_CertificatePinning
```

#### 概述

定义证书锁定信息。

起始版本： 12

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_ssl_c_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [NetStack_CertificatePinningKind](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h#netstack_certificatepinningkind) kind | 证书锁定类型。 |
| [NetStack_HashAlgorithm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h#netstack_hashalgorithm) hashAlgorithm | 哈希算法。 |
| char *publicKeyHash | 哈希值。 |
