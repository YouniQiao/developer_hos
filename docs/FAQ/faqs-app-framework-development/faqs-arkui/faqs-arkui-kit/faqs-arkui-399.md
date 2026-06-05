---
format: md
title: "Navigation自定义标题栏不生效，可能是什么原因"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-399
---

**问题描述**

使用Navigation时，自定义标题栏布局，使用其中的title方法无效。

**解决措施**

NavigationCustomTitle里builder传入方法需使用装饰器@LocalBuilder。由于是对象内部作用域，需要通过@LocalBuilder保证this始终指向自定义组件本身，@LocalBuilder装饰器用于确保builder方法在Navigation组件内部正确绑定this上下文，避免作用域丢失问题。示例代码如下：

```
@Entry
@Component
export struct MainPage {
  myTitle: NavigationCustomTitle = {
    builder: this.customTitleBuilder,
    height: TitleHeight.MainOnly
  };

  @LocalBuilder
  customTitleBuilder() {
    Row() {
      Text('Title1')
        .fontSize(12)
        .fontWeight(FontWeight.Bold)
        .margin({ left: 7, right: 7, top: 7 })

      Text('Title2')
        .fontSize(12)
        .fontWeight(FontWeight.Bold)
        .margin({ left: 7, right: 7, top: 7 })

      Text('Title3')
        .fontSize(12)
        .fontWeight(FontWeight.Bold)
        .margin({ left: 7, right: 7, top: 7 })
    }
  }

  build() {
    Navigation() {
      Column() {
        Text('hello world')
          .fontSize('24')
          .fontWeight(FontWeight.Bold)
          .fontFamily('HarmonyHeiTi-Bold')
          .textAlign(TextAlign.Center)
          .width('100%')
      }
      .height('100%')
      .width('100%')
      .background('#F1F3F5')
    }
    .title(this.myTitle)
  }
}
```
