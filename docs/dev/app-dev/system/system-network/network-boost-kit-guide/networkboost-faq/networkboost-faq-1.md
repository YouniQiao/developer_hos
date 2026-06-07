---
title: "在进行多网并发传输时，如何判断当前使用的网络是Wi-Fi还是流量"
original_url: /docs/dev/app-dev/system/system-network/network-boost-kit-guide/networkboost-faq/networkboost-faq-1
format: md
---


请求多网成功后可以获取到多个可用的netHandle，通过[connection.getNetCapabilities()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#connectiongetnetcapabilities)方法查询网络信息，通过[NetBearType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#netbeartype)字段判断网络类型，其中BEARER\_CELLULAR是蜂窝网络，BEARER\_WIFI是Wi-Fi网络。在设计多网并发策略时可以通过网络类型和网络能力调整对应网络通路的网络任务。
