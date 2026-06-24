---
title: "spatialImage（空间照片）"
upstream_id: "harmonyos-references/spatial-recon-spatialimage"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:14.373313"
---

# spatialImage（空间照片）

spatialImage是一项将单张2D图像重建为3D模型的技术，使开发者能够从2D图像生成3D模型（支持3D Gaussian或Mesh格式），并配合陀螺仪数据实现沉浸式视角交互体验。

起始版本： 26.0.0

#### 导入模块

```
import { spatialImage } from '@kit.SpatialReconKit';
```

#### SpatialImageStatus

定义空间照片的操作状态。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| STATUS_SUCCESS | 0 | 操作成功。 |
| STATUS_NOT_SUPPORT | 1023710001 | 设备不支持空间照片。 |
| STATUS_AIMODEL_NOT_EXIST | 1023710002 | 所需的AI模型不存在，建议调用[prepareEnv()](#prepareenv)下载模型。 |
| STATUS_AIMODEL_DOWNLOAD_FAILED | 1023710003 | AI模型下载失败。 |
| STATUS_GENERATE_CANCELLED | 1023710004 | 生成任务已取消。 |
| STATUS_GENERATE_FAILED | 1023710005 | 生成失败。 |

#### SpatialImageModelType

定义生成的3D模型类型。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| MODELTYPE_GS | 0 | 3D Gaussian模型，渲染质量高。 |
| MODELTYPE_MESH | 1 | Mesh三角网格模型，渲染效率高、兼容性好。 |

#### CameraPose

定义渲染相机的姿态，包含位置（Vec3）和旋转（Quaternion）。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

| 名称 | 类型 | 可读 | 可写 | 说明 |
| --- | --- | --- | --- | --- |
| position | [Vec3](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-types#vec3) | 是 | 是 | 相机位置，默认值为{ x: 0, y: 0, z: 0 }。 |
| potation | [Quaternion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-scene-types#quaternion) | 是 | 是 | 相机旋转四元数，默认值为{ w: 1, x: 0, y: 0, z: 0 }。 |

#### ProgressCallback

type ProgressCallback = (progress: double) => void

定义AI模型下载进度的回调函数类型。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| progress | double | 是 | 下载进度，取值范围为0到1。 |

#### spatialImage.SpatialImageGenerator

空间照片生成器，提供设备支持检查、AI模型下载、模型生成及取消等能力。

#### [h2]isSupport

static isSupport(): SpatialImageStatus

检查设备是否支持空间照片，并判断所需AI模型是否存在。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| [SpatialImageStatus](#spatialimagestatus) | 返回设备是否支持空间照片及AI模型是否存在的状态。 |

示例：

```
import { spatialImage } from '@kit.SpatialReconKit';

// 检查设备是否支持空间照片，并判断所需AI模型是否存在
let supportStatus: spatialImage.SpatialImageStatus = spatialImage.SpatialImageGenerator.isSupport();
if (supportStatus === spatialImage.SpatialImageStatus.STATUS_NOT_SUPPORT) {
  console.error('Device does not support spatial image');
} else if(supportStatus === spatialImage.SpatialImageStatus.STATUS_AIMODEL_NOT_EXIST) {
  console.info('AI models not exist, need to download');
}
```

#### [h2]prepareEnv

prepareEnv(callback: ProgressCallback): Promise<SpatialImageStatus>

下载模型，并通过回调函数监听下载进度。使用Promise异步回调。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

需要权限： ohos.permission.INTERNET

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [ProgressCallback](#progresscallback) | 是 | 下载进度回调，下载期间周期性触发。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回模型下载状态。 |

示例：

```
import { spatialImage } from '@kit.SpatialReconKit';

// 初始化spatialImage.SpatialImageGenerator对象
private generator: spatialImage.SpatialImageGenerator = new spatialImage.SpatialImageGenerator();

// 下载AI模型
let prepareRet = await this.generator.prepareEnv((progress: number) => {
  console.info(`Download progress: ${progress * 100}%`);
});
if (prepareRet !== spatialImage.SpatialImageStatus.STATUS_SUCCESS) {
  console.error('Download AI models failed');
}
```

#### [h2]cancelPrepare

cancelPrepare(): Promise<SpatialImageStatus>

取消正在进行的AI模型下载。使用Promise异步回调。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回取消下载模型的状态。 |

示例：

```
import { spatialImage } from '@kit.SpatialReconKit';

// 初始化spatialImage.SpatialImageGenerator对象
private generator: spatialImage.SpatialImageGenerator = new spatialImage.SpatialImageGenerator();

let cancelRet = await this.generator.cancelPrepare();
if (cancelRet === spatialImage.SpatialImageStatus.STATUS_SUCCESS) {
  console.info('Download cancelled');
}
```

#### [h2]generate

generate(image: image.PixelMap, type: SpatialImageModelType, uri: string): Promise<SpatialImageStatus>

从2D图像生成3D模型、运动参数和单目深度图，并保存到指定路径。该操作耗时较长，同一时间仅允许一个生成任务执行。使用Promise异步回调。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 是 | 用于生成3D模型的2D图像。 |
| type | [SpatialImageModelType](#spatialimagemodeltype) | 是 | 生成的模型类型。 |
| uri | string | 是 | 模型文件、运动参数和深度图的保存URI（应用沙箱路径）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回生成模型结果的状态。 |

示例：

```
import { image } from '@kit.ImageKit';
import { spatialImage } from '@kit.SpatialReconKit';

// 初始化spatialImage.SpatialImageGenerator对象
private generator: spatialImage.SpatialImageGenerator = new spatialImage.SpatialImageGenerator();

let pixelMap: image.PixelMap | null = null; // 获取PixelMap
let uri = '/data/storage/el2/base/haps/entry';
let generateRet = await this.generator.generate(pixelMap, spatialImage.SpatialImageModelType.MODELTYPE_MESH, uri);
if (generateRet === spatialImage.SpatialImageStatus.STATUS_SUCCESS) {
  console.info('Model generated successfully');
} else if (generateRet === spatialImage.SpatialImageStatus.STATUS_GENERATE_CANCELLED) {
  console.info('The generation model is canceled');
} else if (generateRet === spatialImage.SpatialImageStatus.STATUS_GENERATE_FAILED) {
  console.info('Model generated failed');
}
```

#### [h2]cancelGenerate

cancelGenerate(): Promise<SpatialImageStatus>

取消正在进行的模型生成任务。使用Promise异步回调。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回取消模型生成任务的状态。 |

示例：

```
import { spatialImage } from '@kit.SpatialReconKit';
// 初始化spatialImage.SpatialImageGenerator对象
private generator: spatialImage.SpatialImageGenerator = new spatialImage.SpatialImageGenerator();

let cancelRet = await this.generator.cancelGenerate();
if (cancelRet === spatialImage.SpatialImageStatus.STATUS_SUCCESS) {
  console.info('Generate cancelled');
}
```

#### spatialImage.SpatialImageController

空间照片控制器，负责加载生成的模型文件，并根据陀螺仪数据计算渲染相机姿态。

#### [h2]constructor

constructor(uri: string)

创建SpatialImageController实例，加载指定URI的模型文件。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | 模型文件和运动参数的保存URI。 |

示例：

```
import { spatialImage } from '@kit.SpatialReconKit';

let uri = '/data/storage/el2/base/haps/entry';
// 初始化spatialImage.SpatialImageController对象
let controller: spatialImage.SpatialImageController = new spatialImage.SpatialImageController(uri);
```

#### [h2]calcRenderPos

calcRenderPos(response: sensor.GyroscopeResponse): CameraPose

根据陀螺仪传感器数据计算渲染相机的姿态（位置和旋转）。该方法需要高频调用，建议在每次陀螺仪数据回调或每帧渲染时调用。相机历史姿态状态在内部维护，首次调用时返回初始姿态。

系统能力： SystemCapability.Graphics.SpatialRecon

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.GYROSCOPE

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| response | [sensor.GyroscopeResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#gyroscoperesponse) | 是 | 陀螺仪传感器数据。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [CameraPose](#camerapose) | 返回渲染相机的姿态，包含位置和旋转信息。 |

示例：

```
import sensor from '@ohos.sensor';
import { spatialImage } from '@kit.SpatialReconKit';

let uri = '/data/storage/el2/base/haps/entry';
// 初始化spatialImage.SpatialImageController对象
let controller: spatialImage.SpatialImageController = new spatialImage.SpatialImageController(uri);
// 监听陀螺仪数据并更新相机姿态
sensor.on(sensor.SensorId.GYROSCOPE, (response: sensor.GyroscopeResponse) => {
  if (controller != null) {
    let cameraPose = controller.calcRenderPos(response);
    // 将cameraPose.position和cameraPose.rotation传递给3D渲染引擎
  }
}, { interval: 2000000 });
```
