---
title: "使用Text组件"
original_url: /docs/dev/app-dev/application-framework/ndk-use-text-component
format: md
upstream_id: dev/app-dev/application-framework/ndk-use-text-component
last_sync: 2026-06-07
sync_hash: 65275c13
---
[ArkUI](/docs/dev/app-dev/application-framework/arkui/arkui-overview)开发框架在[NDK](/docs/dev/ndk-dev/ndk-development-overview)接口中提供了Text组件，用于显示文本内容。Text组件支持丰富的样式设置，包括字体、颜色、对齐方式、文字效果等，还支持多种子组件，如[Span](#添加span)、[ImageSpan](#添加imagespan)、[StyledString](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string)等，用于实现复杂的文本显示效果。

![](./img/c014ba98.png)

* 本篇示例仅提供核心接口的调用方法，完整的示例工程请参考[native\_node\_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/native_node_sample)。
* 开发前需要先接入ArkTS页面，具体请参考[接入ArkTS页面](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/ndk-access-the-arkts-page)。

## 创建文本组件

Text组件是显示文本内容的基础组件，支持多种样式设置和子组件。

### 创建基础文本

使用[createNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#createnode)接口创建Text组件，节点类型为ARKUI\_NODE\_TEXT。

```
ArkUI_NodeHandle text = Manager::nodeAPI_->createNode(ARKUI_NODE_TEXT);
ArkUI_NumberValue textWidth[] = {{.f32 = VALUE_300}};
ArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = VALUE_1};
Manager::nodeAPI_->setAttribute(text, NODE_WIDTH, &textWidthItem);
ArkUI_NumberValue textHeight[] = {{.f32 = VALUE_30}};
ArkUI_AttributeItem textHeightItem = {.value = textHeight, .size = VALUE_1};
Manager::nodeAPI_->setAttribute(text, NODE_HEIGHT, &textHeightItem);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1338-L1346" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置文本内容

通过[NODE\_TEXT\_CONTENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_content)属性设置Text组件的基本文本内容。

```
const char *textContent = "this is text 2 this is text 2 this is text 2!!!! ";
ArkUI_AttributeItem contentItem = {.string = textContent};
Manager::nodeAPI_->setAttribute(text2, NODE_TEXT_CONTENT, &contentItem);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1054-L1058" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


## 设置文本样式

Text组件支持丰富的文本样式设置，包括字体、颜色、对齐方式等。

### 设置字体属性

通过如下属性设置字体大小、粗细、样式等基本属性。

**表1** 字体属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_FONT\_SIZE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_font_size) | 设置字体大小。 |
| [NODE\_FONT\_WEIGHT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_font_weight) | 设置字体粗细。 |
| [NODE\_FONT\_STYLE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_font_style) | 设置字体样式。 |
| [NODE\_FONT\_FAMILY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_font_family) | 设置字体列表。 |

```
// 设置文字大小：28、文字颜色：0xFFFF0000（红色）
ArkUI_NumberValue fontSize[] = {{.f32 = VALUE_28}};
ArkUI_AttributeItem fontSizeItem = {.value = fontSize, .size = VALUE_1};
Manager::nodeAPI_->setAttribute(text2, NODE_FONT_SIZE, &fontSizeItem);
ArkUI_NumberValue fontColor = {.u32 = 0xFFFF0000};
ArkUI_AttributeItem fontColorItem = {.value = &fontColor, .size = VALUE_1};
Manager::nodeAPI_->setAttribute(text2, NODE_FONT_COLOR, &fontColorItem);

// 字体样式：斜体样式（ARKUI_FONT_STYLE_ITALIC）
ArkUI_NumberValue fontStyleVal = {.i32 = ARKUI_FONT_STYLE_ITALIC};
ArkUI_AttributeItem fontStyleItem = {&fontStyleVal, VALUE_1};
Manager::nodeAPI_->setAttribute(text2, NODE_FONT_STYLE, &fontStyleItem);

// 字重：Bold（ARKUI_FONT_WEIGHT_W800）
ArkUI_NumberValue fontWeightVal = {.i32 = ARKUI_FONT_WEIGHT_W800};
ArkUI_AttributeItem textWeightItem = {.value = &fontWeightVal, .size = 1};
Manager::nodeAPI_->setAttribute(text2, NODE_FONT_WEIGHT, &textWeightItem);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1060-L1078" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置文本对齐

通过如下属性设置文本的水平对齐方式和垂直对齐方式。

**表2** 文本对齐属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_ALIGN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_align) | 设置文本水平对齐。 |
| [NODE\_TEXT\_VERTICAL\_ALIGN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_vertical_align) | 设置文本垂直对齐。 |

* 设置文本水平对齐。

  ```
  // 水平对齐：居中对齐（ARKUI_TEXT_ALIGNMENT_CENTER）
  ArkUI_NumberValue intVal_0 = {.i32 = ARKUI_TEXT_ALIGNMENT_CENTER};
  ArkUI_AttributeItem textAlignItem = {&intVal_0, VALUE_1};
  Manager::nodeAPI_->setAttribute(text14, NODE_TEXT_ALIGN, &textAlignItem);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1541-L1546" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>

* 设置文本垂直对齐。

  ```
  // 垂直对齐：基线对齐（ARKUI_TEXT_VERTICAL_ALIGNMENT_BASELINE）
  ArkUI_NumberValue vAlignVal = {.i32 = ARKUI_TEXT_VERTICAL_ALIGNMENT_BASELINE};
  ArkUI_AttributeItem vAlignItem = {&vAlignVal, VALUE_1};
  Manager::nodeAPI_->setAttribute(text3, NODE_TEXT_VERTICAL_ALIGN, &vAlignItem);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1186-L1191" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置文本装饰线和效果

通过如下属性设置文本装饰线、阴影等效果。

**表3** 文本装饰线和效果属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_DECORATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_decoration) | 设置文本装饰线。 |
| [NODE\_TEXT\_TEXT\_SHADOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_text_shadow) | 设置文字阴影效果。 |

* 设置文本装饰线。

  ```
  // 设置文本装饰线类型：下划线装饰（ARKUI_TEXT_DECORATION_TYPE_UNDERLINE）。文本装饰线样式：单实线（ARKUI_TEXT_DECORATION_STYLE_SOLID）。
  ArkUI_NumberValue textDecoration[] = {
      {.i32 = ARKUI_TEXT_DECORATION_TYPE_UNDERLINE}, {.u32 = 0xFFFF0000}, {.i32 = ARKUI_TEXT_DECORATION_STYLE_SOLID}};
  ArkUI_AttributeItem textDecorationItem = {.value = textDecoration, .size = VALUE_3};
  Manager::nodeAPI_->setAttribute(text3, NODE_TEXT_DECORATION, &textDecorationItem);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1151-L1157" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>

* 设置文字阴影效果。

  ```
  // 文字阴影效果属性
  ArkUI_NumberValue textShadow[] = {
      {.f32 = VALUE_5}, {.i32 = ARKUI_SHADOW_TYPE_BLUR}, {.u32 = 0xFF0000FF}, {.f32 = VALUE_5}, {.f32 = VALUE_5}};
  ArkUI_AttributeItem textShadowItem = {textShadow, VALUE_5};
  Manager::nodeAPI_->setAttribute(text4, NODE_TEXT_TEXT_SHADOW, &textShadowItem);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1217-L1223" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


## 设置文本布局

Text组件支持多种文本布局设置，包括换行、行高、省略等。

### 设置文本换行

通过[NODE\_TEXT\_WORD\_BREAK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_word_break)属性设置文本的断行规则。

```
// 设置断行规则：任意字符间断行
ArkUI_NumberValue wordBreakVal = {.i32 = ARKUI_WORD_BREAK_BREAK_ALL};
ArkUI_AttributeItem wordBreakItem = {&wordBreakVal, VALUE_1};
Manager::nodeAPI_->setAttribute(text3, NODE_TEXT_WORD_BREAK, &wordBreakItem);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1159-L1164" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置行高相关属性

通过如下属性设置文本的行高、行高倍数等属性。

从API version 22开始，Text组件支持使用倍数模式设置行高。

**表5** 行高属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_LINE\_HEIGHT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_line_height) | 设置行高。 |
| [NODE\_TEXT\_LINE\_HEIGHT\_MULTIPLE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_line_height_multiple) | 设置行高倍数。从API version 22开始支持。 |
| [NODE\_TEXT\_HALF\_LEADING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_half_leading) | 设置文本垂直居中。 |

