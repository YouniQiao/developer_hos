---
displayed_sidebar: appDevSidebar
title: "开发准备"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-preparations
format: md
---


请先参考“[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)”完成基本准备工作及指纹配置，再继续进行以下开发活动。

## 申请权限

开发者需要根据实际场景申请对应权限，请保证符合[权限使用的基本原则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#权限使用的基本原则)。然后参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)声明对应权限。

| 权限 | 使用场景 |
| --- | --- |
| ohos.permission.GET\_WIFI\_INFO | 使用场景化API获取Wi-Fi信息需要申请该权限（使用5.0.1(13)及以上版本时不需要设置该权限）。 |
| ohos.permission.ACCESS\_BLUETOOTH | 使用场景化API获取蓝牙信息需要申请该权限（使用5.0.1(13)及以上版本时不需要设置该权限）。 |

![](./img/37c5fff4.png)

获取用户程序访问控制权限可参考[程序访问控制管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-abilityaccessctrl#requestpermissionsfromuser9)。
