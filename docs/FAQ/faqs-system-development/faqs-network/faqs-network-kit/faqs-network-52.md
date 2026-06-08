---
format: md
title: "request和requestInStream的使用边界问题"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-52
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-52
last_sync: 2026-06-07
sync_hash: 261e425d
---
request和requestInStream的使用区别在于：request接口适用于数据量不超过5MB的场景，而requestInStream适用于响应数据量大于5MB的场景。
