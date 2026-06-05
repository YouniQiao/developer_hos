---
format: md
title: "如何实现文本竖向排列"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-91
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
