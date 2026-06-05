---
format: md
title: "控制中心的下拉背景实时模糊是如何实现的"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-145
---

实时模糊，就是通过状态变量实时改变模糊值。实现模糊可以通过组件的通用属性[backdropBlur](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#backdropblur)来设置组件的模糊效果。参考代码如下：

```
// xxx.ets
@Entry
@Component
struct BackGroundBlur {
  private imageSize: number = 150;

  build() {
    Column() {
      // backdropBlur Only blur radius and grayscale parameters can be set
      Stack() {
        Image($r('app.media.startIcon'))
          .width(this.imageSize)
          .height(this.imageSize)
        Column()
          .width(this.imageSize)
          .height(this.imageSize)
          .backdropBlur(20, { grayscale: [30, 50] })
      }
    }
    .width('100%')
    .padding({ top: 5 })
  }
}
```

**参考链接**

[图像效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect)
