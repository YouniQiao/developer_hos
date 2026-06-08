---
format: md
title: "对于@ohos.net.http模块是否需要使用TaskPool处理"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-134
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-134
last_sync: 2026-06-07
sync_hash: 618fb6d3
---
根据业务场景和实现需求决定是否使用TaskPool。如果业务中网络请求较少且后续数据处理耗时较短，则无需使用TaskPool，以避免额外的线程管理和数据传递开销。如果业务中需要处理大量网络请求且数据处理耗时较长，建议使用TaskPool进行网络请求和数据处理，以减轻UI主线程的负载。
