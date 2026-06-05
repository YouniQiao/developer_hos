---
title: "添加图片区域"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-image
format: md
---


添加图片区域通常用[image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-image)组件来实现，使用的方法和[text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-basic-text)组件类似。

图片资源建议放在js\default\common目录下，common目录需自行创建，详细的目录结构见[目录结构](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-file#目录结构)。代码示例如下：

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
