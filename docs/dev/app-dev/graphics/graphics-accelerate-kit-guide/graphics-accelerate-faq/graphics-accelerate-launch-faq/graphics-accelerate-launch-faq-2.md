---
displayed_sidebar: appDevSidebar
title: "游戏上划退出后，场景切换阶段存在振动，应该如何避免"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-launch-faq/graphics-accelerate-launch-faq-2
format: md
---


开发步骤如下：

1. 通过globalThis定义全局作用域的变量isCacheStatus，在onCreate生命周期函数中赋值false，[isLaunchMirrorEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-launchacceleration#islaunchmirrorenabled)接口返回true时赋值true。
2. 在函数[startVibration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator#vibratorstartvibration9)前增加isCacheStatus校验，若当前处于缓存态，则不进行振动操作。

以团结工程为例，修改如下：

```
// TuanjiePlayerAbilityBase.ets
import { launchAcceleration } from '@kit.GraphicsAccelerateKit';
onCreate(): void {
  globalThis.isCacheStatus = false;
  // ......
}
onWindowStageWillDestroy(): void {
  if (launchAcceleration.isLaunchMirrorEnabled()) {
    globalThis.isCacheStatus = true;
    // ......
  }
}

// TuanjieVibrate.ets
static vibrate(vibrateMs: number) {
  if (globalThis.isCacheStatus) {
    console.info('globalThis.isCacheStatus true, vibration returned.');
    return;
  }
  // ......
}
```
