---
format: md
title: "如何实现相机关闭"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-camera-9
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

[拍照实践(ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-shooting-case)
