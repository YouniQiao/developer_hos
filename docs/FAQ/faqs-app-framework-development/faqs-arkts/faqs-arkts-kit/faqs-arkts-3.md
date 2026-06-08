---
format: md
title: "如何使用正则表达式"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-3
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-3
last_sync: 2026-06-07
sync_hash: a0f5b7a8
---
首先使用new RegExp()定义一个正则表达式：

```
const reg = new RegExp('ba');
```

然后，通过test() 方法检测字符串是否匹配，如果字符串中有匹配的值返回true，否则返回false：

```
const res = reg.test('bar');
console.info('result', res);
```
