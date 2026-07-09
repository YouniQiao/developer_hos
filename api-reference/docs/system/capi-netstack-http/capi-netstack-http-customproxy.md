---
title: "Http_CustomProxy"
upstream_id: "harmonyos-references/capi-netstack-http-customproxy"
catalog: "harmonyos-references"
content_hash: "ac82f3d102cf"
synced_at: "2026-07-09T00:59:30.294675"
---

# Http_CustomProxy

```
typedef struct Http_CustomProxy {...} Http_CustomProxy
```

#### 概述

用户自定义代理配置。

起始版本： 20

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

所在头文件： [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char *host | 代理服务器主机名， 如果没有显式设置端口，端口将默认为1080。 |
| int32_t port | 主机端口。取值范围[0, 65535]。 |
| const char *exclusionLists | 不使用代理的主机名列表，主机名支持域名、IP地址以及通配符形式。 |
