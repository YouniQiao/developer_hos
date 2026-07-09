---
title: "pdfViewManager（PDF预览）"
upstream_id: "harmonyos-references/pdf-arkts-pdfviewmanage"
catalog: "harmonyos-references"
content_hash: "347e92d401ba"
synced_at: "2026-07-09T01:01:36.805996"
---

# pdfViewManager（PDF预览）

本模块为应用提供统一的PDF预览能力。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

#### 导入模块

```
import { pdfViewManager } from '@kit.PDFKit';
```

#### PdfController

PDF文档控制器类。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

#### [h2]constructor

constructor()

构造函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
```

#### [h2]setViewOffset

setViewOffset(offsetX: number, offsetY: number, refreshView: boolean): void

设置可视区域X和Y坐标的偏移。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offsetX | number | 是 | X坐标偏移，范围0 ~ 1，含义是0% ~ 100%的偏移如果总宽度是1000px，要偏移X轴500px，值是0.5。 |
| offsetY | number | 是 | Y坐标偏移，范围0 ~ 1，含义是0% ~ 100%的偏移，如果总高度是1000px，要偏移Y轴500px，值是0.5。 |
| refreshView | boolean | 是 | 是否刷新可视区域，true：是（页面滚动时，页面清晰），false：否（页面滚动时，页面模糊）。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setViewOffset(0.5, 0.5, true);
}
```

#### [h2]getPagePixelMap

getPagePixelMap(pageIndex: number, isSync?: boolean): Promise<image.PixelMap>

获取对应PDF页面的缩略图，使用Promise异步回调。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 页面索引，0为起始页。 |
| isSync | boolean | 否 | 是否同步获取PDF页面的缩略图，true：是，false：否，默认值：false。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回image.PixelMap类型。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let image = await pdfController.getPagePixelMap(0, true);
}
```

#### [h2]registerScrollListener

registerScrollListener(listener: Callback<ScrollParam>): void

注册滚动监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面滚动回调函数监听，返回ScrollParam类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerScrollListener((scrollParam: pdfViewManager.ScrollParam) => { });
```

#### [h2]enablePageDrag

enablePageDrag(verticalEnabled: boolean, horizontalEnabled: boolean): void

设置页面是否支持拖拽。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| verticalEnabled | boolean | 是 | 是否Y轴垂直拖动，true: 是，false: 否。 |
| horizontalEnabled | boolean | 是 | 是否X轴水平拖动，true: 是，false: 否。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.enablePageDrag(true, true);
}
```

#### [h2]loadDocument

loadDocument(path: string, password?: string, initPageIndex?: number, onProgress?: Callback<number>): Promise<pdfService.ParseResult>

加载文件并显示指定的页面，使用Promise异步回调。由于loadDocument不支持重复调用，因此在二次调用之前，必须先通过releaseDocument释放当前已加载的文档，以确保资源正确释放并避免潜在的冲突或异常。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 文档路径。 |
| password | string | 否 | 密码，长度不超过512字节，仅支持ASCII字符（127以内）。默认值：空字符串 |
| initPageIndex | number | 否 | 要打开的文档初始化页面索引，0为初始页。默认值：0 |
| onProgress | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 否 | 加载文档进度回调函数，返回number类型数据，传此参数返回文档加载进度，不传不返回文档加载进度。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回ParseResult类型数据。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let tempFilePath = dir + '/test.pdf';
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(tempFilePath);
```

#### [h2]releaseDocument

releaseDocument(): void

