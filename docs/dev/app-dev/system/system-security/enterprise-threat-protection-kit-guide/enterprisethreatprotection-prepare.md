---
title: "开发准备"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisethreatprotection-prepare
format: md
---


## 申请资质

在开发应用前，需要在AppGallery Connect中配置项目和应用信息。包括：

* [注册账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)和[企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489)。
* [创建项目](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-project-0000002242804048)和[创建HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506)。
* [申请企业应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978)和[申请企业应用发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-profile-0000002248181282)。

## 申请权限

在申请权限前，请保证符合[权限使用的基本原则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限使用的基本原则)。随后在工程模块对应的[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中"requestPermissions"标签下声明实际所需的开发权限。使用文件访问与处置能力，则应申请[ohos.permission.SCAN\_REMEDIATE\_VIRUS](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-enterprise-apps#ohospermissionscan_remediate_virus)权限，此权限仅面向企业杀毒软件开放申请。权限申请代码示例如下：

```
"requestPermissions": [
  {
    "name": "ohos.permission.SCAN_REMEDIATE_VIRUS"
  }
]
```
