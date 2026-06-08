---
format: md
title: "如何清除输入框焦点"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-296
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-296
last_sync: 2026-06-07
sync_hash: 72e54515
---
可以使用FocusController的[clearFocus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-focuscontroller#clearfocus12)方法来清除焦点并关闭软键盘，示例代码如下：

```
this.getUIContext().getFocusController().clearFocus()
```
