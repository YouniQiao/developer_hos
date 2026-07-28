---
title: "net_ethernet.h"
upstream_id: "harmonyos-references/capi-net-ethernet-h"
catalog: "harmonyos-references"
content_hash: "964e67884bbb"
synced_at: "2026-07-28T16:50:44.841337"
---

# net_ethernet.h

#### 概述

为以太网网卡模块提供C接口。

引用文件： <network/net_ethernet/net_ethernet.h>

库： libnet_ethernet.so

系统能力： SystemCapability.Communication.NetManager.Ethernet

起始版本： 26.0.0

相关模块： [NetEthernet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [int32_t OH_Ethernet_GetMacAddress(Ethernet_MacAddrInfoList *macAddrList)](#oh_ethernet_getmacaddress) | 获取以太网网卡MAC地址列表。 |
| [int32_t OH_Ethernet_GetNetAddress(Ethernet_NetAddrList *netAddrList)](#oh_ethernet_getnetaddress) | 获取以太网网卡IP地址列表。 |

#### 函数说明

#### [h2]OH_Ethernet_GetMacAddress()

```
int32_t OH_Ethernet_GetMacAddress(Ethernet_MacAddrInfoList *macAddrList)
```
 描述

获取以太网网卡MAC地址列表。

系统能力： SystemCapability.Communication.NetManager.Ethernet

需要权限： ohos.permission.GET_ETHERNET_LOCAL_MAC

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [Ethernet_MacAddrInfoList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-macaddrinfolist) *macAddrList | 以太网网卡MAC地址列表。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 0 - 成功。 201 - 缺少权限。 2200001 - 参数错误。 2200002 - 无法连接到服务。 2201005 - 设备信息不存在。 |

#### [h2]OH_Ethernet_GetNetAddress()

```
int32_t OH_Ethernet_GetNetAddress(Ethernet_NetAddrList *netAddrList)
```
 描述

获取以太网网卡IP地址列表。

系统能力： SystemCapability.Communication.NetManager.Ethernet

需要权限： ohos.permission.GET_NETWORK_INFO

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [Ethernet_NetAddrList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netethernet-ethernet-netaddrlist) *netAddrList | 以太网网卡IP地址列表。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 0 - 成功。 201 - 缺少权限。 2200001 - 参数错误。 2200002 - 无法连接到服务。 2201005 - 设备信息不存在。 |
