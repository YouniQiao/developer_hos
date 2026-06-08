---
format: md
title: "如何定义一个具有任意键的对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-141
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-141
last_sync: 2026-06-07
sync_hash: 73510325
upstream_hash: dc31edd6ce02
---

可使用Record类型，有几个属性就对应几个类型参数，参考代码如下：

```
const asd: Record<string, number | string> = {
  'name': 'xc',
  'age': 29
}
```
