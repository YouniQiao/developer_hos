---
title: "OH_AbilityRuntime_ModularObjectDispatcher_TypeDescriptor*"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-typedescriptor8h"
catalog: "harmonyos-references"
content_hash: "a9afb064df79"
synced_at: "2026-07-28T16:40:46.184672"
---

# OH_AbilityRuntime_ModularObjectDispatcher_TypeDescriptor*

```
typedef struct OH_AbilityRuntime_ModularObjectDispatcher_TypeDescriptor* OH_AbilityRuntime_ModObjDispatcher_TypeDescriptorHandle
```

#### 概述

定义ModularObject分发器的类型描述符句柄。

该句柄指向类型库元数据的访问接口，可用于查询远端服务定义的接口、方法、枚举和结构体等信息。

可通过[OH_AbilityRuntime_ModObjDispatcher_GetTypeDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_gettypedescriptor)获取，使用完毕后需通过[OH_AbilityRuntime_TypeDescriptor_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_typedescriptor_release)释放。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)
