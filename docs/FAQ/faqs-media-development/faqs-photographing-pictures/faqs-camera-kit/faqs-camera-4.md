---
title: "如何检测当前相机服务的状态"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-4
format: md
upstream_id: FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-4
last_sync: 2026-06-07
sync_hash: 54616e61
---
设置状态回调以返回相机状态。

```
import { camera } from '@kit.CameraKit';
import { BusinessError } from '@kit.BasicServicesKit';
const context = AppStorage.get("context") as UIContext;
let cameraManager = camera.getCameraManager(context.getHostContext()!);
cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {
  console.log(`camera : ${cameraStatusInfo.camera.cameraId}`);
  console.log(`status: ${cameraStatusInfo.status}`);
});
```

相机状态：CameraStatus

CameraStatus是一个枚举，表示相机状态。

**参考链接**

[CameraStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#camerastatus)
