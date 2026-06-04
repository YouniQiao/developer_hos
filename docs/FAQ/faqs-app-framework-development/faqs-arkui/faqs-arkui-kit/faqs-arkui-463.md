---
title: "customDialog里面页面跳转后，页面显示在弹窗下面，怎么调整"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-463
---

**解决措施**

当前ArkUI弹出框默认为非页面级弹出框。在页面路由跳转时若未主动调用close方法，弹出框将不会自动关闭。若需实现在跳转页面时覆盖弹出框的场景，可以使用组件导航子页面显示类型的弹窗类型（适用于需要保持导航栈关系的场景）或者页面级弹出框（适用于需要全屏模态覆盖的场景）。

**参考链接**

[页面显示类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navdestination#页面显示类型)

[页面级弹出框](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-embedded-dialog)
