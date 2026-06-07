---
title: "基于标准化数据结构的控件 (ArkTS)"
original_url: /docs/dev/app-dev/application-framework/arkdata/uniform-data-definition/components-based-on-uniform-data-structure
format: md
---


## 场景介绍

我们提供了部分标准化数据结构的预置卡片，当需要展示标准化数据结构数据时，可以直接引用提供的预置卡片，快捷地展示数据。

## 内容卡片控件

在需要展示内容（标题、描述、图片、应用信息）并在点击后跳转至对应来源时，可以使用内容卡片快速的展示信息。开发者只需要调用[ContentFormCard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-udmfcomponents#contentformcard)接口，传入[ContentForm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-uniformdatastruct#contentform14)数据、卡片宽高、点击事件回调函数即可获得良好的展示效果。

从API version 20开始，支持使用[内容卡片控件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-udmfcomponents)。

### 接口说明

以下为内容卡片接口介绍：

| 接口名称 | 描述 |
| --- | --- |
| ContentFormCard(\{contentFormData: uniformDataStruct.ContentForm, formType: FormType, formWidth?: number, formHeight?: number, handleOnClick?: Function\}) | 按照固定的样式展示传入的内容卡片数据，并在点击操作时，执行回调函数，并跳转至配置的页面。 |

### 开发示例

```
// 1. 导入需要的模块
import { ContentFormCard, FormType, uniformDataStruct } from '@kit.ArkData';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct Index {
  @State contentForm: uniformDataStruct.ContentForm = {
    uniformDataType: 'general.content-form',
    title: ''
  };
  @State startToShow: boolean = false;

  aboutToAppear(): void {
    // 2. 初始化数据
    this.initData();
  }

  async initData() {
    let context = this.getUIContext().getHostContext();
    if (!context) {
      return;
    }
    try {
      let appIcon = await context.resourceManager.getMediaContent($r('app.media.startIcon').id);
      let thumbImage = await context.resourceManager.getMediaContent($r('app.media.foreground').id);
      this.contentForm = {
        uniformDataType: 'general.content-form',
        title: 'Content form title',
        thumbData: appIcon,
        description: 'Content form description',
        appIcon: thumbImage,
        appName: 'com.test.demo'
      };
    } catch (err) {
      hilog.error(0xFF00, '[Sample_Udmf]', 'Init data error');
    }
  }

  build() {
    Column() {
      Button('show card').fontSize(30)
        .onClick(() => {
          // 3. 点击后startToShow变为true，页面重新渲染
          this.startToShow = true;
        })
      if (this.startToShow) {
        // 4. 使用内容卡片，传入对应的参数
        ContentFormCard({
          contentFormData: this.contentForm,
          formType: FormType.TYPE_SMALL,
          formWidth: 220,
          formHeight: 100,
          handleOnClick: () => {
            hilog.info(0xFF00, '[Sample_Udmf]', 'Clicked card');
          }
        })
      }
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkData/Udmf/ContentForm/entry/src/main/ets/pages/Index.ets#L16-L81" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
