---
title: "Netstack"
upstream_id: "harmonyos-references/capi-netstack"
catalog: "harmonyos-references"
content_hash: "a8a12d7ae995"
synced_at: "2026-09-09T18:21:37.611677"
---

# Netstack

#### 概述

提供网络相关模块的C接口，包括SSL/TLS证书链校验、WebSocket客户端、HTTP请求和HTTP全局拦截器等功能。

调用范式：以HTTP请求为例，典型调用流程为：创建请求实例→设置请求参数→发起请求→获取响应→销毁实例；WebSocket客户端需按创建实例→连接服务器→收发数据→关闭连接的顺序调用；SSL/TLS证书链校验需在发起网络请求前先加载并校验证书链；HTTP全局拦截器需先注册后使用，并在不再需要时注销。

起始版本： 11

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [net_ssl_c.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-h) | 定义SSL/TLS证书链校验模块C接口数据结构。 |
| [net_ssl_c_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-ssl-c-type-h) | 定义SSL/TLS证书链校验模块的C接口需要的数据结构。 |
| [net_websocket.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-h) | 定义WebSocket客户端模块的接口。 |
| [net_websocket_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-websocket-type-h) | 定义WebSocket客户端模块的C接口需要的数据结构。 |
| [net_http.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-h) | 定义HTTP请求模块的接口。 |
| [net_http_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-type-h) | 定义HTTP请求模块的C接口需要的数据结构。 |
| [http_interceptor.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-interceptor-h) | 定义HTTP全局拦截器模块的接口。 |
| [http_interceptor_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-http-interceptor-type-h) | 定义HTTP全局拦截器模块的C接口需要的数据结构。 |
