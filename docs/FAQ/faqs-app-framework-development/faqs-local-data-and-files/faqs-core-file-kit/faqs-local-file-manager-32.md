---
format: md
title: "字体管理器中注册自定义字体时字体文件的路径如何填写"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-32
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-32
last_sync: 2026-06-07
sync_hash: 7215102c
---
建议将字体文件放置在rawfile目录中，通过路径/data/storage/el1/bundle/entry/resources/rawfile/进行访问。请注意，放置文件会占用应用安装所需的存储空间，避免放置过大的文件。

**参考链接**

[资源分类与访问](/docs/dev/app-dev/getting-started/resource-access/resource-categories-and-access)
