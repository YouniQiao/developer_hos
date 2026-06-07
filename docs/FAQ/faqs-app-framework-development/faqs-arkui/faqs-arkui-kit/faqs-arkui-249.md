---
title: "如何获取底部手势横条的高度"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-249
format: md
---


可以使用window的[getWindowAvoidArea()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-uiextension#getwindowavoidarea)方法获取内容规避区域，需设置type为AvoidAreaType.TYPE\_NAVIGATION\_INDICATOR。

```
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct GetBottomNavBarHeight {
  context = this.getUIContext();

  build() {
    Column() {
      Button('Get the height of the bottom gesture bar')
        .onClick(() => {
          let type = window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR;
          window.getLastWindow(this.context.getHostContext()).then((data) => {
            let avoidArea = data.getWindowAvoidArea(type);
            // Get the height of the navigation bar area
            let bottomRectHeight = avoidArea.bottomRect.height;
            console.info(`window bottomRectHeight is: ${bottomRectHeight}`);
          }).catch((err: BusinessError) => {
            console.error(`Failed to obtain the window. Cause: ${JSON.stringify(err)}`);
          });
        })
    }
  }
}
```
