---
format: md
title: "如何实现加载svga动画"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-392
---


**问题描述**

在应用中存在多个页面会使用svga播放图片、动效、动画等。请问HarmonyOS怎么加载svga动画？

**解决措施**

当前HarmonyOS原生API尚未支持svga格式动画的解析，实现加载svga动画可以参考以下方案：

* 先将svga格式转换成[lottie](https://gitcode.com/openharmony-tpc/lottieArkTS)和[@tencent/libpag](https://ohpm.openharmony.cn/#/cn/detail/@tencent%2Flibpag)支持的格式，再通过对应库加载。
* 使用[web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-web)组件提供网页显示的方式来接入，在h5页面中使用相关播放器加载svga动画。

推荐使用svga2lottie等转换工具执行格式转换。
