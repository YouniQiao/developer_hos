---
title: "OH_AbilityRuntime_ModularObjectDispatcher*"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher8h"
catalog: "harmonyos-references"
content_hash: "d1f6f7e1045b"
synced_at: "2026-07-28T16:40:45.839781"
---

# OH_AbilityRuntime_ModularObjectDispatcher*

```
typedef struct OH_AbilityRuntime_ModularObjectDispatcher* OH_AbilityRuntime_ModObjDispatcherHandle
```

#### 概述

ModularObject分发器的句柄。

该句柄指向一个ModularObject分发器实例，可通过[OH_AbilityRuntime_ModObjDispatcher_CreateMainServiceInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_createmainserviceinstance)或[OH_AbilityRuntime_ModObjDispatcher_CreateSubInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_createsubinstance)创建，使用完毕后需通过[OH_AbilityRuntime_ModObjDispatcher_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_release)释放。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)
