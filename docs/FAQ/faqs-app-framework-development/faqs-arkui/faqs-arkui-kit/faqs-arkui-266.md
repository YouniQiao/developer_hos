---
title: "如何获取屏幕顶部状态栏、底部导航栏和导航条的高度"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-266
---

可以使用window的[getWindowAvoidArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-uiextension#getwindowavoidarea)方法获取，示例代码如下：

```
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct GetAvoidAreaHeight {
  context = this.getUIContext();

  build() {
    Column() {
      Button('GetAvoidAreaHeight')
        .onClick(() => {
          let systemAvoidAreaType = window.AvoidAreaType.TYPE_SYSTEM; // system
          let navigationIndicatorType = window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR; // navigation
          if (this.context) {
            window.getLastWindow(this.context.getHostContext()).then((data) => {
              // Get the system default area, usually including the status bar and navigation bar
              let avoidArea1 = data.getWindowAvoidArea(systemAvoidAreaType);
              // Top status bar height
              let statusBarHeight = avoidArea1.topRect.height;
              // Bottom navigation bar height
              let bottomNavHeight = avoidArea1.bottomRect.height;
              // Get the navigation bar area
              let avoidArea2 = data.getWindowAvoidArea(navigationIndicatorType);
              // Get the height of the navigation bar area
              let indicatorHeight = avoidArea2.bottomRect.height;
              console.info(`statusBarHeight is ${statusBarHeight}`);
              console.info(`bottomNavHeight is ${bottomNavHeight}`);
              console.info(`indicatorHeight is ${indicatorHeight}`);
            }).catch((err: BusinessError) => {
              console.error(`Failed to obtain the window. Cause: ${JSON.stringify(err)}`);
            });
          }
        })
    }
  }
}
```
