---
title: "Navigation容器中，如何设置子组件的高度为100%，撑满父容器"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-263
format: md
---


参考代码如下：

```
import { window } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;
const TAG = 'FullNavigationSubComponent';

@Entry
@Component
struct FullNavigationSubComponent {
  context = this.getUIContext();

  onPageShow(): void {
    window.getLastWindow(this.context.getHostContext(), (err, win) => {
      if (err != null) {
        hilog.error(DOMAIN, TAG, `getLastWindow failed  code:${err.code};message:${err.message}`);
      } else {
        win.setWindowLayoutFullScreen(true);
      }
    })
  }

  build() {
    Navigation() {
      Column() {
      }
      .width('100%')
      .height('100%')
      .backgroundColor(Color.Black)
    }
    .width('100%')
    .height('100%')
    .title('Personalization Settings')
    .titleMode(NavigationTitleMode.Mini)
    .backgroundColor(Color.Grey)
  }
}
```