释放已加载的文件

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let tempFilePath = dir + '/test.pdf';
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(tempFilePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.releaseDocument();
}
```

#### [h2]setHighlightRects

setHighlightRects(rectArray: Array<PageRects>, color?: number): void

在UI层，以PDF页面左下角(0,0)为原点，以PDF点为单位，向上延展，高亮显示对应的矩形区域内容。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rectArray | Array | 是 | 高亮块在页面的矩形区域。rect的left、right最小值为0，最大值为PDF的宽度，top、bottom最小值为0，最大值为PDF的高度。 |
| color | number | 否 | 高亮颜色(ARGB)，取值范围0x00000000 ~ 0xFFFFFFFF，默认值：0x00000000。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit'

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  const highlightArray = new Array<pdfViewManager.PageRects>();
  const rectArray = new Array<pdfService.PdfRect>();
  const rect1: pdfService.PdfRect = { left: 20, top: 0, right: 120, bottom: 300 };
  rectArray.push(rect1);
  highlightArray.push(new pdfViewManager.PageRects(0, rectArray));
  pdfController.setHighlightRects(highlightArray, 0xAA666666);
}
```

#### [h2]setHighlightText

setHighlightText(pageIndex: number, textArray: string[], color: number): void

高亮选中文本，执行中的[searchKey](#searchkey)会中断。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 页面索引，0为起始页。 |
| textArray | string[] | 是 | 选中的文本。 |
| color | number | 是 | 高亮颜色(ARGB)，取值范围0x00000000 ~ 0xFFFFFFFF。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setHighlightText(1, ['1111', 'aaaa'], 0x66666666);
}
```

#### [h2]setPageZoom

setPageZoom(zoom: number): void

设置视图的缩放比例。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| zoom | number | 是 | 缩放比例 [0.1 ~ 10]。(大于10的时候取10，小于0.1的时候取0.1) |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setPageZoom(2);
}
```

#### [h2]getPageZoom

getPageZoom(): number

获取视图的缩放比例。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 获取视图的缩放比例 [0.1 ~ 10]。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageZoom = pdfController.getPageZoom();
}
```

#### [h2]setMaxZoom

setMaxZoom(maxZoom: number): boolean;

设置视图的最大缩放比例。

![](./img/note_3.0-zh-cn.png) 页面适配(PageFit)的优先级高于缩放比例(Zoom)，当同时执行了缩放比例设置与页面适配设置时，优先遵循设置的页面适配方式。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.1.0(23)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maxZoom | number | 是 | 最大缩放比例[0.1 ~ 10](精度支持到小数点后第2位)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 是否设置成功，true：是，false：否。 当传入的maxZoom小于当前的最小缩放比例、超出[0.1 ~ 10]的范围、输入值为空时，均会返回false。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';
import { common } from '@kit.AbilityKit';
@Entry
@Component
struct PdfPage {
  private pdfController: pdfViewManager.PdfController = new pdfViewManager.PdfController();
  async aboutToAppear() {
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let dir = context.filesDir;
    let filePath = dir + `/input.pdf`;
    let loadResult: pdfService.ParseResult = await this.pdfController.loadDocument(filePath);
    if (loadResult !== undefined && pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
      this.pdfController.setMaxZoom(10);
    }
  }
  build() {
    Column() {
      // 组件
    }
  }
}
```

#### [h2]getMaxZoom

getMaxZoom(): number;

获取视图的最大缩放比例。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.1.0(23)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 获取的视图最大缩放比例[0.1 ~ 10](精度支持到小数点后第2位)。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';
import { common } from '@kit.AbilityKit';
@Entry
@Component
struct PdfPage {
  private pdfController: pdfViewManager.PdfController = new pdfViewManager.PdfController();
  async aboutToAppear() {
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let dir = context.filesDir;
    let filePath = dir + `/input.pdf`;
    let loadResult: pdfService.ParseResult = await this.pdfController.loadDocument(filePath);
    if (loadResult !== undefined && pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
      this.pdfController.getMaxZoom();
    }
  }
  build() {
    Column() {
      // 组件
    }
  }
}
```

#### [h2]setMinZoom

setMinZoom(minZoom: number): boolean;

设置视图的最小缩放比例。

![](./img/note_3.0-zh-cn.png) 页面适配(PageFit)的优先级高于缩放比例(Zoom)，当同时执行了缩放比例设置与页面适配设置时，优先遵循设置的页面适配方式。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.1.0(23)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| minZoom | number | 是 | 最小缩放比例[0.1 ~ 10]（精度支持到小数点后第2位）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 是否设置成功，true：是，false：否。 当传入的minZoom大于当前的最大缩放比例、超出[0.1 ~ 10]的范围、输入值为空时，均会返回false。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';
import { common } from '@kit.AbilityKit';
@Entry
@Component
struct PdfPage {
  private pdfController: pdfViewManager.PdfController = new pdfViewManager.PdfController();
  async aboutToAppear() {
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let dir = context.filesDir;
    let filePath = dir + `/input.pdf`;
    let loadResult: pdfService.ParseResult = await this.pdfController.loadDocument(filePath);
    if (loadResult !== undefined && pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
      this.pdfController.setMinZoom(0.1);
    }
  }
  build() {
    Column() {
      // 组件
    }
  }
}
```

