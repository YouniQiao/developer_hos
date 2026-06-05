---
format: md
title: "如何监听窗口大小的变化"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-197
---


**问题现象**

监听窗口大小的变化。

**解决措施**

获取窗口实例对象后，可以通过[on('windowSizeChange')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#onwindowsizechange7)方法实现对窗口尺寸大小变化的监听。

需要注意的是，在window侧如果窗口大小没发生变化，此监听不会被触发。如直接旋转180度的情况下，窗口大小并没有改变，此时不会通知回调。在这种情况下，应用可以通过监听display.on('change')事件，在callback中通过display接口来获取窗口尺寸大小。

```
try {
  windowClass.on('windowSizeChange', (data) => {
    console.info('Succeeded in enabling the listener for window size changes. Data: ' + JSON.stringify(data));
  });
} catch (exception) {
  console.error('Failed to enable the listener for window size changes. Cause: ' + JSON.stringify(exception));
}
```

**参考链接**

[display.on('add'|'remove'|'change')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#displayonaddremovechange)
