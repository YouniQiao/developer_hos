---
format: md
title: "如何移除页面上Video组件"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-187
---


**问题现象**

ForEach刷新UI，数组中的Video组件移除了，但屏幕上还有之前的Video组件占着屏幕。

**解决措施**

采用规避的方式，在移除Video前调用[exitFullscreen()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video#exitfullscreen)方法退出全屏播放，这样才能正常的移除掉Video组件。

**参考链接**

[Video](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video)
