---
title: "Scroll嵌套外层滚动容器滚动，如何设置nestedScroll，实现Scroll组件先滚动，滚动边缘后触发外层滚动容器滚动"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-444
---

**问题背景**

Scroll外面嵌套一个滚动容器，想要实现Scroll先滚动，达到顶部或者底部之后，外面的滚动容器再滚动，该如何设置nestedScroll。

**解决措施**

针对该交互需求，可采用以下配置方案：

将nestedScroll属性的参数对象设置为[NestedScrollMode.SELF\_FIRST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#nestedscrollmode10)类型实现该效果。

NestedScrollMode.SELF\_FIRST表示自身先滚，滚动到边缘后父组件再滚动。

**参考链接**

[使用nestedScroll属性实现嵌套滚动](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-nested-scrolling#使用nestedscroll属性实现嵌套滚动)
