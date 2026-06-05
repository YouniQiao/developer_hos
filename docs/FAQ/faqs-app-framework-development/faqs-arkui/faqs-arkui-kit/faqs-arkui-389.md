---
format: md
title: "Router路由跳转页面失败，可能有哪些原因"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-389
---

**1.har包中的page，未使用命名路由跳转**

HAR包中不支持在配置文件中声明pages页面，但是可以包含page并通过命名路由跳转，可参考：[命名路由](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-routing#命名路由)。

**2.import导入问题**

检查是否正确import目标页面，可以参考[命名路由](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-routing#命名路由)的配置进行排查。
