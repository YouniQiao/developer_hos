---
title: "如何获取前置摄像头的预览图像"
original_url: /docs/FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-2
format: md
upstream_id: FAQ/faqs-media-development/faqs-photographing-pictures/faqs-camera-kit/faqs-camera-2
last_sync: 2026-06-07
sync_hash: 81ea8499
---
获取前置摄像头预览图像示例代码如下：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { camera } from '@kit.CameraKit';
import { common } from '@kit.AbilityKit';

const context = AppStorage.get("context") as common.UIAbilityContext;

@Entry
@Component
struct GetFrontCameraImage {
  private xComponentController: XComponentController = new XComponentController();

  async getCameraImage() {
    // 1、Use the system camera framework camera module to obtain physical camera information.
    let cameraManager = camera.getCameraManager(context);
    let camerasInfo: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();
    // Detecting camera status
    cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {
      console.log(`camera : ${cameraStatusInfo.camera.cameraId}`);
      console.log(`status : : ${cameraStatusInfo.status}`);
    });
    // 2、Create and start a physical camera input stream channel
    // Set as front camera camera.CameraPosition.CAMERA_POSITION_FRONT
    let frontCamera = camerasInfo.find(cam => cam.cameraPosition === camera.CameraPosition.CAMERA_POSITION_FRONT);
    let cameraInput = cameraManager.createCameraInput(frontCamera);
    await cameraInput.open();
    // 3、Retrieve the physical camera information and query the output formats supported by the preview stream of the camera. Create a preview output channel by combining it with the surfaceId provided by XComponent
    let outputCapability = cameraManager.getSupportedOutputCapability(frontCamera, camera.SceneMode.NORMAL_PHOTO);
    let previewProfile = outputCapability.previewProfiles[0];
    let surfaceId = this.xComponentController.getXComponentSurfaceId();
    let previewOutput = cameraManager.createPreviewOutput(previewProfile, surfaceId);
    // 4、Create a camera session, add the camera input stream and preview output stream in the session, then start the session, and the preview image will be displayed on the XComponent component.
    let captureSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO);
    captureSession.beginConfig();
    captureSession.addInput(cameraInput);
    captureSession.addOutput(previewOutput);
    captureSession.commitConfig()
    captureSession.start();
  }

  build() {
    Row() {
      Column({ space: 20 }) {
        XComponent({ id: 'xComponentId1', type: 'surface', controller: this.xComponentController })
          .height(300)
        Button('Turn on the camera')
          .onClick(() => {
            // Ensure that camera permissions have been obtained before calling
            this.getCameraImage();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[拍照实践(ArkTS)](/docs/dev/app-dev/media/camera-kit/camera-dev-arkts/camera-shooting-case)
