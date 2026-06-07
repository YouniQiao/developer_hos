---
format: md
title: "系统使用了ArkTS作为开发语言，那这些代码在底层的解释运行的环境是自研的还是用的开源的，比如v8、jscore？另外系统也适配了React Native引擎，是不是也是复用的这个运行环境"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-64
---


1. 系统使用方舟编译器及运行时环境执行应用包中的字节码。字节码由方舟编译工具链从ArkTS、TS或JS源码编译生成。

2. 系统适配的React Native引擎目前运行JS源码，使用系统提供的V8引擎。
