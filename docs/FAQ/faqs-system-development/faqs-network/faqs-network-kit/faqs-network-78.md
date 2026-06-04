---
title: "HTTP已有连接复用，如何使自定义DNS立即生效"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-78
---

本地DNS缓存默认超时时间为10分钟，对于HTTP1.1协议，可以通过发起一个超时时间为1ms的请求，当请求超时后会结束所复用的TCP流，再发起的请求将使用自定义DNS规则。
