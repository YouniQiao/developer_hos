---
title: "Rcp_ProxyConfiguration"
upstream_id: "harmonyos-references/_rcp___proxy_configuration"
catalog: "harmonyos-references"
content_hash: "59c23769b44e"
synced_at: "2026-07-09T00:59:35.101433"
---

# Rcp_ProxyConfiguration

#### 概述

代理配置。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp_ProxyType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_proxytype) [proxyType](#proxytype) | 区分请求使用的代理类型。 |
| [Rcp_WebProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___web_proxy) [customProxy](#customproxy) | 自定义代理配置，参见[Rcp_WebProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___web_proxy)。 |

#### 结构体成员变量说明

#### [h2]customProxy

```
Rcp_WebProxy Rcp_ProxyConfiguration::customProxy
```
 描述

自定义代理配置，参见[Rcp_WebProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___web_proxy)。

#### [h2]proxyType

```
Rcp_ProxyType Rcp_ProxyConfiguration::proxyType
```
 描述

区分请求使用的代理类型。
