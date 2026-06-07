---
format: md
title: "Navigation如何在自定义组件之间传递NavPathStack实例"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-422
---


* 方式一：通过@Provide和@Consume装饰器，将NavPathStack实例传递给子页面。
* 方式二：子页面通过[OnReady](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#onready11)回调获取。
* 方式三：通过全局的AppStorage接口设置获取。
* 方式四：通过自定义组件查询接口获取，参考[queryNavigationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-api#querynavigationinfo12)。
