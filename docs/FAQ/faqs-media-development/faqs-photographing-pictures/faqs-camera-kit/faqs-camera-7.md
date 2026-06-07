---
format: md
title: "如何保证相机在全屏预览时不变形"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-7
---


需要获取手机的宽高比，通过手机屏幕的width/height与支持的预览尺寸的width/height对比，选择最接近的值。预览流与录像输出流的分辨率宽高比应保持一致。例如，示例代码中的宽高比为1920:1080=16:9，因此预览流的分辨率宽高比也应为16:9，可以选择640:360、960:540或1920:1080等分辨率。

**参考链接**

[预览(ArkTS)-相机开发指导](/docs/dev/app-dev/media/camera-kit/camera-dev-arkts/camera-preview)
