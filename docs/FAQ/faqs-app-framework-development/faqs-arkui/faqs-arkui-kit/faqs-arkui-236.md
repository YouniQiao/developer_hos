---
format: md
title: "如何正确获取刘海区域的高度，topRect中的取值是height、top还是height+top"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-236
---


通过Window.getWindowAvoidArea()方法获取刘海的高度。在topRect中，top表示刘海屏原点（矩形左上角）距离屏幕顶端的像素值，left表示距屏幕左侧的像素值，width和height分别表示刘海屏所在外包矩形的宽度和高度。根据这些值进行计算，并以实际效果为准。

**参考链接**

[getWindowAvoidArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#getwindowavoidarea9)

[AvoidArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#avoidarea7)

[Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-i#rect7)
