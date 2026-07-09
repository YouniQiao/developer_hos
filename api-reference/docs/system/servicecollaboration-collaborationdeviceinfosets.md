---
title: "ServiceCollaboration_CollaborationDeviceInfoSets"
upstream_id: "harmonyos-references/servicecollaboration-collaborationdeviceinfosets"
catalog: "harmonyos-references"
content_hash: "ad0a5b84cd1b"
synced_at: "2026-07-09T00:59:37.214856"
---

# ServiceCollaboration_CollaborationDeviceInfoSets

#### 概述

通过[HMS_ServiceCollaboration_GetCollaborationDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_getcollaborationdeviceinfos)获取的对端设备信息对象集合。

起始版本： 5.0.0(12)

相关模块： [ServiceCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module)

所在头文件： [service_collaboration_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [size](#size) | 对端设备信息对象集合的大小。 |
| [ServiceCollaboration_CollaborationDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdeviceinfo) * [deviceInfoSets](#deviceinfosets) | 对端设备信息对象集合。 |

#### 结构体成员变量说明

#### [h2]deviceInfoSets

```
ServiceCollaboration_CollaborationDeviceInfo* ServiceCollaboration_CollaborationDeviceInfoSets::deviceInfoSets
```
 描述

对端设备信息对象集合。

#### [h2]size

```
uint32_t ServiceCollaboration_CollaborationDeviceInfoSets::size
```
 描述

对端设备信息对象集合的大小。
