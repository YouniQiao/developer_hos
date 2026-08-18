---
title: "ArkUI_NodeAttributeType（导航类组件相关属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-navigationrelatedcomponents"
catalog: "harmonyos-references"
content_hash: "16ee58b6aa38"
synced_at: "2026-08-18T15:32:36.607673"
---

# ArkUI_NodeAttributeType（导航类组件相关属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI（方舟UI框架）在Native侧可以设置的导航类组件相关属性样式集合，包含Swiper（滑动容器组件）属性设置。这些属性涵盖了Swiper组件的循环播放、自动播放、导航指示器、动画效果等核心功能，开发者可以根据实际需求组合使用这些属性来实现不同的轮播效果。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_SWIPER_LOOP

```
NODE_SWIPER_LOOP = MAX_NODE_SCOPE_NUM * ARKUI_NODE_SWIPER = 1001000
```
 Swiper是否开启循环，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 控制是否开启循环，0表示不循环，1表示循环，默认值为1。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 是否开启循环，0表示不循环，1表示循环。 |

#### NODE_SWIPER_AUTO_PLAY

```
NODE_SWIPER_AUTO_PLAY = 1001001
```
 Swiper子组件是否自动播放，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 控制子组件是否自动播放，0表示不自动播放，1表示自动播放，默认值为0。 |
| .value[1]?.i32 | 手指按下时是否停止自动播放，0表示不停止自动播放，1表示停止自动播放，默认值为1。该参数从API version 16开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件是否自动播放，0表示不自动播放，1表示自动播放。 |
| .value[1].i32 | 手指按下是否停止自动播放，0表示不停止自动播放，1表示停止自动播放。该参数从API version 16开始支持。 |

#### NODE_SWIPER_SHOW_INDICATOR

```
NODE_SWIPER_SHOW_INDICATOR = 1001002
```
 Swiper是否显示导航点指示器，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 是否显示导航点指示器，0表示不显示导航点指示器，1表示显示导航点指示器，默认值为1。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 是否显示导航点指示器，0表示不显示导航点指示器，1表示显示导航点指示器。 |

#### NODE_SWIPER_INTERVAL

```
NODE_SWIPER_INTERVAL = 1001003
```
 设置Swiper自动播放时播放的时间间隔，支持属性设置，属性重置和属性获取接口。

需要先设置NODE_SWIPER_AUTO_PLAY为1（开启自动播放），此属性设置的时间间隔才会生效。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 使用自动播放时播放的时间间隔，单位为毫秒，取值范围[0, +∞)，默认值为3000。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 使用自动播放时播放的时间间隔，单位为毫秒。 |

#### NODE_SWIPER_VERTICAL

```
NODE_SWIPER_VERTICAL = 1001004
```
 设置Swiper是否为纵向滑动，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 是否为纵向滑动，0表示横向滑动，1表示纵向滑动，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 是否为纵向滑动，0表示横向滑动，1表示纵向滑动。 |

#### NODE_SWIPER_DURATION

```
NODE_SWIPER_DURATION = 1001005
```
 设置Swiper子组件切换的动画时长，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 子组件切换的动画时长，单位为毫秒，取值范围[0, +∞)，默认值为400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 子组件切换的动画时长，单位为毫秒。 |

#### NODE_SWIPER_CURVE

