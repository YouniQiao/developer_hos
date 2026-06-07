---
title: "Account Kit简介"
original_url: /docs/dev/atomic-dev/atomic-account-development/account-guide-atomic-introduction
format: md
---


## 场景介绍

Account Kit（华为账号服务）提供简单、快速、安全的登录功能，让用户快捷地使用华为账号登录元服务。用户授权后，Account Kit可提供头像昵称、手机号码等信息，帮助元服务更了解用户。

## 能力范围

* [登录](/docs/dev/atomic-dev/atomic-account-development/account-atomic-silent-login)：提供登录服务，让用户使用华为账号快速登录元服务。
* [获取华为账号用户信息](/docs/dev/atomic-dev/account-guide-atomic-get-user-info/account-guide-atomic-get-user-info-overview)：获取用户的基本开放信息，如头像昵称、手机号、收货地址、发票抬头、风险等级。
* [未成年人模式](/docs/dev/atomic-dev/account-guide-atomic-minorsprotection/account-guide-atomic-overview-minorsprotection)：获取未成年人模式的开启状态及年龄段信息以进行内容分级，调整未成年人相关设置时可增加家长验证，还可调用接口引导用户开启或关闭未成年人模式。

## 亮点/特征

**未成年人模式**

元服务可以通过未成年人模式的相关能力帮助家长快速开启未成年人模式，守护未成年人健康使用电子设备。有以下优点：

* 便捷性：统一管控未成年人模式入口，仅需一次设置，元服务联动生效，避免各个元服务内单独开启的繁琐操作，提升用户体验。
* 全面守护：元服务与系统联动，为孩子提供全面的守护措施，如仅允许访问适龄元服务、增强隐私保护、限制设备使用时长等。

## 示例代码

Account Kit提供的[SampleCode示例工程](https://gitcode.com/HarmonyOS_Samples/account-kit-samplecode-clientdemo-for-atomicservice-arkts)体现了Account Kit提供的[登录](/docs/dev/atomic-dev/atomic-account-development/account-atomic-silent-login)、[获取头像昵称](/docs/dev/atomic-dev/account-guide-atomic-get-avatar-nickname/account-guide-atomic-get-avatar-nickname-overview)、[快速验证手机号](/docs/dev/atomic-dev/account-guide-atomic-get-phone/account-guide-atomic-get-phonenumber)、[收货地址](/docs/dev/atomic-dev/account-guide-atomic-get-user-info/account-guide-atomic-choose-address)、[发票抬头](/docs/dev/atomic-dev/account-guide-atomic-get-user-info/account-guide-atomic-select-invoice-title)、[未成年人模式](/docs/dev/atomic-dev/account-guide-atomic-minorsprotection/account-guide-atomic-overview-minorsprotection)等特性，可参考该工程进行元服务的相关内容开发。

## 基本概念

* **OpenID**：应用维度用户标识符，是华为账号用户在元服务的唯一标识。不同元服务（不管是否在同一个开发者账号下）获取到用户的OpenID不同。
* **UnionID**：开发者维度用户标识符，华为账号用户同一开发者账号下的唯一标识。开发者有多个元服务时，同一个开发者账号下的元服务获取到用户的UnionID相同。
* **GroupUnionID**：关联主体账号组维度用户标识符，是华为账号用户在关联主体账号组内的唯一标识。不同开发者账号加入同一关联主体账号组后，其组内所有开发者的元服务获取到用户的GroupUnionID相同。
* **permission**：数据或接口权限，通过该权限判断元服务是否能获取对应数据或调用对应接口。
* **scopes**：scope列表，用于获取用户数据。开发者向华为账号服务申请不同类型用户数据的标识。比如头像昵称（profile）、手机号（phone）等。
* **Authorization Code**：授权码，用户使用华为账号登录成功之后，可通过返回的凭据解析出授权码，通过授权码可获取Access Token、Refresh Token、ID Token等。
* **Access Token**：访问凭证，是访问被权限管控资源的应用级凭证。可使用Access Token调用获取用户信息接口获取用户信息。
* **ID Token**：用户身份凭证，是OIDC（[OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html)）协议相对于OAuth 2.0协议扩展的一个用户身份凭证，包含用户信息。用户使用华为账号登录成功之后，可通过返回的凭据解析出Authorization Code、ID Token等数据。

## 约束与限制

| Account Kit提供的能力 | 支持的设备类型 |
| --- | --- |
| [获取头像昵称](/docs/dev/atomic-dev/account-guide-atomic-get-avatar-nickname/account-guide-atomic-get-avatar-nickname-overview) | Phone、Tablet、PC/2in1 |
| [获取手机号](/docs/dev/atomic-dev/account-guide-atomic-get-phone/account-guide-atomic-get-phone-overview) | Phone、Tablet、PC/2in1 |
| [获取收货地址](/docs/dev/atomic-dev/account-guide-atomic-get-user-info/account-guide-atomic-choose-address) | Phone、Tablet、PC/2in1 |
| [获取发票抬头](/docs/dev/atomic-dev/account-guide-atomic-get-user-info/account-guide-atomic-select-invoice-title) | Phone、Tablet、PC/2in1 |
| [获取风险等级](/docs/dev/atomic-dev/account-guide-atomic-get-user-info/account-guide-atomic-get-risklevel) | Phone、Tablet、PC/2in1 |
| [未成年人模式](/docs/dev/atomic-dev/account-guide-atomic-minorsprotection/account-guide-atomic-overview-minorsprotection) | Phone、Tablet、PC/2in1、TV |

### 支持的国家/地区

请参见[支持的国家/地区](/docs/dev/app-dev/application-services/account-appendix-support-regions)。

## 模拟器支持情况

Account Kit当前支持ARM版本、X86版本的模拟器。

![](./img/ffb33280.png)

支持元服务统一认证服务[authentication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication)的登录和授权能力，其他接口暂不提供维护。
