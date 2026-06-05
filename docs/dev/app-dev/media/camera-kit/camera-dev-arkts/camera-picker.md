---
displayed_sidebar: appDevSidebar
title: "通过系统相机拍照和录像(CameraPicker)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-picker
format: md
---


应用可调用CameraPicker拍摄照片或录制视频，无需申请相机权限。

CameraPicker的相机交互界面由系统提供，在用户点击拍摄和确认按钮后，调用CameraPicker的应用获取对应的照片或者视频。

应用开发者如果只是需要获取即时拍摄的照片或者视频，则可以使用CameraPicker能力来轻松实现。

由于照片的拍摄和确认都是由用户进行主动确认，因此应用开发者可以不用申请操作相机的相关权限。

## 开发步骤

详细的API说明请参考[@ohos.multimedia.cameraPicker (相机选择器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-camerapicker)。

1. 导入相关接口，导入方法如下。

   ```
   import { camera, cameraPicker as picker } from '@kit.CameraKit';
   import { fileIo, fileUri } from '@kit.CoreFileKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/CameraPicker/entry/src/main/ets/pages/Index.ets#L17-L20" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

2. 配置[PickerProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-camerapicker#pickerprofile)。

   ![](./img/2ff98ab4.png)

   PickerProfile的saveUri为可选参数，如果未配置该项，拍摄的照片和视频默认存入媒体库中。

   如果不想将照片和视频存入媒体库，请自行配置应用沙箱内的文件路径。

   应用沙箱内的这个文件必须是一个存在的、可写的文件。这个文件的uri传入picker接口之后，相当于应用给系统相机授权该文件的读写权限。系统相机在拍摄结束之后，会对此文件进行覆盖写入。

   ```
   createPickerProfile(context: Context): picker.PickerProfile {
     let pathDir = context.filesDir;
     let fileName = `${new Date().getTime()}`;
     let filePath = pathDir + `/${fileName}.tmp`;
     fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE);

     let uri = fileUri.getUriFromPath(filePath);
     let pickerProfile: picker.PickerProfile = {
       cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK,
       saveUri: uri
     };
     return pickerProfile;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/CameraPicker/entry/src/main/ets/pages/Index.ets#L27-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


   fileIo接口调用方法请参考：[createRandomAccessFileSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiocreaterandomaccessfilesync10)和[getUriFromPath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri#fileurigeturifrompath)。
3. 调用picker拍摄接口获取拍摄的结果。

   ```
   async getPickerResult(context: Context, pickerProfile: picker.PickerProfile): Promise<picker.PickerResult> {
     let result: picker.PickerResult =
       await picker.pick(context, [picker.PickerMediaType.PHOTO, picker.PickerMediaType.VIDEO],
         pickerProfile);
     console.info(`picker resultCode: ${result.resultCode},resultUri: ${result.resultUri},mediaType: ${result.mediaType}`);
     return result;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/CameraPicker/entry/src/main/ets/pages/Index.ets#L47-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 完整示例

```
import { camera, cameraPicker as picker } from '@kit.CameraKit';
import { fileIo, fileUri } from '@kit.CoreFileKit';

@Entry
@Component
struct Index {
  @State imgSrc: string = '';
  @State videoSrc: string = '';
  createPickerProfile(context: Context): picker.PickerProfile {
    let pathDir = context.filesDir;
    let fileName = `${new Date().getTime()}`;
    let filePath = pathDir + `/${fileName}.tmp`;
    fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE);

    let uri = fileUri.getUriFromPath(filePath);
    let pickerProfile: picker.PickerProfile = {
      cameraPosition: camera.CameraPosition.CAMERA_POSITION_BACK,
      saveUri: uri
    };
    return pickerProfile;
  }

  async getPickerResult(context: Context, pickerProfile: picker.PickerProfile): Promise<picker.PickerResult> {
    let result: picker.PickerResult =
      await picker.pick(context, [picker.PickerMediaType.PHOTO, picker.PickerMediaType.VIDEO],
        pickerProfile);
    console.info(`picker resultCode: ${result.resultCode},resultUri: ${result.resultUri},mediaType: ${result.mediaType}`);
    return result;
  }

  getContext(): Context | undefined {
    let uiContext: UIContext = this.getUIContext();
    let context: Context | undefined = uiContext.getHostContext();
    return context;
  }

  build() {
    RelativeContainer() {
      Column() {
        Image(this.imgSrc).width(200).height(200).backgroundColor(Color.Black).margin(5);
        Video({ src: this.videoSrc}).width(200).height(200).autoPlay(true);
        Button("Test Picker Photo&Video").fontSize(20)
          .fontWeight(FontWeight.Bold)
          .onClick(async () => {
            let context = this.getContext();
            if (context === undefined) {
              return;
            }
            let pickerProfile = this.createPickerProfile(context);
            let result = await this.getPickerResult(context, pickerProfile);
            if (result.resultCode == 0) {
              if (result.mediaType === picker.PickerMediaType.PHOTO) {
                this.imgSrc = result.resultUri;
              } else {
                this.videoSrc = result.resultUri;
              }
            }
          }).margin(5);

      }.alignRules({
        center: { anchor: '__container__', align: VerticalAlign.Center },
        middle: { anchor: '__container__', align: HorizontalAlign.Center }
      })
      .id('CaptureOrVideoButton')
    }
    .height('100%')
    .width('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Media/Camera/CameraPicker/entry/src/main/ets/pages/Index.ets#L16-L96" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