* 设置文本行高。

  ```
  // 设置文本行高
  ArkUI_NumberValue lineHeight = {.f32 = VALUE_50};
  ArkUI_AttributeItem lineHeightItem = {&lineHeight, VALUE_1};
  Manager::nodeAPI_->setAttribute(text4, NODE_TEXT_LINE_HEIGHT, &lineHeightItem);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1200-L1205" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>

* 设置行高倍数。

  ```
  // 设置行高倍数
  ArkUI_NumberValue value[] = {{.f32 = 2.0}};
  ArkUI_AttributeItem item = {value, sizeof(value)/ sizeof(ArkUI_NumberValue)};
  Manager::nodeAPI_->setAttribute(text9, NODE_TEXT_LINE_HEIGHT_MULTIPLE, &item);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1410-L1415" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置文本省略

通过如下属性设置文本溢出时的省略模式。

**表6** 文本省略属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_MAX\_LINES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_max_lines) | 设置最大行数。 |
| [NODE\_TEXT\_OVERFLOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_overflow) | 设置文本溢出方式。 |
| [NODE\_TEXT\_ELLIPSIS\_MODE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_ellipsis_mode) | 设置省略模式。 |

```
// 设置最大行数
ArkUI_NumberValue maxLinesValue[] = {{.i32 = VALUE_3} };
ArkUI_AttributeItem maxLinesItem = {maxLinesValue, VALUE_1};
Manager::nodeAPI_->setAttribute(text20, NODE_TEXT_MAX_LINES, &maxLinesItem);

// 设置文本溢出：省略号
ArkUI_NumberValue textOverFlowValue[] = { {.i32 = ARKUI_TEXT_OVERFLOW_ELLIPSIS} };
ArkUI_AttributeItem textOverFlowItem = {textOverFlowValue, VALUE_1};
Manager::nodeAPI_->setAttribute(text20, NODE_TEXT_OVERFLOW, &textOverFlowItem);

// 设置省略模式：省略行首内容
ArkUI_NumberValue ellipsisModeValue1[] = { {.i32 = ARKUI_ELLIPSIS_MODE_MULTILINE_START} };
ArkUI_AttributeItem ellipsisModeItem1 = {ellipsisModeValue1, VALUE_1};
Manager::nodeAPI_->setAttribute(text20, NODE_TEXT_ELLIPSIS_MODE, &ellipsisModeItem1);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1682-L1697" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置文本结尾空格优化

通过如下属性设置每行结尾空格是否优化。从API version 20开始，Text组件支持设置每行结尾空格是否优化处理。

**表8** 每行结尾空格处理属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_OPTIMIZE\_TRAILING\_SPACE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_optimize_trailing_space) | 设置每行结尾空格是否优化。从API version 20开始支持。 |

```
ArkUI_NumberValue optimizeValue = {.i32 = true};
ArkUI_AttributeItem optimizeTrailingSpaceItem = {&optimizeValue, VALUE_1};
Manager::nodeAPI_->setAttribute(text14, NODE_TEXT_OPTIMIZE_TRAILING_SPACE, &optimizeTrailingSpaceItem);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1548-L1552" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置首行缩进和标点压缩

