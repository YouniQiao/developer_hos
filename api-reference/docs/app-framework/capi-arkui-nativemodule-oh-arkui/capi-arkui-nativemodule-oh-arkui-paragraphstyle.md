---
title: "OH_ArkUI_ParagraphStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle"
catalog: "harmonyos-references"
content_hash: "c213fd99b93a"
synced_at: "2026-08-29T18:15:50.505618"
---

# OH_ArkUI_ParagraphStyle

```
typedef struct OH_ArkUI_ParagraphStyle OH_ArkUI_ParagraphStyle
```

#### 概述

定义段落样式，用于在构建富文本段落时统一设置文本对齐、换行、截断等排版行为，适用于需要对段落进行精细化排版控制的场景，例如在富文本编辑器中设置段落对齐方式、在新闻阅读应用中控制长文本的换行与截断显示等。

调用[OH_ArkUI_ParagraphStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_create)接口创建对应的段落样式对象。

调用[OH_ArkUI_ParagraphStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_destroy)接口销毁段落样式对象。

对象创建后，调用OH_ArkUI_ParagraphStyle_SetXXX系列接口设置具体样式。例如，调用[OH_ArkUI_ParagraphStyle_SetTextAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_settextalign)设置文本对齐方式。若创建对象失败（返回空指针）或对象已销毁，调用SetXXX系列接口将不会生效。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
