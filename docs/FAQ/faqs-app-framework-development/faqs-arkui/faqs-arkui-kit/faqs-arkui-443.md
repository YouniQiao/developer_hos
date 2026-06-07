---
format: md
title: "Scroll内容区的高度小于组件高度，是否无法滑动"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-443
---


[scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件可以通过[scrollable](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scrollable)接口设置滚动方向，默认情况下(alwaysEnabled为false)，当内容尺寸不大于容器尺寸时无法滚动，当滚动方向设置为Vertical时，需要内容的高度大于scroll组件的高度才可以滚动；当滚动方向设置为Horizontal时，需要内容的宽度大于scroll组件的宽度才可以滚动。此外，如果将Scroll的[EdgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#edgeeffect)的alwaysEnabled属性设置为true时，内容小于组件大小也可以滚动。

**参考链接**

[EdgeEffectOptions对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scrollable-common#nestedscrolloptions10对象说明)

[设置alwaysEnabled属性为true示例代码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#示例8单边边缘效果)
