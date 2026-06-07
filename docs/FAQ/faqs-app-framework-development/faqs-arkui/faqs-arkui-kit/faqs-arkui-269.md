---
format: md
title: "TextInput的visibility属性设置为Hidden或者None之后是否可获焦"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-269
---


设置visibility属性为Hidden后，仍占据布局空间但组件会从页面中消失，因此无法获得焦点。可以通过将textInput的opacity属性设置为0来隐藏组件，不改变布局特性的同时不影响焦点的获取。
