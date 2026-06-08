---
format: md
title: "如何识别双击手势时忽视单击手势"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-306
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-306
last_sync: 2026-06-07
sync_hash: ddcbd156
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

[互斥识别](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures#互斥识别)
