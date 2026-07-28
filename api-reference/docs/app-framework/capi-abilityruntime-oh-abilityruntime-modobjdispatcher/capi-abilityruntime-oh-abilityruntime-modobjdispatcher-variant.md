---
title: "OH_AbilityRuntime_ModObjDispatcher_Variant"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-variant"
catalog: "harmonyos-references"
content_hash: "a25921c33bed"
synced_at: "2026-07-28T16:40:45.779488"
---

# OH_AbilityRuntime_ModObjDispatcher_Variant

```
typedef struct {...} OH_AbilityRuntime_ModObjDispatcher_Variant
```

#### 概述

定义使用联合体加类型标签的变体结构，通过类型标签区分实际数据类型，用于在参数传递和返回值接收中安全传递多种类型的值。

变体值由vt字段决定实际存储的数据类型和联合体中有效的成员。

当变体持有堆分配资源（如字符串、容器句柄）时，需调用[OH_AbilityRuntime_ModObjDispatcher_VariantClear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_variantclear)释放。

简单类型（布尔、整数、浮点数）不持有堆资源，无需调用VariantClear释放。

![](./img/note_3.0-zh-cn.png) 禁止对变体的浅拷贝调用VariantClear。如果执行了 Variant v2 = v1，只能清理其中一个。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ModObjDispatcher_ValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_valuetype) vt | 变体类型标签，决定联合体中有效的成员。 **起始版本：** 26.0.0 |
| uint64_t reserved1 | 保留字段1。预留空间供后续版本扩展使用，调用方应将其初始化为0，且不应读取或修改。 **起始版本：** 26.0.0 |
| uint64_t reserved2 | 保留字段2。预留空间供后续版本扩展使用，调用方应将其初始化为0，且不应读取或修改。 **起始版本：** 26.0.0 |
| uint64_t reserved3 | 保留字段3。预留空间供后续版本扩展使用，调用方应将其初始化为0，且不应读取或修改。 **起始版本：** 26.0.0 |
| union { void* pvoidVal; bool boolVal; int8_t i8Val; int16_t i16Val; int32_t i32Val; int64_t i64Val; uint8_t u8Val; uint16_t u16Val; uint32_t u32Val; uint64_t u64Val; float f32Val; double f64Val; int32_t enumVal; char* bstrVal; [OH_AbilityRuntime_ModObjDispatcher_ArrayHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-array8h) parrayVal; [OH_AbilityRuntime_ModObjDispatcher_VectorHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-vector8h) pvectorVal; [OH_AbilityRuntime_ModObjDispatcher_SetHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-set8h) psetVal; [OH_AbilityRuntime_ModObjDispatcher_MapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-map8h) pmapVal; [OH_AbilityRuntime_ModObjDispatcher_StructHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-struct8h) pstructVal; [OHIPCRemoteProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohipcparcel-ohipcremoteproxy)* premoteProxyVal; [OHIPCRemoteStub](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohipcparcel-ohipcremotestub)* premoteStubVal; } u | 变体值数据联合体。有效的成员由vt决定。 pvoidVal：空值句柄。 boolVal：布尔值。 i8Val：8位有符号整数。 i16Val：16位有符号整数。 i32Val：32位有符号整数。 i64Val：64位有符号整数。 u8Val：8位无符号整数。 u16Val：16位无符号整数。 u32Val：32位无符号整数。 u64Val：64位无符号整数。 f32Val：32位浮点数（单精度）。 f64Val：64位浮点数（双精度）。 enumVal：枚举值，以int32_t形式存储。 bstrVal：UTF-8字符串句柄，指向堆分配的字符串。 parrayVal：数组句柄。 pvectorVal：向量句柄。 psetVal：集合句柄。 pmapVal：映射句柄。 pstructVal：结构体句柄。 premoteProxyVal：远端Proxy对象句柄。 premoteStubVal：远端Stub对象句柄。 **起始版本：** 26.0.0 |
