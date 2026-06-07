---
title: "如何获取当前应用程序缓存目录"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-14
format: md
---


使用Context.cacheDir获取应用程序的缓存目录。代码示例如下：

```
import { common } from '@kit.AbilityKit';

@Entry
@Component
export struct GetCacheDirectoryView {
  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  @State cachePath: string = '';

  build() {
    Column() {
      Text(this.cachePath)
        .margin({ bottom: 24 })
      Button() {
        Text('Get the application cache directory address')
      }
      .onClick(() => {
        const applicationContext = this.context.getApplicationContext();
        // Get the application file path
        const cacheDir = applicationContext.cacheDir;
        this.cachePath = cacheDir + '/test.txt';
      })
      .width(300)
      .height(50)
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }
}
```

**参考链接**

[获取应用文件路径](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage#获取应用文件路径)
