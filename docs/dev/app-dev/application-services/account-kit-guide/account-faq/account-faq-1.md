---
displayed_sidebar: appDevSidebar
title: "1001500001 应用指纹证书校验失败的可能原因和解决办法"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-1
format: md
upstream_id: dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-1
last_sync: 2026-06-07
sync_hash: 4227f594
---
**问题现象**

调用接口报错1001500001 应用指纹证书校验失败。

**可能原因**

1. client\_id配置错误（例如：错配成项目的Client ID）。
2. 应用的指纹证书未配置或配置错误。
3. 更换证书后未重新配置证书指纹。
4. 指纹证书添加完成后，公钥指纹仍未生效。
5. 安装调试证书签名包后再安装相同版本的发布证书签名包，或安装发布证书签名包后再安装相同版本的调试证书签名包。
6. 使用自动签名方式签名，未使用手动签名。

**解决措施**

1. 检查module type为entry的模块下的module.json5配置文件中的Client ID是否正确，请参考[配置Client ID](/docs/dev/app-dev/application-services/account-client-id)。

   ![](./img/029a8609.png)
2. 检查AppGallery Connect上是否正确配置应用的指纹证书，详情请见[添加公钥指纹](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-cert-fingerprint-0000002278002933#section7398154810570)。

   ![](./img/ee089260.png)
3. 证书更换后，重新配置更换后的证书指纹。
4. 配置公钥指纹10分钟后，您可通过修改应用工程 > app.json5中的versionCode触发公钥指纹生效。具体修改方法见下图所示。
5. 调试证书切换为发布证书或发布证书切换为调试证书，需要升级应用的版本号（修改应用工程 > app.json5中的versionCode），具体修改方法见下图所示。

   **图1** 修改前

   ![](./img/3d1dffca.png)

   **图2** 修改后

   ![](./img/5d17a858.png)
6. 请使用手动签名方式进行签名，详情请参考[配置签名和指纹](/docs/dev/app-dev/application-services/account-kit-guide/account-preparations/account-sign-fingerprints)章节。
