---
title: "Rcp_InfoToCollect"
upstream_id: "harmonyos-references/_rcp___info_to_collect"
catalog: "harmonyos-references"
content_hash: "c2d19e1270e1"
synced_at: "2026-07-09T00:59:34.558026"
---

# Rcp_InfoToCollect

#### 概述

指定要收集的请求处理事件。可以通过响应对象检查收集的事件。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool [textual](#textual) | 是否收集文本信息事件。true表示收集文本信息事件，false表示不收集文本信息事件。默认值为false。 |
| bool [incomingHeader](#incomingheader) | 是否收集传入的header信息事件。true表示收集传入的header信息事件，false表示不收集传入的header信息事件。默认值为false。 |
| bool [outgoingHeader](#outgoingheader) | 是否收集传出的header信息事件。true表示收集传出的header信息事件，false表示不收集传出的header信息事件。默认值为false。 |
| bool [incomingData](#incomingdata) | 是否收集传入的数据信息事件。true表示收集传入的数据信息事件，false表示不收集传入的数据信息事件。默认值为false。 |
| bool [outgoingData](#outgoingdata) | 是否收集传出的数据信息事件。true表示收集传出的数据信息事件，false表示不收集传出的数据信息事件。默认值为false。 |
| bool [incomingSslData](#incomingssldata) | 是否收集传入的SSL/TLS数据信息事件。true表示收集传入的SSL/TLS数据信息事件，false表示不收集传入的SSL/TLS数据信息事件。默认值为false。 |
| bool [outgoingSslData](#outgoingssldata) | 是否收集传出的SSL/TLS数据信息事件。true表示收集传出的SSL/TLS数据信息事件，false表示不收集传出的SSL/TLS数据信息事件。默认值为false。 |

#### 结构体成员变量说明

#### [h2]incomingData

```
bool Rcp_InfoToCollect::incomingData
```
 描述

是否收集传入的数据信息事件。true表示收集传入的数据信息事件，false表示不收集传入的数据信息事件。默认值为false。

#### [h2]incomingHeader

```
bool Rcp_InfoToCollect::incomingHeader
```
 描述

是否收集传入HTTP标头事件。true表示收集传入的header信息事件，false表示不收集传入的header信息事件。默认值为false。

#### [h2]incomingSslData

```
bool Rcp_InfoToCollect::incomingSslData
```
 描述

是否收集传入的SSL/TLS数据信息事件。true表示收集传入的SSL/TLS数据信息事件，false表示不收集传入的SSL/TLS数据信息事件。默认值为false。

#### [h2]outgoingData

```
bool Rcp_InfoToCollect::outgoingData
```
 描述

是否收集传出的数据信息事件。true表示收集传出的数据信息事件，false表示不收集传出的数据信息事件。默认值为false。

#### [h2]outgoingHeader

```
bool Rcp_InfoToCollect::outgoingHeader
```
 描述

是否收集传出的header信息事件。true表示收集传出的header信息事件，false表示不收集传出的header信息事件。默认值为false。

#### [h2]outgoingSslData

```
bool Rcp_InfoToCollect::outgoingSslData
```
 描述

是否收集传出的SSL/TLS数据信息事件。true表示收集传出的SSL/TLS数据信息事件，false表示不收集传出的SSL/TLS数据信息事件。默认值为false。

#### [h2]textual

```
bool Rcp_InfoToCollect::textual
```
 描述

是否收集文本信息事件。true表示收集文本信息事件，false表示不收集文本信息事件。默认值为false。
