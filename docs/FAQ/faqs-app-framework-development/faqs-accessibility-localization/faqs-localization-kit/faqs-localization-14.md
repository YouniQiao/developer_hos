---
title: "在多模块工程中，如何获取har/hsp中的rawfile资源"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-localization-14
---

har模块中的资源可以通过[@ohos.resourceManager (资源管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager)获取，hsp中的资源可以通过application的[application.createModuleContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-application#applicationcreatemodulecontext)接口创建相应模块的context，再通过resourceManager获取。

示例如下：

```
import { application, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { buffer } from '@kit.ArkTS';

@Entry
@Component
struct Index {
  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;

  build() {
    Column() {
      Button('get rawFile content')
        .onClick(() => {
          application.createModuleContext(this.context, 'hsp')
            .then((data) => {
              let rawFileData = data.resourceManager.getRawFileContentSync('hsp.txt');
              let hspContent: string = buffer.from(rawFileData.buffer).toString();
            })
            .catch((error: BusinessError) => {
              console.error(`createModuleContext failed, error.code: ${error.code}, error.message: ${error.message}`);
            })
        })
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
