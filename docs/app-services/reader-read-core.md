---
title: "readerCore（阅读核心能力）"
upstream_id: "harmonyos-references/reader-read-core"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:51.678162"
---

# readerCore（阅读核心能力）

本模块为Reader Kit核心能力。提供阅读页面数据基础类、页面状态、内容分页信息、页面排版属性、组件控制器等能力。

起始版本： 5.0.4(16)

#### 导入模块

```
import { readerCore } from '@kit.ReaderKit';
```

#### PageDatabaseBean

页面数据基础类。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| nodeType | string | 否 | 否 | 节点类型，固定值为“ReaderCoreIdentity”，表示阅读器节点。 |
| dataId | string | 否 | 否 | 节点标识，根据资源索引、页面偏移量自动生成。 |

#### [h2]constructor

constructor(nodeType: string, nodeDataId: string)

页面数据构造函数。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| nodeType | string | 是 | 节点类型，固定值为“ReaderCoreIdentity”，表示阅读器节点。 |
| nodeDataId | string | 是 | 节点标识，根据子类[PageDataInfo](#pagedatainfo).resourceIndex、[PageDataInfo](#pagedatainfo).pageOffset字段自动生成。 |

#### PageState

页面状态。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PAGE_WAITING | 1 | 等待加载。 |
| PAGE_LOADING | 2 | 加载中。 |
| PAGE_ON_SHOW | 3 | 加载成功。 |
| OPEN_BOOK_FAIL | 4 | 加载失败。 |

#### PageDataInfo

内容分页信息，继承[PageDatabaseBean](#pagedatabasebean)。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| nodeType | string | 否 | 否 | 节点类型，固定值为"ReaderCoreIdentity"，表示阅读器节点。 |
| dataId | string | 否 | 否 | 节点标识，根据“resourceIndex”、“pageOffset”字段自动生成。 |
| pageHeaderContent | string | 否 | 否 | 页眉文本。（预留字段，暂不支持。） |
| pageFooterContent | string | 否 | 否 | 页脚文本。（预留字段，暂不支持。） |
| startDomPos | string | 否 | 否 | 当前页的起始位置信息。 |
| endDomPos | string | 否 | 否 | 当前页的结束位置信息。 |
| state | [PageState](#pagestate) | 否 | 否 | 页面状态。 |
| resourceIndex | number | 否 | 否 | 书脊内容节点索引[SpineItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-book-parser#spineitem).index。 |
| pageOffset | number | 否 | 否 | 页数偏移值，从0开始取值。 例如：一个内容资源文件有50页，这个值的取值范围则为0-49。 |

#### [h2]constructor

constructor(nodeType: string, nodeId: string)

内容分页信息构造函数。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| nodeType | string | 是 | 节点类型，固定值为“ReaderCoreIdentity”。 |
| nodeId | string | 是 | 节点标识，根据子类[PageDataInfo](#pagedatainfo).resourceIndex、[PageDataInfo](#pagedatainfo).pageOffset字段自动生成。 |

#### ReaderSetting

页面排版属性。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| fontName | string | 否 | 否 | 字体名称。 |
| fontSize | number | 否 | 否 | 字号大小，单位：px。 |
| fontWeight | number | 否 | 否 | 文本的字体粗细，依赖所引用的字体文件是否支持设置文本的粗细。（预留字段，暂不支持。） |
| fontColor | string | 否 | 否 | 字体颜色。例如'#ffffff'、'rgba(248, 249, 250, 1)'。 字体颜色值的限制如下： - 对于16进制颜色值，只支持6位颜色值，不支持透明度。 - 对于rgba颜色值，透明度的值只支持1。 |
| fontPath | string | 否 | 否 | 字体文件本地路径。 支持两种存放路径： - 工程目录resources/rawfile文件夹。适合预置字体场景。 - [应用沙箱目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory)。适合在线下载字体场景。 |
| lineHeight | number | 否 | 否 | 行高系数。一行文本实际显示高度为fontSize * lineHeight。 |
| nightMode | boolean | 否 | 否 | 是否深色模式，需要开发者在监听到深、浅模式变化时手动设置。 用于仿真翻页时背面主题色的绘制。 - true：深色模式。 - false：浅色模式，默认是false。 |
| themeColor | string | 否 | 否 | 主题背景色。示例：'#ffffff'、'rgba(248, 249, 250, 1)'。 如果有设置背景图片的情况下，通常用于仿真翻页时背面主题色的绘制。 如果没有设置背景图片，还会用于渲染阅读页的背景色。 背景色的值限制如下： - 对于16进制颜色值，只支持6位颜色值，不支持透明度。 - 对于rgba颜色值，透明度的值只支持1。 |
| themeBgImg | string | 否 | 否 | 主题背景图路径，用于阅读页背景的绘制。 支持两种存放路径： - 工程目录resources/rawfile文件夹。适合预置背景图场景。 - [应用沙箱目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory)。适合在线下载背景图场景。 |
| flipMode | string | 否 | 否 | 翻页方式。 - '0'：仿真。 - '1'：横滑。 默认值为0。 |
| scaledDensity | number | 否 | 否 | 系统显示文本的缩放因子，该值通过[display.getDefaultDisplaySync().scaledDensity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displaygetdefaultdisplaysync9)字段获取。 在智慧多窗等场景，文本缩放因子发生变化时，开发者需要调用ReaderComponentController组件控制器的[setPageConfig](#setpageconfig)接口更新该属性。 |
| viewPortWidth | number | 否 | 否 | 排版视口宽度，单位：px。 |
| viewPortHeight | number | 否 | 否 | 排版视口高度，单位：px。 |

#### ReaderComponentController

[ReadPageComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-api-readpagecomponent#readpagecomponent)组件控制器，需要配合ReadPageComponent组件一起使用。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

#### [h2]init

init(context: common.UIAbilityContext): Promise<void>

初始化ReaderComponentController，使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) 在集成ReaderComponentController时，初始化接口一定要优先于controller的其他接口之前执行。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | common.[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext) | 是 | 当前应用上下文。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败) | Parameter error. |
| [1016910004](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016910004) | Invalid caller. |

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.init();
  }

  private async init(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context);
    hilog.info(0x0000, 'testTag', `init succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]registerBookParser

registerBookParser(bookParserHandler: bookParser.BookParserHandler): void

注册书籍解析器。

![](./img/note_3.0-zh-cn.png) registerBookParser接口需要在[startPlay](#startplay)接口之前调用。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bookParserHandler | bookParser.[BookParserHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-book-parser#bookparserhandler) | 是 | 书籍解析器。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败) | Parameter error. |
| [1016900002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900002) | Read Page Component is not initialized. |
| [1016900003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900003) | Invalid request. |
| [1016900999](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900999) | Other error. |

示例：

```
import { bookParser, readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.registerBookParser();
  }

  private async registerBookParser(){
    // 通过提前导入到应用沙箱目录中的书籍文件，初始化书籍解析器
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let filePath: string = `${context.filesDir}/abc.epub`;
    let bookParserHandler: bookParser.BookParserHandler = await bookParser.getDefaultHandler(filePath);
    await this.readerComponentController.init(context);
    this.readerComponentController.registerBookParser(bookParserHandler);
    hilog.info(0x0000, 'testTag', `registerBookParser succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]setPageConfig

setPageConfig(pageConfig: ReaderSetting): void

设置或者修改页面排版属性。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageConfig | [ReaderSetting](#readersetting) | 是 | 页面排版属性。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败) | Parameter error. |
| [1016900002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900002) | Read Page Component is not initialized. |
| [1016900003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900003) | Invalid request. |
| [1016900999](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900999) | Other error. |

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { display } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.setPageConfig();
  }

  private async setPageConfig(){
    let readerSetting: readerCore.ReaderSetting = {
      fontName: '系统字体',
      fontPath: '',
      fontSize: 18,
      fontColor: '#000000',
      fontWeight: 400,
      lineHeight: 1.9,
      nightMode: false,
      themeColor: 'rgba(248, 249, 250, 1)',
      themeBgImg: '',
      flipMode: '0',
      scaledDensity: display.getDefaultDisplaySync().scaledDensity > 0 ? display.getDefaultDisplaySync().scaledDensity :
        1,
      viewPortWidth: 1260, // 视口宽度，需要根据设备实际情况获取，否则会导致阅读界面异常
      viewPortHeight: 2720, // 视口高度，需要根据设备实际情况获取，否则会导致阅读界面异常
    };

    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context);
    this.readerComponentController.setPageConfig(readerSetting);
    hilog.info(0x0000, 'testTag', `setPageConfig succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]startPlay

startPlay(spineIndex: number, domPos: string): Promise<void>

以指定阅读进度打开书籍，使用Promise异步回调。

![](./img/note_3.0-zh-cn.png) startPlay接口需在[registerBookParser](#registerbookparser)事件成功触发后，才能调用。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| spineIndex | number | 是 | 内容资源索引[SpineItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-book-parser#spineitem).index。 |
| domPos | string | 是 | 用户上次阅读进度。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败) | Parameter error. |
| [1016900002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900002) | Read Page Component is not initialized. |
| [1016900003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900003) | Invalid request. |
| [1016900999](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900999) | Other error. |
| [1016910001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016910001) | Invalid spine item. |
| [1016910002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016910002) | Unexpected spine item resource data. |
| [1016910003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016910003) | Spine item resource data out of range. |

示例：

```
import { bookParser, readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.startPlay();
  }

  private async startPlay() {
    // 通过提前导入到应用沙箱目录中的书籍文件，初始化书籍解析器
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let filePath: string = `${context.filesDir}/abc.epub`;
    let bookParserHandler: bookParser.BookParserHandler = await bookParser.getDefaultHandler(filePath);
    let spineList: bookParser.SpineItem[] = bookParserHandler.getSpineList();
    let spineIndex: number = spineList[0].index;
    let domPos: string = '';

    await this.readerComponentController.init(context);
    this.readerComponentController.registerBookParser(bookParserHandler);
    // 调用startPlay接口初始化书籍内容显示
    this.readerComponentController.startPlay(spineIndex || 0, domPos);
    hilog.info(0x0000, 'testTag', `startPlay succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]flipPage

flipPage(isNext: boolean): void

触发[ReadPageComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-api-readpagecomponent#readpagecomponent)组件进行翻页。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isNext | boolean | 是 | 是否翻到下一页。 - true：往下一页翻页。 - false：往上一页翻页。 |

错误码：

| 错误码ID | 错误信息 |
| --- | --- |
| [401](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section401-参数检查失败) | Parameter error. |
| [1016900002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900002) | Read Page Component is not initialized. |
| [1016900003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900003) | Invalid request. |
| [1016900999](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-error-code#section1016900999) | Other error. |

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.flipPage();
  }

  private async flipPage(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context);
    // 翻下一页
    this.readerComponentController.flipPage(true);
    hilog.info(0x0000, 'testTag', `flipPage succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]releaseBook

releaseBook(): void

释放书籍资源，在退出阅读器等释放资源场景时使用。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.releaseBook();
  }

  private async releaseBook(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context);
    // 释放加载书籍时的资源
    this.readerComponentController.releaseBook();
    hilog.info(0x0000, 'testTag', `releaseBook succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]on('pageShow')

on(type: 'pageShow', callback: Callback<PageDataInfo>): void

注册页面展示的通知服务，该通知在页面排版成功展示后触发。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为“pageShow”。 |
| callback | Callback | 是 | 回调函数，返回内容分页排版信息。 |

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.registerListener();
  }

  private async registerListener(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context)
    // 此处只演示方法调用，实际触发回调，需要配合startPlay接口使用
    this.readerComponentController.on('pageShow', (data: readerCore.PageDataInfo): void => {
      // 开发者可在此保存内容分布排版数据，利用data.resourceIndex及data.startDomPos数据调用startPlay接口继续阅读
      hilog.info(0x0000, 'testTag', 'pageshow: data is: ' + JSON.stringify(data));
    });
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]off('pageShow')

off(type: 'pageShow', callback?: Callback<PageDataInfo>): void

注销章节内容分页展示结果回调，可在页面销毁时调用。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为“pageShow”。 |
| callback | Callback | 否 | 回调函数，需要传[on('pageShow')](#onpageshow)注册时的回调函数，若不传则注销所有的回调函数。 |

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.unregisterListener();
  }

  private async unregisterListener(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();
    await readerComponentController.init(context);
    readerComponentController.off('pageShow');
    hilog.info(0x0000, 'testTag', `offPageShow succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]on('resourceRequest')

on(type: 'resourceRequest', callback: bookParser.CallbackRes<string, ArrayBuffer>): void

注册资源请求回调，如果设置了自定义背景，字体时，排版引擎会通过此接口获取对应的资源ArrayBuffer。

![](./img/note_3.0-zh-cn.png) 注册多个资源请求回调时，只会生效最后一个。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为“resourceRequest”。 |
| callback | bookParser.[CallbackRes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-book-parser#callbackres) | 是 | 回调函数，string：请求资源路径。ArrayBuffer：请求资源对应的二进制数据。 |

示例：

```
import { bookParser, readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();
  // 字体文件以实际文件名及路径为准
  private selectFontPath = 'fonts/SourceHanSerifCN-VF.ttf';

  aboutToAppear(): void {
    this.registerListener();
  }

  private async registerListener(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context);
    // 此处只演示方法调用，实际触发回调，需要配合startPlay接口使用
    this.readerComponentController.on('resourceRequest', this.resourceRequest);
  }

  private resourceRequest: bookParser.CallbackRes<string,ArrayBuffer> = (fileName: string): ArrayBuffer => {
    if (this.isFont(fileName)) {
      let res = $rawfile(this.selectFontPath);
      let context = this.getUIContext().getHostContext();
      if (res && context) {
        // 获取资源路径下的字体数据
        let value: Uint8Array = context.resourceManager.getRawFileContentSync(this.selectFontPath);
        hilog.info(0x0000, 'testTag', 'resourceRequest : get success');
        return value.buffer as ArrayBuffer;
      }
    }
    return new ArrayBuffer(0);
  }

  private isFont(filePath: string): boolean {
    let options = [".ttf", ".woff2", ".otf"];
    let path = filePath.toLowerCase();
    let result = path.indexOf(options[0]) != -1 || path.indexOf(options[1]) != -1 || path.indexOf(options[2]) != -1;
    hilog.info(0x0000, 'testTag', 'isFont = ' + result);
    return result;
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```

#### [h2]off('resourceRequest')

off(type: 'resourceRequest', callback?: bookParser.CallbackRes<string, ArrayBuffer>): void

注销资源请求回调接口，可在页面销毁时调用。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.4(16)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Reader.ReaderService.ReaderCore

起始版本： 5.0.4(16)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件回调类型，支持的事件为“resourceRequest”。 |
| callback | bookParser.[CallbackRes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/reader-book-parser#callbackres) | 否 | 回调函数，需要传[on('resourceRequest')](#onresourcerequest)注册时的回调函数，若不传则注销所有的回调函数。 |

示例：

```
import { readerCore, ReadPageComponent } from '@kit.ReaderKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Reader {
  private readerComponentController: readerCore.ReaderComponentController = new readerCore.ReaderComponentController();

  aboutToAppear(): void {
    this.unregisterListener();
  }

  private async unregisterListener(){
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    await this.readerComponentController.init(context);
    this.readerComponentController.off('resourceRequest');
    hilog.info(0x0000, 'testTag', `offResourceRequest succeeded`);
  }

  build() {
    Stack() {
      ReadPageComponent({
        controller: this.readerComponentController,
        readerCallback: (err: BusinessError, data: readerCore.ReaderComponentController) => {
          this.readerComponentController = data;
        }
      })
    }.width('100%').height('100%')
  }
}
```
