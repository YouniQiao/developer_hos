---
title: "OH_ArkUI_DecorationStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle"
catalog: "harmonyos-references"
content_hash: "a7d4e5fe7975"
synced_at: "2026-08-29T18:15:50.784581"
---

# OH_ArkUI_DecorationStyle

```
typedef struct OH_ArkUI_DecorationStyle OH_ArkUI_DecorationStyle
```

#### 概述

定义文本装饰线样式，支持对文本添加下划线、删除线等装饰线效果，适用于需要自定义文本装饰线外观的场景，可帮助开发者灵活控制文本装饰线的类型、颜色与样式。

调用[OH_ArkUI_DecorationStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_create)接口创建文本装饰线样式对象。

对象创建后，调用OH_ArkUI_DecorationStyle_SetXXX系列接口设置具体样式。例如，调用[OH_ArkUI_DecorationStyle_SetTextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_settextdecorationtype)接口设置装饰线类型。

使用完毕后，调用[OH_ArkUI_DecorationStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_destroy)接口销毁文本装饰线样式对象。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
