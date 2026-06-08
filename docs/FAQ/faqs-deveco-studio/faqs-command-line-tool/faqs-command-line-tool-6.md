---
format: md
title: "组件被错误下线后，重新推送包时提示需等待24小时，如何解除该限制"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-6
upstream_id: FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-6
last_sync: 2026-06-07
sync_hash: 562e66de
---
**问题描述**

版本上传时发现版本号错误，已下架并修正版本号。重新上传时提示在规定时间内禁止发布。请问能否恢复或告知规定时间是多久？

**解决方案**

修改ohpm-repo里面的配置文件。将重新上架等待小时数修改为如0.00x，然后执行ohpm install并重启ohpm-repo。但使用此方式时，重新上架的版本号需加1，具体可以参考[配置文件](/docs/tools/ohpm/repo/ide-ohpm-repo-configuration)。
