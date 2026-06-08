---
title: "开发准备"
original_url: /docs/dev/app-dev/system/system-security/enterprise-threat-protection-kit-guide/enterprisethreatprotection-prepare
format: md
upstream_id: dev/app-dev/system/system-security/enterprise-threat-protection-kit-guide/enterprisethreatprotection-prepare
last_sync: 2026-06-07
sync_hash: 4a458f43
---
## 申请资质

在开发应用前，需要在AppGallery Connect中配置项目和应用信息。包括：

* [注册账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)和[企业开发者实名认证](https://developer.huawei.com/consumer/cn/doc/start/edrna-0000001062678489)。
* [创建项目](/docs/distribute/agc/agc-help-project-0000002270709469/agc-help-create-project-0000002242804048)和[创建HarmonyOS应用](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-create-app-0000002247955506)。
* [申请企业应用发布证书](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-enterprise-cert-0000002248177978)和[申请企业应用发布Profile](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-enterprise-profile-0000002248181282)。

## 申请权限

在申请权限前，请保证符合[权限使用的基本原则](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#权限使用的基本原则)。随后在工程模块对应的[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)中"requestPermissions"标签下声明实际所需的开发权限。使用文件访问与处置能力，则应申请[ohos.permission.SCAN\_REMEDIATE\_VIRUS](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps#ohospermissionscan_remediate_virus)权限，此权限仅面向企业杀毒软件开放申请。权限申请代码示例如下：

```
"requestPermissions": [
  {
    "name": "ohos.permission.SCAN_REMEDIATE_VIRUS"
  }
]
```