#### [h2]getMinZoom

getMinZoom(): number;

获取视图的最小缩放比例。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.1.0(23)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 获取的视图最小缩放比例[0.1 ~ 10](精度支持到小数点后第2位)。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';
import { common } from '@kit.AbilityKit';
@Entry
@Component
struct PdfPage {
  private pdfController: pdfViewManager.PdfController = new pdfViewManager.PdfController();
  async aboutToAppear() {
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let dir = context.filesDir;
    let filePath = dir + `/input.pdf`;
    let loadResult: pdfService.ParseResult = await this.pdfController.loadDocument(filePath);
    if (loadResult !== undefined && pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
      this.pdfController.getMinZoom();
    }
  }
  build() {
    Column() {
      // 组件
    }
  }
}
```

#### [h2]setPageLayout

setPageLayout(columnCount: pdfService.PageLayout): void

设置页面布局模式：单页面：1，双页面：2。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| columnCount | pdfService.[PageLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pagelayout) | 是 | 页面布局模式：单页面：1，双页面：2。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setPageLayout(pdfService.PageLayout.LAYOUT_SINGLE);
}
```

#### [h2]getPageLayout

getPageLayout(): pdfService.PageLayout

获取页面布局模式。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| pdfService.[PageLayout](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pagelayout) | 页面布局模式：单页面：1，双页面：2。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageLayout: pdfService.PageLayout = pdfController.getPageLayout();
}
```

#### [h2]setPageContinuous

setPageContinuous(isContinuous: boolean): void

设置页面滚动是否连续排列。仅支持垂直排列。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isContinuous | boolean | 是 | 滚动是否连续排列，true: 是，false: 否。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setPageContinuous(true);
}
```

#### [h2]isPageContinuous

isPageContinuous(): boolean

获取页面是否连续排列。仅支持垂直排列

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 是否连续排列，true: 是，false: 否。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageContinuous: boolean = pdfController.isPageContinuous();
}
```

#### [h2]setPageFit

setPageFit(pageFit: pdfService.PageFit): void

设置页面的适配模式。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageFit | pdfService.[PageFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pagefit) | 是 | 页面的适配模式。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setPageFit(pdfService.PageFit.FIT_NONE);
}
```

#### [h2]getPageFit

getPageFit(): pdfService.PageFit

获取页面的适配模式。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| pdfService.[PageFit](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pagefit) | 页面的适配模式。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageFitMode: pdfService.PageFit = pdfController.getPageFit();
}
```

#### [h2]setPageSpacing

setPageSpacing(horizontal: number, vertical?: number): void

设置页面之间的行间距和列间距。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| horizontal | number | 是 | 双页模式下左右页面之间的间距，大于等于0，单位为px。 |
| vertical | number | 否 | 连续滚动时上下页面的间距，大于等于0，单位为px，默认值：10。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setPageSpacing(20, 20);
}
```

#### [h2]getPageHorizontalSpacing

getPageHorizontalSpacing(): number

获取双页模式下左右页面之间的间距。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 左右页面之间的间距，单位为px。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let horSpacing = pdfController.getPageHorizontalSpacing();
}
```

#### [h2]getPageVerticalSpacing

getPageVerticalSpacing(): number

获取上下页之间的间距。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 上下页之间的间距，单位为px。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let verSpacing = pdfController.getPageVerticalSpacing();
}
```

