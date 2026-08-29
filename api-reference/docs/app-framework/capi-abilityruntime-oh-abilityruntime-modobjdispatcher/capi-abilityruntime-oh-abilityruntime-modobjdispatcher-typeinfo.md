---
title: "OH_AbilityRuntime_ModObjDispatcher_TypeInfo"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-typeinfo"
catalog: "harmonyos-references"
content_hash: "afe16d89dff3"
synced_at: "2026-08-29T18:12:10.051572"
---

# OH_AbilityRuntime_ModObjDispatcher_TypeInfo

```
typedef struct OH_AbilityRuntime_ModObjDispatcher_TypeInfo {...} OH_AbilityRuntime_ModObjDispatcher_TypeInfo
```

#### 概述

定义参数或返回值的类型信息。

使用带标签的联合体u描述类型信息，通过vt字段决定联合体中哪个成员有效。

- 对于映射（MAP）类型，使用u.mapType.keyType描述键类型，u.mapType.pValueType描述值类型；
- 对于数组（ARRAY）类型，使用u.arrayType.pElementType描述元素类型，u.arrayType.size描述数组的固定大小；
- 对于向量（VECTOR）或集合（SET）类型，使用u.pElementType描述元素类型；
- 对于结构体（STRUCT）、远端通信对象（IPC_REMOTE_PROXY、IPC_REMOTE_STUB）、枚举（ENUM）类型，使用u.idlType描述[IDL类型名称](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/modular-object-extension-ability-taihe#ohidl文件编写规范)。

使用完毕后需调用[OH_AbilityRuntime_ModObjDispatcher_TypeInfoClear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_typeinfoclear)释放内部持有的堆资源。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ModObjDispatcher_ValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_valuetype) vt | 类型标签，决定联合体中哪个成员有效。 **起始版本：** 26.0.0 |
| union { struct { [OH_AbilityRuntime_ModObjDispatcher_ValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_valuetype) keyType; [OH_AbilityRuntime_ModObjDispatcher_TypeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-typeinfo)* pValueType; } mapType; struct { [OH_AbilityRuntime_ModObjDispatcher_TypeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-typeinfo)* pElementType; uint32_t size; } arrayType; [OH_AbilityRuntime_ModObjDispatcher_TypeInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-typeinfo)* pElementType; char* idlType; } u | 类型特定的元数据联合体。有效的成员由vt决定。 mapType：映射类型元数据，当vt为MAP时使用。 mapType.keyType：映射的键类型，仅支持基本类型（BOOL、有符号整数、无符号整数、浮点数、STRING、ENUM），不支持容器类型（ARRAY、VECTOR、SET、MAP）和复杂类型（STRUCT、IPC_REMOTE_PROXY、IPC_REMOTE_STUB）。 mapType.pValueType：值类型描述符的句柄，需调用[OH_AbilityRuntime_ModObjDispatcher_TypeInfoClear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_typeinfoclear)释放。 arrayType：数组类型元数据，当vt为ARRAY时使用。 arrayType.pElementType：元素类型描述符的句柄，需调用[OH_AbilityRuntime_ModObjDispatcher_TypeInfoClear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_typeinfoclear)释放。 arrayType.size：数组的固定大小。 pElementType：元素类型描述符的句柄，当vt为VECTOR或SET时使用，需调用[OH_AbilityRuntime_ModObjDispatcher_TypeInfoClear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_typeinfoclear)释放。 idlType：[IDL类型名称](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/modular-object-extension-ability-taihe#ohidl文件编写规范)字符串，当vt为STRUCT、IPC_REMOTE_PROXY、IPC_REMOTE_STUB、ENUM时使用，需调用[OH_AbilityRuntime_ModObjDispatcher_TypeInfoClear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_typeinfoclear)释放。 **起始版本：** 26.0.0 |
