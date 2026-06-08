---
format: md
title: "不同类型的Context获取fileDir目录的结果不一致"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-42
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-42
last_sync: 2026-06-07
sync_hash: 366f6e42
---
**问题描述**

不同类型的Context获取fileDir目录的结果存在差异。

1. 使用Application的Context获取的目录是“/data/storage/el2/base/files”。

2. 使用Ability的Context获取的目录是“/data/storage/el2/base/haps/entry/files”。

**问题澄清**

当前设计如下：Application可能包含多个Ability，每个Ability对应沙箱目录下的一个hap路径。

**参考链接**

[应用沙箱目录与应用沙箱路径](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory#应用沙箱目录与应用沙箱路径)
