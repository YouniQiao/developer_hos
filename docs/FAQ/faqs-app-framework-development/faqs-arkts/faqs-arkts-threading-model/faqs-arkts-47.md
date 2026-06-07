---
format: md
title: "是否可以在TaskPool中动态加载模块（HAR、HSP、SO）"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-47
---


TaskPool的动态加载能力与主线程相同。然而，TaskPool线程加载后，由于模块化线程隔离，无法被主线程复用。
