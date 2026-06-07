---
format: md
title: "一个自定义组件内某一时机批量刷新多个@State修饰的状态变量，是否会影响性能"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-333
---


**问题现象**

例如，一个自定义的Component包含20个由@State修饰的变量，每个@State变量都支持值更新操作，批量修改时会调用每个State的更新接口。这种批量更新操作可能引发组件频繁刷新，需要评估其对性能的影响。

**解决措施**

同时更新多个State接口不会导致性能问题，因为每个@State都有更新UI的能力，批量修改不会导致组件反复刷新。框架会在状态变更时合并UI更新请求，在Vsync信号到来时统一处理，因此无论修改多少个@State变量都只会触发一次组件刷新。