#### [h2]getPageCount

getPageCount(): number

获取PDF的总页数。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 总页数，大于等于0。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageCount = pdfController.getPageCount();
}
```

#### [h2]getPageIndex

getPageIndex(): number

获取PDF当前页的索引。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 页面索引。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageIndex = pdfController.getPageIndex();
}
```

#### [h2]goToPage

goToPage(pageIndex: number): void

跳转到指定页。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 指定页索引，0为起始页，小于总页数。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.goToPage(1);
}
```

#### [h2]setPageRotation

setPageRotation(pageIndex: number, angle: pdfService.RotationAngle): void

设置指定页面在PdfView组件中显示的旋转角度。旋转角度为逆时针方向的固定值，可选值包括 0、90、180、270 度。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 指定页索引，0为起始页，小于总页数。 |
| angle | pdfService.[RotationAngle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#rotationangle) | 是 | 指定页旋转角度。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setPageRotation(1, pdfService.RotationAngle.ANGLE_90);
}
```

#### [h2]getPageRotation

getPageRotation(pageIndex: number): pdfService.RotationAngle

获取指定页面的旋转度数： 0、90、180、270度。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 指定页索引，0为起始页，小于总页数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| pdfService.[RotationAngle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#rotationangle) | 指定页面的旋转角度。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let pageIndex: pdfService.RotationAngle = pdfController.getPageRotation(1);
}
```

#### [h2]enableAnnotation

enableAnnotation(annotationType: SupportedAnnotationType, color?: number): void

在常用操作之间切换并添加批注。目前支持高亮、下划线和删除线。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| annotationType | [SupportedAnnotationType](#supportedannotationtype) | 是 | 支持的批注类型。 |
| color | number | 否 | 颜色(ARGB)，范围0x00000000 - 0xFFFFFFFF，默认值：0xFFFFFFFF。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.enableAnnotation(pdfViewManager.SupportedAnnotationType.STRIKETHROUGH, 0xAAEEEEEE);
}
```

#### [h2]addMarkupAnnotation

addMarkupAnnotation(annotationType: SupportedAnnotationType, selectedRects: Array<SelectedRects>, color: number): void

在PDF注释层，以PDFView视图左上角(0,0)为原点，以像素点为单位，向下延展，添加文本批注。文本批注添加成功后，通过[registerAnnotationSelectedListener](#registerannotationselectedlistener)回调来高亮显示文本批注。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| annotationType | [SupportedAnnotationType](#supportedannotationtype) | 是 | 批注类型。 |
| selectedRects | Array | 是 | 高亮显示的矩形区域。 |
| color | number | 是 | 颜色(ARGB)，范围0x00000000 - 0xFFFFFFFF。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let rectArray: Array<pdfService.PdfRect> = [{ left: 5, top: 5, right: 250, bottom: 250}];
  let selectedRects: Array<pdfViewManager.SelectedRects> = [new pdfViewManager.SelectedRects(0, rectArray, 0)];
  pdfController.addMarkupAnnotation(pdfViewManager.SupportedAnnotationType.UNDERLINE, selectedRects, 0xAA666666);
}
```

#### [h2]disableAnnotation

disableAnnotation(): void

禁止添加批注。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.disableAnnotation();
}
```

#### [h2]deleteSelectedAnnotation

deleteSelectedAnnotation(annotationIndex: number, pageIndex: number): void

删除选中的批注。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| annotationIndex | number | 是 | 批注索引，从0开始。 |
| pageIndex | number | 是 | 页面索引，从0开始。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  // 确保第一页存在一个批注
  pdfController.deleteSelectedAnnotation(0, 0);
}
```

#### [h2]updateMarkupAnnotation

updateMarkupAnnotation(annotationIndex: number, pageIndex: number, color: number): void

修改批注颜色。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| annotationIndex | number | 是 | 批注索引。 |
| pageIndex | number | 是 | 页面索引。 |
| color | number | 是 | 颜色（ARGB），范围0x00000000 - 0xFFFFFFFF。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  // 确保第一页存在一个批注
  pdfController.updateMarkupAnnotation(0, 0, 0xAA000000);
}
```

