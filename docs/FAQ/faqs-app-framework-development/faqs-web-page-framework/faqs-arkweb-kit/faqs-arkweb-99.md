---
title: "Web使用vh适配网页被缩小"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-99
---

**问题现象**

ArkWeb加载的前端页面中使用vh单位进行网页自适应适配时，页面出现异常缩小。

**可能原因**

ArkWeb组件通过User-Agent中是否含有"Mobile"字段来判断是否开启前端HTML页面中meta标签的viewport属性。当User-Agent中不含有"Mobile"字段时，meta标签中viewport属性默认关闭，由此可能导致网页异常，影响页面布局效果。

**解决措施**

* 若未设置User-Agent，非PC设备默认开启meta标签的viewport属性，使用vh适配网页正常。
* 若设置User-Agent中未包含"Mobile"字段，meta标签中viewport属性默认关闭，需要手动添加"Mobile"字段或者显式设置metaViewport属性为true来主动开启。

参考链接：

[metaViewport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#metaviewport12)属性。

[User-Agent开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-default-useragent#默认user-agent结构)。
