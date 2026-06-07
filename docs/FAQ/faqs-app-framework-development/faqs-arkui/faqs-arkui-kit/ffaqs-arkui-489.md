---
title: "如何解决应用键盘出现遮挡，输入框被拦截一半"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/ffaqs-arkui-489
format: md
---


为了避免组件覆盖，系统规格设计软键盘的[安全间距](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area)为16vp。用[offset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentutils#offset)方法设置16vp的间距，示例代码如下：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { ComponentContent } from '@kit.ArkUI';

class Params {
  text: string = '';

  constructor(text: string) {
    this.text = text;
  }
}

@Builder
function buildText(params: Params) {
  Column() {
    TextInput({ placeholder: 'input your word...' })
      .placeholderColor(Color.Grey)
      .placeholderFont({
        size: 14,
        weight: 400
      })
      .caretColor(Color.Blue)
      .fontColor(Color.Black)
  }
  .backgroundColor('#FFF0F0F0')
  .borderRadius(12)
  .height(350)
  .width('100%')
  .offset({
    x: 0,
    y: 16  // Popup window position, when y equals 16, it is just right.
  })
}

@Entry
@Component
struct Index {
  @State message: string = 'hello';

  build() {
    Row() {
      Column() {
        Button('click me')
          .onClick(() => {
            let uiContext = this.getUIContext();
            let promptAction = uiContext.getPromptAction();
            let contentNode = new ComponentContent(uiContext, wrapBuilder(buildText), new Params(this.message));
            try {
              promptAction.openCustomDialog(contentNode, {
                alignment: DialogAlignment.Bottom,
                offset: {
                  dx: 0,
                  dy: 0
                }
              });
            } catch (error) {
              let message = (error as BusinessError).message;
              let code = (error as BusinessError).code;
              console.error(`OpenCustomDialog args error code is ${code}, message is ${message}`);
            }
          })
      }
      .width('100%')
      .height('100%')
    }
    .height('100%')
  }
}
```
