---
title: "ImageData"
upstream_id: "harmonyos-references/ts-components-canvas-imagedata"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:30.883067"
---

# ImageData

ImageData对象可以存储canvas渲染的像素数据。

![](./img/note_3.0-zh-cn.png) 从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

创建ImageData时，宽高不超过16384px，最大面积不超过16000px*16000px，超过最大面积则无法正常绘制。当创建面积超过536870911px时，返回值的width和height均为0px，data为undefined。

#### 接口

#### [h2]constructor

constructor(width: number, height: number, data?: Uint8ClampedArray)

创建宽为width，高为height，像素为data的ImageData，如果data未定义，则填充值全为0的一维数组。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | 矩形区域宽度，默认单位为vp。 异常值NaN和Infinity按0处理。 |
| height | number | 是 | 矩形区域高度，默认单位为vp。 异常值NaN和Infinity按0处理。 |
| data | [Uint8ClampedArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint8clampedarray) | 否 | 一维数组，保存了相应的颜色数据，数据值范围为0到255。 传入异常值undefined时，data为undefined。 默认值：值全为0的一维数组 |

#### [h2]constructor12+

constructor(width: number, height: number, data?: Uint8ClampedArray, unit?: LengthMetricsUnit)

创建宽为width，高为height，像素为data的ImageData，如果data未定义，则填充值全为0的一维数组，支持使用unit配置ImageData对象的单位模式。

卡片能力： 从API version 12开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | 矩形区域宽度，默认单位为vp。 异常值NaN和Infinity按0处理。 |
| height | number | 是 | 矩形区域高度，默认单位为vp。 异常值NaN和Infinity按0处理。 |
| data | [Uint8ClampedArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint8clampedarray) | 否 | 一维数组，保存了相应的颜色数据，数据值范围为0到255。 传入异常值undefined时，data为undefined。 默认值：值全为0的一维数组 |
| unit | [LengthMetricsUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#lengthmetricsunit12) | 否 | 用来配置ImageData对象的单位模式，配置后无法动态更改，配置方法同[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)。 异常值undefined、NaN和Infinity按默认值处理。 默认值：DEFAULT |

#### 属性

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| width | number | 是 | 否 | 矩形区域实际像素宽度。 单位为px。 |
| height | number | 是 | 否 | 矩形区域实际像素高度。 单位为px。 |
| data | [Uint8ClampedArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-arkts-collections-uint8clampedarray) | 是 | 否 | 一维数组，保存了相应的颜色数据，数据值范围为0到255。 |

![](./img/note_3.0-zh-cn.png) 可使用[px2vp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#px2vp12)接口进行单位转换。

#### 示例

使用getImageData接口获得一个ImageData对象。

```
// xxx.ets
@Entry
@Component
struct Translate {
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
  // "common/images/1234.png"需要替换为开发者所需的图像资源文件
  private img: ImageBitmap = new ImageBitmap("common/images/1234.png");

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Canvas(this.context)
        .width('100%')
        .height('100%')
        .backgroundColor('#ffff00')
        .onReady(() => {
          this.context.drawImage(this.img, 0, 0, 130, 130)
          let imageData = this.context.getImageData(50, 50, 130, 130)
          this.context.putImageData(imageData, 150, 150)
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002626230654.png)
