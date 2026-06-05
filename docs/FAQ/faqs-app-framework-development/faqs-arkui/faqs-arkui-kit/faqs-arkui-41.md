---
format: md
title: "使用ForEach&LazyForEach循环渲染时，会出现更改数据源时，界面不刷新的情况。如何解决"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-41
---

ForEach/LazyForEach 刷新原理：如果未提供 keyGenerator，框架会基于 item 和 index 自动生成 key。默认的键值生成函数为 `(item: T, index: number) => index + '\_\_' + JSON.stringify(item)`。修改状态变量数据源时，ForEach 或 LazyForEach 会捕捉到 key 的变化，从而通过重建组件节点来刷新。

**参考链接**

[LazyForEach：数据懒加载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)、[ForEach：循环渲染](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-foreach)
