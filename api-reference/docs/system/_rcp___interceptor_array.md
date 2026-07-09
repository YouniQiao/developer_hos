---
title: "Rcp_InterceptorArray"
upstream_id: "harmonyos-references/_rcp___interceptor_array"
catalog: "harmonyos-references"
content_hash: "935e0f781c18"
synced_at: "2026-07-09T00:59:34.753932"
---

# Rcp_InterceptorArray

#### 概述

异步拦截器数组。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor) * [interceptors](#interceptors) | 异步拦截器数组。 [Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor)[]。 |
| int [size](#size) | 数组大小。 |

#### 结构体成员变量说明

#### [h2]interceptors

```
Rcp_Interceptor* Rcp_InterceptorArray::interceptors
```
 描述

异步拦截器数组。 [Rcp_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___interceptor)[]。

#### [h2]size

```
int Rcp_InterceptorArray::size
```
 描述

数组大小。
