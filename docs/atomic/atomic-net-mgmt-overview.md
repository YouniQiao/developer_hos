---
title: "网络管理开发概述"
original_url: /docs/dev/atomic-dev/atomic-network-development/atomic-net-mgmt-overview
format: md
upstream_id: dev/atomic-dev/atomic-network-development/atomic-net-mgmt-overview
last_sync: 2026-06-07
sync_hash: 05c4ca6f
---
网络管理模块主要提供以下功能：

* [HTTP数据请求](/docs/dev/atomic-dev/atomic-network-development/atomic-http-request)：通过HTTP发起一个数据请求。
* [WebSocket连接](/docs/dev/atomic-dev/atomic-network-development/atomic-websocket-connection)：使用WebSocket建立服务器与客户端的双向连接。
* [网络连接管理](/docs/dev/atomic-dev/atomic-network-development/atomic-net-connection-manager)：网络连接管理提供管理网络一些基础能力，包括Wi-Fi/蜂窝/Ethernet等多网络连接优先级管理、网络质量评估、订阅默认/指定网络连接状态变化、查询网络连接信息、DNS解析等功能。
* [MDNS管理](/docs/dev/atomic-dev/atomic-network-development/atomic-net-mdns)：MDNS即多播DNS（Multicast DNS），提供局域网内的本地服务添加、移除、发现、解析等能力。

## 约束与限制

使用网络管理模块的相关功能时，需要请求相应的权限。

在申请权限前，请保证符合[权限使用的基本原则](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[配置文件权限声明指导文档](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)声明对应权限。

| 权限名 | 说明 |
| --- | --- |
| ohos.permission.GET\_NETWORK\_INFO | 获取网络连接信息。 |
| ohos.permission.INTERNET | 允许程序打开网络套接字，进行网络连接。 |
