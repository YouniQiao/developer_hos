---
title: "OH_ArkUI_CustomSpan"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan"
catalog: "harmonyos-references"
content_hash: "ab9128168fc5"
synced_at: "2026-07-09T00:58:44.878957"
---

# OH_ArkUI_CustomSpan

```
typedef struct OH_ArkUI_CustomSpan OH_ArkUI_CustomSpan
```

#### 概述

定义自定义绘制Span。

可以通过[OH_ArkUI_CustomSpan_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_create)接口创建对应的自定义绘制Span对象。

可以通过[OH_ArkUI_CustomSpan_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_destroy)接口销毁自定义绘制Span对象。

对象创建后通过[OH_ArkUI_CustomSpan_RegisterOnMeasureCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_registeronmeasurecallback)和[OH_ArkUI_CustomSpan_RegisterOnDrawCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_registerondrawcallback)接口分别注册测量和绘制回调函数。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
