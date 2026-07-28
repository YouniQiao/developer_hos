---
title: "ARKUI_TextPickerRangeContent"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-textpickerrangecontent"
catalog: "harmonyos-references"
content_hash: "86a6fcb524ec"
synced_at: "2026-07-28T16:49:32.982462"
---

# ARKUI_TextPickerRangeContent

```
typedef struct {...} ARKUI_TextPickerRangeContent
```

#### 概述

定义单列滑动数据选择器支持的图片资源结构体。该结构体用于在TextPicker组件中同时显示图片和文本内容，适用于需要在单列滑动选择器中展示图标和文本组合的场景。支持自定义图标路径和文本内容，每项可设置独立的图标和文本或仅设置其中之一，帮助开发者实现灵活的图文选择器配置。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [picker.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* icon | 图标路径。以\0结尾的C字符串。可为NULL。未通过API设置时，字段保持默认值nullptr；通过[OH_ArkUI_TextPickerRangeContentArray_SetIconAtIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#oh_arkui_textpickerrangecontentarray_seticonatindex)设置为nullptr时不生效（API会忽略此设置）。空字符串""合法，表示不显示图标。具体路径用于显示自定义图标（当需要图标提示时选择），空字符串用于明确不显示图标（当仅显示文本时选择），NULL为默认值（应通过Set方法设置为具体值或空字符串，不建议保留NULL）。路径格式为应用内资源路径，例如"/common/hello.png"，与ArkTS [TextPickerRangeContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textpicker#textpickerrangecontent10对象说明)一致；亦支持URI。图片格式未做专门限制，通过ImageSourceInfo加载，与[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)组件支持的格式一致（如png、jpg、webp等）。显示尺寸固定为24vp × 24vp，不可通过本结构体配置。源码中未规定文件大小上限。 |
| const char* text | 文本内容。以\0结尾的C字符串。可为NULL，默认为nullptr；通过[OH_ArkUI_TextPickerRangeContentArray_SetTextAtIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#oh_arkui_textpickerrangecontentarray_settextatindex)传入nullptr时不生效。空字符串""合法，表示不显示文本。具体文本内容用于显示提示信息（当需要文本说明时选择），空字符串用于明确不显示文本（当仅显示图标时选择），NULL为默认值（应通过Set方法设置为具体值或空字符串，不建议保留NULL）。若未通过Set方法设置，则默认显示为空字符串，与ArkTS文档一致。 |

![](./img/note_3.0-zh-cn.png)

- 每一项至少提供icon、text其中之一，可为仅icon、仅text或两者同时设置。
- 当文本长度大于列宽时，text内容会被截断显示。
- 建议使用[OH_ArkUI_TextPickerRangeContentArray_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#oh_arkui_textpickerrangecontentarray_create)创建数组后，通过[OH_ArkUI_TextPickerRangeContentArray_SetIconAtIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#oh_arkui_textpickerrangecontentarray_seticonatindex)和[OH_ArkUI_TextPickerRangeContentArray_SetTextAtIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#oh_arkui_textpickerrangecontentarray_settextatindex)设置各位置数据，以确保数据结构正确性，不建议手动拼装原始结构体。如果手动拼装结构体或未使用Create方法初始化，可能导致数组对象未正确初始化、内存管理异常或类型不匹配等问题。
- 在[NODE_TEXT_PICKER_OPTION_RANGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-informationselection#node_text_picker_option_range)中配合rangeType为ARKUI_TEXTPICKER_RANGETYPE_RANGE_CONTENT（取值为2）时使用本结构体。
