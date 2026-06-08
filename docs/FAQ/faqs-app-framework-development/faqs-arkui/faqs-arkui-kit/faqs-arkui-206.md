---
format: md
title: "如何进行页面横竖屏切换"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-206
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-206
last_sync: 2026-06-07
sync_hash: 9915514b
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