通过如下属性设置首行缩进和行首标点压缩。从API version 23开始，Text组件支持设置行首标点压缩。

**表7** 首行缩进和标点压缩属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_INDENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_indent) | 设置首行缩进。 |
| [NODE\_TEXT\_COMPRESS\_LEADING\_PUNCTUATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_compress_leading_punctuation) | 设置行首标点压缩。从API version 23开始支持。 |

* 设置首行缩进。

  ```
  // 设置首行缩进
  ArkUI_NumberValue indentVal = {.f32 = VALUE_30};
  ArkUI_AttributeItem indentItem = {&indentVal, VALUE_1};
  Manager::nodeAPI_->setAttribute(text3, NODE_TEXT_INDENT, &indentItem);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1127-L1132" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>

* 设置行首标点压缩。

  ```
  // 设置行首标点压缩
  ArkUI_NumberValue value0[] = {{.i32 = true}};
  ArkUI_AttributeItem item0 = {value0, sizeof(value0)/ sizeof(ArkUI_NumberValue)};
  Manager::nodeAPI_->setAttribute(text11, NODE_TEXT_COMPRESS_LEADING_PUNCTUATION, &item0);
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1448-L1453" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


## 添加子组件

Text组件支持添加多种子组件，实现图文混排等复杂效果。

### 添加Span

