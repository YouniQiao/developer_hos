---
title: "objectDetection（多目标识别）"
upstream_id: "harmonyos-references/core-vision-object-detection-api"
catalog: "harmonyos-references"
content_hash: "fb791b0106e6"
synced_at: "2026-07-09T01:01:42.327513"
---

# objectDetection（多目标识别）

多目标识别服务提供了从图像中识别多个目标的能力。通过拍照、录像等光学输入方式，把各种场景下的图像转化为数字图像信息，再利用AI底层能力对图像进行分析，从中定位并识别出多个感兴趣的目标对象，如人脸、动物、植物等，便于用户提取目标的类别、边框位置、置信度等信息。

目前本服务支持识别的目标类型包括：风景，动物，植物，建筑，人脸，表格，文本，人头，猫头，狗头，食物，汽车，人体，文档，卡证。

起始版本： 5.0.0(12)

#### 导入模块

```
import { visionBase, objectDetection } from '@kit.CoreVisionKit';
```

#### VisionObject

视觉信息对象。

系统能力： SystemCapability.AI.Vision.ObjectDetection

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| boundingBox | visionBase.[BoundingBox](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#boundingbox) | 否 | 否 | visionObject的边界框。 |
| score | number | 否 | 否 | visionObject的置信度。范围为(0,1)。0表示置信度最低，1表示置信度最高。置信度越高，说明这个点的位置越可靠。 |
| labels | Array | 否 | 否 | 识别物体的类型标签。 0：风景。 1：动物。 2：植物。 3：建筑。 5：人脸。 6：表格。 7：文本。 8：人头。 9：猫头。 10：狗头。 11：食物。 12：汽车。 13：人体。 21：文档。 22：卡证。 |
| id | number | 否 | 否 | visionObject的唯一标识符。ID为从0开始递增的整数编号。 |

#### ObjectDetectionResponse

多目标检测的结果类。继承自visionBase基类的[Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#response)。

系统能力： SystemCapability.AI.Vision.ObjectDetection

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| objects | Array | 否 | 否 | 多目标检测结果。可以是单个对象或多个对象的数组。 |

#### ObjectDetector

定义多目标识别的接口和基本结构。继承自[visionBase.Analyzer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#analyzer)类。它有以下功能函数：

- private constructor()：这是一个私有构造函数，意味着不能直接通过new关键字实例化ObjectDetector，必须通过 create() 静态方法来创建实例。
- static create(): Promise：这是一个静态方法，用于创建 ObjectDetector 的实例。使用Promise异步回调。
- process(request: visionBase.Request): Promise：这是一个实例方法，用于处理多目标识别请求。使用Promise异步回调。
- destroy(): Promise：这是一个实例方法，用于销毁多目标识别的进程。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.ObjectDetection

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 5.0.0(12)

| 名称 | 说明 |
| --- | --- |
| constructor | 强制开发者必须使用static create()方法来创建ObjectDetector的实例。 |
| create | 初始化多目标识别接口。 |
| process | 多目标识别的实际执行接口。 |
| destroy | 多目标识别进程的销毁接口。 |

#### [h2]create

static create(): Promise<ObjectDetector>

多目标识别的初始化接口。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.ObjectDetection

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回ObjectDetector实例。 |

错误码：

以下错误码的详细介绍请参见[Core Vision Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-core-vision)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1011000001 | Failed to run, please try again. |
| 1011000002 | The service is abnormal. |

示例：

```
import { objectDetection } from '@kit.CoreVisionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function createAndDestroyDetector() {
  const detector = await objectDetection.ObjectDetector.create();
  if (detector) {
    hilog.info(0x0000, 'objectDetectionSample', 'Object detector created successfully');
  } else {
    hilog.error(0x0000, 'objectDetectionSample', 'Failed to create object detector');
    return;
  }
  // 使用 detector 进行一些操作
  // ...

  // 完成后销毁 detector
  if (detector) {
    await detector.destroy();
    hilog.info(0x0000, 'objectDetectionSample', 'Object detector destroyed successfully');
  } else {
    hilog.error(0x0000, 'objectDetectionSample', 'Failed to destroy object detector');
  }
}

@Entry
@Component
struct Page {

  build() {
    Column(){
      Button('createAndDestroyDetector').onClick(() => {
        void createAndDestroyDetector();
      })
    }
  }
}
```

#### [h2]destroy

destroy(): Promise<void>

销毁多目标识别的进程。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.ObjectDetection

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

示例：

```
import { objectDetection } from '@kit.CoreVisionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function createAndDestroyDetector() {
  const detector = await objectDetection.ObjectDetector.create();
  if (detector) {
    hilog.info(0x0000, 'objectDetectionSample', 'Object detector created successfully');
  } else {
    hilog.error(0x0000, 'objectDetectionSample', 'Failed to create object detector');
    return;
  }
  // 使用 detector 进行一些操作
  // ...

  // 完成后销毁 detector
  if (detector) {
    await detector.destroy();
    hilog.info(0x0000, 'objectDetectionSample', 'Object detector destroyed successfully');
  } else {
    hilog.error(0x0000, 'objectDetectionSample', 'Failed to destroy object detector');
  }
}

@Entry
@Component
struct Page {

  build() {
    Column(){
      Button('createAndDestroyDetector').onClick(() => {
        void createAndDestroyDetector();
      })
    }
  }
}
```

#### [h2]process

process(request: visionBase.Request): Promise<ObjectDetectionResponse>

创建多目标识别实例并执行多目标识别。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.ObjectDetection

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | visionBase.[Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#request) | 是 | 图片实例。多目标识别接口仅支持传入一张图片，不支持传入多张图片。 具体规格请参考[约束与限制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/core-vision-introduction#约束与限制)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回多目标识别的结果。 |

错误码：

以下错误码的详细介绍请参见[Core Vision Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-core-vision)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. |
| 1011000001 | Failed to run, please try again. |
| 1011000003 | Failed to run the model, please try again. |
| 1011000004 | Running the model timed out. Try again later. |

示例：

```
import { objectDetection, visionBase } from '@kit.CoreVisionKit';
import { image } from '@kit.ImageKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { fileIo } from '@kit.CoreFileKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function objectDetectTest() {
  let imageSource: image.ImageSource | undefined = undefined;
  let chooseImage: image.PixelMap | undefined = undefined;

  // 通过图库选择一张图片
  let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
  photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
  photoSelectOptions.maxSelectNumber = 1;
  let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();
  let photoSelectResult = await photoPicker.select(photoSelectOptions);
  let uri = photoSelectResult.photoUris[0];
  if (uri === undefined) {
    hilog.info(0x0000, 'objectDetectionSample', 'uri is undefined');
    return;
  }

  // 将图片转换为PixelMap
  let file = await fileIo.open(uri, fileIo.OpenMode.READ_ONLY);
  imageSource = image.createImageSource(file.fd);
  chooseImage = await imageSource.createPixelMap();
  hilog.info(0x0000, 'objectDetectionSample', 'chooseImage:', chooseImage);
  if (!chooseImage) {
    return;
  }

  // 创建检测器
  let detector = await objectDetection.ObjectDetector.create();
  hilog.info(0x0000, 'objectDetectionSample', 'Object detector created successfully');

  // 调用对象检测接口
  let request: visionBase.Request = {
    inputData: { pixelMap: chooseImage },
    scene: visionBase.SceneMode.FOREGROUND
  };
  let response: objectDetection.ObjectDetectionResponse = await detector.process(request);

  if (response.objects.length === 0) {
    hilog.info(0x0000, 'objectDetectionSample', 'No objects detected in the image.');
  } else {
    let objectString = JSON.stringify(response.objects);
    hilog.info(0x0000, 'objectDetectionSample', 'Detected objects: ' + objectString);
  }

  // 清理资源
  if (chooseImage && imageSource) {
    void chooseImage.release();
    void imageSource.release();
  }
  if (file) {
    await fileIo.close(file);
  }
  if (detector) {
    await detector.destroy();
    hilog.info(0x0000, 'objectDetectionSample', 'Object detector destroyed successfully');
  }
}

@Entry
@Component
struct Page {

  build() {
    Column(){
      Button('Start').onClick(() => {
        // 调用函数
        void objectDetectTest();
      })
    }
  }
}
```
