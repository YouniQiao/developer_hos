---
format: md
title: "Swiper左滑为什么会显示空白"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-467
---


由于[cachedCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper#cachedcount15)的isShown设为true，预加载节点进行绘制，当缓存数大于swiper实际包含的子组件数量时，会把空白内容渲染在右节点树，导致左滑时出现空白，把cachedCount的isShown设为false可以解决该问题。
