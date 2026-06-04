---
title: "Tabs是否支持懒加载"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-431
---

当SDK版本<=API18时，Tabs组件不支持懒加载，可以通过使用自定义TabBar与Swiper配合LazyForEach实现页面懒加载和释放。示例可参考：[页面懒加载和释放](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例13页面懒加载和释放)。

API19及之后，Tabs组件新增了[cachedMaxCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#cachedmaxcount19)属性，可设置子组件的最大缓存个数和缓存模式。在缓存范围外的子组件会进行释放。示例可参考：[释放Tabs子组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例18释放tabs子组件)**。**
