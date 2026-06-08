---
title: "选择待发布软件包"
original_url: /docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-choose-pkg-0000002278981434
format: md
upstream_id: distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-choose-pkg-0000002278981434
last_sync: 2026-06-07
sync_hash: a078a39c
---
从上传的版本中选择需要发布的软件包。

#### 前提条件

已[上传软件包](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-upload-pkg-0000002277983368)，且软件包同时满足如下条件：

* “使用场景”为“测试和正式上架”。
* [合法性检测](/docs/distribute/agc/agc-help-release-app-0000002271695230/agc-help-release-app-upload-pkg-0000002277983368#section161521438134716)结果为“已达标”。

#### 操作步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“APP与元服务”。
2. 选择要发布的应用。
3. 左侧导航选择“应用上架 > 版本信息”下待发布的版本。
4. 进入“软件版本”区域，点击“版本选取”。

   ![](../img/agc-help-release-app-choose-pkg-0000002278981434_0.png)
5. 弹出窗口将展示已上传的、通过合法性检测的软件包，选择待发布的软件包，点击“选取”。

   ![](../img/agc-help-release-app-choose-pkg-0000002278981434_1.png)
6. 当您发布软件包的API Level ≥ 11时，可以设置是否对软件包进行加密。加密的影响、效果详细参见[应用加密](/docs/dev/app-dev/system/system-security/code-protect)。
   * 加密：用户在客户端安装的软件包为加密的，安全性较高。
   * 不加密：用户在客户端安装的软件包为不加密的，应用的启动速率较快。

   ![](../img/agc-help-release-app-choose-pkg-0000002278981434_2.png)

   如果应用的设备仅包含运动手表，则不支持加密。

   ![](../img/agc-help-release-app-choose-pkg-0000002278981434_3.png)
7. 当您的应用正式版本下架之后，再次上架时，选取软件包的版本号VersionCode需高于历史发布过的全网版本号。不满足要求的软件包无法选择，如下图：

   ![](../img/agc-help-release-app-choose-pkg-0000002278981434_4.png)
