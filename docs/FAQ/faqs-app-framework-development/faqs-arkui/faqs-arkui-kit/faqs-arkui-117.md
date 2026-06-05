---
format: md
title: "文本组件是否支持分段设置字体样式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-117
---

单个组件只能设置一种字体样式，可以通过多个Span子组件实现一行文本展示不同样式。参考代码如下：

```
@Entry
@Component
struct TestDemoPage {
  @State message: string = "Hello World";

  build() {
    Row() {
      Column() {
        Text() {
          // Using the Span subcomponent to implement segmented style settings
          Span('test text: ')
            .fontSize(20)
            .fontWeight(FontWeight.Bolder)
            .fontColor(Color.Black)
          Span(this.message)
            .fontSize(15)
            .fontColor(Color.Red)
        }
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)
