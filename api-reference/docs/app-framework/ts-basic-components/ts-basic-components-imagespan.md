---
title: "ImageSpan"
upstream_id: "harmonyos-references/ts-basic-components-imagespan"
catalog: "harmonyos-references"
content_hash: "26f9c0c08b6f"
synced_at: "2026-07-28T16:44:56.347070"
---

# ImageSpan

ImageSpan是[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)、[ContainerSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-containerspan)组件的子组件，用于在文本中显示行内图片，支持设置图片对齐方式、缩放类型、加载占位图和颜色滤镜等，适用于需要在文本段落中嵌入图片实现图文混排的场景。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

#### 子组件

无

#### 接口

ImageSpan(value: ResourceStr | PixelMap)

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 是 | 图片的数据源，支持本地图片和网络图片。 使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。 当使用相对路径引用图片资源时，例如ImageSpan("common/test.jpg")，不支持跨包/跨模块调用该ImageSpan组件，建议使用$r方式来管理需全局使用的图片资源。 - 支持的图片格式包括png、jpg、bmp、svg、gif、webp和heif。 - 支持Base64字符串。格式data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data]，其中[base64 data]为Base64字符串数据。 - 支持file://data/storage路径前缀的字符串，用于读取本应用安装目录下file文件夹下的图片资源。需要保证应用安装目录路径下的文件有可读权限。 |

#### 属性

