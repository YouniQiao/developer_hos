---
format: md
title: "如何使HSP包版本号统一"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-34
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-34
last_sync: 2026-06-07
sync_hash: c2ed8f32
upstream_hash: 51ba1e047019
---

**问题场景**

当多个业务团队各自开发各自的模块时，确保每个团队的HSP版本号一致较为困难。即使初始版本号一致，如果某个团队后续升级了版本号，其他未修改代码的团队也需重新升级版本号并重新打包。

**解决措施**

HSP和宿主HAP一起安装时，校验严格。包名、版本号、sdk版本号、releaseType需一致。可以通过打包工具：[版本归一指令（versionNormalize）](/docs/dev/app-dev/system/packing-tool#版本归一指令versionnormalize)，将多个HAP、HSP的版本统一。

示例：

```
java -jar path\app_packing_tool.jar --mode versionNormalize --input-list 1.hap,2.hsp --version-code 1000001 --version-name 1.0.1 --out-path path\out\
```
