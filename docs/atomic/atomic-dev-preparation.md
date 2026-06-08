---
title: "元服务开发准备"
original_url: /docs/dev/atomic-dev/atomic-service-development/atomic-dev-preparation
format: md
upstream_id: dev/atomic-dev/atomic-service-development/atomic-dev-preparation
last_sync: 2026-06-07
sync_hash: 0807ff86
upstream_hash: 1fc861c36ebf
---

在开始元服务开发前，需要先完成以下准备工作。

## 注册成为开发者

在华为开发者联盟网站上，[注册成为开发者](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)，并完成[实名认证](https://developer.huawei.com/consumer/cn/doc/start/rna-0000001062530373)，从而享受联盟开放的各类能力和服务。

## 创建元服务

在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)（简称AGC）上，参考[创建项目](/docs/distribute/agc/agc-help-project-0000002270709469/agc-help-create-project-0000002242804048)和[创建元服务](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-create-atomic-service-0000002247795706)完成HarmonyOS元服务的创建，从而使用各类服务。

## 安装配置DevEco Studio

安装最新版[DevEco Studio](https://developer.huawei.com/consumer/cn/download/)。具体安装指导请参见[安装DevEco Studio](/docs/tools/coding-debug/ide-software-install)。

## 使用DevEco Studio创建元服务工程

如何在DevEco Studio中创建工程、构建元服务页面、新建元服务卡片等，可参考[开发第一个元服务](/docs/dev/atomic-dev/develop-first-atomic-service/atomic-service-start-overview)。

## 配置签名信息

使用模拟器和预览器调试无需配置签名信息，使用真机设备调试则需要对HAP进行签名。

目前提供了两种签名方式，请根据实际情况选择：

* [自动签名](/docs/tools/coding-debug/ide-signing#section18815157237)：如果您只需要使用一台调试设备，建议使用DevEco Studio提供的自动签名。
* 手动签名：如果您使用多台调试设备或者会在断网情况下调试，您需要在AGC中[申请调试证书](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-debug-cert-0000002283256797)、[注册调试设备](/docs/distribute/agc/agc-help-device-0000002235870042/agc-help-add-device-0000002283189937)、[申请调试Profile](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-debug-profile-0000002248181278)后，再[手动配置签名信息](/docs/tools/coding-debug/ide-signing#section297715173233)。

## （条件必选）添加公钥指纹

当应用需要使用以下开放能力的一种或多种时，为正常调试运行应用，需要预先添加公钥指纹。

* Account Kit（华为账号服务）
* Health Service Kit（运动健康服务）
* IAP Kit（应用内支付服务）
* Map Kit（地图服务）
* Payment Kit（华为支付服务）
* Wallet Kit（钱包服务）

添加公钥指纹的步骤如下。

1. 申请应用证书（.cer）、Profile（.p7b）文件，具体操作请参见[调试HarmonyOS应用/元服务](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-profile-overview-0000002283260125)。
2. 添加公钥指纹，具体操作请参见[配置应用签名证书指纹](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-cert-fingerprint-0000002278002933)。
