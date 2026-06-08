---
displayed_sidebar: appDevSidebar
title: "请求动画绘制帧率"
original_url: /docs/dev/app-dev/graphics/arkgraphics-2d/displaysync/displaysync-animation
format: md
upstream_id: dev/app-dev/graphics/arkgraphics-2d/displaysync/displaysync-animation
last_sync: 2026-06-07
sync_hash: c9c9b680
---
在应用开发中，[属性动画](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-animatorproperty)和[显式动画](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-explicit-animation)能够使用可选参数[ExpectedFrameRateRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-explicit-animation#expectedframeraterange11)，为不同的动画配置不同的期望绘制帧率。

## 请求属性动画的绘制帧率

定义文本组件的属性动画，请求绘制帧率为60，范例如下：

```
Text('60')
  // ...
  .animation({
    duration: 1200,
    iterations: 10,
    // ...
    expectedFrameRateRange: {
      expected: 60,
      min: 0,
      max: 120,
    },
  })
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/ets/DisplaySync/PropertyAnimationDisplaySync.ets#L66-L91" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PropertyAnimationDisplaySync.ets</a></div>


## 请求显式动画的绘制帧率

定义按钮组件的显式动画，请求绘制帧率为30，范例如下：

```
Button('Start')
  // ...
  .onClick(() => {
    // ...

    this.uiContext?.animateTo({
      duration: 1200,
      iterations: 10,
      // ...
      expectedFrameRateRange: {
        expected: 30,
        min: 0,
        max: 120,
      },
    }, () => {
      // ...
    })

    // ...
  })
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkGraphics2D/DisplaySync/entry/src/main/ets/DisplaySync/PropertyAnimationDisplaySync.ets#L96-L143" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PropertyAnimationDisplaySync.ets</a></div>
