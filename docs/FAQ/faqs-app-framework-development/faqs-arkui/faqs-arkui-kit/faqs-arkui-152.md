---
format: md
title: "如何设置子组件宽度使其不超过父组件的大小"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-152
---


使用calc()函数计算并动态设置子组件宽度。参考代码如下：

```
@Entry
@Component
struct SizeExample {
  @State flag:boolean = true;

  build() {
    Row() {
      Text(this.flag ? 'Followed by' : 'Not following')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .backgroundColor(0xFFFAF0)
        .textAlign(TextAlign.Center)
        .margin(10)
        .size({ width: this.flag ? 60 : 80 })
        .onClick(()=>{
          this.flag = !this.flag
        })
      Text('HarmonyOS Developer Community')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .backgroundColor(0xFFFAF0)
        .size({width: this.flag ? 'calc(100% - 60vp)' : 'calc(100% - 80vp)'})
    }
    .width(500)
    .margin({ top: 5 })
  }
}
```

**参考链接**

[尺寸设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size)
