---
title: "弹出框控制器"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-controller
format: md
---


ArkUI的弹出框控制器在绑定弹出框后，可提供对弹出框的操作能力，当前支持关闭功能。可以将控制器传入弹出框内容区域后进行操作。

从API version 18开始，可设置controller参数以绑定[DialogController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#dialogcontroller18)控制器，通过控制器能够操作弹出框。

## 使用约束

目前[openCustomDialogWithController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#opencustomdialogwithcontroller18)和[presentCustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#presentcustomdialog18)支持通过controller参数来绑定弹出框进行操作，目前[getDialogController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-api#getdialogcontroller18)支持获取自定义组件所在的弹出框的控制器。

![](./img/7909ec00.png)

一个弹出框控制器只能绑定一个弹出框，且操作只对该弹出框生效。

使用[getDialogController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-api#getdialogcontroller18)获取弹出框控制器时，如果当前自定义组件不在弹出框中显示则获取为undefined。

## 创建自定义内容为ComponentContent的弹出框控制器

![](./img/91d327aa.png)

详细变量定义请参考[完整示例](#完整示例)。

1. 初始化一个自定义弹出框内容区的入参类，内部包含弹出框控制器。

   ```
   class Params {
     public text: string = '';
     public dialogController: promptAction.CommonController = new promptAction.DialogController();

     constructor(text: string, dialogController: promptAction.CommonController) {
       this.text = text;
       this.dialogController = dialogController;
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L23-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>

2. 初始化一个自定义的弹出框内容区，内部包含一个按钮，该按钮通过该自定义组件自带的弹出框控制器实现关闭功能。

   ```
   @Component
   struct MyComponent {
     build() {
       Column({ space: 5 }) {
         Button('Close Dialog(Built-in Controller)')
           .onClick(() => {
             let dialogController: promptAction.DialogController = this.getDialogController();
             if (dialogController !== undefined) {
               dialogController.close();
             }
           })
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L36-L52" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>

3. 初始化另一自定义弹出框内容区，其中包含一个Text组件和一个按钮，该按钮通过外部传递的弹出框控制器用于关闭弹出框，并且该内容区还包含前一个自定义弹出框内容区。

   ```
   @Builder
   function buildText(params: Params) {
     Column({ space: 5 }) {
       Text(params.text)
         .fontSize(30)
       if (params.dialogController !== undefined) {
         Button('Close Dialog(External Controller)')
           .onClick(() => {
             params.dialogController.close();
           })
       }
       MyComponent()
     }
     .width(300)
     .height(200)
     .backgroundColor('#FFF0F0F0')
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L54-L73" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>

4. 初始化一个弹出框控制器，并通过设置控制器参数来初始化一个弹出框内容实体对象。最后，通过调用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getPromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getpromptaction)方法获取[PromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)对象，再通过该对象调用[openCustomDialogWithController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#opencustomdialogwithcontroller18)接口，并且设置初始化的内容实体对象和控制器参数以创建弹出框。

   ```
   let dialogController: promptAction.CommonController = new promptAction.DialogController();
   let contentNode: ComponentContent<Object> =
     new ComponentContent(this.getUIContext(), wrapBuilder(buildText),
       new Params(this.message, dialogController));
   this.getUIContext().getPromptAction().openCustomDialogWithController(
     contentNode, dialogController, this.baseDialogOptions).catch((err: BusinessError) => {
     hilog.error(0x0000, 'dialogController',
       'openCustomDialogWithController error: ' + err.code + ' ' + err.message);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L200-L210" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>


## 创建自定义内容为CustomBuilder的弹出框控制器

![](./img/b4cc75a4.png)

详细变量定义请参考[完整示例](#完整示例)。

1. 初始化一个自定义弹出框内容区，内部包含一个Text组件和一个按钮，该按钮通过外部传递的弹出框控制器实现关闭功能。

   ```
   @Builder
   customDialogComponent(dialogController: promptAction.DialogController) {
     Column({ space: 5 }) {
       Text(this.message)
         .fontSize(30)
       if (dialogController !== undefined) {
         Button('Close Dialog(External Controller)')
           .onClick(() => {
             dialogController.close();
           })
       }
     }
     .height(200)
     .padding(5)
     .justifyContent(FlexAlign.SpaceBetween)
     .backgroundColor('#FFF0F0F0')
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L122-L141" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>

2. 初始化一个弹出框控制器，并通过调用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getPromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getpromptaction)方法获取[PromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)对象，再通过该对象调用[presentCustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#presentcustomdialog18)接口，设置初始化的内容实体对象和控制器参数以创建弹出框。

   ```
   let dialogController: promptAction.CommonController = new promptAction.DialogController();
   this.getUIContext().getPromptAction().presentCustomDialog(() => {
     this.customDialogComponent(dialogController);
   }, dialogController, this.dialogOptions).catch((err: BusinessError) => {
     hilog.error(0x0000, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L214-L221" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>


## 创建自定义内容为CustomBuilderWithId的弹出框控制器

![](./img/c359870a.png)

详细变量定义请参考[完整示例](#完整示例)。

1. 初始化一个弹出框内容区，内部包含一个Text组件、一个通过外部传递的弹出框ID用于关闭弹出框的按钮和一个通过外部传递的弹出框控制器用于关闭弹出框的按钮。

   ```
   @Builder
   customDialogComponentWithId(dialogId: number, dialogController: promptAction.DialogController) {
     Column({ space: 5 }) {
       Text(this.message)
         .fontSize(30)
       if (dialogId !== undefined) {
         Button('Close Dialog(DialogID)')
           .onClick(() => {
             this.getUIContext().getPromptAction().closeCustomDialog(dialogId);
           })
       }
       if (dialogController !== undefined) {
         Button('Close Dialog(External Controller)')
           .onClick(() => {
             dialogController.close();
           })
       }
     }
     .height(200)
     .padding(5)
     .justifyContent(FlexAlign.SpaceBetween)
     .backgroundColor('#FFF0F0F0')
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L143-L168" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>

2. 初始化一个弹出框控制器，并通过调用[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)中的[getPromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#getpromptaction)方法获取[PromptAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction)对象，再通过该对象调用[presentCustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-promptaction#presentcustomdialog18)接口，设置初始化的内容实体对象和控制器参数以创建弹出框。

   ```
   let dialogController: promptAction.CommonController = new promptAction.DialogController();
   this.getUIContext().getPromptAction().presentCustomDialog((dialogId: number) => {
     this.customDialogComponentWithId(dialogId, dialogController);
   }, dialogController, this.dialogOptions).catch((err: BusinessError) => {
     hilog.error(0x0000, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L225-L232" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>


## 在CustomDialogController内容区直接获取弹出框控制器

![](./img/719413cf.png)

详细变量定义请参考[完整示例](#完整示例)。

1. 初始化一个自定义弹出框内容区，内部包含一个Text组件和一个按钮，该按钮通过弹出框控制器关闭弹出框。

   ```
   @CustomDialog
   @Component
   struct CustomDialogExample {
     controller?: CustomDialogController;

     build() {
       Column({ space: 5 }) {
         Text('I am content')
           .fontSize(30)
         Button('Close Dialog(Built-in Controller)')
           .onClick(() => {
             let dialogController: PromptActionDialogController = this.getDialogController();
             if (dialogController !== undefined) {
               dialogController.close();
             }
           })
       }
       .height(200)
       .backgroundColor('#FFF0F0F0')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L75-L98" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>

2. 初始化一个自定义弹出框构造器，关联自定义弹出框内容区。

   ```
   let customDialogController: CustomDialogController = new CustomDialogController({
     builder: CustomDialogExample(),
     offset: {
       dx: 0,
       dy: 50
     }
   });
   customDialogController.open();
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L245-L254" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>


## 使用控制器获取弹出框的状态

在自定义弹出框场景中，从API version 20 开始，可以通过控制器调用[getState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-promptaction#getstate20)接口获取弹出框状态。

![](./img/1f948c57.png)

详细变量定义请参考[完整示例](#完整示例)。

初始化一个自定义弹出框内容区，内部包含一个Text组件和一个按钮，该按钮通过调用getState获取当前弹出框状态。

```
@Builder
customDialogComponentGetState(dialogController: promptAction.DialogController) {
  Column({ space: 5 }) {
    Text(this.message)
      .fontSize(30)
    if (dialogController !== undefined) {
      Button('Check Status:' + this.dialogState)
        .onClick(() => {
          this.dialogState = dialogController.getState();
        })
      Button('Close Dialog(External Controller)')
        .onClick(() => {
          dialogController.close();
        })
    }
  }
  .height(200)
  .padding(5)
  .justifyContent(FlexAlign.SpaceBetween)
  .backgroundColor('#FFF0F0F0')
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L170-L193" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>


## 完整示例

通过外部传递的弹出框控制器和自定义组件自带的弹出框控制器，在自定义弹出框内容区域内实现关闭功能。

```
import { ComponentContent, promptAction } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

class Params {
  public text: string = '';
  public dialogController: promptAction.CommonController = new promptAction.DialogController();

  constructor(text: string, dialogController: promptAction.CommonController) {
    this.text = text;
    this.dialogController = dialogController;
  }
}

@Component
struct MyComponent {
  build() {
    Column({ space: 5 }) {
      Button('Close Dialog(Built-in Controller)')
        .onClick(() => {
          let dialogController: promptAction.DialogController = this.getDialogController();
          if (dialogController !== undefined) {
            dialogController.close();
          }
        })
    }
  }
}

@Builder
function buildText(params: Params) {
  Column({ space: 5 }) {
    Text(params.text)
      .fontSize(30)
    if (params.dialogController !== undefined) {
      Button('Close Dialog(External Controller)')
        .onClick(() => {
          params.dialogController.close();
        })
    }
    MyComponent()
  }
  .width(300)
  .height(200)
  .backgroundColor('#FFF0F0F0')
}

@CustomDialog
@Component
struct CustomDialogExample {
  controller?: CustomDialogController;

  build() {
    Column({ space: 5 }) {
      Text('I am content')
        .fontSize(30)
      Button('Close Dialog(Built-in Controller)')
        .onClick(() => {
          let dialogController: PromptActionDialogController = this.getDialogController();
          if (dialogController !== undefined) {
            dialogController.close();
          }
        })
    }
    .height(200)
    .backgroundColor('#FFF0F0F0')
  }
}

@Entry
@Component
export struct DialogController {
  @State dialogState: promptAction.CommonState = 0;
  private message = 'dialog';
  private baseDialogOptions: promptAction.BaseDialogOptions = {
    isModal: false,
    autoCancel: false,
    offset: {
      dx: 0,
      dy: 50
    }
  };
  private dialogOptions: promptAction.DialogOptions = {
    isModal: false,
    autoCancel: false,
    offset: {
      dx: 0,
      dy: 50
    }
  };

  @Builder
  customDialogComponent(dialogController: promptAction.DialogController) {
    Column({ space: 5 }) {
      Text(this.message)
        .fontSize(30)
      if (dialogController !== undefined) {
        Button('Close Dialog(External Controller)')
          .onClick(() => {
            dialogController.close();
          })
      }
    }
    .height(200)
    .padding(5)
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor('#FFF0F0F0')
  }

  @Builder
  customDialogComponentWithId(dialogId: number, dialogController: promptAction.DialogController) {
    Column({ space: 5 }) {
      Text(this.message)
        .fontSize(30)
      if (dialogId !== undefined) {
        Button('Close Dialog(DialogID)')
          .onClick(() => {
            this.getUIContext().getPromptAction().closeCustomDialog(dialogId);
          })
      }
      if (dialogController !== undefined) {
        Button('Close Dialog(External Controller)')
          .onClick(() => {
            dialogController.close();
          })
      }
    }
    .height(200)
    .padding(5)
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor('#FFF0F0F0')
  }

  @Builder
  customDialogComponentGetState(dialogController: promptAction.DialogController) {
    Column({ space: 5 }) {
      Text(this.message)
        .fontSize(30)
      if (dialogController !== undefined) {
        Button('Check Status:' + this.dialogState)
          .onClick(() => {
            this.dialogState = dialogController.getState();
          })
        Button('Close Dialog(External Controller)')
          .onClick(() => {
            dialogController.close();
          })
      }
    }
    .height(200)
    .padding(5)
    .justifyContent(FlexAlign.SpaceBetween)
    .backgroundColor('#FFF0F0F0')
  }

  build() {
    NavDestination() {
      Column({ space: 5 }) {
        Button('OpenCustomDialogWithController')
          .onClick(() => {
            let dialogController: promptAction.CommonController = new promptAction.DialogController();
            let contentNode: ComponentContent<Object> =
              new ComponentContent(this.getUIContext(), wrapBuilder(buildText),
                new Params(this.message, dialogController));
            this.getUIContext().getPromptAction().openCustomDialogWithController(
              contentNode, dialogController, this.baseDialogOptions).catch((err: BusinessError) => {
              hilog.error(DOMAIN, 'dialogController',
                'openCustomDialogWithController error: ' + err.code + ' ' + err.message);
            });
          })
        Button('PresentCustomDialog+CustomBuilder')
          .onClick(() => {
            let dialogController: promptAction.CommonController = new promptAction.DialogController();
            this.getUIContext().getPromptAction().presentCustomDialog(() => {
              this.customDialogComponent(dialogController);
            }, dialogController, this.dialogOptions).catch((err: BusinessError) => {
              hilog.error(DOMAIN, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);
            });
          })
        Button('PresentCustomDialog+CustomBuilderWithId')
          .onClick(() => {
            let dialogController: promptAction.CommonController = new promptAction.DialogController();
            this.getUIContext().getPromptAction().presentCustomDialog((dialogId: number) => {
              this.customDialogComponentWithId(dialogId, dialogController);
            }, dialogController, this.dialogOptions).catch((err: BusinessError) => {
              hilog.error(DOMAIN, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);
            });
          })
        Button('PresentCustomDialog+CustomBuilderGetState')
          .onClick(() => {
            let dialogController: promptAction.CommonController = new promptAction.DialogController();
            this.getUIContext().getPromptAction().presentCustomDialog(() => {
              this.customDialogComponentGetState(dialogController);
            }, dialogController, this.dialogOptions).catch((err: BusinessError) => {
              hilog.error(DOMAIN, 'dialogController', 'presentCustomDialog error: ' + err.code + ' ' + err.message);
            });
          })
        Button('CustomDialogController')
          .onClick(() => {
            let customDialogController: CustomDialogController = new CustomDialogController({
              builder: CustomDialogExample(),
              offset: {
                dx: 0,
                dy: 50
              }
            });
            customDialogController.open();
          })
      }.width('100%')
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DialogProject/entry/src/main/ets/pages/customdialog/dialogcontroller/DialogController.ets#L16-L261" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：DialogController.ets</a></div>


![](./img/5017a4f8.gif)
