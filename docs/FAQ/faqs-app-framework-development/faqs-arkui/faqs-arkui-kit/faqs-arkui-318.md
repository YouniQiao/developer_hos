---
format: md
title: "RelativeContainer组件height设置为auto，子组件以容器作为锚点，为什么auto不生效"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-318
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-318
last_sync: 2026-06-07
sync_hash: ce84732a
---
由于子组件布局需要先确定容器高度，而容器高度又依赖子组件布局结果，形成循环依赖导致必须进行二次布局。因为此时子组件的布局是相对于容器的垂直方向，而父组件的布局又需要依赖子组件布局后的结果再次进行布局。

**参考链接：**

[示例3（设置容器大小自适应内容）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-relativecontainer#示例3设置容器大小自适应内容)
