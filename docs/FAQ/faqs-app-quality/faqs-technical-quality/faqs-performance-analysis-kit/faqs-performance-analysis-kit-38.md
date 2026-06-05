---
format: md
title: "如何解决hdc server和client版本不一致的问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-38
---

**问题现象**

hdc.log 中的报错信息为“Daemon Session Handshake failed”。

![](./img/797ffb87.png "点击放大")

**解决措施**

1. 通过以下命令检查server和client的版本是否匹配。

   hdc checkserver
2. 执行以下命令，终止其他版本的服务器。

   hdc kill
