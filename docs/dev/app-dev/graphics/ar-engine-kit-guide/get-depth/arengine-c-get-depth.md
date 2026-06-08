---
displayed_sidebar: appDevSidebar
title: "获取深度图（C/C++）"
original_url: /docs/dev/app-dev/graphics/ar-engine-kit-guide/get-depth/arengine-c-get-depth
format: md
upstream_id: dev/app-dev/graphics/ar-engine-kit-guide/get-depth/arengine-c-get-depth
last_sync: 2026-06-07
sync_hash: cfe2e451
---
本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp)。

## 约束与限制

从5.0.5(17)开始，获取深度估计信息能力支持部分Phone、部分Tablet设备。请参考[硬件要求](/docs/dev/app-dev/graphics/arengine-preparations#硬件要求)判断设备是否支持深度估计特性（[ARENGINE\_FEATURE\_TYPE\_DEPTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)）。

## 接口说明

以下接口为AR深度估计相关接口。详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

| 接口名 | 描述 |
| --- | --- |
| [HMS\_AREngine\_ARSession\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create) | 创建一个新的[AREngine\_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。 |
| [HMS\_AREngine\_ARSession\_Update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_update) | 更新AR Engine的计算结果。 |
| [HMS\_AREngine\_ARSession\_Configure](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_configure) | 配置[AREngine\_ARSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arsession)会话。 |
| [HMS\_AREngine\_ARFrame\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_create) | 创建一个新的[AREngine\_ARFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arframe)对象，将指针存储到\*outFrame中。 |
| [HMS\_AREngine\_ARSession\_SetDisplayGeometry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_setdisplaygeometry) | 设置显示的高和宽（以Pixel为单位）。该高度和宽度是显示视图的高度和宽度，如果不一致，会导致显示相机预览出错。 |
| [HMS\_AREngine\_ARSession\_SetCameraGLTexture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_setcameragltexture) | 设置可用于存储相机预览流数据的OpenGL纹理。 |
| [HMS\_AREngine\_ARSession\_GetAllTrackables](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_getalltrackables) | 获取所有指定类型的可跟踪对象集合。 |
| [HMS\_AREngine\_ARTrackableList\_AcquireItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_artrackablelist_acquireitem) | 从可跟踪列表中获取指定index的对象。 |
| [HMS\_AREngine\_ARPlane\_GetCenterPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arplane_getcenterpose) | 获取从平面的局部坐标系到世界坐标系转换的位姿信息。 |
| [HMS\_AREngine\_ARFrame\_AcquireCamera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquirecamera) | 获取当前帧的相机参数对象。 |
| [HMS\_AREngine\_ARPose\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arpose_create) | 分配并初始化一个新的位姿对象。 |
| [HMS\_AREngine\_ARCamera\_GetPose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arcamera_getpose) | 获取当前相机对象在AR世界空间中的位姿。 |
| [HMS\_AREngine\_ARConfig\_SetDepthMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_setdepthmode) | 设置深度模式。 |
| [HMS\_AREngine\_ARFrame\_AcquireDepthImage16Bits](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquiredepthimage16bits) | 获取当前帧的深度图像。 |
| [HMS\_AREngine\_ARFrame\_AcquireDepthConfidenceImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquiredepthconfidenceimage) | 获取当前帧的深度图像对应的置信度信息。 |

## 开发步骤

### 声明Native接口

开发者可参考AR物体摆放章节的[声明Native接口](/docs/dev/app-dev/graphics/ar-engine-kit-guide/arworld/arengine-c-arworld#声明native接口)。

### 创建UI界面

首先创建一个UI界面ARDepth.ets，用于选择是否开启深度图渲染模式。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARDepth.ets。
@Builder
export function ARDepthBuilder() {
  ARDepth();
}

@Component
struct ARDepth {
  pageInfo: NavPathStack = new NavPathStack();

  build(): void {
    NavDestination() {
      Column() {
        Button('关闭深度图渲染模式', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(() => {
            this.pageInfo.pushPathByName('ARDepthRender', 0); // 0表示关闭渲染
          })

        Button('开启深度图渲染模式', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(() => {
            this.pageInfo.pushPathByName('ARDepthRender', 1); // 1表示打开渲染
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

最后创建一个ARDepthRender.ets，使用[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件用于加载相机预览画面，并定时触发每一帧绘制。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARDepthRender.ets。
import { deviceInfo } from '@kit.BasicServicesKit';
import { resourceManager } from '@kit.LocalizationKit';
import arEngineDemo from 'libentry.so';

@Builder
export function ARDepthRenderBuilder() {
  ARDepthRender();
}

@Component
struct ARDepthRender {
  pageInfo: NavPathStack = new NavPathStack();
  private interval: number = -1;
  private isUpdate: boolean = true;
  private params: number = 0;
  private xComponentId = 'ARDepth';
  @State context: Context = this.getUIContext().getHostContext() as Context;
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  @State distance: string = '';
  @State rotation: number = deviceInfo.deviceType === 'tablet' ? 3 : 0;

  build(): void {
    NavDestination() {
      RelativeContainer() {
        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })
          .width('100%')
          .height('100%')
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onLoad(() => {
            this.interval = setInterval(() => {
              if (this.isUpdate) {
                // 每一帧通过调用AR Engine的Native API update来更新计算结果
                arEngineDemo.update(this.xComponentId);
                this.distance = arEngineDemo.getDistance(this.xComponentId);
              }
            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）
          })
          .onDestroy(() => {
            clearInterval(this.interval);
          })

        Text(this.distance)
          .fontColor(Color.Yellow)
          .fontSize(24)
          .textShadow({
            radius: 10,
            color: Color.Black,
            offsetX: 0,
            offsetY: 0
          })
          .textAlign(TextAlign.Center)
          .alignRules({
            bottom: { anchor: '__container__', align: VerticalAlign.Bottom },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
      }
    }
    .onAppear(() => {
      arEngineDemo.init(this.resMgr);
      let config: Int32Array = new Int32Array([0, this.params, 1, this.rotation]);
      arEngineDemo.start(this.xComponentId, config);
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
      arEngineDemo.hide(this.xComponentId);
    })
    .onReady((context: NavDestinationContext) => {
      this.pageInfo = context.pathStack;
      this.params = context.pathInfo.param as number;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }

}
```

配置路由进行页面间跳转，页面路由配置详细可查看[组件导航(Navigation) (推荐)](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation)。

### 引入AR Engine

开发者可参考AR物体摆放章节的[引入AR Engine](/docs/dev/app-dev/graphics/ar-engine-kit-guide/arworld/arengine-c-arworld#引入ar-engine)。

### 创建AR会话

创建AR会话并配置为开启深度模式。

```
AREngine_ARSession *arSession = nullptr;
// 创建AR会话。
HMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);
AREngine_ARConfig *arConfig = nullptr;
// 创建AR会话配置器。
HMS_AREngine_ARConfig_Create(arSession, &arConfig);
// 设置深度模式为开启状态。
HMS_AREngine_ARConfig_SetDepthMode(arSession, arConfig, ARENGINE_DEPTH_MODE_AUTOMATIC);
// 配置器设置给AR会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);
```

### 获取当前环境中的深度图

调用[HMS\_AREngine\_ARFrame\_AcquireDepthImage16Bits](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquiredepthimage16bits)函数，获取当前环境中的深度信息，并将结果存放在depthImage中。

```
AREngine_ARFrame *arFrame = nullptr;
// 创建AR单帧对象
HMS_AREngine_ARFrame_Create(arSession, &arFrame);
AREngine_ARImage *depthImage = nullptr;
// 获取深度图
HMS_AREngine_ARFrame_AcquireDepthImage16Bits(arSession, arFrame, &depthImage);
```

### 获取当前深度图对应的深度置信度图

调用[HMS\_AREngine\_ARFrame\_AcquireDepthConfidenceImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquiredepthconfidenceimage)函数，获取当前深度图对应的置信度图。

```
AREngine_ARFrame *arFrame = nullptr;
// 创建AR单帧对象
HMS_AREngine_ARFrame_Create(arSession, &arFrame);
AREngine_ARImage *depthConfidenceImage = nullptr;
// 获取深度置信度图
HMS_AREngine_ARFrame_AcquireDepthConfidenceImage(arSession, arFrame, &depthConfidenceImage);
```

### 获取深度图和深度置信度图中的值

深度图和深度置信度图包装为[AREngine\_ARImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arimage)对象，可以通过此对象获取对应的深度图和深度置信度图。

```
AREngine_ARImageFormat format;
// 获取当前帧图像的数据格式
HMS_AREngine_ARImage_GetFormat(arSession, depthImage, &format);
int32_t depthWidth;
// 获取深度图的宽度
HMS_AREngine_ARImage_GetWidth(arSession, depthImage, &depthWidth);
int32_t depthHeight;
// 获取深度图的高度
HMS_AREngine_ARImage_GetHeight(arSession, depthImage, &depthHeight);
uint8_t *depthData = nullptr;
int32_t depthLength = 0;
// 获取深度图的数据
HMS_AREngine_ARImage_GetPlaneData(arSession, depthImage, 0, (const uint8_t **)&depthData, &depthLength);
```

### 使用完毕后，销毁深度图和深度置信度图

```
HMS_AREngine_ARImage_Release(depthImage);
HMS_AREngine_ARImage_Release(depthConfidenceImage);
```
