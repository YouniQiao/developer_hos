---
format: md
title: "如何设置相机焦距"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-camera-3
---


1. 判断当前摄像头是否为前置摄像头。前置摄像头不支持设置焦距。
2. 通过getZoomRatioRange接口获取设备焦距设置的最大和最小范围。
3. 判断目标焦距参数是否在步骤二获取的范围内，然后通过setZoomRatio接口设置相机焦距。

**参考链接**

[getZoomRatioRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-zoomquery#getzoomratiorange11)、[setZoomRatio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-zoom#setzoomratio11)
