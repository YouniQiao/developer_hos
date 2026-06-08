---
title: "如何实现点击输入框时会拉起软键盘，点击Button时软键盘关闭"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-265
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-265
last_sync: 2026-06-07
sync_hash: a03fe917
upstream_hash: 3469c7a4b9f9
---

可以通过调用输入法服务 @kit.IMEKit 的 stopInputSession()方法来隐藏软键盘。示例代码如下：

```
import { inputMethod } from '@kit.IMEKit';

@Entry
@Component
struct ClickBlankHideKeyboard {
  build() {
    Column({ space: 12 }) {
      TextInput({ placeholder: 'Please enter your account' })
        .height(40)
      TextInput({ placeholder: 'Please input a password' })
        .height(40)
      Button('log on').width('100%')
        .onClick(() => {
          // Exit text editing mode
          try {
            this.inputRef.blur();
            // Close the current input session and hide the soft keyboard.
            inputMethod.getController().stopInputSession();
          } catch (err) {
            console.error('Failed to hide keyboard: ' + err);
          }
        })
    }
  }
}
```

参考链接：

[@ohos.inputMethod (输入法框架)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod)
