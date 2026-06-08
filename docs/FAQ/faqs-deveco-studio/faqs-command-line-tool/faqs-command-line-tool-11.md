---
format: md
title: "如何解决ohpm上传har包异常，报错：The publishId is invalid!"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-11
upstream_id: FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-11
last_sync: 2026-06-07
sync_hash: 099d042f
---
1. 请登录ohpm-repo私仓管理页面，重新复制下最新的发布码。获取发布码操作请参考以下文档：[使用命令行工具发布](/docs/tools/ohpm/repo/ide-ohpm-repo-quickstart#zh-cn_topic_0000001792256157_使用命令行工具发布)
2. 重新执行命令“ohpm config set publish\_id发布码”，执行后请检查下.ohpmrc文件中的publish\_id是否同步更新。
3. 重新上传har包。
