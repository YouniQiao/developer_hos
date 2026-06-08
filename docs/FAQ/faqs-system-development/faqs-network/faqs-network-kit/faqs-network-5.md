---
format: md
title: "如何理解connection.getDefaultNet返回对象netHandle中的netId"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-5
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-5
last_sync: 2026-06-07
sync_hash: a869a73b
---
**问题现象**

netId的值0表示未联网，100表示已联网。

**解决措施**

在正常情况下，netHandle中的netId为0表示未连接网络，大于等于100表示已连接网络。

**参考链接**

[NetHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#nethandle)
