---
title: "如何在Index.ets中导出默认导出的对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-145
format: md
---


**问题现象**

```
// src/main/ets/api/AppInterfaces.ets
import { DemoService } from "../service/DemoService";
class AppInterfaces {
  demoService?: DemoService;
}
export default new AppInterfaces() as AppInterfaces;
// Index.ets
export AppInterfaces from './src/main/ets/api/AppInterfaces';
```

报错提示：Cannot find name 'AppInterfaces'. \<ArkTSCheck\>

**解决措施**

```
import { DemoService } from "../service/DemoService";
class AppInterfaces {
  demoService?: DemoService;
}
let test = new AppInterfaces()
export default test;
```
