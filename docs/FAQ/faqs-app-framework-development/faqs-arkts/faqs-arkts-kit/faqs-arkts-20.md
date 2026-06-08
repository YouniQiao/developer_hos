---
format: md
title: "如何生成UUID的字符串"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-20
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-20
last_sync: 2026-06-07
sync_hash: c0c93eb4
---
使用util工具的generateRandomUUID函数可以生成字符串类型的UUID，示例如下：

```
let uuid = util.generateRandomUUID(true);
console.info("RFC 4122 Version 4 UUID:" + uuid); // Output randomly generated UUID
```

**参考链接**

[util.generateRandomUUID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#utilgeneraterandomuuid9)
