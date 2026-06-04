---
title: "如何实现窗口、页面和组件的一键置灰功能（灰色模式）"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-275
---

**实现窗口的一键置灰**

可以通过窗口的[setWindowGrayScale()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowgrayscale12)接口实现窗口的一键置灰。

**实现组件/页面一键置灰**

可以通过[grayscale()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#grayscale)方法添加灰度效果，实现页面和组件的一键置灰功能。

grayscale()接收一个number类型的参数，定义灰度转换比例。参数范围0.0-1.0，其中0.0表示无变化，1.0表示完全灰度，中间值呈线性变化。

示例如下：

```
@Entry
@Component
struct Index {
  @State grayscaleValue: number = 0;

  build() {
    Column({ space: 20 }) {
      Image($r("app.media.app_icon"))
        .height(100)
      Row({ space: 20 }) {
        Button("Set Gray")
          .onClick(() => {
            this.grayscaleValue = 1; // Set grayscale to 100%
          })
        Button("Restore")
          .onClick(() => {
            this.grayscaleValue = 0; // Set grayscale to 0%
          })
      }
    }
    .width("100%")
    .height("100%")
    .backgroundColor('#fcd473')
    .padding(10)
    .grayscale(this.grayscaleValue)
  }
}
```
