---
format: md
title: "如何实现Tabs高度自适应内容"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-475
---


可以给Tabs设置height('auto')。参考示例如下：

```
@Entry
@Component
struct Index {
  build() {
    Column() {
      Tabs() {
        TabContent() {
          Row() {
            Text('hello')
          }
          .width('100%')
        }
      }
      .height('auto')
      .barBackgroundColor(Color.Orange)
      .barHeight(0)
    }
    .height('100%')
    .width('100%')
  }
}
```
