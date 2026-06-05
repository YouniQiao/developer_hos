---
displayed_sidebar: appDevSidebar
title: "图像跟踪（C/C++）"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-image-track
format: md
---


本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp)。

## 约束与限制

从5.1.0(18)开始，图像跟踪能力支持部分Phone、部分Tablet设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持图像跟踪特性（[ARENGINE\_FEATURE\_TYPE\_IMAGE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)）。

## 接口说明

以下接口为AR图像跟踪相关接口。详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

| 接口名 | 描述 |
| --- | --- |
| [HMS\_AREngine\_ARSession\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create) | 创建一个新的[AREngine\_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。 |
| [HMS\_AREngine\_ARSession\_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_update) | 更新AR Engine的计算结果。 |
| [HMS\_AREngine\_ARSession\_Configure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_configure) | 配置[AREngine\_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。 |
| [HMS\_AREngine\_ARFrame\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_create) | 创建一个新的[AREngine\_ARFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arframe)对象，将指针存储到中\*outFrame。 |
| [HMS\_AREngine\_ARSession\_SetDisplayGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_setdisplaygeometry) | 设置显示的高和宽（以Pixel为单位）。该高度和宽度是显示视图的高度和宽度，如果不一致，会导致显示相机预览出错。 |
| [HMS\_AREngine\_ARSession\_SetCameraGLTexture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_setcameragltexture) | 设置可用于存储相机预览流数据的openGL纹理。 |
| [HMS\_AREngine\_ARSession\_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables) | 获取所有指定类型的可跟踪对象集合。 |
| [HMS\_AREngine\_ARTrackableList\_AcquireItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem) | 从可跟踪列表中获取指定index的对象。 |
| [HMS\_AREngine\_ARPlane\_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getcenterpose) | 获取从平面的局部坐标系到世界坐标系转换的位姿信息。 |
| [HMS\_AREngine\_ARFrame\_AcquireCamera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquirecamera) | 获取当前帧的相机参数对象。 |
| [HMS\_AREngine\_ARPose\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arpose_create) | 分配并初始化一个新的位姿对象。 |
| [HMS\_AREngine\_ARCamera\_GetPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arcamera_getpose) | 获取当前相机对象在AR世界空间中的位姿。 |
| [HMS\_AREngine\_ARAugmentedImageDatabase\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_create) | 创建一个空的跟踪图像数据。 |
| [HMS\_AREngine\_ARAugmentedImageDatabase\_AddImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_addimage) | 将图像添加到图像数据库并输出对应图像的索引。 |
| [HMS\_AREngine\_ARTrackableList\_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_getsize) | 获取此列表中的可跟踪对象的数量。 |
| [HMS\_AREngine\_ARAugmentedImage\_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimage_getcenterpose) | 获取跟踪图像中心点在世界坐标系中的位姿信息。 |
| [HMS\_AREngine\_ARAugmentedImage\_GetExtendX](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendx) | 获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到X轴上的估计值。 |
| [HMS\_AREngine\_ARAugmentedImage\_GetExtendZ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendz) | 获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到Z轴上的估计值。 |
| [HMS\_AREngine\_ARAugmentedImageDatabase\_Serialize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_serialize) | 序列化特征数据库，在添加完图片后，可以将特征库序列化为buffer，用户可以保存此buffer以供下次使用。 |
| [HMS\_AREngine\_ARAugmentedImageDatabase\_Deserialize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_deserialize) | 反序列化特征数据库，用户可以将上次生成的或者保存的buffer数据反序列化为特征数据库后直接使用。 |

## 开发步骤

### 声明Native接口

开发者可参考AR物体摆放章节的[声明Native接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld#声明native接口)。

### 创建UI界面

首先创建一个起始UI页面“ARImage.ets”，设置两个按钮，用于实现“添加本地图片”和“读取本地数据库”两个功能，分别命名“ARImageByAdd.ets”和“ARImageByDatabase.ets”。配置路由进行页面间跳转，页面路由配置详细可查看[组件导航(Navigation) (推荐)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARImage.ets。
import { photoAccessHelper } from '@kit.MediaLibraryKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Builder
export function ARImageBuilder() {
  ARImage();
}

@Component
struct ARImage {
  pageInfo: NavPathStack = new NavPathStack();
  private imagePathArray: string[] = [];

  build(): void {
    NavDestination() {
      Column() {
        Button('选择本地图片', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(async () => {

            try {
              let photoOption: photoAccessHelper.PhotoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
              photoOption.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
              photoOption.maxSelectNumber = 50;
              photoOption.isEditSupported = false;
              let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();

              let photoResult: photoAccessHelper.PhotoSelectResult = await photoPicker.select(photoOption);
              if (photoResult.photoUris.length > 0 && photoResult.photoUris[0].length > 0) {
                this.imagePathArray = photoResult.photoUris;
                this.pageInfo.pushDestinationByName('ARImageByAdd', this.imagePathArray).catch((error: BusinessError) => {
                  console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);
                });
              }
            } catch (error) {
              const err: BusinessError = error as BusinessError;
              console.error(`Failed to select by photoPicker. Code: ${err.code}, message is ${err.message}.`);
            }
          })

        Button('加载本地数据库', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(() => {
            this.pageInfo.pushDestinationByName('ARImageByDatabase', null).catch((error: BusinessError) => {
              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);
            });
          })
      }
      .justifyContent(FlexAlign.SpaceEvenly)
      .width('100%')
      .height('100%')
    }
    .onReady((context: NavDestinationContext) => {
      this.pageInfo = context.pathStack;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }
}
```

创建一个ARImageByAdd.ets，用于选择图片，使用[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件加载相机预览画面，并定时触发每一帧绘制。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARImageByAdd.ets。
import { taskpool } from '@kit.ArkTS';
import { BusinessError, deviceInfo, emitter } from '@kit.BasicServicesKit';
import { fileIo } from '@kit.CoreFileKit';
import { image } from '@kit.ImageKit';
import { resourceManager } from '@kit.LocalizationKit';
import arEngineDemo from 'libentry.so';

@Builder
export function ARImageByAddBuilder() {
  ARImageByAdd();
}

@Component
struct ARImageByAdd {
  pageInfo: NavPathStack = new NavPathStack();
  private imageAddFailedNumbers: number = 0;
  private imageAddNumbers: number = 0;
  private imagePathList: string[] = [];
  private isSurfaceDestroy: boolean = false;
  private interval: number = -1;
  private isUpdate: boolean = false;
  private xComponentId = 'ARImage';
  @State addImageLog: string = '';
  @State context: Context = this.getUIContext().getHostContext() as Context;
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  @State imageTotalNumbers: number = 0;
  @State private isImageAddComplete: boolean = false;
  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;
  @State showPage: boolean = true;

  build(): void {
    NavDestination() {
      RelativeContainer() {
        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })
          .width('100%')
          .height('100%')
          .visibility(this.showPage ? Visibility.Visible : Visibility.None)
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onLoad(() => {
            console.info(`XComponent onLoad ${this.xComponentId}.`);
            this.interval = setInterval(() => {
              if (!this.isUpdate || !this.isImageAddComplete || this.imageAddNumbers === 0) {
                return;
              }
              arEngineDemo.update(this.xComponentId);
            }, 33) // 将帧率设置为30fps（每33ms 刷新一次帧）。
          })
          .onDestroy(() => {
            console.info(`XComponent onDestroy ${this.xComponentId}.`);
            this.isSurfaceDestroy = true;
            clearInterval(this.interval);
          })

        Text('添加图片进度：' +
        this.imageTotalNumbers.toString() + '/' + this.imagePathList.length.toString() + '\n ' +
        '添加成功数量：' +
        this.imageAddNumbers + ' \n' +
        '添加失败数量：' +
        this.imageAddFailedNumbers + '\n' + this.addImageLog)
          .width(300)
          .textAlign(TextAlign.Center)
          .fontColor(Color.Red)
          .visibility(!this.isImageAddComplete ? Visibility.Visible : Visibility.None)
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
      }
    }
    .onBackPressed(() => {
      console.error('Failed to onBackPressed.');
      return false;
    })
    .onAppear(() => {
      arEngineDemo.init(this.resMgr);
      let config: Int32Array = new Int32Array([1, this.rotation]);
      arEngineDemo.start(this.xComponentId, config);

      try {
        console.info(`Image path length: ${this.imagePathList.length}.`);
        this.RegisterAddImageCallback();
        taskpool.execute(addImage, this.xComponentId, this.imagePathList, errcode).then(() => {
          console.info('Add image task complete.');
          emitter.emit('checkAddImageResult');
        })
      } catch (error) {
        const err: BusinessError = error as BusinessError;
        console.error(`Failed to promise options error. Code: ${err.code}, message is ${err.message}.`);
      }
    })
    .onWillDisappear(() => {
      if (this.imageAddNumbers > 0) {
        arEngineDemo.saveImageDataBaseToLocal(this.xComponentId, this.context.filesDir);
      }
      arEngineDemo.stop(this.xComponentId);
    })
    .onShown(() => {
      this.isUpdate = true;
      arEngineDemo.show(this.xComponentId);
    })
    .onHidden(() => {
      this.isUpdate = false;
      if (!this.isSurfaceDestroy) {
        arEngineDemo.hide(this.xComponentId);
      }
    })
    .onReady((context: NavDestinationContext) => {
      this.pageInfo = context.pathStack;
      this.imagePathList = context.pathInfo.param as string[];
    })
    .hideTitleBar(true)
    .hideBackButton(false)
    .hideToolBar(true)
  }

  private showDialog(msg: string): void {
    this.getUIContext().showAlertDialog({
      title: '警告',
      message: msg,
      autoCancel: true,
      alignment: DialogAlignment.Center,
      offset: { dx: 0, dy: -20 },
      gridCount: 3,
      transition: TransitionEffect
        .asymmetric(TransitionEffect.OPACITY
          .animation({ duration: 1000, curve: Curve.Sharp })
          .combine(TransitionEffect
            .scale({ x: 1.5, y: 1.5 })
            .animation({ duration: 1000, curve: Curve.Sharp })
          ),
          TransitionEffect.OPACITY
            .animation({ duration: 100, curve: Curve.Smooth })
            .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })
              .animation({ duration: 100, curve: Curve.Smooth })
            )
        ),
      buttons: [{
        enabled: true,
        defaultFocus: true,
        style: DialogButtonStyle.HIGHLIGHT,
        value: '退出',
        action: () => {
          console.info('Callback when the second button is clicked')
          this.pageInfo.pop();
        }
      }]
    })
  }

  private RegisterAddImageCallback(): void {
    emitter.on('addImage', (data: emitter.EventData) => {
      if (data.data?.addImageReason === 0) {
        this.imageAddNumbers++;
        console.info(`Succeeded in adding image, image numbers: ${this.imageAddNumbers}.`);
      } else {
        this.imageAddFailedNumbers++;
        this.addImageLog += '失败图片名：' +
          data.data?.imageName + '\n' +
          '失败原因：' +
          errcode.get(data.data?.addImageReason) + '\n';
        console.error(`Failed to add image, image numbers: ${this.imageAddFailedNumbers}.`);
      }
      this.imageTotalNumbers++;
    })

    emitter.on('checkAddImageResult', () => {
      if (this.imageAddNumbers === 0 && this.isUpdate) {
        this.showPage = false;
        this.showDialog('请添加有效图片');
      }
      emitter.off('addImage');
      this.isImageAddComplete = true;
      emitter.off('checkAddImageResult');
    })
  }
}

let errcode: Map<number, string> = new Map<number, string>([[0, 'success'], [1, 'size not match'],
  [2, 'too bright or too dark'], [3, 'image color is relatively single'], [4, 'other error']]);

// 异步执行添加图片任务。
@Concurrent
async function addImage(componentId: string, imagePathList: string[],
  errcode: Map<number, string>): Promise<void> {
  for (let index = 0; index < imagePathList.length; index++) {
    const imagePath: string = imagePathList[index];
    let file: fileIo.File;
    try {
      file = fileIo.openSync(imagePath, fileIo.OpenMode.READ_ONLY);
    } catch (error) {
      const err: BusinessError = error as BusinessError;
      console.error(`Failed to open image. Code is ${err.code}, message is ${err.message}`);
      this.addFailedImageCounts += 1;
      continue
    }
    let imageName: string = file.name;
    const imageSourceApi: image.ImageSource = image.createImageSource(file.fd);
    try {
      fileIo.closeSync(file);
    } catch (error) {
      const err: BusinessError = error as BusinessError;
      console.error(`Failed to closeSync. Code is ${err.code}, message is ${err.message}.`);
      imageSourceApi.release();
      continue;
    }
    const imageInfo: image.ImageInfo = imageSourceApi.getImageInfoSync();
    if (!imageInfo) {
      console.error(`Failed to obtain the image pixel map information.`);
      imageSourceApi.release();
      continue;
    }
    const opts: image.DecodingOptions = {
      editable: true,
      desiredPixelFormat: image.PixelMapFormat.RGBA_8888,
      desiredSize: { width: imageInfo.size.width, height: imageInfo.size.height }
    }
    const pixelMap: image.PixelMap = imageSourceApi.createPixelMapSync(opts);
    if (!pixelMap) {
      console.error('Failed to create pixelMap.');
      imageSourceApi.release();
      continue;
    }
    const readBuffer: ArrayBuffer = new ArrayBuffer(pixelMap.getPixelBytesNumber());
    await pixelMap.readPixelsToBuffer(readBuffer);
    await pixelMap.release();

    let result: number = arEngineDemo.initImage(componentId, imageInfo.size.width, imageInfo.size.height, readBuffer);
    if (errcode.has(result) === false) {
      console.error('Failed to add image, break.');
      imageSourceApi.release();
      break;
    }
    if (result !== 0) {
      console.error(`Failed to Add image, reason is: ${errcode.get(result)}, imageName is: ${imageName}.`);
    }
    let eventData: emitter.EventData = {
      data: {
        'addImageReason': result,
        'imageName': imageName,
      }
    }
    emitter.emit('addImage', eventData);
    imageSourceApi.release();
  }
}
```

创建一个ARImageByDatabase.ets，用于加载本地数据库，加载相机预览画面，并定时触发每一帧绘制。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARImageByDatabase.ets。
import { deviceInfo } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';
import arEngineDemo from 'libentry.so';

@Builder
export function ARImageByDatabaseBuilder() {
  ARImageByDatabase();
}

@Component
struct ARImageByDatabase {
  pageInfo: NavPathStack = new NavPathStack();
  private isSurfaceDestroy: boolean = false;
  private interval: number = -1;
  private isUpdate: boolean = false;
  private xComponentId = 'ARImage';
  @State context: Context = this.getUIContext().getHostContext() as Context;
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;
  @State showPage: boolean = true;

  build(): void {
    NavDestination() {
      RelativeContainer() {
        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })
          .width('100%')
          .height('100%')
          .visibility(this.showPage ? Visibility.Visible : Visibility.None)
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onLoad(() => {
            console.info(`XComponent onLoad ${this.xComponentId}.`);
            this.interval = setInterval(() => {
              if (this.isUpdate) {
                arEngineDemo.update(this.xComponentId);
              }
            }, 33) // 将帧率设置为30fps（每33毫秒刷新一次帧）。
          })
          .onDestroy(() => {
            console.info(`XComponent onDestroy ${this.xComponentId}.`);
            this.isSurfaceDestroy = true;
            clearInterval(this.interval);
          })
      }
    }
    .onAppear(() => {
      arEngineDemo.init(this.resMgr);
      let config: Int32Array = new Int32Array([1, this.rotation]);
      arEngineDemo.start(this.xComponentId, config);

      arEngineDemo.setPath(this.xComponentId, this.context.filesDir);

      let imageCountInDatabase: number = arEngineDemo.getImageCount(this.xComponentId);
      console.info(`ImageCountInDatabase: ${imageCountInDatabase}.`);
      if (imageCountInDatabase <= 0) {
        this.showDialog('请添加有效图片');
      }
    })
    .onWillDisappear(() => {
      arEngineDemo.stop(this.xComponentId);
    })
    .onShown(() => {
      this.isUpdate = true;
      arEngineDemo.show(this.xComponentId);
    })
    .onHidden(() => {
      this.isUpdate = false;
      if (!this.isSurfaceDestroy) {
        arEngineDemo.hide(this.xComponentId);
      }
    })
    .onReady((context: NavDestinationContext) => {
      this.pageInfo = context.pathStack;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }

  showDialog(msg: string): void {
    this.getUIContext().showAlertDialog({
      title: '警告',
      message: msg,
      autoCancel: true,
      alignment: DialogAlignment.Center,
      offset: { dx: 0, dy: -20 },
      gridCount: 3,
      transition: TransitionEffect
        .asymmetric(TransitionEffect.OPACITY
          .animation({ duration: 1000, curve: Curve.Sharp })
          .combine(TransitionEffect
            .scale({ x: 1.5, y: 1.5 })
            .animation({ duration: 1000, curve: Curve.Sharp })
          ),
          TransitionEffect.OPACITY.animation({ duration: 100, curve: Curve.Smooth })
            .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 })
              .animation({ duration: 100, curve: Curve.Smooth })
            )
        ),
      buttons: [{
        enabled: true,
        defaultFocus: true,
        style: DialogButtonStyle.HIGHLIGHT,
        value: '退出',
        action: () => {
          console.info('Callback when the second button is clicked.');
          this.pageInfo.pop();
        }
      }]
    })
  }
}
```

配置路由进行页面间跳转，页面路由配置详细可查看[组件导航(Navigation) (推荐)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navigation)。

### 引入AR Engine

开发者可参考AR物体摆放章节的[引入AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld#引入ar-engine)。

### 创建AR会话

创建AR会话并配置ARType为图像跟踪。

```
AREngine_ARSession *arSession = nullptr;
// 创建AR会话。
HMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);
AREngine_ARConfig *arConfig = nullptr;
// 创建AR会话配置器。
HMS_AREngine_ARConfig_Create(arSession, &arConfig);
// 设置ARType为ARENGINE_TYPE_IMAGE
HMS_AREngine_ARConfig_SetARType(arSession, arConfig, ARENGINE_TYPE_IMAGE);
// 配置器设置给AR会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);
```

### 创建跟踪图像数据库并添加图像

1.调用[HMS\_AREngine\_ARAugmentedImageDatabase\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_create)函数，创建跟踪图像数据库。

```
// 创建跟踪图像数据库
AREngine_ARAugmentedImageDatabase *mDataBase = nullptr;
HMS_AREngine_ARAugmentedImageDatabase_Create(&mDataBase);
```

2.调用[HMS\_AREngine\_ARAugmentedImageDatabase\_AddImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimagedatabase_addimage)函数，添加图像到数据库，将添加失败的结果保存在reason中。

```
// 添加图像到数据库
AREngine_ARAddAugmentedImageReason reason = ARENGINE_ADD_AUGMENTED_IMAGE_REASON_NONE;
AREngine_ARAugmentedImageSource image;
uint32_t outputIndex = 0;
// 通过输入的图片构造image,具体可参考示例代码
auto addRet = HMS_AREngine_ARAugmentedImageDatabase_AddImage(mDataBase, &image, &outputIndex, &reason);
```

### 识别环境中的可跟踪图像

调用[HMS\_AREngine\_ARSession\_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables)函数，检测当前环境中的所有跟踪图像，并将结果存放在augmentList中。

```
AREngine_ARTrackableList *augmentList = nullptr;
HMS_AREngine_ARTrackableList_Create(arSession, &augmentList);
HMS_AREngine_ARSession_GetAllTrackables(arSession, ARENGINE_TRACKABLE_AUGMENTED_IMAGE, augmentList);
```

### 获取环境中的可跟踪图像数量

调用[HMS\_AREngine\_ARTrackableList\_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_getsize)函数获取平面数量，结果存放在augmentSize中。

```
int32_t augmentSize = 0;
HMS_AREngine_ARTrackableList_GetSize(arSession, augmentList, &augmentSize);
```

应用环境中，可能存在0个、1个或多个可跟踪图像。

当augmentSize等于0时，表示当前环境中不存在可跟踪图像。

当augmentSize等于1时，表示当前环境中仅存在1个可跟踪图像。

当augmentSize大于1时，表示当前环境中存在多个可跟踪图像。

### 获取跟踪图像示例

当存在1个或多个跟踪图像时，可以依次遍历augmentList获取所有跟踪图像。

```
for (int i = 0; i < augmentSize; ++i) {
    // 遍历所有可跟踪对象，根据应用进行处理。
}
```

对于第i个跟踪图像，创建并获取跟踪对象，并将其转化为跟踪图像对象[AREngine\_ARAugmentedImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_araugmentedimage)。

```
AREngine_ARTrackable *augment = nullptr;
HMS_AREngine_ARTrackableList_AcquireItem(arSession, augmentList, i, &augment);
AREngine_ARAugmentedImage *arImage = reinterpret_cast<AREngine_ARAugmentedImage*>(augment);
```

### 获取跟踪图像中心点在世界坐标系中的位姿信息

调用[HMS\_AREngine\_ARAugmentedImage\_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimage_getcenterpose)函数，获取跟踪图像中心点的位姿信息，位姿信息可参考[获取设备位姿](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-get-pose)。

```
AREngine_ARPose *imagePose = nullptr;
HMS_AREngine_ARPose_Create(arSession, nullptr, 0, &imagePose);
HMS_AREngine_ARAugmentedImage_GetCenterPose(arSession, arImage, imagePose);
```

### 获取跟踪图像的宽度

调用[HMS\_AREngine\_ARAugmentedImage\_GetExtendX](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendx)函数，获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到X轴上的估计值。

```
float extent_x;
HMS_AREngine_ARAugmentedImage_GetExtendX(arSession, arImage, &extent_x);
```

调用[HMS\_AREngine\_ARAugmentedImage\_GetExtendZ](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_araugmentedimage_getextendz)函数，获取图像的中心点为坐标原点，物理图像的宽度（单位为米），得到Z轴上的估计值。

```
float extent_z;
HMS_AREngine_ARAugmentedImage_GetExtendZ(arSession, arImage, &extent_z);
```
