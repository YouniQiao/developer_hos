---

title: "开发准备"
displayed_sidebar: cloudDevSidebar
original_url: /docs/tools/end-cloud/agc-harmonyos-clouddev-prepare
format: md
---


# 开发准备

## 注册华为开发者账号并实名认证

您需要拥有华为开发者账号，才能使用端云一体化开发功能。当前仅支持注册地为中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）的账号。

| 步骤 | 企业 | 个人 |
| --- | --- | --- |
| 1. 注册华为开发者联盟账号 | [注册账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148) | |
| 2. 实名认证 | [企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/ht-edrna-0000001154848578) | [个人开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/ht-idrna-0000001200848143) |

## 搭建开发环境

基于Cloud Foundation Kit（云开发服务）的端云一体化开发需要使用DevEco Studio NEXT Developer Beta1及以上版本，如果您尚未安装或者安装版本过低，请[下载并安装最新版本的DevEco Studio](./ide-software-install)。

![](./img/d5e1ca7a.png)

端云一体化开发工程在初始化时需要从npm仓库下载依赖，如果需要代理才能访问网络，请[配置NPM代理](./ide-environment-config#section197296441787)。

## 在AGC创建项目和HarmonyOS应用/元服务

### 创建项目

项目是您在AppGallery Connect（以下简称AGC）资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。当您的应用需要使用华为服务时，您需要在AGC中[创建您的项目](/docs/distribute/agc/agc-help-project-0000002270709469/agc-help-create-project-0000002242804048).

### 创建HarmonyOS应用/元服务

如果您需要在华为应用市场发布您的HarmonyOS应用/元服务，或者使用AGC提供的各类服务，您需要先在AGC中[创建HarmonyOS应用/元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-0000002235710234).
