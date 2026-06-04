---
title: "Text组件设置opacity后，文字颜色在整体透明度基础上叠加了一个透明，应该如何处理"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-482
---

通过给组件设置renderGroup(true)或者blendMode(BlendMode.SRC\_OVER, BlendApplyType.OFFSCREEN)来实现。

可以参考如下示例：

```
@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('你好')
          .width(200)
          .height(100)
          .fontColor(Color.White)
          .backgroundColor(Color.Blue)
          .fontSize(20)
          .textAlign(TextAlign.Center)
          .opacity(0.3)
          .margin(20)

        Text('你好')
          .width(200)
          .height(100)
          .fontColor(Color.White)
          .backgroundColor(Color.Blue)
          .fontSize(20)
          .textAlign(TextAlign.Center)
          .opacity(0.3)
          .renderGroup(true)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
