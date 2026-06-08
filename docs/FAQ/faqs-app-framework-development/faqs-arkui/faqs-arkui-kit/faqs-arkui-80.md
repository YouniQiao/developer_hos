---
format: md
title: "如何一键清空TextInput、TextArea组件内容"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-80
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-80
last_sync: 2026-06-07
sync_hash: a61d276b
---
通过将状态变量绑定到TextInput或TextArea的text属性，点击清空按钮时更新状态变量为空字符串即可实现内容清除。参考代码如下：

```
@Entry
@Component
struct Index {
  @State text: string = 'Hello World';
  controller: TextInputController = new TextInputController();

  build() {
    Row() {
      Column() {
        TextInput({ placeholder: 'Please input your words.', text: this.text,
          controller:this.controller}).onChange((value) => {
          this.text = value;
        })
        Button('Clear TextInput').onClick(() => {
          this.text = '';
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```
