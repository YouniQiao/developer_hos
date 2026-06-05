---
format: md
title: "全屏模态转场和半模态转场中是否可以实现避让软键盘"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-453
---

全屏模态转场不支持软键盘避让功能，半模态可以通过设置keyboardAvoidMode属性来实现软键盘的避让，由于全屏模态转场会占据整个屏幕空间，系统默认不处理软键盘避让；而半模态转场可通过keyboardAvoidMode属性动态调整布局位置，可参考：[SheetKeyboardAvoidMode枚举说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-sheet-transition#sheetkeyboardavoidmode13枚举说明)。
