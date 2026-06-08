---
format: md
title: "多线程调用OH_Drawing_CreateFontCollection崩溃"
original_url: /docs/FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-3
upstream_id: FAQ/faqs-graphic-development/faqs-arkgraphics2d-kit/faqs-arkgraphics-2d-3
last_sync: 2026-06-07
sync_hash: bcedd491
---
**问题详情：**

多线程调用OH\_Drawing\_TypographyCreate函数时，handler = OH\_Drawing\_CreateTypographyHandler(typoStyle, OH\_Drawing\_CreateFontCollection())会导致崩溃，而单线程调用则不会。

**解决措施：**

该接口不支持多线程并发，但可以在异步线程中调用。