通过[addChild](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#addchild)在Text中添加文本子组件，用于展示行内文本。Span组件需嵌入在Text组件中才能显示，单独使用时不会显示任何内容。

```
// span仅作为text的子组件形式展示
ArkUI_NodeHandle span = Manager::nodeAPI_->createNode(ARKUI_NODE_SPAN);
const char *spanContent = "This is a span";
ArkUI_AttributeItem spanContentItem = {.string = spanContent};
Manager::nodeAPI_->setAttribute(span, NODE_SPAN_CONTENT, &spanContentItem);
if (span != nullptr) {
    // 设置Span背景样式
    ArkUI_NumberValue spanBackground[] = {
        {.u32 = 0xFFE8F4F5}, // 背景颜色
        {.f32 = 5.0f},       // 左上角半径
        {.f32 = 5.0f},       // 右上角半径
        {.f32 = 5.0f},       // 左下角半径
        {.f32 = 5.0f}        // 右下角半径
    };
    ArkUI_AttributeItem spanBackgroundItem = {.value = spanBackground, .size = VALUE_5};
    Manager::nodeAPI_->setAttribute(span, NODE_SPAN_TEXT_BACKGROUND_STYLE, &spanBackgroundItem);

    // 文本基线的偏移量属性
    ArkUI_NumberValue baselineOffsetVal = {.f32 = VALUE_10};
    ArkUI_AttributeItem baselineOffsetItem = {&baselineOffsetVal, VALUE_1};
    Manager::nodeAPI_->setAttribute(text, NODE_SPAN_BASELINE_OFFSET, &baselineOffsetItem);
    // 设置字体粗细
    ArkUI_NumberValue fontWeight = {.i32 = ARKUI_FONT_WEIGHT_W500};
    ArkUI_AttributeItem fontWeightItem = {&fontWeight, VALUE_1};
    Manager::nodeAPI_->setAttribute(span, NODE_IMMUTABLE_FONT_WEIGHT, &fontWeightItem);
    ArkUI_NumberValue fontWeight1 = {.i32 = ARKUI_FONT_WEIGHT_W500};
    ArkUI_AttributeItem fontWeight1Item = {&fontWeight1, VALUE_1};
    Manager::nodeAPI_->setAttribute(text, NODE_IMMUTABLE_FONT_WEIGHT, &fontWeight1Item);
    // 长按span组件，触发回调
    Manager::nodeAPI_->registerNodeEvent(span, NODE_TEXT_SPAN_ON_LONG_PRESS, EVENT_SPAN_LONG_PRESS, nullptr);
    Manager::nodeAPI_->registerNodeEventReceiver(&OnEventReceive);
}
Manager::nodeAPI_->addChild(text, span);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L312-L346" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 添加ImageSpan

通过[addChild](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativenodeapi-1#addchild)在文本中添加图片子组件。

```
void setText6(ArkUI_NodeHandle &text6)
{
    // ImageSpan
    ArkUI_NodeHandle imageSpan = Manager::nodeAPI_->createNode(ARKUI_NODE_IMAGE_SPAN);
    ArkUI_AttributeItem spanUrl = {.string = "/resources/base/media/background.png"};
    ArkUI_NumberValue widthVal[VALUE_1]{};
    widthVal[VALUE_0].f32 = 100.f;
    ArkUI_AttributeItem width = {.value = widthVal, .size = VALUE_1};
    ArkUI_NumberValue heightVal[VALUE_1]{};
    heightVal[VALUE_0].f32 = 100.f;
    ArkUI_AttributeItem height = {.value = heightVal, .size = VALUE_1};
    Manager::nodeAPI_->setAttribute(imageSpan, NODE_WIDTH, &width);
    Manager::nodeAPI_->setAttribute(imageSpan, NODE_HEIGHT, &height);
    Manager::nodeAPI_->setAttribute(imageSpan, NODE_IMAGE_SPAN_SRC, &spanUrl);
    // 设置 NODE_IMAGE_SPAN_VERTICAL_ALIGNMENT
    ArkUI_NumberValue verticalAlignment = {.i32 = ARKUI_IMAGE_SPAN_ALIGNMENT_BOTTOM};
    ArkUI_AttributeItem verticalAlignmentItem = {&verticalAlignment, VALUE_1};
    Manager::nodeAPI_->setAttribute(imageSpan, NODE_IMAGE_SPAN_VERTICAL_ALIGNMENT, &verticalAlignmentItem);
    // imageSpan组件占位图地址属性
    ArkUI_AttributeItem spanAlt = {.string = "/resources/base/media/startIcon.png"};
    Manager::nodeAPI_->setAttribute(imageSpan, NODE_IMAGE_SPAN_ALT, &spanAlt);
    // 设置imageSpan组件的基线偏移量属性
    ArkUI_NumberValue baselineOffset = {.f32 = VALUE_10};
    ArkUI_AttributeItem baselineOffsetItem = {&baselineOffset, VALUE_1};
    Manager::nodeAPI_->setAttribute(imageSpan, NODE_IMAGE_SPAN_BASELINE_OFFSET, &baselineOffsetItem);
    Manager::nodeAPI_->addChild(text6, imageSpan);
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1306-L1334" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 使用StyledString

StyledString提供了更高级的文本排版功能，支持为文本的不同部分设置不同样式，包括字体大小、颜色、占位符等。关于StyledString的详细使用方法，请参考[使用属性字符串](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string)文档。

## 设置高级文本效果

Text组件支持多种高级文本效果，如渐变、跑马灯等。

### 设置渐变效果

通过如下属性设置渐变颜色效果。从API version 20开始，Text组件支持设置渐变颜色效果。

**表9** 渐变效果属性

| 属性 | 说明 |
| --- | --- |
| [NODE\_TEXT\_LINEAR\_GRADIENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_linear_gradient) | 设置线性渐变。从API version 20开始支持。 |
| [NODE\_TEXT\_RADIAL\_GRADIENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_radial_gradient) | 设置径向渐变。从API version 20开始支持。 |

```
// 设置渐变颜色和位置
float stops[] = { 0.0f, 0.5f };
uint32_t colors[] = { 0xFFFFFF00, 0xFF0000FF };
ArkUI_ColorStop colorStop = { colors, stops, VALUE_2 };
ArkUI_ColorStop *colorStopPtr = &colorStop;

// 设置线性渐变
ArkUI_NumberValue linearGradient[] = {
    {.f32 = FLOAT_50}, {.f32 = FLOAT_50}, {.f32 = FLOAT_50}};
ArkUI_AttributeItem linearGradientItem = {
    linearGradient, sizeof(linearGradient) / sizeof(ArkUI_NumberValue)};
linearGradientItem.object = reinterpret_cast<void *>(colorStopPtr);
linearGradientItem.size = sizeof(linearGradientItem) / sizeof(ArkUI_NumberValue);
Manager::nodeAPI_->setAttribute(text5, NODE_TEXT_LINEAR_GRADIENT, &linearGradientItem);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1257-L1272" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置跑马灯效果

从API version 23开始，Text组件支持通过[NODE\_TEXT\_MARQUEE\_OPTIONS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_marquee_options)属性设置跑马灯效果。

```
// 创建跑马灯选项
ArkUI_TextMarqueeOptions* marqueeOptions = OH_ArkUI_TextMarqueeOptions_Create();
OH_ArkUI_TextMarqueeOptions_SetStart(marqueeOptions, true);
OH_ArkUI_TextMarqueeOptions_SetStep(marqueeOptions, 5.0f);
OH_ArkUI_TextMarqueeOptions_SetSpacing(marqueeOptions, 30.0f);
OH_ArkUI_TextMarqueeOptions_SetFromStart(marqueeOptions, true);
OH_ArkUI_TextMarqueeOptions_SetDelay(marqueeOptions, VALUE_400);
OH_ArkUI_TextMarqueeOptions_SetUpdatePolicy(marqueeOptions,
    ArkUI_MarqueeUpdatePolicy::ARKUI_MARQUEEUPDATEPOLICY_PRESERVEPOSITION);
// 设置到Text组件
ArkUI_AttributeItem marqueeOptions_item = {
    .object = marqueeOptions
};
Manager::nodeAPI_->setAttribute(text18, NODE_TEXT_MARQUEE_OPTIONS, &marqueeOptions_item);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1640-L1655" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>


### 设置文本方向

从API version 23开始，Text组件支持通过[NODE\_TEXT\_DIRECTION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h-nodeattributetype-text#node_text_direction)属性设置文本方向。

```
// 设置文本方向为从右到左
ArkUI_NumberValue directionValue[] = {{.i32 = ARKUI_TEXT_DIRECTION_RTL}};
ArkUI_AttributeItem direction_item = {directionValue, sizeof(directionValue) / sizeof(ArkUI_NumberValue)};
Manager::nodeAPI_->setAttribute(text19, NODE_TEXT_DIRECTION, &direction_item);
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/native_node_sample/entry/src/main/cpp/TextMaker.cpp#L1666-L1671" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：TextMaker.cpp</a></div>
