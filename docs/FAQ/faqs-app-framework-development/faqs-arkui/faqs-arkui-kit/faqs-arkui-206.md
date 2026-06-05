---
format: md
title: "如何进行页面横竖屏切换"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-206
---


设置方法：setPreferredOrientation(orientation: Orientation, callback: AsyncCallback\<void\>): void。Orientation取值为AUTO\_ROTATION，表示传感器自动旋转模式。参考代码如下：

```
let orientation = window.Orientation.AUTO_ROTATION;
try{
  windowClass.setPreferredOrientation(orientation, (err) => {
    if(err.code){
      console.error('Failed to set window orientation. Cause: ' + JSON.stringify(err));
      return;
    }
    console.info('Succeeded in setting window orientation.');
  });
}catch (exception) {
  console.error('Failed to set window orientation. Cause: ' + JSON.stringify(exception));
}
```

**参考链接**

[setPreferredOrientation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#setpreferredorientation9)
