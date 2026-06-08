---
format: md
title: "应用能否指定使用某一网络来发请求"
original_url: /docs/FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-32
upstream_id: FAQ/faqs-system-development/faqs-network/faqs-network-kit/faqs-network-32
last_sync: 2026-06-07
sync_hash: cdbfbbed
---
**问题现象**

发网络请求时，指定使用Wi-Fi或蜂窝数据。

**解决措施**

应用可以使用[connection.setAppNet()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#connectionsetappnet9-1)接口将应用绑定到指定网络，此时该应用的所有网络请求将使用该网络。若要使用其他网络，需再次通过[connection.setAppNet()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#connectionsetappnet9-1)将应用绑定到其他网络。

**参考链接**

[@ohos.net.connection (网络连接管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection)
