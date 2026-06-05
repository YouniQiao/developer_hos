---
format: md
title: "如何保持屏幕常亮"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-196
---

获取窗口实例对象后，调用setWindowKeepScreenOn方法可设置屏幕是否常亮。

```
let isKeepScreenOn: boolean = true;
let windowClass: window.Window = window.findWindow("test");
try {
  windowClass.setWindowKeepScreenOn(isKeepScreenOn, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error('Failed to set the screen to be always on. Cause: ' + JSON.stringify(err));
      return;

    }
    console.info('Succeeded in setting the screen to be always on.');
  });
} catch (exception) {
  console.error('Failed to set the screen to be always on. Cause: ' + JSON.stringify(exception));
}
```

**参考链接**

[setWindowKeepScreenOn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setwindowkeepscreenon9)
