---
title: "styled_string.h"
upstream_id: "harmonyos-references/capi-styled-string-h"
catalog: "harmonyos-references"
content_hash: "df174ab8e4f7"
synced_at: "2026-07-09T00:58:38.108628"
---

# styled_string.h

#### 概述

在Native侧定义[ArkUI_NodeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#arkui_nodetype)为ARKUI_NODE_TEXT的组件的文本样式和文本布局管理器。

引用文件： <arkui/styled_string.h>

库： libace_ndk.z.so

系统能力： SystemCapability.ArkUI.ArkUI.Full

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

相关示例： [StyledStringSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/StyledStringSample)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring) | ArkUI_StyledString | 定义文本组件支持的格式化字符串数据对象。 |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle) | OH_ArkUI_SpanStyle | 定义属性字符串样式对象。 可以通过[OH_ArkUI_SpanStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_create)接口创建对应的属性字符串样式对象。 可以通过[OH_ArkUI_SpanStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_destroy)接口销毁属性字符串样式对象。 对象创建后通过[OH_ArkUI_SpanStyle_SetStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_setstart)和[OH_ArkUI_SpanStyle_SetLength](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_setlength)指定样式作用的范围。 对象创建后通过OH_ArkUI_SpanStyle_SetXXXStyle系列接口设置生效的具体样式，例如通过[OH_ArkUI_SpanStyle_SetTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_settextstyle)设置字体样式效果。 |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment) | OH_ArkUI_ImageAttachment | 定义图片样式对象。 可以通过[OH_ArkUI_ImageAttachment_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_create)接口创建对应的图片样式对象。 可以通过[OH_ArkUI_ImageAttachment_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_destroy)接口销毁图片样式对象。 对象创建后通过OH_ArkUI_ImageAttachment_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_ImageAttachment_SetPixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setpixelmap)设置图片源。 |
| [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan) | OH_ArkUI_CustomSpan | 定义自定义绘制Span。 可以通过[OH_ArkUI_CustomSpan_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_create)接口创建对应的自定义绘制Span对象。 可以通过[OH_ArkUI_CustomSpan_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_destroy)接口销毁自定义绘制Span对象。 对象创建后通过[OH_ArkUI_CustomSpan_RegisterOnMeasureCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_registeronmeasurecallback)和[OH_ArkUI_CustomSpan_RegisterOnDrawCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_registerondrawcallback)接口注册绘制回调函数。 |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle) | OH_ArkUI_TextStyle | 定义文本字体样式。 可以通过[OH_ArkUI_TextStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_create)接口创建对应的文本字体样式对象。 可以通过[OH_ArkUI_TextStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_destroy)接口销毁文本字体样式对象。 对象创建后通过OH_ArkUI_TextStyle_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_TextStyle_SetFontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_setfontcolor)设置字体颜色。 |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle) | OH_ArkUI_ParagraphStyle | 定义段落样式。 可以通过[OH_ArkUI_ParagraphStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_create)接口创建对应的段落样式对象。 可以通过[OH_ArkUI_ParagraphStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_destroy)接口销毁段落样式对象。 对象创建后通过OH_ArkUI_ParagraphStyle_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_ParagraphStyle_SetTextAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_settextalign)设置文本对齐方式。 |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle) | OH_ArkUI_GestureStyle | 定义事件手势样式。 可以通过[OH_ArkUI_GestureStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_create)接口创建对应的事件手势样式对象。 可以通过[OH_ArkUI_GestureStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_destroy)接口销毁事件手势样式对象。 对象创建后通过OH_ArkUI_GestureStyle_RegisterOnXXXCallback系列接口注册具体的事件回调，例如通过[OH_ArkUI_GestureStyle_RegisterOnClickCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_registeronclickcallback)注册点击事件回调。 |
| [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle) | OH_ArkUI_TextShadowStyle | 定义文本阴影样式。 可以通过[OH_ArkUI_TextShadowStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_create)接口创建对应的文本阴影样式对象。 可以通过[OH_ArkUI_TextShadowStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_destroy)接口销毁文本阴影样式对象。 对象创建后通过[OH_ArkUI_TextShadowStyle_SetTextShadow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_settextshadow)接口设置生效的具体样式。 |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle) | OH_ArkUI_DecorationStyle | 定义文本装饰线样式。 可以通过[OH_ArkUI_DecorationStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_create)接口创建对应的文本装饰线样式对象。 可以通过[OH_ArkUI_DecorationStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_destroy)接口销毁文本装饰线样式对象。 对象创建后通过OH_ArkUI_DecorationStyle_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_DecorationStyle_SetTextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_settextdecorationtype)设置装饰线类型。 |
| [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle) | OH_ArkUI_BaselineOffsetStyle | 定义基线偏移量样式。 可以通过[OH_ArkUI_BaselineOffsetStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_baselineoffsetstyle_create)接口创建对应的基线偏移量样式对象。 可以通过[OH_ArkUI_BaselineOffsetStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_baselineoffsetstyle_destroy)接口销毁基线偏移量样式对象。 对象创建后通过[OH_ArkUI_BaselineOffsetStyle_SetBaselineOffset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_baselineoffsetstyle_setbaselineoffset)接口设置具体的基线偏移量值。 |
| [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle) | OH_ArkUI_LetterSpacingStyle | 定义字符间距样式。 可以通过[OH_ArkUI_LetterSpacingStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_letterspacingstyle_create)接口创建对应的字符间距样式对象。 可以通过[OH_ArkUI_LetterSpacingStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_letterspacingstyle_destroy)接口销毁字符间距样式对象。 对象创建后通过[OH_ArkUI_LetterSpacingStyle_SetLetterSpacing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_letterspacingstyle_setletterspacing)接口设置具体的字符间距值。 |
| [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle) | OH_ArkUI_LineHeightStyle | 定义行高样式。 可以通过[OH_ArkUI_LineHeightStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_create)接口创建对应的行高样式对象。 可以通过[OH_ArkUI_LineHeightStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_destroy)接口销毁行高样式对象。 对象创建后可以通过[OH_ArkUI_LineHeightStyle_SetLineHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_setlineheight)接口设置具体的固定行高值。 从API版本26.0.0开始，对象创建后可以通过[OH_ArkUI_LineHeightStyle_SetLineHeightMultiple](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_setlineheightmultiple)接口设置具体的行高的倍数值。 |
| [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle) | OH_ArkUI_LineSpacingStyle | 定义行间距样式。 可以通过[OH_ArkUI_LineSpacingStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_create)接口创建对应的行间距样式对象，通过[OH_ArkUI_LineSpacingStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_destroy)接口销毁行间距样式对象。 对象创建后可以通过[OH_ArkUI_LineSpacingStyle_SetLineSpacing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_setlinespacing)接口设置具体的行间距值，通过[OH_ArkUI_LineSpacingStyle_SetOnlyBetweenLines](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_setonlybetweenlines)接口设置行间距是否只在行间生效。 |
| [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle) | OH_ArkUI_UrlStyle | 定义超链接样式。 可以通过[OH_ArkUI_UrlStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_create)接口创建对应的超链接样式对象。 可以通过[OH_ArkUI_UrlStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_destroy)接口销毁超链接样式对象。 对象创建后通过[OH_ArkUI_UrlStyle_SetUrl](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_seturl)接口设置链接地址。 |
| [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle) | OH_ArkUI_BackgroundColorStyle | 定义背景颜色样式。 可以通过[OH_ArkUI_BackgroundColorStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_create)接口创建对应的背景颜色样式对象。 可以通过[OH_ArkUI_BackgroundColorStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_destroy)接口销毁背景颜色样式对象。 对象创建后通过[OH_ArkUI_BackgroundColorStyle_SetColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_setcolor)和[OH_ArkUI_BackgroundColorStyle_SetRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_setradius)接口设置背景颜色和圆角。 |
| [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan) | OH_ArkUI_UserDataSpan | 定义用户数据Span样式。 可以通过[OH_ArkUI_UserDataSpan_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_userdataspan_create)接口创建对应的用户数据Span样式对象。 可以通过[OH_ArkUI_UserDataSpan_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_userdataspan_destroy)接口销毁用户数据Span样式对象。 对象创建后通过[OH_ArkUI_UserDataSpan_SetUserData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_userdataspan_setuserdata)接口绑定用户数据。 |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo) | OH_ArkUI_LeadingMarginSpanDrawInfo | 定义段落缩进的自定义绘制信息。 可以通过[OH_ArkUI_LeadingMarginSpanDrawInfo_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_leadingmarginspandrawinfo_create)接口创建对应的段落缩进的自定义绘制信息对象。 可以通过[OH_ArkUI_LeadingMarginSpanDrawInfo_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_leadingmarginspandrawinfo_destroy)接口销毁段落缩进的自定义绘制信息对象。 对象用于在[OH_ArkUI_ParagraphStyle_RegisterOnDrawLeadingMarginCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_registerondrawleadingmargincallback)注册的回调函数中，提供当前行的绘制上下文信息。 |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager) | ArkUI_TextLayoutManager | 定义文本布局管理器对象。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_ArkUI_StyledStringKey](#oh_arkui_styledstringkey) | OH_ArkUI_StyledStringKey | 属性字符串的属性类型枚举。 |
| [OH_ArkUI_SuperscriptStyle](#oh_arkui_superscriptstyle) | OH_ArkUI_SuperscriptStyle | 定义文本上下角标样式枚举。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [ArkUI_StyledString* OH_ArkUI_StyledString_Create(OH_Drawing_TypographyStyle* style, OH_Drawing_FontCollection* collection)](#oh_arkui_styledstring_create) | 创建指向ArkUI_StyledString对象的指针。 |
| [void OH_ArkUI_StyledString_Destroy(ArkUI_StyledString* handle)](#oh_arkui_styledstring_destroy) | 释放被ArkUI_StyledString对象占据的内存。 |
| [void OH_ArkUI_StyledString_PushTextStyle(ArkUI_StyledString* handle, OH_Drawing_TextStyle* style)](#oh_arkui_styledstring_pushtextstyle) | 将新的排版风格设置到当前格式化字符串样式栈顶。 |
| [void OH_ArkUI_StyledString_AddText(ArkUI_StyledString* handle, const char* content)](#oh_arkui_styledstring_addtext) | 基于当前格式化字符串样式设置对应的文本内容。 |
| [void OH_ArkUI_StyledString_PopTextStyle(ArkUI_StyledString* handle)](#oh_arkui_styledstring_poptextstyle) | 将当前格式化字符串对象中栈顶样式出栈。 |
| [OH_Drawing_Typography* OH_ArkUI_StyledString_CreateTypography(ArkUI_StyledString* handle)](#oh_arkui_styledstring_createtypography) | 基于格式字符串对象创建指向[OH_Drawing_Typography](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-typography)对象的指针，用于提前进行文本测算排版。[OH_Drawing_Typography](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-typography)对象的生命周期由应用管理，当应用销毁该对象时，应同步调用[NODE_TEXT_CONTENT_WITH_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_content_with_styled_string)对应的reset方法进行置空，避免野指针崩溃风险。 |
| [void OH_ArkUI_StyledString_AddPlaceholder(ArkUI_StyledString* handle, OH_Drawing_PlaceholderSpan* placeholder)](#oh_arkui_styledstring_addplaceholder) | 设置占位符。 |
| [ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_Create(void)](#oh_arkui_styledstring_descriptor_create) | 创建属性字符串数据对象。 |
| [void OH_ArkUI_StyledString_Descriptor_Destroy(ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_styledstring_descriptor_destroy) | 释放被[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象占据的内存。 |
| [int32_t OH_ArkUI_UnmarshallStyledStringDescriptor(uint8_t* buffer, size_t bufferSize, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_unmarshallstyledstringdescriptor) | 将包含属性字符串信息的字节数组反序列化为属性字符串。 |
| [int32_t OH_ArkUI_MarshallStyledStringDescriptor(uint8_t* buffer, size_t bufferSize, ArkUI_StyledString_Descriptor* descriptor, size_t* resultSize)](#oh_arkui_marshallstyledstringdescriptor) | 将属性字符串信息序列化为字节数组。 |
| [const char* OH_ArkUI_ConvertToHtml(ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_converttohtml) | 将属性字符串信息转换成HTML。 |
| [ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_CreateWithString(const char* value, const OH_ArkUI_SpanStyle** styles, int32_t length)](#oh_arkui_styledstring_descriptor_createwithstring) | 创建纯文本内容类型的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象。 |
| [ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_CreateWithImageAttachment(const OH_ArkUI_ImageAttachment* value)](#oh_arkui_styledstring_descriptor_createwithimageattachment) | 创建图片内容类型的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象。 |
| [ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_CreateWithCustomSpan(const OH_ArkUI_CustomSpan* value)](#oh_arkui_styledstring_descriptor_createwithcustomspan) | 创建自定义绘制Span内容类型的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_GetLength(const ArkUI_StyledString_Descriptor* descriptor, int32_t* length)](#oh_arkui_styledstring_descriptor_getlength) | 获取属性字符串的字符长度。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_GetString(const ArkUI_StyledString_Descriptor* descriptor, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_styledstring_descriptor_getstring) | 获取属性字符串的文本内容。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_IsEqual(const ArkUI_StyledString_Descriptor* firstDescriptor, const ArkUI_StyledString_Descriptor* secondDescriptor, bool* isEqual)](#oh_arkui_styledstring_descriptor_isequal) | 判断两个属性字符串是否相同。当属性字符串的文本及样式均一致，视为相同。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_SubStyledString(const ArkUI_StyledString_Descriptor* descriptor, ArkUI_StyledString_Descriptor* subDescriptor, uint32_t start, uint32_t length)](#oh_arkui_styledstring_descriptor_substyledstring) | 获取属性字符串的子属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_GetStyles(const ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, OH_ArkUI_StyledStringKey styledKey, OH_ArkUI_SpanStyle** styles, uint32_t stylesSize, uint32_t* writeLength)](#oh_arkui_styledstring_descriptor_getstyles) | 获取属性字符串指定范围内的样式集合。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_FromHtml(ArkUI_StyledString_Descriptor* descriptor, const char* html)](#oh_arkui_styledstring_descriptor_fromhtml) | 将HTML格式字符串转换成属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ReplaceString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, const char* string)](#oh_arkui_styledstring_descriptor_replacestring) | 替换属性字符串指定范围的文本。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_InsertString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, const char* string)](#oh_arkui_styledstring_descriptor_insertstring) | 在属性字符串的指定位置插入文本。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_RemoveString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length)](#oh_arkui_styledstring_descriptor_removestring) | 移除属性字符串指定范围的文本。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ReplaceStyle(ArkUI_StyledString_Descriptor* descriptor, const OH_ArkUI_SpanStyle* spanStyle)](#oh_arkui_styledstring_descriptor_replacestyle) | 替换属性字符串指定范围内的样式。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_SetStyle(ArkUI_StyledString_Descriptor* descriptor, const OH_ArkUI_SpanStyle* spanStyle)](#oh_arkui_styledstring_descriptor_setstyle) | 为属性字符串指定范围设置新样式。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_RemoveStyle(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, OH_ArkUI_StyledStringKey styledKey)](#oh_arkui_styledstring_descriptor_removestyle) | 清除属性字符串指定范围内容的指定类型样式。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ClearStyles(ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_styledstring_descriptor_clearstyles) | 清除属性字符串对象的所有样式。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ReplaceStyledString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, const ArkUI_StyledString_Descriptor* other)](#oh_arkui_styledstring_descriptor_replacestyledstring) | 替换指定范围的属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_InsertStyledString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, const ArkUI_StyledString_Descriptor* other)](#oh_arkui_styledstring_descriptor_insertstyledstring) | 在属性字符串的指定位置插入新的属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_AppendStyledString(ArkUI_StyledString_Descriptor* descriptor, const ArkUI_StyledString_Descriptor* other)](#oh_arkui_styledstring_descriptor_appendstyledstring) | 在属性字符串的末尾追加新的属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_InvalidateCustomSpan(const ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_styledstring_descriptor_invalidatecustomspan) | 主动刷新属性字符串中的自定义绘制Span。 |
| [OH_ArkUI_TextStyle* OH_ArkUI_TextStyle_Create()](#oh_arkui_textstyle_create) | 创建[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象。 |
| [void OH_ArkUI_TextStyle_Destroy(OH_ArkUI_TextStyle* textStyle)](#oh_arkui_textstyle_destroy) | 释放[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontColor(OH_ArkUI_TextStyle* textStyle, uint32_t fontColor)](#oh_arkui_textstyle_setfontcolor) | 设置文本字体样式中的字体颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontColor(const OH_ArkUI_TextStyle* textStyle, uint32_t* fontColor)](#oh_arkui_textstyle_getfontcolor) | 获取文本字体样式中的字体颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontFamily(OH_ArkUI_TextStyle* textStyle, const char* fontFamily)](#oh_arkui_textstyle_setfontfamily) | 设置文本字体样式中的字体族。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontFamily(const OH_ArkUI_TextStyle* textStyle, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textstyle_getfontfamily) | 获取文本字体样式中的字体族。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontSize(OH_ArkUI_TextStyle* textStyle, float fontSize)](#oh_arkui_textstyle_setfontsize) | 设置文本字体样式中的字体大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontSize(const OH_ArkUI_TextStyle* textStyle, float* fontSize)](#oh_arkui_textstyle_getfontsize) | 获取文本字体样式中的字体大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontWeight(OH_ArkUI_TextStyle* textStyle, uint32_t fontWeight)](#oh_arkui_textstyle_setfontweight) | 设置文本字体样式中的字体粗细。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontWeight(const OH_ArkUI_TextStyle* textStyle, uint32_t* fontWeight)](#oh_arkui_textstyle_getfontweight) | 获取文本字体样式中的字体粗细。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontStyle(OH_ArkUI_TextStyle* textStyle, ArkUI_FontStyle fontStyle)](#oh_arkui_textstyle_setfontstyle) | 设置文本字体样式中的字体风格。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontStyle(const OH_ArkUI_TextStyle* textStyle, ArkUI_FontStyle* fontStyle)](#oh_arkui_textstyle_getfontstyle) | 获取文本字体样式中的字体风格。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetStrokeWidth(OH_ArkUI_TextStyle* textStyle, float strokeWidth)](#oh_arkui_textstyle_setstrokewidth) | 设置文本字体样式中的描边宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetStrokeWidth(const OH_ArkUI_TextStyle* textStyle, float* strokeWidth)](#oh_arkui_textstyle_getstrokewidth) | 获取文本字体样式中的描边宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetStrokeColor(OH_ArkUI_TextStyle* textStyle, uint32_t strokeColor)](#oh_arkui_textstyle_setstrokecolor) | 设置文本字体样式中的描边颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetStrokeColor(const OH_ArkUI_TextStyle* textStyle, uint32_t* strokeColor)](#oh_arkui_textstyle_getstrokecolor) | 获取文本字体样式中的描边颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_SetSuperscript(OH_ArkUI_TextStyle* textStyle, OH_ArkUI_SuperscriptStyle superscript)](#oh_arkui_textstyle_setsuperscript) | 设置文本字体样式中的上下标样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextStyle_GetSuperscript(const OH_ArkUI_TextStyle* textStyle, OH_ArkUI_SuperscriptStyle* superscript)](#oh_arkui_textstyle_getsuperscript) | 获取文本字体样式中的上下标样式。 |
| [OH_ArkUI_SpanStyle* OH_ArkUI_SpanStyle_Create()](#oh_arkui_spanstyle_create) | 创建[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象。 |
| [void OH_ArkUI_SpanStyle_Destroy(OH_ArkUI_SpanStyle* spanStyle)](#oh_arkui_spanstyle_destroy) | 释放[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetStyledKey(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_StyledStringKey* styledKey)](#oh_arkui_spanstyle_getstyledkey) | 获取属性字符串样式对象的样式类型。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetStart(OH_ArkUI_SpanStyle* spanStyle, int32_t start)](#oh_arkui_spanstyle_setstart) | 设置属性字符串样式对象的起始位置。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetStart(const OH_ArkUI_SpanStyle* spanStyle, int32_t* start)](#oh_arkui_spanstyle_getstart) | 获取属性字符串样式对象的起始位置。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLength(OH_ArkUI_SpanStyle* spanStyle, int32_t length)](#oh_arkui_spanstyle_setlength) | 设置属性字符串样式对象的长度。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLength(const OH_ArkUI_SpanStyle* spanStyle, int32_t* length)](#oh_arkui_spanstyle_getlength) | 获取属性字符串样式对象的长度。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetTextStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_TextStyle* textStyle)](#oh_arkui_spanstyle_settextstyle) | 设置属性字符串样式对象的文本字体样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetTextStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_TextStyle* textStyle)](#oh_arkui_spanstyle_gettextstyle) | 获取属性字符串样式对象的文本字体样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetParagraphStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_ParagraphStyle* paragraphStyle)](#oh_arkui_spanstyle_setparagraphstyle) | 设置属性字符串样式对象的段落样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetParagraphStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_ParagraphStyle* paragraphStyle)](#oh_arkui_spanstyle_getparagraphstyle) | 获取属性字符串样式对象的段落样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetGestureStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_GestureStyle* gestureStyle)](#oh_arkui_spanstyle_setgesturestyle) | 设置属性字符串样式对象的事件手势样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetGestureStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_GestureStyle* gestureStyle)](#oh_arkui_spanstyle_getgesturestyle) | 获取属性字符串样式对象的事件手势样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetTextShadowStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_TextShadowStyle* textShadowStyle)](#oh_arkui_spanstyle_settextshadowstyle) | 设置属性字符串样式对象的文本阴影样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetTextShadowStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_TextShadowStyle* textShadowStyle)](#oh_arkui_spanstyle_gettextshadowstyle) | 获取属性字符串样式对象的文本阴影样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetDecorationStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_DecorationStyle* decorationStyle)](#oh_arkui_spanstyle_setdecorationstyle) | 设置属性字符串样式对象的文本装饰线样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetDecorationStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_DecorationStyle* decorationStyle)](#oh_arkui_spanstyle_getdecorationstyle) | 获取属性字符串样式对象的文本装饰线样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetBaselineOffsetStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle)](#oh_arkui_spanstyle_setbaselineoffsetstyle) | 设置属性字符串样式对象的基线偏移量样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetBaselineOffsetStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle)](#oh_arkui_spanstyle_getbaselineoffsetstyle) | 获取属性字符串样式对象的基线偏移量样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLetterSpacingStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_LetterSpacingStyle* letterSpacingStyle)](#oh_arkui_spanstyle_setletterspacingstyle) | 设置属性字符串样式对象的字符间距样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLetterSpacingStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_LetterSpacingStyle* letterSpacingStyle)](#oh_arkui_spanstyle_getletterspacingstyle) | 获取属性字符串样式对象的字符间距样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLineHeightStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_LineHeightStyle* lineHeightStyle)](#oh_arkui_spanstyle_setlineheightstyle) | 设置属性字符串样式对象的行高样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLineHeightStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_LineHeightStyle* lineHeightStyle)](#oh_arkui_spanstyle_getlineheightstyle) | 获取属性字符串样式对象的行高样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetUrlStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_UrlStyle* urlStyle)](#oh_arkui_spanstyle_seturlstyle) | 设置属性字符串样式对象的超链接样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetUrlStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_UrlStyle* urlStyle)](#oh_arkui_spanstyle_geturlstyle) | 获取属性字符串样式对象的超链接样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetBackgroundColorStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_BackgroundColorStyle* backgroundColorStyle)](#oh_arkui_spanstyle_setbackgroundcolorstyle) | 设置属性字符串样式对象的背景颜色样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetBackgroundColorStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_BackgroundColorStyle* backgroundColorStyle)](#oh_arkui_spanstyle_getbackgroundcolorstyle) | 获取属性字符串样式对象的背景颜色样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetUserDataSpan(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_UserDataSpan* userDataSpan)](#oh_arkui_spanstyle_setuserdataspan) | 设置属性字符串样式对象的用户数据Span样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetUserDataSpan(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_UserDataSpan* userDataSpan)](#oh_arkui_spanstyle_getuserdataspan) | 获取属性字符串样式对象的用户数据Span样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetCustomSpan(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_CustomSpan* customSpan)](#oh_arkui_spanstyle_setcustomspan) | 设置属性字符串样式对象的自定义绘制Span样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetCustomSpan(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_CustomSpan* customSpan)](#oh_arkui_spanstyle_getcustomspan) | 获取属性字符串样式对象的自定义绘制Span样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetImageAttachment(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_ImageAttachment* imageAttachment)](#oh_arkui_spanstyle_setimageattachment) | 设置属性字符串样式对象的图片样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetImageAttachment(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_ImageAttachment* imageAttachment)](#oh_arkui_spanstyle_getimageattachment) | 获取属性字符串样式对象的图片样式。 |
| [OH_ArkUI_LeadingMarginSpanDrawInfo* OH_ArkUI_LeadingMarginSpanDrawInfo_Create()](#oh_arkui_leadingmarginspandrawinfo_create) | 创建[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象。 |
| [void OH_ArkUI_LeadingMarginSpanDrawInfo_Destroy(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo)](#oh_arkui_leadingmarginspandrawinfo_destroy) | 释放[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetX(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float x)](#oh_arkui_leadingmarginspandrawinfo_setx) | 设置段落缩进的自定义绘制信息对象中当前行相对于组件的水平偏移。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetX(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* x)](#oh_arkui_leadingmarginspandrawinfo_getx) | 获取段落缩进的自定义绘制信息对象中当前行相对于组件的水平偏移。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetTop(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float top)](#oh_arkui_leadingmarginspandrawinfo_settop) | 设置段落缩进的自定义绘制信息对象中行顶与组件上边缘的距离。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetTop(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* top)](#oh_arkui_leadingmarginspandrawinfo_gettop) | 获取段落缩进的自定义绘制信息对象中行顶与组件上边缘的距离。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetBottom(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float bottom)](#oh_arkui_leadingmarginspandrawinfo_setbottom) | 设置段落缩进的自定义绘制信息对象中行底与组件上边缘的距离。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetBottom(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* bottom)](#oh_arkui_leadingmarginspandrawinfo_getbottom) | 获取段落缩进的自定义绘制信息对象中行底与组件上边缘的距离。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetBaseline(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float baseline)](#oh_arkui_leadingmarginspandrawinfo_setbaseline) | 设置段落缩进的自定义绘制信息对象中当前行的基线与组件上边缘的距离。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetBaseline(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* baseline)](#oh_arkui_leadingmarginspandrawinfo_getbaseline) | 获取段落缩进的自定义绘制信息对象中当前行的基线与组件上边缘的距离。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetTextDirection(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, ArkUI_TextDirection direction)](#oh_arkui_leadingmarginspandrawinfo_settextdirection) | 设置段落缩进的自定义绘制信息对象中文本内容的方向。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetTextDirection(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, ArkUI_TextDirection* direction)](#oh_arkui_leadingmarginspandrawinfo_gettextdirection) | 获取段落缩进的自定义绘制信息对象中文本内容的方向。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetStart(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t start)](#oh_arkui_leadingmarginspandrawinfo_setstart) | 设置段落缩进的自定义绘制信息对象中当前行的起始索引。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetStart(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t* start)](#oh_arkui_leadingmarginspandrawinfo_getstart) | 获取段落缩进的自定义绘制信息对象中当前行的起始索引。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetEnd(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t end)](#oh_arkui_leadingmarginspandrawinfo_setend) | 设置段落缩进的自定义绘制信息对象中当前行的结束索引。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetEnd(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t* end)](#oh_arkui_leadingmarginspandrawinfo_getend) | 获取段落缩进的自定义绘制信息对象中当前行的结束索引。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetFirst(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, bool first)](#oh_arkui_leadingmarginspandrawinfo_setfirst) | 设置段落缩进的自定义绘制信息对象中当前行是否为段落的首行。 |
| [ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetFirst(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, bool* first)](#oh_arkui_leadingmarginspandrawinfo_getfirst) | 获取段落缩进的自定义绘制信息对象中当前行是否为段落的首行。 |
| [OH_ArkUI_ParagraphStyle* OH_ArkUI_ParagraphStyle_Create()](#oh_arkui_paragraphstyle_create) | 创建[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象。 |
| [void OH_ArkUI_ParagraphStyle_Destroy(OH_ArkUI_ParagraphStyle* paragraphStyle)](#oh_arkui_paragraphstyle_destroy) | 释放[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextAlign(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextAlignment align)](#oh_arkui_paragraphstyle_settextalign) | 设置段落样式中的水平方向的文本对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextAlign(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextAlignment* align)](#oh_arkui_paragraphstyle_gettextalign) | 获取段落样式中的水平方向的文本对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextIndent(OH_ArkUI_ParagraphStyle* paragraphStyle, float textIndent)](#oh_arkui_paragraphstyle_settextindent) | 设置段落样式中的首行文本缩进。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextIndent(const OH_ArkUI_ParagraphStyle* paragraphStyle, float* textIndent)](#oh_arkui_paragraphstyle_gettextindent) | 获取段落样式中的首行文本缩进。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetMaxLines(OH_ArkUI_ParagraphStyle* paragraphStyle, int32_t maxLines)](#oh_arkui_paragraphstyle_setmaxlines) | 设置段落样式中的最大行数。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetMaxLines(const OH_ArkUI_ParagraphStyle* paragraphStyle, int32_t* maxLines)](#oh_arkui_paragraphstyle_getmaxlines) | 获取段落样式中的最大行数。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetOverflow(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextOverflow overflow)](#oh_arkui_paragraphstyle_setoverflow) | 设置段落样式中的段落超长时的显示方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetOverflow(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextOverflow* overflow)](#oh_arkui_paragraphstyle_getoverflow) | 获取段落样式中的段落超长时的显示方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetWordBreak(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_WordBreak wordBreak)](#oh_arkui_paragraphstyle_setwordbreak) | 设置段落样式中的断行规则。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetWordBreak(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_WordBreak* wordBreak)](#oh_arkui_paragraphstyle_getwordbreak) | 获取段落样式中的断行规则。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetLeadingMarginPixelMap(OH_ArkUI_ParagraphStyle* paragraphStyle, struct OH_PixelmapNative* pixelmap)](#oh_arkui_paragraphstyle_setleadingmarginpixelmap) | 设置段落样式中的段落缩进的像素图。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetLeadingMarginPixelMap(const OH_ArkUI_ParagraphStyle* paragraphStyle, struct OH_PixelmapNative** pixelmap)](#oh_arkui_paragraphstyle_getleadingmarginpixelmap) | 获取段落样式中的段落缩进的像素图。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetLeadingMarginWidth(OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t width)](#oh_arkui_paragraphstyle_setleadingmarginwidth) | 设置段落样式中的段落缩进宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetLeadingMarginWidth(const OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t* width)](#oh_arkui_paragraphstyle_getleadingmarginwidth) | 获取段落样式中的段落缩进宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetLeadingMarginHeight(OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t height)](#oh_arkui_paragraphstyle_setleadingmarginheight) | 设置段落样式中的段落缩进高度。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetLeadingMarginHeight(const OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t* height)](#oh_arkui_paragraphstyle_getleadingmarginheight) | 获取段落样式中的段落缩进高度。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetParagraphSpacing(OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t paragraphSpacing)](#oh_arkui_paragraphstyle_setparagraphspacing) | 设置段落样式中的段落间距。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetParagraphSpacing(const OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t* paragraphSpacing)](#oh_arkui_paragraphstyle_getparagraphspacing) | 获取段落样式中的段落间距。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextVerticalAlign(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextVerticalAlignment verticalAlignment)](#oh_arkui_paragraphstyle_settextverticalalign) | 设置段落样式中的垂直方向的文本对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextVerticalAlign(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextVerticalAlignment* verticalAlignment)](#oh_arkui_paragraphstyle_gettextverticalalign) | 获取段落样式中的垂直方向的文本对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_RegisterOnDrawLeadingMarginCallback(OH_ArkUI_ParagraphStyle* paragraphStyle, void(*onDraw)(ArkUI_DrawContext* context, OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo))](#oh_arkui_paragraphstyle_registerondrawleadingmargincallback) | 设置段落样式中绘制段落缩进时触发的回调函数。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_RegisterOnGetLeadingMarginCallback(OH_ArkUI_ParagraphStyle* paragraphStyle, float(*leadingMargin)())](#oh_arkui_paragraphstyle_registerongetleadingmargincallback) | 设置段落样式中获取段落缩进距离时触发的回调函数。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextDirection(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextDirection textDirection)](#oh_arkui_paragraphstyle_settextdirection) | 设置段落样式中的文本方向。 |
| [ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextDirection(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextDirection* textDirection)](#oh_arkui_paragraphstyle_gettextdirection) | 获取段落样式中的文本方向。 |
| [OH_ArkUI_GestureStyle* OH_ArkUI_GestureStyle_Create()](#oh_arkui_gesturestyle_create) | 创建[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象。 |
| [void OH_ArkUI_GestureStyle_Destroy(OH_ArkUI_GestureStyle* gestureStyle)](#oh_arkui_gesturestyle_destroy) | 释放[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_GestureStyle_RegisterOnClickCallback(OH_ArkUI_GestureStyle* gestureStyle, void(*onClick)(ArkUI_NodeEvent*))](#oh_arkui_gesturestyle_registeronclickcallback) | 设置事件手势样式中的点击事件回调。 |
| [ArkUI_ErrorCode OH_ArkUI_GestureStyle_RegisterOnLongPressCallback(OH_ArkUI_GestureStyle* gestureStyle, void(*onLongPress)(ArkUI_GestureEvent*))](#oh_arkui_gesturestyle_registeronlongpresscallback) | 设置事件手势样式中的长按事件回调。 |
| [ArkUI_ErrorCode OH_ArkUI_GestureStyle_RegisterOnTouchCallback(OH_ArkUI_GestureStyle* gestureStyle, void(*onTouch)(ArkUI_NodeEvent*))](#oh_arkui_gesturestyle_registerontouchcallback) | 设置事件手势样式中的触摸事件回调。 |
| [OH_ArkUI_TextShadowStyle* OH_ArkUI_TextShadowStyle_Create()](#oh_arkui_textshadowstyle_create) | 创建[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象。 |
| [void OH_ArkUI_TextShadowStyle_Destroy(OH_ArkUI_TextShadowStyle* textShadowStyle)](#oh_arkui_textshadowstyle_destroy) | 释放[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_TextShadowStyle_SetTextShadow(OH_ArkUI_TextShadowStyle* textShadowStyle, const OH_ArkUI_ShadowOptions** options, uint32_t length)](#oh_arkui_textshadowstyle_settextshadow) | 设置文本阴影样式的文本阴影选项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextShadowStyle_GetTextShadow(const OH_ArkUI_TextShadowStyle* textShadowStyle, OH_ArkUI_ShadowOptions** shadowOptions, uint32_t shadowOptionsSize, uint32_t* writeLength)](#oh_arkui_textshadowstyle_gettextshadow) | 获取文本阴影样式的文本阴影选项。 |
| [OH_ArkUI_DecorationStyle* OH_ArkUI_DecorationStyle_Create()](#oh_arkui_decorationstyle_create) | 创建[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象。 |
| [void OH_ArkUI_DecorationStyle_Destroy(OH_ArkUI_DecorationStyle* decorationStyle)](#oh_arkui_decorationstyle_destroy) | 释放[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetTextDecorationType(OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationType type)](#oh_arkui_decorationstyle_settextdecorationtype) | 设置文本装饰线样式的装饰线类型。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetTextDecorationType(const OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationType* type)](#oh_arkui_decorationstyle_gettextdecorationtype) | 获取文本装饰线样式的装饰线类型。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetColor(OH_ArkUI_DecorationStyle* decorationStyle, uint32_t color)](#oh_arkui_decorationstyle_setcolor) | 设置文本装饰线样式的装饰线颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetColor(const OH_ArkUI_DecorationStyle* decorationStyle, uint32_t* color)](#oh_arkui_decorationstyle_getcolor) | 获取文本装饰线样式的装饰线颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetTextDecorationStyle(OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationStyle style)](#oh_arkui_decorationstyle_settextdecorationstyle) | 设置文本装饰线样式的装饰线样式。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetTextDecorationStyle(const OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationStyle* style)](#oh_arkui_decorationstyle_gettextdecorationstyle) | 获取文本装饰线样式的装饰线样式。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetThicknessScale(OH_ArkUI_DecorationStyle* decorationStyle, float thicknessScale)](#oh_arkui_decorationstyle_setthicknessscale) | 设置文本装饰线样式的装饰线的粗细缩放比例。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetThicknessScale(const OH_ArkUI_DecorationStyle* decorationStyle, float* thicknessScale)](#oh_arkui_decorationstyle_getthicknessscale) | 获取文本装饰线样式的装饰线的粗细缩放比例。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetEnableMultiType(OH_ArkUI_DecorationStyle* decorationStyle, bool enableMultiType)](#oh_arkui_decorationstyle_setenablemultitype) | 设置文本装饰线样式中是否开启多装饰线显示。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetEnableMultiType(const OH_ArkUI_DecorationStyle* decorationStyle, bool* enableMultiType)](#oh_arkui_decorationstyle_getenablemultitype) | 获取文本装饰线样式中是否开启多装饰线显示。 |
| [OH_ArkUI_BaselineOffsetStyle* OH_ArkUI_BaselineOffsetStyle_Create()](#oh_arkui_baselineoffsetstyle_create) | 创建[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象。 |
| [void OH_ArkUI_BaselineOffsetStyle_Destroy(OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle)](#oh_arkui_baselineoffsetstyle_destroy) | 释放[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_BaselineOffsetStyle_SetBaselineOffset(OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle, float baselineOffset)](#oh_arkui_baselineoffsetstyle_setbaselineoffset) | 设置基线偏移量。 |
| [ArkUI_ErrorCode OH_ArkUI_BaselineOffsetStyle_GetBaselineOffset(const OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle, float* baselineOffset)](#oh_arkui_baselineoffsetstyle_getbaselineoffset) | 获取基线偏移量。 |
| [OH_ArkUI_LetterSpacingStyle* OH_ArkUI_LetterSpacingStyle_Create()](#oh_arkui_letterspacingstyle_create) | 创建[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象。 |
| [void OH_ArkUI_LetterSpacingStyle_Destroy(OH_ArkUI_LetterSpacingStyle* letterSpacingStyle)](#oh_arkui_letterspacingstyle_destroy) | 释放[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_LetterSpacingStyle_SetLetterSpacing(OH_ArkUI_LetterSpacingStyle* letterSpacingStyle, float letterSpacing)](#oh_arkui_letterspacingstyle_setletterspacing) | 设置字符间距。 |
| [ArkUI_ErrorCode OH_ArkUI_LetterSpacingStyle_GetLetterSpacing(const OH_ArkUI_LetterSpacingStyle* letterSpacingStyle, float* letterSpacing)](#oh_arkui_letterspacingstyle_getletterspacing) | 获取字符间距。 |
| [OH_ArkUI_LineHeightStyle* OH_ArkUI_LineHeightStyle_Create()](#oh_arkui_lineheightstyle_create) | 创建[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象。 |
| [void OH_ArkUI_LineHeightStyle_Destroy(OH_ArkUI_LineHeightStyle* lineHeightStyle)](#oh_arkui_lineheightstyle_destroy) | 释放[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_SetLineHeight(OH_ArkUI_LineHeightStyle* lineHeightStyle, float lineHeight)](#oh_arkui_lineheightstyle_setlineheight) | 设置文本行高。 |
| [ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_GetLineHeight(const OH_ArkUI_LineHeightStyle* lineHeightStyle, float* lineHeight)](#oh_arkui_lineheightstyle_getlineheight) | 获取文本行高。 |
| [ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_SetLineHeightMultiple(OH_ArkUI_LineHeightStyle* lineHeightStyle, float lineHeightMultiple)](#oh_arkui_lineheightstyle_setlineheightmultiple) | 设置行高样式的行高倍数。 |
| [ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_GetLineHeightMultiple(const OH_ArkUI_LineHeightStyle* lineHeightStyle, float* lineHeightMultiple)](#oh_arkui_lineheightstyle_getlineheightmultiple) | 获取行高样式的行高倍数。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLineSpacingStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_LineSpacingStyle* lineSpacingStyle)](#oh_arkui_spanstyle_setlinespacingstyle) | 设置属性字符串样式对象的行间距样式。 |
| [ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLineSpacingStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_LineSpacingStyle* lineSpacingStyle)](#oh_arkui_spanstyle_getlinespacingstyle) | 获取属性字符串样式对象的行间距样式。 |
| [OH_ArkUI_LineSpacingStyle* OH_ArkUI_LineSpacingStyle_Create()](#oh_arkui_linespacingstyle_create) | 创建[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象。 |
| [void OH_ArkUI_LineSpacingStyle_Destroy(OH_ArkUI_LineSpacingStyle* lineSpacingStyle)](#oh_arkui_linespacingstyle_destroy) | 释放[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_SetLineSpacing(OH_ArkUI_LineSpacingStyle* lineSpacingStyle, float lineSpacing)](#oh_arkui_linespacingstyle_setlinespacing) | 设置行间距。 |
| [ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_GetLineSpacing(const OH_ArkUI_LineSpacingStyle* lineSpacingStyle, float* lineSpacing)](#oh_arkui_linespacingstyle_getlinespacing) | 获取行间距。 |
| [ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_SetOnlyBetweenLines(OH_ArkUI_LineSpacingStyle* lineSpacingStyle, bool onlyBetweenLines)](#oh_arkui_linespacingstyle_setonlybetweenlines) | 设置行间距是否只在行间生效。 |
| [ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_GetOnlyBetweenLines(const OH_ArkUI_LineSpacingStyle* lineSpacingStyle, bool* onlyBetweenLines)](#oh_arkui_linespacingstyle_getonlybetweenlines) | 获取行间距是否只在行间生效。 |
| [OH_ArkUI_BackgroundColorStyle* OH_ArkUI_BackgroundColorStyle_Create()](#oh_arkui_backgroundcolorstyle_create) | 创建[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象。 |
| [void OH_ArkUI_BackgroundColorStyle_Destroy(OH_ArkUI_BackgroundColorStyle* style)](#oh_arkui_backgroundcolorstyle_destroy) | 释放[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_SetColor(OH_ArkUI_BackgroundColorStyle* style, uint32_t color)](#oh_arkui_backgroundcolorstyle_setcolor) | 设置背景颜色样式的背景色。 |
| [ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_GetColor(const OH_ArkUI_BackgroundColorStyle* style, uint32_t* color)](#oh_arkui_backgroundcolorstyle_getcolor) | 获取背景颜色样式的背景色。 |
| [ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_SetRadius(OH_ArkUI_BackgroundColorStyle* style, float topLeft, float topRight, float bottomLeft, float bottomRight)](#oh_arkui_backgroundcolorstyle_setradius) | 设置背景颜色样式的背景圆角。 |
| [ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_GetRadius(const OH_ArkUI_BackgroundColorStyle* style, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)](#oh_arkui_backgroundcolorstyle_getradius) | 获取背景颜色样式的背景圆角。 |
| [OH_ArkUI_UrlStyle* OH_ArkUI_UrlStyle_Create()](#oh_arkui_urlstyle_create) | 创建[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象。 |
| [void OH_ArkUI_UrlStyle_Destroy(OH_ArkUI_UrlStyle* style)](#oh_arkui_urlstyle_destroy) | 释放[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_UrlStyle_SetUrl(OH_ArkUI_UrlStyle* style, const char* url)](#oh_arkui_urlstyle_seturl) | 设置超链接样式的超链接内容。 |
| [ArkUI_ErrorCode OH_ArkUI_UrlStyle_GetUrl(const OH_ArkUI_UrlStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_urlstyle_geturl) | 获取超链接样式的超链接内容。 |
| [OH_ArkUI_UserDataSpan* OH_ArkUI_UserDataSpan_Create()](#oh_arkui_userdataspan_create) | 创建[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象。 |
| [void OH_ArkUI_UserDataSpan_Destroy(OH_ArkUI_UserDataSpan* userDataSpan)](#oh_arkui_userdataspan_destroy) | 释放[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_UserDataSpan_SetUserData(OH_ArkUI_UserDataSpan* userDataSpan, void* userData)](#oh_arkui_userdataspan_setuserdata) | 设置用户数据Span样式中的用户数据。 |
| [ArkUI_ErrorCode OH_ArkUI_UserDataSpan_GetUserData(const OH_ArkUI_UserDataSpan* userDataSpan, void** userData)](#oh_arkui_userdataspan_getuserdata) | 获取用户数据Span样式中的用户数据。 |
| [OH_ArkUI_CustomSpan* OH_ArkUI_CustomSpan_Create()](#oh_arkui_customspan_create) | 创建[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象。 |
| [void OH_ArkUI_CustomSpan_Destroy(OH_ArkUI_CustomSpan* customSpan)](#oh_arkui_customspan_destroy) | 释放[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_CustomSpan_RegisterOnMeasureCallback(OH_ArkUI_CustomSpan* customSpan, ArkUI_CustomSpanMetrics*(*onMeasure)(float))](#oh_arkui_customspan_registeronmeasurecallback) | 设置自定义绘制Span获取尺寸大小时的回调函数。 |
| [ArkUI_ErrorCode OH_ArkUI_CustomSpan_RegisterOnDrawCallback(OH_ArkUI_CustomSpan* customSpan, void(*onDraw)(ArkUI_DrawContext*, ArkUI_CustomSpanDrawInfo*))](#oh_arkui_customspan_registerondrawcallback) | 注册自定义绘制Span绘制时的回调函数。 |
| [OH_ArkUI_ImageAttachment* OH_ArkUI_ImageAttachment_Create()](#oh_arkui_imageattachment_create) | 创建[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象。 |
| [void OH_ArkUI_ImageAttachment_Destroy(OH_ArkUI_ImageAttachment* imageAttachment)](#oh_arkui_imageattachment_destroy) | 释放[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象占用的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetPixelMap(OH_ArkUI_ImageAttachment* imageAttachment, struct OH_PixelmapNative* pixelmap)](#oh_arkui_imageattachment_setpixelmap) | 设置图片样式中的图片数据源。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetPixelMap(const OH_ArkUI_ImageAttachment* imageAttachment, struct OH_PixelmapNative** pixelmap)](#oh_arkui_imageattachment_getpixelmap) | 获取图片样式中的图片数据源。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetResource(OH_ArkUI_ImageAttachment* imageAttachment, const char* resource)](#oh_arkui_imageattachment_setresource) | 设置图片样式中的图片资源地址。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetResource(const OH_ArkUI_ImageAttachment* imageAttachment, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_imageattachment_getresource) | 获取图片样式中的图片资源地址。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSizeWidth(OH_ArkUI_ImageAttachment* imageAttachment, float width)](#oh_arkui_imageattachment_setsizewidth) | 设置图片样式中的图片宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSizeWidth(const OH_ArkUI_ImageAttachment* imageAttachment, float* width)](#oh_arkui_imageattachment_getsizewidth) | 获取图片样式中的图片宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSizeHeight(OH_ArkUI_ImageAttachment* imageAttachment, float height)](#oh_arkui_imageattachment_setsizeheight) | 设置图片样式中的图片高度。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSizeHeight(const OH_ArkUI_ImageAttachment* imageAttachment, float* height)](#oh_arkui_imageattachment_getsizeheight) | 获取图片样式中的图片高度。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetVerticalAlign(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ImageSpanAlignment verticalAlign)](#oh_arkui_imageattachment_setverticalalign) | 设置图片样式中的图片对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetVerticalAlign(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ImageSpanAlignment* verticalAlign)](#oh_arkui_imageattachment_getverticalalign) | 获取图片样式中的图片对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetObjectFit(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ObjectFit objectFit)](#oh_arkui_imageattachment_setobjectfit) | 设置图片样式中的图片缩放类型。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetObjectFit(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ObjectFit* objectFit)](#oh_arkui_imageattachment_getobjectfit) | 获取图片样式中的图片缩放类型。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetMargin(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin margin)](#oh_arkui_imageattachment_setmargin) | 设置图片样式中的图片外边距。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetMargin(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin* margin)](#oh_arkui_imageattachment_getmargin) | 获取图片样式中的图片外边距。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetPadding(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin padding)](#oh_arkui_imageattachment_setpadding) | 设置图片样式中的图片内边距。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetPadding(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin* padding)](#oh_arkui_imageattachment_getpadding) | 获取图片样式中的图片内边距。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetBorderRadiuses(OH_ArkUI_ImageAttachment* imageAttachment, float topLeft, float topRight, float bottomLeft, float bottomRight)](#oh_arkui_imageattachment_setborderradiuses) | 设置图片样式中的图片圆角。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetBorderRadiuses(const OH_ArkUI_ImageAttachment* imageAttachment, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)](#oh_arkui_imageattachment_getborderradiuses) | 获取图片样式中的图片圆角。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetColorFilter(OH_ArkUI_ImageAttachment* imageAttachment, const float* colorFilter, uint32_t size)](#oh_arkui_imageattachment_setcolorfilter) | 设置图片样式中的图片颜色过滤器。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetColorFilter(const OH_ArkUI_ImageAttachment* imageAttachment, float** colorFilter, uint32_t colorFilterSize, uint32_t* writeLength)](#oh_arkui_imageattachment_getcolorfilter) | 获取图片样式中的图片颜色过滤器。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetDrawingColorFilter(OH_ArkUI_ImageAttachment* imageAttachment, const OH_Drawing_ColorFilter* drawingColorFilter)](#oh_arkui_imageattachment_setdrawingcolorfilter) | 设置图片样式中的图片颜色滤镜。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetDrawingColorFilter(const OH_ArkUI_ImageAttachment* imageAttachment, OH_Drawing_ColorFilter* drawingColorFilter)](#oh_arkui_imageattachment_getdrawingcolorfilter) | 获取图片样式中的图片颜色滤镜。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSyncLoad(OH_ArkUI_ImageAttachment* imageAttachment, bool syncLoad)](#oh_arkui_imageattachment_setsyncload) | 设置图片样式中是否同步加载图片。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSyncLoad(const OH_ArkUI_ImageAttachment* imageAttachment, bool* syncLoad)](#oh_arkui_imageattachment_getsyncload) | 获取图片样式中是否同步加载图片。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSupportSvg(OH_ArkUI_ImageAttachment* imageAttachment, bool supportSvg)](#oh_arkui_imageattachment_setsupportsvg) | 设置图片样式中是否开启SVG标签解析能力增强功能。 |
| [ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSupportSvg(const OH_ArkUI_ImageAttachment* imageAttachment, bool* supportSvg)](#oh_arkui_imageattachment_getsupportsvg) | 获取图片样式中是否开启SVG标签解析能力增强功能。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorChangeEvent_GetRangeBefore(const OH_ArkUI_TextEditorChangeEvent* event, uint32_t* start, uint32_t* end)](#oh_arkui_texteditorchangeevent_getrangebefore) | 获取文本变化信息中的待替换内容的范围。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorChangeEvent_GetReplacementStyledString(const OH_ArkUI_TextEditorChangeEvent* event, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorchangeevent_getreplacementstyledstring) | 获取文本变化信息中的用于替换的属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorChangeEvent_GetPreviewStyledString(const OH_ArkUI_TextEditorChangeEvent* event, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorchangeevent_getpreviewstyledstring) | 获取文本变化信息中的预览内容属性字符串。 |
| [void OH_ArkUI_TextLayoutManager_Dispose(ArkUI_TextLayoutManager* layoutManager)](#oh_arkui_textlayoutmanager_dispose) | 释放被文本布局管理器对象占据的内存。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetLineCount(ArkUI_TextLayoutManager* layoutManager, int32_t* outLineCount)](#oh_arkui_textlayoutmanager_getlinecount) | 获取文本行数。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetRectsForRange(ArkUI_TextLayoutManager* layoutManager, int32_t start, int32_t end, OH_Drawing_RectWidthStyle widthStyle, OH_Drawing_RectHeightStyle heightStyle, OH_Drawing_TextBox** outTextBoxes)](#oh_arkui_textlayoutmanager_getrectsforrange) | 获取给定的矩形区域宽度样式以及高度样式的规格下，文本中任意区间范围内的字符或占位符所占的绘制区域信息。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetGlyphPositionAtCoordinate(ArkUI_TextLayoutManager* layoutManager, double dx, double dy, OH_Drawing_PositionAndAffinity** outPos)](#oh_arkui_textlayoutmanager_getglyphpositionatcoordinate) | 获取距离给定坐标最近的字形的位置信息。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetLineMetrics(ArkUI_TextLayoutManager* layoutManager, int32_t lineNumber, OH_Drawing_LineMetrics* outMetrics)](#oh_arkui_textlayoutmanager_getlinemetrics) | 获取指定行的行信息、文本样式信息、以及字体属性信息。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetCharacterPositionAtCoordinate(ArkUI_TextLayoutManager* layoutManager, double dx, double dy, OH_Drawing_PositionAndAffinity** outPos)](#oh_arkui_textlayoutmanager_getcharacterpositionatcoordinate) | 获取距离指定坐标最近的字符的位置信息。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetGlyphRangeForCharacterRange(ArkUI_TextLayoutManager* layoutManager, OH_Drawing_Range* charRange, OH_Drawing_Range** outGlyphRange, OH_Drawing_Range** outActualCharRange)](#oh_arkui_textlayoutmanager_getglyphrangeforcharacterrange) | 获取由指定字符范围所生成的字形范围。 |
| [ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetCharacterRangeForGlyphRange(ArkUI_TextLayoutManager* layoutManager, OH_Drawing_Range* glyphRange, OH_Drawing_Range** outCharRange, OH_Drawing_Range** outActualGlyphRange)](#oh_arkui_textlayoutmanager_getcharacterrangeforglyphrange) | 获取由指定字形范围所生成的字符范围。 |

#### 枚举类型说明

#### [h2]OH_ArkUI_StyledStringKey

```
enum OH_ArkUI_StyledStringKey
```
 描述

属性字符串的样式类型枚举。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_STYLEDSTRINGKEY_UNSPECIFIED = -1 | 未指定样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_FONT = 0 | 文本字体样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_DECORATION = 1 | 文本装饰线样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_BASELINE_OFFSET = 2 | 文本基线偏移量样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_LETTER_SPACING = 3 | 文本字符间距样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_TEXT_SHADOW = 4 | 文本阴影样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_LINE_HEIGHT = 5 | 文本行高样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_BACKGROUND_COLOR = 6 | 文本背景颜色样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_URL = 7 | 超链接样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_LINE_SPACING = 8 | 文本行间距样式。**起始版本：** 26.0.0 |
| OH_ARKUI_STYLEDSTRINGKEY_GESTURE = 100 | 事件手势样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_PARAGRAPH_STYLE = 200 | 文本段落样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_IMAGE = 300 | 图片样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_CUSTOM_SPAN = 400 | 自定义绘制Span样式。 |
| OH_ARKUI_STYLEDSTRINGKEY_USER_DATA = 500 | 用户数据Span样式。 |

#### [h2]OH_ArkUI_SuperscriptStyle

```
enum OH_ArkUI_SuperscriptStyle
```
 描述

定义文本上下角标样式枚举。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_SUPERSCRIPTSTYLE_NORMAL = 0 | 普通文本样式。 |
| OH_ARKUI_SUPERSCRIPTSTYLE_SUPERSCRIPT = 1 | 上标文本样式。 |
| OH_ARKUI_SUPERSCRIPTSTYLE_SUBSCRIPT = 2 | 下标文本样式。 |

#### 函数说明

#### [h2]OH_ArkUI_StyledString_Create()

```
ArkUI_StyledString* OH_ArkUI_StyledString_Create(OH_Drawing_TypographyStyle* style, OH_Drawing_FontCollection* collection)
```
 描述：

创建指向ArkUI_StyledString对象的指针。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Drawing_TypographyStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-typographystyle)* style | 指向OH_Drawing_TypographyStyle的指针，由[OH_Drawing_CreateTypographyStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h#oh_drawing_createtypographystyle)获取。 |
| [OH_Drawing_FontCollection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-fontcollection)* collection | 指向OH_Drawing_FontCollection的指针，由[OH_Drawing_CreateFontCollection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-font-collection-h#oh_drawing_createfontcollection)获取。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* | 创建指向ArkUI_StyledString对象的指针。如果对象返回空指针，表示创建失败，失败的原因是地址空间已满，或者是style，collection参数异常如空指针。 |

#### [h2]OH_ArkUI_StyledString_Destroy()

```
void OH_ArkUI_StyledString_Destroy(ArkUI_StyledString* handle)
```
 描述：

释放被ArkUI_StyledString对象占据的内存。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* handle | 指向ArkUI_StyledString对象的指针。 |

#### [h2]OH_ArkUI_StyledString_PushTextStyle()

```
void OH_ArkUI_StyledString_PushTextStyle(ArkUI_StyledString* handle, OH_Drawing_TextStyle* style)
```
 描述：

将新的排版风格设置到当前格式化字符串样式栈顶。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* handle | 指向ArkUI_StyledString对象的指针。 |
| [OH_Drawing_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-textstyle)* style | 指向OH_Drawing_TextStyle对象的指针。 |

#### [h2]OH_ArkUI_StyledString_AddText()

```
void OH_ArkUI_StyledString_AddText(ArkUI_StyledString* handle, const char* content)
```
 描述：

基于当前格式化字符串样式设置对应的文本内容。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* handle | 指向ArkUI_StyledString对象的指针。 |
| const char* content | 指向文本内容的指针。 |

#### [h2]OH_ArkUI_StyledString_PopTextStyle()

```
void OH_ArkUI_StyledString_PopTextStyle(ArkUI_StyledString* handle)
```
 描述：

将当前格式化字符串对象中栈顶样式出栈。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* handle | 指向ArkUI_StyledString对象的指针。 |

#### [h2]OH_ArkUI_StyledString_CreateTypography()

```
OH_Drawing_Typography* OH_ArkUI_StyledString_CreateTypography(ArkUI_StyledString* handle)
```
 描述：

基于格式字符串对象创建指向[OH_Drawing_Typography](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-typography)对象的指针，用于提前进行文本测算排版。[OH_Drawing_Typography](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-typography)对象的生命周期由应用管理，当应用销毁该对象时，应同步调用[NODE_TEXT_CONTENT_WITH_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_content_with_styled_string)对应的reset方法进行置空，避免野指针崩溃风险。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* handle | 指向ArkUI_StyledString对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Drawing_Typography](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-typography)* | 指向OH_Drawing_Typography对象的指针。如果对象返回空指针，表示创建失败，失败的原因可能是handle参数异常如空指针。 |

#### [h2]OH_ArkUI_StyledString_AddPlaceholder()

```
void OH_ArkUI_StyledString_AddPlaceholder(ArkUI_StyledString* handle, OH_Drawing_PlaceholderSpan* placeholder)
```
 描述：

设置占位符。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring)* handle | 指向ArkUI_StyledString对象的指针。 |
| [OH_Drawing_PlaceholderSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-placeholderspan)* placeholder | 指向OH_Drawing_PlaceholderSpan对象的指针。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_Create()

```
ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_Create(void)
```
 描述：

创建属性字符串数据对象。

起始版本： 14

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* | 指向ArkUI_StyledString_Descriptor对象的指针。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_Destroy()

```
void OH_ArkUI_StyledString_Descriptor_Destroy(ArkUI_StyledString_Descriptor* descriptor)
```
 描述：

释放被ArkUI_StyledString_Descriptor对象占据的内存。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向ArkUI_StyledString_Descriptor对象的指针。 |

#### [h2]OH_ArkUI_UnmarshallStyledStringDescriptor()

```
int32_t OH_ArkUI_UnmarshallStyledStringDescriptor(uint8_t* buffer, size_t bufferSize, ArkUI_StyledString_Descriptor* descriptor)
```
 描述：

将包含属性字符串信息的字节数组反序列化为属性字符串。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| uint8_t* buffer | 待反序列化的字节数组。 |
| size_t bufferSize | 字节数组长度。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向ArkUI_StyledString_Descriptor对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_MarshallStyledStringDescriptor()

```
int32_t OH_ArkUI_MarshallStyledStringDescriptor(uint8_t* buffer, size_t bufferSize, ArkUI_StyledString_Descriptor* descriptor, size_t* resultSize)
```
 描述：

将属性字符串信息序列化为字节数组。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| uint8_t* buffer | 字节数组，用于存储属性字符串序列化后的数据。 |
| size_t bufferSize | 字节数组长度。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向ArkUI_StyledString_Descriptor对象的指针。 |
| size_t* resultSize | 属性字符串转换后的字节数组实际长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_ConvertToHtml()

```
const char* OH_ArkUI_ConvertToHtml(ArkUI_StyledString_Descriptor* descriptor)
```
 描述：

将属性字符串信息转化成html。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向ArkUI_StyledString_Descriptor对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| const char* | html。该指针由内部管理，在[OH_ArkUI_StyledString_Descriptor_Destroy()](#oh_arkui_styledstring_descriptor_destroy)时释放。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_CreateWithString()

```
ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_CreateWithString(const char* value, const OH_ArkUI_SpanStyle** styles, int32_t length)
```
 描述

创建纯文本内容类型的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_StyledString_Descriptor_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstring_descriptor_destroy)销毁它。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* value | 属性字符串文本内容字符串。 |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)** styles | 属性字符串初始化选项，指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象数组的指针。 |
| int32_t length | 属性字符串初始化选项的长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* | 指向创建的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 如果结果为空指针，表示创建失败，失败的原因可能是传入参数异常。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_CreateWithImageAttachment()

```
ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_CreateWithImageAttachment(const OH_ArkUI_ImageAttachment* value)
```
 描述

创建图片内容类型的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_StyledString_Descriptor_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstring_descriptor_destroy)销毁它。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* value | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* | 指向创建的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 如果结果为空指针，表示创建失败，失败的原因可能是传入参数异常。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_CreateWithCustomSpan()

```
ArkUI_StyledString_Descriptor* OH_ArkUI_StyledString_Descriptor_CreateWithCustomSpan(const OH_ArkUI_CustomSpan* value)
```
 描述

创建自定义绘制Span内容类型的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_StyledString_Descriptor_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstring_descriptor_destroy)销毁它。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* value | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* | 指向创建的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 如果结果为空指针，表示创建失败，失败的原因可能是传入参数异常。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_GetLength()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_GetLength(const ArkUI_StyledString_Descriptor* descriptor, int32_t* length)
```
 描述

获取属性字符串的字符长度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| int32_t* length | 字符长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_GetString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_GetString(const ArkUI_StyledString_Descriptor* descriptor, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取属性字符串的文本内容。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| char* buffer | 文本内容写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区大小。 |
| int32_t* writeLength | 返回值为[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时表示实际写入缓冲区的长度。 返回值为[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_IsEqual()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_IsEqual(const ArkUI_StyledString_Descriptor* firstDescriptor, const ArkUI_StyledString_Descriptor* secondDescriptor, bool* isEqual)
```
 描述

判断两个属性字符串是否相同。当属性字符串的文本及样式均一致，视为相同。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* firstDescriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* secondDescriptor | 指向另一个[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| bool* isEqual | 两个属性字符串是否相同。true表示相同；false表示不相同。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_SubStyledString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_SubStyledString(const ArkUI_StyledString_Descriptor* descriptor, ArkUI_StyledString_Descriptor* subDescriptor, uint32_t start, uint32_t length)
```
 描述

获取属性字符串的子属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* subDescriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)子属性字符串对象的指针。 |
| uint32_t start | 子属性字符串的起始位置。取值范围[0, 属性字符串的字符长度]。 |
| uint32_t length | 子属性字符串的字符长度。取值范围[0, 属性字符串的字符长度与参数start的差值]。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_GetStyles()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_GetStyles(const ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, OH_ArkUI_StyledStringKey styledKey, OH_ArkUI_SpanStyle** styles, uint32_t stylesSize, uint32_t* writeLength)
```
 描述

获取属性字符串指定范围内的样式集合。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 指定范围的起始位置。取值范围[0, 属性字符串的字符长度]。 |
| uint32_t length | 指定范围的长度。取值范围[0, 属性字符串的字符长度与参数start的差值]。 |
| [OH_ArkUI_StyledStringKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstringkey) styledKey | 需要获取的指定样式类型，取值为[OH_ArkUI_StyledStringKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstringkey)中的枚举。 |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)** styles | 指向样式对象数组的缓冲区指针。 |
| uint32_t stylesSize | 样式对象数组的缓冲区大小。 |
| uint32_t* writeLength | 属性字符串中获取到的样式对象的数组的实际大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_FromHtml()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_FromHtml(ArkUI_StyledString_Descriptor* descriptor, const char* html)
```
 描述

将HTML格式字符串转换成属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| const char* html | 待转换为属性字符串的HTML格式字符串。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_ReplaceString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ReplaceString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, const char* string)
```
 描述

替换属性字符串指定范围的文本。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 指定范围的起始位置。取值范围[0, 属性字符串的字符长度]。 |
| uint32_t length | 指定范围的长度。取值范围[0, 属性字符串的字符长度与参数start的差值]。 |
| const char* string | 替换的新文本内容。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_InsertString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_InsertString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, const char* string)
```
 描述

在属性字符串的指定位置插入文本。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 插入位置。取值范围[0, 属性字符串的字符长度]。 |
| const char* string | 插入的新文本内容。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_RemoveString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_RemoveString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length)
```
 描述

移除属性字符串指定范围的文本。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 指定范围的起始位置。取值范围[0, 属性字符串的字符长度]。 |
| uint32_t length | 指定范围的字符长度。取值范围[0, 属性字符串的字符长度与参数start的差值]。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_ReplaceStyle()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ReplaceStyle(ArkUI_StyledString_Descriptor* descriptor, const OH_ArkUI_SpanStyle* spanStyle)
```
 描述

替换属性字符串指定范围内的样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 需先调用[OH_ArkUI_SpanStyle_SetStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_setstart)和[OH_ArkUI_SpanStyle_SetLength](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_setlength)在该对象中设置目标范围。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_SetStyle()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_SetStyle(ArkUI_StyledString_Descriptor* descriptor, const OH_ArkUI_SpanStyle* spanStyle)
```
 描述

为属性字符串指定范围设置新样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。需先调用[OH_ArkUI_SpanStyle_SetStart](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_setstart)和[OH_ArkUI_SpanStyle_SetLength](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_setlength)在该对象中设置目标范围。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_RemoveStyle()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_RemoveStyle(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, OH_ArkUI_StyledStringKey styledKey)
```
 描述

清除属性字符串指定范围内容的指定类型样式。

![](./img/note_3.0-zh-cn.png) 被清除后属性样式取对应TextEditor组件对应属性的默认值。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 指定范围的起始位置。取值范围[0, 属性字符串的字符长度]。 |
| uint32_t length | 指定范围的长度。取值范围[0, 属性字符串的字符长度与参数start的差值]。 |
| [OH_ArkUI_StyledStringKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstringkey) styledKey | 样式类型枚举值，取值为[OH_ArkUI_StyledStringKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstringkey)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_ClearStyles()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ClearStyles(ArkUI_StyledString_Descriptor* descriptor)
```
 描述

清除属性字符串对象的所有样式。

![](./img/note_3.0-zh-cn.png) 被清除后属性样式取对应TextEditor组件对应属性的默认值。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_ReplaceStyledString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_ReplaceStyledString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, uint32_t length, const ArkUI_StyledString_Descriptor* other)
```
 描述

替换指定范围的属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 指定范围的起始位置。取值范围[0, 属性字符串的字符长度]。 |
| uint32_t length | 指定范围的长度。取值范围[0, 属性字符串的字符长度与参数start的差值]。 |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* other | 指向新的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_InsertStyledString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_InsertStyledString(ArkUI_StyledString_Descriptor* descriptor, uint32_t start, const ArkUI_StyledString_Descriptor* other)
```
 描述

在属性字符串的指定位置插入新的属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| uint32_t start | 插入位置。取值范围[0, 属性字符串的字符长度]。 |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* other | 指向新的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_AppendStyledString()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_AppendStyledString(ArkUI_StyledString_Descriptor* descriptor, const ArkUI_StyledString_Descriptor* other)
```
 描述

在属性字符串的末尾追加新的属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* other | 指向新的[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_StyledString_Descriptor_InvalidateCustomSpan()

```
ArkUI_ErrorCode OH_ArkUI_StyledString_Descriptor_InvalidateCustomSpan(const ArkUI_StyledString_Descriptor* descriptor)
```
 描述

主动刷新属性字符串中的自定义绘制Span。

![](./img/note_3.0-zh-cn.png) 调用该接口会立即触发通过[OH_ArkUI_CustomSpan_RegisterOnDrawCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_registerondrawcallback)注册在自定义绘制Span上的回调函数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_INVALID_STYLED_STRING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 属性字符串无效。 |

#### [h2]OH_ArkUI_TextStyle_Create()

```
OH_ArkUI_TextStyle* OH_ArkUI_TextStyle_Create()
```
 描述

创建[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_TextStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextStyle_Destroy()

```
void OH_ArkUI_TextStyle_Destroy(OH_ArkUI_TextStyle* textStyle)
```
 描述

释放[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextStyle_SetFontColor()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontColor(OH_ArkUI_TextStyle* textStyle, uint32_t fontColor)
```
 描述

设置文本字体样式中的字体颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| uint32_t fontColor | 字体颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetFontColor()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontColor(const OH_ArkUI_TextStyle* textStyle, uint32_t* fontColor)
```
 描述

获取文本字体样式中的字体颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| uint32_t* fontColor | 字体颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_SetFontFamily()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontFamily(OH_ArkUI_TextStyle* textStyle, const char* fontFamily)
```
 描述

设置文本字体样式中的字体族。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| const char* fontFamily | 字体族。存放待设置的字体名称，不同字体名称通过逗号拼接。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetFontFamily()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontFamily(const OH_ArkUI_TextStyle* textStyle, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本字体样式中的字体族。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| char* buffer | 字体族内容写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时，表示实际写入缓冲区的字符串长度。 返回[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时，表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_TextStyle_SetFontSize()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontSize(OH_ArkUI_TextStyle* textStyle, float fontSize)
```
 描述

设置文本字体样式中的字体大小。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| float fontSize | 字体大小，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetFontSize()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontSize(const OH_ArkUI_TextStyle* textStyle, float* fontSize)
```
 描述

获取文本字体样式中的字体大小。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| float* fontSize | 字体大小，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_SetFontWeight()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontWeight(OH_ArkUI_TextStyle* textStyle, uint32_t fontWeight)
```
 描述

设置文本字体样式中的字体粗细。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| uint32_t fontWeight | 字体粗细。取值为[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_fontweight)中的枚举值，默认值为ARKUI_FONT_WEIGHT_W400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetFontWeight()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontWeight(const OH_ArkUI_TextStyle* textStyle, uint32_t* fontWeight)
```
 描述

获取文本字体样式中的字体粗细。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| uint32_t* fontWeight | 字体粗细。取值为[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_fontweight)中的枚举值，默认值为ARKUI_FONT_WEIGHT_W400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_SetFontStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetFontStyle(OH_ArkUI_TextStyle* textStyle, ArkUI_FontStyle fontStyle)
```
 描述

设置文本字体样式中的字体风格。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| [ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_fontstyle) fontStyle | 字体风格。取值为[ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_fontstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetFontStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetFontStyle(const OH_ArkUI_TextStyle* textStyle, ArkUI_FontStyle* fontStyle)
```
 描述

获取文本字体样式中的字体风格。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| [ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_fontstyle)* fontStyle | 字体风格。取值为[ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_fontstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_SetStrokeWidth()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetStrokeWidth(OH_ArkUI_TextStyle* textStyle, float strokeWidth)
```
 描述

设置文本字体样式中的描边宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| float strokeWidth | 描边宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetStrokeWidth()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetStrokeWidth(const OH_ArkUI_TextStyle* textStyle, float* strokeWidth)
```
 描述

获取文本字体样式中的描边宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| float* strokeWidth | 描边宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_SetStrokeColor()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetStrokeColor(OH_ArkUI_TextStyle* textStyle, uint32_t strokeColor)
```
 描述

设置文本字体样式中的描边颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| uint32_t strokeColor | 描边颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetStrokeColor()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetStrokeColor(const OH_ArkUI_TextStyle* textStyle, uint32_t* strokeColor)
```
 描述

获取文本字体样式中的描边颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| uint32_t* strokeColor | 描边颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_SetSuperscript()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_SetSuperscript(OH_ArkUI_TextStyle* textStyle, OH_ArkUI_SuperscriptStyle superscript)
```
 描述

设置文本字体样式中的上下标样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| [OH_ArkUI_SuperscriptStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_superscriptstyle) superscript | 上下标样式。取值为[OH_ArkUI_SuperscriptStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_superscriptstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextStyle_GetSuperscript()

```
ArkUI_ErrorCode OH_ArkUI_TextStyle_GetSuperscript(const OH_ArkUI_TextStyle* textStyle, OH_ArkUI_SuperscriptStyle* superscript)
```
 描述

获取文本字体样式中的上下标样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |
| [OH_ArkUI_SuperscriptStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_superscriptstyle)* superscript | 上下标样式。取值为[OH_ArkUI_SuperscriptStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_superscriptstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_Create()

```
OH_ArkUI_SpanStyle* OH_ArkUI_SpanStyle_Create()
```
 描述

创建[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_SpanStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_spanstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |

#### [h2]OH_ArkUI_SpanStyle_Destroy()

```
void OH_ArkUI_SpanStyle_Destroy(OH_ArkUI_SpanStyle* spanStyle)
```
 描述

释放[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |

#### [h2]OH_ArkUI_SpanStyle_GetStyledKey()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetStyledKey(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_StyledStringKey* styledKey)
```
 描述

获取属性字符串样式对象的样式类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_StyledStringKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstringkey)* styledKey | 样式类型的枚举值。取值为[OH_ArkUI_StyledStringKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_styledstringkey)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetStart()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetStart(OH_ArkUI_SpanStyle* spanStyle, int32_t start)
```
 描述

设置属性字符串样式对象的起始位置。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| int32_t start | 属性字符串样式对象的起始位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetStart()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetStart(const OH_ArkUI_SpanStyle* spanStyle, int32_t* start)
```
 描述

获取属性字符串样式对象的起始位置。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| int32_t* start | 属性字符串样式对象的起始位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetLength()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLength(OH_ArkUI_SpanStyle* spanStyle, int32_t length)
```
 描述

设置属性字符串样式对象的长度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| int32_t length | 属性字符串样式对象的长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetLength()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLength(const OH_ArkUI_SpanStyle* spanStyle, int32_t* length)
```
 描述

获取属性字符串样式对象的长度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| int32_t* length | 属性字符串样式对象的长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetTextStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetTextStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_TextStyle* textStyle)
```
 描述

设置属性字符串样式对象的文本字体样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetTextStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetTextStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_TextStyle* textStyle)
```
 描述

获取属性字符串样式对象的文本字体样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)* textStyle | 指向[OH_ArkUI_TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetParagraphStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetParagraphStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_ParagraphStyle* paragraphStyle)
```
 描述

设置属性字符串样式对象的段落样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetParagraphStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetParagraphStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_ParagraphStyle* paragraphStyle)
```
 描述

获取属性字符串样式对象的段落样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetGestureStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetGestureStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_GestureStyle* gestureStyle)
```
 描述

设置属性字符串样式对象的事件手势样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* gestureStyle | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetGestureStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetGestureStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_GestureStyle* gestureStyle)
```
 描述

获取属性字符串样式对象的事件手势样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* gestureStyle | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetTextShadowStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetTextShadowStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_TextShadowStyle* textShadowStyle)
```
 描述

设置属性字符串样式对象的文本阴影样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)* textShadowStyle | 指向[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetTextShadowStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetTextShadowStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_TextShadowStyle* textShadowStyle)
```
 描述

获取属性字符串样式对象的文本阴影样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)* textShadowStyle | 指向[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetDecorationStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetDecorationStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_DecorationStyle* decorationStyle)
```
 描述

设置属性字符串样式对象的文本装饰线样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetDecorationStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetDecorationStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_DecorationStyle* decorationStyle)
```
 描述

获取属性字符串样式对象的文本装饰线样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetBaselineOffsetStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetBaselineOffsetStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle)
```
 描述

设置属性字符串样式对象的基线偏移量样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)* baselineOffsetStyle | 指向[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetBaselineOffsetStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetBaselineOffsetStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle)
```
 描述

获取属性字符串样式对象的基线偏移量样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)* baselineOffsetStyle | 指向[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetLetterSpacingStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLetterSpacingStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_LetterSpacingStyle* letterSpacingStyle)
```
 描述

设置属性字符串样式对象的字符间距样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)* letterSpacingStyle | 指向[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetLetterSpacingStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLetterSpacingStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_LetterSpacingStyle* letterSpacingStyle)
```
 描述

获取属性字符串样式对象的字符间距样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)* letterSpacingStyle | 指向[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetLineHeightStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLineHeightStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_LineHeightStyle* lineHeightStyle)
```
 描述

设置属性字符串样式对象的行高样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetLineHeightStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLineHeightStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_LineHeightStyle* lineHeightStyle)
```
 描述

获取属性字符串样式对象的行高样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetUrlStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetUrlStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_UrlStyle* urlStyle)
```
 描述

设置属性字符串样式对象的超链接样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)* urlStyle | 指向[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetUrlStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetUrlStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_UrlStyle* urlStyle)
```
 描述

获取属性字符串样式对象的超链接样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)* urlStyle | 指向[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetBackgroundColorStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetBackgroundColorStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_BackgroundColorStyle* backgroundColorStyle)
```
 描述

设置属性字符串样式对象的背景颜色样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* backgroundColorStyle | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetBackgroundColorStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetBackgroundColorStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_BackgroundColorStyle* backgroundColorStyle)
```
 描述

获取属性字符串样式对象的背景颜色样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* backgroundColorStyle | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetUserDataSpan()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetUserDataSpan(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_UserDataSpan* userDataSpan)
```
 描述

设置属性字符串样式对象的用户数据Span样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)* userDataSpan | 指向[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetUserDataSpan()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetUserDataSpan(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_UserDataSpan* userDataSpan)
```
 描述

获取属性字符串样式对象的用户数据Span样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)* userDataSpan | 指向[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetCustomSpan()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetCustomSpan(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_CustomSpan* customSpan)
```
 描述

设置属性字符串样式对象的自定义绘制Span样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* customSpan | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetCustomSpan()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetCustomSpan(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_CustomSpan* customSpan)
```
 描述

获取属性字符串样式对象的自定义绘制Span样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* customSpan | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetImageAttachment()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetImageAttachment(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_ImageAttachment* imageAttachment)
```
 描述

设置属性字符串样式对象的图片样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetImageAttachment()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetImageAttachment(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_ImageAttachment* imageAttachment)
```
 描述

获取属性字符串样式对象的图片样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_Create()

```
OH_ArkUI_LeadingMarginSpanDrawInfo* OH_ArkUI_LeadingMarginSpanDrawInfo_Create()
```
 描述

创建[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_LeadingMarginSpanDrawInfo_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_leadingmarginspandrawinfo_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_Destroy()

```
void OH_ArkUI_LeadingMarginSpanDrawInfo_Destroy(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo)
```
 描述

释放[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetX()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetX(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float x)
```
 描述

设置段落缩进的自定义绘制信息对象中当前行相对于组件的水平偏移。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float x | 当前行相对于组件的水平偏移，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetX()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetX(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* x)
```
 描述

获取段落缩进的自定义绘制信息对象中当前行相对于组件的水平偏移。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float* x | 当前行相对于组件的水平偏移，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetTop()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetTop(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float top)
```
 描述

设置段落缩进的自定义绘制信息对象中行顶与组件上边缘的距离。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float top | 行顶与组件上边缘的距离，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetTop()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetTop(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* top)
```
 描述

获取段落缩进的自定义绘制信息对象中行顶与组件上边缘的距离。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float* top | 行顶与组件上边缘的距离，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetBottom()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetBottom(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float bottom)
```
 描述

设置段落缩进的自定义绘制信息对象中行底与组件上边缘的距离。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float bottom | 行底与组件上边缘的距离，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetBottom()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetBottom(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* bottom)
```
 描述

获取段落缩进的自定义绘制信息对象中行底与组件上边缘的距离。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float* bottom | 行底与组件上边缘的距离，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetBaseline()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetBaseline(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float baseline)
```
 描述

设置段落缩进的自定义绘制信息对象中当前行的基线与组件上边缘的距离。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float baseline | 当前行的基线与组件上边缘的距离，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetBaseline()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetBaseline(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, float* baseline)
```
 描述

获取段落缩进的自定义绘制信息对象中当前行的基线与组件上边缘的距离。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| float* baseline | 当前行的基线与组件上边缘的距离，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetTextDirection()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetTextDirection(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, ArkUI_TextDirection direction)
```
 描述

设置段落缩进的自定义绘制信息对象中文本内容的方向。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| [ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection) direction | 文本内容的方向。取值为[ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetTextDirection()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetTextDirection(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, ArkUI_TextDirection* direction)
```
 描述

获取段落缩进的自定义绘制信息对象中文本内容的方向。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| [ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection)* direction | 文本内容的方向。取值为[ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetStart()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetStart(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t start)
```
 描述

设置段落缩进的自定义绘制信息对象中当前行的起始索引。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| uint32_t start | 当前行的起始索引。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetStart()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetStart(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t* start)
```
 描述

获取段落缩进的自定义绘制信息对象中当前行的起始索引。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| uint32_t* start | 当前行的起始索引。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetEnd()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetEnd(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t end)
```
 描述

设置段落缩进的自定义绘制信息对象中当前行的结束索引。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| uint32_t end | 当前行的结束索引。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetEnd()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetEnd(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, uint32_t* end)
```
 描述

获取段落缩进的自定义绘制信息对象中当前行的结束索引。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| uint32_t* end | 当前行的结束索引。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_SetFirst()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_SetFirst(OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, bool first)
```
 描述

设置段落缩进的自定义绘制信息对象中当前行是否为段落的首行。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| bool first | 当前行是否为段落的首行。true表示首行；false表示非首行。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LeadingMarginSpanDrawInfo_GetFirst()

```
ArkUI_ErrorCode OH_ArkUI_LeadingMarginSpanDrawInfo_GetFirst(const OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo, bool* first)
```
 描述

获取段落缩进的自定义绘制信息对象中当前行是否为段落的首行。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)* drawInfo | 指向[OH_ArkUI_LeadingMarginSpanDrawInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-leadingmarginspandrawinfo)对象的指针。 |
| bool* first | 当前行是否为段落的首行。true表示首行；false表示非首行。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_Create()

```
OH_ArkUI_ParagraphStyle* OH_ArkUI_ParagraphStyle_Create()
```
 描述

创建[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_ParagraphStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_paragraphstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |

#### [h2]OH_ArkUI_ParagraphStyle_Destroy()

```
void OH_ArkUI_ParagraphStyle_Destroy(OH_ArkUI_ParagraphStyle* paragraphStyle)
```
 描述

释放[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetTextAlign()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextAlign(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextAlignment align)
```
 描述

设置段落样式中的水平方向的文本对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textalignment) align | 水平方向的文本对齐方式。取值为[ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetTextAlign()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextAlign(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextAlignment* align)
```
 描述

获取段落样式中的水平方向的文本对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textalignment)* align | 水平方向的文本对齐方式。取值为[ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetTextIndent()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextIndent(OH_ArkUI_ParagraphStyle* paragraphStyle, float textIndent)
```
 描述

设置段落样式中的首行文本缩进。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| float textIndent | 首行缩进值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetTextIndent()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextIndent(const OH_ArkUI_ParagraphStyle* paragraphStyle, float* textIndent)
```
 描述

获取段落样式中的首行文本缩进。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| float* textIndent | 首行缩进值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetMaxLines()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetMaxLines(OH_ArkUI_ParagraphStyle* paragraphStyle, int32_t maxLines)
```
 描述

设置段落样式中的最大行数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| int32_t maxLines | 最大行数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetMaxLines()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetMaxLines(const OH_ArkUI_ParagraphStyle* paragraphStyle, int32_t* maxLines)
```
 描述

获取段落样式中的最大行数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| int32_t* maxLines | 最大行数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetOverflow()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetOverflow(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextOverflow overflow)
```
 描述

设置段落样式中的段落超长时的显示方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextOverflow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textoverflow) overflow | 段落超长时的显示方式。取值为[ArkUI_TextOverflow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textoverflow)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetOverflow()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetOverflow(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextOverflow* overflow)
```
 描述

获取段落样式中的段落超长时的显示方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextOverflow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textoverflow)* overflow | 段落超长时的显示方式。取值为[ArkUI_TextOverflow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textoverflow)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetWordBreak()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetWordBreak(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_WordBreak wordBreak)
```
 描述

设置段落样式中的断行规则。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_wordbreak) wordBreak | 断行规则。取值为[ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_wordbreak)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetWordBreak()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetWordBreak(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_WordBreak* wordBreak)
```
 描述

获取段落样式中的断行规则。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_wordbreak)* wordBreak | 断行规则。取值为[ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_wordbreak)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetLeadingMarginPixelMap()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetLeadingMarginPixelMap(OH_ArkUI_ParagraphStyle* paragraphStyle, struct OH_PixelmapNative* pixelmap)
```
 描述

设置段落样式中的段落缩进的像素图。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| struct [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)* pixelmap | 段落缩进的像素图。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetLeadingMarginPixelMap()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetLeadingMarginPixelMap(const OH_ArkUI_ParagraphStyle* paragraphStyle, struct OH_PixelmapNative** pixelmap)
```
 描述

获取段落样式中的段落缩进的像素图。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| struct [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)** pixelmap | 段落缩进的像素图。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetLeadingMarginWidth()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetLeadingMarginWidth(OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t width)
```
 描述

设置段落样式中的段落缩进宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| uint32_t width | 段落缩进宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetLeadingMarginWidth()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetLeadingMarginWidth(const OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t* width)
```
 描述

获取段落样式中的段落缩进宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| uint32_t* width | 段落缩进宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetLeadingMarginHeight()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetLeadingMarginHeight(OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t height)
```
 描述

设置段落样式中的段落缩进高度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| uint32_t height | 段落缩进高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetLeadingMarginHeight()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetLeadingMarginHeight(const OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t* height)
```
 描述

获取段落样式中的段落缩进高度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| uint32_t* height | 段落缩进高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetParagraphSpacing()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetParagraphSpacing(OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t paragraphSpacing)
```
 描述

设置段落样式中的段落间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| uint32_t paragraphSpacing | 段落间距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetParagraphSpacing()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetParagraphSpacing(const OH_ArkUI_ParagraphStyle* paragraphStyle, uint32_t* paragraphSpacing)
```
 描述

获取段落样式中的段落间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| uint32_t* paragraphSpacing | 段落间距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetTextVerticalAlign()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextVerticalAlign(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextVerticalAlignment verticalAlignment)
```
 描述

设置段落样式中的垂直方向的文本对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textverticalalignment) verticalAlignment | 垂直方向的文本对齐方式。取值为[ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textverticalalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetTextVerticalAlign()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextVerticalAlign(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextVerticalAlignment* verticalAlignment)
```
 描述

获取段落样式中的垂直方向的文本对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textverticalalignment)* verticalAlignment | 垂直方向的文本对齐方式。取值为[ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textverticalalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_RegisterOnDrawLeadingMarginCallback()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_RegisterOnDrawLeadingMarginCallback(OH_ArkUI_ParagraphStyle* paragraphStyle, void(*onDraw)(ArkUI_DrawContext* context, OH_ArkUI_LeadingMarginSpanDrawInfo* drawInfo))
```
 描述

设置段落样式中绘制段落缩进时触发的回调函数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| void(*onDraw)(ArkUI_DrawContext* context | 绘制段落缩进的回调函数。context 图形绘制上下文。drawInfo 自定义绘制信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_RegisterOnGetLeadingMarginCallback()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_RegisterOnGetLeadingMarginCallback(OH_ArkUI_ParagraphStyle* paragraphStyle, float(*leadingMargin)())
```
 描述

设置段落样式中获取段落缩进距离时触发的回调函数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| float(*leadingMargin)() | 获取段落缩进距离时触发的回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_SetTextDirection()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_SetTextDirection(OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextDirection textDirection)
```
 描述

设置段落样式中的文本方向。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection) textDirection | 文本方向。取值为[ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ParagraphStyle_GetTextDirection()

```
ArkUI_ErrorCode OH_ArkUI_ParagraphStyle_GetTextDirection(const OH_ArkUI_ParagraphStyle* paragraphStyle, ArkUI_TextDirection* textDirection)
```
 描述

获取段落样式中的文本方向。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)* paragraphStyle | 指向[OH_ArkUI_ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-paragraphstyle)对象的指针。 |
| [ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection)* textDirection | 文本方向。取值为[ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdirection)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_GestureStyle_Create()

```
OH_ArkUI_GestureStyle* OH_ArkUI_GestureStyle_Create()
```
 描述

创建[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_GestureStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |

#### [h2]OH_ArkUI_GestureStyle_Destroy()

```
void OH_ArkUI_GestureStyle_Destroy(OH_ArkUI_GestureStyle* gestureStyle)
```
 描述

释放[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* gestureStyle | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |

#### [h2]OH_ArkUI_GestureStyle_RegisterOnClickCallback()

```
ArkUI_ErrorCode OH_ArkUI_GestureStyle_RegisterOnClickCallback(OH_ArkUI_GestureStyle* gestureStyle, void(*onClick)(ArkUI_NodeEvent*))
```
 描述

设置事件手势样式中的点击事件回调。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* gestureStyle | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |
| void(*onClick)(ArkUI_NodeEvent*) | 点击事件的回调。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_GestureStyle_RegisterOnLongPressCallback()

```
ArkUI_ErrorCode OH_ArkUI_GestureStyle_RegisterOnLongPressCallback(OH_ArkUI_GestureStyle* gestureStyle, void(*onLongPress)(ArkUI_GestureEvent*))
```
 描述

设置事件手势样式中的长按事件回调。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* gestureStyle | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |
| void(*onLongPress)(ArkUI_GestureEvent*) | 长按事件回调。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_GestureStyle_RegisterOnTouchCallback()

```
ArkUI_ErrorCode OH_ArkUI_GestureStyle_RegisterOnTouchCallback(OH_ArkUI_GestureStyle* gestureStyle, void(*onTouch)(ArkUI_NodeEvent*))
```
 描述

设置事件手势样式中的触摸事件回调。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)* gestureStyle | 指向[OH_ArkUI_GestureStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle)对象的指针。 |
| void(*onTouch)(ArkUI_NodeEvent*) | 触摸事件回调。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextShadowStyle_Create()

```
OH_ArkUI_TextShadowStyle* OH_ArkUI_TextShadowStyle_Create()
```
 描述

创建[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_TextShadowStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)* | 指向[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextShadowStyle_Destroy()

```
void OH_ArkUI_TextShadowStyle_Destroy(OH_ArkUI_TextShadowStyle* textShadowStyle)
```
 描述

释放[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)* textShadowStyle | 指向[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextShadowStyle_SetTextShadow()

```
ArkUI_ErrorCode OH_ArkUI_TextShadowStyle_SetTextShadow(OH_ArkUI_TextShadowStyle* textShadowStyle, const OH_ArkUI_ShadowOptions** options, uint32_t length)
```
 描述

设置文本阴影样式的文本阴影选项。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)* textShadowStyle | 指向[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象的指针。 |
| const [OH_ArkUI_ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions)** options | 文本阴影选项，指向[OH_ArkUI_ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions)对象数组的指针。 |
| uint32_t length | 文本阴影选项长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextShadowStyle_GetTextShadow()

```
ArkUI_ErrorCode OH_ArkUI_TextShadowStyle_GetTextShadow(const OH_ArkUI_TextShadowStyle* textShadowStyle, OH_ArkUI_ShadowOptions** shadowOptions, uint32_t shadowOptionsSize, uint32_t* writeLength)
```
 描述

获取文本阴影样式的文本阴影选项。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)* textShadowStyle | 指向[OH_ArkUI_TextShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle)对象的指针。 |
| [OH_ArkUI_ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions)** shadowOptions | 文本阴影选项，指向[OH_ArkUI_ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions)对象数组的指针。 |
| uint32_t shadowOptionsSize | 阴影选项的缓冲区大小。 |
| uint32_t* writeLength | 文本阴影样式中实际的文本阴影选项数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_DecorationStyle_Create()

```
OH_ArkUI_DecorationStyle* OH_ArkUI_DecorationStyle_Create()
```
 描述

创建[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_DecorationStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_decorationstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |

#### [h2]OH_ArkUI_DecorationStyle_Destroy()

```
void OH_ArkUI_DecorationStyle_Destroy(OH_ArkUI_DecorationStyle* decorationStyle)
```
 描述

释放[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |

#### [h2]OH_ArkUI_DecorationStyle_SetTextDecorationType()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetTextDecorationType(OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationType type)
```
 描述

设置文本装饰线样式的装饰线类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| [ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationtype) type | 装饰线类型。取值为[ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationtype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_GetTextDecorationType()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetTextDecorationType(const OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationType* type)
```
 描述

获取文本装饰线样式的装饰线类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| [ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationtype)* type | 装饰线类型。取值为[ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationtype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_SetColor()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetColor(OH_ArkUI_DecorationStyle* decorationStyle, uint32_t color)
```
 描述

设置文本装饰线样式的装饰线颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| uint32_t color | 装饰线颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_GetColor()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetColor(const OH_ArkUI_DecorationStyle* decorationStyle, uint32_t* color)
```
 描述

获取文本装饰线样式的装饰线颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| uint32_t* color | 装饰线颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_SetTextDecorationStyle()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetTextDecorationStyle(OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationStyle style)
```
 描述

设置文本装饰线样式的装饰线样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| [ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationstyle) style | 装饰线样式。取值为[ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_GetTextDecorationStyle()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetTextDecorationStyle(const OH_ArkUI_DecorationStyle* decorationStyle, ArkUI_TextDecorationStyle* style)
```
 描述

获取文本装饰线样式的装饰线样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| [ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationstyle)* style | 装饰线样式。取值为[ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_textdecorationstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_SetThicknessScale()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetThicknessScale(OH_ArkUI_DecorationStyle* decorationStyle, float thicknessScale)
```
 描述

设置文本装饰线样式的装饰线的粗细缩放比例。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| float thicknessScale | 装饰线的粗细缩放比例。取值范围为[0, +∞)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_GetThicknessScale()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetThicknessScale(const OH_ArkUI_DecorationStyle* decorationStyle, float* thicknessScale)
```
 描述

获取文本装饰线样式的装饰线的粗细缩放比例。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| float* thicknessScale | 装饰线的粗细缩放比例。取值范围为[0, +∞)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_SetEnableMultiType()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_SetEnableMultiType(OH_ArkUI_DecorationStyle* decorationStyle, bool enableMultiType)
```
 描述

设置文本装饰线样式中是否开启多装饰线显示。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| bool enableMultiType | 是否开启多装饰线显示。true表示开启，false表示关闭。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_DecorationStyle_GetEnableMultiType()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyle_GetEnableMultiType(const OH_ArkUI_DecorationStyle* decorationStyle, bool* enableMultiType)
```
 描述

获取文本装饰线样式中是否开启多装饰线显示。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)* decorationStyle | 指向[OH_ArkUI_DecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyle)对象的指针。 |
| bool* enableMultiType | 是否开启多装饰线显示。true表示开启，false表示关闭。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_BaselineOffsetStyle_Create()

```
OH_ArkUI_BaselineOffsetStyle* OH_ArkUI_BaselineOffsetStyle_Create()
```
 描述

创建[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_BaselineOffsetStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_baselineoffsetstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)* | 指向[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象的指针。 |

#### [h2]OH_ArkUI_BaselineOffsetStyle_Destroy()

```
void OH_ArkUI_BaselineOffsetStyle_Destroy(OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle)
```
 描述

释放[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)* baselineOffsetStyle | 指向[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象的指针。 |

#### [h2]OH_ArkUI_BaselineOffsetStyle_SetBaselineOffset()

```
ArkUI_ErrorCode OH_ArkUI_BaselineOffsetStyle_SetBaselineOffset(OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle, float baselineOffset)
```
 描述

设置基线偏移量。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)* baselineOffsetStyle | 指向[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象的指针。 |
| float baselineOffset | 基线偏移量，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_BaselineOffsetStyle_GetBaselineOffset()

```
ArkUI_ErrorCode OH_ArkUI_BaselineOffsetStyle_GetBaselineOffset(const OH_ArkUI_BaselineOffsetStyle* baselineOffsetStyle, float* baselineOffset)
```
 描述

获取基线偏移量。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)* baselineOffsetStyle | 指向[OH_ArkUI_BaselineOffsetStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-baselineoffsetstyle)对象的指针。 |
| float* baselineOffset | 基线偏移量，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LetterSpacingStyle_Create()

```
OH_ArkUI_LetterSpacingStyle* OH_ArkUI_LetterSpacingStyle_Create()
```
 描述

创建[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_LetterSpacingStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_letterspacingstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)* | 指向[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象的指针。 |

#### [h2]OH_ArkUI_LetterSpacingStyle_Destroy()

```
void OH_ArkUI_LetterSpacingStyle_Destroy(OH_ArkUI_LetterSpacingStyle* letterSpacingStyle)
```
 描述

释放[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)* letterSpacingStyle | 指向[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象的指针。 |

#### [h2]OH_ArkUI_LetterSpacingStyle_SetLetterSpacing()

```
ArkUI_ErrorCode OH_ArkUI_LetterSpacingStyle_SetLetterSpacing(OH_ArkUI_LetterSpacingStyle* letterSpacingStyle, float letterSpacing)
```
 描述

设置字符间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)* letterSpacingStyle | 指向[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象的指针。 |
| float letterSpacing | 字符间距值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LetterSpacingStyle_GetLetterSpacing()

```
ArkUI_ErrorCode OH_ArkUI_LetterSpacingStyle_GetLetterSpacing(const OH_ArkUI_LetterSpacingStyle* letterSpacingStyle, float* letterSpacing)
```
 描述

获取字符间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)* letterSpacingStyle | 指向[OH_ArkUI_LetterSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-letterspacingstyle)对象的指针。 |
| float* letterSpacing | 字符间距值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineHeightStyle_Create()

```
OH_ArkUI_LineHeightStyle* OH_ArkUI_LineHeightStyle_Create()
```
 描述

创建[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_LineHeightStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |

#### [h2]OH_ArkUI_LineHeightStyle_Destroy()

```
void OH_ArkUI_LineHeightStyle_Destroy(OH_ArkUI_LineHeightStyle* lineHeightStyle)
```
 描述

释放[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |

#### [h2]OH_ArkUI_LineHeightStyle_SetLineHeight()

```
ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_SetLineHeight(OH_ArkUI_LineHeightStyle* lineHeightStyle, float lineHeight)
```
 描述

设置文本行高。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |
| float lineHeight | 固定行高值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineHeightStyle_GetLineHeight()

```
ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_GetLineHeight(const OH_ArkUI_LineHeightStyle* lineHeightStyle, float* lineHeight)
```
 描述

获取文本行高。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |
| float* lineHeight | 固定行高值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineHeightStyle_SetLineHeightMultiple()

```
ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_SetLineHeightMultiple(OH_ArkUI_LineHeightStyle* lineHeightStyle, float lineHeightMultiple)
```
 描述

设置行高样式的行高倍数。

![](./img/note_3.0-zh-cn.png)

- lineHeightMultiple与lineHeight或[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)同时设置时，仅lineHeightMultiple生效，行高为该行最高字体高度与倍数的乘积。
- lineHeightMultiple小于0时不生效，使用lineHeight和[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)设置行高和行间距。
- lineHeight可以通过[OH_ArkUI_LineHeightStyle_SetLineHeight()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_setlineheight)接口设置。
- lineHeightMultiple等于0时等效于设置为1。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |
| float lineHeightMultiple | 行高倍数。取值范围为[0, +∞)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineHeightStyle_GetLineHeightMultiple()

```
ArkUI_ErrorCode OH_ArkUI_LineHeightStyle_GetLineHeightMultiple(const OH_ArkUI_LineHeightStyle* lineHeightStyle, float* lineHeightMultiple)
```
 描述

获取行高样式的行高倍数。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)* lineHeightStyle | 指向[OH_ArkUI_LineHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle)对象的指针。 |
| float* lineHeightMultiple | 行高倍数。取值范围为[0, +∞)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_SetLineSpacingStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_SetLineSpacingStyle(OH_ArkUI_SpanStyle* spanStyle, const OH_ArkUI_LineSpacingStyle* lineSpacingStyle)
```
 描述

设置属性字符串样式对象的行间距样式。

![](./img/note_3.0-zh-cn.png) 此操作会替换[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象中已设置的其他样式。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| const [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SpanStyle_GetLineSpacingStyle()

```
ArkUI_ErrorCode OH_ArkUI_SpanStyle_GetLineSpacingStyle(const OH_ArkUI_SpanStyle* spanStyle, OH_ArkUI_LineSpacingStyle* lineSpacingStyle)
```
 描述

获取属性字符串样式对象的行间距样式。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)* spanStyle | 指向[OH_ArkUI_SpanStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-spanstyle)对象的指针。 |
| [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineSpacingStyle_Create()

```
OH_ArkUI_LineSpacingStyle* OH_ArkUI_LineSpacingStyle_Create()
```
 描述

创建[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象。

![](./img/note_3.0-zh-cn.png) 该对象不再使用时，请及时调用[OH_ArkUI_LineSpacingStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_destroy)销毁。

起始版本： 26.0.0

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |

#### [h2]OH_ArkUI_LineSpacingStyle_Destroy()

```
void OH_ArkUI_LineSpacingStyle_Destroy(OH_ArkUI_LineSpacingStyle* lineSpacingStyle)
```
 描述

释放[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象占用的内存。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |

#### [h2]OH_ArkUI_LineSpacingStyle_SetLineSpacing()

```
ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_SetLineSpacing(OH_ArkUI_LineSpacingStyle* lineSpacingStyle, float lineSpacing)
```
 描述

设置行间距。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |
| float lineSpacing | 行间距值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineSpacingStyle_GetLineSpacing()

```
ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_GetLineSpacing(const OH_ArkUI_LineSpacingStyle* lineSpacingStyle, float* lineSpacing)
```
 描述

查询行间距。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |
| float* lineSpacing | 行间距值，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineSpacingStyle_SetOnlyBetweenLines()

```
ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_SetOnlyBetweenLines(OH_ArkUI_LineSpacingStyle* lineSpacingStyle, bool onlyBetweenLines)
```
 描述

设置行间距是否只在行间生效。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |
| bool onlyBetweenLines | 行间距是否只在行间生效。true表示仅在行与行之间添加间距，首行上方、尾行下方无额外间距，false表示所有行之间、首行上方、尾行下方均添加完整行间距。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LineSpacingStyle_GetOnlyBetweenLines()

```
ArkUI_ErrorCode OH_ArkUI_LineSpacingStyle_GetOnlyBetweenLines(const OH_ArkUI_LineSpacingStyle* lineSpacingStyle, bool* onlyBetweenLines)
```
 描述

查询行间距是否只在行间生效。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)* lineSpacingStyle | 指向[OH_ArkUI_LineSpacingStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle)对象的指针。 |
| bool* onlyBetweenLines | 行间距是否只在行间生效。true表示仅在行与行之间添加间距，首行上方、尾行下方无额外间距，false表示所有行之间、首行上方、尾行下方均添加完整行间距。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_BackgroundColorStyle_Create()

```
OH_ArkUI_BackgroundColorStyle* OH_ArkUI_BackgroundColorStyle_Create()
```
 描述

创建[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_BackgroundColorStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |

#### [h2]OH_ArkUI_BackgroundColorStyle_Destroy()

```
void OH_ArkUI_BackgroundColorStyle_Destroy(OH_ArkUI_BackgroundColorStyle* style)
```
 描述

释放[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* style | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |

#### [h2]OH_ArkUI_BackgroundColorStyle_SetColor()

```
ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_SetColor(OH_ArkUI_BackgroundColorStyle* style, uint32_t color)
```
 描述

设置背景颜色样式的背景色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* style | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |
| uint32_t color | 背景颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_BackgroundColorStyle_GetColor()

```
ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_GetColor(const OH_ArkUI_BackgroundColorStyle* style, uint32_t* color)
```
 描述

获取背景颜色样式的背景色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* style | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |
| uint32_t* color | 背景颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_BackgroundColorStyle_SetRadius()

```
ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_SetRadius(OH_ArkUI_BackgroundColorStyle* style, float topLeft, float topRight, float bottomLeft, float bottomRight)
```
 描述

设置背景颜色样式的背景圆角。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* style | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |
| float topLeft | 左上角圆角半径，单位为vp。 |
| float topRight | 右上角圆角半径，单位为vp。 |
| float bottomLeft | 左下角圆角半径，单位为vp。 |
| float bottomRight | 右下角圆角半径，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_BackgroundColorStyle_GetRadius()

```
ArkUI_ErrorCode OH_ArkUI_BackgroundColorStyle_GetRadius(const OH_ArkUI_BackgroundColorStyle* style, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)
```
 描述

获取背景颜色样式的背景圆角。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)* style | 指向[OH_ArkUI_BackgroundColorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle)对象的指针。 |
| float* topLeft | 左上角圆角半径，单位为vp。 |
| float* topRight | 右上角圆角半径，单位为vp。 |
| float* bottomLeft | 左下角圆角半径，单位为vp。 |
| float* bottomRight | 右下角圆角半径，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_UrlStyle_Create()

```
OH_ArkUI_UrlStyle* OH_ArkUI_UrlStyle_Create()
```
 描述

创建[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_UrlStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)* | 指向[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象的指针。 |

#### [h2]OH_ArkUI_UrlStyle_Destroy()

```
void OH_ArkUI_UrlStyle_Destroy(OH_ArkUI_UrlStyle* style)
```
 描述

释放[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)* style | 指向[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象的指针。 |

#### [h2]OH_ArkUI_UrlStyle_SetUrl()

```
ArkUI_ErrorCode OH_ArkUI_UrlStyle_SetUrl(OH_ArkUI_UrlStyle* style, const char* url)
```
 描述

设置超链接样式的超链接内容。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)* style | 指向[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象的指针。 |
| const char* url | 超链接内容。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_UrlStyle_GetUrl()

```
ArkUI_ErrorCode OH_ArkUI_UrlStyle_GetUrl(const OH_ArkUI_UrlStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取超链接样式的超链接内容。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)* style | 指向[OH_ArkUI_UrlStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle)对象的指针。 |
| char* buffer | 超链接内容写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时，表示实际写入缓冲区的字符的数量。 返回[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时，表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_UserDataSpan_Create()

```
OH_ArkUI_UserDataSpan* OH_ArkUI_UserDataSpan_Create()
```
 描述

创建[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_UserDataSpan_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_userdataspan_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)* | 指向[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象的指针。 |

#### [h2]OH_ArkUI_UserDataSpan_Destroy()

```
void OH_ArkUI_UserDataSpan_Destroy(OH_ArkUI_UserDataSpan* userDataSpan)
```
 描述

释放[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)* userDataSpan | 指向[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象的指针。 |

#### [h2]OH_ArkUI_UserDataSpan_SetUserData()

```
ArkUI_ErrorCode OH_ArkUI_UserDataSpan_SetUserData(OH_ArkUI_UserDataSpan* userDataSpan, void* userData)
```
 描述

设置用户数据Span样式中的用户数据。

![](./img/note_3.0-zh-cn.png) 该接口允许开发者将任意类型的自定义数据关联到当前的样式对象上。用于在属性字符串中存储用户数据。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)* userDataSpan | 指向[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象的指针。 |
| void* userData | 用户数据，生命周期需由开发者自行管理。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_UserDataSpan_GetUserData()

```
ArkUI_ErrorCode OH_ArkUI_UserDataSpan_GetUserData(const OH_ArkUI_UserDataSpan* userDataSpan, void** userData)
```
 描述

获取用户数据Span样式中的用户数据。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)* userDataSpan | 指向[OH_ArkUI_UserDataSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-userdataspan)对象的指针。 |
| void** userData | 用户数据。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_CustomSpan_Create()

```
OH_ArkUI_CustomSpan* OH_ArkUI_CustomSpan_Create()
```
 描述

创建[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_CustomSpan_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_customspan_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |

#### [h2]OH_ArkUI_CustomSpan_Destroy()

```
void OH_ArkUI_CustomSpan_Destroy(OH_ArkUI_CustomSpan* customSpan)
```
 描述

释放[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* customSpan | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |

#### [h2]OH_ArkUI_CustomSpan_RegisterOnMeasureCallback()

```
ArkUI_ErrorCode OH_ArkUI_CustomSpan_RegisterOnMeasureCallback(OH_ArkUI_CustomSpan* customSpan, ArkUI_CustomSpanMetrics*(*onMeasure)(float))
```
 描述

设置自定义绘制Span获取尺寸大小时的回调函数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* customSpan | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |
| ArkUI_CustomSpanMetrics*(*onMeasure)(float) | 获取尺寸大小的回调函数。fontSize 组件中的文本字体大小，单位为fp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_CustomSpan_RegisterOnDrawCallback()

```
ArkUI_ErrorCode OH_ArkUI_CustomSpan_RegisterOnDrawCallback(OH_ArkUI_CustomSpan* customSpan, void(*onDraw)(ArkUI_DrawContext*, ArkUI_CustomSpanDrawInfo*))
```
 描述

注册自定义绘制Span绘制时的回调函数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)* customSpan | 指向[OH_ArkUI_CustomSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-customspan)对象的指针。 |
| void(*onDraw)(ArkUI_DrawContext* | 绘制时的回调函数。context 图形绘制上下文。drawInfo 自定义绘制Span的绘制信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_Create()

```
OH_ArkUI_ImageAttachment* OH_ArkUI_ImageAttachment_Create()
```
 描述

创建[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象。

![](./img/note_3.0-zh-cn.png) 当该对象不再使用时，调用[OH_ArkUI_ImageAttachment_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_destroy)销毁它。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |

#### [h2]OH_ArkUI_ImageAttachment_Destroy()

```
void OH_ArkUI_ImageAttachment_Destroy(OH_ArkUI_ImageAttachment* imageAttachment)
```
 描述

释放[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象占用的内存。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |

#### [h2]OH_ArkUI_ImageAttachment_SetPixelMap()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetPixelMap(OH_ArkUI_ImageAttachment* imageAttachment, struct OH_PixelmapNative* pixelmap)
```
 描述

设置图片样式中的图片数据源。

![](./img/note_3.0-zh-cn.png) 与[OH_ArkUI_ImageAttachment_SetResource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setresource)同时设置时，后设置的生效。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| struct [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)* pixelmap | 图片数据源。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetPixelMap()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetPixelMap(const OH_ArkUI_ImageAttachment* imageAttachment, struct OH_PixelmapNative** pixelmap)
```
 描述

获取图片样式中的图片数据源。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| struct [OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)** pixelmap | 图片数据源。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetResource()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetResource(OH_ArkUI_ImageAttachment* imageAttachment, const char* resource)
```
 描述

设置图片样式中的图片资源地址。

![](./img/note_3.0-zh-cn.png) 与[OH_ArkUI_ImageAttachment_SetPixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setpixelmap)同时设置时，后设置的生效。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| const char* resource | 图片资源地址。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetResource()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetResource(const OH_ArkUI_ImageAttachment* imageAttachment, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取图片样式中的图片资源地址。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| char* buffer | 图片资源地址字符串写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区大小。 |
| int32_t* writeLength | 返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时，表示实际写入缓冲区的字符串长度。 返回[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode)时，表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_ImageAttachment_SetSizeWidth()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSizeWidth(OH_ArkUI_ImageAttachment* imageAttachment, float width)
```
 描述

设置图片样式中的图片宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float width | 图片宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetSizeWidth()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSizeWidth(const OH_ArkUI_ImageAttachment* imageAttachment, float* width)
```
 描述

获取图片样式中的图片宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float* width | 图片宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetSizeHeight()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSizeHeight(OH_ArkUI_ImageAttachment* imageAttachment, float height)
```
 描述

设置图片样式中的图片高度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float height | 图片高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetSizeHeight()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSizeHeight(const OH_ArkUI_ImageAttachment* imageAttachment, float* height)
```
 描述

获取图片样式中的图片高度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float* height | 图片高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetVerticalAlign()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetVerticalAlign(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ImageSpanAlignment verticalAlign)
```
 描述

设置图片样式中的图片对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_ImageSpanAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagespanalignment) verticalAlign | 图片对齐方式。取值为[ArkUI_ImageSpanAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagespanalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetVerticalAlign()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetVerticalAlign(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ImageSpanAlignment* verticalAlign)
```
 描述

获取图片样式中的图片对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_ImageSpanAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagespanalignment)* verticalAlign | 图片对齐方式。取值为[ArkUI_ImageSpanAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_imagespanalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetObjectFit()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetObjectFit(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ObjectFit objectFit)
```
 描述

设置图片样式中的图片缩放类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_ObjectFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_objectfit) objectFit | 图片缩放类型。取值为[ArkUI_ObjectFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_objectfit)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetObjectFit()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetObjectFit(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_ObjectFit* objectFit)
```
 描述

获取图片样式中的图片缩放类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_ObjectFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_objectfit)* objectFit | 图片缩放类型。取值为[ArkUI_ObjectFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_objectfit)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetMargin()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetMargin(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin margin)
```
 描述

设置图片样式中的图片外边距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_Margin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-margin) margin | 图片外边距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetMargin()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetMargin(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin* margin)
```
 描述

获取图片样式中的图片外边距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_Margin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-margin)* margin | 图片外边距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetPadding()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetPadding(OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin padding)
```
 描述

设置图片样式中的图片内边距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_Margin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-margin) padding | 图片内边距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetPadding()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetPadding(const OH_ArkUI_ImageAttachment* imageAttachment, ArkUI_Margin* padding)
```
 描述

获取图片样式中的图片内边距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [ArkUI_Margin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-margin)* padding | 图片内边距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetBorderRadiuses()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetBorderRadiuses(OH_ArkUI_ImageAttachment* imageAttachment, float topLeft, float topRight, float bottomLeft, float bottomRight)
```
 描述

设置图片样式中的图片圆角。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float topLeft | 左上角圆角半径，单位为vp。 |
| float topRight | 右上角圆角半径，单位为vp。 |
| float bottomLeft | 左下角圆角半径，单位为vp。 |
| float bottomRight | 右下角圆角半径，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetBorderRadiuses()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetBorderRadiuses(const OH_ArkUI_ImageAttachment* imageAttachment, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)
```
 描述

获取图片样式中的图片圆角。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float* topLeft | 左上角圆角半径，单位为vp。 |
| float* topRight | 右上角圆角半径，单位为vp。 |
| float* bottomLeft | 左下角圆角半径，单位为vp。 |
| float* bottomRight | 右下角圆角半径，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetColorFilter()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetColorFilter(OH_ArkUI_ImageAttachment* imageAttachment, const float* colorFilter, uint32_t size)
```
 描述

设置图片样式中的图片颜色过滤器。

![](./img/note_3.0-zh-cn.png) 与[OH_ArkUI_ImageAttachment_SetDrawingColorFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setdrawingcolorfilter)同时设置时，后设置的生效。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| const float* colorFilter | 图片颜色过滤器。 |
| uint32_t size | 过滤器数组大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetColorFilter()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetColorFilter(const OH_ArkUI_ImageAttachment* imageAttachment, float** colorFilter, uint32_t colorFilterSize, uint32_t* writeLength)
```
 描述

获取图片样式中的图片颜色过滤器。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| float** colorFilter | 图片颜色过滤器写入内存的缓冲区，内存空间需由开发者分配。 |
| uint32_t colorFilterSize | 缓冲区大小。 |
| uint32_t* writeLength | 图片颜色过滤器数组的实际大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 缓冲区大小不足。 |

#### [h2]OH_ArkUI_ImageAttachment_SetDrawingColorFilter()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetDrawingColorFilter(OH_ArkUI_ImageAttachment* imageAttachment, const OH_Drawing_ColorFilter* drawingColorFilter)
```
 描述

设置图片样式中的图片颜色滤镜。

![](./img/note_3.0-zh-cn.png) 与[OH_ArkUI_ImageAttachment_SetColorFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setcolorfilter)同时设置时，后设置的生效。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| const [OH_Drawing_ColorFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-colorfilter)* drawingColorFilter | 图片颜色滤镜。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetDrawingColorFilter()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetDrawingColorFilter(const OH_ArkUI_ImageAttachment* imageAttachment, OH_Drawing_ColorFilter* drawingColorFilter)
```
 描述

获取图片样式中的图片颜色滤镜。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| [OH_Drawing_ColorFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-colorfilter)* drawingColorFilter | 图片颜色滤镜。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetSyncLoad()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSyncLoad(OH_ArkUI_ImageAttachment* imageAttachment, bool syncLoad)
```
 描述

设置图片样式中是否同步加载图片。

![](./img/note_3.0-zh-cn.png) 此属性仅在通过[OH_ArkUI_ImageAttachment_SetResource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setresource)设置图片源为资源地址时生效。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| bool syncLoad | 是否同步加载图片。true表示同步加载；false表示异步加载。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetSyncLoad()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSyncLoad(const OH_ArkUI_ImageAttachment* imageAttachment, bool* syncLoad)
```
 描述

获取图片样式中是否同步加载图片。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| bool* syncLoad | 是否同步加载图片。true表示同步加载；false表示异步加载。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_SetSupportSvg()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_SetSupportSvg(OH_ArkUI_ImageAttachment* imageAttachment, bool supportSvg)
```
 描述

设置图片样式中是否开启SVG标签解析能力增强功能。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| bool supportSvg | 是否开启SVG标签解析能力增强功能。true表示开启；false表示不开启。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_ImageAttachment_GetSupportSvg()

```
ArkUI_ErrorCode OH_ArkUI_ImageAttachment_GetSupportSvg(const OH_ArkUI_ImageAttachment* imageAttachment, bool* supportSvg)
```
 描述

获取图片样式中是否开启SVG标签解析能力增强功能。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)* imageAttachment | 指向[OH_ArkUI_ImageAttachment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment)对象的指针。 |
| bool* supportSvg | 是否开启SVG标签解析能力增强功能。true表示开启；false表示未开启。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextEditorChangeEvent_GetRangeBefore()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorChangeEvent_GetRangeBefore(const OH_ArkUI_TextEditorChangeEvent* event, uint32_t* start, uint32_t* end)
```
 描述

获取文本变化信息中的待替换内容的范围。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const OH_ArkUI_TextEditorChangeEvent* event | 指向[OH_ArkUI_TextEditorChangeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorchangeevent)对象的指针。 |
| uint32_t* start | 待替换内容范围的起始索引。 |
| uint32_t* end | 待替换内容范围的结束索引。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextEditorChangeEvent_GetReplacementStyledString()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorChangeEvent_GetReplacementStyledString(const OH_ArkUI_TextEditorChangeEvent* event, ArkUI_StyledString_Descriptor* descriptor)
```
 描述

获取文本变化信息中的用于替换的属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const OH_ArkUI_TextEditorChangeEvent* event | 指向[OH_ArkUI_TextEditorChangeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorchangeevent)对象的指针。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextEditorChangeEvent_GetPreviewStyledString()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorChangeEvent_GetPreviewStyledString(const OH_ArkUI_TextEditorChangeEvent* event, ArkUI_StyledString_Descriptor* descriptor)
```
 描述

获取文本变化信息中的预览内容属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const OH_ArkUI_TextEditorChangeEvent* event | 指向[OH_ArkUI_TextEditorChangeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorchangeevent)对象的指针。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 操作成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_Dispose()

```
void OH_ArkUI_TextLayoutManager_Dispose(ArkUI_TextLayoutManager* layoutManager)
```
 描述

释放被文本布局管理器对象占据的内存。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向ArkUI_TextLayoutManager对象的指针。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetLineCount()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetLineCount(ArkUI_TextLayoutManager* layoutManager, int32_t* outLineCount)
```
 描述

获取文本行数。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向ArkUI_TextLayoutManager对象的指针。 |
| int32_t* outLineCount | 文本行数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetRectsForRange()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetRectsForRange(ArkUI_TextLayoutManager* layoutManager, int32_t start, int32_t end, OH_Drawing_RectWidthStyle widthStyle, OH_Drawing_RectHeightStyle heightStyle, OH_Drawing_TextBox** outTextBoxes)
```
 描述

获取给定的矩形区域宽度样式以及高度样式的规格下，文本中任意区间范围内的字符或占位符所占的绘制区域信息。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向ArkUI_TextLayoutManager对象的指针。 |
| int32_t start | 起始位置索引，start取值需要大于等于0，否则会返回参数异常。 |
| int32_t end | 结束位置索引，end取值需要大于等于start，否则会返回参数异常。 |
| [OH_Drawing_RectWidthStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h#oh_drawing_rectwidthstyle) widthStyle | 矩形区域宽度样式。 |
| [OH_Drawing_RectHeightStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h#oh_drawing_rectheightstyle) heightStyle | 矩形区域高度样式。 |
| [OH_Drawing_TextBox](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-textbox)** outTextBoxes | 指向OH_Drawing_TextBox对象的二级指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetGlyphPositionAtCoordinate()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetGlyphPositionAtCoordinate(ArkUI_TextLayoutManager* layoutManager, double dx, double dy, OH_Drawing_PositionAndAffinity** outPos)
```
 描述

获取距离给定坐标最近的字形的位置信息。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向ArkUI_TextLayoutManager对象的指针。 |
| double dx | 相对于控件的x坐标，单位为px。 |
| double dy | 相对于控件的y坐标，单位为px。 |
| [OH_Drawing_PositionAndAffinity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-positionandaffinity)** outPos | 指向OH_Drawing_PositionAndAffinity对象的二级指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetLineMetrics()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetLineMetrics(ArkUI_TextLayoutManager* layoutManager, int32_t lineNumber, OH_Drawing_LineMetrics* outMetrics)
```
 描述

获取指定行的行信息、文本样式信息、以及字体属性信息。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向ArkUI_TextLayoutManager对象的指针。 |
| int32_t lineNumber | 指定行的行号索引，行号索引从0开始计数，lineNumber小于0或大于等于文本行数时会返回参数异常。 |
| [OH_Drawing_LineMetrics](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-linemetrics)* outMetrics | 指向OH_Drawing_LineMetrics对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetCharacterPositionAtCoordinate()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetCharacterPositionAtCoordinate(ArkUI_TextLayoutManager* layoutManager, double dx, double dy, OH_Drawing_PositionAndAffinity** outPos)
```
 描述

获取距离指定坐标最近的字符的位置信息。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向[ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)对象的指针。 |
| double dx | 相对于控件的x坐标，单位为px。 |
| double dy | 相对于控件的y坐标，单位为px。 |
| [OH_Drawing_PositionAndAffinity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-positionandaffinity)** outPos | 指向[OH_Drawing_PositionAndAffinity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-positionandaffinity)对象的二级指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetGlyphRangeForCharacterRange()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetGlyphRangeForCharacterRange(ArkUI_TextLayoutManager* layoutManager, OH_Drawing_Range* charRange, OH_Drawing_Range** outGlyphRange,
OH_Drawing_Range** outActualCharRange);
```
 描述

获取由指定字符索引范围所生成的字形索引范围以及实际的字符索引范围。例如文本为"世界Hello"，其中文本"世"的字形索引范围为[0, 1]，一个汉字占三个字符，所以其对应的字符索引范围为[0, 3]。如果指定的字符索引范围是[0, 1]，但无法解析出三分之一个汉字，所以实际的字符索引范围是[0, 3]。outGlyphRange、outActualCharRange返回的[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象在使用完成后，需通过[OH_Drawing_ReleaseRangeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h#oh_drawing_releaserangebuffer)释放。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向[ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)对象的指针。 |
| [OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)* charRange | 指向[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象的指针，表示字符索引范围。 |
| [OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)** outGlyphRange | 指向[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象的二级指针，表示字形索引范围。 |
| [OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)** outActualCharRange | 指向[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象的二级指针，表示实际的字符索引范围。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextLayoutManager_GetCharacterRangeForGlyphRange()

```
ArkUI_ErrorCode OH_ArkUI_TextLayoutManager_GetCharacterRangeForGlyphRange(ArkUI_TextLayoutManager* layoutManager, OH_Drawing_Range* glyphRange, OH_Drawing_Range** outCharRange,
OH_Drawing_Range** outActualGlyphRange)
```
 描述

获取由指定字形索引范围所生成的字符索引范围以及实际的字形索引范围。例如文本为"世界Hello"，其字形索引范围为[0, 7]，一个汉字占三个字符，所以其对应的字符索引范围为[0, 11]。如果指定的索引范围是[0, 11]，但字形一共只有7个，所以实际的字形索引范围是[0, 7]。outCharRange、outActualGlyphRange返回的[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象在使用完成后，需通过[OH_Drawing_ReleaseRangeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-text-typography-h#oh_drawing_releaserangebuffer)释放。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)* layoutManager | 指向[ArkUI_TextLayoutManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textlayoutmanager)对象的指针。 |
| [OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)* glyphRange | 指向[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象的指针，表示字形索引范围。 |
| [OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)** outCharRange | 指向[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象的二级指针，表示字符索引范围。 |
| [OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)** outActualGlyphRange | 指向[OH_Drawing_Range](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-range)对象的二级指针，表示实际的字形索引范围。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_errorcode) 函数参数异常。 |
