---
displayed_sidebar: appDevSidebar
title: "开发准备"
original_url: /docs/dev/app-dev/application-services/development-preparation
format: md
---


## 申请权限

应用在使用Ads Kit能力前，需要检查是否已经获取对应权限。如未获得授权，需要声明对应权限。

Ads Kit所需的权限有：

* ohos.permission.INTERNET：用于请求和展示广告、回传竞价结果。
* ohos.permission.APP\_TRACKING\_CONSENT：用于获取开放匿名设备标识符。

在模块的module.json5中配置所需申请的权限，其中跨应用关联权限[ohos.permission.APP\_TRACKING\_CONSENT](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionapp_tracking_consent)为user\_grant权限，reason和abilities标签必填，配置方式参见[requestPermissions标签说明](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions#在配置文件中声明权限)。

示例代码如下所示：

```
{
  "module": {
    "requestPermissions": [
      {
        "name": "ohos.permission.APP_TRACKING_CONSENT",
        "reason": "$string:reason",
        "usedScene": {
          "abilities": [
            "EntryAbility"
          ],
          "when": "inuse"
        }
      },
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
  }
}
```
