---
format: md
title: "如何使用正则表达式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-3
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
