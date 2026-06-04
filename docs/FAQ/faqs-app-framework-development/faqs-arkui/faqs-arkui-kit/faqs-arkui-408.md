---
title: "Navigation组件，调用queryNavDestinationInfo返回undefined，如何正确调用这个接口"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-408
---

queryNavDestinationInfo()接口会从当前组件的父组件开始向上查找，不包括同级组件，查找到第一个NavDestination即返回。如在NavDestination所在的自定义组件中查找会导致返回undefined。

使用说明可参考文档：[queryNavDestinationInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-api#querynavdestinationinfo)。
