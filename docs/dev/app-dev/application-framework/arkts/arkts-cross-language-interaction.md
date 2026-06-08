---
title: "ArkTS跨语言交互"
original_url: /docs/dev/app-dev/application-framework/arkts/arkts-cross-language-interaction
format: md
upstream_id: dev/app-dev/application-framework/arkts/arkts-cross-language-interaction
last_sync: 2026-06-07
sync_hash: dbc7eefb
upstream_hash: d3ed36e0221e
---

除了支持使用ArkTS开发外，开发者还可以通过Node-API实现ArkTS与C/C++(Native)的跨语言交互能力。

HarmonyOS的Node-API是基于Node.js社区版本的扩展实现，但与原生Node-API并不完全兼容。

开发者可参考[使用Node-API进行跨语言开发流程](/docs/dev/ndk-dev/use-napi-process)，基于[Node-API支持的数据类型](/docs/dev/ndk-dev/napi-data-types-interfaces#node-api的数据类型)和[Node-API接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/napi)进行Native能力的开发和封装，并通过在ArkTS侧导入Native模块的方式实现跨语言调用。

[Node-API扩展能力接口](/docs/dev/ndk-dev/use-napi-about-extension)提供了增强功能，支持更灵活的ArkTS交互和自定义对象创建。开发者可结合Node-API的扩展能力进行功能扩展，并参考[Node-API开发规范](/docs/dev/ndk-dev/napi-guidelines)和[Node-API常见问题](/docs/dev/ndk-dev/use-napi-faqs)进行跨语言功能开发。
