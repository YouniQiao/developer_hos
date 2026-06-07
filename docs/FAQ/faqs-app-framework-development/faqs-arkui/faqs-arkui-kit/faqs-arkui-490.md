---
format: md
title: "自定义键盘如何设置可与输入框贴边"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-490
---


自定义键盘可以通过自定义弹窗来实现，自定义弹窗默认位置会和底部保持距离，可以通过设置offset来实现贴边，设置keyboardAvoidDistance来实现和键盘贴边。参考代码：

```
@Entry
@Component
struct CustomDialogPage {
  @State message: string = 'CustomDialogPage';
  customDialogController: CustomDialogController = new CustomDialogController({
    builder: CustomEditDialogWidget({
      inputType: InputType.Normal,
      textInputConString: () => {
      }
    }),
    alignment: DialogAlignment.Bottom,
    maskColor: Color.White,
    customStyle: true
  });

  build() {
    Row() {
      Column() {
        Button(this.message).onClick(() => {
          this.customDialogController.open();
        });
      }
      .width('100%');
    }
    .height('100%');
  }
}

@CustomDialog
@Component
export struct CustomEditDialogWidget {
  controller?: CustomDialogController;
  @State textInputString: string = '';
  textInputConString = () => {
  };
  inputType: InputType = InputType.Normal;

  build() {
    Column() {
      TextArea({ placeholder: 'please input' })
        .width('80%')
        .backgroundColor(Color.Transparent)
        .defaultFocus(true)
        .onChange((value: string) => {
          this.textInputString = value;
        });
    }
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Start)
    .width('80%')
    .height(450)
    .borderRadius(10)
    .backgroundColor('#fffaf7f7')
    .offset({ x: 0, y: 16 });
  }
}
```
