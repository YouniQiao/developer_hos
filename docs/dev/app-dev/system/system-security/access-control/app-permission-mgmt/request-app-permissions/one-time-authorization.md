---
title: "向用户申请单次授权"
original_url: /docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization
format: md
upstream_id: dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/one-time-authorization
last_sync: 2026-06-07
sync_hash: 8da61780
upstream_hash: 96e6aa09b9e2
---

基于授权最小化原则，防止应用获取和滥用用户数据。针对部分应用敏感权限，在弹窗向用户申请授权时，新增“允许本次使用”的授权选项。

开发者在开发应用时，无需额外配置，仍然调用requestPermissionsFromUser()[向用户申请授权](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)。系统会根据该能力[支持的权限](#支持范围)，弹出对应的弹窗。

授权弹窗如下图所示：

![](./img/1e6df0ea.png)

同时，用户可以在“设置”中修改授权。修改路径：设置 > 隐私 > 权限管理 > 应用 > 目标应用 > 位置信息。

## 支持范围

当前仅支持以下权限，当应用向用户申请这些权限时，弹窗将显示“允许本次使用”的选项；在设置中修改这些权限时，系统将显示“每次询问”的选项。

* 剪切板：["ohos.permission.READ\_PASTEBOARD"](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionread_pasteboard)
* 模糊位置：["ohos.permission.APPROXIMATELY\_LOCATION"](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionapproximately_location)
* 位置：["ohos.permission.LOCATION"](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionlocation)
* 后台位置：["ohos.permission.LOCATION\_IN\_BACKGROUND"](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionlocation_in_background)

## 使用限制

* 当用户点击“允许本次使用”按钮后，应用将获得临时权限。

  + 当应用切换至前台、应用展开卡片且处于当前屏幕可见即[卡片可见](/docs/dev/app-dev/application-framework/form-kit/arkts-ui/arkts-ui-widget-lifecycle)或者[设置后台长时任务](/docs/dev/app-dev/application-framework/background-task-kit/continuous-task)的时候（当前仅支持定位导航长时任务），应用的临时权限会一直保持。

    其他情况下启动计时器，十秒后取消临时权限。若需再次获取，必须重新授予。
  + 当应用切换到后台，开始十秒计时，如果在计时期间，应用处于卡片可见状态或者设置了后台长时任务，计时停止。

    当卡片不再可见或长时任务结束时，再次启动十秒计时，计时结束后，取消临时授权。

    如下图样例所示，小艺建议处于卡片可见状态：

    ![](./img/24330136.png)
* 当用户在权限设置中选择“每次询问”时，应用将获得模糊位置和位置临时权限。取消临时授权的操作与此相同。
