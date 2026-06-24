---
title: "Rcp_Timeout"
upstream_id: "harmonyos-references/_rcp___timeout"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:02.173798"
---

# Rcp_Timeout

#### 概述

请求的超时配置。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [connectMs](#connectms) | 连接超时时间。默认值为60000毫秒。 |
| uint32_t [transferMs](#transferms) | 传输超时时间。默认值为60000毫秒。 |

#### 结构体成员变量说明

#### [h2]connectMs

```
uint32_t Rcp_Timeout::connectMs
```
 描述

连接超时时间。默认值为60000毫秒。

#### [h2]transferMs

```
uint32_t Rcp_Timeout::transferMs
```
 描述

传输超时时间。默认值为60000毫秒。
