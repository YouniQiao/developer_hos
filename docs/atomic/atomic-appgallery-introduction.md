---
title: "AppGallery Kit简介"
original_url: /docs/dev/atomic-dev/atomic-appgallery-development/atomic-appgallery-introduction
format: md
---


AppGallery Kit（应用市场服务）提供应用市场业务的对外开放能力，可以更好地支持元服务的能力。

使用AppGallery Kit为您的元服务提供以下功能和服务：

**[应用市场更新功能](/docs/dev/atomic-dev/atomic-appgallery-development/atomic-appgallery-update)**：您可以通过本服务，查询元服务是否有可更新的版本。当存在可更新版本时，可为用户显示更新提醒。

**[隐私管理服务：](/docs/dev/app-dev/application-services/store-kit-guide/store-privacy#场景介绍)** 元服务隐私管理服务的开发方式与传统应用隐私管理服务的开发方式相同，详见AppGallery Kit开发指南。（从6.1.0(23)版本开始，新增支持查询隐私链接、撤销同意记录、请求用户同意功能。）

## 约束和限制

### 支持的设备

当前AppGallery Kit的相关能力暂不支持在模拟器上运行。

| 能力 | 支持设备 |
| --- | --- |
| 应用市场更新功能 | 支持Phone、PC/2in1、Tablet、Wearable、TV。 |
| 隐私管理服务 | 支持Phone、PC/2in1、Tablet、TV。 |

### 支持的国家/地区

| 能力 | 支持的国家/地区 |
| --- | --- |
| 应用市场更新功能 | 请参见[支持的国家/地区](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appgallery-support-regions)。 |
| 隐私管理服务 | 只支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。 |
