---
title: "如何获取手机屏幕信息"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-242
format: md
---


可参考如下代码，获取了屏幕的宽和高，Display实例的所有属性见文档：[@ohos.display (屏幕属性)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display)。

```
import { display } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  private screenWidth: number = 0;
  private screenHeight: number = 0;

  aboutToAppear() {
    try {
      this.screenWidth = display.getDefaultDisplaySync().width;
      this.screenHeight = display.getDefaultDisplaySync().height;
    } catch (e) {
      console.error('Fail with code: ' + JSON.stringify(e));
    }
  }

  build() {
    Row() {
      Column() {
        Text('---->width: ' + this.screenWidth)
        Text('---->height: ' + this.screenHeight)
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
