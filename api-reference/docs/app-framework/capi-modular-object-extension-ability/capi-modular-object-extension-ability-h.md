---
title: "modular_object_extension_ability.h"
upstream_id: "harmonyos-references/capi-modular-object-extension-ability-h"
catalog: "harmonyos-references"
content_hash: "87a70da50545"
synced_at: "2026-07-28T16:40:44.046205"
---

# modular_object_extension_ability.h

#### 概述

声明ModularObjectExtensionAbility实例的接口，包括注册生命周期回调函数和获取上下文等能力。

引用文件： <AbilityKit/ability_runtime/modular_object_extension_ability.h>

库： libability_runtime.so

系统能力： SystemCapability.Ability.AbilityRuntime.Core

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AbilityRuntime_ModularObjectExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance) | OH_AbilityRuntime_ModObjExtensionInstance | 定义OH_AbilityRuntime_ModObjExtensionInstance结构体。 |
| [OH_AbilityRuntime_ModObjExtensionInstance*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjextensioninstance8h) | OH_AbilityRuntime_ModObjExtensionInstanceHandle | 定义指向OH_AbilityRuntime_ModObjExtensionInstance的指针。 |

#### [h2]函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (*OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, AbilityBase_Want *want)](#oh_abilityruntime_modobjextensionability_oncreatefunc) | OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc | ModularObjectExtensionAbility创建时触发的回调函数，用于初始化。 |
| [typedef void (*OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance)](#oh_abilityruntime_modobjextensionability_ondestroyfunc) | OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc | ModularObjectExtensionAbility销毁前触发的回调函数。 |
| [typedef OHIPCRemoteStub* (*OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, AbilityBase_Want *want)](#oh_abilityruntime_modobjextensionability_onconnectfunc) | OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc | ModularObjectExtensionAbility被连接时触发的回调函数。 |
| [typedef void (*OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance)](#oh_abilityruntime_modobjextensionability_ondisconnectfunc) | OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc | 当前ModularObjectExtensionAbility的所有连接都断开时触发的回调函数。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnCreateFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc onCreateFunc)](#oh_abilityruntime_modobjextensionability_registeroncreatefunc) | - | 向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_oncreatefunc)回调函数。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnDestroyFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc onDestroyFunc)](#oh_abilityruntime_modobjextensionability_registerondestroyfunc) | - | 向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_ondestroyfunc)回调函数。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnConnectFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc onConnectFunc)](#oh_abilityruntime_modobjextensionability_registeronconnectfunc) | - | 向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_onconnectfunc)回调函数。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnDisconnectFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc onDisconnectFunc)](#oh_abilityruntime_modobjextensionability_registerondisconnectfunc) | - | 向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_ondisconnectfunc)回调函数。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_GetContextFromInstance(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionContextHandle* context)](#oh_abilityruntime_modobjextensionability_getcontextfrominstance) | - | 从ModularObjectExtensionAbility实例中获取ExtensionAbility上下文。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_GetInstanceFromBase(AbilityRuntime_ExtensionInstanceHandle baseExtensionInstance, OH_AbilityRuntime_ModObjExtensionInstanceHandle* modObjExtensionInstance)](#oh_abilityruntime_modobjextensionability_getinstancefrombase) | - | 从基础ExtensionAbility实例中获取ModularObjectExtensionAbility实例。 |

#### 函数说明

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc()

```
typedef void (*OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, AbilityBase_Want *want)
```
 描述

ModularObjectExtensionAbility创建时触发的回调函数，用于初始化。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| AbilityBase_Want *want | 表示创建ModularObjectExtensionAbility时的Want信息。详细内容参考[AbilityBase_Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilitybase-want)。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc()

```
typedef void (*OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance)
```
 描述

ModularObjectExtensionAbility销毁前触发的回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc()

```
typedef OHIPCRemoteStub* (*OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, AbilityBase_Want *want)
```
 描述

ModularObjectExtensionAbility被连接时触发的回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| AbilityBase_Want *want | 表示创建ModularObjectExtensionAbility时的Want信息。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc()

```
typedef void (*OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc)(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance)
```
 描述

当前ModularObjectExtensionAbility的所有连接都断开时触发的回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnCreateFunc()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnCreateFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc onCreateFunc)
```
 描述

向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_oncreatefunc)回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| [OH_AbilityRuntime_ModObjExtensionAbility_OnCreateFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_oncreatefunc) onCreateFunc | 表示待注册的OnCreate回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnDestroyFunc()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnDestroyFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc onDestroyFunc)
```
 描述

向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_ondestroyfunc)回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| [OH_AbilityRuntime_ModObjExtensionAbility_OnDestroyFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_ondestroyfunc) onDestroyFunc | 表示待注册的OnDestroy回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnConnectFunc()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnConnectFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc onConnectFunc)
```
 描述

向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_onconnectfunc)回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| [OH_AbilityRuntime_ModObjExtensionAbility_OnConnectFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_onconnectfunc) onConnectFunc | 表示待注册的OnConnect回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnDisconnectFunc()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_RegisterOnDisconnectFunc(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc onDisconnectFunc)
```
 描述

向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)注册[OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_ondisconnectfunc)回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| [OH_AbilityRuntime_ModObjExtensionAbility_OnDisconnectFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-extension-ability-h#oh_abilityruntime_modobjextensionability_ondisconnectfunc) onDisconnectFunc | 表示待注册的OnDisconnect回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_GetContextFromInstance()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_GetContextFromInstance(OH_AbilityRuntime_ModObjExtensionInstanceHandle instance, OH_AbilityRuntime_ModObjExtensionContextHandle* context)
```
 描述

从ModularObjectExtensionAbility实例中获取ExtensionAbility上下文。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle instance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)实例的指针。 |
| [OH_AbilityRuntime_ModObjExtensionContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioncontext8h)* context | 指向[OH_AbilityRuntime_ModObjExtensionContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioncontext8h)的指针，用于接收ExtensionAbility上下文。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ModObjExtensionAbility_GetInstanceFromBase()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ModObjExtensionAbility_GetInstanceFromBase(AbilityRuntime_ExtensionInstanceHandle baseExtensionInstance, OH_AbilityRuntime_ModObjExtensionInstanceHandle* modObjExtensionInstance)
```
 描述

从基础ExtensionAbility实例中获取ModularObjectExtensionAbility实例。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| AbilityRuntime_ExtensionInstanceHandle baseExtensionInstance | 指向[AbilityRuntime_ExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-extensioninstance)的指针。 |
| OH_AbilityRuntime_ModObjExtensionInstanceHandle* modObjExtensionInstance | 指向[OH_AbilityRuntime_ModObjExtensionInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectextensioninstance)的指针，用于接收ModularObjectExtensionAbility实例，作为输出参数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 [ABILITY_RUNTIME_ERROR_CODE_INCORRECT_ABILITY_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) ExtensionAbility实例不是ModularObjectExtensionAbility类型。 |
