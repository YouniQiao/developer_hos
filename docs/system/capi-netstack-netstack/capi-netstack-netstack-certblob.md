---
title: "NetStack_CertBlob"
upstream_id: "harmonyos-references/capi-netstack-netstack-certblob"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.500406"
---

# NetStack_CertBlob

```
struct NetStack_CertBlob {...}
```

#### 概述

证书数据结构体。

起始版本： 11

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_ssl_c_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| enum [NetStack_CertType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h#netstack_certtype) type | 证书类型。 |
| uint32_t size | 证书内容长度。 |
| uint8_t *data | 证书内容。 |
