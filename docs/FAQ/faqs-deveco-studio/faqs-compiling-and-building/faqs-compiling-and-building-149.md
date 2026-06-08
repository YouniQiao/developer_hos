---
format: md
title: "编译报错“The 'tag' keyword is not allowed for 'version' at 'xxx/oh-package.json5'”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-149
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-149
last_sync: 2026-06-07
sync_hash: 216bd385
upstream_hash: 96168768f710
---

**错误描述**

oh-package.json5文件中的version字段不能包含tag标签。

**可能原因**

使用parameterFile参数化配置版本号时，oh-package.json5文件中的version字段不能包含tag标签。

![](./img/eda7bd6e.png)

**解决措施**

当oh-package.json5文件中的version字段引用parameterFile时，开发者不应使用tag标签。
