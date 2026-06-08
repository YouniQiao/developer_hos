---
format: md
title: "从包管理的角度，保证代码安全的措施有哪些"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-4
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-4
last_sync: 2026-06-07
sync_hash: 898d25cf
---
* 编译：编译时，HAR和HSP支持代码混淆。
* 打包：打包时为每个HSP/HAP单独签名，签名后的应用才允许安装。
* 安装：终端设备上的应用市场用于安装和卸载应用，不支持其他安装方式。
* 运行时：提供应用沙箱机制，这是一种以安全防护为目的的隔离机制，防止数据遭受恶意路径穿越访问。

**参考链接**

[混淆加固](/docs/tools/coding-debug/ide-build-obfuscation)，[Stage模型应用程序包结构](/docs/dev/app-dev/getting-started/dev-fundamentals/application-package-structure-stage)，[应用安装卸载与更新开发指导](/docs/dev/app-dev/getting-started/dev-fundamentals/application-package-install-uninstall)，[应用沙箱目录](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory)
