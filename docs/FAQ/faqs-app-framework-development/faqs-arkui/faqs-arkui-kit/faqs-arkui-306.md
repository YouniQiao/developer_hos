---
format: md
title: "如何识别双击手势时忽视单击手势"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-306
---


使用组合手势GestureGroup的互斥识别。双击事件应置于单击事件之前，互斥识别按排列顺序进行。如果单击事件在前，则只会识别单击事件。参考代码如下：

```
@Entry
@Component
struct TapGestureExample {
  build() {
    Column() {
      Text('Click twice')
        .fontSize(28)
        .gesture(GestureGroup(GestureMode.Exclusive,
          TapGesture({ count: 2 })
            .onAction(() => {
              console.info('TapGesture 2');
            }),
          TapGesture({ count: 1 })
            .onAction(() => {
              console.info('TapGesture 1');
            })
        ))
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .alignSelf(ItemAlign.Center)
  }
}
```

**参考链接**

[互斥识别](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-combined-gestures#互斥识别)
