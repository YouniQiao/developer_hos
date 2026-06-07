---
format: md
title: "如何查看ArkCompiler出现Error日志时，具体的异常调用栈信息"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-29
---


Native抛异常，如需查看backtrace，运行以下命令。

打开异常栈：

```
hdc shell param set persist.ark.properties 0x125c
hdc shell reboot
```

恢复默认值：

```
hdc shell param set persist.ark.properties 0x105c
hdc shell reboot
```
