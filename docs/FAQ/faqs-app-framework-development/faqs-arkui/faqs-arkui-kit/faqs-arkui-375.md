---
title: "自定义构建函数Builder与自定义组件component的使用区别以及限制是什么"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-375
---

自定义构建函数（@Builder）和自定义组件的主要区别包括：

* 自定义构建函数（@Builder）更轻量。它作为UI元素抽象的方法，实现和调用比自定义组件更简洁。
* 在自定义组件中，可以定义成员函数和变量，以及组件的生命周期。

  自定义构建函数（@Builder）不支持定义状态变量和生命周期。
* 在自定义组件中，状态变量的改变可直接驱动UI刷新。

  而自定义构建函数（@Builder）默认的按值参数传递方式不支持动态改变组件，当传递的参数为状态变量时，状态变量的改变不会引起@Builder方法内的UI刷新，要实现UI动态刷新需要[按引用传递参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder#按引用传递参数)。
* 在自定义组件中实现插槽功能，需使用@Builder和@BuilderParam。

  具体实现可参考：[@BuilderParam装饰器：引用@Builder函数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builderparam)。
* 在自定义构建函数（@Builder）中使用了自定义组件，每次调用该构建函数时，对应的自定义组件都会重新创建。
