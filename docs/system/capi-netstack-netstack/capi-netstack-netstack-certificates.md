---
title: "NetStack_Certificates"
upstream_id: "harmonyos-references/capi-netstack-netstack-certificates"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:54.638309"
---

# NetStack_Certificates

```
typedef struct NetStack_Certificates {...} NetStack_Certificates
```

#### 概述

定义证书信息。

起始版本： 12

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_ssl_c_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char **content | 证书的PEM内容。 |
| size_t length | 证书数量。 |
