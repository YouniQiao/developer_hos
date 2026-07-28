---
title: "connect_options.h"
upstream_id: "harmonyos-references/capi-connect-options-h"
catalog: "harmonyos-references"
content_hash: "8f590651e275"
synced_at: "2026-07-28T16:40:42.974589"
---

# connect_options.h

#### 概述

声明ExtensionAbility的连接选项，包括连接成功、断开连接和连接失败的回调接口。

引用文件： <AbilityKit/ability_runtime/connect_options.h>

库： libability_runtime.so

系统能力： SystemCapability.Ability.AbilityRuntime.Core

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions) | OH_AbilityRuntime_ConnectOptions | 定义OH_AbilityRuntime_ConnectOptions结构体类型。 |

#### [h2]函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void (*OH_AbilityRuntime_ConnectOptions_OnConnectCallback)(OH_AbilityRuntime_ConnectOptions *connectOptions, AbilityBase_Element *element, OHIPCRemoteProxy *proxy)](#oh_abilityruntime_connectoptions_onconnectcallback) | OH_AbilityRuntime_ConnectOptions_OnConnectCallback | 连接成功时触发的回调函数。 |
| [typedef void (*OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback)(OH_AbilityRuntime_ConnectOptions *connectOptions, AbilityBase_Element *element)](#oh_abilityruntime_connectoptions_ondisconnectcallback) | OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback | 断开连接时触发的回调函数。 |
| [typedef void (*OH_AbilityRuntime_ConnectOptions_OnFailedCallback)(OH_AbilityRuntime_ConnectOptions *connectOptions, AbilityRuntime_ErrorCode code)](#oh_abilityruntime_connectoptions_onfailedcallback) | OH_AbilityRuntime_ConnectOptions_OnFailedCallback | 连接失败时触发的回调函数。 |
| [OH_AbilityRuntime_ConnectOptions* OH_AbilityRuntime_CreateConnectOptions()](#oh_abilityruntime_createconnectoptions) | - | 创建一个ConnectOptions对象。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_DestroyConnectOptions(OH_AbilityRuntime_ConnectOptions *connectOptions)](#oh_abilityruntime_destroyconnectoptions) | - | 销毁指定的ConnectOptions对象。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ConnectOptions_SetOnConnectCallback(OH_AbilityRuntime_ConnectOptions *connectOptions, OH_AbilityRuntime_ConnectOptions_OnConnectCallback onConnectCallback)](#oh_abilityruntime_connectoptions_setonconnectcallback) | - | 在[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)中设置连接成功回调[OH_AbilityRuntime_ConnectOptions_OnConnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onconnectcallback)。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ConnectOptions_SetOnDisconnectCallback(OH_AbilityRuntime_ConnectOptions *connectOptions, OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback onDisconnectCallback)](#oh_abilityruntime_connectoptions_setondisconnectcallback) | - | 在[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)中设置断开连接回调[OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_ondisconnectcallback)。 |
| [AbilityRuntime_ErrorCode OH_AbilityRuntime_ConnectOptions_SetOnFailedCallback(OH_AbilityRuntime_ConnectOptions *connectOptions, OH_AbilityRuntime_ConnectOptions_OnFailedCallback onFailedCallback)](#oh_abilityruntime_connectoptions_setonfailedcallback) | - | 在[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)中设置连接失败回调[OH_AbilityRuntime_ConnectOptions_OnFailedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onfailedcallback)。 |

#### 函数说明

#### [h2]OH_AbilityRuntime_ConnectOptions_OnConnectCallback()

```
typedef void (*OH_AbilityRuntime_ConnectOptions_OnConnectCallback)(OH_AbilityRuntime_ConnectOptions *connectOptions, AbilityBase_Element *element, OHIPCRemoteProxy *proxy)
```
 描述

连接成功时触发的回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ConnectOptions *connectOptions | 指向[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)实例的指针。 |
| AbilityBase_Element *element | 表示ExtensionAbility的组件名称。 |
| OHIPCRemoteProxy *proxy | 表示远端对象实例。 |

#### [h2]OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback()

```
typedef void (*OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback)(OH_AbilityRuntime_ConnectOptions *connectOptions, AbilityBase_Element *element)
```
 描述

断开连接时触发的回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ConnectOptions *connectOptions | 指向[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)实例的指针。 |
| AbilityBase_Element *element | 表示ExtensionAbility的组件名称。 |

#### [h2]OH_AbilityRuntime_ConnectOptions_OnFailedCallback()

```
typedef void (*OH_AbilityRuntime_ConnectOptions_OnFailedCallback)(OH_AbilityRuntime_ConnectOptions *connectOptions, AbilityRuntime_ErrorCode code)
```
 描述

连接失败时触发的回调函数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| OH_AbilityRuntime_ConnectOptions *connectOptions | 指向[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)实例的指针。 |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) code | 表示失败的错误码。 |

#### [h2]OH_AbilityRuntime_CreateConnectOptions()

```
OH_AbilityRuntime_ConnectOptions* OH_AbilityRuntime_CreateConnectOptions()
```
 描述

创建一个ConnectOptions对象。

起始版本： 26.0.0

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_AbilityRuntime_ConnectOptions*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions) | 返回新创建的OH_AbilityRuntime_ConnectOptions对象。 调用方需调用[OH_AbilityRuntime_DestroyConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_destroyconnectoptions)销毁返回的对象，避免内存泄漏。 |

#### [h2]OH_AbilityRuntime_DestroyConnectOptions()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_DestroyConnectOptions(OH_AbilityRuntime_ConnectOptions *connectOptions)
```
 描述

销毁指定的ConnectOptions对象。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions) *connectOptions | 待销毁的ConnectOptions对象。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 操作成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) connectOptions无效。 |

#### [h2]OH_AbilityRuntime_ConnectOptions_SetOnConnectCallback()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ConnectOptions_SetOnConnectCallback(OH_AbilityRuntime_ConnectOptions *connectOptions, OH_AbilityRuntime_ConnectOptions_OnConnectCallback onConnectCallback)
```
 描述

在[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)中设置连接成功回调[OH_AbilityRuntime_ConnectOptions_OnConnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onconnectcallback)。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions) *connectOptions | 指向待设置的[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)实例的指针。 |
| [OH_AbilityRuntime_ConnectOptions_OnConnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onconnectcallback) onConnectCallback | 表示待设置的[OH_AbilityRuntime_ConnectOptions_OnConnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onconnectcallback)回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ConnectOptions_SetOnDisconnectCallback()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ConnectOptions_SetOnDisconnectCallback(OH_AbilityRuntime_ConnectOptions *connectOptions, OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback onDisconnectCallback)
```
 描述

在[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)中设置断开连接回调[OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_ondisconnectcallback)。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions) *connectOptions | 指向待设置的[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)实例的指针。 |
| [OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_ondisconnectcallback) onDisconnectCallback | 表示待设置的[OH_AbilityRuntime_ConnectOptions_OnDisconnectCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_ondisconnectcallback)回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |

#### [h2]OH_AbilityRuntime_ConnectOptions_SetOnFailedCallback()

```
AbilityRuntime_ErrorCode OH_AbilityRuntime_ConnectOptions_SetOnFailedCallback(OH_AbilityRuntime_ConnectOptions *connectOptions, OH_AbilityRuntime_ConnectOptions_OnFailedCallback onFailedCallback)
```
 描述

在[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)中设置连接失败回调[OH_AbilityRuntime_ConnectOptions_OnFailedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onfailedcallback)。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions) *connectOptions | 指向待设置的[OH_AbilityRuntime_ConnectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-connectoptions)实例的指针。 |
| [OH_AbilityRuntime_ConnectOptions_OnFailedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onfailedcallback) onFailedCallback | 表示待设置的[OH_AbilityRuntime_ConnectOptions_OnFailedCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-connect-options-h#oh_abilityruntime_connectoptions_onfailedcallback)回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [AbilityRuntime_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) | 返回特定的错误码。 [ABILITY_RUNTIME_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 接口调用成功。 [ABILITY_RUNTIME_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-runtime-common-h#abilityruntime_errorcode) 参数校验失败。 |
