---
format: md
title: "使用hdc命令安装release HAP包到设备时上报“INSTALL_FAILED_APP_SOURCE_NOT_TRUSTED”错误"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-51
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-51
last_sync: 2026-06-07
sync_hash: 412f46c4
---
**问题现象**

release HAP包用hdc命令安装到手机上时报错："INSTALL\_FAILED\_APP\_SOURCE\_NOT\_TRUSTED"。

**解决措施**

AGC发布的证书仅支持上架使用，不支持本地安装。签名中心只为预置应用申请Profile，不支持本地调试。

**参考链接**

[调试概述](/docs/tools/coding-debug/ide-debug-device)
