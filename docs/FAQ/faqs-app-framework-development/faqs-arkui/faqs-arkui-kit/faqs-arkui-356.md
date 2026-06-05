---
format: md
title: "如何更改TextInput密码输入模式下passwordIcon的大小、颜色、位置"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-356
---

使用Stack容器作为父容器，子组件使用Image组件自定义passwordIcon。通过该方式可调整Image组件的位置、大小和颜色。示例代码如下：

```
@Entry
@Component
struct TextInputDemo {
  @State text: string = '';
  @State changeType: InputType = InputType.Password;
  @State isVisible: boolean = false;
  @State isPasswordVisible: boolean = false;
  controller: TextInputController = new TextInputController();

  build() {
    Stack() {
      TextInput({ text: this.text, controller: this.controller })
        .type(this.changeType)
        .placeholderFont({
          size: 16,
          weight: 400
        })
        .showPasswordIcon(false)// You need to disable the native password icon (showPasswordIcon(false)) for it to take effect.
        .width(336)
        .height(56)
        .padding({ right: 50 })
        .onChange((value: string) => {
          this.text = value;
        })
      //Image overlay passwordIcon implementation
      Image($r(this.isVisible ? 'app.media.startIcon' : 'app.media.invisible'))
        .margin({ left: 280 })
        .backgroundColor('#E7E8EA')
        .width(20)
        .height(20)
        .onClick(() => {
          this.isPasswordVisible = !this.isPasswordVisible;
          this.isVisible = !this.isVisible;
          if (this.isPasswordVisible) {
            this.changeType = InputType.Normal;
          } else {
            this.changeType = InputType.Password;
          }
        })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F3F5')
  }
}
```
