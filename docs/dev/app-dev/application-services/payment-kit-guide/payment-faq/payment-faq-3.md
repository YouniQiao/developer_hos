---
displayed_sidebar: appDevSidebar
title: "GET请求的bodySign是对谁签名得到的？"
original_url: /docs/dev/app-dev/application-services/payment-kit-guide/payment-faq/payment-faq-3
format: md
upstream_id: dev/app-dev/application-services/payment-kit-guide/payment-faq/payment-faq-3
last_sync: 2026-06-07
sync_hash: 12d398e4
---
GET请求需要对path url进行签名，例如[查询支付订单](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-sys-query-order)的待签名内容是：“/api/v2/aggr/transactions/orders/\{sysTransOrderNo\}”。
