---
format: md
title: "如何处理父子组件间的事件传递，例如，如何解决滑动冲突"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-40
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-40
last_sync: 2026-06-07
sync_hash: 93e5b83d
---
1. 系统基于触摸测试收集需响应事件的控件，测试顺序从父组件到子组件。后续手势识别和竞争基于hitTest结果。

2. 应用可改变组件上 hitTestBehavior 的值，以修改系统对其的 hitTest 结果。

3. 通过自定义事件和手势判定能力，可细化手势识别与竞争结果的干预。

**参考链接**

[触摸测试控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-hit-test-behavior)、[自定义事件分发](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-on-child-touch-test)、[自定义手势判定](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-customize-judge)
