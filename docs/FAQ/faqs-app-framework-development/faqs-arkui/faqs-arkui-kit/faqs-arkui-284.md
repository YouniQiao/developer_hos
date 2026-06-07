---
format: md
title: "struct和class的区别是什么"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-284
---


在ArkUI框架中，struct只在自定义组件中使用，@Component装饰的struct构成的自定义组件实例，与class生成的实例具有不同的类型特性。如果开发者需要使用组件作为参数在组件之间传递，可以使用[自定义占位节点](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-place-holder)。
