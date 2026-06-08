---
title: "应用文件概述"
original_url: /docs/dev/app-dev/application-framework/core-file-kit/app-file/app-file-overview
format: md
upstream_id: dev/app-dev/application-framework/core-file-kit/app-file/app-file-overview
last_sync: 2026-06-07
sync_hash: 595bff46
---
应用文件包括应用安装文件、应用资源文件和应用缓存文件，文件所有者是应用。

* 设备上应用所使用及存储的数据，以文件、键值对、数据库等形式保存在一个应用专属的目录内。该专属目录我们称为“应用文件目录”，该目录下所有数据以不同的文件格式存放，这些文件即应用文件。
* “应用文件目录”与部分系统文件（应用运行必需的系统文件）所在的目录共同组成一个集合，该集合称为“[应用沙箱目录](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory)”，代表应用可见的所有目录范围。因此，“应用文件目录”位于“应用沙箱目录”内。
* 系统文件及其目录对应用只读。应用只能保存文件到“[应用文件目录](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory#应用文件目录与应用文件路径)”下，根据目录使用规范和注意事项选择不同的子目录保存数据。

下文将详细介绍应用沙箱、应用文件目录、应用文件访问与管理、应用文件分享等相关内容。
