---
format: md
title: "如何实现软键盘弹出后，整体布局不变"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-16
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-16
last_sync: 2026-06-07
sync_hash: b80e11ed
---
通过[expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#expandsafearea)属性把组件扩展其安全区域，使页面整体布局保持不变，当type为SafeAreaType.KEYBOARD时默认生效，组件不避让键盘。可参考如下代码：

```
// xxx.ets
@Entry
@Component
struct TextInputExample {
  scroller: Scroller = new Scroller();
  @State text: string = '';

  build() {
    Scroll(this.scroller) {
      Column({ space: 20 }) {
        TextInput({ placeholder: 'Please enter the content.' })
          .expandSafeArea([SafeAreaType.KEYBOARD])
          .type(InputType.Password)
          .margin({ top: 200 })
        TextInput({ placeholder: 'Please enter the content.' })
          .expandSafeArea([SafeAreaType.KEYBOARD])
          .margin({ top: 200 })
        Text(`UserName：${this.text}`)
          .expandSafeArea([SafeAreaType.KEYBOARD])
          .width('80%')
          .margin({ top: 200 })
        TextInput({ placeholder: 'Please enter a user name.', text: this.text })
          .expandSafeArea([SafeAreaType.KEYBOARD])
          .margin({ top: 200 })
          .onChange((value: string) => {
            this.text = value;
          })
      }
      .width('100%')
    }
    .scrollBar(BarState.Off)
  }
}
```
