---
format: md
title: "如何在使用子窗口时保持键盘获焦"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-341
---

**解决措施**

可以使用窗口@ohos.window的[keepKeyboardOnFocus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#keepkeyboardonfocus11)接口，该接口可在窗口获焦时保留由其他窗口创建的软键盘，但仅支持系统窗口与应用子窗口，调用此接口前需确保窗口已获得焦点，且仅当软键盘由其他窗口创建时才有效。
