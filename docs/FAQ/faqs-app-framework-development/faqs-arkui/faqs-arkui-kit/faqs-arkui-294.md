---
format: md
title: "如何实现带图片的二维码效果"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-294
---


可以通过Stack布局，将Image组件放置在QRCode组件之上。开发者应调整Image尺寸，避免图片过大影响二维码识别。示例代码如下：

```
@Entry
@Component
struct QRCodeWithImage {
  private value: string = 'hello world';

  build() {
    Stack() {
      QRCode(this.value)
        .width(200)
        .height(200)
      Image($r('app.media.app_icon'))
        .height(50)
        .width(50)
    }
    .height('100%')
    .width('100%')
  }
}
```
