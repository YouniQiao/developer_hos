---
format: md
title: "通用属性width是否支持设置变量"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-191
---


通用属性width支持设置变量。

```
@Entry
@Component
struct Page1 {
  @State message: string = 'Hello';
  @State widthNum: number = 300;

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .width(this.widthNum)
          .backgroundColor(Color.Blue)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

效果如下所示：

![](./img/5ac7ee72.png "点击放大")
