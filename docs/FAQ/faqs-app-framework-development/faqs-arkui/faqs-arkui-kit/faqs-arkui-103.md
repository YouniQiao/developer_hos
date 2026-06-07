---
format: md
title: "Button组件如何设置渐变背景色"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-103
---


将Button的默认背景色设置为全透明，以确保渐变颜色正常显示。参考代码如下：

```
@Entry
@Component
struct Index {
  build() {
    Button('test')
      .width(200)
      .height(50)
      .backgroundColor('#00000000')
      .linearGradient({
        angle: 90,
        colors: [[0xff0000, 0.0], [0x0000ff, 0.3], [0xffff00, 1.0]]
      })
  }
}
```

**参考链接**

[Button](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button)
