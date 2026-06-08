---
format: md
title: "如何实现通过侧滑手势关闭打开的悬浮框"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-366
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-366
last_sync: 2026-06-07
sync_hash: df6163a5
---
在页面的onBackPress()生命周期函数中隐藏子窗口。示例如下：

1. 在EntryAbility的onWindowStageCreate方法中创建子窗口。

   ```
   onWindowStageCreate(windowStage: window.WindowStage): void {
     // Create application subwindow
     let windowClass: window.Window | undefined = undefined;
     windowStage.createSubWindow('mySubWindow', (err: BusinessError, data) => {
       if (err.code) {
         console.error(`Failed to create the subwindow. Cause code: ${err.code}, message: ${err.message}`);
         return;
       }
       windowClass = data;
       console.info('Succeeded in creating the subwindow. Data: ' + JSON.stringify(data));
       // After the child window is created successfully, set the position, size, and related properties of the child window.
       windowClass.moveWindowTo(300, 300);
       windowClass.resize(200, 200);
       windowClass.setWindowTouchable(true);
       // Load the corresponding target page for the child window.
       windowClass.setUIContent('pages/Index',(err: BusinessError) => {
         if (err.code) {
           console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);
           return;
         }
         if (windowClass) {
           windowClass.setWindowBackgroundColor('#64b38c');
         }
       });
       (windowClass as window.Window).showWindow();
     })
     // ...
   }
   ```
2. Page中使用onBackPress监听并销毁子窗口。

   ```
   import { window } from '@kit.ArkUI';

   @Entry
   @Component
   struct CloseWindowDemo {
     @State message: string = 'Hello World';

     onBackPress(): boolean | void {
       console.log('Triggered');
       const subWindow = window.findWindow('mySubWindow');
       if (subWindow) {
         subWindow.destroyWindow();
       }
       return true;
     }

     build() {
       RelativeContainer() {
         Text(this.message)
           .id('HelloWorld')
           .fontSize(20)
           .fontWeight(FontWeight.Bold)
           .alignRules({
             center: { anchor: '__container__', align: VerticalAlign.Center },
             middle: { anchor: '__container__', align: HorizontalAlign.Center }
           })
       }
       .height('100%')
       .width('100%')
     }
   }
   ```
