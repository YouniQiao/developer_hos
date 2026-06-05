---
format: md
title: "如何获取图片的宽高"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-146
---

通过Image组件的[onComplete](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#oncomplete)事件，图片数据加载成功和解码成功时均触发该回调，返回成功加载的图片尺寸。参考代码如下：

```
Image($r('app.media.startIcon'))
  .width(200)
  .height(200)
  .objectFit(ImageFit.Contain)
  .onComplete((event) => {
    let imageWidth = event?.width;
    let imageHeight = event?.height;
    console.info('imageWidth:'+imageWidth,'imageHeight:'+imageHeight);
  })
```

**参考链接**

[Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)
