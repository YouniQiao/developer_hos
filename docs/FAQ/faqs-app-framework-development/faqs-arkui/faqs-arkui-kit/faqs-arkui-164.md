---
format: md
title: "如何获取router.back传递的参数"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-164
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-164
last_sync: 2026-06-07
sync_hash: 2a81abcd
---
在 onPageShow 回调方法中使用 Router模块的getParams方法来获取传递过来的参数。参考代码如下：

```
class InfoTmp {
  age: number = 0
}

class RouTmp {
  id: object = () => {
  }
  info: InfoTmp = new InfoTmp()
}

const context = AppStorage.get("context") as UIContext;
const params: RouTmp = context.getRouter().getParams() as RouTmp; // Get the parameter object passed
const id: object = params.id // Get the value of the id property
const age: number = params.info.age // Get the value of the age property
```

**参考链接**

[页面跳转](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing#页面跳转)
