---
title: "TextInput"
upstream_id: "harmonyos-references/ts-basic-components-textinput"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:11.775768"
---

# TextInput

单行文本输入框组件。

![](./img/note_3.0-zh-cn.png) 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor)组件。

#### 子组件

无

#### 接口

TextInput(value?: TextInputOptions)

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [TextInputOptions](#textinputoptions对象说明) | 否 | TextInput组件参数。 |

#### TextInputOptions对象说明

TextInput初始化参数。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| placeholder | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | 否 | 是 | 设置无输入时的提示文本。 |
| text | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | 否 | 是 | 设置输入框当前的文本内容。 建议通过onChange事件将状态变量与文本实时绑定， 避免组件刷新时TextInput中的文本内容异常。 从API version 10开始，该参数支持[$$](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-two-way-sync)双向绑定变量。 从API version 18开始，该参数支持[!!](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-binding#系统组件参数双向绑定)双向绑定变量。 |
| controller8+ | [TextInputController](#textinputcontroller8) | 否 | 是 | 设置TextInput控制器。 |

#### 属性

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)，还支持以下属性：

![](./img/note_3.0-zh-cn.png) 默认情况下，通用属性[padding](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size#padding)的默认值为：

{

top: '8vp',

right: '16vp',

bottom: '8vp',

left: '16vp'

}

输入框开启下划线模式时，通用属性padding的默认值为：

{

top: '12vp',

right: '0vp',

bottom: '12vp',

left: '0vp'

}

当输入框设置padding为0时，可设置[borderRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-border#borderradius)为0避免光标被截断。当光标在文本框边缘显示异常时，请检查是否是padding、borderRadius属性影响造成。

从API version 10开始，单行输入框可设置.width('auto')使组件宽度自适应文本宽度，自适应时组件宽度受constraintSize属性以及父容器传递的最大最小宽度限制，其余使用方式参考[尺寸设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size)。

#### [h2]type

type(value: InputType)

设置输入框类型。

不同的InputType会拉起对应类型的键盘，同时限制输入。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [InputType](#inputtype枚举说明) | 是 | 输入框类型。 默认值：InputType.Normal |

![](./img/note_3.0-zh-cn.png) 密码填充服务需要特定的输入框类型。如何使用密码填充服务参考[快速适配](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-quick-adaptation)。

设置[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)时，装饰线[decoration](#decoration12)、下划线[showUnderline](#showunderline10)不生效。

#### [h2]placeholderColor

placeholderColor(value: ResourceColor)

设置placeholder文本颜色。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 是 | placeholder文本颜色。 默认值：跟随主题。 Wearable设备上默认值为：'#99ffffff' |

#### [h2]placeholderFont

placeholderFont(value?: Font)

设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [Font](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#font) | 否 | placeholder文本样式。 Wearable设备上默认值为：18fp |

![](./img/note_3.0-zh-cn.png) 可以使用[loadFontSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#loadfontsync)注册自定义字体。

#### [h2]enterKeyType

enterKeyType(value: EnterKeyType)

设置输入法回车键类型。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [EnterKeyType](#enterkeytype枚举说明) | 是 | 输入法回车键类型。 默认值：EnterKeyType.Done |

#### [h2]caretColor

caretColor(value: ResourceColor)

设置输入框光标颜色。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 是 | 输入框光标颜色。 默认值：'#007DFF' |

![](./img/note_3.0-zh-cn.png) 从API version 12开始，此接口支持设置文本手柄颜色，光标和文本手柄颜色保持一致。

#### [h2]maxLength

maxLength(value: number)

设置文本的最大输入字符数。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 文本的最大输入字符数。 默认值：Infinity，可以无限输入。 **说明：** 当不设置该属性或设置异常值时，取默认值，设置小数时，取整数部分，设置值超过2^31-1时，可能导致异常行为。 |

#### [h2]fontColor

fontColor(value: ResourceColor)

设置字体颜色。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 是 | 字体颜色。 Wearable设备上默认值为：'#dbffffff' |

#### [h2]fontSize

fontSize(value: Length)

设置字体大小。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | 是 | 字体大小。fontSize为number类型时，使用fp单位。字体默认大小16fp。不支持设置百分比字符串。 Wearable设备上默认值为：18fp |

#### [h2]fontStyle

fontStyle(value: FontStyle)

设置字体样式。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontstyle) | 是 | 字体样式。 默认值：FontStyle.Normal |

#### [h2]fontWeight

fontWeight(value: number | FontWeight | ResourceStr)

设置文本的字体粗细，设置过大可能会在不同字体下有截断。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | [FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontweight) | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | 是 | 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。 默认值：FontWeight.Normal 从API version 20开始，支持Resource类型。 |

#### [h2]fontFamily

fontFamily(value: ResourceStr)

设置字体列表。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | 是 | 字体列表。默认字体'HarmonyOS Sans'。 使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS Sans'。 应用当前支持'HarmonyOS Sans'字体和自定义字体。 卡片当前仅支持'HarmonyOS Sans'字体。 |

![](./img/note_3.0-zh-cn.png) 推荐使用[loadFontSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#loadfontsync)注册自定义字体。

#### [h2]inputFilter8+

inputFilter(value: ResourceStr, error?: Callback<string>)

通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。

单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。

从API version 11开始，设置inputFilter且输入的字符不为空字符，会导致[type](#type)接口附带的文本过滤效果失效。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | 是 | 正则表达式。 |
| error | Callback | 否 | 正则匹配失败时，返回被过滤的内容。 |

#### [h2]copyOption9+

copyOption(value: CopyOptions)

设置输入的文本是否可复制。设置CopyOptions.None时，只支持粘贴和全选。

设置CopyOptions.None时，不允许拖拽。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [CopyOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#copyoptions9) | 是 | 输入的文本是否可复制。 默认值：CopyOptions.LocalDevice，支持设备内复制。 |

#### [h2]showPasswordIcon9+

showPasswordIcon(value: boolean)

设置当密码输入模式时，输入框末尾的图标是否显示。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 密码输入模式时，输入框末尾的图标是否显示。 true表示显示，false表示不显示。 默认值：TV设备为false，其他设备为true。 |

#### [h2]style9+

style(value: TextInputStyle | TextContentStyle)

设置输入框为默认风格或内联输入风格，内联输入风格只支持InputType.Normal类型。

输入框类型介绍请参考[type](#type)接口。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [TextInputStyle](#textinputstyle9枚举说明) | [TextContentStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#textcontentstyle10) | 是 | 输入框为默认风格或内联输入风格。 默认值：TextInputStyle.Default |

#### [h2]textAlign9+

textAlign(value: TextAlign)

设置文本在输入框中的水平对齐方式。

支持TextAlign.Start、TextAlign.Center和TextAlign.End。TextAlign.JUSTIFY的对齐方式按照TextAlign.Start处理。

可通过[align](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-location#align)属性控制文本段落在垂直方向上的位置。此组件中不可使用align属性控制文本段落在水平方向上的位置。

- Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。
- Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。
- Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [TextAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#textalign) | 是 | 文本在输入框中的水平对齐方式。 默认值：TextAlign.Start |

![](./img/note_3.0-zh-cn.png) textAlign只能调整文本整体的布局，不影响字符的显示顺序。若需要调整字符的显示顺序，请参考[镜像状态字符对齐](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-internationalization#镜像状态字符对齐)。

#### [h2]textDirection23+

textDirection(direction: TextDirection | undefined)

指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| direction | [TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textdirection22) | undefined | 是 | 文本排版方向。 设置为undefined时，按照TextDirection.DEFAULT处理，表现为文本排版方向遵循组件布局方向。 |

#### [h2]selectedBackgroundColor10+

selectedBackgroundColor(value: ResourceColor)

设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 是 | 文本选中底板颜色。 |

#### [h2]caretStyle10+

caretStyle(value: CaretStyle)

设置光标风格。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [CaretStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#caretstyle10) | 是 | 光标的风格。 |

![](./img/note_3.0-zh-cn.png) 当同时设置caretColor属性和caretStyle属性中的color参数时，遵循后设置生效原则。

从API version 12开始，此接口支持设置文本手柄颜色，光标和文本手柄颜色保持一致。

#### [h2]caretPosition10+

caretPosition(value: number)

设置光标位置。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 光标的位置。 第一个字符前的位置是0。 |

#### [h2]showUnit10+

showUnit(value: CustomBuilder)

设置控件作为文本框单位。需搭配[showUnderline](#showunderline10)使用，当showUnderline为true时生效。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 是 | 文本输入时，文本框的显示单位。 |

#### [h2]showError10+

showError(value?: ResourceStr | undefined)

设置错误状态下提示的错误文本或者不显示错误状态。

当参数类型为ResourceStr并且输入内容不符合定义规范时，提示错误文本，当提示错误单行文本超长时，末尾以省略号显示。当参数类型为undefined时，不显示错误状态。请参考[示例2](#示例2设置下划线)。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | undefined | 否 | 错误状态下提示的错误文本或者不显示错误状态。 默认不显示错误状态。 Wearable设备上字体大小为：13fp，对齐方式为：居中对齐 **说明：** 从API version 12开始，value支持Resource类型。 |

#### [h2]showUnderline10+

showUnderline(value: boolean)

设置是否开启下划线。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否开启下划线。 true表示开启，false表示不开启。 默认值：false 下划线默认颜色为'#33182431'，默认粗细为1px，文本框尺寸48vp，下划线只支持InputType.Normal类型。 |

![](./img/note_3.0-zh-cn.png) 设置[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)时，装饰线[decoration](#decoration12)、下划线[showUnderline](#showunderline10)不生效。

#### [h2]passwordIcon10+

passwordIcon(value: PasswordIcon)

设置当密码输入模式时，输入框末尾的图标。

支持jpg、png、bmp、heic和webp类型的图片格式。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [PasswordIcon](#passwordicon10对象说明) | 是 | 密码输入模式时，输入框末尾的图标。 默认为系统提供的密码图标。 该图标的固定尺寸为24vp，Wearable设备上默认值为28vp，若引用的图标过大或过小，均显示为固定尺寸。 |

#### [h2]enableKeyboardOnFocus10+

enableKeyboardOnFocus(value: boolean)

设置TextInput通过点击以外的方式获焦时，是否主动拉起软键盘。

从API version 10开始，获焦默认绑定输入法。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 通过点击以外的方式获焦时，是否主动拉起软键盘。 true表示主动拉起软键盘，false表示不主动拉起。 默认值：TV设备为false，其他设备为true。 |

#### [h2]selectionMenuHidden10+

selectionMenuHidden(value: boolean)

设置是否隐藏系统文本选择菜单。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否隐藏系统文本选择菜单。 设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，隐藏系统文本选择菜单。 设置为false时，显示系统文本选择菜单。 默认值：false |

#### [h2]barState10+

barState(value: BarState)

设置内联输入风格编辑态时滚动条的显示模式。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [BarState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#barstate) | 是 | 内联输入风格编辑态时滚动条的显示模式。 默认值：BarState.Auto |

#### [h2]maxLines10+

maxLines(value: number)

设置内联输入风格编辑态时文本可显示的最大行数。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 内联输入风格编辑态时文本可显示的最大行数。 默认值：3 取值范围：(0, UINT32_MAX] |

#### [h2]customKeyboard10+

customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions)

设置自定义键盘。

当设置自定义键盘时，输入框激活后不会打开系统输入法，而是加载指定的自定义组件。

自定义键盘的高度可以通过自定义组件根节点的height属性设置，宽度不可设置，使用系统默认值。

自定义键盘采用覆盖原始界面的方式呈现，当没有开启避让模式或者输入框不需要避让的场景不会对应用原始界面产生压缩或者上提。

自定义键盘无法获取焦点，但是会拦截手势事件。

默认在输入控件失去焦点时，关闭自定义键盘，开发者也可以通过[TextInputController](#textinputcontroller8).[stopEditing](#stopediting10)方法控制键盘关闭。

当设置自定义键盘时，可以通过绑定[onKeyPreIme](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#onkeypreime12)事件规避物理键盘的输入。

从API version 23开始，自定义键盘可以通过[setCustomKeyboardContinueFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#setcustomkeyboardcontinuefeature23)开启接续，在切换至其他自定义键盘时，会直接切换，不会触发键盘关闭和拉起动画。

![](./img/note_3.0-zh-cn.png) 该接口不支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | [ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent#componentcontent-1)22+ | undefined22+ | 是 | 自定义键盘。设定值为undefined时，关闭自定义键盘。 |
| options12+ | [KeyboardOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#keyboardoptions12) | 否 | 设置自定义键盘是否支持避让功能。 |

#### [h2]enableAutoFill11+

enableAutoFill(value: boolean)

设置是否启用自动填充。典型场景参考[密码自动填充服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault)、[智能填充服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-intelligent-filling)。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否启用自动填充。 true表示启用，false表示不启用。 默认值：true |

#### [h2]enableSelectedDataDetector22+

enableSelectedDataDetector(enable: boolean | undefined)

设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。

当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。

启用后可识别选区中的邮件、电话、网址、日期、地址等，并在文本选择菜单中展示对应的AI菜单项。默认启用AI菜单功能。

AI菜单功能启用时，在组件中选中文本后，文本选择菜单能够展示对应的AI菜单项，包括[TextMenuItemId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuitemid12)中的url（打开链接）、email（新建邮件）、phoneNumber（呼叫）、address（导航前往）、dateTime（新建日程）。

AI菜单生效时，选中范围内需包括且仅包括一个完整的AI实体，才能展示对应的选项。该菜单项与[TextMenuItemId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#textmenuitemid12)中的askAI菜单项不同时出现。

需要[CopyOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#copyoptions9)为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。

元服务API： 从API version 22开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | undefined | 是 | 开启选中词文本识别。 true：开启识别，false：关闭识别。默认值为：true。 |

#### [h2]passwordRules11+

passwordRules(value: string)

定义生成密码的规则。在触发自动填充时，所设置的密码规则会透传给密码保险箱，用于新密码的生成。

具体使用指导请参考[为应用添加自动生成高强度密码的建议](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/passwordvault-custom-strong-password-rules)。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | 是 | 定义生成密码的规则。 |

#### [h2]cancelButton11+

cancelButton(options: CancelButtonOptions)

设置右侧清除按钮样式，仅支持图片类型的图标。不支持[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)。示例请参考[示例4（设置右侧清除按钮样式）](#示例4设置右侧清除按钮样式)。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [CancelButtonOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#cancelbuttonoptions12对象说明) | 是 | 右侧清除按钮样式选项。 默认值： { style: CancelButtonStyle.INPUT } Wearable设备上默认值为：28vp |

#### [h2]selectAll11+

selectAll(value: boolean)

设置初始状态时，是否全选文本。不支持[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否全选文本。 true表示会全选文本，false表示不会全选文本。 默认值：false |

#### [h2]showCounter11+

showCounter(value: boolean, options?: InputCounterOptions)

设置当通过InputCounterOptions输入的字符数超过阈值时显示计数器。未调用showCounter接口时，默认不显示计数器。

参数value为true时，才能设置options，文本框开启计数下标功能，需要配合[maxLength](#maxlength)（设置最大字符限制）一起使用。字符计数器显示的效果是当前输入字符数/最大可输入字符数。

当输入字符数大于最大字符数乘百分比值时，显示字符计数器。如果用户设置计数器时不设置InputCounterOptions，那么当前输入字符数超过最大字符数时，边框和计数器下标将变为红色。用户同时设置参数value为true和[InputCounterOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#inputcounteroptions11对象说明)，当thresholdPercentage数值在有效区间内，且输入字符数超过最大字符数时，边框和计数器下标将变为红色，框体抖动。highlightBorder设置为false，则不显示红色边框，计数器默认显示红色，框体抖动。

[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)、[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)下字符计数器不显示。

[示例5（设置计数器）](#示例5设置计数器)展示了设置showCounter的效果。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否显示计数器。 true表示显示计数器，false表示不显示。 |
| options | [InputCounterOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#inputcounteroptions11对象说明) | 否 | 计数器的配置项。 |

#### [h2]contentType12+

contentType(value: ContentType)

设置自动填充类型。典型场景参考[智能填充服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-intelligent-filling)。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ContentType](#contenttype12枚举说明) | 是 | 自动填充类型。 |

#### [h2]underlineColor12+

underlineColor(value: ResourceColor|UnderlineColor|undefined)

设置下划线颜色。

开启输入框下划线[showUnderline](#showunderline10)时，支持配置下划线颜色。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | [UnderlineColor](#underlinecolor12对象说明) | undefined | 是 | 设置下划线颜色。 当设置下划线颜色模式时，修改下划线颜色。当只设定非特殊状态下的颜色，可以直接输入ResourceColor。设定值为undefined、null、无效值时，所有下划线恢复为默认值。 默认值：主题配置的下划线颜色。主题配置的默认下划线颜色为'#33182431'。 |

#### [h2]lineHeight12+

lineHeight(value: number | string | Resource)

设置文本的行高。

设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。

![](./img/note_3.0-zh-cn.png)

- 特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。
- 设置[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)时，通过该接口设置行高[lineHeight](#lineheight12)不生效。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | string | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 是 | 文本的文本行高。 |

#### [h2]decoration12+

decoration(value: TextDecorationOptions)

设置文本装饰线类型样式及其颜色。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [TextDecorationOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#textdecorationoptions12对象说明) | 是 | 文本装饰线对象。 默认值：{ type: TextDecorationType.None, color: Color.Black, style: TextDecorationStyle.SOLID, thicknessScale: 1.0 } |

![](./img/note_3.0-zh-cn.png) 当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。

当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。

设置[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)时，装饰线[decoration](#decoration12)、下划线[showUnderline](#showunderline10)不生效。

#### [h2]letterSpacing12+

letterSpacing(value: number | string | Resource)

设置文本字符间距。设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。

当取值为负值时，文字会发生压缩，负值过小时会将组件内容区大小压缩为0，导致无内容显示。

对每个字符生效，包括行尾字符。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | string | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 是 | 文本字符间距。 单位：[fp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |

#### [h2]fontFeature12+

fontFeature(value: string)

设置文字特性效果，比如数字等宽的特性。

格式为：normal | <feature-tag-value>

<feature-tag-value>的格式为：<string> [ <integer> | on | off ]

<feature-tag-value>的个数可以有多个，中间用','隔开。

例如，使用等宽数字的输入格式为："ss01" on。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string | 是 | 文字特性效果。 |

Font Feature当前支持的属性参见[fontFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#fontfeature12)属性列表。

设置Font Feature属性，Font Feature是OpenType字体的高级排版能力，如支持连字、数字等宽等特性，一般用在自定义字体中，其能力需要字体本身支持。

更多Font Feature能力介绍可参考https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop和https://sparanoid.com/lab/opentype-features/。

![](./img/note_3.0-zh-cn.png) 设置[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)时，不支持通过fontFeature设置文本样式。

#### [h2]wordBreak12+

wordBreak(value: WordBreak)

设置文本断行规则。该属性在组件设置[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)时样式生效，但对placeholder文本无效。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#wordbreak11) | 是 | 内联输入风格编辑态时断行规则。 默认值：WordBreak.BREAK_WORD |

![](./img/note_3.0-zh-cn.png) 组件不支持clip属性设置，设置该属性任意枚举值对组件文本截断无影响。

#### [h2]textOverflow12+

textOverflow(value: TextOverflow)

设置文本超长时的显示方式。仅在[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)的编辑态、非编辑态下支持。

文本截断是按字进行。例如，英文以单词为最小单位进行截断，若需要以字母为单位进行截断，可将wordBreak属性设置为WordBreak.BREAK_ALL。

当overflow设置为TextOverflow.None时，效果与TextOverflow.Clip相同。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [TextOverflow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#textoverflow) | 是 | 文本超长时的显示方式。 [内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)非编辑态下默认值：TextOverflow.Ellipsis 内联模式编辑态下默认值：TextOverflow.Clip |

![](./img/note_3.0-zh-cn.png) TextInput组件不支持设置TextOverflow.MARQUEE模式，当设置为TextOverflow.MARQUEE模式时，[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)非编辑态下显示为TextOverflow.Ellipsis，内联模式编辑态下以及非内联模式下显示为TextOverflow.Clip。

未设置内联模式时，按照默认风格显示。若此时设置textOverflow，则不生效。

#### [h2]textIndent12+

textIndent(value: Dimension)

设置首行文本缩进。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [Dimension](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#dimension10) | 是 | 首行文本缩进。 默认值：0 单位：[vp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) 取值范围：大于等于0。设置负数时，按默认值处理。 |

#### [h2]minFontSize12+

minFontSize(value: number | string | Resource)

设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。

需配合[maxFontSize](#maxfontsize12)以及[maxLines](#maxlines10)(组件设置为内联输入风格且编辑态时使用)或布局大小限制使用，单独设置不生效。

自适应字号生效时，fontSize设置不生效。

minFontSize小于或等于0时，自适应字号不生效，此时按照[fontSize](#fontsize)属性的值生效，未设置时按照其默认值生效。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | string | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 是 | 文本最小显示字号。 单位：[fp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |

#### [h2]maxFontSize12+

maxFontSize(value: number | string | Resource)

设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。

需配合[minFontSize](#minfontsize12)以及[maxLines](#maxlines10)(组件设置为内联输入风格且编辑态时使用)或布局大小限制使用，单独设置不生效。

自适应字号生效时，fontSize设置不生效。

maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[fontSize](#fontsize)属性的值生效，未设置时按照其默认值生效。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | string | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 是 | 文本最大显示字号。 单位：[fp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |

#### [h2]heightAdaptivePolicy12+

heightAdaptivePolicy(value: TextHeightAdaptivePolicy)

组件设置为内联输入风格时，设置文本自适应高度的方式。

当设置为TextHeightAdaptivePolicy.MAX_LINES_FIRST时，优先使用[maxLines](#maxlines10)属性来调整文本高度。如果使用maxLines属性的布局大小超过了布局约束，则尝试在[minFontSize](#minfontsize12)和[maxFontSize](#maxfontsize12)的范围内缩小字体以显示更多文本。

当设置为TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST时，优先使用minFontSize属性来调整文本高度。如果使用minFontSize属性可以将文本布局在一行中，则尝试在minFontSize和maxFontSize的范围内增大字体并使用最大限度的字体大小。

当设置为TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST时，与TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST效果一样。

组件设置为非内联输入风格时，设置文本自适应高度(TextHeightAdaptivePolicy)的三种方式效果一样，即在minFontSize和maxFontSize的范围内缩小字体以显示更多文本。

![](./img/note_3.0-zh-cn.png) 组件设置为内联输入风格，编辑态与非编辑态存在字体大小不一致情况。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [TextHeightAdaptivePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#textheightadaptivepolicy10) | 是 | 文本自适应高度的方式。 默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST |

#### [h2]showPassword12+

showPassword(visible: boolean)

设置密码的显隐状态。

当[InputType](#inputtype枚举说明)设置为Password、NEW_PASSWORD和NUMBER_PASSWORD模式时，密码保护功能才能生效。非密码输入模式则不会触发该功能。

[密码模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#密码模式)时，由于输入框后端的状态和前端应用侧的状态管理变量会不一致，可能导致末尾图标的状态异常。建议在[onSecurityStateChange](#onsecuritystatechange12)上增加状态同步。参考[示例1（设置与获取光标位置）](#示例1设置与获取光标位置)。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| visible | boolean | 是 | 是否显示密码。 true表示会显示密码，false表示不会显示密码。 默认值：false |

#### [h2]lineBreakStrategy12+

lineBreakStrategy(strategy: LineBreakStrategy)

设置折行规则。该属性在wordBreak不等于breakAll的时候生效，不支持连词符。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategy | [LineBreakStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#linebreakstrategy12) | 是 | 文本的折行规则。 默认值：LineBreakStrategy.GREEDY **说明：** 仅设置[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)时该属性生效。 |

#### [h2]editMenuOptions12+

editMenuOptions(editMenu: EditMenuOptions)

设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。

调用[disableMenuItems](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-textmenucontroller#disablemenuitems20)或[disableSystemServiceMenuItems](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-textmenucontroller#disablesystemservicemenuitems20)接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#oncreatemenu12)的入参列表中不包含被屏蔽的菜单选项。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| editMenu | [EditMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#editmenuoptions) | 是 | 扩展菜单选项。 |

#### [h2]enablePreviewText12+

enablePreviewText(enable: boolean)

设置是否开启输入预上屏。

预上屏内容定义为文字暂存态，目前不支持文字拦截功能。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否开启输入预上屏。 true表示开启输入预上屏，false表示不开启输入预上屏。 默认值：true |

![](./img/note_3.0-zh-cn.png) “预上屏”描述的是一种文字暂存状态。需要在输入法中开启预上屏功能，在输入文本过程中，未确认输入候选词时，文本框中显示标记文本。例如，通过拼音输入中文时，未确定候选词之前，在输入框中显示拼音字母，该状态称为文字预上屏。

#### [h2]enableHapticFeedback13+

enableHapticFeedback(isEnabled: boolean)

设置是否开启触控反馈。

开启触控反馈时，需要在工程的[module.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中配置requestPermissions字段以开启振动权限，配置如下：

```
"requestPermissions": [
 {
    "name": "ohos.permission.VIBRATE",
 }
]
```
 元服务API： 从API version 13开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnabled | boolean | 是 | 是否开启触控反馈。 true表示开启触控反馈，false表示不开启触控反馈。 默认值：true |

#### [h2]autoCapitalizationMode20+

autoCapitalizationMode(mode: AutoCapitalizationMode)

设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | [AutoCapitalizationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#autocapitalizationmode20枚举说明) | 是 | 自动大小写模式，默认状态无效。 |

#### [h2]keyboardAppearance15+

keyboardAppearance(appearance: Optional<KeyboardAppearance>)

设置输入框拉起的键盘样式，需要输入法适配后生效。具体参考[输入法应用沉浸模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inputmethod-immersive-mode-guide)。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appearance | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 键盘样式。 默认值：KeyboardAppearance.NONE_IMMERSIVE |

#### [h2]strokeWidth20+

strokeWidth(width: Optional<LengthMetrics>)

设置文本描边的宽度。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 文本描边的宽度。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。 若设置值小于0，显示实心字；若大于0，显示空心字。 默认值为0，不做描边处理。 |

#### [h2]strokeColor20+

strokeColor(color: Optional<ResourceColor>)

设置文本描边的颜色。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 描边颜色。默认值为字体颜色，设置异常值时取默认值。 |

#### [h2]stopBackPress15+

stopBackPress(isStopped: Optional<boolean>)

设置是否阻止返回键传递。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isStopped | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否阻止返回键。 true表示阻止，false表示不阻止。 默认值：true。异常值取默认值。 |

#### [h2]halfLeading18+

halfLeading(halfLeading: Optional<boolean>)

设置文本在行内垂直居中，将行间距平分至行的顶部与底部。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| halfLeading | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 设置文本是否垂直居中。 true表示将行间距平分至行的顶部与底部，false则不平分。 默认值：false |

#### [h2]minFontScale18+

minFontScale(scale: Optional<number | Resource>)

设置文本最小的字体缩放倍数。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 文本最小的字体缩放倍数，支持undefined类型。 取值范围：[0, 1] **说明：** 设置的值小于0时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。 使用前需在工程中配置[configuration.json](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#configuration标签)文件和[app.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)文件，具体详见[示例18（设置最小字体范围与最大字体范围）](#示例18设置最小字体范围与最大字体范围)。 |

#### [h2]maxFontScale18+

maxFontScale(scale: Optional<number | Resource>)

设置文本最大的字体缩放倍数。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 文本最大的字体缩放倍数，支持undefined类型。 取值范围：[1, +∞) **说明：** 设置的值小于1时，按值为1处理。异常值默认不生效。 当设置maxFontScale属性后，showError最多放大到2倍。 使用前需在工程中配置[configuration.json](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#configuration标签)文件和[app.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file)文件，具体详见[示例18（设置最小字体范围与最大字体范围）](#示例18设置最小字体范围与最大字体范围)。 |

#### [h2]cancelButton18+

cancelButton(symbolOptions: CancelButtonSymbolOptions)

设置右侧清除按钮样式，仅支持symbol图标。不支持[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)。示例请参考[示例15（设置symbol类型清除按钮）](#示例15设置symbol类型清除按钮)。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| symbolOptions | [CancelButtonSymbolOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search#cancelbuttonsymboloptions12对象说明) | 是 | 右侧清除按钮样式。 默认值： { style: CancelButtonStyle.INPUT } |

#### [h2]ellipsisMode18+

ellipsisMode(mode: Optional<EllipsisMode>)

设置省略位置。ellipsisMode属性仅在[内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)下生效，需要配合overflow设置为TextOverflow.Ellipsis使用，单独设置ellipsisMode属性不生效。

非编辑态时正常生效，编辑态时EllipsisMode.START和EllipsisMode.CENTER仅在maxLines设置为1时生效，EllipsisMode.END、EllipsisMode.MULTILINE_START和EllipsisMode.MULTILINE_CENTER正常生效。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 省略位置。 默认值：EllipsisMode.END |

#### [h2]enableAutoFillAnimation20+

enableAutoFillAnimation(enabled: Optional<boolean>)

设置是否启用自动填充动效。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否启用自动填充动效。 true表示启用，false表示不启用。 默认值：true **说明：** 启用之后，仅输入模式[InputType](#inputtype枚举说明)设置为Password、NEW_PASSWORD或NUMBER_PASSWORD的输入框在进行自动填充时动效可生效。 |

#### [h2]enableAutoSpacing20+

enableAutoSpacing(enabled: Optional<boolean>)

设置是否开启中文与西文的自动间距。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否开启中文与西文的自动间距。 true为开启自动间距，false为不开启。 默认值：false |

#### [h2]compressLeadingPunctuation23+

compressLeadingPunctuation(enabled: Optional<boolean>)

设置是否开启行首标点符号压缩。

![](./img/note_3.0-zh-cn.png)

- 行首标点符号默认不压缩。
- 支持压缩的标点符号，请参考[ParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#paragraphstyle)的行首压缩的标点范围。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否开启行首标点符号压缩。 true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。 |

#### [h2]orphanCharOptimization

orphanCharOptimization(enabled: Optional<boolean>)

设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。

孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在[wordBreak](#wordbreak12)为非BREAK_ALL并且待排版文本首个[TextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#textstyle)的[locale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-text#textstyle)为“zh-Hans”或“zh-Hant”时生效。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 段落最后一行是否使能孤字优化。 true表示使能孤字优化，false表示不使能孤字优化。 值为undefined或null时，不使能孤字优化。 |

#### [h2]includeFontPadding23+

includeFontPadding(include: Optional<boolean>)

设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| include | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 是否在首行和尾行增加间距以避免文字截断。 true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。 |

#### [h2]fallbackLineSpacing23+

fallbackLineSpacing(enabled: Optional<boolean>)

针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | [Optional](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-custom-property#optionalt) | 是 | 行高是否基于文字实际高度自适应。 true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。 |

#### [h2]selectedDragPreviewStyle23+

selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)

设置文本输入框内文本拖拽时的背板样式。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [SelectedDragPreviewStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#selecteddragpreviewstyle23对象说明) | undefined | 是 | 文本拖拽时的背板样式。 设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。 |

#### InputType枚举说明

单行文本输入框类型。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| Normal | 0 | 基本输入模式，无特殊限制。 内联输入风格只支持InputType.Normal类型。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Number | 2 | 纯数字输入模式。 不支持负数、小数。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| PhoneNumber9+ | 3 | 电话号码输入模式。 支持输入数字、空格、+ 、-、*、#、(、)，长度不限。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Email | 5 | 邮箱地址输入模式。 支持数字、字母、下划线、小数点、!、#、$、%、&、'、"、*、+、-、/、=、?、^、`、{、|、}、~，以及@字符（只能存在一个@字符）。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Password | 7 | 密码输入模式。 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。 TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。 密码输入模式中，[decoration](#decoration12)、[showUnderline](#showunderline10)、[lineHeight](#lineheight12)不生效。 在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| NUMBER_PASSWORD11+ | 8 | 纯数字密码输入模式。 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。 TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。 密码输入模式不支持下划线样式。在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |
| USER_NAME11+ | 10 | 用户名输入模式，无特殊限制。 在已启用密码保险箱的情况下，支持用户名、密码的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |
| NEW_PASSWORD11+ | 11 | 新密码输入模式，无特殊限制。 默认输入文字短暂显示后变成圆点。从API version 12开始，PC/2in1设备上输入文字直接显示为圆点。 TV设备上输入框末尾默认不显示小眼睛图标，其他设备输入框末尾默认显示小眼睛图标。 在已启用密码保险箱的情况下，支持自动生成新密码。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |
| NUMBER_DECIMAL11+ | 12 | 带小数点的数字输入模式。 支持数字，小数点（只能存在一个小数点）。不支持负数小数，负数小数的数字输入模式请使用inputFilter实现。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |
| URL12+ | 13 | 带URL的输入模式，无特殊限制。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |
| ONE_TIME_CODE20+ | 14 | 验证码输入模式，无特殊限制。 **元服务API：** 从API version 20开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |

#### ContentType12+枚举说明

自动填充类型。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| USER_NAME | 0 | 【用户名】在已启用密码保险箱的情况下，支持用户名的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PASSWORD | 1 | 【密码】在已启用密码保险箱的情况下，支持密码的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| NEW_PASSWORD | 2 | 【新密码】在已启用密码保险箱的情况下，支持自动生成新密码。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| FULL_STREET_ADDRESS | 3 | 【详细地址】在已启用情景化自动填充的情况下，支持详细地址的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| HOUSE_NUMBER | 4 | 【门牌号】在已启用情景化自动填充的情况下，支持门牌号的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| DISTRICT_ADDRESS | 5 | 【区/县】在已启用情景化自动填充的情况下，支持区/县的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| CITY_ADDRESS | 6 | 【市】在已启用情景化自动填充的情况下，支持市的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PROVINCE_ADDRESS | 7 | 【省】在已启用情景化自动填充的情况下，支持省的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| COUNTRY_ADDRESS | 8 | 【国家】在已启用情景化自动填充的情况下，支持国家的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PERSON_FULL_NAME | 9 | 【姓名】在已启用情景化自动填充的情况下，支持姓名的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PERSON_LAST_NAME | 10 | 【姓氏】在已启用情景化自动填充的情况下，支持姓氏的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PERSON_FIRST_NAME | 11 | 【名字】在已启用情景化自动填充的情况下，支持名字的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PHONE_NUMBER | 12 | 【手机号码】在已启用情景化自动填充的情况下，支持手机号码的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PHONE_COUNTRY_CODE | 13 | 【国家代码】在已启用情景化自动填充的情况下，支持国家代码的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| FULL_PHONE_NUMBER | 14 | 【包含国家代码的手机号码】在已启用情景化自动填充的情况下，支持包含国家代码的手机号码的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| EMAIL_ADDRESS | 15 | 【邮箱地址】在已启用情景化自动填充的情况下，支持邮箱地址的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| BANK_CARD_NUMBER | 16 | 【银行卡号】在已启用情景化自动填充的情况下，支持银行卡号的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| ID_CARD_NUMBER | 17 | 【身份证号】在已启用情景化自动填充的情况下，支持身份证号的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| NICKNAME | 23 | 【昵称】在已启用情景化自动填充的情况下，支持昵称的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| DETAIL_INFO_WITHOUT_STREET | 24 | 【无街道地址】在已启用情景化自动填充的情况下，支持无街道地址的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| FORMAT_ADDRESS | 25 | 【标准地址】在已启用情景化自动填充的情况下，支持标准地址的自动保存和自动填充。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| PASSPORT_NUMBER18+ | 26 | 【护照号】在已启用情景化自动填充的情况下，支持护照号的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| VALIDITY18+ | 27 | 【护照有效期】在已启用情景化自动填充的情况下，支持护照有效期的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| ISSUE_AT18+ | 28 | 【护照签发地】在已启用情景化自动填充的情况下，支持护照签发地的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| ORGANIZATION18+ | 29 | 【发票抬头名称】在已启用情景化自动填充的情况下，支持发票抬头名称的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| TAX_ID18+ | 30 | 【税号】在已启用情景化自动填充的情况下，支持税号的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| ADDRESS_CITY_AND_STATE18+ | 31 | 【所在地区】在已启用情景化自动填充的情况下，支持所在地区的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| FLIGHT_NUMBER18+ | 32 | 【航班号】暂不支持自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| LICENSE_NUMBER18+ | 33 | 【驾驶证号】暂不支持自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| LICENSE_FILE_NUMBER18+ | 34 | 【驾驶证档案编号】暂不支持自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| LICENSE_PLATE18+ | 35 | 【车牌号】在已启用情景化自动填充的情况下，支持车牌号的自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| ENGINE_NUMBER18+ | 36 | 【行驶证发动机号】暂不支持自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |
| LICENSE_CHASSIS_NUMBER18+ | 37 | 【车牌识别号】暂不支持自动保存和自动填充。 **元服务API：** 从API version 18开始，该接口支持在元服务中使用。 |

#### TextInputStyle9+枚举说明

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 说明 |
| --- | --- |
| Default | 默认风格，光标宽1.5vp，光标高度与文本选中底板高度和字体大小相关。 |
| Inline | 内联输入风格。文本选中底板高度与输入框高度相同。 内联输入是在有明显的编辑态/非编辑态的区分场景下使用，例如：文件列表视图中的重命名。 不支持showError属性。 [内联模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input#内联模式)下，不支持拖入文本。 |

#### PasswordIcon10+对象说明

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| onIconSrc | string | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 否 | 是 | 密码输入模式时，能够切换密码可见时显示的图标。 string格式可用于加载网络图片和本地图片。 |
| offIconSrc | string | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | 否 | 是 | 密码输入模式时，能够切换密码不可见时显示的图标。 string格式可用于加载网络图片和本地图片。 |

#### EnterKeyType枚举说明

输入法回车键类型。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| Go | 2 | 显示为开始样式。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Search | 3 | 显示为搜索样式。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Send | 4 | 显示为发送样式。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Next | 5 | 显示为下一步样式。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| Done | 6 | 显示为完成样式。 **元服务API：** 从API version 11开始，该接口支持在元服务中使用。 |
| PREVIOUS11+ | 7 | 显示为上一步样式。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |
| NEW_LINE11+ | 8 | 显示为换行样式。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **模型约束：** 此接口仅可在Stage模型下使用。 |

#### 事件

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events)外，还支持以下事件：

#### [h2]onChange

onChange(callback: EditableTextOnChangeCallback)

输入内容发生变化时，触发该回调。

在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据previewText参数调整光标逻辑，以适应预上屏场景。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [EditableTextOnChangeCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#editabletextonchangecallback12) | 是 | 当前输入文本内容变化时的回调。 |

#### [h2]onSubmit

onSubmit(callback: OnSubmitCallback)

按下输入法回车键触发该回调。

非TV设备按下回车键时输入框默认会失焦且收起键盘，可在OnSubmitCallback回调中配置是否收起键盘，参考[示例2（设置下划线）](#示例2设置下划线)。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [OnSubmitCallback](#onsubmitcallback18) | 是 | 提交回调。 |

#### [h2]onEditChanged(deprecated)

onEditChanged(callback: (isEditing: boolean) => void)

输入状态变化时，触发该回调。

![](./img/note_3.0-zh-cn.png) 从API version 7开始支持，从API version 8开始废弃，建议使用[onEditChange](#oneditchange8)替代。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEditing | boolean | 是 | 当前是否正在输入中。 true表示正在输入；false表示当前没有输入。 |

#### [h2]onEditChange8+

onEditChange(callback: Callback<boolean>)

输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 输入状态变化回调，返回值为true表示输入框处于编辑态，返回值为false表示输入框处于非编辑态。 |

#### [h2]onCopy8+

onCopy(callback: Callback<string>)

进行复制操作时，触发该回调。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 复制回调，其返回值为复制的文本内容。 |

#### [h2]onWillCopy

onWillCopy(callback: Callback<string, boolean>)

在进行复制操作前，触发该回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 复制操作前的回调。回调参数类型为string时，表示将要被复制的文本内容。回调参数类型为boolean时，表示当前选中文本是否允许被复制，true：允许文本被复制；false：不允许文本被复制。 |

#### [h2]onCut8+

onCut(callback: Callback<string>)

进行剪切操作时，触发该回调。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 剪切回调，其返回值为剪切的文本内容。 |

#### [h2]onWillCut

onWillCut(callback: Callback<string, boolean>)

在进行剪切操作前，触发该回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 剪切操作前的回调。回调参数类型为string时，表示将要被剪切的文本内容。回调参数类型为boolean时，表示当前选中文本是否允许被剪切，true：允许文本被剪切；false：不允许文本被剪切。 |

#### [h2]onPaste8+

onPaste(callback: OnPasteCallback)

进行粘贴操作时，触发该回调。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [OnPasteCallback](#onpastecallback18) | 是 | 粘贴回调。 |

#### [h2]onTextSelectionChange10+

onTextSelectionChange(callback: OnTextSelectionChangeCallback)

文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [OnTextSelectionChangeCallback](#ontextselectionchangecallback18) | 是 | 文本选择变化回调或光标位置变化回调。 |

#### [h2]onContentScroll10+

onContentScroll(callback: OnContentScrollCallback)

文本内容滚动时，触发该回调。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [OnContentScrollCallback](#oncontentscrollcallback18) | 是 | 文本内容滚动回调。 |

#### [h2]onSecurityStateChange12+

onSecurityStateChange(callback: Callback<boolean>)

密码显隐状态切换时，触发该回调。

![](./img/note_3.0-zh-cn.png) 从API version 20开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 回调函数。 true表示密码显示；false表示密码隐藏。 |

#### [h2]onWillInsert12+

onWillInsert(callback: Callback<InsertValue, boolean>)

在将要输入时，触发该回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 在将要输入时调用的回调。 在返回true时，表示正常插入，返回false时，表示不插入。 在预上屏和候选词操作时，该回调不触发。 仅支持系统输入法输入的场景。 |

#### [h2]onDidInsert12+

onDidInsert(callback: Callback<InsertValue>)

在输入完成时，触发该回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 在输入完成时调用的回调。 仅支持系统输入法输入的场景。 |

#### [h2]onWillDelete12+

onWillDelete(callback: Callback<DeleteValue, boolean>)

在将要删除时，触发该回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 在将要删除时调用的回调。 在返回true时，表示正常删除，返回false时，表示不删除。 在预上屏删除操作时，该回调不触发。 仅支持系统输入法输入的场景。 |

#### [h2]onDidDelete12+

onDidDelete(callback: Callback<DeleteValue>)

在删除完成时，触发该回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 在删除完成时调用的回调。 仅支持系统输入法输入的场景。 |

![](./img/note_3.0-zh-cn.png) 点击清除按钮不触发onDidDelete回调。

#### [h2]onWillChange15+

onWillChange(callback: Callback<EditableTextChangeValue, boolean>)

在文本内容将要发生变化时，触发该回调。

onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。

元服务API： 从API version 15开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 在文本内容将要发生变化时的回调。 返回true时，表示正常修改。返回false时，表示拦截此次触发。 |

#### [h2]onWillAttachIME20+

onWillAttachIME(callback: Callback<IMEClient>)

在输入框将要绑定输入法前触发该回调。

从API version 22开始，调用[IMEClient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#imeclient20对象说明)的[setExtraConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#setextraconfig22)方法可以设置输入法扩展信息。在绑定输入法成功后，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。

IMEClient仅在onWillAttachIME执行期间有效，不可进行异步调用。

![](./img/note_3.0-zh-cn.png) 该接口不支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 在输入框将要绑定输入法前触发该回调。 |

#### TextInputController8+

TextInput组件的控制器继承自[TextContentControllerBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#textcontentcontrollerbase)，涉及的接口有[getTextContentRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#gettextcontentrect)、[getTextContentLineCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#gettextcontentlinecount)、[getCaretOffset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#getcaretoffset11)、[addText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#addtext15)、[deleteText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#deletetext15)、[getSelection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#getselection15)、[clearPreviewText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#clearpreviewtext17)、[setStyledPlaceholder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#setstyledplaceholder22)、[deleteBackward](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#deletebackward23)、[scrollToVisible](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#scrolltovisible23)。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### [h2]导入对象

```
controller: TextInputController = new TextInputController();
```

#### [h2]constructor8+

constructor()

TextInputController的构造函数。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### [h2]caretPosition8+

caretPosition(value: number): void

设置输入光标的位置。当取值小于0时，取0，大于文本长度时，显示在文本末尾。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | 从字符串开始到光标所在位置的字符长度。 |

#### [h2]setTextSelection10+

setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void

设置文本选择区域并高亮显示。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| selectionStart | number | 是 | 文本选择区域起始位置，文本框中文字的起始位置为0。 |
| selectionEnd | number | 是 | 文本选择区域结束位置。当selectionEnd 如果selectionStart或selectionEnd被赋值为undefined时，当作0处理。

如果selectionMenuHidden被赋值为true或设备为2in1时，即使options被赋值为MenuPolicy.SHOW，调用setTextSelection也不弹出菜单。

如果emoji表情被选中区域截断时，表情的起始位置包含在设置的文本选中区域内就会被选中。

#### [h2]stopEditing10+

stopEditing(): void

退出编辑态。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### UnderlineColor12+对象说明

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| typing | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | undefined | 否 | 是 | 键入时下划线颜色。不填写、undefined、null、无效值时恢复默认。 |
| normal | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | undefined | 否 | 是 | 非特殊状态时下划线颜色。不填写、undefined、null、无效值时恢复默认。 |
| error | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | undefined | 否 | 是 | 错误时下划线颜色。不填写、undefined、null、无效值时恢复默认。此选项会修改showCounter属性中达到最大字符数时的颜色。 |
| disable | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | undefined | 否 | 是 | 禁用时下划线颜色。不填写、undefined、null、无效值时恢复默认。 |

#### SubmitEvent11+

定义用户提交事件。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### [h2]属性

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| text | string | 否 | 否 | 输入框文本内容。 |

#### [h2]keepEditableState11+

keepEditableState(): void

用户自定义输入框编辑状态，调用时保持编辑态。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### OnPasteCallback18+

type OnPasteCallback = (content: string, event: PasteEvent) => void

粘贴回调。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string | 是 | 粘贴的文本内容。 |
| event | [PasteEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#pasteevent11) | 是 | 用户自定义的粘贴事件。 |

#### OnSubmitCallback18+

type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void

提交回调。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enterKey | [EnterKeyType](#enterkeytype枚举说明) | 是 | 输入法回车键类型。 |
| event | [SubmitEvent](#submitevent11) | 是 | 提交事件。可以控制是否收起键盘。 |

#### OnTextSelectionChangeCallback18+

type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void

文本选择变化回调或光标位置变化回调。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| selectionStart | number | 是 | 所选文本的起始位置，文字的起始位置为0。 |
| selectionEnd | number | 是 | 所选文本的结束位置。 |

#### OnContentScrollCallback18+

type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void

文本内容滚动回调。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| totalOffsetX | number | 是 | 文本在内容区的横坐标偏移，单位px。 |
| totalOffsetY | number | 是 | 文本在内容区的纵坐标偏移，单位px。 |

#### 示例

#### [h2]示例1（设置与获取光标位置）

从API version 8开始，该示例通过[controller](#textinputcontroller8)实现了光标位置的设置与获取的功能，同时，可以使用!!实现text参数的双向数据绑定（从API version 18开始）。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '';
  // index：光标所在位置的索引值
  // x：光标相对输入框的x坐标位值，单位px
  // y：光标相对输入框的y坐标位值，单位px
  @State positionInfo: CaretOffset = { index: 0, x: 0, y: 0 };
  @State passwordState: boolean = false;
  controller: TextInputController = new TextInputController();

  build() {
    Column() {
      TextInput({ text: this.text!!, placeholder: 'input your word...', controller: this.controller })
        .placeholderColor(Color.Grey)
        .placeholderFont({ size: 14, weight: 400 })
        .caretColor(Color.Blue)
        .width('95%')
        .height(40)
        .margin(20)
        .fontSize(14)
        .fontColor(Color.Black)
        .inputFilter('[a-z]', (e) => {
          console.info(JSON.stringify(e));
        })
      Text(this.text)
      Button('Set caretPosition 1')
        .margin(15)
        .onClick(() => {
          // 将光标移动至第一个字符后
          this.controller.caretPosition(1);
        })
      Button('Get CaretOffset')
        .margin(15)
        .onClick(() => {
          // 获取光标相对输入框的位置
          this.positionInfo = this.controller.getCaretOffset();
        })
      // 密码输入框
      TextInput({ placeholder: 'input your password...' })
        .width('95%')
        .height(40)
        .margin(20)
        .type(InputType.Password)
        .maxLength(9)
        .showPasswordIcon(true)
        .showPassword(this.passwordState)
        .onSecurityStateChange(((isShowPassword: boolean) => {
          // 更新密码显示状态
          console.info('isShowPassword', isShowPassword);
          this.passwordState = isShowPassword;
        }))
      // 邮箱地址自动填充类型
      TextInput({ placeholder: 'input your email...' })
        .width('95%')
        .height(40)
        .margin(20)
        .contentType(ContentType.EMAIL_ADDRESS)
        .maxLength(9)
      // 内联风格输入框
      TextInput({ text: 'inline style' })
        .width('95%')
        .height(50)
        .margin(20)
        .borderRadius(0)
        .style(TextInputStyle.Inline)
    }.width('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626070538.gif)

#### [h2]示例2（设置下划线）

从API version 10开始支持，该示例通过[showUnderline](#showunderline10)、[showError](#showerror10)、[showUnit](#showunit10)、[passwordIcon](#passwordicon10)属性展示了下划线在不同场景的效果，同时，可以通过[underlineColor](#underlinecolor12)（从API version 12开始）支持配置下划线颜色。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  // $r('app.media.ImageOne')需要替换为开发者所需的图像资源文件。
  @State passWordSrc1: Resource = $r('app.media.ImageOne');
  // $r('app.media.ImageTwo')需要替换为开发者所需的图像资源文件。
  @State passWordSrc2: Resource = $r('app.media.ImageTwo');
  @State textError: string = '';
  @State text: string = '';
  @State nameText: string = 'test';

  @Builder
  itemEnd() {
    Select([{ value: 'KB' },
      { value: 'MB' },
      { value: 'GB' },
      { value: 'TB', }])
      .height("48vp")
      .borderRadius(0)
      .selected(2)
      .align(Alignment.Center)
      .value('MB')
      .font({ size: 20, weight: 500 })
      .fontColor('#182431')
      .selectedOptionFont({ size: 20, weight: 400 })
      .optionFont({ size: 20, weight: 400 })
      .backgroundColor(Color.Transparent)
      .responseRegion({
        height: "40vp",
        width: "80%",
        x: '10%',
        y: '6vp'
      })
      .onSelect((index: number) => {
        console.info('Select:' + index);
      })
  }

  build() {
    Column({ space: 20 }) {
      // 自定义密码显示图标
      TextInput({ placeholder: 'user define password icon' })
        .type(InputType.Password)
        .width(350)
        .height(60)
        .passwordIcon({ onIconSrc: this.passWordSrc1, offIconSrc: this.passWordSrc2 })
      // 下划线模式
      TextInput({ placeholder: 'underline style' })
        .showUnderline(true)
        .width(350)
        .height(60)
        .showError('Error')
        .showUnit(this.itemEnd)

      Text(`用户名：${this.text}`)
        .width(350)
      TextInput({ placeholder: '请输入用户名', text: this.text })
        .showUnderline(true)
        .width(350)
        .showError(this.textError)
        .onChange((value: string) => {
          this.text = value;
        })
        .onSubmit((enterKey: EnterKeyType, event: SubmitEvent) => {
          // 用户名不正确会清空输入框和用户名并提示错误文本
          if (this.text == this.nameText) {
            this.textError = '';
          } else {
            this.textError = '用户名输入错误';
            this.text = '';
            // 调用keepEditableState方法，输入框保持编辑态
            event.keepEditableState();
          }
        })
      // 设置下划线颜色
      TextInput({ placeholder: '提示文本内容' })
        .width(350)
        .showUnderline(true)
        .underlineColor({
          normal: Color.Orange,
          typing: Color.Green,
          error: Color.Red,
          disable: Color.Gray
        })
      TextInput({ placeholder: '提示文本内容' })
        .width(350)
        .showUnderline(true)
        .underlineColor(Color.Gray);

    }.width('100%').margin({ top: 10 })
  }
}
```
 ![](./img/zh-cn_image_0000002656469815.png)

#### [h2]示例3（设置自定义键盘）

该示例通过[customKeyboard](#customkeyboard10)（从API version 10开始）属性分别将value中的入参类型设置为[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8)和[ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent#componentcontent-1)，实现了自定义键盘的功能。

从API version 22开始[customKeyboard](#customkeyboard10)属性新增了入参类型[ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent#componentcontent-1)。

```
// xxx.ets
import { ComponentContent } from '@kit.ArkUI';
class BuilderParams {
  inputValue: string;
  controller: TextInputController;

  constructor(inputValue: string, controller: TextInputController) {
    this.inputValue = inputValue;
    this.controller = controller;
  }
}
@Builder
function CustomKeyboardBuilder(builderParams: BuilderParams) {
  Column() {
    Row() {
      Button('x').onClick(() => {
        // 关闭自定义键盘
        builderParams.controller.stopEditing();
      }).margin(10)
    }

    Grid() {
      ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'], (item: number | string) => {
        GridItem() {
          Button(item + "")
            .width(110).onClick(() => {
            builderParams.inputValue += item;
          })
        }
      })
    }.maxCount(3).columnsGap(10).rowsGap(10).padding(5)
  }.backgroundColor(Color.Gray)
}
@Entry
@Component
struct TextInputExample {
  controller: TextInputController = new TextInputController();
  @State inputValue: string = "";
  @State componentContent ?: ComponentContent<BuilderParams> = undefined;
  @State builderParam: BuilderParams = new BuilderParams(this.inputValue, this.controller);
  @State supportAvoidance: boolean = true;

  aboutToAppear(): void {
    // 创建ComponentContent
    this.componentContent = new ComponentContent(this.getUIContext(), wrapBuilder(CustomKeyboardBuilder), this.builderParam);
  }
  build(){
    Column() {
      Text('Builder').margin(10).border({ width: 1 })
      TextInput({ controller: this.builderParam.controller, text: this.builderParam.inputValue })
        .customKeyboard(this.componentContent, { supportAvoidance: this.supportAvoidance })
        .margin(10).border({ width: 1 }).height('48vp')

      Text('ComponentContent').margin(10).border({ width: 1 })
      TextInput({ controller: this.builderParam.controller, text: this.builderParam.inputValue })
        .customKeyboard(CustomKeyboardBuilder(this.builderParam), { supportAvoidance: this.supportAvoidance })
        .margin(10).border({ width: 1 }).height('48vp')
    }
  }
}
```
 ![](./img/zh-cn_image_0000002656349863.gif)

#### [h2]示例4（设置右侧清除按钮样式）

该示例通过[cancelButton](#cancelbutton11)属性展示了自定义右侧清除按钮样式的效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '';
  controller: TextInputController = new TextInputController();

  build() {
    Column() {
      TextInput({ placeholder: 'input ...', controller: this.controller })
        .width(380)
        .height(60)
        .cancelButton({
          style: CancelButtonStyle.CONSTANT,
          icon: {
            size: 45,
            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。
            src: $r('app.media.startIcon'),
            color: Color.Blue
          }
        })
        .onChange((value: string) => {
          this.text = value;
        })
    }
  }
}
```
 ![](./img/zh-cn_image_0000002626230450.png)

#### [h2]示例5（设置计数器）

该示例通过[maxLength](#maxlength)、[showCounter](#showcounter11)（从API version 11开始）、[showUnderline](#showunderline10)（从API version 10开始）属性实现了计数器的功能。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '';
  controller: TextInputController = new TextInputController();

  build() {
    Column() {
      TextInput({ text: this.text, controller: this.controller })
        .placeholderFont({ size: 16, weight: 400 })
        .width(336)
        .height(56)
        .maxLength(6)
        .showUnderline(true)
        .showCounter(true,
          { thresholdPercentage: 50, highlightBorder: true })
          // 计数器显示效果为用户当前输入字符数/最大字符限制数。最大字符限制数通过maxLength()接口设置。
          // 如果用户当前输入字符数达到最大字符限制乘50%（thresholdPercentage）。字符计数器显示。
          // 用户设置highlightBorder为false时，配置取消红色边框。不设置此参数时，默认为true。
        .onChange((value: string) => {
          this.text = value;
        })
    }.width('100%').height('100%').backgroundColor('#F1F3F5')
  }
}
```
 ![](./img/zh-cn_image_0000002626070540.jpg)

#### [h2]示例6（电话号码格式化）

该示例通过[onChange](#onchange)回调实现了电话号码格式化为XXX XXXX XXXX的功能。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State submitValue: string = '';
  @State text: string = '';
  public readonly NUM_TEXT_MAXSIZE_LENGTH = 13;
  @State telNumberNoSpace: string = "";
  @State nextCaret: number = -1; // 用于记录下次光标设置的位置
  @State actualCh: number = -1; // 用于记录光标在第i个数字后插入或者第i个数字前删除
  @State lastCaretPosition: number = 0;
  @State lastCaretPositionEnd: number = 0;
  controller: TextInputController = new TextInputController();

  isEmpty(str?: string): boolean {
    return str == 'undefined' || !str || !new RegExp("[^\\s]").test(str);
  }

  checkNeedNumberSpace(numText: string) {
    let isSpace: RegExp = new RegExp('[\\+;,#\\*]', 'g');
    let isRule: RegExp = new RegExp('^\\+.*');

    if (isSpace.test(numText)) {
      // 如果电话号码里有特殊字符，就不加空格
      if (isRule.test(numText)) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  removeSpace(str: string): string {
    if (this.isEmpty(str)) {
      return '';
    }
    return str.replace(new RegExp("[\\s]", "g"), '');
  }

  setCaret() {
    if (this.nextCaret != -1) {
      console.info("to keep caret position right, change caret to", this.nextCaret);
      this.controller.caretPosition(this.nextCaret);
      this.nextCaret = -1;
    }
  }

  calcCaretPosition(nextText: string) {
    let befNumberNoSpace: string = this.removeSpace(this.text);
    this.actualCh = 0;
    if (befNumberNoSpace.length < this.telNumberNoSpace.length) { // 插入场景
      for (let i = 0; i < this.lastCaretPosition; i++) {
        if (this.text[i] != ' ') {
          this.actualCh += 1;
        }
      }
      this.actualCh += this.telNumberNoSpace.length - befNumberNoSpace.length;
      console.info("actualCh: " + this.actualCh);
      for (let i = 0; i < nextText.length; i++) {
        if (nextText[i] != ' ') {
          this.actualCh -= 1;
          if (this.actualCh <= 0) {
            this.nextCaret = i + 1;
            break;
          }
        }
      }
    } else if (befNumberNoSpace.length > this.telNumberNoSpace.length) { // 删除场景
      if (this.lastCaretPosition === this.text.length) {
        console.info("Caret at last, no need to change");
      } else if (this.lastCaretPosition === this.lastCaretPositionEnd) {
        // 按键盘上回退键一个一个删的情况
        for (let i = this.lastCaretPosition; i < this.text.length; i++) {
          if (this.text[i] != ' ') {
            this.actualCh += 1;
          }
        }
        for (let i = nextText.length - 1; i >= 0; i--) {
          if (nextText[i] != ' ') {
            this.actualCh -= 1;
            if (this.actualCh <= 0) {
              this.nextCaret = i;
              break;
            }
          }
        }
      } else {
        // 剪切/手柄选择 一次删多个字符
        this.nextCaret = this.lastCaretPosition; // 保持光标位置
      }
    }
  }

  build() {
    Column() {
      Row() {
        TextInput({ text: `${this.text}`, controller: this.controller }).type(InputType.PhoneNumber).height('48vp')
          .onChange((value: string) => {
            this.telNumberNoSpace = this.removeSpace(value);
            let nextText: string = "";
            if (this.telNumberNoSpace.length > this.NUM_TEXT_MAXSIZE_LENGTH - 2) {
              nextText = this.telNumberNoSpace;
            } else if (this.checkNeedNumberSpace(value)) {
              if (this.telNumberNoSpace.length <= 3) {
                nextText = this.telNumberNoSpace;
              } else {
                let split1: string = this.telNumberNoSpace.substring(0, 3);
                let split2: string = this.telNumberNoSpace.substring(3);
                nextText = split1 + ' ' + split2;
                if (this.telNumberNoSpace.length > 7) {
                  split2 = this.telNumberNoSpace.substring(3, 7);
                  let split3: string = this.telNumberNoSpace.substring(7);
                  nextText = split1 + ' ' + split2 + ' ' + split3;
                }
              }
            } else {
              nextText = value;
            }
            console.info("onChange Triggered:" + this.text + "|" + nextText + "|" + value);
            if (this.text === nextText && nextText === value) {
              // 此时说明数字已经格式化完成了 在这个时候改变光标位置不会被重置掉
              this.setCaret();
            } else {
              this.calcCaretPosition(nextText);
            }
            this.text = nextText;
          })
          .onTextSelectionChange((selectionStart, selectionEnd) => {
            // 记录光标位置
            console.info("selection change: ", selectionStart, selectionEnd);
            this.lastCaretPosition = selectionStart;
            this.lastCaretPositionEnd = selectionEnd;
          })// 从API version 10开始支持
      }
    }
    .width('100%')
    .height("100%")
  }
}
```
 ![](./img/zh-cn_image_0000002656469817.png)

#### [h2]示例7（设置文本断行规则）

从API version 12开始，该示例通过[wordBreak](#wordbreak12)属性实现了TextInput不同断行规则下的效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State textStrEn: string =
    'This is set wordBreak to WordBreak text Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu.';
  @State textStrZn: string =
    '多行文本输入框组件，当输入的文本内容超过组件宽度时会自动换行显示。\n高度未设置时，组件无默认高度，自适应内容高度。宽度未设置时，默认撑满最大宽度。';

  build() {
    Row() {
      Column() {
        Text("TextInput为inline模式，WordBreakType属性为NORMAL的样式：").fontSize(16).fontColor(0xCCCCCC)
        TextInput({
          text: this.textStrEn
        })
          .margin(10)
          .fontSize(16)
          .style(TextInputStyle.Inline)// Inline模式
          .wordBreak(WordBreak.NORMAL) // 非Inline模式该属性无效

        Text("TextInput为inline模式，英文文本，WordBreakType属性为BREAK_ALL的样式：").fontSize(16).fontColor(0xCCCCCC)
        TextInput({
          text: this.textStrEn
        })
          .margin(10)
          .fontSize(16)
          .style(TextInputStyle.Inline)
          .wordBreak(WordBreak.BREAK_ALL)

        Text("TextInput为inline模式，中文文本，WordBreakType属性为BREAK_ALL的样式：").fontSize(16).fontColor(0xCCCCCC)
        TextInput({
          text: this.textStrZn
        })
          .margin(10)
          .fontSize(16)
          .style(TextInputStyle.Inline)
          .wordBreak(WordBreak.BREAK_ALL)

        Text("TextInput为inline模式，WordBreakType属性为BREAK_WORD的样式：").fontSize(16).fontColor(0xCCCCCC)
        TextInput({
          text: this.textStrEn
        })
          .margin(10)
          .fontSize(16)
          .style(TextInputStyle.Inline)
          .wordBreak(WordBreak.BREAK_WORD)
      }.width('100%')
    }.height('100%').margin(10)
  }
}
```
 ![](./img/zh-cn_image_0000002656349865.png)

#### [h2]示例8（设置文本样式）

从API version 12开始，该示例通过[lineHeight](#lineheight12)、[letterSpacing](#letterspacing12)、[decoration](#decoration12)属性展示了不同样式的文本效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  build() {
    Row() {
      Column() {
        Text('lineHeight').fontSize(9).fontColor(0xCCCCCC)
        TextInput({ text: 'lineHeight unset' })
          .border({ width: 1 }).padding(10).margin(5)
        TextInput({ text: 'lineHeight 15' })
          .border({ width: 1 }).padding(10).margin(5).lineHeight(15)
        TextInput({ text: 'lineHeight 30' })
          .border({ width: 1 }).padding(10).margin(5).lineHeight(30)

        Text('letterSpacing').fontSize(9).fontColor(0xCCCCCC)
        TextInput({ text: 'letterSpacing 0' })
          .border({ width: 1 }).padding(5).margin(5).letterSpacing(0)
        TextInput({ text: 'letterSpacing 3' })
          .border({ width: 1 }).padding(5).margin(5).letterSpacing(3)
        TextInput({ text: 'letterSpacing -1' })
          .border({ width: 1 }).padding(5).margin(5).letterSpacing(-1)

        Text('decoration').fontSize(9).fontColor(0xCCCCCC)
        TextInput({ text: 'LineThrough, Red' })
          .border({ width: 1 }).padding(5).margin(5)
          .decoration({ type: TextDecorationType.LineThrough, color: Color.Red })
        TextInput({ text: 'Overline, Red, DASHED' })
          .border({ width: 1 }).padding(5).margin(5)
          .decoration({ type: TextDecorationType.Overline, color: Color.Red, style: TextDecorationStyle.DASHED })
        TextInput({ text: 'Underline, Red, WAVY' })
          .border({ width: 1 }).padding(5).margin(5)
          .decoration({ type: TextDecorationType.Underline, color: Color.Red, style: TextDecorationStyle.WAVY })
      }.height('90%')
    }
    .width('90%')
    .margin(10)
  }
}
```
 ![](./img/zh-cn_image_0000002626230452.png)

#### [h2]示例9（设置文字特性效果）

从API version 12开始，该示例通过[fontFeature](#fontfeature12)属性实现了文本在不同文字特性下的展示效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text1: string = 'This is ss01 on : 0123456789';
  @State text2: string = 'This is ss01 off: 0123456789';

  build() {
    Column() {
      TextInput({ text: this.text1 })
        .fontSize(20)
        .margin({ top: 200 })
        .fontFeature("\"ss01\" on")
      TextInput({ text: this.text2 })
        .margin({ top: 10 })
        .fontSize(20)
        .fontFeature("\"ss01\" off")
    }
    .width("90%")
    .margin("5%")
  }
}
```
 ![](./img/zh-cn_image_0000002626070542.png)

#### [h2]示例10（自定义键盘避让）

该示例通过[customKeyboard](#customkeyboard10)（从API version 10开始）属性配置[KeyboardOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-richeditor#keyboardoptions12)（从API version 12开始）接口实现了自定义键盘避让的效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  controller: TextInputController = new TextInputController();
  @State inputValue: string = "";
  @State height1: string | number = '80%';
  @State supportAvoidance: boolean = true;

  // 自定义键盘组件
  @Builder
  CustomKeyboardBuilder() {
    Column() {
      Row() {
        Button('x').onClick(() => {
          // 关闭自定义键盘
          this.controller.stopEditing();
        }).margin(10)
      }

      Grid() {
        ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'], (item: number | string) => {
          GridItem() {
            Button(item + "")
              .width(110).onClick(() => {
              this.inputValue += item;
            })
          }
        })
      }.maxCount(3).columnsGap(10).rowsGap(10).padding(5)
    }.backgroundColor(Color.Gray)
  }

  build() {
    Column() {
      Row() {
        Button("20%")
          .fontSize(24)
          .onClick(() => {
            this.height1 = "20%";
          })
        Button("80%")
          .fontSize(24)
          .margin({ left: 20 })
          .onClick(() => {
            this.height1 = "80%";
          })
      }
      .justifyContent(FlexAlign.Center)
      .alignItems(VerticalAlign.Bottom)
      .height(this.height1)
      .width("100%")
      .padding({ bottom: 50 })

      TextInput({ controller: this.controller, text: this.inputValue })// 绑定自定义键盘
        .customKeyboard(this.CustomKeyboardBuilder(), { supportAvoidance: this.supportAvoidance })
        .margin(10)
        .border({ width: 1 })

    }
  }
}
```
 ![](./img/zh-cn_image_0000002656469819.gif)

#### [h2]示例11（设置文本自适应）

从API version 12开始，该示例通过[minFontSize](#minfontsize12)、[maxFontSize](#maxfontsize12)、[heightAdaptivePolicy](#heightadaptivepolicy12)属性实现了文本自适应字号的功能。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  build() {
    Row() {
      Column() {
        Text('heightAdaptivePolicy').fontSize(9).fontColor(0xCCCCCC)
        TextInput({ text: 'This is the text without the height adaptive policy set' })
          .width('80%').height(50).borderWidth(1).margin(1)
        TextInput({ text: 'This is the text with the height adaptive policy set' })
          .width('80%')
          .height(50)
          .borderWidth(1)
          .margin(1)
          .minFontSize(4)
          .maxFontSize(40)
          .maxLines(3)
          .heightAdaptivePolicy(TextHeightAdaptivePolicy.MAX_LINES_FIRST)
        TextInput({ text: 'This is the text with the height adaptive policy set' })
          .width('80%')
          .height(50)
          .borderWidth(1)
          .margin(1)
          .minFontSize(4)
          .maxFontSize(40)
          .maxLines(3)
          .heightAdaptivePolicy(TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST)
        TextInput({ text: 'This is the text with the height adaptive policy set' })
          .width('80%')
          .height(50)
          .borderWidth(1)
          .margin(1)
          .minFontSize(4)
          .maxFontSize(40)
          .maxLines(3)
          .heightAdaptivePolicy(TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST)
      }.height('90%')
    }
    .width('90%')
    .margin(10)
  }
}
```
 ![](./img/zh-cn_image_0000002656349867.png)

#### [h2]示例12（设置折行规则）

从API version 12开始，该示例通过[lineBreakStrategy](#linebreakstrategy12)属性实现了TextInput不同折行规则下的效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State message1: string =
    "They can be classified as built-in components–those directly provided by the ArkUI framework and custom components – those defined by developers" +
      "The built-in components include buttons radio progress indicators and text You can set the rendering effect of these components in method chaining mode," +
      "page components are divided into independent UI units to implementindependent creation development and reuse of different units on pages making pages more engineering-oriented.";
  @State lineBreakStrategyIndex: number = 0;
  @State lineBreakStrategy: LineBreakStrategy[] =
    [LineBreakStrategy.GREEDY, LineBreakStrategy.HIGH_QUALITY, LineBreakStrategy.BALANCED];
  @State lineBreakStrategyStr: string[] = ['GREEDY', 'HIGH_QUALITY', 'BALANCED'];

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {
      Text('lineBreakStrategy').fontSize(16).fontColor(Color.Black)
      TextInput({ text: this.message1 })
        .fontSize(12)
        .border({ width: 1 })
        .padding(10)
        .width('100%')
        .maxLines(12)
        .style(TextInputStyle.Inline)
        .lineBreakStrategy(this.lineBreakStrategy[this.lineBreakStrategyIndex])
      Row() {
        Button('当前lineBreakStrategy模式：' + this.lineBreakStrategyStr[this.lineBreakStrategyIndex]).onClick(() => {
          this.lineBreakStrategyIndex++;
          if (this.lineBreakStrategyIndex > (this.lineBreakStrategyStr.length - 1)) {
            this.lineBreakStrategyIndex = 0;
          }
        })
      }.margin({ top: 20 })
    }.height(700).width(370).padding({ left: 35, right: 35, top: 35 })
  }
}
```
 ![](./img/zh-cn_image_0000002626230454.gif)

#### [h2]示例13（支持插入和删除回调）

从API version 12开始，该示例通过[onWillInsert](#onwillinsert12)、[onDidInsert](#ondidinsert12)、[onWillDelete](#onwilldelete12)、[onDidDelete](#ondiddelete12)接口实现了插入和删除的效果。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State insertValue: string = "";
  @State deleteValue: string = "";
  @State insertOffset: number = 0;
  @State deleteOffset: number = 0;
  @State deleteDirection: number = 0;
  @State currentValue_1: string = "";
  @State currentValue_2: string = "";

  build() {
    Row() {
      Column() {
        TextInput({ text: "TextInput支持插入回调文本" })
          .height(60)
          .onWillInsert((info: InsertValue) => {
            this.insertValue = info.insertValue;
            return true;
          })
          .onDidInsert((info: InsertValue) => {
            this.insertOffset = info.insertOffset;
          })
          .onWillChange((info: EditableTextChangeValue) => {
            this.currentValue_1 = info.content
            return true
          })

        Text("insertValue:" + this.insertValue + "  insertOffset:" + this.insertOffset).height(30)
        Text("currentValue_1:" + this.currentValue_1).height(30)

        TextInput({ text: "TextInput支持删除回调文本b" })
          .height(60)
          .onWillDelete((info: DeleteValue) => {
            this.deleteValue = info.deleteValue;
            this.deleteDirection = info.direction;
            return true;
          })
          .onDidDelete((info: DeleteValue) => {
            this.deleteOffset = info.deleteOffset;
            this.deleteDirection = info.direction;
          })
          .onWillChange((info: EditableTextChangeValue) => {
            this.currentValue_2 = info.content
            return true
          })

        Text("deleteValue:" + this.deleteValue + "  deleteOffset:" + this.deleteOffset).height(30)
        Text("deleteDirection:" + (this.deleteDirection == 0 ? "BACKWARD" : "FORWARD")).height(30)
        Text("currentValue_2:" + this.currentValue_2).height(30)

      }.width('100%')
    }
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626070544.png)

#### [h2]示例14（文本扩展自定义菜单）

从API version 12开始，该示例通过[editMenuOptions](#editmenuoptions12)接口实现了文本设置自定义菜单扩展项的文本内容、图标以及回调的功能，同时，可以在[onPrepareMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#属性-1)（从API version 20开始）回调中，进行菜单数据的设置。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = 'TextInput editMenuOptions';
  @State endIndex: number = 0;
  onCreateMenu = (menuItems: Array<TextMenuItem>) => {
    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。
    // 从API version 23开始支持TextMenuItemId.autoFill
    const idsToFilter: TextMenuItemId[] = [
      TextMenuItemId.autoFill
    ]
    const items = menuItems.filter(item => !idsToFilter.some(id => id.equals(item.id)))
    let item1: TextMenuItem = {
      content: 'create1',
      icon: $r('app.media.startIcon'),
      id: TextMenuItemId.of('create1'),
    };
    let item2: TextMenuItem = {
      content: 'create2',
      id: TextMenuItemId.of('create2'),
      icon: $r('app.media.startIcon'),
    };
    items.push(item1);
    items.unshift(item2);
    return items;
  }
  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {
    if (menuItem.id.equals(TextMenuItemId.of("create2"))) {
      console.info("拦截 id: create2 start:" + textRange.start + "; end:" + textRange.end);
      return true;
    }
    if (menuItem.id.equals(TextMenuItemId.of("prepare1"))) {
      console.info("拦截 id: prepare1 start:" + textRange.start + "; end:" + textRange.end);
      return true;
    }
    if (menuItem.id.equals(TextMenuItemId.COPY)) {
      console.info("拦截 COPY start:" + textRange.start + "; end:" + textRange.end);
      return true;
    }
    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {
      console.info("不拦截 SELECT_ALL start:" + textRange.start + "; end:" + textRange.end);
      return false;
    }
    return false;
  }
  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。
  onPrepareMenu = (menuItems: Array<TextMenuItem>) => {
    let item1: TextMenuItem = {
      content: 'prepare1_' + this.endIndex,
      icon: $r('app.media.startIcon'),
      id: TextMenuItemId.of('prepare1'),
    };
    menuItems.unshift(item1);
    return menuItems;
  }
  @State editMenuOptions: EditMenuOptions = {
    onCreateMenu: this.onCreateMenu,
    onMenuItemClick: this.onMenuItemClick,
    onPrepareMenu: this.onPrepareMenu
  };

  build() {
    Column() {
      TextInput({ text: this.text })
        .width('95%')
        .height(50)
        .editMenuOptions(this.editMenuOptions)
        .margin({ top: 100 })
        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {
          this.endIndex = selectionEnd;
        })
    }
    .width("90%")
    .margin("5%")
  }
}
```
 ![](./img/zh-cn_image_0000002656469821.png)

#### [h2]示例15（设置symbol类型清除按钮）

从API version 18开始，该示例通过[cancelButton](#cancelbutton18)属性展示了自定义右侧symbol类型清除按钮样式的效果。

```
import { SymbolGlyphModifier } from '@kit.ArkUI';

// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '';
  symbolModifier: SymbolGlyphModifier =
    new SymbolGlyphModifier($r('sys.symbol.trash')).fontColor([Color.Red]).fontSize(16).fontWeight(FontWeight.Regular);

  build() {
    Column() {
      TextInput({ text: this.text, placeholder: 'input your word...' })
        .cancelButton({
          style: CancelButtonStyle.CONSTANT,
          icon: this.symbolModifier
        })
    }
  }
}
```
 ![](./img/zh-cn_image_0000002656349869.jpg)

#### [h2]示例16（文本设置省略模式）

该示例通过[textOverflow](#textoverflow12)、[ellipsisMode](#ellipsismode18)、[style](#style9)属性展示了文本超长省略以及调整省略位置的效果，通过MULTILINE_START和MULTILINE_CENTER两种类型实现了单行文本和多行文本场景下的省略号在行首和行中的效果。

从API version 9开始，通过[style](#style9)设置输入框的风格。

从API version 12开始，通过[textOverflow](#textoverflow12)设置文本超长时的显示方式。

从API version 18开始，通过[ellipsisMode](#ellipsismode18)设置省略号位置。

从API version 24开始，[EllipsisMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#ellipsismode11)新增了MULTILINE_START和MULTILINE_CENTER枚举。

```
// xxx.ets
@Entry
@Component
struct EllipsisModeExample {
  @State text: string = "As the sun begins to set, casting a warm golden hue across the sky," +
    "the world seems to slow down and breathe a sigh of relief. The sky is painted with hues of orange, " +
    " pink, and lavender, creating a breath taking tapestry that stretches as far as the eye can see." +
    "The air is filled with the sweet scent of blooming flowers, mingling with the earthy aroma of freshly turned soil.";
  @State ellipsisModeIndex: number = 0;
  @State ellipsisMode: (EllipsisMode | undefined | null)[] =
    [EllipsisMode.END, EllipsisMode.START, EllipsisMode.CENTER, EllipsisMode.MULTILINE_START,
      EllipsisMode.MULTILINE_CENTER]; // 从API version 24开始新增MULTILINE_START和MULTILINE_CENTER
  @State ellipsisModeStr: string[] = ['END ', 'START', 'CENTER', 'MULTILINE_START', 'MULTILINE_CENTER'];
  @State textOverflowIndex: number = 0;
  @State textOverflow: TextOverflow[] = [TextOverflow.Ellipsis, TextOverflow.Clip];
  @State textOverflowStr: string[] = ['Ellipsis', 'Clip'];
  @State styleInputIndex: number = 0;
  @State styleInput: TextInputStyle[] = [TextInputStyle.Inline, TextInputStyle.Default];
  @State styleInputStr: string[] = ['Inline', 'Default'];

  build() {
    Row() {
      Column({ space: 20 }) {
        TextInput({ text: this.text })
          .textOverflow(this.textOverflow[this.textOverflowIndex])
          .ellipsisMode(this.ellipsisMode[this.ellipsisModeIndex])
          .style(this.styleInput[this.styleInputIndex])
          .fontSize(30)
          .margin(30)
        Button('更改ellipsisMode模式：' + this.ellipsisModeStr[this.ellipsisModeIndex]).onClick(() => {
          this.ellipsisModeIndex++;
          if (this.ellipsisModeIndex > (this.ellipsisModeStr.length - 1)) {
            this.ellipsisModeIndex = 0;
          }
        }).fontSize(20)
        Button('更改textOverflow模式：' + this.textOverflowStr[this.textOverflowIndex]).onClick(() => {
          this.textOverflowIndex++;
          if (this.textOverflowIndex > (this.textOverflowStr.length - 1)) {
            this.textOverflowIndex = 0;
          }
        }).fontSize(20)
        Button('更改Style大小：' + this.styleInputStr[this.styleInputIndex]).onClick(() => {
          this.styleInputIndex++;
          if (this.styleInputIndex > (this.styleInputStr.length - 1)) {
            this.styleInputIndex = 0;
          }
        }).fontSize(20)
      }
    }
  }
}
```
 ![](./img/zh-cn_image_0000002626230456.gif)

#### [h2]示例17（输入框支持输入状态变化等回调）

从API version 8开始，该示例通过[onEditChange](#oneditchange8)、[onCopy](#oncopy8)、[onCut](#oncut8)、[onPaste](#onpaste8)、[onContentScroll](#oncontentscroll10)（从API version 10开始）、[onWillCopy](#onwillcopy)、[onWillCut](#onwillcut)接口实现了输入框监测输入状态变化、复制、剪切、粘贴、文本内容滚动回调的效果、如何屏蔽系统复制功能，以及如何屏蔽系统剪切功能，同时，可以通过设置[selectAll](#selectall11)（从API version 11开始）属性，输入框初始状态下是否全选文本。

从API版本26.0.0开始，新增[onWillCopy](#onwillcopy)、[onWillCut](#onwillcut)接口。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State editStatus: boolean = false;
  @State copyValue: string = "";
  @State cutValue: string = "";
  @State pasteValue: string = "";
  @State totalOffsetX: number = 0;
  @State totalOffsetY: number = 0;

  build() {
    Row() {
      Column() {
        TextInput({ text: "TextInput支持输入状态变化时回调" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily("HarmonyOS Sans")
          .copyOption(CopyOptions.LocalDevice)
          .textAlign(TextAlign.Center)
          .selectedBackgroundColor(Color.Blue)
          .caretStyle({ width: '4vp' })
          .caretPosition(10)
          .selectionMenuHidden(true)
          .onEditChange((status: boolean) => {
            this.editStatus = status;
          })
          .defaultFocus(true)// 设置TextInput默认获焦
          .enableKeyboardOnFocus(false)
          .selectAll(false)

        Text("editStatus:" + this.editStatus).height(30)

        TextInput({ text: "TextInput支持复制操作时回调" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily("HarmonyOS Sans")
          .copyOption(CopyOptions.LocalDevice)
          .textAlign(TextAlign.Center)
          .selectedBackgroundColor(Color.Blue)
          .caretStyle({ width: '4vp' })
          .onCopy((copyValue: string) => {
            this.copyValue = copyValue;
          })
          // 从API版本26.0.0开始支持onWillCopy
          .onWillCopy((value: string) => {
            console.info(`on will copy ${value}`);
            return false;
          })

        Text("copyValue:" + this.copyValue).height(30)

        TextInput({ text: "TextInput支持剪切操作时回调" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily("HarmonyOS Sans")
          .copyOption(CopyOptions.LocalDevice)
          .textAlign(TextAlign.Center)
          .selectedBackgroundColor(Color.Blue)
          .caretStyle({ width: '4vp' })
          .onCut((cutValue: string) => {
            this.cutValue = cutValue;
          })
          // 从API版本26.0.0开始支持onWillCut
          .onWillCut((value: string) => {
            console.info(`on will cut ${value}`);
            return false;
          })

        Text("cutValue:" + this.cutValue).height(30)

        TextInput({ text: "TextInput支持粘贴操作时回调" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily("HarmonyOS Sans")
          .copyOption(CopyOptions.LocalDevice)
          .textAlign(TextAlign.Center)
          .selectedBackgroundColor(Color.Blue)
          .caretStyle({ width: '4vp' })
          .onPaste((pasteValue: string) => {
            this.pasteValue = pasteValue;
          })

        Text("pasteValue:" + this.pasteValue).height(30)

        TextInput({ text: "TextInput支持文本内容滚动时回调: 文本内容宽度超出输入框宽度，滚动文本查看偏移量变化" })
          .height(60)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily("HarmonyOS Sans")
          .copyOption(CopyOptions.LocalDevice)
          .textAlign(TextAlign.Center)
          .selectedBackgroundColor(Color.Blue)
          .caretStyle({ width: '4vp' })
          .onContentScroll((totalOffsetX: number, totalOffsetY: number) => {
            this.totalOffsetX = totalOffsetX;
            this.totalOffsetY = totalOffsetY;
          })

        Text("totalOffsetX:" + this.totalOffsetX + "  totalOffsetY:" + this.totalOffsetY).height(30)

      }.width('100%')
    }
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626070546.png)

#### [h2]示例18（设置最小字体范围与最大字体范围）

从API version 18开始，该示例通过[minFontScale](#minfontscale18)、[maxFontScale](#maxfontscale18)设置字体显示最小与最大范围。

```
// 开启应用缩放跟随系统
// AppScope/resources/base，新建文件夹profile。
// AppScope/resources/base/profile，新建文件configuration.json。
// AppScope/resources/base/profile/configuration.json，增加如下代码。
{
  "configuration": {
    "fontSizeScale": "followSystem",
    "fontSizeMaxScale": "3.2"
  }
}
```
 
```
// AppScope/app.json5，修改如下代码。
{
  "app": {
    "bundleName": "com.example.myapplication",
    "vendor": "example",
    "versionCode": 1000000,
    "versionName": "1.0.0",
    "icon": "$media:app_icon",
    "label": "$string:app_name",
    "configuration": "$profile:configuration"
  }
}
```
 
```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State minFontScale: number = 0.85;
  @State maxFontScale: number = 2;

  build() {
    Column() {
      Column({ space: 30 }) {
        Text("通过minFontScale、maxFontScale调整文本显示的最大和最小字体缩放倍数。")
        TextInput({
          placeholder: 'The text area can hold an unlimited amount of text. input your word...',
          text: '通过minFontScale、maxFontScale调整文本显示的最大和最小字体缩放倍数。'
        })
          .minFontScale(this.minFontScale)// 设置最小字体缩放倍数，参数为undefined则跟随系统默认倍数缩放
          .maxFontScale(this.maxFontScale) // 设置最大字体缩放倍数，参数为undefined则跟随系统默认倍数缩放
      }.width('100%')
    }
  }
}
```

| 系统字体缩放倍数为2倍 | 系统字体缩放倍数为3.2倍 |
| --- | --- |
| ![](./img/zh-cn_image_0000002656469823.png) | ![](./img/zh-cn_image_0000002656349871.png) |

#### [h2]示例19（设置选中指定区域的文本内容）

从API version 10开始，该示例通过[setTextSelection](#settextselection10)方法展示如何设置选中指定区域的文本内容以及菜单的显隐策略。

```
// xxx.ets

@Entry
@Component
struct TextInputExample {
  controller: TextInputController = new TextInputController();
  @State startIndex: number = 0;
  @State endIndex: number = 0;

  build() {
    Column({ space: 3 }) {
      Text('Selection start:' + this.startIndex + ' end:' + this.endIndex)
      TextInput({ text: 'Hello World', controller: this.controller })
        .width('95%')
        .height(40)
        .defaultFocus(true)
        .enableKeyboardOnFocus(true)
        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {
          this.startIndex = selectionStart;
          this.endIndex = selectionEnd;
        })

      Button('setTextSelection [0,3], set menuPolicy is MenuPolicy.SHOW')
        .onClick(() => {
          this.controller.setTextSelection(0, 3, { menuPolicy: MenuPolicy.SHOW });
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626230458.png)

#### [h2]示例20（设置文本描边）

从API version 20开始，该示例通过[strokeWidth](#strokewidth20)和[strokeColor](#strokecolor20)属性设置文本的描边宽度及颜色。

```
// xxx.ets
import { LengthMetrics } from '@kit.ArkUI';

@Entry
@Component
struct TextInputExample {
  build() {
    Row() {
      Column() {
        Text('stroke feature').fontSize(9).fontColor(0xCCCCCC)

        TextInput({ text: 'Text without stroke' })
          .width('100%')
          .height(60)
          .borderWidth(1)
          .fontSize(40)
        TextInput({ text: 'Text with stroke' })
          .width('100%')
          .height(60)
          .borderWidth(1)
          .fontSize(40)
          .strokeWidth(LengthMetrics.px(-3.0))
          .strokeColor(Color.Red)
        TextInput({ text: 'Text with stroke' })
          .width('100%')
          .height(60)
          .borderWidth(1)
          .fontSize(40)
          .strokeWidth(LengthMetrics.px(3.0))
          .strokeColor(Color.Red)
      }.height('90%')
    }
    .width('90%')
    .margin(10)
  }
}
```
 ![](./img/zh-cn_image_0000002626070548.png)

#### [h2]示例21（设置中西文自动间距）

从API version 20开始，该示例通过[enableAutoSpacing](#enableautospacing20)属性设置中西文自动间距。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  build() {
    Row() {
      Column() {
        Text('开启中西文自动间距').margin(5)
        TextInput({text: '中西文Auto Spacing自动间距'})
          .enableAutoSpacing(true)
        Text('关闭中西文自动间距').margin(5)
        TextInput({text: '中西文Auto Spacing自动间距'})
          .enableAutoSpacing(false)
      }.height('100%')
    }
    .width('60%')
  }
}
```
 ![](./img/zh-cn_image_0000002656469825.png)

#### [h2]示例22（设置字符计数颜色以及超出字符颜色）

从API version 22开始，该示例通过[showCounter](#showcounter11)属性的counterTextColor和counterTextOverflowColor设置字符计数颜色以及超出字符颜色。

```
import { ColorMetrics } from '@kit.ArkUI';

// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '';
  controller: TextInputController = new TextInputController();

  build() {
    Column() {
      TextInput({ text: this.text, controller: this.controller })
        .placeholderFont({ size: 16, weight: 400 })
        .width(336)
        .height(56)
        .maxLength(6)
        .showCounter(true, {
          thresholdPercentage: 50,
          highlightBorder: true,
          counterTextColor: ColorMetrics.resourceColor(Color.Red),
          counterTextOverflowColor: ColorMetrics.resourceColor(Color.Orange)
        })
        .onChange((value: string) => {
          this.text = value;
        })
    }.width('100%').height('100%').backgroundColor('#F1F3F5')
  }
}
```
 ![](./img/zh-cn_image_0000002656349873.gif)

#### [h2]示例23（设置placeholder富文本样式）

从API version 22开始，该示例通过[setStyledPlaceholder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#setstyledplaceholder22)接口设置placeholder富文本样式。

```
// xxx.ets
import { LengthMetrics } from '@kit.ArkUI';
@Entry
@Component
struct TextInputExample  {
  styledString: MutableStyledString =
    new MutableStyledString("输入框富文本：文本",
      [
        {
          start: 0,
          length: 7,
          styledKey: StyledStringKey.FONT,
          styledValue: new TextStyle({
            fontColor: Color.Orange,
            fontSize: LengthMetrics.fp(24)
          })
        },
        {
          start: 7,
          length: 4,
          styledKey: StyledStringKey.FONT,
          styledValue: new TextStyle({
            fontColor: Color.Gray,
            fontSize: LengthMetrics.fp(20),
            strokeWidth: LengthMetrics.px(-5),
            strokeColor: Color.Black,
          })
        },
        {
          start: 0,
          length: 1,
          styledKey: StyledStringKey.PARAGRAPH_STYLE,
          styledValue: new ParagraphStyle({
            textVerticalAlign: TextVerticalAlign.CENTER
          })
        }
      ]);
  controllerInput: TextInputController = new TextInputController();

  aboutToAppear() {
    this.controllerInput.setStyledPlaceholder(this.styledString)
  }

  build() {
    Scroll() {
      Column() {
        Text("TextInput placeholder富文本")
          .fontSize(8)
        TextInput({
          controller: this.controllerInput
        })
          .fontSize(24)
          .margin(10)
      }
      .width('100%')
    }
  }
}
```
 ![](./img/zh-cn_image_0000002626230460.jpg)

#### [h2]示例24（设置输入法扩展信息）

从API version 22开始，该示例通过[IMEClient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-text-common#imeclient20对象说明)的setExtraConfig设置输入法扩展信息。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  build() {
    Column() {
      TextInput({ text: '拉起输入法前执行onWillAttachIME回调' })
        .onWillAttachIME((client: IMEClient) => {
          client.setExtraConfig({
            customSettings: {
              name: "TextInput", // 自定义属性
              id: client.nodeId // 自定义属性
            }
          })
        })
    }.height('100%')
  }
}
```

#### [h2]示例25（设置内联输入风格编辑态时滚动条的显示模式）

从API version 10开始，该示例通过[barState](#barstate10)接口设置内联输入风格编辑态时滚动条的显示或隐藏状态。

```
@Entry
@Component
struct demo {
  @State message: string = '这里是一段长文本'.repeat(10)

  build() {
    Column({ space: 20 }) {
      TextInput({ text: '内联模式，设置BarState.On，' + this.message })
        .style(TextInputStyle.Inline)
        .barState(BarState.On)

      TextInput({ text: '内联模式，设置BarState.Off，' + this.message })
        .style(TextInputStyle.Inline)
        .barState(BarState.Off)
    }
    .width('100%')
    .height('100%')
    .padding(20)
    .justifyContent(FlexAlign.Center)
  }
}
```
 ![](./img/zh-cn_image_0000002626070550.gif)

#### [h2]示例26（设置行首标点压缩）

该示例通过[compressLeadingPunctuation](#compressleadingpunctuation23)接口设置行首标点压缩，左侧有间距的标点符号位于行首时，标点会直接压缩间距至左侧边界。

从API version 23开始，支持compressLeadingPunctuation接口。

```
// xxx.ets
@Entry
@Component
struct Index {
  build() {
    Column(){
      TextInput({ text: "\u300C行首标点压缩打开" })
        .compressLeadingPunctuation(true)
        .margin(5)
        .style(TextInputStyle.Inline)
        .fontSize(30)
        .width("90%")
      TextInput({ text: "\u300C行首标点压缩关闭" })
        .compressLeadingPunctuation(false)
        .style(TextInputStyle.Inline)
        .fontSize(30)
        .width("90%")
    }
  }
}
```
 ![](./img/zh-cn_image_0000002656469827.gif)

#### [h2]示例27（设置自适应间距）

该示例通过[includeFontPadding](#includefontpadding23)接口增加首行尾行间距和[fallbackLineSpacing](#fallbacklinespacing23)接口设置自适应行间距。

从API version 23开始，新增[includeFontPadding](#includefontpadding23)和[fallbackLineSpacing](#fallbacklinespacing23)接口。

```
// xxx.ets

const UYGHUR_TEXT: string = 'ياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەن';
@Entry
@Component
struct Index {
  @State include: boolean | null | undefined = false;
  @State fallback: boolean | null | undefined = false;
  @State displayText: string = UYGHUR_TEXT;

  build() {
    Column() {
      TextInput({
        text: this.displayText,
        placeholder: '请输入内容...'
      })
        .includeFontPadding(this.include)
        .fallbackLineSpacing(this.fallback)
        .lineHeight(5)
        .width('100%')
        .height(100)
        .backgroundColor('#eee')
        .borderWidth(1)
        .borderColor('#dddddd')

      Scroll() {
        Column() {
          // --- IncludeFontPadding相关按钮 ---
          Button('设置includePadding: ' + this.include)
            .onClick(() => {
              this.include = this.include === false ? true : false;
            })
            .margin({ bottom: 10 })

          // --- FallbackLineSpacing相关按钮 ---
          Button('设置fallbackLineSpacing: ' + this.fallback)
            .onClick(() => {
              this.fallback = this.fallback === false ? true : false;
            })
            .margin({ bottom: 10 })

        }
        .width('100%')
        .padding(5)
      }
      .height(250)
      .backgroundColor('transparent')
      .scrollBarWidth(2)
      .scrollBarColor('#888')

    }
    .width('100%')
    .height('100%')
    .padding(20)
  }
}
```
 ![](./img/zh-cn_image_0000002656349875.gif)

#### [h2]示例28（设置文本拖拽时的背板样式）

该示例通过[selectedDragPreviewStyle](#selecteddragpreviewstyle23)接口设置文本拖拽时的背板样式。

从API version 23开始，新增selectedDragPreviewStyle接口。

```
@Entry
@Component
struct TextInputTest {
  build() {
    Column() {
      TextInput({ text: 'HelloWorld', placeholder: 'please input words' })
        .copyOption(CopyOptions.InApp)
        .width(200)
        .height(50)
        .margin(150)
        .draggable(true)
        .selectedDragPreviewStyle({color: 'rgba(227, 248, 249, 1)'})
    }
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626230462.png)

#### [h2]示例29（删除文本框内的最后一个字符）

该示例通过调用[deleteBackward](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#deletebackward23)接口删除文本框内最后一个字符。

从API version 23开始，新增[deleteBackward](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#deletebackward23)接口。

```
@Entry
@Component
struct Page {
  controller: TextInputController = new TextInputController();

  build() {
    Column() {
      TextInput({ text: 'TextInput输入框Deletebackward示例', controller: this.controller })
      Button('Delete backward')
        .onClick(() => {
          this.controller.deleteBackward();
        })
    }
  }
}
```
 ![](./img/zh-cn_image_0000002626070552.gif)

#### [h2]示例30（设置文本排版方向）

该示例通过[textDirection](#textdirection23)接口设置文本排版方向。

从API version 23开始，新增textDirection接口。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = 'TextInput文本排版方向示例';

  build() {
    Column() {
      Text('TextInput文本排版方向RTL，布局方向default')
        .fontSize(12).width('90%').margin(5)
      TextInput({ text: this.text })
        .width(336)
        .fontSize(16)
        .textDirection(TextDirection.RTL)
        .showCounter(true)
        .maxLength(50)
      Text('TextInput文本排版方向RTL，布局方向default，文本水平方向对齐方式LEFT')
        .fontSize(12).width('90%').margin(5)
      TextInput({ text: this.text })
        .width(336)
        .fontSize(16)
        .textDirection(TextDirection.RTL)
        .showCounter(true)
        .maxLength(50)
        .textAlign(TextAlign.LEFT)
      Text('TextInput文本排版方向LTR，布局方向Rtl')
        .fontSize(12).width('90%').margin(5)
      TextInput({ text: this.text })
        .width(336)
        .fontSize(16)
        .textDirection(TextDirection.LTR)
        .direction(Direction.Rtl)
        .maxLength(50)
        .showCounter(true)
    }.width('100%').height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002656469829.png)

#### [h2]示例31（将指定范围的文字滚动到可视区内）

本示例通过[scrollToVisible](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-text-style#scrolltovisible23)将可视区外的文本滚动到可视区内。

从API version 23开始，新增scrollToVisible接口。

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '12345678912345678912346789123456789123456789012121214521';
  controller: TextInputController = new TextInputController();

  build() {
    Column() {
      TextInput({ text: this.text, controller: this.controller })
        .width(336)
        .height(56)
      Button("滚动文本到可视区").onClick(()=> {
        this.controller.scrollToVisible({ start: 22, end: 30})
      })
    }.width('100%').height('100%').backgroundColor('#F1F3F5')
  }
}
```
 ![](./img/zh-cn_image_0000002656349877.gif)

#### [h2]示例32（设置文本排版时是否使能孤字优化）

该示例通过[orphanCharOptimization](#orphancharoptimization)接口设置使能孤字优化，确保段落最后一行不出现孤字。

从API版本26.0.0开始，新增orphanCharOptimization接口。

```
// xxx.ets
@Entry
@Component
struct TextExample {
  @State text: string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa文本aaaaaaaaaaaaa';

  build() {
    Column({ space: 3 }) {
      Text('TextInput不使能孤字优化')
        .fontSize(12).width('90%').margin(5)
      TextInput({ text: this.text })
        .fontSize(20)
        .width('384')
        .borderWidth(1)
        .style(TextInputStyle.Inline)
      Text('TextInput使能孤字优化')
        .fontSize(12).width('90%').margin(5)
      TextInput({ text: this.text })
        .fontSize(20)
        .width('384')
        .borderWidth(1)
        .orphanCharOptimization(true)
        .style(TextInputStyle.Inline)
    }
    .width('100%')
    .height('100%')
  }
}
```
 该效果图会因设备尺寸差异有显示区别，仅供参考。

不开启孤字优化：

![](./img/zh-cn_image_0000002626230464.png)

开启孤字优化：

![](./img/zh-cn_image_0000002626070554.png)

#### [h2]示例33（设置文本选择的AI菜单）

该示例通过[enableSelectedDataDetector](#enableselecteddatadetector22)，配置文本选择AI菜单功能。

从API version 22开始，新增enableSelectedDataDetector。

```
@Entry
@Component
struct Demo33 {
  exampleText: string = '示例网址：www.example.com';

  build() {
    Column() {
      Row() {
        TextInput({ text: this.exampleText })
          .copyOption(CopyOptions.LocalDevice)
          .enableSelectedDataDetector(true)
          .border({ width: 1, color: Color.Black })
          .height(300)
          .margin(10)
      }
    }
  }
}
```
 ![](./img/zh-cn_image_0000002656469831.gif)
