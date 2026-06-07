---
format: md
title: "A持有B，B引用A的场景会不会导致内存泄漏"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-107
---


方舟虚拟机的内存管理和GC使用根可达算法，该算法能解决循环引用问题，避免A引用B、B引用A的内存泄漏。
