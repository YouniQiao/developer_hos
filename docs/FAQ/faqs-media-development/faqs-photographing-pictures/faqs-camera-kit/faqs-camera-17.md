---
format: md
title: "视频预览分辨率设置"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-17
upstream_id: FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-17
last_sync: 2026-06-07
sync_hash: 7b8298ae
---
**问题现象**

旋转手机，预览画面中物品高度变化明显，画面畸变。代码中的预览分辨率：previewProfile \{"format":1003,"size":\{"width":3200,"height":2400\}\}，XComponent的surfaceWidth: 3200, surfaceHeight: 2400。

```
XComponent({
  id: 'componentId',
  type: 'surface',
  controller: this.mXComponentController,
}).onLoad(async () => {
  this.surfaceId = this.mXComponentController.getXComponentSurfaceId();
  let baseContext = this.getUIContext().getHostContext()! as common.BaseContext;
  await this.initCamera(baseContext, this.surfaceId)
}).width('100%')
  .height('100%')
```

**可能原因**

XComponent宽高比设置不当。

**解决措施**

请确保.width('100%').height('100%')的值不都设置为100%，并保持width和height的比例与previewProfile的height与width比例一致。
