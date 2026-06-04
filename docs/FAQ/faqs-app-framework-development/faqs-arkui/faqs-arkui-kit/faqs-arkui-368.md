---
title: "在display.on('change')监听回调中，无法使用Window实例获取更新后的窗口大小"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-368
---

**解决措施**

旋转涉及[@ohos.window](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-window)和[@ohos.display](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display)两个模块，这两个模块处于不同进程。由于display模块的更新时间（直接宽高互换）早于window模块的更新时间（需等待ArkUI布局完成），因此在display触发变化时获取窗口信息会存在时序问题（窗口信息还未更新完成，此时使用Window实例获取的还是原来的宽高）。应用可以通过display.on('change')接口监听显示设备变化，在callback中通过Display实例获取屏幕的宽度、高度和方向等信息。

**错误示例**

```
// The display is updated first
display.on('change', async (data) => {
  let newDisplay: display.Display = display.getDefaultDisplaySync();
  console.info('Orientation: ' + newDisplay.orientation);
  let windowClass: window.Window = await window.getLastWindow(this.context);
  // After updating the window, the retrieved width and height are still the original ones.
  let windowProperties = windowClass.getWindowProperties();
  console.info('Width: ' + windowProperties.windowRect.width +
    ', height: ' + windowProperties.windowRect.height);
  // Please ensure that you have obtained the relevant Window instance, that is windowClass.
 try {
   windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_CUTOUT);
  } catch (err) {
   hilog.error(DOMAIN, 'testTag', 'Failed. Cause: %{public}s', JSON.stringify(err));
  }
});
```

**正确示例**

```
display.on('change', (data) => {
  console.info('Succeeded in enabling the listener for display changes. Data: ' +
  JSON.stringify(data));
  let newDisplay: display.Display = display.getDefaultDisplaySync();
  console.info('Orientation: ' + newDisplay.orientation + 'width: ' +
  newDisplay.width + ', height: ' + newDisplay.height);
});
```

**参考链接**

[display.on('change')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayonaddremovechange)
