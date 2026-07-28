---
title: "OffscreenCanvasRenderingContext2D"
upstream_id: "harmonyos-references/ts-offscreencanvasrenderingcontext2d"
catalog: "harmonyos-references"
content_hash: "ec79f02a5fb3"
synced_at: "2026-07-28T16:46:36.680906"
---

# OffscreenCanvasRenderingContext2D

使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，绘制对象可以是形状、文本、图片等。离屏绘制是指将需要绘制的内容先绘制在缓冲区，然后将其转换成图片，一次性绘制到Canvas上。离屏绘制使用CPU进行绘制，绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- OffscreenCanvasRenderingContext2D无法在ServiceExtensionAbility中使用，ServiceExtensionAbility中建议使用[绘制模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-graphics-drawing)进行离屏绘制。
- [beginPath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#beginpath)、[moveTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#moveto)、[lineTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#lineto)、[closePath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#closepath)、[bezierCurveTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#beziercurveto)、[quadraticCurveTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#quadraticcurveto)、[arc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#arc)、[arcTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#arcto)、[ellipse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#ellipse)、[rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#rect)和[roundRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method#roundrect20)接口只能对OffscreenCanvasRenderingContext2D中的路径生效，无法对[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)和[Path2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-path2d)对象中设置的路径生效。
- 支持使用[画布绘制通用方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-method)和设置[画布绘制通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-common-property)。

#### constructor

constructor(width: number, height: number, settings?: RenderingContextSettings)

构造离屏Canvas画布对象，支持配置画布宽高和OffscreenCanvasRenderingContext2D对象的参数。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | 离屏画布的宽度，默认单位：vp 异常值NaN和Infinity按无效值处理。 |
| height | number | 是 | 离屏画布的高度，默认单位：vp 异常值NaN和Infinity按无效值处理。 |
| settings | [RenderingContextSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#renderingcontextsettings) | 否 | 用来配置OffscreenCanvasRenderingContext2D对象的参数，当需要开启抗锯齿等高级配置时传入此参数，见RenderingContextSettings接口描述。 异常值undefined按[RenderingContextSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#renderingcontextsettings)的默认值处理。 默认值：null |

#### constructor12+

constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit)

构造离屏Canvas画布对象，支持配置画布宽高、OffscreenCanvasRenderingContext2D对象的参数和单位模式。

卡片能力： 从API version 12开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | 离屏画布的宽度，默认单位：vp 异常值NaN和Infinity按无效值处理。 |
| height | number | 是 | 离屏画布的高度，默认单位：vp 异常值NaN和Infinity按无效值处理。 |
| settings | [RenderingContextSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#renderingcontextsettings) | 否 | 用来配置OffscreenCanvasRenderingContext2D对象的参数，当需要开启抗锯齿等高级配置时传入此参数，见RenderingContextSettings接口描述。 异常值undefined按[RenderingContextSettings](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#renderingcontextsettings)的默认值处理。 默认值：null |
| unit | [LengthMetricsUnit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-graphics#lengthmetricsunit12) | 否 | 用来配置OffscreenCanvasRenderingContext2D对象的单位模式，DEFAULT（默认vp单位，适合大多数场景）、PX（px像素单位，适合需要精确像素控制的场景）。配置后无法动态更改，配置方法同[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d)。 异常值undefined、NaN和Infinity按默认值处理。 默认值：DEFAULT |

#### toDataURL

toDataURL(type?: string, quality?: any): string

生成一个包含图片展示的Data URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 否 | 用于指定图像格式。 可选参数为："image/png"，"image/jpeg"，"image/webp"。 异常值undefined或null按默认值处理。 默认值：image/png |
| quality | any | 否 | 在指定图片格式为image/jpeg或image/webp的情况下，可以从0到1的区间内选择图片的质量，取值范围[0, 1]。如果超出取值范围，将会使用默认值0.92。 异常值undefined、null、NaN和Infinity按默认值处理。 默认值：0.92 |

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 图像的URL地址。 |

示例：

```
// xxx.ets
@Entry
@Component
struct ToDataURL {
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
  private offCanvas: OffscreenCanvas = new OffscreenCanvas(100, 100);
  @State dataURL: string = "";

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Canvas(this.context)
        .width(100)
        .height(100)
        .onReady(() => {
          let offContext = this.offCanvas.getContext("2d", this.settings)
          offContext.fillRect(0, 0, 100, 100)
          this.dataURL = offContext.toDataURL()
        })
      Text(this.dataURL)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#ffff00')
  }
}
```
 ![](./img/zh-cn_image_0000002686088275.png)

#### transferToImageBitmap

transferToImageBitmap(): ImageBitmap

在离屏画布最近渲染的图像上创建一个ImageBitmap对象。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

返回值：

| 类型 | 说明 |
| --- | --- |
| [ImageBitmap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-imagebitmap) | 存储离屏画布上渲染的像素数据。 |

示例：

```
// xxx.ets
@Entry
@Component
struct PutImageData {
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
  private offCanvas: OffscreenCanvas = new OffscreenCanvas(600, 600);

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Canvas(this.context)
        .width('100%')
        .height('100%')
        .backgroundColor('rgb(213,213,213)')
        .onReady(() => {
          let offContext = this.offCanvas.getContext("2d", this.settings)
          let imageData = offContext.createImageData(100, 100)
          for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i + 0] = 112
            imageData.data[i + 1] = 112
            imageData.data[i + 2] = 112
            imageData.data[i + 3] = 255
          }
          offContext.putImageData(imageData, 10, 10)
          let image = this.offCanvas.transferToImageBitmap()
          this.context.transferFromImageBitmap(image)
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002685928445.png)