#### [h2]saveDocument

saveDocument(path: string, onProgress?: Callback<number>): Promise<number>

保存PDF文档，使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 由于文档不可同时读写，如果需要覆盖回原文档，请创建临时文档作为过渡。具体请参见下方示例代码。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 文档的沙箱路径。 |
| onProgress | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 否 | 保存文档回调函数进度，返回number类型数据，传此参数返回文档保存进度，不传不返回文档保存进度。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回number类型，1：成功， 0：失败。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';
import { fileIo as fs } from '@kit.CoreFileKit';

// 将测试文件上传至应用沙箱路径
let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let tempDir = context.tempDir;
// 确保该路径下的源文档有读写的权限
let filePath = dir + `/input.pdf`;
let tempFilePath = tempDir + `/temp${Math.random()}.pdf`;
fs.copyFileSync(filePath, tempFilePath);
let pdfController = new pdfViewManager.PdfController();
// 加载临时文件
let loadResult = await pdfController.loadDocument(tempFilePath, '');
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  // 保存文件将覆盖源文档
  let result = await pdfController.saveDocument(filePath);
}
pdfController.releaseDocument();
```

#### [h2]registerSelectedRectsChangedListener

registerSelectedRectsChangedListener(listener: Callback<Array<SelectedRects>>): void

选中文本拖拽窗口变化，导致选中区域高亮块也要同步变化。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback)> | 是 | 选中文本拖拽窗口变化回调函数监听，返回SelectedRects类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerSelectedRectsChangedListener((pageRects: Array<pdfViewManager.SelectedRects>) => {});
```

#### [h2]registerPageFitChangedListener

registerPageFitChangedListener(listener: Callback<pdfService.PageFit>): void

注册页面适配变化监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面适配变化回调函数监听，返回PageFit类型数据。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerPageFitChangedListener((pageFit: pdfService.PageFit) => {});
```

#### [h2]registerPageChangedListener

registerPageChangedListener(listener: Callback<number>): void

注册页面索引变化监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面索引变化回调函数监听，返回页面索引number类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerPageChangedListener((pageIndex: number) => {});
```

#### [h2]registerScaleChangedListener

registerScaleChangedListener(listener: Callback<number>): void

注册页面缩放变化监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面缩放回调函数监听，返回缩放值number类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerScaleChangedListener((scale: number) => {});
```

#### [h2]registerTextSelectedListener

registerTextSelectedListener(listener: Callback<TextSelectedParam>): void

注册文本选中监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面文本被选中回调函数监听，返回选中文本TextSelectedParam类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerTextSelectedListener((pageText: pdfViewManager.TextSelectedParam) => {});
```

#### [h2]registerAnnotationSelectedListener

registerAnnotationSelectedListener(listener: Callback<SelectedAnnotation>): void

注册页面批注选中监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面批注被选中回调函数监听，返回选中批注SelectedAnnotation类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerAnnotationSelectedListener((pdfAnnotation: pdfViewManager.SelectedAnnotation) => {});
```

#### [h2]registerImageSelectedListener

registerImageSelectedListener(listener: Callback<ImageSelectedParam>): void

注册图片选中监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 页面图片被选中回调函数监听，返回选中图片ImageSelectedParam类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerImageSelectedListener((image: pdfViewManager.ImageSelectedParam) => {});
```

#### [h2]registerActionClickListener

registerActionClickListener(listener: Callback<RedirectInfo>): void

