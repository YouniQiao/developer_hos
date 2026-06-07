---
format: md
title: "当前ArkTS是否采用类Node.js的异步I/O机制"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-132
---


Node.js使用事件循环机制处理异步操作，支持回调函数和Promise。ArkTS使用基于协程的异步I/O机制，I/O事件分发到I/O线程，不阻塞JS线程，支持回调函数、Promise和async/await。
