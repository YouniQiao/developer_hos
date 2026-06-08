---
displayed_sidebar: appDevSidebar
title: "配置签名和指纹"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-preparations/account-sign-fingerprints
format: md
upstream_id: dev/app-dev/application-services/account-kit-guide/account-preparations/account-sign-fingerprints
last_sync: 2026-06-07
sync_hash: 549b343d
---
请参考“[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)”章节，完成以下操作步骤：

1. 创建项目和工程（如已完成，请跳过此步骤）。
2. 配置签名信息 **（未成年人模式接口支持自动签名，其他接口仅支持手动签名方式）**。
3. 添加公钥指纹。

   ![](./img/b87c5237.png)

   **发布阶段**，请参考[发布流程](/docs/tools/coding-debug/ide-publish-app#section6406135115814)章节，重新配置用于应用发布的签名信息、添加公钥指纹（必选）。

   * 检查是否需要配置公钥指纹：应用仅接入未成年人模式或compatibleSdkVersion>=20不需要配置公钥指纹，其他场景均需配置。

     ![](./img/cf12f879.png)
   * 检查公钥指纹是否配置成功：请在[开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject)中选择对应的项目和应用，检查是否已成功配置该应用的公钥指纹。

     ![](./img/7d8d3a63.png)
   * 公钥指纹最迟会在25小时后生效。

     **（可选）** 配置公钥指纹10分钟后，您可通过修改应用工程中app.json5配置文件的versionCode触发公钥指纹生效。

     **图1** 修改前

     ![](./img/f657488f.png)

     **图2** 修改后

     ![](./img/c313a20c.png)
