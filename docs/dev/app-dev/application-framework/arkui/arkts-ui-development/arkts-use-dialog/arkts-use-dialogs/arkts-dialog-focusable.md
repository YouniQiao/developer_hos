---
title: "弹出框焦点策略"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-focusable
format: md
---


ArkUI的弹出框焦点策略可以设定是否中断用户当前操作，并聚焦到新弹出的弹出框。若设定弹出框不获取焦点，则新弹出时不会中断用户当前操作，例如，当用户正在文本框中输入内容时，新弹出的弹出框不会关闭软键盘，焦点仍保留在文本框中。

从API version 19开始，可以通过设置[focusable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#basedialogoptions11)参数来管理弹出框是否获取焦点。

## 使用约束

[openCustomDialog](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-uicontext-custom-dialog)和[CustomDialog](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-common-components-custom-dialog)支持通过focusable参数来管理弹出框是否获取焦点。

![](./img/693bb46c.png)

只有弹出覆盖在当前窗口之上的弹出框才可以获取焦点。

## 创建不获取焦点的弹出框

![](./img/900d3661.png)

详细变量定义请参考[完整示例](#完整示例)。

1. 初始化一个弹出框内容区域，内含一个Text组件。

   ```
   @State dialogIdIndex: number = 0;
   // 请在resources\base\element\string.json文件中配置name为'dialog_message'，value为非空字符串的资源
   private message: string =
     this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('dialog_message') as string;

   @Builder
   customDialogComponent() {
     Column({ space: 5 }) {
       Text(this.message + this.dialogIdIndex)
         .fontSize(30)
     }
     .height(200)
     .padding(5)
     .justifyContent(FlexAlign.SpaceBetween)
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogboxfocuspolicy/DialogFocusStrategy.ets#L20-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogFocusStrategy.ets</a></div>

2. 创建一个TextInput组件，在onChange事件函数中通过调用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getPromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getpromptaction)方法获取[PromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)对象，再通过该对象调用[openCustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#opencustomdialog12)接口，并设置[focusable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#basedialogoptions11)参数为false，以创建弹出框。

   ```
   TextInput()
     .onChange(() => {
       this.dialogIdIndex++;
       this.getUIContext().getPromptAction().openCustomDialog({
         builder: () => {
           this.customDialogComponent();
         },
         focusable: false
       }).then((dialogId: number) => {
         setTimeout(() => {
           this.getUIContext().getPromptAction().closeCustomDialog(dialogId);
         }, 3000);
       });
     })
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogboxfocuspolicy/DialogFocusStrategy.ets#L42-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogFocusStrategy.ets</a></div>


## 完整示例

当用户正在文本框中输入内容时，新弹出的弹出框不会关闭软键盘，焦点仍保留在文本框中。

```
@Entry
@Component
export struct Index {
  @State dialogIdIndex: number = 0;
  // 请在resources\base\element\string.json文件中配置name为'dialog_message'，value为非空字符串的资源
  private message: string =
    this.getUIContext().getHostContext()?.resourceManager.getStringByNameSync('dialog_message') as string;

  @Builder
  customDialogComponent() {
    Column({ space: 5 }) {
      Text(this.message + this.dialogIdIndex)
        .fontSize(30)
    }
    .height(200)
    .padding(5)
    .justifyContent(FlexAlign.SpaceBetween)
  }

  build() {
    NavDestination() {
      Column({ space: 5 }) {
        TextInput()
          .onChange(() => {
            this.dialogIdIndex++;
            this.getUIContext().getPromptAction().openCustomDialog({
              builder: () => {
                this.customDialogComponent();
              },
              focusable: false
            }).then((dialogId: number) => {
              setTimeout(() => {
                this.getUIContext().getPromptAction().closeCustomDialog(dialogId);
              }, 3000);
            });
          })
      }.width('100%')
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogboxfocuspolicy/DialogFocusStrategy.ets#L16-L63" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogFocusStrategy.ets</a></div>


![](./img/2a623a0d.gif)
