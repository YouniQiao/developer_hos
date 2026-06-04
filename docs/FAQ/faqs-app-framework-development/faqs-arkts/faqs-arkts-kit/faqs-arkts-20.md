---
title: "如何生成UUID的字符串"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-20
---

使用util工具的generateRandomUUID函数可以生成字符串类型的UUID，示例如下：

```
let uuid = util.generateRandomUUID(true);
console.info("RFC 4122 Version 4 UUID:" + uuid); // Output randomly generated UUID
```

**参考链接**

[util.generateRandomUUID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-util#utilgeneraterandomuuid9)
