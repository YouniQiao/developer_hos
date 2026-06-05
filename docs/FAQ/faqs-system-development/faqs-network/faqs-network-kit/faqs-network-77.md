---
format: md
title: "为什么在设置自定义DNS后，HTTP请求还是会走本地DNS缓存"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-77
---


HTTP请求存在连接复用，而连接复用基于域名匹配，如果已经有指向相同域名的连接可以复用，那么请求会直接复用已有连接，导致自定义规则不生效。
