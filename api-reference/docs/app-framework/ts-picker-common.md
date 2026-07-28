---
title: "选择器（Picker）公共接口"
upstream_id: "harmonyos-references/ts-picker-common"
catalog: "harmonyos-references"
content_hash: "12b8ca11837a"
synced_at: "2026-07-28T16:44:44.819814"
---

# 选择器（Picker）公共接口

选择器组件公共接口。

![](./img/note_3.0-zh-cn.png) 从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### PickerTextStyle对象说明

选择器组件的文本样式，用于配置选择器中显示文本的外观属性。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| color | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 否 | 是 | 文本颜色，用于自定义选择器中文字的颜色。当需要使用特定颜色时传入，不传入时使用系统默认文本颜色。 |
| font | [Font](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#font) | 否 | 是 | 文本样式，包括字体大小、字体粗细、字体族等属性。当需要自定义选择器中文字的字体样式时传入，不传入时使用系统默认文本样式。 |

#### PickerDialogButtonStyle12+对象说明

选择器弹窗的按钮样式，用于配置日期选择器、时间选择器等弹窗中确认和取消按钮的显示样式、角色和行为。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| type | [ButtonType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttontype枚举说明) | 否 | 是 | 按钮显示样式，用于设置按钮的显示类型。当需要自定义按钮显示样式时传入，不传入时使用默认按钮显示样式。 |
| style | [ButtonStyleMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonstylemode11枚举说明) | 否 | 是 | 按钮的样式和重要程度，用于设置按钮的视觉样式和交互重要级别。当需要自定义按钮样式时传入，不传入时使用默认按钮样式。 |
| role | [ButtonRole](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonrole12枚举说明) | 否 | 是 | 按钮角色，用于定义按钮在对话框中的语义角色。可选值包括Normal（正常按钮）、Error（警示按钮），详见[ButtonRole](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonrole12枚举说明)枚举说明。默认值：ButtonRole.NORMAL。 |
| fontSize | [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | 否 | 是 | 文本显示字号，用于自定义按钮文字的大小。单位：fp。 |
| fontColor | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 否 | 是 | 文本显示颜色，用于自定义按钮文字的颜色。 |
| fontWeight | [FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontweight) | number | string | 否 | 是 | 文本的字体粗细。number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如"200"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。默认值：FontWeight.Normal。 |
| fontStyle | [FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontstyle) | 否 | 是 | 文本的字体样式，用于指定文本是否使用斜体显示。可选值包括Normal（正常样式）、Italic（斜体样式），详见[FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#fontstyle)枚举说明。默认值：FontStyle.Normal。 |
| fontFamily | [Resource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resource) | string | 否 | 是 | 字体列表，用于设置按钮文字使用的字体。支持传入单个字体名称字符串，或使用逗号分隔的多个字体名称（优先级从左到右，例如'Arial,HarmonyOS Sans'）。默认字体为'HarmonyOS Sans'，支持[注册自定义字体](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-font)。不传入时使用默认字体。 |
| backgroundColor | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcecolor) | 否 | 是 | 按钮背景色。 |
| borderRadius | [Length](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#length) | [BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#borderradiuses9) | 否 | 是 | 圆角半径，用于设置按钮的圆角大小。单位：vp。当需要自定义按钮圆角样式时传入，不传入时使用默认圆角半径。 |
| primary | boolean | 否 | 是 | 控制弹出弹窗后，Enter键是否默认由该按钮响应。弹出弹窗后，若未使用Tab键切换焦点，primary为true的按钮将默认响应Enter键；若使用Tab键切换了焦点，则Enter键由当前获得焦点的按钮响应。 true：弹出弹窗后，未使用Tab键切换焦点时，按下Enter键会触发该按钮绑定的事件。 false：弹出弹窗后，未使用Tab键切换焦点时，按下Enter键不会触发该按钮绑定的事件。 默认值：false |

#### DateRange19+对象说明

日期区间，用于描述起止日期区间。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| start | Date | 否 | 是 | 设置日期区间的开始日期，应不晚于结束日期。不传入、日期格式错误、日期超出系统支持范围或start晚于end时，该日期区间无效。 |
| end | Date | 否 | 是 | 设置日期区间的结束日期。不传入、日期格式错误、日期超出系统支持范围或end早于start时，该日期区间无效。 |
