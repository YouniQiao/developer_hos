---
format: md
title: "聚焦输入框，拉起小艺键盘输入时会重复朗读，比如输入“1”，会读“1 1”"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-accessibility-kit/faqs-accessibility-1
---


在开启屏幕朗读下，在触摸输入时，小艺键盘会发送主动播报事件给屏幕朗读应用，播报事件中对应内容，此时又收到编辑框（TextArea、TextInput、SearchField、RichEditor）文本变化事件，播报输入的上屏内容，从而出现了重复朗读键盘输入内容的现象。
