---
format: md
title: "图片如何添加渐变模糊"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-55
---

组件通用样式属性linearGradientBlur可以为当前组件添加线性渐变模糊效果。以下为参考代码：

```
@Entry
@Component
struct ImageExample1 {
  privateResource1: Resource = $r('app.media.icon');
  @State imageSrc: Resource = this.privateResource1;

  build() {
    Column() {
      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {
        Row({ space: 5 }) {
          Image(this.imageSrc)
            .linearGradientBlur(60, {
              fractionStops: [[0, 0], [0, 0.33], [1, 0.66], [1, 1]],
              direction: GradientDirection.Bottom
            })
        }
      }
    }
  }
}
```

**参考链接**

[linearGradientBlur](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#lineargradientblur12)
