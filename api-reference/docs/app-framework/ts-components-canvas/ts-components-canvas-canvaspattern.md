---
title: "CanvasPattern"
upstream_id: "harmonyos-references/ts-components-canvas-canvaspattern"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:29.624519"
---

# CanvasPattern

一个Object对象，使用[createPattern](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-canvasrenderingcontext2d#createpattern)方法创建，通过指定图像和重复方式创建图片填充的模板。

![](./img/note_3.0-zh-cn.png) 从 API version 8 开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

#### 方法

#### [h2]setTransform

setTransform(transform?: Matrix2D): void

使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| transform | [Matrix2D](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-matrix2d) | 否 | 转换矩阵。 异常值undefined和null按无效值不做矩阵变换处理。 默认值：不做矩阵变换 |

#### 示例

通过setTransform对当前CanvasPattern进行矩阵变换。

![](./img/note_3.0-zh-cn.png) 此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable设置为true，详见resOptions中[copyCodeResource](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile#section754823013348)相关介绍。

```
// xxx.ets
@Entry
@Component
struct CanvasPatternPage {
  private settings: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);
  private matrix: Matrix2D = new Matrix2D();
  // "common/pattern.jpg"需要替换为开发者所需的图像资源文件
  private img: ImageBitmap = new ImageBitmap("common/pattern.jpg");
  private pattern: CanvasPattern | null = null;

  build() {
      Column() {
        Button("Click to set transform")
          .onClick(() => {
            this.matrix.scaleY = 1
            this.matrix.scaleX = 1
            this.matrix.translateX = 50
            this.matrix.translateY = 200
            if (this.pattern) {
              this.pattern.setTransform(this.matrix)
            }
            this.context.fillRect(0, 0, 480, 720)
          })
          .width("45%")
          .margin("5px")
        Canvas(this.context)
          .width('100%')
          .height('80%')
          .backgroundColor('#FFFFFF')
          .onReady(() => {
            this.pattern = this.context.createPattern(this.img, 'no-repeat')
            this.matrix.scaleY = 0.5
            this.matrix.scaleX = 0.5
            this.matrix.translateX = 50
            this.matrix.translateY = 50
            if (this.pattern) {
              this.context.fillStyle = this.pattern
              this.pattern.setTransform(this.matrix)
            }
            this.context.fillRect(0, 0, 480, 720)
          })
      }
      .width('100%')
      .height('100%')
  }
}
```
 ![](./img/zh-cn_image_0000002656350035.gif)
