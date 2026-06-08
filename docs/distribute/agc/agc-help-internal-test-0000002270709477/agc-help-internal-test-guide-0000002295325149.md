---
title: "测试流程"
original_url: /docs/distribute/agc/agc-help-internal-test-0000002270709477/agc-help-internal-test-guide-0000002295325149
format: md
upstream_id: distribute/agc/agc-help-internal-test-0000002270709477/agc-help-internal-test-guide-0000002295325149
last_sync: 2026-06-07
sync_hash: 936b735d
---
![](../img/agc-help-internal-test-guide-0000002295325149_0.png)

* 当前指定设备发布功能仅支持Stage模型开发的HarmonyOS应用，暂不支持元服务。
* 当前指定设备发布功能仅支持企业开发者使用。

您可以将应用上传至您的服务器或者第三方云上，团队成员可以使用授权设备进行下载、安装和测试。具体测试流程如下：

**第一步：****[准备打包所需配置文件](/docs/distribute/agc/agc-help-internal-test-0000002270709477/agc-help-internal-test-prepare-0000002262046566)**

在打包前，您需要为应用进行签名，从而保证应用的完整性和来源的真实性。签名时，需要配置相关信息，您需要提前做好准备。

**第二步：[编译打包应用](/docs/distribute/agc/agc-help-internal-test-0000002270709477/agc-help-internal-test-build-app-0000002295372093)**

把应用编译打包成待测试版本，后续将包推送给团队成员进行测试。

**第三步：[构建Deeplink实现下载应用](/docs/distribute/agc/agc-help-internal-test-0000002270709477/agc-help-internal-test-release-app-0000002260691994)**

将编译的应用包上传至您的服务器或第三方云上，通过Deeplink的方式，使团队成员通过分发页面的下载按钮，下载应用进行测试。

![](../img/agc-help-internal-test-guide-0000002295325149_1.png)

除第三步描述的应用包下载安装方式，指定设备发布还支持[通过HDC命令安装应用包](/docs/dev/app-dev/getting-started/dev-fundamentals/hap-package#调 试)。
