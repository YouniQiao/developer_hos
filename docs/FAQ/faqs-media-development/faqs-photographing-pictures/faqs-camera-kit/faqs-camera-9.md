---
format: md
title: "如何实现相机关闭"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-9
---


实现相机关闭的参考代码如下：

```
// Stop the current session
  photoSession.stop();

// Release camera input stream
  cameraInput.close();

// Release preview output stream
  previewOutput.release();

// Release the photo output stream
  photoOutput.release();

// Release session
  photoSession.release();

// Session left blank
  photoSession = undefined;
```

**参考链接**

[拍照实践(ArkTS)](/docs/dev/app-dev/media/camera-kit/camera-dev-arkts/camera-shooting-case)
