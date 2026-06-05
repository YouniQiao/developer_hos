---
format: md
title: "多线程调用OH_Drawing_CreateFontCollection崩溃"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkgraphics-2d-3
---

**问题详情：**

多线程调用OH\_Drawing\_TypographyCreate函数时，handler = OH\_Drawing\_CreateTypographyHandler(typoStyle, OH\_Drawing\_CreateFontCollection())会导致崩溃，而单线程调用则不会。

**解决措施：**

该接口不支持多线程并发，但可以在异步线程中调用。
