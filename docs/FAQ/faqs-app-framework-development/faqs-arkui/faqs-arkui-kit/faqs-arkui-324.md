---
format: md
title: "WaterFlow、Grid、List这些容器的使用区别是什么"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-324
---


[WaterFlow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-waterflow)适用于高度不固定的多列瀑布流布局。

[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)专为网格布局优化，而[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)的[lanes](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list#lanes9)属性仅提供基础多列支持，也能实现类似网格布局的效果，但是Grid组件对item的拖拽支持更好。

List适用于相同列宽，需要连续，多行呈现的列表布局场景。

| 特性 | Grid | List lanes |
| --- | --- | --- |
| 拖拽支持 | 支持 | 不支持️ |
| 布局优化 | 自动对齐 | 需手动计算 |