注册Click动作的时候监听器，例如：拿到值是链接地址可以拉取浏览器跳转到相应的网页。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | Click动作回调函数监听，返回RedirectInfo类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerActionClickListener((redirectInfo: pdfViewManager.RedirectInfo) => {});
```

#### [h2]registerAnnotationChangedListener

registerAnnotationChangedListener(listener: Callback<AnnotationChangedParam>): void

注册批注变化监听器。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 批注变化时回调函数监听，返回AnnotationChangedParam类型数据。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerAnnotationChangedListener((annotationChange: pdfViewManager.AnnotationChangedParam) => {});
```

#### [h2]registerPageCountChangedListener

registerPageCountChangedListener(listener: Callback<number>): void

注册总页数变化的时候监听器，需要在loadDocument之前调用，否则无法捕获loadDocument期间的页数变化事件。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 总页数变化回调函数监听，返回number类型总页数。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let pdfController = new pdfViewManager.PdfController();
pdfController.registerPageCountChangedListener((pageCount: number) => {});
```

#### [h2]searchKey

searchKey(text: string, listener: Callback<number>): void

搜索文本并返回匹配的总数，执行搜索会清除之前通过[setHighlightText](#sethighlighttext)设置的文本高亮。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 搜索的文本。 |
| listener | [Callback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-base#callback) | 是 | 搜索文本回调函数监听，返回number类型的匹配总数。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.searchKey('a', (index: number) => {});
}
```

#### [h2]clearSearch

clearSearch(): void

清除搜索文本的高亮，等价于搜索空字符串 。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.clearSearch();
}
```

#### [h2]getSearchIndex

getSearchIndex(): number

获取当前命中搜索关键字匹配结果的索引，执行搜索接口后默认命中索引为0。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 匹配结果索引，大于等于0。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  let res = pdfController.getSearchIndex();
}
```

#### [h2]setSearchIndex

setSearchIndex(index: number): void

设置搜索匹配结果的索引，页面会跳转到索引对应搜索结果处。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | number | 是 | 搜索结果索引，从0开始。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setSearchIndex(1);
}
```

#### [h2]setDisplayDirection

setDisplayDirection(displayDirection: DisplayDirection): void

设置PDF非连续模式下文档的翻页方向。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayDirection | [DisplayDirection](#displaydirection) | 是 | 翻页的方向（默认竖直方向）。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';

let context = this.getUIContext().getHostContext() as Context;
let dir = context.filesDir;
let filePath = dir + `/input.pdf`;
let pdfController = new pdfViewManager.PdfController();
let loadResult: pdfService.ParseResult = await pdfController.loadDocument(filePath);
if (pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
  pdfController.setDisplayDirection(pdfViewManager.DisplayDirection.VERTICAL);
}
```

#### [h2]setNestedScroll

setNestedScroll(value: PdfNestedScrollOptions): void

设置嵌套滑动选项。可以设置上下左右四个方向，实现与父组件的滑动联动。

