---
displayed_sidebar: appDevSidebar
title: "批注"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pdf-pdfview-annotation
format: md
---


进入批注模式，目前支持高亮、下划线和删除线类型批注。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [enableAnnotation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfviewmanage#enableannotation)(annotationType: SupportedAnnotationType, color?: number): void | 在常用操作之间切换并添加批注。 |

## 示例代码

1. 先加载PDF文档。
2. 调用PdfView预览组件，渲染显示。
3. 调用enableAnnotation方法，进入批注模式。

```
import { pdfService, pdfViewManager, PdfView } from '@kit.PDFKit';

@Entry
@Component
struct PdfPage {
  private pdfController = new pdfViewManager.PdfController();
  private context = this.getUIContext().getHostContext() as Context;

  aboutToAppear(): void {
    // 确保在工程目录src/main/resources/resfile里有input.pdf文档
    let filePath = this.context.resourceDir + '/input.pdf';
    (async () => {
      let loadResult: pdfService.ParseResult = await this.pdfController.loadDocument(filePath);
      if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
        // 添加删除线批注
        this.pdfController.enableAnnotation(pdfViewManager.SupportedAnnotationType.STRIKETHROUGH, 0xAAEEEEEE);
      }
    })()
  }

  build() {
    Column() {
      // 加载PdfView组件进行预览
      PdfView({
        controller: this.pdfController,
        pageFit: pdfService.PageFit.FIT_WIDTH,
        showScroll: true
      })
        .id('pdfview_app_view')
        .layoutWeight(1);
    }
  }
}
```
