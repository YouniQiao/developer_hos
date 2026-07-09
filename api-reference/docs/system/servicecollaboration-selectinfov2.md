---
title: "ServiceCollaboration_SelectInfoV2"
upstream_id: "harmonyos-references/servicecollaboration-selectinfov2"
catalog: "harmonyos-references"
content_hash: "ce4d6aac2e25"
synced_at: "2026-07-09T00:59:37.471774"
---

# ServiceCollaboration_SelectInfoV2

#### 概述

使用[HMS_ServiceCollaboration_StartCollaborationV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#hms_servicecollaboration_startcollaborationv2)触发跨设备互通时，被选择的设备信息，支持选择具有图片和视频回传能力的设备。

起始版本： 6.1.0(23)

相关模块： [ServiceCollaboration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module)

所在头文件： [service_collaboration_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ServiceCollaborationFilterType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#servicecollaborationfiltertype) [serviceFilterType](#servicefiltertype) | 开发者期望的设备能力类型。 |
| char [deviceNetworkId](#devicenetworkid) [[COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#collaborationdeviceinfo_devicenetworkid_maxlength)] | 被选择的设备network Id。 |
| uint32_t [maxSize](#maxsize) | 能被选中的最大图片数量。 |
| char uri[[SERVICE_COLLABORATION_URI_MAXLENGTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-capi-module#service_collaboration_uri_maxlength)] | 应用沙箱目录uri路径。 |

#### 结构体成员变量说明

#### [h2]deviceNetworkId

```
char ServiceCollaboration_SelectInfo::deviceNetworkId[COLLABORATIONDEVICEINFO_DEVICENETWORKID_MAXLENGTH]
```
 描述

被选择的设备network Id。

#### [h2]maxSize

```
uint32_t ServiceCollaboration_SelectInfo::maxSize
```
 描述

能被选中的最大图片数量，默认50，取值范围为1到50。

#### [h2]serviceFilterType

```
ServiceCollaborationFilterType ServiceCollaboration_SelectInfo::serviceFilterType
```
 描述

开发者期望的设备能力类型。

#### [h2]uri

```
char ServiceCollaboration_SelectInfo::uri[SERVICE_COLLABORATION_URI_MAXLENGTH]
```
 描述

应用沙箱目录uri路径。
