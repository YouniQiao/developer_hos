---
format: md
title: "是否支持对页面等ArkUI组件相关元素进行插桩"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-378
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-378
last_sync: 2026-06-07
sync_hash: 43e9da98
---
ArkUI相关的接口在编译时会进行转换，开发态使用的对象或方法在运行时可能不存在。由于ArkUI组件在编译时会被转换为不同形态，导致运行时无法定位原始声明，因此，Aspect类提供的插桩和替换接口不适用于ArkUI组件相关元素。
