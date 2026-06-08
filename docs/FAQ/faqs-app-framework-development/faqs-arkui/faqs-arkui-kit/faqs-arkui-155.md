---
format: md
title: "如何实现事件透传"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-155
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-155
last_sync: 2026-06-07
sync_hash: c7595afe
---
**问题现象**

在Stack中，如果有两个兄弟组件，组件A被组件B覆盖，用户点击组件B时，是否可以将点击事件透传给组件A，触发组件A的onClick回调，而不触发组件B的onClick回调。

**解决措施**

将组件B的hitTestBehavior属性设置为HitTestMode.None即可。参考代码如下：

```
@Entry
@Component
struct StackExample {
  build() {
    Stack({ alignContent: Alignment.Bottom }) {
      Text('A')
        .width('90%')
        .height('100%')
        .backgroundColor(0xd2cab3)
        .align(Alignment.Top)
        .onClick(() => {
          console.log('TextA click')
        })
      Text('B')
        .width('70%')
        .height('60%')
        .backgroundColor(0xc1cbac)
        .align(Alignment.Top)
        .hitTestBehavior(HitTestMode.None)
        .onClick(() => {
          console.log('TextB click')
        })
    }
    .width('100%')
    .height(150)
    .margin({ top: 5 })
  }
}
```

**参考链接**

[触摸测试控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-hit-test-behavior)
