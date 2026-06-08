---
format: md
title: "编译报错“Method setProperty validate failed in hvigorfile.ts”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-139
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-139
last_sync: 2026-06-07
sync_hash: 341e9587
---
**错误描述**

setProperty方法在hvigorfile.ts中校验失败。

**可能****原因**

在hvigorfile.ts中使用setProperty方法时，传入的参数未通过 Schema 校验。

![](./img/b6f95e97.png)

**解决措施**

请根据报错提示信息，修改hvigorfile.ts文件中的配置字段。
