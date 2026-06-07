---
format: md
title: "如何开关闪光灯"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-13
---


使用[isFlashModeSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-flashquery#isflashmodesupported11)方法检测设备是否支持需要设置的闪光灯模式后，使用[setFlashMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-flash#setflashmode11)设置闪光灯模式。

**参考代码**

```
setFlash(captureSession: camera.PhotoSession,flashMode: camera.FlashMode) {
  if (captureSession != null) {
    let focusModeStatus: boolean = captureSession?.isFlashModeSupported(flashMode);
    if (focusModeStatus) {
      captureSession.setFlashMode(flashMode);
    }
  }
}
```
