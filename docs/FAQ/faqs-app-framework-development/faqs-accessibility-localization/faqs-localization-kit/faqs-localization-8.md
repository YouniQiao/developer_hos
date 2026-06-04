---
title: "数字支持货币分隔符显示吗"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-localization-8
---

可以通过NumberFormat设置数字的显示格式

```
let numberFormat = new Intl.NumberFormat('zh-CN');
console.info(`numfmt: ${numberFormat.format(1000000)}`);
```

**参考链接**

[numberformat使用参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-intl#numberformat)
