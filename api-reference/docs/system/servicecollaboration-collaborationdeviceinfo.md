---
title: "ServiceCollaboration_CollaborationDeviceInfo"
upstream_id: "harmonyos-references/servicecollaboration-collaborationdeviceinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:03.689227"
---

# ServiceCollaboration_CollaborationDeviceInfo

#### 概述

跨设备互通获取的设备信息对象，包含设备的基本信息和能力类型。

起始版本： 5.0.0(12)

相关模块： [ServiceCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module)

所在头文件： [service_collaboration_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [deviceType](#devicetype) | 对端设备类型。只有Phone或者Tablet。Phone设备类型的值为0x14，Tablet设备类型的值为0x17。 |
| char [deviceNetworkId](#devicenetworkid) [[COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdeviceinfo_devicenetworkid_maxlength)] | 对端设备network Id。 |
| char [deviceName](#devicename) [[COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdeviceinfo_devicename_maxlength)] | 对端设备名。 |
| uint32_t [filterNum](#filternum) | 对端设备支持的能力类型列表的大小。 |
| [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype-1) * [serviceFilterTypes](#servicefiltertypes) | 对端设备支持的能力类型列表。 |

#### 结构体成员变量说明

#### [h2]deviceName

```
char ServiceCollaboration_CollaborationDeviceInfo::deviceName[COLLABORATIONDEVICEINFO_DEVICENAME_MAXLENGTH]
```
 描述

对端设备名。

#### [h2]deviceNetworkId

```
char ServiceCollaboration_CollaborationDeviceInfo::deviceNetworkId[COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH]
```
 描述

对端设备network Id。

#### [h2]deviceType

```
uint32_t ServiceCollaboration_CollaborationDeviceInfo::deviceType
```
 描述

对端设备类型。只有Phone或者Tablet。Phone设备类型的值为0x14，Tablet设备类型的值为0x17。

#### [h2]filterNum

```
uint32_t ServiceCollaboration_CollaborationDeviceInfo::filterNum
```
 描述

对端设备支持的能力类型列表的大小。

#### [h2]serviceFilterTypes

```
ServiceCollaborationFilterType* ServiceCollaboration_CollaborationDeviceInfo::serviceFilterTypes
```
 描述

对端设备支持的能力类型列表。
