---
format: md
title: "Watch开发，ArcSwiper实现右滑退出"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-416
---


通过[onGestureRecognizerJudgeBegin()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin13)函数识别滑动位置，该函数通过比较触摸起始坐标与移动坐标的差值来判断滑动方向，示例代码参考：[示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-arcswiper#示例)。
