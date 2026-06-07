---
title: "Network Kit简介"
original_url: /docs/dev/app-dev/system/system-network/network-kit/net-mgmt-overview
format: md
---


Network Kit（网络服务）主要提供以下功能：

* [HTTP数据请求](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/http-request)：通过HTTP发起一个数据请求。
* [WebSocket连接](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/websocket-connection)：使用WebSocket建立服务器与客户端的双向连接。
* [Socket连接](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/socket-connection)：通过Socket进行数据传输。
* [网络连接管理](/docs/dev/app-dev/system/system-network/network-kit/network-kit-network-connecttion/net-connection-manager)：网络连接管理提供管理网络一些基础能力，包括WiFi/蜂窝/Ethernet等多网络连接优先级管理、网络质量评估、订阅默认/指定网络连接状态变化、查询网络连接信息、DNS解析等功能。
* [MDNS管理](/docs/dev/app-dev/system/system-network/network-kit/network-kit-data-transmission/net-mdns)：MDNS即多播DNS（Multicast DNS），提供局域网内的本地服务添加、删除、发现、解析等能力。

## 模拟器支持情况

Network Kit支持模拟器，但与真机存在差异，具体差异如下。

* 通用差异：详情请参见“[模拟器与真机的差异](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-specification#section1227613205203)”。
* 模拟器不支持VPN功能。

## 约束与限制

使用网络管理模块的相关功能时，需要请求相应的权限。

在申请权限前，请保证符合[权限使用的基本原则](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[访问控制-声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)声明对应权限。

| 权限名 | 说明 |
| --- | --- |
| ohos.permission.GET\_NETWORK\_INFO | 获取网络连接信息。 |
| ohos.permission.INTERNET | 允许程序打开网络套接字，进行网络连接。 |
