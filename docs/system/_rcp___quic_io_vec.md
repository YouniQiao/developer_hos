---
title: "Rcp_QuicIoVec"
upstream_id: "harmonyos-references/_rcp___quic_io_vec"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:02.921733"
---

# Rcp_QuicIoVec

#### 概述

用于存储二进制内容的数据结构。

起始版本： 26.0.0

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp_quic.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_quic_h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t *[data](#data) | 指向数据内容的指针。 |
| uint64_t [length](#length) | 数据内容长度。 |

#### 结构体成员变量说明

#### [h2]data

```
uint8_t* Rcp_QuicIoVec::data
```
 描述

指向数据内容的指针。

#### [h2]length

```
uint64_t Rcp_QuicIoVec::length
```
 描述

数据内容长度。
