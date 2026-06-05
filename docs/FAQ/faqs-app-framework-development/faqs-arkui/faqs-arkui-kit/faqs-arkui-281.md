---
format: md
title: "自定义键盘和系统键盘如何切换"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-281
---

声明状态变量，动态控制customKeyboard属性的值，实现自定义键盘与系统键盘的切换。示例代码如下：

```
@Component
export struct CustomSystemKeyboardToggle {
  controller: TextInputController = new TextInputController();
  @State inputValue: string = '';
  @State show: boolean = false;

  // Customize keyboard components
  @Builder
  customKeyboardBuilder() {
    Column() {
      Button('x')
        .onClick(() => {
          // Turn off custom keyboard
          this.controller.stopEditing();
          this.show = !this.show;
        })
      Grid() {
        ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'], (item: number | string) => {
          GridItem() {
            Button(item + '')
              .width(110)
              .onClick(() => {
                this.inputValue += item;
              })
          }
        })
      }
      .maxCount(3)
      .columnsGap(10)
      .rowsGap(10)
      .padding(5)
    }
    .backgroundColor(Color.Gray)
  }

  build() {
    Column() {
      TextInput({ controller: this.controller, text: this.inputValue })// Bind custom keyboard
        .customKeyboard(this.show ? this.customKeyboardBuilder() : undefined)
        .margin(10)
        .height(48)
      Button('switch')
        .onClick(() => {
          this.show = !this.show;
        })
    }
  }
}
```
