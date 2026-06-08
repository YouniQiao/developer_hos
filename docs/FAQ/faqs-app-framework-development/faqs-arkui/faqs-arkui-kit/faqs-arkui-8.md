---
format: md
title: "如何给UI组件设置不同情况下的属性"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-8
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-8
last_sync: 2026-06-07
sync_hash: 47658173
---
使用if/else条件渲染设置组件属性值。具体可参考示例代码：

```
@Entry
@Component
struct TestHeightPage {
  @State message: string = 'Hello World';
  @State myHeight1: number = 30;
  @State myHeight2: number = 60;
  @State flag: boolean = false

  build() {
    Column() {
      Text(this.message)
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .width('100%')
        .height(this.flag ? this.myHeight1 : this.myHeight2)
        .backgroundColor(Color.Orange)

      Button('Modify Text attribute height').onClick(() => {
        this.flag = !this.flag;
      }).margin({ top: 12 })
    }
    .height('100%')
  }
}
```

**参考链接**

[if/else：条件渲染](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse)
