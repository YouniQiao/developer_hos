---
format: md
title: "如何给Swiper组件添加节流，控制Swiper的切换频率"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-440
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-440
last_sync: 2026-06-07
sync_hash: 1edd7a48
---
**问题描述**

Swiper组件可以添加节流么，快速滑动的话容易造成页面卡顿，请问如何添加节流控制Swiper的切换频率？

**解决措施**

在快速滑动时，在每次松手时都会触发onAnimationEnd，此时可以识别目标index，可以设置[onContentWillScroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#oncontentwillscroll15)中拦截的index，控制Swiper无法滑动，实现节流，在一段时间后，取消拦截，需在节流期间忽略所有滑动事件，避免队列堆积。
