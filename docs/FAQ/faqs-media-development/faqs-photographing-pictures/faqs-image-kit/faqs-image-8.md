---
format: md
title: "如何设置图片显示的分辨率"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-image-kit/faqs-image-8
---


可以通过[sourceSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#sourcesize)属性设置图片分辨率。实例代码如下，原图尺寸为1280×960，示例将图片解码为40×40。

```
@Entry
@Component
struct Index {
  build() {
    Column() {
      Row({ space: 50 }) {
        Image($r('app.media.example'))
          .sourceSize({
            width: 40,
            height: 40
          })
          .objectFit(ImageFit.ScaleDown)
          .aspectRatio(1)
          .width('25%')
          .border({ width: 1 })
          .overlay('width:40 height:40', { align: Alignment.Bottom, offset: { x: 0, y: 40 } })
      }
    }
  }
}
```
