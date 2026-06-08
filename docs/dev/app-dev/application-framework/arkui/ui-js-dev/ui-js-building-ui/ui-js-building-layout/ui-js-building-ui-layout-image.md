---
title: "添加图片区域"
original_url: /docs/dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image
format: md
upstream_id: dev/app-dev/application-framework/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-image
last_sync: 2026-06-07
sync_hash: e5f1ef20
---
添加图片区域通常用[image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-image)组件来实现，使用的方法和[text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-text)组件类似。

图片资源建议放在js\default\common目录下，common目录需自行创建，详细的目录结构见[目录结构](/docs/dev/app-dev/application-framework/arkui/ui-js-dev/js-framework-overview/js-framework-file#目录结构)。代码示例如下：

```
<!-- xxx.hml -->
<image class="img" src="{{middleImage}}"></image>
```

```
/* xxx.css */
.img {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 385px;
}
```

```
// xxx.js
export default {
  data: {
    middleImage: '/common/ice.png',
  },
}
```
