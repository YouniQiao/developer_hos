---
format: md
title: "如何解决ohpm上传har包异常，报错：The publishId is invalid!"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-command-line-tool-11
---


1. 请登录ohpm-repo私仓管理页面，重新复制下最新的发布码。获取发布码操作请参考以下文档：[使用命令行工具发布](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-quickstart#zh-cn_topic_0000001792256157_使用命令行工具发布)
2. 重新执行命令“ohpm config set publish\_id发布码”，执行后请检查下.ohpmrc文件中的publish\_id是否同步更新。
3. 重新上传har包。
