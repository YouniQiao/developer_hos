---
format: md
title: "半模态转场如何控制固定高度"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-142
---


通过设置bindSheet()的参数options对高度进行控制。参考代码如下：

```
@Entry
@Component
struct SheetTransitionExample {
  @State isShow: boolean = false;
  @State sheetHeight: number = 300;

  @Builder
  myBuilder() {
    Column() {
      Button('change height')
        .margin(10)
        .fontSize(20)
        .onClick(() => {
          this.sheetHeight = 500;
        })

      Button('Set Illegal height')
        .margin(10)
        .fontSize(20)
        .onClick(() => {
          this.sheetHeight = 0;
        })
    }
    .width('100%')
    .height('100%')
  }

  build() {
    Column() {
      Button('transition modal 1')
        .onClick(() => {
          this.isShow = true;
        })
        .fontSize(20)
        .margin(10)
        .bindSheet(this.isShow, this.myBuilder(), { height: this.sheetHeight, backgroundColor: Color.Green })
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }
}
```

**参考链接**

[半模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition)
