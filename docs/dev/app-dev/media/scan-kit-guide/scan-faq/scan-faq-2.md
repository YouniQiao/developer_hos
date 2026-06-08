---
displayed_sidebar: appDevSidebar
title: "扫码直达跳转失败"
original_url: /docs/dev/app-dev/media/scan-kit-guide/scan-faq/scan-faq-2
format: md
upstream_id: dev/app-dev/media/scan-kit-guide/scan-faq/scan-faq-2
last_sync: 2026-06-07
sync_hash: 15ff7e29
---
**问题现象**

扫码直达跳转失败。

**解决措施**

请检查App Linking配置是否正确：

1. 检查开发者网站服务器配置是否正确。
2. 检查App Linking中网址域名关联是否正确。
3. 检查应用的module.json5文件中域名关联是否正确。
4. 检查应用的签名是否正确，参考[手动签名](/docs/tools/coding-debug/ide-signing#section297715173233)。

详情参考：App Linking的[FAQ](/docs/dev/app-dev/application-services/app-linking-kit-guide/app-linking-startupapp#faq)。
