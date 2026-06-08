---
title: "如何监听屏幕旋转"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-66
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-66
last_sync: 2026-06-07
sync_hash: acc2e99f
---
可以使用媒体查询接口监听屏幕旋转。参考代码如下：

```
import { mediaquery, UIContext } from '@kit.ArkUI';
const context = AppStorage.get("context") as UIContext;
let listener = context.getMediaQuery().matchMediaSync('(orientation: landscape)'); // Listen for landscape screen events
function onPortrait(mediaQueryResult: mediaquery.MediaQueryResult) {
  if (mediaQueryResult.matches) {
    // do something here
  } else {
    // do something here
  }
}
listener.on('change', onPortrait) // Register callback
listener.off('change', onPortrait) // Unregister callback
```

**参考链接**

[@ohos.mediaquery (媒体查询)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-mediaquery)
