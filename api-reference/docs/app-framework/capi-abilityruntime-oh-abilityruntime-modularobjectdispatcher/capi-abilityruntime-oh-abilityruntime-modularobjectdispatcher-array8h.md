---
title: "OH_AbilityRuntime_ModularObjectDispatcher_Array*"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-array8h"
catalog: "harmonyos-references"
content_hash: "e9df4765dc09"
synced_at: "2026-07-28T16:40:45.881205"
---

# OH_AbilityRuntime_ModularObjectDispatcher_Array*

```
typedef struct OH_AbilityRuntime_ModularObjectDispatcher_Array* OH_AbilityRuntime_ModObjDispatcher_ArrayHandle
```

#### 概述

数组句柄。

该句柄指向一个固定大小的有序元素集合，所有元素类型相同，支持按索引设置获取元素和查询数组大小。

可通过[OH_AbilityRuntime_ModObjDispatcher_ArrayCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_arraycreate)创建，使用完毕后需通过[OH_AbilityRuntime_ModObjDispatcher_ArrayRelease](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_arrayrelease)释放。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)
