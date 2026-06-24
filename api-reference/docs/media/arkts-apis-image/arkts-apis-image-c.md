---
title: "Constants"
upstream_id: "harmonyos-references/arkts-apis-image-c"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:24.655775"
---

# Constants

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { image } from '@kit.ImageKit';
```

#### 常量

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Multimedia.Image.Core

| 名称 | 类型 | 值 | 说明 |
| --- | --- | --- | --- |
| XMAGE_WATERMARK_MODE_AT_THE_BOTTOM | number | 9 | XMAGE水印模式：XMAGE水印固定位于图像底部中央。 |
| XMAGE_WATERMARK_MODE_BORDER | number | 10 | XMAGE水印模式：XMAGE水印会自动调整到边界位置，系统根据图像内容选择最适合的边界区域。 |
| CAPTURE_MODE_PROFESSIONAL | number | 2 | 拍摄模式：专业模式。 |
| CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW | number | 7 | 拍摄模式：前置摄像头夜景模式。 |
| CAPTURE_MODE_PANORAMA | number | 8 | 拍摄模式：全景模式。 |
| CAPTURE_MODE_TAIL_LIGHT | number | 9 | 拍摄模式：尾灯模式。 |
| CAPTURE_MODE_LIGHT_GRAFFITI | number | 10 | 拍摄模式：轻涂鸦模式。 |
| CAPTURE_MODE_SILKY_WATER | number | 11 | 拍摄模式：缎面感水流模式。 |
| CAPTURE_MODE_STAR_TRACK | number | 12 | 拍摄模式：星轨模式。 |
| CAPTURE_MODE_WIDEAPERTURE | number | 19 | 拍摄模式：广角模式。 |
| CAPTURE_MODE_MOVING_PHOTO | number | 20 | 拍摄模式：动态照片模式。 |
| CAPTURE_MODE_PORTRAIT | number | 23 | 拍摄模式：人像模式。 |
| CAPTURE_MODE_REAR_LENS_NIGHT_VIEW | number | 42 | 拍摄模式：后镜头夜景模式。 |
| CAPTURE_MODE_SUPER_MACRO | number | 47 | 拍摄模式：超微距模式。 |
| CAPTURE_MODE_SNAP_SHOT | number | 62 | 拍摄模式：抓拍模式。 |
| XMP_BASIC | [XMPNamespace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#xmpnamespace) | uri: "http://ns.adobe.com/xap/1.0/" prefix: "xmp" | XMP基础命名空间。 **起始版本：** 26.0.0 |
| XMP_RIGHTS | [XMPNamespace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#xmpnamespace) | uri: "http://ns.adobe.com/xap/1.0/rights/" prefix: "xmpRights" | XMP版权与权限命名空间。 **起始版本：** 26.0.0 |
| EXIF | [XMPNamespace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#xmpnamespace) | uri: "http://ns.adobe.com/exif/1.0/" prefix: "exif" | EXIF元数据命名空间。 **起始版本：** 26.0.0 |
| DUBLIN_CORE | [XMPNamespace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#xmpnamespace) | uri: "http://purl.org/dc/elements/1.1/" prefix: "dc" | Dublin Core元数据命名空间。 **起始版本：** 26.0.0 |
| TIFF | [XMPNamespace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-i#xmpnamespace) | uri: "http://ns.adobe.com/tiff/1.0/" prefix: "tiff" | TIFF图像格式参数命名空间。 **起始版本：** 26.0.0 |

#### 示例

#### [h2]XMAGE水印模式

```
import { BusinessError } from '@kit.BasicServicesKit';

async function SetXmageWatermarkMode(imageSourceObj : image.ImageSource) {
  let makerNoteHuaweiMetadata = image.MakerNoteHuaweiMetadata.createInstance();
  // 设置XMAGE水印模式为底部中央。
  makerNoteHuaweiMetadata.xmageWatermarkMode = image.XMAGE_WATERMARK_MODE_AT_THE_BOTTOM;
  console.info('makerNoteHuaweiMetadata.xmageWatermarkMode:', makerNoteHuaweiMetadata.xmageWatermarkMode);
  await imageSourceObj.writeImageMetadata({ makerNoteHuaweiMetadata: makerNoteHuaweiMetadata }).then(() => {
    console.info(`SetXmageWatermarkMode success.`);
  }).catch((error: BusinessError) => {
    console.error(`WriteImageMetadata failed error.code is ${error.code}, error.message is ${error.message}`);
  });
}
```

#### [h2]拍摄模式

```
import { BusinessError } from '@kit.BasicServicesKit';

async function SetCaptureMode(imageSourceObj : image.ImageSource) {
  let makerNoteHuaweiMetadata = image.MakerNoteHuaweiMetadata.createInstance();
  // 设置拍摄模式为专业模式。
  makerNoteHuaweiMetadata.captureMode = image.CAPTURE_MODE_PROFESSIONAL;
  console.info('makerNoteHuaweiMetadata.captureMode:', makerNoteHuaweiMetadata.captureMode);
  await imageSourceObj.writeImageMetadata({ makerNoteHuaweiMetadata: makerNoteHuaweiMetadata }).then(() => {
    console.info(`SetCaptureMode success.`);
  }).catch((error: BusinessError) => {
    console.error(`WriteImageMetadata failed error.code is ${error.code}, error.message is ${error.message}`);
  });
}
```

#### [h2]XMP Namespaces

可以参考XMPMetadata中的[setValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-xmpmetadata#setvalue)和[getTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-xmpmetadata#gettag)等方法的示例来使用这些命名空间。
