---
title: "Native侧如何获取可操作的文件目录"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-38
format: md
---


当前native侧暂无可直接获取文件目录的接口，可以通过ArkTS侧获取相关路径信息，然后传递到native侧使用。

ArkTS侧获取路径信息代码示例：

```
import { common } from '@kit.AbilityKit';

const context = AppStorage.get("context") as UIContext;
let hostContext = context.getHostContext() as common.UIAbilityContext;
let filesDir = hostContext.filesDir;
```
