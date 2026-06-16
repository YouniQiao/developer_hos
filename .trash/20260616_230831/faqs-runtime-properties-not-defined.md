---
title: "自定义组件未定义properties属性，传参为空"
original_url: /docs/dev/atomic-dev/ascf/faqs-ascf-runtime/faqs-runtime-properties-not-defined
format: md
upstream_id: dev/atomic-dev/ascf/faqs-ascf-runtime/faqs-runtime-properties-not-defined
last_sync: 2026-06-07
sync_hash: 00efd595
upstream_hash: d6430da1b1e9
---

**问题现象**

当开发者未定义properties属性时，在attached中打印的数据将不会包含父组件传递的属性。

问题样例如下所示。

```
Component({
  data: {
    id: 100,
  },
  lifetimes: {
    attached () {
      console.info('Component', this.properties)
    },
    detached () {
      console.info('[Component] detached');
    }
  },
});
```

**解决措施**

开发者在自定义组件时，需在properties中添加相应的属性名称。

```
properties:{
  compName: {
    type: String,
    value: ''
  },
},
```
