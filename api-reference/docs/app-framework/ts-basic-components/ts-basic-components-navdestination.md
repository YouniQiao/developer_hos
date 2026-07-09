---
title: "NavDestination"
upstream_id: "harmonyos-references/ts-basic-components-navdestination"
catalog: "harmonyos-references"
content_hash: "c94a82ae894c"
synced_at: "2026-07-09T00:57:51.019799"
---

# NavDestination

作为子页面的根容器，用于显示[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)的内容区。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 该组件从API version 11开始默认支持安全区避让特性(默认值为：expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]))，开发者可以重写该属性覆盖默认行为，API version 11之前的版本需配合[expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#expandsafearea)属性实现安全区避让。
- NavDestination组件必须配合Navigation使用，作为Navigation目的页面的根节点，单独使用只能作为普通容器组件，不具备路由相关属性能力。
- 如果路由栈中间页面的生命周期发生变化，跳转之前的栈顶NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)与跳转之后的栈顶NavDestination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)均在最后触发。
- NavDestination未设置主副标题并且没有返回键时，不显示标题栏。
- 不建议设置位置、大小等布局相关属性，可能会造成页面显示异常。例如在NavDestination上添加[zIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-z-order#zindex)属性时，会覆盖掉系统设置的层级，可能导致出现显示异常。

#### 子组件

![](./img/note_3.0-zh-cn.png)

- 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-ifelse)、[ForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-foreach)和[LazyForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)）。
- 子组件个数：多个。

#### 接口

NavDestination()

创建[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)子页面的根容器。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### 属性

支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)。

#### [h2]title

title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle | Resource, options?: NavigationTitleOptions)

