---
title: "测试流程"
original_url: /docs/distribute/agc/agc-help-apptest-invite-test-0000002258071220/agc-help-apptest-invite-test-guide-0000002258174270
format: md
upstream_id: distribute/agc/agc-help-apptest-invite-test-0000002258071220/agc-help-apptest-invite-test-guide-0000002258174270
last_sync: 2026-06-07
sync_hash: b0c3510b
---
![](../img/agc-help-apptest-invite-test-guide-0000002258174270_0.png)

AppTest邀请测试功能目前为受限开放，若您想要体验使用AppTest发布邀请测试任务，可以通过[在线工单系统](https://developer.huawei.com/consumer/cn/support/feedback/#/?channel=ICS0000)与我们联系。

工单“问题分类”请选择“华为应用分发-应用市场-应用测试”，并在“问题描述”中提供您的开发者名称、开发者ID、应用名称、APP ID。

申请前请您知晓以下事项：

AppTest邀请测试-内部测试群组、公开链接能力暂不支持API对接。

**相比AppGallery邀请测试，AppTest邀请测试具备以下全新能力：**

* 若您同时发布了多个测试版本，AppTest支持测试版本自动升级到最新的测试版本。
* 您可以选择将当前最新在架版本的应用介绍截图展示给测试人员，视觉效果更好，提升用户测试意愿。
* 您可以使用公开链接邀请测试用户，无需拼接邀请码，使用更加方便。
* 您可以将测试版本分发给相应的内部群组，发布后立即上架，高效迭代验证您的应用新版本。
* 您可以将[付费下载应用](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-moneyproducts-0000002217376126)的邀请测试版本分发至AppTest客户端，以供用户测试。
* 您可以查看和管理用户提交的问题与建议，帮助您及时发现应用问题，持续改进服务质量并提升用户体验。
* 若您为企业开发者，首个构建版本需要经过全面审核，后续的构建版本通常只需经过基本审核。构建版本通过审核后即可开始测试。（目前仅面向部分开发者开放）

AppTest邀请测试能力开通后，应用的AppGallery Connect页面将由AppGallery邀请测试体验变为AppTest邀请测试体验。您可以将应用上架至AppTest客户端，然后通过邮件或公开链接的形式，选择特定用户群组来测试您的应用。具体测试流程如下：

**第一步：[创建测试群组](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apptest-create-testgroup-0000002292624417)**

您可以最多创建300个外部测试群组，100个内部测试群组，所有群组的测试用户累计去重总数不超过10000个。当测试任务开始后，邀请范围内的所有测试用户都会收到通知。如果您在邀请测试任务开始后又调整了测试用户范围，新增用户无法收到测试通知，您可以将公开链接分享给该用户，使其参与测试。

**第二步：[创建并发布测试版本](/docs/distribute/agc/agc-help-apptest-invite-test-0000002258071220/agc-help-apptest-release-testapp-0000002292711385)**

您需要将测试版本发布至AppTest客户端。测试版本正式上架后，测试用户即可安装AppTest客户端，获取应用进行测试体验。

**第三步：[邀请用户参与测试](/docs/distribute/agc/agc-help-apptest-invite-test-0000002258071220/agc-help-apptest-invite-testuser-0000002258071224)**

测试版本上架、且到达测试时间后，测试用户将收到邮件通知，可以通过点击其中的链接接受邀请，获取应用体验；未加入测试群组的用户也可以通过获取的公开链接参与测试。

**第四步：[收集用户反馈](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apptest-test-feedback-0000002573893749)**

您可在AGC控制台查看和管理用户在测试过程中反馈的体验问题，进而针对问题进行优化，持续改进服务质量并提升用户体验。

**第五步：（可选）[停止测试](/docs/distribute/agc/agc-help-apptest-invite-test-0000002258071220/agc-help-apptest-stop-test-0000002258174274)**

若您发现测试版本有问题，需要提前结束测试，您可以停止测试。停止后，新用户将无法安装测试版本，已参与测试的用户仍可以继续测试，直至安装时间超过90天。
