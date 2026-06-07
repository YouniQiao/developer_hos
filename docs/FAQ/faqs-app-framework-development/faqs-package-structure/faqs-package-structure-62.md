---
title: "如何判断应用程序是否安装"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-62
format: md
---


为了应用A能判断设备上是否已安装应用B并决定是否引导用户下载应用B，需进行以下配置：

在B应用entry模块的module.json5文件中，添加配置的具体标签路径如下：module -> abilities -> skills -> uris。

```
"uris": [
  {
    "scheme":"schB",
    "host":"com.example.test",
    "path":"open",
  }
],
```

在A应用entry模块的module.json5文件中，添加配置的具体标签路径为：module -> querySchemes。

```
"querySchemes": [
  "schB"
],
```

应用A检查设备上是否安装了应用B。

```
import { hilog } from '@kit.PerformanceAnalysisKit';
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  // Application A determines whether Application B is installed on the device
  isAppBExist() {
    let exist = false;
    try {
      let link = 'schB://com.example.test/open';
      let data: boolean = bundleManager.canOpenLink(link);
      hilog.info(0x0000, 'testTag', 'canOpenLink successfully: %{public}s', JSON.stringify(data));
      exist = data;
    } catch (err) {
      let message = (err as BusinessError).message;
      hilog.error(0x0000, 'testTag', 'canOpenLink failed: %{public}s', message);
      exist = false;
    }
    console.info('Has application B been installed:' + exist);
  }

  @State text: string = 'isAppBExist'

  build() {
    Row() {
      Column() {
        Text(this.text)
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            this.isAppBExist();
          });
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

**参考链接**

[bundleManager.canOpenLink](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagercanopenlink12)
