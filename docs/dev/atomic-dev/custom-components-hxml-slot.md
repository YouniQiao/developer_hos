---
title: "组件 hxml 的 slot"
original_url: /docs/dev/atomic-dev/ascf/custom-components-overview/custom-components-hxml-slot
format: md
upstream_id: dev/atomic-dev/ascf/custom-components-overview/custom-components-hxml-slot
last_sync: 2026-06-07
sync_hash: 2bdfc0d2
upstream_hash: 4d70b353c446
---

在组件的 hxml 中可以使用 slot 插槽，来传递组件使用者提供的子节点内容。

当定义多个 slot 时需要以不同的 name 来区分。

```
<!-- 组件模板 -->
<view class="custom">
  <slot name="header"></slot>
  <view>这里是组件的内部细节</view>
  <slot name="footer"></slot>
</view>
```

使用时，用 slot 属性来将节点插入到不同的 slot 上。

```
<!-- 引用组件的页面模板 -->
<view>
  <my-component>
    <!-- 这部分内容将被放置在组件 <slot name="header"> 的位置上 -->
    <view slot="header">这里是插入到组件slot name="header"中的内容</view>
    <!-- 这部分内容将被放置在组件 <slot name="footer"> 的位置上 -->
    <view slot="footer">这里是插入到组件slot name="footer"中的内容</view>
  </my-component>
</view>
```
