---
title: "ContinuationExtraParams"
upstream_id: "harmonyos-references/js-apis-continuation-continuationextraparams"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:48.957311"
---

# ContinuationExtraParams

流转管理入口中设备选择模块所需的过滤参数，可以作为[startContinuationDeviceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-continuation-continuationmanager#continuationmanagerstartcontinuationdevicemanagerdeprecated)的入参。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 8开始支持，从API version 22开始废弃，建议使用[分布式设备管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributeddevicemanager)替代。

本模块接口仅可在Stage模型下使用。

#### ContinuationExtraParams(deprecated)

表示流转管理入口中设备选择模块所需的过滤参数。

![](./img/note_3.0-zh-cn.png) 从API version 22开始废弃，建议使用[devicebasicinfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributeddevicemanager#devicebasicinfo)代替。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束：此接口仅可在Stage模型下使用。

系统能力：以下各项对应的系统能力均为SystemCapability.Ability.DistributedAbilityManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| deviceType | Array | 否 | 是 | 表示设备类型。 |
| targetBundle | string | 否 | 是 | 表示目标Bundle名称。 |
| description | string | 否 | 是 | 表示设备过滤的描述。 |
| filter | any | 否 | 是 | 表示设备过滤的参数。 |
| continuationMode | [continuationManager.ContinuationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-continuation-continuationmanager#continuationmodedeprecated) | 否 | 是 | 表示协同的模式。 |
| authInfo | Record | 否 | 是 | 表示认证的信息。 |