![](./img/note_3.0-zh-cn.png) 若PdfNestedScrollOptions中的PdfNestedScrollMode设置为SELF_FIRST，滑动到边缘后放手重新触发滑动才会滑动父组件。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.0.2(22)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [PdfNestedScrollOptions](#pdfnestedscrolloptions) | 是 | 可滚动组件滚动时的嵌套滑动选项，包括scrollUp、scrollDown、scrollLeft、scrollRight，默认值为[PdfNestedScrollMode](#pdfnestedscrollmode).SELF_ONLY。 |

示例：

```
import { pdfViewManager, pdfService } from '@kit.PDFKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct PdfPage {
  private pdfController: pdfViewManager.PdfController = new pdfViewManager.PdfController();

  async aboutToAppear() {
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let dir = context.filesDir;
    let filePath = dir + `/input.pdf`;

    let loadResult: pdfService.ParseResult = await this.pdfController.loadDocument(filePath);

    if (loadResult !== undefined && pdfService.ParseResult.PARSE_SUCCESS === loadResult) {
      this.pdfController.setNestedScroll({
        scrollUp: pdfViewManager.PdfNestedScrollMode.SELF_ONLY,
        scrollDown: pdfViewManager.PdfNestedScrollMode.SELF_ONLY,
        scrollLeft: pdfViewManager.PdfNestedScrollMode.SELF_ONLY,
        scrollRight: pdfViewManager.PdfNestedScrollMode.SELF_ONLY
      });
    }
  }

  build() {
    Column() {
      // 组件
    }
  }
}
```

#### RedirectInfo

PDF页面重定向信息类。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

#### [h2]属性

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| content | string | 否 | 否 | 重定向信息内容。 |
| actionType | [RedirectType](#redirecttype) | 否 | 否 | 重定向类型。 |

#### [h2]constructor

constructor(content: string, actionType: RedirectType)

用于创建PDF页面重定向信息类对象。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | string | 是 | 重定向信息内容。 |
| actionType | [RedirectType](#redirecttype) | 是 | 重定向类型。 |

示例：

```
import { pdfViewManager } from '@kit.PDFKit';

let redirectInfo = new pdfViewManager.RedirectInfo('https://www.test.com', pdfViewManager.RedirectType.URI);
```

#### SelectedAnnotation

PDF选择的批注信息。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| annotationIndex | number | 是 | 否 | 批注索引。 |
| pageIndex | number | 是 | 否 | 页码索引。 |
| annotationType | [SupportedAnnotationType](#supportedannotationtype) | 是 | 否 | 批注类型。 |
| color | number | 是 | 否 | 批注颜色(ARGB)，范围0x00000000 ~ 0xFFFFFFFF。 |
| rect | Array | 是 | 是 | 批注矩形区域。 |
| points | Array | 是 | 是 | 批注坐标。 |

#### PageRects

页面中矩形区域类。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

#### [h2]属性

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pageIndex | number | 否 | 否 | 页面索引。 |
| rectArray | Array | 否 | 否 | 数组PdfRect类型。 |

#### [h2]constructor

constructor(pageIndex: number, rectArray: Array<pdfService.PdfRect>)

用于创建页面中矩形区域类的对象。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 页面索引。 |
| rectArray | Array | 是 | 数组PdfRect类型。 |

#### SelectedRects

PDF页面中选定文本的矩形区域类，继承[PageRects](#pagerects)。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

#### [h2]属性

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| isRotated | number | 否 | 否 | 是否支持旋转，0：否，1：是。 |

#### [h2]constructor

constructor(pageIndex: number, rectArray: Array<pdfService.PdfRect>, isRotated: number)

用于创建PDF页面中选定文本的矩形区域类的对象。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | number | 是 | 页面索引。 |
| rectArray | Array | 是 | 数组PdfRect类型。 |
| isRotated | number | 是 | 是否支持旋转，0：否，1：是。 |

示例：

```
import { pdfService, pdfViewManager } from '@kit.PDFKit';

let rectArray: Array<pdfService.PdfRect> = new Array<pdfService.PdfRect>();
const rect1: pdfService.PdfRect = { left: 5, top: 5, right: 250, bottom: 250};
rectArray.push(rect1);
let selectedRects: pdfViewManager.SelectedRects = new pdfViewManager.SelectedRects(0, rectArray, 0);
```

#### ScrollParam

PDF页面[registerScrollListener](#registerscrolllistener)监听函数回调参数。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| offsetX | number | 否 | 否 | 滚动X坐标偏移量，值：0~1，表示0%~100%。 |
| offsetY | number | 否 | 否 | 滚动Y坐标偏移值，值：0~1，表示0%~100%。 |
| pdfWidth | number | 否 | 否 | PDF页面宽度，参数为缩放后的PDF总宽度，单位为px。 |
| pdfHeight | number | 否 | 否 | PDF页面高度，参数为缩放后的PDF总高度，单位为px。 |
| viewWidth | number | 否 | 否 | 控件的宽度，单位为px。 |
| viewHeight | number | 否 | 否 | 控件的高度，单位为px。 |

#### TextSelectedParam

PDF页面 registerTextSelectedListener 监听函数回调参数。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| text | string | 否 | 否 | 选中的文本内容。 |
| pdfRect | Array | 否 | 否 | 选中的文本在PDF页面的矩形区域。 |

#### ImageSelectedParam

PDF页面 registerImageSelectedListener 监听函数回调参数。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| imageType | pdfService.[ImageFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#imageformat) | 否 | 否 | 选中的图片类型。 |
| buffer | ArrayBuffer | 否 | 是 | buffer参数是图像内容。如果缓冲区为空，则取消选择。 |
| pdfRect | pdfService.[PdfRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfservice#pdfrect) | 否 | 是 | 选中的图片在PDF页面的矩形区域。 |
| pageIndex | number | 否 | 是 | 页码索引。 |

#### AnnotationChangedParam

PDF页面 registerAnnotationChangedListener 监听函数回调参数。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| color | number | 否 | 否 | 颜色(ARGB)，范围0x00000000 ~ 0xFFFFFFFF。 |
| annotationType | [SupportedAnnotationType](#supportedannotationtype) | 否 | 否 | 批注类型。 |
| pageIndexArray | Array | 否 | 否 | 批注在页面的索引列表。 |
| controlType | [AnnotationEditType](#annotationedittype) | 否 | 否 | 批注编辑类型，0：添加，1：修改，2：删除。 |

#### SupportedAnnotationType

PDF页面支持的批注类型。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| UNKNOWN | 0 | 未知类型。 |
| FREE_TEXT | 3 | 自由字体。 |
| LINE | 4 | 线。 |
| SQUARE | 5 | 方形，包括长方形。 |
| OVAL | 6 | 椭圆，包括圆。 |
| POLYGON | 7 | 多边形。 |
| HIGHLIGHT | 9 | 高亮。 |
| UNDERLINE | 10 | 下划线。 |
| STRIKETHROUGH | 12 | 删除线。 |

#### AnnotationEditType

PDF页面上支持的批注更改类型。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ADD | 0 | 添加。 |
| MODIFY | 1 | 修改。 |
| DELETE | 2 | 删除。 |

#### RedirectType

需要进行重定向的ActionType。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 5.0.0(12)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| URI | 6 | uri地址。 |
| LAUNCH | 4 | launch，本地文件路径。 |

#### DisplayDirection

非连续显示时的翻页方向。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.0.0(20)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| VERTICAL | 0 | 竖直方向翻页。 |
| HORIZONTAL | 1 | 水平方向翻页。 |

#### PdfNestedScrollOptions

可以设置上下左右四个方向的嵌套滑动规则。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.0.2(22)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| scrollUp | [PdfNestedScrollMode](#pdfnestedscrollmode) | 否 | 是 | 可滑动组件往上滑动时的嵌套滑动选项。 默认值：PdfNestedScrollMode.SELF_ONLY。 |
| scrollDown | [PdfNestedScrollMode](#pdfnestedscrollmode) | 否 | 是 | 可滑动组件往下滑动时的嵌套滑动选项。 默认值：PdfNestedScrollMode.SELF_ONLY。 |
| scrollLeft | [PdfNestedScrollMode](#pdfnestedscrollmode) | 否 | 是 | 可滑动组件往左滑动时的嵌套滑动选项。 默认值：PdfNestedScrollMode.SELF_ONLY。 |
| scrollRight | [PdfNestedScrollMode](#pdfnestedscrollmode) | 否 | 是 | 可滑动组件往右滑动时的嵌套滑动选项。 默认值：PdfNestedScrollMode.SELF_ONLY。 |

#### PdfNestedScrollMode

定义嵌套滑动组件中的嵌套模式。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.OfficeService.PDFService.Core

起始版本： 6.0.2(22)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SELF_ONLY | 0 | 只自身滑动，不与父组件联动。 |
| SELF_FIRST | 1 | 自身先滑动，自身滑动到边缘以后父组件滑动。如果父组件有边缘效果，在滑动到父组件边缘后，触发父组件边缘效果，否则触发子组件的边缘效果。 |
