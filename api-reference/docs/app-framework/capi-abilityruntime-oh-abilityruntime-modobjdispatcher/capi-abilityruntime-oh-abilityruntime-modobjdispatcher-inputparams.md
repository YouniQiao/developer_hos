---
title: "OH_AbilityRuntime_ModObjDispatcher_InputParams"
upstream_id: "harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-inputparams"
catalog: "harmonyos-references"
content_hash: "0ad57489f881"
synced_at: "2026-07-28T16:40:45.605059"
---

# OH_AbilityRuntime_ModObjDispatcher_InputParams

```
typedef struct {...} OH_AbilityRuntime_ModObjDispatcher_InputParams
```

#### 概述

定义方法调用的参数结构。rgvarg指向参数变体数组，数组长度由cArgs指定。参数顺序应与方法定义中的参数顺序一致。

起始版本： 26.0.0

相关模块： [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

所在头文件： [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AbilityRuntime_ModObjDispatcher_Variant*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modobjdispatcher-variant) rgvarg | 参数变体数组。 **起始版本：** 26.0.0 |
| uint32_t cArgs | 参数数量。 **起始版本：** 26.0.0 |
