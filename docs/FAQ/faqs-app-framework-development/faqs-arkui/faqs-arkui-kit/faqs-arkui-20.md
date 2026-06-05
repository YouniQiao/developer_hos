---
format: md
title: "如何主动清除控件的焦点"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-20
---

当组件处于获焦状态时，将其focusable属性或enabled属性设置为false，会自动使该组件失焦。焦点将按照[走焦规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-focus-event#走焦规范)转移给其他组件。参考代码如下：

```
@Entry
@Component
struct ClearComponentFocus {
  // Whether textInput is focus
  @State textFocusable: boolean = true;
  @State text: string = 'Gain focus';

  build() {
    Column() {
      TextInput({ text: this.text })
        .focusable(this.textFocusable)
        .onFocus(() => {
          this.text = 'Gain focus';
        })
        .onBlur(() => {
          this.text = 'Lost Focus';
        })
      Button('Button1')
        .width(160)
        .height(70)
        .margin({ top: 20 })
        .onClick(() => {
          this.textFocusable = !this.textFocusable;
        })
    }
    .width('100%')
    .height('100%')
  }
}
```

**参考链接**

[设置组件是否获焦](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-focus-event#设置组件是否可获焦)
