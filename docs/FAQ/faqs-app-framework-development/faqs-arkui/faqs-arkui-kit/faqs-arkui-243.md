---
format: md
title: "如何解决点击子组件模块区域会触发父组件的点击事件问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-243
---

**问题现象**

当enabled的值为false时，点击Button按钮会触发父组件的点击事件。

**解决措施**

将Button组件包裹在容器组件中，并设置hitTestBehavior属性为[HitTestMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#hittestmode9).Block，以阻止事件冒泡。具体代码如下：

```
@Entry
@Component
struct TouchExample {
  @State text: string = 'Parent component'
  @State parentComponentResponse: string = 'Response times of parent component'
  @State parentComponentResponseNum: number = 0

  build() {
    Column() {
      Column(){
        Text(this.text).margin({bottom: 20})
        Text(this.parentComponentResponse + ':' + `${this.parentComponentResponseNum}`)
        Row(){
          //Wrap a container component around the Button component and set the hitTestBehavior property to HitTestMode.Block, which can prevent event bubbling.
          Button('Disable sub components').height(40).width(100).margin({top: 20})
        }
        .hitTestBehavior(HitTestMode.Block)
      }.onClick((e) => {
        this.parentComponentResponseNum ++;
      })
      .width('80%')
      .height('30%')
      .backgroundColor(Color.Gray)
    }
    .width('100%')
    .padding(30)
  }
}
```

**参考链接**

[触摸测试控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-hit-test-behavior)
