---
title: "如何生成带logo的二维码"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-image-23
---

1. 使用Canvas组件绘制二维码图片和logo图片。

   ```
   Canvas(this.context)
     .width(300)
     .height(300)
     .onReady(() => {
       this.createQRCode();
     })
   ```
2. 首先调用createBarcode接口生成码图pixelMap，再调用drawImage接口绘制码图pixelMap，最后再次调用drawImage接口绘制logo叠加到码图之上。

   ```
   let options: generateBarcode.CreateOptions = {
     scanType: scanCore.ScanType.QR_CODE,
     height: this.QRCodeWidth,
     width: this.QRCodeWidth
   };
   generateBarcode.createBarcode(content, options).then((pixelMap: image.PixelMap) => {
     this.pixelMap = pixelMap;
     this.context.drawImage(this.pixelMap, 0, 0, 300, 300, 0, 0, 300, 300);
     this.context.drawImage(this.img, 0, 0, 80, 80, 110, 110, 80, 80);
   }).catch((error: BusinessError) => {
     hilog.error(0x0001, '[generateBarcode]', 'promise error : %{public}s', JSON.stringify(error));
   })
   ```

示例代码中，image类型为PixelMap。在API version 18前，默认单位为px；在API version 18及以后，默认单位为vp。

API version 18之前的示例代码如下：

```
import { image } from '@kit.ImageKit';
import { generateBarcode, scanCore } from '@kit.ScanKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  @State pixelMap: image.PixelMap | undefined = undefined;
  private setting: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.setting);
  private img: ImageBitmap = new ImageBitmap('common/startIcon.png');
  private QRCodeWidth: number = 300;
  private QRCodeHeight: number = 300;

  createQRCode() {
    this.pixelMap = undefined;
    let content: string = 'helloWorld';
    let options: generateBarcode.CreateOptions = {
      scanType: scanCore.ScanType.QR_CODE,
      height: this.QRCodeHeight,
      width: this.QRCodeWidth
    };
    generateBarcode.createBarcode(content, options).then((pixelMap: image.PixelMap) => {
      this.pixelMap = pixelMap;
      this.context.drawImage(this.pixelMap, 0, 0, 300, 300, 0, 0, 300, 300);
      this.context.drawImage(this.img, 0, 0, 80, 80, 110, 110, 80, 80);
    }).catch((error: BusinessError) => {
      hilog.error(0x0001, '[generateBarcode]', 'promise error : %{public}s', JSON.stringify(error));
    })
  }

  build() {
    Column() {
      Canvas(this.context)
        .width(300)
        .height(300)
        .onReady(() => {
          this.createQRCode();
        })
    }
    .width('100%')
    .height('100%')
    .alignItems(HorizontalAlign.Start)
    .justifyContent(FlexAlign.Start)
  }
}
```

API version 18及以后的示例代码如下：

```
import { image } from '@kit.ImageKit';
import { generateBarcode, scanCore } from '@kit.ScanKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  @State pixelMap: image.PixelMap | undefined = undefined;
  private setting: RenderingContextSettings = new RenderingContextSettings(true);
  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.setting);
  private img: ImageBitmap = new ImageBitmap('common/startIcon.png');
  private QRCodeWidth: number = 300;
  private QRCodeHeight: number = 300;

  aboutToAppear(): void {
    this.QRCodeWidth = this.getUIContext().vp2px(this.QRCodeWidth);
    this.QRCodeHeight = this.getUIContext().vp2px(this.QRCodeHeight);
  }

  createQRCode() {
    this.pixelMap = undefined;
    let content: string = 'helloWorld';
    let options: generateBarcode.CreateOptions = {
      scanType: scanCore.ScanType.QR_CODE,
      height: this.QRCodeHeight,
      width: this.QRCodeWidth
    };
    generateBarcode.createBarcode(content, options).then((pixelMap: image.PixelMap) => {
      this.pixelMap = pixelMap;
      this.context.drawImage(this.pixelMap, 0, 0, 300, 300, 0, 0, 300, 300);
      this.context.drawImage(this.img, 0, 0, 80, 80, 110, 110, 80, 80);
    }).catch((error: BusinessError) => {
      hilog.error(0x0001, '[generateBarcode]', 'promise error : %{public}s', JSON.stringify(error));
    })
  }

  build() {
    Column() {
      Canvas(this.context)
        .width(300)
        .height(300)
        .onReady(() => {
          this.createQRCode();
        })
    }
    .width('100%')
    .height('100%')
    .alignItems(HorizontalAlign.Start)
    .justifyContent(FlexAlign.Start)
  }
}
```
