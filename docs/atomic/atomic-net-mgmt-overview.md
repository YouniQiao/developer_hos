---
title: "网络管理开发概述"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-net-mgmt-overview
format: md
---


网络管理模块主要提供以下功能：

* [HTTP数据请求](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-http-request)：通过HTTP发起一个数据请求。
* [WebSocket连接](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-websocket-connection)：使用WebSocket建立服务器与客户端的双向连接。
* [网络连接管理](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-net-connection-manager)：网络连接管理提供管理网络一些基础能力，包括Wi-Fi/蜂窝/Ethernet等多网络连接优先级管理、网络质量评估、订阅默认/指定网络连接状态变化、查询网络连接信息、DNS解析等功能。
* [MDNS管理](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-net-mdns)：MDNS即多播DNS（Multicast DNS），提供局域网内的本地服务添加、移除、发现、解析等能力。

## 约束与限制

使用网络管理模块的相关功能时，需要请求相应的权限。

在申请权限前，请保证符合[权限使用的基本原则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[配置文件权限声明指导文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)声明对应权限。

| 权限名 | 说明 |
| --- | --- |
| ohos.permission.GET\_NETWORK\_INFO | 获取网络连接信息。 |
| ohos.permission.INTERNET | 允许程序打开网络套接字，进行网络连接。 |
