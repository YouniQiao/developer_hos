---
displayed_sidebar: appDevSidebar
title: "开发准备"
original_url: /docs/dev/app-dev/application-services/scenario-fusion-preparations
format: md
upstream_id: dev/app-dev/application-services/scenario-fusion-preparations
last_sync: 2026-06-07
sync_hash: c2ed9064
---
请先参考“[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)”完成基本准备工作及指纹配置，再继续进行以下开发活动。

## 申请权限

开发者需要根据实际场景申请对应权限，请保证符合[权限使用的基本原则](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)声明对应权限。

| 权限 | 使用场景 |
| --- | --- |
| ohos.permission.GET\_WIFI\_INFO | 使用场景化API获取Wi-Fi信息需要申请该权限（使用5.0.1(13)及以上版本时不需要设置该权限）。 |
| ohos.permission.ACCESS\_BLUETOOTH | 使用场景化API获取蓝牙信息需要申请该权限（使用5.0.1(13)及以上版本时不需要设置该权限）。 |

![](./img/37c5fff4.png)

获取用户程序访问控制权限可参考[程序访问控制管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)。
