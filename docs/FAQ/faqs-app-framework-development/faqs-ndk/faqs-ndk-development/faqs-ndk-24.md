---
title: "如何在Native侧获取APP版本信息"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-24
format: md
---


Native侧目前没有获取APP版本信息的接口。如需获取APP版本信息，可以在ArkTS侧获取，然后传递到Native侧。

通过@kit.AbilityKit模块中的bundleManager查询bundleInfo。bundleInfo包含App版本号和版本名。

ArkTS侧传递数据到Native侧可参考链接：

```
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION).then((bundleInfo)=>{
              let versionName = bundleInfo.versionName;//Application version name
              let versionNo = bundleInfo.versionCode;//Application version number
            }).catch((error : BusinessError)=>{
              console.error("get bundleInfo failed,error is "+error)})
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

ArkTS侧传递数据到Native侧可参考链接：

[使用Node-API实现跨语言交互开发流程](/docs/dev/ndk-dev/use-napi-process)

获取模块相关信息参考链接：

[bundleInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-bundleinfo#bundleinfo-1)

[@ohos.bundle.bundleManager (应用程序包管理模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager)
