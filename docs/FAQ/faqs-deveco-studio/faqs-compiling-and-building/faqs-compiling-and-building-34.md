---
format: md
title: "执行sync过程中修改Hvigor及plugin版本导致build init"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-34
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-34
last_sync: 2026-06-07
sync_hash: b20bc12e
---
**问题现象**

在配置Hvigor和hvigor-ohos-plugin的版本号后，点击Sync。如果之后再次修改了版本号，会导致重复下载引发版本冲突，表现为build init报错及日志刷屏。

![](./img/b51c1fdf.png)

**解决措施**

该问题源于在执行build init下载Hvigor时修改了Hvigor版本。随后在执行Hvigor.js时，由于依赖发生变化，导致第二次下载新版本，从而引发不兼容问题。建议在执行 Sync 并下载Hvigor时不要修改Hvigor版本。

点击**File > Sync and Refresh Project**，重新执行Sync。
