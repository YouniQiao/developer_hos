---
format: md
title: "ohosTest测试文件引用了启动页的导出方法，测试时报错“Load Page Failed: pages/Index”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-test/faqs-app-test-9
upstream_id: FAQ/faqs-deveco-studio/faqs-app-test/faqs-app-test-9
last_sync: 2026-06-07
sync_hash: 4a7744ff
upstream_hash: d268e4de0f2f
---

**问题现象**

在测试文件中引用启动页的导出方法并拉起启动页面所在的Ability时，执行测试会抛出jscrash，错误信息为：“Load Page Failed: pages/Index”。

![](./img/afb9e178.png)**解决措施**

拉起启动页面所在Ability时指定当前模块名称，执行测试，用例正常运行。

![](./img/b4f0896f.png)