属性继承自[BaseSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span#basespan)，通用属性方法支持[尺寸设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size)、[背景设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background)、[边框设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-border)。

#### [h2]verticalAlign

verticalAlign(value: ImageSpanAlignment)

设置图片基于行高的对齐方式。适用于图文混排场景中调整图片与文字的垂直对齐效果。未通过该接口设置时，默认对齐方式为ImageSpanAlignment.BOTTOM。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ImageSpanAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#imagespanalignment10) | 是 | 图片基于行高的对齐方式。 |

#### [h2]objectFit

objectFit(value: ImageFit)

设置图片的缩放类型。适用于控制图片在容器中显示方式的场景。未通过该接口设置时，默认缩放类型为ImageFit.Cover。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [ImageFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#imagefit) | 是 | 图片的缩放类型。 |

#### [h2]alt12+

alt(value: PixelMap)

设置图片加载过程中显示的占位图。未通过该接口设置时，默认为null，不显示占位图。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 是 | 设置图片加载过程中显示的占位图，支持[PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap)类型。 |

#### [h2]colorFilter14+

colorFilter(filter: ColorFilter | DrawingColorFilter)

为图像设置颜色滤镜效果。

元服务API： 从API version 14开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | [ColorFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#colorfilter9) | [DrawingColorFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#drawingcolorfilter12) | 是 | 1. 给图像设置颜色滤镜效果，入参为一个4x5的RGBA转换矩阵。 矩阵第一行用于计算R'（新的红色分量），第二行用于计算G'（新的绿色分量），第三行用于计算B'（新的蓝色分量），第四行用于计算A'（新的透明度分量），4行分别代表不同的RGBA的分量。 当矩阵对角线值为1，其余值为0时，保持图片原有色彩。 **计算规则：** 如果输入的滤镜矩阵为： ![](./img/zh-cn_image_0000002655848706.png) 像素点为[R, G, B, A]，色值的范围[0, 255] 则过滤后的颜色为 [R’, G’, B’, A’] ![](./img/zh-cn_image_0000002686088137.png) 2. 支持@ohos.graphics.drawing的ColorFilter类型作为入参。 **说明：** 该接口中的DrawingColorFilter类型支持在元服务中使用。其中，svg类型的图源只对stroke属性生效。 |

#### [h2]supportSvg222+

supportSvg2(enable: Optional<boolean>)

开启或关闭[SVG标签解析能力增强功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities)，开启后支持SVG解析新能力，适用于需要使用SVG新特性的场景；关闭则保持原有SVG解析能力，适用于兼容旧版本SVG图片显示的场景。未通过该接口设置时，默认保持原有SVG解析能力。

ImageSpan组件创建后，不支持动态修改该属性的值。

元服务API： 从API version 22开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | Optional | 是 | 控制是否开启[SVG标签解析能力增强功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities)。 true：支持SVG解析新能力；false：保持原有SVG解析能力。 |

#### 事件

通用事件仅支持[点击控制事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-click)。还支持以下事件：

#### [h2]onComplete12+

onComplete(callback: ImageCompleteCallback)

图片数据加载成功和解码成功时均触发该回调，返回成功加载的图片尺寸。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [ImageCompleteCallback](#imagecompletecallback12) | 是 | 图片数据加载成功和解码成功时触发的回调。 |

#### [h2]onError12+

onError(callback: ImageErrorCallback)

图片加载异常时触发该回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [ImageErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#imageerrorcallback9) | 是 | 图片加载异常时触发的回调。 |

#### ImageCompleteCallback12+

type ImageCompleteCallback = (result: ImageLoadResult) => void

图片加载成功和解码成功时均触发的回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | [ImageLoadResult](#imageloadresult12对象说明) | 是 | 图片数据加载成功和解码成功触发回调时返回的对象。 |

#### ImageLoadResult12+对象说明

图片数据加载成功和解码成功触发回调时返回的对象。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| width | number | 否 | 否 | 图片的宽。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |
| height | number | 否 | 否 | 图片的高。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |
| componentWidth | number | 否 | 否 | 组件的宽。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |
| componentHeight | number | 否 | 否 | 组件的高。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) |
| loadingStatus | number | 否 | 否 | 图片加载成功的状态值。 **说明：** 返回的状态值为0时，表示图片数据加载成功。返回的状态值为1时，表示图片解码成功。 |
| contentWidth | number | 否 | 否 | 图片实际绘制的宽度。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) **说明：** 仅在loadingStatus返回1时有效。 |
| contentHeight | number | 否 | 否 | 图片实际绘制的高度。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) **说明：** 仅在loadingStatus返回1时有效。 |
| contentOffsetX | number | 否 | 否 | 实际绘制内容相对于组件自身的x轴偏移。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) **说明：** 仅在loadingStatus返回1时有效。 |
| contentOffsetY | number | 否 | 否 | 实际绘制内容相对于组件自身的y轴偏移。 单位：[px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units#基本像素单位) **说明：** 仅在loadingStatus返回1时有效。 |

#### 示例

#### [h2]示例1（设置对齐方式）

从API version 10开始，该示例通过[verticalAlign](#verticalalign)、[objectFit](#objectfit)属性展示了ImageSpan组件的对齐方式以及缩放效果。

```
// xxx.ets
@Entry
@Component
struct SpanExample {
  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      Text() {
        Span('This is the Span and ImageSpan component').fontSize(25).textCase(TextCase.Normal)
          .decoration({ type: TextDecorationType.None, color: Color.Pink })
      }.width('100%').textAlign(TextAlign.Center)

      Text() {
        // $r('app.media.app_icon')需要替换为实际的图像资源文件。
        ImageSpan($r('app.media.app_icon'))
          .width('200px')
          .height('200px')
          .objectFit(ImageFit.Fill)
          .verticalAlign(ImageSpanAlignment.CENTER)
        Span('I am LineThrough-span')
          .decoration({ type: TextDecorationType.LineThrough, color: Color.Red }).fontSize(25)
        ImageSpan($r('app.media.app_icon'))
          .width('50px')
          .height('50px')
          .verticalAlign(ImageSpanAlignment.TOP)
        Span('I am Underline-span')
          .decoration({ type: TextDecorationType.Underline, color: Color.Red }).fontSize(25)
        ImageSpan($r('app.media.app_icon'))
          .size({ width: '100px', height: '100px' })
          .verticalAlign(ImageSpanAlignment.BASELINE)
        Span('I am Underline-span')
          .decoration({ type: TextDecorationType.Underline, color: Color.Red }).fontSize(25)
        ImageSpan($r('app.media.app_icon'))
          .width('70px')
          .height('70px')
          .verticalAlign(ImageSpanAlignment.BOTTOM)
        Span('I am Underline-span')
          .decoration({ type: TextDecorationType.Underline, color: Color.Red }).fontSize(50)
      }
      .width('100%')
      .textIndent(50)
    }.width('100%').height('100%').padding({ left: 0, right: 0, top: 0 })
  }
}
```
 ![](./img/zh-cn_image_0000002685928305.png)

#### [h2]示例2（设置背景样式）

从API version 11开始，该示例通过[textBackgroundStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span#textbackgroundstyle11)属性展示了文本设置背景样式的效果。

```
// xxx.ets
@Component
@Entry
struct Index {
  build() {
    Row() {
      Column() {
        Text() {
          // $r('app.media.sky')需要替换为实际的图像资源文件。
          ImageSpan($r('app.media.sky'))
            .width('60vp')
            .height('60vp')
            .verticalAlign(ImageSpanAlignment.CENTER)
            .borderRadius(20)
            .textBackgroundStyle({ color: '#7F007DFF', radius: '5vp' })
        }
      }.width('100%')
    }.height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002656008628.png)

#### [h2]示例3（为图片添加事件）

从API version 12开始，该示例通过[onComplete](#oncomplete12)、[onError](#onerror12)为图片添加加载成功和加载异常的事件。

```
// xxx.ets
@Entry
@Component
struct Index {
  // $r('app.media.app_icon')需要替换为实际的图像资源文件。
  @State src: ResourceStr = $r('app.media.app_icon');

  build() {
    Column() {
      Text() {
        ImageSpan(this.src)
          .width(100).height(100)
          .onError((err) => {
            console.error(`Failed to load image. Code: ${err.error?.code}, message: ${err.message}`);
          })
          .onComplete((event) => {
            console.info('onComplete: ' + event.loadingStatus);
          })
      }
    }.width('100%').height('100%')
  }
}
```

#### [h2]示例4（设置颜色滤镜）

从API version 14开始，该示例通过[colorFilter](#colorfilter14)属性展示了给ImageSpan图像设置颜色滤镜的效果。

```
// xxx.ets
import { drawing } from '@kit.ArkGraphics2D';

@Entry
@Component
struct SpanExample {
  private colorFilterMatrix: number[] = [0.239, 0, 0, 0, 0, 0, 0.616, 0, 0, 0, 0, 0, 0.706, 0, 0, 0, 0, 0, 1, 0];
  @State drawingColorFilterFirst: ColorFilter | undefined = new ColorFilter(this.colorFilterMatrix);

  build() {
    Row() {
      Column({ space: 10 }) {
        //创建ColorFilter对象的方式为图片设置颜色滤镜
        Text() {
          // $r('app.media.sky')需要替换为实际的图像资源文件。
          ImageSpan($r('app.media.sky'))
            .width('60vp')
            .height('60vp')
            .colorFilter(this.drawingColorFilterFirst)
        }

        //通过drawing.ColorFilter的方式为图片设置颜色滤镜
        Text() {
          // $r('app.media.sky')需要替换为实际的图像资源文件。
          ImageSpan($r('app.media.sky'))
            .width('60vp')
            .height('60vp')
            .colorFilter(drawing.ColorFilter.createBlendModeColorFilter({
              alpha: 255,
              red: 112,
              green: 112,
              blue: 112
            }, drawing.BlendMode.SRC))
        }
      }.width('100%')
    }.height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002655848708.png)

#### [h2]示例5（设置加载占位图）

从API version 12开始，该示例通过[alt](#alt12)属性展示了ImageSpan设置加载网络图片时占位图的效果。

使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。

```
// xxx.ets
import { http } from '@kit.NetworkKit';
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct SpanExample {
  @State imageAlt: PixelMap | undefined = undefined;

  httpRequest() {
    // 直接加载网络地址，请填写一个具体的网络图片地址
    http.createHttp().request('https://www.example.com/xxx.png', (error: BusinessError, data: http.HttpResponse) => {
      if (error) {
        console.error(`http request failed with. Code: ${error.code}, message: ${error.message}`);
      } else {
        console.info('http request success');
        let imageData: ArrayBuffer = data.result as ArrayBuffer;
        let imageSource: image.ImageSource = image.createImageSource(imageData);

        class ImageSize {
          height: number = 100;
          width: number = 100;
        }

        let option: Record<string, number | boolean | ImageSize> = {
          'alphaType': 0, // 透明度
          'editable': false, // 是否可编辑
          'pixelFormat': 3, // 像素格式
          'scaleMode': 1, // 缩略值
          'size': { height: 100, width: 100 }
        };
        // 通过ImageSource创建PixelMap
        imageSource.createPixelMap(option).then((pixelMap: PixelMap) => {
          console.info('image createPixelMap success');
          this.imageAlt = pixelMap;
          imageSource.release();
        }).catch(() => {
          imageSource.release();
        })
      }
    })
  }

  build() {
    Column() {
      Button('获取网络图片')
        .onClick(() => {
          this.httpRequest();
        })

      Text() {
        // 直接加载网络地址，请填写一个具体的网络图片地址
        ImageSpan('https://www.example.com/xxx.png')
          .alt(this.imageAlt)
          .width(300)
          .height(300)
      }

    }.width('100%').height(250).padding({ left: 35, right: 35, top: 35 })
  }
}
```
 ![](./img/zh-cn_image_0000002686088139.gif)

#### [h2]示例6（使用supportSvg2属性时，SVG图片的显示效果）

从API version 22开始，该示例通过设置[supportSvg2](#supportsvg222)属性，使[SVG标签解析能力增强功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities)的[SVG易用性提升](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-image-svg2-capabilities#svg易用性提升)能力生效。

```
import { drawing } from '@kit.ArkGraphics2D';
@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('属性字符串不支持svg2')
        // $r('app.media.ice')需要替换为实际的图像资源文件。
        Text() {
          ImageSpan($r('app.media.ice'))
            .width(50)
            .height(50)
            .colorFilter(drawing.ColorFilter.createBlendModeColorFilter(
              drawing.Tool.makeColorFromResourceColor(Color.Blue), drawing.BlendMode.SRC_IN))
        }
        Text('属性字符串支持svg2')
        // $r('app.media.ice')需要替换为实际的图像资源文件。
        Text() {
          ImageSpan($r('app.media.ice'))
            .width(50)
            .height(50)
            .supportSvg2(true)
            .colorFilter(drawing.ColorFilter.createBlendModeColorFilter(
              drawing.Tool.makeColorFromResourceColor(Color.Blue), drawing.BlendMode.SRC_IN))
        }
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002685928307.png)