设置页面标题。字符串超长时，如果不设置副标题，先缩小再换行2行后以"..."截断。如果设置副标题，先缩小后以"..."截断。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | [NavDestinationCommonTitle](#navdestinationcommontitle) | [NavDestinationCustomTitle](#navdestinationcustomtitle) | [Resource14+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 是 | 页面标题。 |
| options12+ | [NavigationTitleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationtitleoptions11) | 否 | 标题栏选项。 |

#### [h2]hideTitleBar

hideTitleBar(value: boolean)

设置是否隐藏标题栏。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否隐藏标题栏。 默认值：false true：隐藏标题栏。 false：显示标题栏。 |

#### [h2]hideTitleBar13+

hideTitleBar(hide: boolean, animated: boolean)

设置是否隐藏标题栏。与[hideTitleBar](#hidetitlebar)相比，新增标题栏显隐时是否使用动画。

元服务API： 从API version 13开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hide | boolean | 是 | 是否隐藏标题栏。 默认值：false true：隐藏标题栏。 false：显示标题栏。 |
| animated | boolean | 是 | 设置是否使用动画显隐标题栏。 默认值：false true：使用动画显示隐藏标题栏。 false：不使用动画显示隐藏标题栏。 |

#### [h2]fullScreenOverlay

fullScreenOverlay(fullScreenOverlay: Optional<boolean>)

设置NavDestination是否以全屏覆盖模式显示。

当参数设置为true时，在Navigation分栏模式下，当前页面会覆盖整个Navigation容器，包括NavBar和内容区。该配置作用于当前NavDestination的所有实例；当路由栈中已有页面以全屏覆盖模式显示时，其后入栈的[DIALOG](#navdestinationmode枚举说明11)页面与未设置fullScreenOverlay为false的[STANDARD](#navdestinationmode枚举说明11)页面也会继承为全屏覆盖显示。未通过该接口设置时，NavDestination默认是普通显示模式，遵循Navigation分栏显示规则。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fullScreenOverlay | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否以全屏覆盖模式显示。 true：全屏覆盖模式，覆盖整个Navigation容器。 false：普通显示模式，遵循Navigation分栏显示规则。指定为false的STANDARD类型页面不会继承全屏显示。 undefined：普通显示模式，遵循Navigation分栏显示规则。指定为undefined的页面会继承全屏显示。 |

#### [h2]toolbarConfiguration13+

toolbarConfiguration(toolbarParam: Array<ToolbarItem> | CustomBuilder, options?: NavigationToolbarOptions)

设置工具栏内容。未调用本接口时不显示工具栏。

![](./img/note_3.0-zh-cn.png)

- 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。
- 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。

元服务API： 从API version 13开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| toolbarParam | Array | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 是 | 工具栏内容。 使用Array写法设置的工具栏有如下特性： -工具栏所有选项均分底部工具栏，在每个均分内容区布局文本和图标。 -竖屏模式最多支持显示5个图标，多余的图标会被放入自动生成的更多图标中，点击更多图标，可以展示剩余内容。横屏模式时，如果为[Split](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmode9枚举说明)模式，仍按照竖屏模式显示，如果为[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmode9枚举说明)模式需配合[menus](#menus12)属性的Array使用，底部工具栏会自动隐藏，同时底部工具栏所有选项移动至页面右上角菜单。 使用[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8)写法为用户自定义工具栏选项，不具备以上功能。 |
| options | [NavigationToolbarOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationtoolbaroptions11) | 否 | 工具栏选项。包含工具栏背景颜色、工具栏背景模糊样式及模糊选项、工具栏背景属性、工具栏布局方式、是否隐藏工具栏的文本、工具栏更多图标的菜单选项。 |

#### [h2]hideToolBar13+

hideToolBar(hide: boolean, animated?: boolean)

设置是否隐藏工具栏。

元服务API： 从API version 13开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hide | boolean | 是 | 是否隐藏工具栏。 默认值：false true：隐藏工具栏。 false：显示工具栏。 |
| animated | boolean | 否 | 设置是否使用动画显隐工具栏。 默认值：false true：使用动画显示隐藏工具栏。 false：不使用动画显示隐藏工具栏。 |

#### [h2]mode11+

mode(value: NavDestinationMode)

设置NavDestination类型，不支持动态修改。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [NavDestinationMode](#navdestinationmode枚举说明11) | 是 | NavDestination类型。 默认值：NavDestinationMode.STANDARD |

#### [h2]backButtonIcon11+

backButtonIcon(value: ResourceStr | PixelMap | SymbolGlyphModifier)

设置标题栏返回键图标。

![](./img/note_3.0-zh-cn.png)

- 从API version 12开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。
- 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | [SymbolGlyphModifier12+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier) | 是 | 标题栏返回键图标。 |

#### [h2]backButtonIcon19+

backButtonIcon(icon: ResourceStr | PixelMap | SymbolGlyphModifier, accessibilityText?: ResourceStr)

设置标题栏返回键图标和无障碍播报内容。

![](./img/note_3.0-zh-cn.png)

- 该接口不支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。
- 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| icon | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | [SymbolGlyphModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-symbolglyphmodifier#symbolglyphmodifier) | 是 | 标题栏返回键图标。 |
| accessibilityText | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | 否 | 返回键无障碍播报内容。 默认值：系统语言是中文时为“返回”，系统语言是英文时为“back”。 |

#### [h2]menus12+

menus(value: Array<NavigationMenuItem> | CustomBuilder)

设置页面右上角菜单。不设置时不显示菜单项。使用Array<[NavigationMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmenuitem)> 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。

![](./img/note_3.0-zh-cn.png)

- 从API version 14开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。
- 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 是 | 页面右上角菜单。 |

#### [h2]menus19+

menus(items: Array<NavigationMenuItem> | CustomBuilder, options?: NavigationMenuOptions)

设置页面右上角菜单。不设置时不显示菜单项。与[menus](#menus12)相比，新增菜单选项。使用Array<[NavigationMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmenuitem)> 写法时，竖屏最多支持显示3个图标，横屏最多支持显示5个图标，多余的图标会被放入自动生成的更多图标。

![](./img/note_3.0-zh-cn.png)

- 该接口不支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。
- 不支持通过SymbolGlyphModifier对象的fontSize属性修改图标大小、effectStrategy属性修改动效、symbolEffect属性修改动效类型。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | Array | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 是 | 页面右上角菜单。 |
| options | [NavigationMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmenuoptions19) | 否 | 页面右上角菜单选项。 |

#### [h2]ignoreLayoutSafeArea12+

ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>)

控制组件的布局，使其扩展到非安全区域。

![](./img/note_3.0-zh-cn.png)

- 组件设置ignoreLayoutSafeArea之后生效的条件为： 设置LayoutSafeAreaType.SYSTEM时，组件的边界与非安全区域重合时组件能够延伸到非安全区域下。
- 若组件扩展到非安全区域内，此时在非安全区域里触发的事件（例如：点击事件）等可能会被系统拦截，优先响应状态栏等系统组件。
- 组件想要扩展到非安全区域内，需隐藏或者设置标题栏和工具栏为[STACK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#barstyle12枚举说明)模式。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| types | Array | 否 | 配置扩展安全区域的类型。 默认值： [LayoutSafeAreaType.SYSTEM] |
| edges | Array | 否 | 配置扩展安全区域的方向。 默认值： [LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM]。 |

#### [h2]systemBarStyle12+

systemBarStyle(style: Optional<SystemBarStyle>)

当Navigation中显示当前NavDestination时，设置对应系统状态栏的样式。

![](./img/note_3.0-zh-cn.png)

- 必须配合Navigation使用，作为其Navigation目的页面的根节点时才能生效。
- 其他使用限制请参考Navigation对应的[systemBarStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#systembarstyle12)属性说明。
- 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| style | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 系统状态栏样式。 |

#### [h2]systemTransition14+

systemTransition(type: NavigationSystemTransitionType)

设置NavDestination系统转场动画，支持分别设置系统标题栏动画和内容动画。

元服务API： 从API version 14开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | [NavigationSystemTransitionType](#navigationsystemtransitiontype14枚举说明) | 是 | 系统转场动画类型。 默认值：NavigationSystemTransitionType.DEFAULT |

#### [h2]recoverable14+

recoverable(recoverable: Optional<boolean>)

配置NavDestination是否可恢复。如配置为可恢复，当应用进程异常退出并重新冷启动时，可自动创建该NavDestination。该功能需NavDestination对应的Navigation也配置了可恢复属性[recoverable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#recoverable14)。

![](./img/note_3.0-zh-cn.png) 该接口需要配合Navigation的[recoverable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#recoverable14)接口使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| recoverable | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | NavDestination是否可恢复，默认为不可恢复。 默认值：false true：NavDestination可恢复。 false：NavDestination不可恢复。 |

#### [h2]bindToScrollable14+

bindToScrollable(scrollers: Array<Scroller>)

绑定NavDestination组件和可滚动容器组件（支持[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)、[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)、[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)、[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)），当滑动可滚动容器组件时，会触发所有与其绑定的NavDestination组件的标题栏和工具栏的显示和隐藏动效，上滑隐藏，下滑显示。一个NavDestination可与多个可滚动容器组件绑定，一个可滚动容器组件也可与多个NavDestination绑定。使用示例参见[示例1](#示例1标题栏工具栏与可滚动类组件联动)。

![](./img/note_3.0-zh-cn.png)

- 只有NavDestination的标题栏或工具栏设置为可见时，联动效果才会生效。
- 当多个可滚动容器组件绑定了同一个NavDestination组件时，滚动任何一个容器都会触发标题栏和工具栏的显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位置时，会立即触发标题栏和工具栏的显示动效。因此，为了获得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。
- 从API version 22开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 14开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scrollers | Array | 是 | 可滚动容器组件的控制器。 |

#### [h2]bindToNestedScrollable14+

bindToNestedScrollable(scrollInfos: Array<NestedScrollInfo>)

绑定NavDestination组件和嵌套的可滚动容器组件（支持[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)、[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)、[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)、[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)），当滑动父组件或子组件时，会触发所有与其绑定的NavDestination组件的标题栏和工具栏的显示和隐藏动效，上滑隐藏，下滑显示。一个NavDestination可与多个嵌套的可滚动容器组件绑定，嵌套的可滚动容器组件也可与多个NavDestination绑定。使用示例参见[示例1](#示例1标题栏工具栏与可滚动类组件联动)。

![](./img/note_3.0-zh-cn.png)

- 只有NavDestination的标题栏或工具栏设置为可见时，联动效果才会生效。
- 当多个可滚动容器组件绑定了同一个NavDestination组件时，滚动任何一个容器都会触发标题栏和工具栏的显示或隐藏效果。且当任何一个可滚动容器组件滑动到底部或顶部位置时，会立即触发标题栏和工具栏的显示动效。因此，为了获得最佳用户体验，不建议同时触发多个可滚动容器组件的滚动事件。
- 从API version 22开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 14开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scrollInfos | Array | 是 | 嵌套的可滚动容器组件的控制器。 |

#### [h2]hideBackButton15+

hideBackButton(hide: Optional<boolean>)

设置是否隐藏标题栏中的返回键。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| hide | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否隐藏标题栏中的返回键。 默认值：false true：隐藏返回键。 false：显示返回键。 |

#### [h2]customTransition15+

customTransition(delegate: NavDestinationTransitionDelegate)

设置NavDestination自定义转场动画。

![](./img/note_3.0-zh-cn.png)

- 该接口不支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。
- 该属性与[systemTransition](#systemtransition14)同时设置时，后设置的属性生效。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| delegate | [NavDestinationTransitionDelegate](#navdestinationtransitiondelegate15) | 是 | NavDestination自定义动画的代理函数。 |

#### [h2]preferredOrientation19+

preferredOrientation(orientation: Optional<Orientation>)

设置NavDestination对应的显示方向。转场到该NavDestination后，系统也会将应用主窗口切到该显示方向。

![](./img/note_3.0-zh-cn.png)

- 该属性满足如下全部条件时才有效： 1. NavDestination属于应用主窗口页面，并且主窗口为全屏窗口； 2. NavDestination所属的Navigation的大小占满整个应用页面； 3. NavDestination类型为[NavDestinationMode](#navdestinationmode枚举说明11).STANDARD。
- 设置显示方向的实际效果依赖于具体的设备支持情况，具体参考窗口的[setPreferredOrientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9-1)接口。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| orientation | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | NavDestination页面对应的Orientation。 |

#### [h2]enableStatusBar19+

enableStatusBar(enabled: Optional<boolean>, animated?: boolean)

设置进入该NavDestination后，显示或者隐藏系统的状态栏。

![](./img/note_3.0-zh-cn.png)

- 该属性满足如下全部条件时才生效： 1. NavDestination属于应用主窗口页面，并且主窗口为全屏窗口； 2. NavDestination所属的Navigation的大小占满整个页面； 3. NavDestination的大小占满整个Navigation组件； 4. NavDestination类型为[NavDestinationMode](#navdestinationmode枚举说明11).STANDARD。
- 设置系统状态栏的实际效果依赖于具体的设备支持情况，具体参考窗口的[setSpecificSystemBarEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setspecificsystembarenabled11)接口。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 进入该NavDestination后，系统状态栏的显示/隐藏状态。 true：显示状态栏。 false：隐藏状态栏。 |
| animated | boolean | 否 | 是否使用动画的方式显示/隐藏系统状态栏。 默认值：false true：使用动画的方式显示/隐藏系统状态栏。 false：不使用动画的方式显示/隐藏系统状态栏。 |

#### [h2]enableNavigationIndicator19+

enableNavigationIndicator(enabled: Optional<boolean>)

设置进入该NavDestination后，显示或者隐藏系统的导航条。

![](./img/note_3.0-zh-cn.png) 该属性满足如下全部条件时才生效：

1. NavDestination属于应用主窗口页面，并且主窗口为全屏窗口；
2. NavDestination所属的Navigation的大小占满整个页面；
3. NavDestination的大小占满整个Navigation组件；
4. NavDestination类型为[NavDestinationMode](#navdestinationmode枚举说明11).STANDARD。

设置系统导航条的实际效果依赖于具体的设备支持情况，具体参考窗口的[setSpecificSystemBarEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setspecificsystembarenabled11)接口。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 进入该NavDestination后，系统导航条的显示/隐藏状态。 true：显示导航条。 false：隐藏导航条。 |

#### NavDestinationMode枚举说明11+

NavDestination类型。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| STANDARD | 0 | 标准模式的NavDestination。 |
| DIALOG | 1 | 默认透明，进出路由栈不影响下层NavDestination的可见性（onShown、onHidden等生命周期），只会触发onActive、onInactive这两个生命周期。 API version 13之前，默认无系统转场动画。从API version 13开始，支持系统转场动画。 |

#### NavigationSystemTransitionType14+枚举说明

系统转场动画类型。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DEFAULT | 0 | 默认系统转场动画。 **元服务API：** 从API version 14开始，该接口支持在元服务中使用。 |
| NONE | 1 | 无系统转场动画。 **元服务API：** 从API version 14开始，该接口支持在元服务中使用。 |
| TITLE | 2 | 标题栏系统转场动画。 **元服务API：** 从API version 14开始，该接口支持在元服务中使用。 |
| CONTENT | 3 | 内容区系统转场动画。 **元服务API：** 从API version 14开始，该接口支持在元服务中使用。 |
| FADE15+ | 4 | 渐变类型的系统转场动画。 **元服务API：** 从API version 15开始，该接口支持在元服务中使用。 |
| EXPLODE15+ | 5 | 中心缩放类型的系统转场动画。 **元服务API：** 从API version 15开始，该接口支持在元服务中使用。 |
| SLIDE_RIGHT15+ | 6 | 右侧平移类型的系统转场动画。 **元服务API：** 从API version 15开始，该接口支持在元服务中使用。 |
| SLIDE_BOTTOM15+ | 7 | 底部平移类型的系统转场动画。 **元服务API：** 从API version 15开始，该接口支持在元服务中使用。 |

![](./img/note_3.0-zh-cn.png) 设置系统转场动画，支持分别设置系统标题栏动画和内容动画。

系统默认转场动画中只有STANDARD页面的push和pop动画有单独的标题栏动画，存在如下限制：

1. 设置NavigationSystemTransitionType为TITLE时，系统转场只有标题栏动画。
2. 设置NavigationSystemTransitionType为CONTENT时，系统转场只有内容区动画。

设置NONE时没有系统转场动画，设置TITLE时只有标题栏系统转场动画，设置CONTENT和DEFAULT时默认系统转场动画。

#### 事件

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events)外，还支持如下事件：

#### [h2]onShown10+

onShown(callback: Callback<VisibilityChangeReason>)

当该NavDestination页面显示时触发此回调。从API version 21开始，支持通过VisibilityChangeReason说明onShown触发的原因。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback)21+ | 是 | 当该NavDestination页面显示时触发此回调。 在API version 21之前，当NavDestination页面显示时触发回调。 从API version 21开始，回调会提供入参VisibilityChangeReason以说明onShown触发的原因。 |

#### [h2]onHidden10+

onHidden(callback: Callback<VisibilityChangeReason>)

当该NavDestination页面隐藏时触发此回调。从API version 21开始，支持通过VisibilityChangeReason说明onHidden触发的原因。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback)21+ | 是 | 当该NavDestination页面隐藏时触发此回调。 在API version 21之前，当NavDestination页面隐藏时触发回调。 从API version 21开始，该回调会提供入参VisibilityChangeReason以说明onHidden触发的原因。 |

#### [h2]onWillAppear12+

onWillAppear(callback: Callback<void>)

当该NavDestination挂载之前触发此回调。在该回调中允许修改路由栈，当前帧生效。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 当该NavDestination挂载之前触发此回调。在该回调中允许修改路由栈，当前帧生效。 |

#### [h2]onWillShow12+

onWillShow(callback: Callback<void>)

当该NavDestination显示之前触发此回调。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 当该NavDestination显示之前触发此回调。 |

#### [h2]onWillHide12+

onWillHide(callback: Callback<void>)

当该NavDestination隐藏之前触发此回调。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 当该NavDestination隐藏之前触发此回调。 |

#### [h2]onWillDisappear12+

onWillDisappear(callback: Callback<void>)

当该NavDestination卸载之前触发的生命周期(有转场动画时，在转场动画开始之前触发)。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 当该NavDestination卸载之前触发的生命周期(有转场动画时，在转场动画开始之前触发)。 |

#### [h2]onBackPressed10+

onBackPressed(callback: () => boolean)

当与Navigation绑定的导航控制器中存在内容时，此回调生效。当点击返回键时，触发该回调。

返回值为true时，表示重写返回键逻辑，返回值为false时，表示回退到上一个页面。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | () => boolean | 是 | 当与Navigation绑定的导航控制器中存在内容时，此回调生效。当点击返回键时，触发该回调。 |

#### [h2]onReady11+

onReady(callback: import('../api/@ohos.base').Callback<[NavDestinationContext](#navdestinationcontext11)>)

当NavDestination即将构建子组件之前会触发此回调。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').[Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 当NavDestination即将构建子组件之前会触发此回调。 |

#### [h2]onResult15+

onResult(callback: Optional<Callback<ESObject>>)

NavDestination返回时触发该回调。

![](./img/note_3.0-zh-cn.png) 从API version 22开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt)> | 是 | 页面返回回调，入参为[pop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pop11)、[popToName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#poptoname11)、[popToIndex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#poptoindex11)接口传入的result参数。如果不传该参数，入参为undefined。 |

#### [h2]onActive17+

onActive(callback: Optional<Callback<NavDestinationActiveReason>>)

NavDestination处于激活态（处于栈顶可操作，且上层无特殊组件遮挡）时，触发该回调。使用示例参见[示例5](#示例5navdestination的onactive与oninactive生命周期)。

![](./img/note_3.0-zh-cn.png) 从API version 22开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 17开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt)> | 是 | NavDestination由非激活态变为激活态的原因。 |

#### [h2]onInactive17+

onInactive(callback: Optional<Callback<NavDestinationActiveReason>>)

NavDestination处于非激活态（处于非栈顶不可操作，或处于栈顶时上层有特殊组件遮挡）时，触发该回调。使用示例参见[示例5](#示例5navdestination的onactive与oninactive生命周期)。

![](./img/note_3.0-zh-cn.png) 从API version 22开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 17开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt)> | 是 | NavDestination由激活态变为非激活态的原因。 |

#### [h2]onNewParam19+

onNewParam(callback: Optional<Callback<ESObject>>)

当之前存在于栈中的NavDestination页面通过[launchMode.MOVE_TO_TOP_SINGLETON](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#launchmode12枚举说明)或[launchMode.POP_TO_SINGLETON](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#launchmode12枚举说明)移动到栈顶时，触发该回调。

![](./img/note_3.0-zh-cn.png)

- [replacePath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#replacepath11)、[replaceDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#replacedestination18)不会触发该回调。
- 从API version 22开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt)> | 是 | onNewParam触发时的回调函数，入参为路由跳转时传递到目标页面的数据。 |

#### NavDestinationCommonTitle

NavDestination通用标题。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| main | string | [Resource14+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 否 | 否 | 设置主标题。 |
| sub | string | [Resource14+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 否 | 否 | 设置副标题。 |

#### NavDestinationCustomTitle

NavDestination自定义标题。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| builder | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 否 | 否 | 设置标题栏内容。 |
| height | [TitleHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#titleheight9) | [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | 否 | 否 | 设置标题栏高度。 取值范围：[0, +∞) 单位参考[Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length)类型的说明。 |

#### NavDestinationContext11+

NavDestination上下文信息。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pathInfo | [NavPathInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathinfo10) | 否 | 否 | 跳转NavDestination时指定的参数。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| pathStack | [NavPathStack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navpathstack10) | 否 | 否 | 当前NavDestination所处的导航控制器。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| navDestinationId12+ | string | 否 | 是 | 当前NavDestination的唯一ID，由系统自动生成，和组件通用属性id无关。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| mode22+ | [NavDestinationMode](#navdestinationmode枚举说明11) | 否 | 是 | 当前NavDestination的类型。 **元服务API：** 从API version 22开始，该接口支持在元服务中使用。 |

#### [h2]getConfigInRouteMap12+

getConfigInRouteMap(): RouteMapConfig | undefined

获取当前NavDestination的路由配置信息。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

返回值：

| 类型 | 说明 |
| --- | --- |
| [RouteMapConfig](#routemapconfig12) | undefined | 当前页面路由配置信息。 当该页面不是通过路由表配置时返回undefined。 |

#### RouteMapConfig12+

路由配置信息。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| name | string | 否 | 否 | 页面名称。 |
| pageSourceFile | string | 否 | 否 | 页面在当前包中的路径。 |
| data | Object | 否 | 否 | 页面自定义字段信息。 |

#### NestedScrollInfo14+

嵌套可滚动容器组件信息

元服务API： 从API version 14开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| parent | [Scroller](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scroller) | 否 | 否 | 可滚动容器组件的控制器。 |
| child | [Scroller](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scroller) | 否 | 否 | 可滚动容器组件的控制器，child对应的组件需要是parent对应组件的子组件，且组件间存在嵌套滚动关系。 |

#### [h2]NavDestinationActiveReason17+

NavDestination激活态或者非激活态变化的原因。

元服务API： 从API version 17开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| TRANSITION | 0 | 通过页面跳转的方式使NavDestination激活态发生变化。 |
| CONTENT_COVER | 1 | 通过全模态的开启和关闭使NavDestination激活态发生变化。 |
| SHEET | 2 | 通过半模态的开启或关闭使NavDestination激活态发生变化。 |
| DIALOG | 3 | 通过自定义Dialog开启或关闭使NavDestination激活态发生变化。 |
| OVERLAY | 4 | 通过OverlayManager开启或者关闭Overlay使NavDestination激活态发生变化。 |
| APP_STATE | 5 | 通过前后台切换使NavDestination激活态发生变化。 |

#### [h2]VisibilityChangeReason21+

NavDestination可见性发生变化的原因。

元服务API： 从API version 21开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| TRANSITION | 0 | 通过页面跳转的方式使NavDestination可见性发生变化。 |
| CONTENT_COVER | 1 | 通过全模态的开启和关闭使NavDestination可见性发生变化。 |
| APP_STATE | 2 | 通过前后台切换使NavDestination可见性发生变化。 |

#### NavDestinationTransition15+

NavDestination自定义动画接口。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| onTransitionEnd | Callback | 否 | 是 | 转场动画结束时的回调函数。 |
| duration | number | 否 | 是 | 转场动画的持续时间。 默认值：1000（毫秒） 单位：ms |
| curve | [Curve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#curve) | 否 | 是 | 动画的曲线类型，默认值为[Curve.EaseInOut](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#curve)。 |
| delay | number | 否 | 是 | 转场动画的延迟。 默认值：0（毫秒） 单位：ms |
| event | Callback | 否 | 否 | 指定转场动效的闭包函数，系统会根据闭包中对组件UI状态的修改，生成对应的过渡动画。参见[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)中的event。 |

#### NavDestinationTransitionDelegate15+

type NavDestinationTransitionDelegate = (operation: NavigationOperation, isEnter: boolean) => Array<NavDestinationTransition> | undefined

NavDestination自定义转场动画的代理函数。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| operation | [NavigationOperation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationoperation11枚举说明) | 是 | 当前页面转场的操作类型。 |
| isEnter | boolean | 是 | 当前页面是否为入场页面。 true：当前页面是入场页面；false：当前页面不是入场页面。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | undefined | NavDestination页面的自定义动画集合。如果返回undefined则做系统默认动画。 |

#### Orientation19+

type Orientation = import('../api/@ohos.window').default.Orientation

Orientation实例对象。

系统能力： SystemCapability.ArkUI.ArkUI.Full

元服务API： 从API version 19开始，该接口支持在元服务中使用。

| 类型 | 说明 |
| --- | --- |
| import('../api/@ohos.window').default.[Orientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#orientation9) | 返回Orientation实例对象。 |

#### 示例

#### [h2]示例1（标题栏工具栏与可滚动类组件联动）

以下示例主要演示NavDestination绑定可滚动容器组件来实现滚动内容时触发标题栏和工具栏显示隐藏的效果。

```
import { SymbolGlyphModifier } from '@kit.ArkUI';

@Component
struct MyPageOne {
  private listScroller: Scroller = new Scroller();
  private scrollScroller: Scroller = new Scroller();
  private arr: number[] = [];

  aboutToAppear(): void {
    for (let i = 0; i < 30; i++) {
      this.arr.push(i);
    }
  }

  build() {
    NavDestination() {
      Scroll(this.scrollScroller) {
        Column() {
          List({ space: 0, initialIndex: 0, scroller: this.listScroller }) {
            ForEach(this.arr, (item: number, index: number) => {
              ListItem() {
                Text('' + item)
                  .height(100)
                  .fontSize(16)
                  .textAlign(TextAlign.Center)
                  .width('90%')
                  .margin({ left: '5%' })
                  .borderRadius(10)
                  .backgroundColor(Color.Gray)
              }
            }, (item: number) => item.toString());
          }.width('100%').height('80%').scrollBar(BarState.Off)
          .nestedScroll({ scrollForward: NestedScrollMode.SELF_FIRST, scrollBackward: NestedScrollMode.SELF_FIRST })

          ForEach(this.arr, (item: number, index: number) => {
            ListItem() {
              Text('' + item)
                .height(100)
                .fontSize(16)
                .textAlign(TextAlign.Center)
                .width('90%')
                .margin({ top: '5%' })
                .borderRadius(10)
                .backgroundColor(Color.Pink)
            }
          }, (item: number) => item.toString());
        }
      }
      .width('100%')
      .scrollBar(BarState.Off)
      .scrollable(ScrollDirection.Vertical)
      .edgeEffect(EdgeEffect.Spring)
    }
    .title('PageOne', { backgroundColor: Color.Yellow, barStyle: BarStyle.STACK })
    .toolbarConfiguration([
      {
        // $r('sys.symbol.phone_badge_star')需要替换为开发者所需的资源文件
        value: 'item1',
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.phone_badge_star'))
      }
    ], { backgroundColor: Color.Orange, barStyle: BarStyle.STACK })
    // 绑定有父子关系的可滚动容器组件
    .bindToNestedScrollable([{ parent: this.scrollScroller, child: this.listScroller }])
  }
}

@Component
struct MyPageTwo {
  private listScroller: Scroller = new Scroller();
  private arr: number[] = [];

  aboutToAppear(): void {
    for (let i = 0; i < 30; i++) {
      this.arr.push(i);
    }
  }

  build() {
    NavDestination() {
      List({ scroller: this.listScroller }) {
        ForEach(this.arr, (item: number, index: number) => {
          ListItem() {
            Text('' + item)
              .height(100)
              .fontSize(16)
              .textAlign(TextAlign.Center)
              .width('90%')
              .margin({ left: '5%' })
              .borderRadius(10)
              .backgroundColor(Color.Gray)
          }
        }, (item: number) => item.toString());
      }.width('100%')
    }
    .title('PageTwo', { backgroundColor: Color.Yellow, barStyle: BarStyle.STACK })
    .toolbarConfiguration([
      {
        // $r('sys.symbol.phone_badge_star')需要替换为开发者所需的资源文件
        value: 'item1',
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.phone_badge_star'))
      }
    ], { backgroundColor: Color.Orange, barStyle: BarStyle.STACK })
    // 绑定可滚动容器组件
    .bindToScrollable([this.listScroller])
  }
}

@Entry
@Component
struct Index {
  private stack: NavPathStack = new NavPathStack();

  @Builder
  MyPageMap(name: string) {
    if (name === 'myPageOne') {
      MyPageOne();
    } else {
      MyPageTwo();
    }
  }

  build() {
    Navigation(this.stack) {
      Column() {
        Button('push PageOne').onClick(() => {
          this.stack.pushPath({ name: 'myPageOne' });
        })
        Button('push PageTwo').onClick(() => {
          this.stack.pushPath({ name: 'myPageTwo' });
        })
      }.height('40%').justifyContent(FlexAlign.SpaceAround)
    }.width('100%')
    .height('100%')
    .title({ main: 'MainTitle', sub: 'subTitle' })
    .navDestination(this.MyPageMap)
  }
}
```
 ![](./img/zh-cn_image_0000002661612527.gif)

#### [h2]示例2（设置NavDestination自定义转场）

以下示例主要演示NavDestination设置自定义转场动画属性[customTransition](#customtransition15)的效果。

```
@Entry
@Component
struct NavDestinationCustomTransition {
  stack: NavPathStack = new NavPathStack();

  @Builder
  pageMap(name: string) {
    if (name) {
      NavDest();
    }
  }

  aboutToAppear(): void {
    this.stack.pushPath({name: 'dest0'});
  }

  build() {
    Navigation(this.stack) {
      // empty
    }
    .navDestination(this.pageMap)
    .hideNavBar(true)
    .title('Main Page')
    .titleMode(NavigationTitleMode.Mini)
  }
}

declare type voidFunc = () => void;

@Component
struct NavDest {
  @State name: string = 'NA';
  stack: NavPathStack = new NavPathStack();
  @State translateY: string = '0';

  @Builder
  titleBuilder() {
    Text(this.name)
      .fontSize(20)
      .height(55)
      .fontWeight(FontWeight.Bold)
      .width('100%')
      .padding({ left: 16, right: 16 })
  }

  build() {
    NavDestination() {
      Column() {
        Button('push next page', { stateEffect: true, type: ButtonType.Capsule })
          .width('80%')
          .height(40)
          .margin(20)
          .onClick(() => {
            this.stack.pushPath({ name: this.name == 'PageOne' ? "PageTwo" : "PageOne" });
          })
      }
      .size({ width: '100%', height: '100%' })
    }
    .title(this.titleBuilder)
    .translate({ y: this.translateY })
    .onReady((context) => {
      this.name = context.pathInfo.name;
      this.stack = context.pathStack;
    })
    .backgroundColor(this.name == 'PageOne' ? '#F1F3F5' : '#ff11dee5')
    .customTransition(
      (op: NavigationOperation, isEnter: boolean)
        : Array<NavDestinationTransition> | undefined => {
        console.info('[NavDestinationTransition]', 'reached delegate in frontend, op: ' + op + ', isEnter: ' + isEnter);

        let transitionOneEvent: voidFunc = () => { console.info('[NavDestinationTransition]', 'reached transitionOne, empty now!'); }
        let transitionOneFinishEvent: voidFunc = () => { console.info('[NavDestinationTransition]', 'reached transitionOneFinish, empty now!'); }
        let transitionOneDuration: number = 500;
        if (op === NavigationOperation.PUSH) {
          if (isEnter) {
            // ENTER_PUSH
            this.translateY = '100%';
            transitionOneEvent = () => {
              console.info('[NavDestinationTransition]', 'transitionOne, push & isEnter');
              this.translateY = '0';
            }
          } else {
            // EXIT_PUSH
            this.translateY = '0';
            transitionOneEvent = () => {
              console.info('[NavDestinationTransition]', 'transitionOne, push & !isEnter');
              this.translateY = '0';
            }
            transitionOneDuration = 450;
          }
        } else if (op === NavigationOperation.POP) {
          if (isEnter) {
            // ENTER_POP
            this.translateY = '0';
            transitionOneEvent = () => {
              console.info('[NavDestinationTransition]', 'transitionOne, pop & isEnter');
              this.translateY = '0';
            }
          } else {
            // EXIT_POP
            this.translateY = '0';
            transitionOneEvent = () => {
              console.info('[NavDestinationTransition]', 'transitionOne, pop & !isEnter');
              this.translateY = '100%';
            }
          }
        }

        let transitionOne: NavDestinationTransition = {
          duration: transitionOneDuration,
          delay: 0,
          curve: Curve.Friction,
          event: transitionOneEvent,
          onTransitionEnd: transitionOneFinishEvent
        };

        let transitionTwoEvent: voidFunc = () => { console.info('[NavDestinationTransition]', 'reached transitionTwo, empty now!'); }
        let transitionTwo: NavDestinationTransition = {
          duration: 1000,
          delay: 0,
          curve: Curve.EaseInOut,
          event: transitionTwoEvent,
          onTransitionEnd: () => { console.info('[NavDestinationTransition]', 'reached Two\'s finish'); }
        };

        return [
          transitionOne,
          transitionTwo,
        ];
      })
  }
}
```
 ![](./img/zh-cn_image_0000002631413236.gif)

#### [h2]示例3（设置指定的NavDestination系统转场）

以下示例主要演示NavDestination设置系统转场动画[systemTransition](#systemtransition14)为Fade、Explode、SlideBottom与SlideRight时的转场效果。

```
@Entry
@Component
struct NavDestinationSystemTransition {
  @Provide stack: NavPathStack = new NavPathStack()
  @Provide homePageTransitionType: NavigationSystemTransitionType = NavigationSystemTransitionType.DEFAULT;

  @Builder
  pageMap(name: string) {
    if (name === 'Fade') {
      Fade();
    } else if (name === 'Explode') {
      Explode();
    } else if (name === 'SlideRight') {
      SlideRight();
    } else if (name === 'SlideBottom') {
      SlideBottom();
    } else {
      Dest();
    }
  }

  aboutToAppear(): void {
    this.stack.pushPath({name: 'Dest'});
  }

  build() {
    Navigation(this.stack) {
      // empty
    }
    .navDestination(this.pageMap)
    .hideNavBar(true)
  }
}

@Component
struct Dest {
  @Consume stack: NavPathStack;
  @Consume homePageTransitionType: NavigationSystemTransitionType;
  @State name: string = 'NA';

  build() {
    NavDestination() {
      HomeBody();
    }
    .title('Navigation System Animation')
    .onReady((context) => {
      this.name = context.pathInfo.name;
    })
    .systemTransition(this.homePageTransitionType)
  }
}

@Component
struct Fade {
  @Consume stack: NavPathStack;
  @State name: string = 'NA';

  build() {
    NavDestination() {
      DestBody({
        name: this.name
      })
    }
    .title(this.name)
    .onReady((context) => {
      this.name = context.pathInfo.name;
    })
    .systemTransition(NavigationSystemTransitionType.FADE)
  }
}

@Component
struct Explode {
  @Consume stack: NavPathStack;
  @State name: string = 'NA';

  build() {
    NavDestination() {
      DestBody({
        name: this.name
      })
    }
    .title(this.name)
    .onReady((context) => {
      this.name = context.pathInfo.name;
    })
    .systemTransition(NavigationSystemTransitionType.EXPLODE)
  }
}

@Component
struct SlideRight {
  @Consume stack: NavPathStack;
  @State name: string = 'NA';

  build() {
    NavDestination() {
      DestBody({
        name: this.name
      })
    }
    .title(this.name)
    .onReady((context) => {
      this.name = context.pathInfo.name;
    })
    .systemTransition(NavigationSystemTransitionType.SLIDE_RIGHT)
  }
}

@Component
struct SlideBottom {
  @Consume stack: NavPathStack;
  @State name: string = 'NA';

  build() {
    NavDestination() {
      DestBody({
        name: this.name
      })
    }
    .title(this.name)
    .onReady((context) => {
      this.name = context.pathInfo.name;
    })
    .systemTransition(NavigationSystemTransitionType.SLIDE_BOTTOM)
  }
}

@Component
struct DestBody {
  name: string = 'NA';

  columnTextSize: number = 22;
  columnTextFontWeight: FontWeight = FontWeight.Bolder;
  columnWidth: string = '65%';
  columnPadding: number = 22;
  columnMargin: number = 10;
  columnBorderRadius: number = 10;

  build() {
    Column() {
      Column()
        .width('85')
        .height(50)
        .backgroundColor(Color.White)
      Column() {
        Text(this.name)
          .fontSize(this.columnTextSize)
          .fontWeight(this.columnTextFontWeight)
      }
      .width(this.columnWidth)
      .padding(this.columnPadding)
      .margin(this.columnMargin)
      .borderRadius(this.columnBorderRadius)
      .shadow(ShadowStyle.OUTER_DEFAULT_LG)
    }
  }
}

@Component
struct HomeBody {
  @Consume stack: NavPathStack;
  @Consume homePageTransitionType: NavigationSystemTransitionType;

  columnTextSize: number = 22;
  columnTextFontWeight: FontWeight = FontWeight.Bolder;
  columnWidth: string = '85%';
  columnPadding: number = 22;
  columnMargin: number = 10;
  columnBorderRadius: number = 10;
  columnShadow: ShadowStyle = ShadowStyle.OUTER_DEFAULT_MD;

  build() {
    Column() {
      Search({ value: 'Search' })
        .width(this.columnWidth)

      Column() {
        Text('fade')
          .fontSize(this.columnTextSize)
          .fontWeight(this.columnTextFontWeight)
      }
      .width(this.columnWidth)
      .padding(this.columnPadding)
      .margin(this.columnMargin)
      .borderRadius(this.columnBorderRadius)
      .shadow(this.columnShadow)
      .onClick(() => {
        this.homePageTransitionType = NavigationSystemTransitionType.FADE;
        this.stack.pushPath({name: 'Fade'});
      })

      Column() {
        Text('explode')
          .fontSize(this.columnTextSize)
          .fontWeight(this.columnTextFontWeight)
      }
      .width(this.columnWidth)
      .padding(this.columnPadding)
      .margin(this.columnMargin)
      .borderRadius(this.columnBorderRadius)
      .shadow(this.columnShadow)
      .onClick(() => {
        this.homePageTransitionType = NavigationSystemTransitionType.EXPLODE;
        this.stack.pushPath({name: 'Explode'});
      })

      Column() {
        Text('slide right')
          .fontSize(this.columnTextSize)
          .fontWeight(this.columnTextFontWeight)
      }
      .width(this.columnWidth)
      .padding(this.columnPadding)
      .margin(this.columnMargin)
      .borderRadius(this.columnBorderRadius)
      .shadow(this.columnShadow)
      .onClick(() => {
        this.homePageTransitionType = NavigationSystemTransitionType.SLIDE_RIGHT;
        this.stack.pushPath({name: 'SlideRight'});
      })

      Column() {
        Text('slide bottom')
          .fontSize(this.columnTextSize)
          .fontWeight(this.columnTextFontWeight)
      }
      .width(this.columnWidth)
      .padding(this.columnPadding)
      .margin(this.columnMargin)
      .borderRadius(this.columnBorderRadius)
      .shadow(this.columnShadow)
      .onClick(() => {
        this.homePageTransitionType = NavigationSystemTransitionType.SLIDE_BOTTOM;
        this.stack.pushPath({name: 'SlideBottom'});
      })
    }
  }
}
```
 ![](./img/zh-cn_image_0000002661732467.gif)

![](./img/zh-cn_image_0000002631253346.gif)

![](./img/zh-cn_image_0000002661612529.gif)

![](./img/zh-cn_image_0000002631413238.gif)

#### [h2]示例4（NavDestination配置页面方向和对应状态栏、导航条显隐）

以下示例主要演示每个NavDestination可以配置[preferredOrientation](#preferredorientation19)指定的页面方向和状态栏，导航条显隐状态。

从API version 19开始，新增了preferredOrientation属性。

```
import { window } from '@kit.ArkUI';

@Component
struct PortraitPage {
  @State info: string = '';
  private stack: NavPathStack | undefined = undefined;
  build() {
    NavDestination() {
      Stack({alignContent: Alignment.Center}) {
        Button('push LANDSCAPE page').onClick(() => {
          this.stack?.pushPath({name: 'landscape'});
        })
      }.width('100%').height('100%')
    }
    .width('100%').height('100%')
    .title('PortraitPage')
    .preferredOrientation(window.Orientation.PORTRAIT) // 竖屏方向
    .enableStatusBar(true) // 显示状态栏
    .enableNavigationIndicator(true) // 显示导航条
    .backgroundColor('#ffbaece9')
    .onResult((result: ESObject)=>{
      this.info = result as string;
    })
    .onReady((ctx: NavDestinationContext) => {
      this.stack = ctx.pathStack;
    })
  }
}

@Component
struct LandscapePage {
  private stack: NavPathStack | undefined = undefined;
  build() {
    NavDestination() {
      Stack({alignContent: Alignment.Center}) {
        Button('push PORTRAIT page').onClick(() => {
          this.stack?.pushPath({name: 'portrait'});
        })
      }.width('100%').height('100%')
    }
    .width('100%').height('100%')
    .title('LandscapePage')
    .preferredOrientation(window.Orientation.LANDSCAPE) // 横屏方向
    .enableStatusBar(false) // 隐藏状态栏
    .enableNavigationIndicator(false) // 隐藏导航条
    .backgroundColor('#ffecb8b8')
    .ignoreLayoutSafeArea([LayoutSafeAreaType.SYSTEM], [LayoutSafeAreaEdge.TOP, LayoutSafeAreaEdge.BOTTOM])
    .onReady((ctx: NavDestinationContext) => {
      this.stack = ctx.pathStack;
    })
  }
}

@Entry
@Component
struct ExamplePage {
  private stack: NavPathStack = new NavPathStack();

  aboutToAppear(): void {
    this.stack.pushPath({name: "portrait"});
  }

  @Builder
  MyPageMap(name: string) {
    if (name === 'portrait') {
      PortraitPage();
    } else {
      LandscapePage();
    }
  }

  build() {
    Navigation(this.stack) {
    }
    .width('100%')
    .height('100%')
    .hideNavBar(true)
    .navDestination(this.MyPageMap)
  }
}
```
 ![](./img/zh-cn_image_0000002661732469.gif)

#### [h2]示例5（NavDestination的onActive与onInActive生命周期）

从API version 17开始，NavDestination新增[onActive](#onactive17)、[onInactive](#oninactive17)属性。该示例演示onActive与onInactive生命周期的各种触发场景。

```
import { promptAction, ComponentContent, OverlayManager } from '@kit.ArkUI';

class Params {
  text: string = "";
  offset: Position;

  constructor(text: string, offset: Position) {
    this.text = text;
    this.offset = offset;
  }
}

let overlayShownTag: boolean = false;

@Builder
function builderText(params: Params) {
  Column() {
    Text('I am ' + params.text)
      .fontWeight(FontWeight.Bolder)
      .align(Alignment.Center)
      .fontSize(25)
      .offset({ y: '10%' })
  }
  .backgroundColor(params.text === 'overlay' ? '#ffc' : '#ccf')
  .width('100%')
  .height('100%')
  .offset(params.offset)
}

@Entry
@Component
struct Index {
  stack: NavPathStack = new NavPathStack();

  @Builder
  pageMap(name: string) {
    if (name === 'standard' || name === 'Home') {
      NavDest({
        name: name
      })
    }
    else if (name === 'dialog') {
      NavDest({
        name: name,
        mode: NavDestinationMode.DIALOG,
        positionY: '40%'
      })
    }
  }

  aboutToAppear(): void {
    this.stack.pushPath({name: 'Home'});
  }

  build() {
    Navigation(this.stack) {

    }
    .hideNavBar(true)
    .navDestination(this.pageMap)
  }
}

@Component
struct NavDest {
  @State positionY: string = '0%';
  name: string = 'NA';
  mode: NavDestinationMode = NavDestinationMode.STANDARD;

  build() {
    NavDestination() {
      NavBody()
    }
    .backgroundColor(this.mode === NavDestinationMode.DIALOG ? Color.Pink : undefined)
    .height(this.mode === NavDestinationMode.DIALOG ? '65%' : '100%')
    .mode(this.mode)
    .title(this.name)
    .position({ y: this.positionY })
    .onActive((reason: NavDestinationActiveReason) => {
      let onActiveMsg: string = `[activeTest] ${this.name} onActive, reason: ${reason}`;
      console.info(onActiveMsg);
      // API version 17版本，请替换为promptAction.showToast接口。从API version 18开始，请使用示例中的promptAction.openToast接口。
      promptAction.openToast({ message: onActiveMsg }).catch(() => {
        console.info('open toast failed');
      });
    })
    .onInactive((reason: NavDestinationActiveReason) => {
      let onInActiveMsg: string = `[activeTest] ${this.name} onInactive, reason: ${reason}`;
      console.info(onInActiveMsg);
      // API version 17版本，请替换为promptAction.showToast接口。从API version 18开始，请使用示例中的promptAction.openToast接口。
      promptAction.openToast({ message: onInActiveMsg }).catch(() => {
        console.info('open toast failed');
      });
    })
    .onBackPressed(() => {
      if (overlayShownTag) {
        overlayShownTag = false;
        this.getUIContext().getOverlayManager().hideAllComponentContents();
        return true;
      }
      return false;
    })
  }
}

@Component
struct NavBody {
  @State isShow: boolean = false;
  @State isBindSheetShow: boolean = false;
  stack: NavPathStack = new NavPathStack();

  aboutToAppear(): void {
    this.stack = this.queryNavigationInfo()?.pathStack!;
  }

  @Builder
  myBuilder(id: string) {
    Column() {
      Text('I am ' + id)
        .fontWeight(FontWeight.Bolder)
        .align(Alignment.Center)
        .fontSize(25)
        .offset({ y: '10%' })
    }
    .width('100%')
    .height('100%')
  }

  build() {
    Column() {
      Row() {
        Button('pushPath standard')
          .margin(5)
          .onClick(() => {
            this.stack.pushPath({name: 'standard'});
          })
        Button('pushPath dialog')
          .margin(5)
          .onClick(() => {
            this.stack.pushPath({name: 'dialog'});
          })
      }
      Column() {
        Row() {
          Button("open Modal")
            .onClick(() => {
              this.isShow = true;
            })
            .fontColor(Color.Black)
            .backgroundColor('#ccc')
            .margin(5)
            .bindContentCover(
              this.isShow,
              this.myBuilder('modal'), {
                backgroundColor: '#fcf',
                onDisappear: () => {
                  this.isShow = false;
                }
              })
          Button("open BindSheet")
            .onClick(() => {
              this.isBindSheetShow = true;
            })
            .fontColor(Color.Black)
            .backgroundColor('#ccc')
            .margin(5)
            .bindSheet($$this.isBindSheetShow, this.myBuilder('bindSheet'), {
              height: '60%',
              backgroundColor: '#cfc'
            })
        }
        Row() {
          Button("open Dialog")
            .onClick(() => {
              let componentContent = new ComponentContent(
                this.getUIContext(), wrapBuilder<[Params]>(builderText),
                new Params('dialog', {y: '10%'}));
              this.getUIContext().getPromptAction().openCustomDialog(componentContent)
                .then(() => {
                  console.info('[activeTest] open custom dialog success');
                })
                .catch(() => {
                  console.info('[activeTest] open custom dialog failed');
                })
            })
            .fontColor(Color.Black)
            .backgroundColor('#ccc')
            .margin(5)
          Button("open Overlay")
            .onClick(() => {
              let componentContent = new ComponentContent(
                this.getUIContext(), wrapBuilder<[Params]>(builderText),
                new Params('overlay', {y: '10%'}));
              this.getUIContext().getOverlayManager().addComponentContent(componentContent);
              this.getUIContext().getOverlayManager().showComponentContent(componentContent);
              overlayShownTag = true;
            })
            .fontColor(Color.Black)
            .backgroundColor('#ccc')
            .margin(5)
        }
      }
      .width('95%')
    }
    .width('100%')
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002631253348.gif)

NavDestination其他用法可参考[Navigation示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#示例)。
