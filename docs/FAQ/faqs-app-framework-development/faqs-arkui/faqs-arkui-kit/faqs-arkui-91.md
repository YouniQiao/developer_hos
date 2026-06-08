---
format: md
title: "如何实现文本竖向排列"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-91
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-91
last_sync: 2026-06-07
sync_hash: 6fed77d7
upstream_hash: e1c5808f13ee
---

可以通过设置Text组件宽度width与字号一致的方式实现。参考代码如下：

```
@Entry
@Component
struct Index {
  private message: string = 'This document is suitable for beginners in application development. By building a simple application with page jump/return function, quickly understand the main files of the project directory and familiarize yourself with the application development process.';
  build() {
    Column() {
      Text(this.message)
        .fontSize(13)
        .width(13)
    }
  }
}
```
