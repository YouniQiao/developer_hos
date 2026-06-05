---
title: "如何获取系统版本号"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faq-basics-service-kit-10
format: md
---


可通过[@ohos.deviceInfo (设备信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)模块，查询设备信息。

示例如下：

```
import { deviceInfo } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let displayVersionInfo: string = deviceInfo.displayVersion; // product version
let osFullNameInfo: string = deviceInfo.osFullName; // system version
let versionIdInfo: string = deviceInfo.versionId; // version ID

@Entry
@Component
struct GetSysVersion {
  build() {
    Row() {
      Column() {
        Button('get device info')
          .onClick(() => {
            hilog.info(0x000, 'displayVersion TAG', `displayVersion:${displayVersionInfo}`);
            hilog.info(0x000, 'osFullName TAG', `osFullName:${osFullNameInfo}`);
            hilog.info(0x000, 'versionId TAG', `versionId:${versionIdInfo}`);
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
