---
title: "PdfView（PDF预览组件）"
upstream_id: "harmonyos-references/pdf-arkts-pdfview-component"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:47.976022"
---

# PdfView（PDF预览组件）

本模块提供PdfView组件，HarmonyOS应用通过集成该组件完成PDF文件的预览功能。

起始版本： 5.0.0(12)

#### 导入模块

```
import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit';
```

#### PdfView

该类是用来展示PDF文档预览的UI组件。

装饰器类型： @Component

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| controller | pdfViewManager.[PdfController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfviewmanage#pdfcontroller) | PdfView组件控制器。 |
| pageLayout | pdfService.[PageLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pagelayout) | 页面布局显示模式，默认值：LAYOUT_SINGLE。 |
| isContinuous | boolean | 是否连续预览，true：是，false：否。默认值：false。 |
| showScroll | boolean | 是否显示滚动条，true：显示，false：隐藏。默认值：false。 |
| pageFit | pdfService.[PageFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pagefit) | 页面适配模式，默认值：FIT_NONE。 |

#### [h2]build

build(): void

用于创建[PdfView](#pdfview)对象的构造函数。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

示例：

```
import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit'
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  private controller: pdfViewManager.PdfController = new pdfViewManager.PdfController();

  aboutToAppear(): void {
    let context = this.getUIContext().getHostContext() as Context;
    let dir: string = context.filesDir
    // 确保在工程目录src/main/resources/rawfile里存在input.pdf文档
    let filePath: string = dir + '/input.pdf';
    let res = fileIo.accessSync(filePath);
    if (!res) {
      let content: Uint8Array = context.resourceManager.getRawFileContentSync('rawfile/input.pdf');
      let fdSand =
        fileIo.openSync(filePath, fileIo.OpenMode.WRITE_ONLY | fileIo.OpenMode.CREATE | fileIo.OpenMode.TRUNC);
      fileIo.writeSync(fdSand.fd, content.buffer);
      fileIo.closeSync(fdSand.fd);
    }
    (async () => {
      // 该监听方法只能在文档加载前调用一次
      this.controller.registerPageCountChangedListener((pageCount: number) => {
        hilog.info(0x0000, 'registerPageCountChanged-', pageCount.toString());
      });
      let loadResult1: pdfService.ParseResult = await this.controller.loadDocument(filePath);
      // 注意：这里刚加载文档，请不要在这里立即设置PDF文档的预览方式
    })()
  }

  build() {
    Row() {
      PdfView({
        controller: this.controller,
        pageFit: pdfService.PageFit.FIT_WIDTH,
        showScroll: true
      })
        .id('pdfview_app_view')
        .layoutWeight(1);
    }
    .width('100%')
    .height('100%')
  }
}
```
