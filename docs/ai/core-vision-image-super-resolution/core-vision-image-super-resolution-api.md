---
title: "imageSuperResolution（图像超分）"
upstream_id: "harmonyos-references/core-vision-image-super-resolution-api"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:57.079745"
---

# imageSuperResolution（图像超分）

图像超分支持对输入的低分辨率图像进行超分辨率重建，使图像更加清晰。适用于提升图片质量、修复老照片等场景。

起始版本： 26.0.0

#### 导入模块

```
import { imageSuperResolution } from '@kit.CoreVisionKit';
```

#### ISPResponse

图像超分处理响应类。

继承自[Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#response)。

系统能力： SystemCapability.AI.Vision.VisionBase

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pixelMap | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 否 | 超分处理后的图片。 |

#### ImageSRAnalyzer

图像超分分析器类。

继承自[Analyzer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#analyzer)。

系统能力： SystemCapability.AI.Vision.VisionBase

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

#### [h2]ImageSRAnalyzer.create

create(): Promise<ImageSRAnalyzer>

创建图像超分分析器实例。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.VisionBase

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回图像超分分析器实例。 |

错误码：

以下错误码的详细介绍请参见[Core Vision Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-core-vision)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1018700001 | Service exception. |

示例：

```
import { imageSuperResolution } from '@kit.CoreVisionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function createImageSRAnalyzer() {
  try {
    const analyzer = await imageSuperResolution.ImageSRAnalyzer.create();
    hilog.info(0x0000, 'ImageSR', 'success to created ImageSRAnalyzer');
    return analyzer;
  } catch (error) {
    hilog.error(0x0000, 'ImageSR', 'Failed to create ImageSRAnalyzer: %{public}s', JSON.stringify(error));
    return null;
  }
}
```

#### [h2]ImageSRAnalyzer.process

process(request: visionBase.Request): Promise<ISPResponse>

对图像进行超分处理。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.VisionBase

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | [visionBase.Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api#request) | 是 | 图像超分请求参数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回图像超分处理结果。 |

错误码：

以下错误码的详细介绍请参见[Core Vision Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-core-vision)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1018700001 | Service exception. |

示例：

```
import { imageSuperResolution, visionBase } from '@kit.CoreVisionKit';
import { image } from '@kit.ImageKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { fileIo } from '@kit.CoreFileKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function processImageSuperResolution() {
  let imageSource: image.ImageSource | undefined = undefined;
  let inputImage: PixelMap | undefined = undefined;

  // 通过图库选择一张图片
  let photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
  photoSelectOptions.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
  photoSelectOptions.maxSelectNumber = 1;
  let photoPicker: photoAccessHelper.PhotoViewPicker = new photoAccessHelper.PhotoViewPicker();
  let photoSelectResult = await photoPicker.select(photoSelectOptions);
  let uri = photoSelectResult.photoUris[0];
  if (uri === undefined) {
    hilog.info(0x0000, 'ImageSR', 'uri is undefined');
    return;
  }

  // 将图片转换为PixelMap
  let file = await fileIo.open(uri, fileIo.OpenMode.READ_ONLY);
  imageSource = image.createImageSource(file.fd);
  inputImage = await imageSource.createPixelMap();
  hilog.info(0x0000, 'ImageSR', 'inputImage:', inputImage);
  if (!inputImage) {
    return;
  }

  // 创建图像超分分析器
  const analyzer = await imageSuperResolution.ImageSRAnalyzer.create();
  if (!analyzer) {
    hilog.error(0x0000, 'ImageSR', 'Failed to create analyzer');
    return;
  }

  // 调用图像超分接口
  try {
    let imageData: visionBase.ImageData = {
      pixelMap: inputImage
    }
    const request: visionBase.Request = {
      inputData: imageData
    };
    request.inputData = imageData
    const response = await analyzer.process(request);
    hilog.info(0x0000, 'ImageSR', 'Super resolution completed, output pixelMap: %{public}s', response.pixelMap);
  } catch (error) {
    hilog.error(0x0000, 'ImageSR', 'Failed to process super resolution: %{public}s', JSON.stringify(error));
  }

  // 释放资源
  if (inputImage && imageSource) {
    void inputImage.release();
    void imageSource.release();
  }
  if (file) {
    await fileIo.close(file);
  }
  await analyzer.destroy();
}

@Entry
@Component
struct Page {

  build() {
    Column(){
      Button('processImageSuperResolution').onClick(() => {
        // 调用函数
        void processImageSuperResolution();
      })
    }
  }
}
```

#### [h2]ImageSRAnalyzer.destroy

destroy(): Promise<void>

释放图像超分分析器服务。使用Promise异步回调。

系统能力： SystemCapability.AI.Vision.VisionBase

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[Core Vision Kit错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-core-vision)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1018700001 | Service exception. |

示例：

```
import { imageSuperResolution } from '@kit.CoreVisionKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

async function destroyImageSRAnalyzer() {
  const analyzer = await imageSuperResolution.ImageSRAnalyzer.create();
  if (analyzer) {
    hilog.info(0x0000, 'ImageSR', 'success to created ImageSRAnalyzer');

    // 这里可以添加图像超分处理的代码

    // 使用完毕后，释放图像超分分析器服务
    await analyzer.destroy();
    hilog.info(0x0000, 'ImageSR', 'success to released ImageSRAnalyzer');
  }
}

@Entry
@Component
struct Page {

  build() {
    Column(){
      Button('destroyImageSRAnalyzer').onClick(() => {
        // 调用函数
        void destroyImageSRAnalyzer();
      })
    }
  }
}
```
