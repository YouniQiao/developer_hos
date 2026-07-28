---
title: "ArkUI_ActiveChildrenInfo"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo"
catalog: "harmonyos-references"
content_hash: "4638e8ee523b"
synced_at: "2026-07-28T16:49:35.806479"
---

# ArkUI_ActiveChildrenInfo

```
typedef struct ArkUI_ActiveChildrenInfo ArkUI_ActiveChildrenInfo
```

#### 概述

定义ArkUI_ActiveChildrenInfo结构体，用于保存内部活跃状态为true的FrameNode子节点信息，支持查询子节点数量和按下标获取子节点。该结构体实例由OH_ArkUI_NodeUtils_GetActiveChildrenInfo生成，使用完毕后必须调用OH_ArkUI_ActiveChildrenInfo_Destroy销毁。

起始版本： 14

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_ArkUI_NodeUtils_GetActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_nodeutils_getactivechildreninfo) | 获取内部活跃状态为true的FrameNode子节点，并生成ArkUI_ActiveChildrenInfo实例。Span不会被计入子节点统计。获取成功后，可查询子节点数量并按下标读取子节点；实例使用完毕后必须调用OH_ArkUI_ActiveChildrenInfo_Destroy销毁。 |
| [OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_activechildreninfo_getnodebyindex) | 获取ArkUI_ActiveChildrenInfo结构体中下标为index的子节点，适用于按下标遍历活跃子节点。 |
| [OH_ArkUI_ActiveChildrenInfo_GetCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_activechildreninfo_getcount) | 获取ArkUI_ActiveChildrenInfo结构体内的子节点数量，适用于遍历活跃子节点前确定数量。 |
| [OH_ArkUI_ActiveChildrenInfo_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#oh_arkui_activechildreninfo_destroy) | 销毁ArkUI_ActiveChildrenInfo实例，释放获取活跃子节点信息时分配的资源。 |
