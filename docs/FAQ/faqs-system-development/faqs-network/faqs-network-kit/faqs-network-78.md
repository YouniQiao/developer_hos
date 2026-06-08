---
format: md
title: "HTTP已有连接复用，如何使自定义DNS立即生效"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-78
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-78
last_sync: 2026-06-07
sync_hash: e49425af
---
本地DNS缓存默认超时时间为10分钟，对于HTTP1.1协议，可以通过发起一个超时时间为1ms的请求，当请求超时后会结束所复用的TCP流，再发起的请求将使用自定义DNS规则。
