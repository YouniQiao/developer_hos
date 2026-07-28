---
title: "OH_AbilityRuntime_ModularObjectDispatcher_Vector*"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-vector8h"
catalog: "harmonyos-references"
content_hash: "c047a05f921e"
synced_at: "2026-07-28T16:40:46.248290"
---

# OH_AbilityRuntime_ModularObjectDispatcher_Vector*

```
typedef struct OH_AbilityRuntime_ModularObjectDispatcher_Vector* OH_AbilityRuntime_ModObjDispatcher_VectorHandle
```

#### 概述

向量句柄。

该句柄指向一个动态大小的有序元素集合，所有元素类型相同，支持添加元素、按索引获取元素、查询向量大小和清空操作。

可通过[OH_AbilityRuntime_ModObjDispatcher_VectorCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_vectorcreate)创建，使用完毕后需通过[OH_AbilityRuntime_ModObjDispatcher_VectorRelease](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_vectorrelease)释放。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)
