---
format: md
title: "如何实现类似Java中的反射方法调用能力"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-62
---


可以通过[动态import](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-dynamic-import#动态import实现方案介绍)的方式实现类似反射能力，具体实现可参考以下代码。

```
import('./module').then(
  module => {
    const t = module.DataTable.tagName();
  });
```

```
export class DataTable {
  constructor() {
  }
  static tagName(){
    return 'data-table'
  }
}
```
