---
displayed_sidebar: appDevSidebar
title: "高精几何重建（C/C++）"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-volume-measurement
---

本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp)。

## 约束与限制

从6.0.0(20)开始，高精几何重建能力支持部分Phone、部分Tablet设备。请参考[硬件要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-preparations#硬件要求)判断设备是否支持高精几何重建特性（[ARENGINE\_FEATURE\_TYPE\_SEMANTIC\_DENSE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_featuretype)）。

## 接口说明

以下接口为AREngine高精几何重建相关接口，详细接口和说明，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

| 接口名 | 描述 |
| --- | --- |
| [HMS\_AREngine\_ARFrame\_AcquireSemanticDenseData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquiresemanticdensedata) | 获取当前帧的高精几何重建对象数据。 |
| [HMS\_AREngine\_ARConfig\_GetSemanticDenseMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_getsemanticdensemode) | 获取已设置的高精几何重建模式。 |
| [HMS\_AREngine\_ARConfig\_SetSemanticDenseMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_setsemanticdensemode) | 设置当前所需的高精几何重建模式。 |
| [HMS\_AREngine\_ARSemanticDense\_AcquireCubeData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata) | 获取识别到的高精几何重建对象数据中的立方体数据。 |
| [HMS\_AREngine\_ARSemanticDense\_AcquireCubeDataSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedatasize) | 获取识别到的高精几何重建对象数据中的立方体数量。 |
| [HMS\_AREngine\_ARSemanticDense\_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_release) | 释放高精几何重建对象。 |

## 开发步骤

### 声明Native接口

开发者可参考AR物体摆放章节的[声明Native接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld#声明native接口)。

### 创建UI界面

首先创建一个UI界面ARSemanticDense.ets，用于选择高精几何重建相关模式。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARSemanticDense.ets。
import { display} from '@kit.ArkUI';

@Builder
export function ARSemanticDenseBuilder() {
  ARSemanticDense();
}

@Component
struct ARSemanticDense {
  pageInfo: NavPathStack = new NavPathStack();
  @State context: Context = this.getUIContext().getHostContext() as Context;
  @State showPage: boolean = true;
  @State rotation: number = display.getDefaultDisplaySync().rotation;
  @State volume: string = '';

  build() {
    NavDestination() {
      Column() {
        Button('开启稠密点云', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(() => {
            this.pageInfo.pushDestinationByName('ARSemanticDenseRender', 0).catch((error: BusinessError) => {
              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);
            });
          })

        Button('打开体积测量', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(() => {
            this.pageInfo.pushDestinationByName('ARSemanticDenseRender', 1).catch((error: BusinessError) => {
              console.error(`[pushDestinationByName]failed. Code: ${error.code}.`);
            });
          })

        Button('打开空间测量', { type: ButtonType.Normal, stateEffect: true })
          .borderRadius(8)
          .width('50%')
          .height('5%')
          .onClick(() => {
            this.pageInfo.pushDestinationByName('ARSemanticDenseRender', 2).catch((error: BusinessError) => {
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

最后创建一个ARSemanticDenseRender.ets，使用[XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-xcomponent)组件用于加载相机预览画面，并定时触发每一帧绘制。

```
// 此代码可参考示例代码：ARSample/entry/src/main/ets/pages/ARSemanticDenseRender.ets。
import { display } from '@kit.ArkUI';
import { resourceManager } from '@kit.LocalizationKit';
import arEngineDemo from 'libentry.so';

@Builder
export function ARSemanticDenseRenderBuilder() {
  ARSemanticDenseRender();
}

@Component
struct ARSemanticDenseRender {
  pageInfo: NavPathStack = new NavPathStack();
  @State context: Context = this.getUIContext().getHostContext() as Context;
  private xComponentId: string = 'ARSemanticDense';
  private resMgr: resourceManager.ResourceManager = this.context.resourceManager;
  private interval: number = -1;
  private inputInterval: number = -1;
  private getCubeInfoInterval: number = -1;
  private isUpdate: boolean = false;
  private semanticDenseMode: number = 0;
  @State showPage: boolean = true;
  @State rotation: number = display.getDefaultDisplaySync().rotation;
  @State volume: string = '';

  build(): void {
    NavDestination() {
      RelativeContainer() {

        XComponent({ id: this.xComponentId, type: XComponentType.SURFACE, libraryname: 'entry' })
          .opacity(0.2)
          .width('100%')
          .height('100%')
          .zIndex(0.1)
          .visibility(this.showPage ? Visibility.Visible : Visibility.None)
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onLoad(() => {
            this.interval = setInterval(() => {
              if (this.isUpdate) {
                arEngineDemo.update(this.xComponentId);
                if (this.semanticDenseMode != 0) {
                  this.volume = arEngineDemo.getVolume(this.xComponentId);
                }
              }
            }, 33) // 将帧速率设置为30fps（每33ms刷新一次帧）
          })
          .onDestroy(() => {
            if (this.interval !== -1) {
              clearInterval(this.interval);
              this.interval = -1;
            }

            if (this.inputInterval !== -1) {
              clearInterval(this.inputInterval);
              this.inputInterval = -1;
            }

            if (this.getCubeInfoInterval !== -1) {
              clearInterval(this.getCubeInfoInterval);
              this.getCubeInfoInterval = -1;
            }
          })

        Text(this.volume)
          .fontColor(Color.Red)
          .fontSize(14)
          .textAlign(TextAlign.Center)
          .alignRules({
            bottom: { anchor: '__container__', align: VerticalAlign.Bottom },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
      }
    }
    .onAppear(() => {
      arEngineDemo.init(this.resMgr);
      let config: Int32Array = new Int32Array([1,this.rotation, 2, this.semanticDenseMode]);
      arEngineDemo.start(this.xComponentId, config);
    })
    .onWillDisappear(async () => {
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
      this.semanticDenseMode = context.pathInfo.param as number;
    })
    .hideTitleBar(true)
    .hideBackButton(true)
    .hideToolBar(true)
  }
}
```

### 引入AR Engine

开发者可参考AR物体摆放章节的[引入AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arengine-c-arworld#引入ar-engine)。

### 创建AR会话并配置高精几何重建相关模式

```
AREngine_ARSession *arSession = nullptr;
// 创建AR会话。
HMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);
AREngine_ARConfig *arConfig = nullptr;
// 创建AR会话配置器。
HMS_AREngine_ARConfig_Create(arSession, &arConfig);
// 配置高精几何重建模式中的体积识别模式。
HMS_AREngine_ARConfig_SetSemanticDenseMode(arSession, arConfig, ARENGINE_SEMANTIC_DENSE_MODE_CUBE_VOLUME);
// 配置器设置给AR会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);
```

### 获取当前环境中的高精几何重建信息

创建一个帧对象，调用[HMS\_AREngine\_ARFrame\_AcquireSemanticDenseData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arframe_acquiresemanticdensedata)函数，从当前帧中获取环境中的高精几何重建信息，其中包含了环境中的稠密点云信息和立方体信息。

```
AREngine_ARFrame *arFrame = nullptr;
// 创建AR单帧对象
HMS_AREngine_ARFrame_Create(arSession, &arFrame);
AREngine_ARSemanticDenseData *arSemanticDense = nullptr;
// 获取当前帧的稠密点云信息
HMS_AREngine_ARFrame_AcquireSemanticDenseData(arSession, arFrame, &arSemanticDense);
```

### 获取高精几何重建信息中的立方体数据

1. 调用[HMS\_AREngine\_ARSemanticDense\_AcquireCubeData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedata)函数，获取当前环境中的立方体数据，立方体的数据结构详情参考[AREngine\_ARSemanticDenseCubeData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-arsemanticdensecubedata)。

   ```
   AREngine_ARSemanticDenseCubeData *semanticDenseCubeData = nullptr;
   HMS_AREngine_ARSemanticDense_AcquireCubeData(arSession, arSemanticDense, &semanticDenseCubeData);
   ```
2. 调用[HMS\_AREngine\_ARSemanticDense\_AcquireCubeDataSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsemanticdense_acquirecubedatasize)函数，获取当前环境中的立方体数量，如果立方体数量大于0，即可从中获取单个立方体的数据进行绘制和体积计算。

   ```
   int64_t cubeDataSize = 0;
   HMS_AREngine_ARSemanticDense_AcquireCubeDataSize(arSession, arSemanticDense, &cubeDataSize);
   ```

### 绘制相关几何信息

1. 通过获取到的[AREngine\_ARSemanticDenseCubeData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-struct-arsemanticdensecubedata)对象来绘制立方体。

   ```
   // 判断获取的立方体数据及数量。
   if (semanticDenseCubeData != nullptr && cubeDataSize > 0) {
       // 绘制立方体。
       mCubeRenderer.Draw(projectionMat, viewMat, arSession, semanticDenseCubeData);
   }
   ```