```
NODE_SWIPER_CURVE = 1001006
```
 设置Swiper的动画曲线，支持属性设置，属性重置和属性获取接口。未设置或未重置该属性时，动画曲线为[interpolatingSpring](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-curve#curvesinterpolatingspring10)(-1, 1, 328, 34)；设置参数异常时（如参数类型不匹配或参数值无效），取默认值ARKUI_CURVE_LINEAR。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置动画曲线参数，参数类型[ArkUI_AnimationCurve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#arkui_animationcurve)。默认值为ARKUI_CURVE_LINEAR。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前设置的动画曲线类型，参数类型[ArkUI_AnimationCurve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#arkui_animationcurve)。 |

#### NODE_SWIPER_ITEM_SPACE

```
NODE_SWIPER_ITEM_SPACE = 1001007
```
 设置Swiper子组件与子组件之间间隙，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 子组件与子组件之间间隙数值，单位为vp，取值范围[0, +∞)，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 子组件与子组件之间间隙数值，单位为vp。 |

#### NODE_SWIPER_INDEX

```
NODE_SWIPER_INDEX = 1001008
```
 设置Swiper当前在容器中显示的子组件的索引值，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 子组件的索引值，取值范围[0, 子组件数量-1]，默认值为0。 |
| .value[1]?.i32 | 跳转动画模式，参数类型[ArkUI_SwiperAnimationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swiperanimationmode)，默认值为ARKUI_SWIPER_ANIMATION_MODE_NONE。仅本次设置有效。 该参数从API version 15开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 子组件的索引值。 |

#### NODE_SWIPER_DISPLAY_COUNT

```
NODE_SWIPER_DISPLAY_COUNT = 1001009
```
 设置Swiper一页内元素显示个数，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 视窗内显示的子元素个数，取值范围[1, +∞)，默认值为1。 |
| .value[1]?.i32 | 是否按组翻页，0表示按子元素翻页，1表示视窗内显示的子元素按组翻页，默认值为0。该参数从API version 19开始支持。 |
| .string? | 参数的有效值为：“auto”。当设置为“auto”时，value[] 参数将被忽略。不设置该参数时，value[] 参数将被正常使用。 该参数从API version 19开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 视窗内显示的子元素个数。 |
| .value[1].i32 | 是否按组翻页，0表示按子元素翻页，1表示视窗内显示的子元素按组翻页。该参数从API version 19开始支持。 |
| .string | 值为“auto”时表示自适应显示个数。该参数从API version 19开始支持。 |

#### NODE_SWIPER_DISABLE_SWIPE

```
NODE_SWIPER_DISABLE_SWIPE = 1001010
```
 设置Swiper禁用组件滑动切换功能，支持属性设置，属性重置和属性获取接口。适用场景：如只允许通过导航箭头或导航点切换页面、防止用户手势滑动干扰等场景。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 是否禁用组件滑动切换功能，0表示不禁用滑动切换功能，1表示禁用滑动切换功能，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 是否禁用组件滑动切换功能，0表示不禁用滑动切换功能，1表示禁用滑动切换功能。 |

#### NODE_SWIPER_SHOW_DISPLAY_ARROW

```
NODE_SWIPER_SHOW_DISPLAY_ARROW = 1001011
```
 设置Swiper是否显示导航箭头，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置是否显示导航箭头，参数类型[ArkUI_SwiperArrow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swiperarrow)，默认值为ARKUI_SWIPER_ARROW_HIDE。 |
| ?.object | 显示导航箭头时设置箭头样式，参数类型为[ArkUI_SwiperArrowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperarrowstyle)。不设置该参数时使用系统默认箭头样式。 该参数从API version 19开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前导航箭头的显示状态，参数类型[ArkUI_SwiperArrow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swiperarrow)。 |
| .object | 箭头样式，参数类型为[ArkUI_SwiperArrowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperarrowstyle)。该参数从API version 19开始支持。 |

#### NODE_SWIPER_EDGE_EFFECT_MODE

```
NODE_SWIPER_EDGE_EFFECT_MODE = 1001012
```
 设置Swiper滑动到边缘时的效果，支持属性设置，属性重置和属性获取接口。当Swiper已滑动到第一个或最后一个子组件时，用户继续滑动会触发边缘效果。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 边缘滑动效果，参数类型[ArkUI_EdgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scroll-h#arkui_edgeeffect)，默认值为ARKUI_EDGE_EFFECT_SPRING。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前设置的边缘滑动效果类型，参数类型[ArkUI_EdgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scroll-h#arkui_edgeeffect)。 |

#### NODE_SWIPER_NODE_ADAPTER

```
NODE_SWIPER_NODE_ADAPTER = 1001013
```
 Swiper组件适配器，支持属性设置，属性重置和属性获取接口。适用场景：当Swiper需要动态加载或复用子组件时使用适配器，如数据量较大的列表轮播、无限循环轮播等场景。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | 使用[ArkUI_NodeAdapter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nodeadapter8h)对象。建议配合NODE_SWIPER_CACHED_COUNT使用以提升性能。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .object | 返回当前设置的适配器对象，参数类型为[ArkUI_NodeAdapter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nodeadapter8h)，用于动态加载或复用Swiper子组件。 |

#### NODE_SWIPER_CACHED_COUNT

```
NODE_SWIPER_CACHED_COUNT = 1001014
```
 Swiper组件Adapter缓存数量，支持属性设置，属性重置和属性获取接口。适用场景：用于优化Swiper性能，当子组件渲染较复杂或需要预加载更多页面时，可适当增加缓存数量。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 配合Swiper组件Adapter使用，设置Adapter中的缓存数量，取值范围[0, +∞)，默认值为1。建议根据实际业务场景合理设置，避免过大导致内存占用过高。 |
| .value[1]?.i32 | 是否显示缓存节点，0表示不显示，1表示显示，默认值为0。该参数从API version 19开始支持。 |
| .value[2]?.i32 | 缓存数量是否按组计算。0表示当NODE_SWIPER_DISPLAY_COUNT设置按组翻页时缓存数量按组计算，1表示缓存数量为真实设置数量，默认值为0。该参数从API version 24开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 配合Swiper组件Adapter使用，返回Adapter中的缓存数量。 |
| .value[1].i32 | 是否显示缓存节点，0表示不显示，1表示显示。该参数从API version 19开始支持。 |
| .value[2].i32 | 缓存数量是否按组计算，0表示按组计算，1表示为真实设置数量。该参数从API version 24开始支持。 |

#### NODE_SWIPER_PREV_MARGIN

```
NODE_SWIPER_PREV_MARGIN = 1001015
```
 设置 Swiper 组件的前边距，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 前边距数值，单位为vp，取值范围[0, +∞)，默认值为0。 |
| .value[1]?.i32 | 是否忽略空白，1表示忽略空白，0表示不忽略空白，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 前边距数值，单位为vp。 |
| .value[1].i32 | 是否忽略空白，1表示忽略空白，0表示不忽略空白。 |

#### NODE_SWIPER_NEXT_MARGIN

```
NODE_SWIPER_NEXT_MARGIN = 1001016
```
 设置 Swiper 组件的后边距，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 后边距数值，单位为vp，取值范围[0, +∞)，默认值为0。 |
| .value[1]?.i32 | 是否忽略空白，1表示忽略空白，0表示不忽略空白，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 后边距数值，单位为vp。 |
| .value[1].i32 | 是否忽略空白，1表示忽略空白，0表示不忽略空白，默认值为0。 |

#### NODE_SWIPER_INDICATOR

```
NODE_SWIPER_INDICATOR = 1001017
```
 设置Swiper组件的导航指示器类型，支持属性设置，属性重置和属性获取接口。适用场景：ARKUI_SWIPER_INDICATOR_TYPE_DOT适用于轮播图、广告位等场景；ARKUI_SWIPER_INDICATOR_TYPE_DIGIT适用于需要显示当前页码的场景，如阅读器、图库等。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置导航指示器的类型，参数类型[ArkUI_SwiperIndicatorType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swiperindicatortype)，默认值为ARKUI_SWIPER_INDICATOR_TYPE_DOT。 |
| .object | 导航指示器的类型为ARKUI_SWIPER_INDICATOR_TYPE_DOT时参数类型为[ArkUI_SwiperIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperindicator)。 导航指示器的类型为ARKUI_SWIPER_INDICATOR_TYPE_DIGIT时参数类型为[ArkUI_SwiperDigitIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperdigitindicator)。 ArkUI_SwiperDigitIndicator类型从API version 19开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前设置的导航指示器类型，参数类型[ArkUI_SwiperIndicatorType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swiperindicatortype)。 |
| .object | 导航指示器的类型为ARKUI_SWIPER_INDICATOR_TYPE_DOT时参数类型为[ArkUI_SwiperIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperindicator)。 导航指示器的类型为ARKUI_SWIPER_INDICATOR_TYPE_DIGIT时参数类型为[ArkUI_SwiperDigitIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperdigitindicator)。 ArkUI_SwiperDigitIndicator类型从API version 19开始支持。 |

#### NODE_SWIPER_NESTED_SCROLL

```
NODE_SWIPER_NESTED_SCROLL = 1001018
```
 设置Swiper组件和父组件的嵌套滚动模式，支持属性设置，属性重置和属性获取接口。适用场景：当Swiper嵌套在ScrollView、List等可滚动容器中时，用于协调滚动行为，避免滚动冲突。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | Swiper组件和父组件的嵌套滚动模式，参数类型[ArkUI_SwiperNestedScrollMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swipernestedscrollmode)，仅在Swiper嵌套在可滚动容器中时生效。默认值为：ARKUI_SWIPER_NESTED_SCROLL_SELF_ONLY。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前设置的嵌套滚动模式，参数类型[ArkUI_SwiperNestedScrollMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_swipernestedscrollmode)。 |

#### NODE_SWIPER_SWIPE_TO_INDEX

```
NODE_SWIPER_SWIPE_TO_INDEX = 1001019
```
 设置Swiper组件翻至指定页面。作为属性设置方法参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下，不支持属性重置和属性获取接口。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 指定页面在Swiper中的索引值，取值范围[0, 页面数量-1]。 |
| .value[1]?.i32 | 设置翻至指定页面时是否有动效。1表示有动效，0表示没有动效，默认值为0。 |

#### NODE_SWIPER_INDICATOR_INTERACTIVE

```
NODE_SWIPER_INDICATOR_INTERACTIVE = 1001020
```
 设置组件导航点是否可交互。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置组件导航点交互功能，0表示导航点不可交互，1表示导航点可交互，默认值为1。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 组件导航点是否可交互，0表示不可交互，1表示可交互。 |

#### NODE_SWIPER_PAGE_FLIP_MODE

```
NODE_SWIPER_PAGE_FLIP_MODE = 1001021
```
 设置组件鼠标滚轮翻页模式，支持属性设置，属性重置和属性获取接口。

起始版本： 15

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 设置组件鼠标滚轮翻页模式，参数类型[ArkUI_PageFlipMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_pageflipmode)，默认值为ARKUI_PAGE_FLIP_MODE_CONTINUOUS。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前设置的鼠标滚轮翻页模式，参数类型[ArkUI_PageFlipMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h#arkui_pageflipmode)。 |

#### NODE_SWIPER_AUTO_FILL

```
NODE_SWIPER_AUTO_FILL = 1001022
```
 设置Swiper一页内元素显示个数根据元素最小宽度自适应，支持属性设置，属性重置和属性获取接口。适用场景：用于响应式布局，当需要根据容器宽度自动调整每页显示的元素数量时使用，如横竖屏适配、多端适配等场景。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 19

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 元素显示最小宽度，单位为vp，取值范围(0, +∞)。 |
| .value[1]?.i32 | 是否按组翻页，0表示按子元素翻页，1表示视窗内显示的子元素按组翻页，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 元素显示最小宽度，单位为vp。 |
| .value[1].i32 | 是否按组翻页，0表示按子元素翻页，1表示视窗内显示的子元素按组翻页，默认值为0。 |

#### NODE_SWIPER_MAINTAIN_VISIBLE_CONTENT_POSITION

```
NODE_SWIPER_MAINTAIN_VISIBLE_CONTENT_POSITION = 1001023
```
 设置Swiper在显示区域外插入或删除子组件时，是否保持当前可见内容的位置不变。适用场景：当在Swiper中动态增删子组件时，需要保持当前显示内容不跳动，如聊天记录列表、商品列表等场景。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 控制Swiper显示区域外插入或删除数据时是否保持可见内容位置不变，0表示不保持可见内容位置，1表示保持可见内容位置，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | Swiper显示区域外插入或删除数据是否保持可见内容位置不变。0表示不保持可见内容位置，1表示保持可见内容位置。 |

#### NODE_SWIPER_ITEMFILLPOLICY

```
NODE_SWIPER_ITEMFILLPOLICY = 1001024
```
 设置Swiper组件的响应式布局策略，根据不同断点规格自动调整一页内显示的子组件列数。支持属性设置，属性重置和属性获取接口。适用场景：用于在不同屏幕尺寸下自适应调整每页显示的列数，如横竖屏适配、多端适配等场景。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 在不同断点规格下的列数，数据类型[ArkUI_ItemFillPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_itemfillpolicy)。 |
| .value[1]?.i32 | 是否按组翻页，0表示按子元素翻页，1表示视窗内显示的子元素按组翻页，默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 返回当前设置的响应式布局策略，数据类型[ArkUI_ItemFillPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_itemfillpolicy)。 |
| .value[1].i32 | 是否按组翻页，0表示按子元素翻页，1表示视窗内显示的子元素按组翻页。 |
