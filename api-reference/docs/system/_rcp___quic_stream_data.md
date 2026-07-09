---
title: "Rcp_QuicStreamData"
upstream_id: "harmonyos-references/_rcp___quic_stream_data"
catalog: "harmonyos-references"
content_hash: "41d54a0e70c1"
synced_at: "2026-07-09T00:59:36.525475"
---

# Rcp_QuicStreamData

#### 概述

quic连接中用于接收流式数据的存储结构。

起始版本： 26.0.0

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp_quic.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_quic_h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec) *[iov](#iov) | 指向[Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec)结构体数组的指针。 |
| uint32_t [iovLen](#iovlen) | [Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec)结构体数组的长度。 |
| bool [fin](#fin) | 标记是否为流式传输的最后数据。true表示是流式传输的最后数据，false表示不是流式传输的最后数据。 |

#### 结构体成员变量说明

#### [h2]iov

```
Rcp_QuicIoVec* Rcp_QuicStreamData::iov
```
 描述

指向[Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec)结构体数组的指针。

#### [h2]iovLen

```
uint32_t Rcp_QuicStreamData::iovLen
```
 描述

[Rcp_QuicIoVec](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___quic_io_vec)结构体数组的长度。

#### [h2]fin

```
bool Rcp_QuicStreamData::fin
```
 描述

标记是否为流式传输的最后数据。true表示是流式传输的最后数据，false表示不是流式传输的最后数据。
