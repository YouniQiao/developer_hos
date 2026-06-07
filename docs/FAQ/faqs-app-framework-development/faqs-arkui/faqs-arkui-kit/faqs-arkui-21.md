---
format: md
title: "如何加载和使用自定义字体"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-21
---


1. 字体管理中[@ohos.font (注册自定义字体)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-font)。
2. 设置对应文本的字体家族。可参考以下代码：

   ```
   // xxx.ets
   import { Font } from '@kit.ArkUI';

   @Entry
   @Component
   struct FontExample {
     @State message: string = 'Hello World';

     aboutToAppear() {
       // Register in black font
       let font: Font = this.getUIContext().getFont()
       font.registerFont({
         familyName: 'Condensed_Black', // Registered font name
         familySrc: '/font/Sans_Condensed_Black.ttf' // The font folder is at the same level as the pages directory
       })

       // Register in black oblique font
       font.registerFont({
         familyName: 'Condensed_Black_Italic', // Registered font name
         familySrc: '/font/Sans_Condensed_Black_Italic.ttf' // The font folder is at the same level as the pages directory
       })
     }

     build() {
       Column() {
         Text(this.message)
           .align(Alignment.Center)
           .fontSize(50)
           .fontFamily('Condensed_Black') // Use black font
         Text(this.message)
           .align(Alignment.Center)
           .fontSize(50)
           .fontFamily('Condensed_Black_Italic') // Use black oblique font
         Text(this.message)
           .align(Alignment.Center)
           .fontSize(50)
       }
       .width('100%')
       .margin({ top: 30 })
     }
   }
   ```

效果如图所示：

![](./img/2bc26606.png "点击放大")
