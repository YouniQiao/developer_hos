---
title: "如何获取窗口的宽度"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-200
format: md
---


可以通过getWindowProperties接口获取窗口属性。窗口属性的windowRect表示窗口尺寸。参考代码如下：

```
import { window } from '@kit.ArkUI';

@Entry
@Component
struct WindowProperties {
  context = this.getUIContext();

  build() {
    Text("Scroll Area")
      .width("100%")
      .height("100%")
      .backgroundColor(0X330000FF)
      .fontSize(16)
      .textAlign(TextAlign.Center)
      .onClick(() => {
        window.getLastWindow(this.context.getHostContext()).then((data) => {
          // get window attribute
          let properties = data?.getWindowProperties();
          // Get window width and height
          console.log("windowClass width: " + properties.windowRect.width);
          console.log("windowClass height: " + properties.windowRect.height);
        });
      })
  }
}
```

**参考链接**

[WindowRect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-dialogrequest#windowrect10)
