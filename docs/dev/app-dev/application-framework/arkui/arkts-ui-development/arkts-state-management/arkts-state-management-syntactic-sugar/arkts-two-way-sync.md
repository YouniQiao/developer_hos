---
title: "$$语法：系统组件双向同步"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-two-way-sync
format: md
---


$$运算符为系统组件提供TS变量的引用，使得TS变量和系统组件的内部状态保持同步。

内部状态的具体含义取决于组件。例如，[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)组件的text参数。

## 使用规则

* 当前$$支持基础类型变量，当该变量使用[@State](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state)、[@Link](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-link)、[@Prop](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-prop)、[@Provide](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)等状态管理V1装饰器装饰，或者[@Local](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local)等状态管理V2装饰器装饰时，变量值的变化会触发UI刷新。
* 当前$$支持的组件：

  | 组件 | 支持的参数/属性 | 起始API版本 |
  | --- | --- | --- |
  | [Checkbox](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkbox) | select | 10 |
  | [CheckboxGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-checkboxgroup) | selectAll | 10 |
  | [DatePicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-datepicker) | selected | 10 |
  | [TimePicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-timepicker) | selected | 10 |
  | [MenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menuitem) | selected | 10 |
  | [Panel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-panel) | mode | 10 |
  | [Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio) | checked | 10 |
  | [Rating](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-rating) | rating | 10 |
  | [Search](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search) | value | 10 |
  | [SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer) | showSideBar | 10 |
  | [Slider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-slider) | value | 10 |
  | [Stepper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-stepper) | index | 10 |
  | [Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper) | index | 10 |
  | [Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs) | index | 10 |
  | [TextArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textarea) | text | 10 |
  | [TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput) | text | 10 |
  | [TextPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textpicker) | selected、value | 10 |
  | [Toggle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-toggle) | isOn | 10 |
  | [AlphabetIndexer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-alphabet-indexer) | selected | 10 |
  | [Select](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select) | selected、value | 10 |
  | [BindSheet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#bindsheet) | isShow | 10 |
  | [BindContentCover](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-modal-transition#bindcontentcover) | isShow | 10 |
  | [Refresh](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-refresh) | refreshing | 8 |
  | [GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-griditem) | selected | 10 |
  | [ListItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem) | selected | 10 |

## 使用示例

以[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)方法的text参数为例：

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  @State text: string = '';
  controller: TextInputController = new TextInputController();

  build() {
    Column({ space: 20 }) {
      Text(this.text)
      TextInput({ text: $$this.text, placeholder: 'input your word...', controller: this.controller })
        .placeholderColor(Color.Grey)
        .placeholderFont({ size: 14, weight: 400 })
        .caretColor(Color.Blue)
        .width(300)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/ParadigmStateManagement/entry/src/main/ets/pages/syncStateManager/SyncUsageExample.ets#L30-L52" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：SyncUsageExample.ets</a></div>


![](./img/cb9ade77.gif)
