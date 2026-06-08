---
title: "app.js"
original_url: /docs/dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-js-file
format: md
upstream_id: dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-js-file
last_sync: 2026-06-07
sync_hash: 128ec678
upstream_hash: ae87ac1a5d85
---

## 应用生命周期

每个应用可以在app.js自定义应用级[生命周期](/docs/dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle)的实现逻辑，以下示例仅在生命周期函数中打印对应日志：

```
// app.js
export default {
    onCreate() {
        console.info('Application onCreate');
    },

    onDestroy() {
        console.info('Application onDestroy');
    },
}
```

## 应用对象6+

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| getApp | Function | 提供getApp()全局方法，可以在自定义js文件中获取app.js中暴露的对象。 |

示例如下：

```
// app.js
export default {
    data: {
        test: "by getApp"
    },
    onCreate() {
        console.info('AceApplication onCreate');
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    },
}
```

```
// test.js 自定义逻辑代码
export var appData = getApp().data;
```
