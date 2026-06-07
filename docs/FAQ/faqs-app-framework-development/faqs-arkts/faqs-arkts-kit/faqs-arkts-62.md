---
format: md
title: "如何实现类似Java中的反射方法调用能力"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-62
---


可以通过[动态import](/docs/dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import#动态import实现方案介绍)的方式实现类似反射能力，具体实现可参考以下代码。

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
