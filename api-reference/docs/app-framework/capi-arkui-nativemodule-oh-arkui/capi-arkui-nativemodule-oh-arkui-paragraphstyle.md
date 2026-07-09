---
title: "OH_ArkUI_ParagraphStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle"
catalog: "harmonyos-references"
content_hash: "6f20e0e82bca"
synced_at: "2026-07-09T00:58:45.039837"
---

# OH_ArkUI_ParagraphStyle

```
typedef struct OH_ArkUI_ParagraphStyle OH_ArkUI_ParagraphStyle
```

#### 概述

定义段落样式。

可以通过[OH_ArkUI_ParagraphStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_create)接口创建对应的段落样式对象。

可以通过[OH_ArkUI_ParagraphStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_destroy)接口销毁段落样式对象。

对象创建后通过OH_ArkUI_ParagraphStyle_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_ParagraphStyle_SetTextAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_settextalign)设置文本对齐方式。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
