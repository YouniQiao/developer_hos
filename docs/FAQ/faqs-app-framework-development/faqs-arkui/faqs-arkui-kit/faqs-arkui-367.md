---
title: "如何获取ArkTS状态管理框架代理前的原始对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-367
format: md
---


使用getTarget接口获取状态管理框架代理前的原始对象。

参考示例如下：

```
import { UIUtils } from '@kit.ArkUI';

@Observed
class UserInfo {
  name: string = 'Tom';
}

@Entry
@Component
struct GetTargetDemo {
  @State info: UserInfo = new UserInfo();

  build() {
    Column() {
      Text(`info.name: ${this.info.name}`)
      Button('Change the properties of the proxy object')
        .onClick(() => {
          this.info.name = 'Alice'; // The Text component can refresh
        })
      Button('更改原始对象的属性')
        .onClick(() => {
          let rawInfo: UserInfo = UIUtils.getTarget(this.info);
          if (rawInfo) {
            rawInfo.name = 'Bob'; // The Text component cannot be refreshed
          }
        })
    }
  }
}
```

参考链接

[getTarget接口：获取状态管理框架代理前的原始对象](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget)
