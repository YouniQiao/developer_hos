---
format: md
title: "如何在可滚动的容器组件中实现曝光埋点"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-7
---

* 组件可见范围占比可以使用onVisibleAreaChange事件来监听[组件可见区域变化事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-visible-area-change-event)。
* 在 Scroll 组件中，滚动停止时有[onScrollStop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#onscrollstop9)事件，可以获取组件的滑动状态。
* 组件的布局改变可以使用onAreaChange事件来监听[组件区域变化事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-component-area-change-event)。
