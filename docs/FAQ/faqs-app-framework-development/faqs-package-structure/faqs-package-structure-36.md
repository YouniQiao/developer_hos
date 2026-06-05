---
format: md
title: "对于HAP包中引用的HSP包是否有数量限制"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-36
---

目前没有明确的数量限制。

但是由于每个加载的[HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/in-app-hsp)都需要占用一定的系统资源，过多的HSP包会对应用的性能造成影响。

如果应用中HSP包数量过多，建议使用单[HAP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hap-package)与多[HAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package)方案，在动态加载场景中使用HSP。
