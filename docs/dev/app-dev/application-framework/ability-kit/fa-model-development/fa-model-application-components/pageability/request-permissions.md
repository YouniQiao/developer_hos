---
title: "申请授权"
original_url: /docs/dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/request-permissions
format: md
upstream_id: dev/app-dev/application-framework/ability-kit/fa-model-development/fa-model-application-components/pageability/request-permissions
last_sync: 2026-06-07
sync_hash: db0178ab
---
应用需要获取用户的隐私信息或使用系统能力时，例如获取位置信息、使用相机拍摄照片或录制视频等，需要向用户申请授权。

在开发过程中，开发者首先需要明确涉及的敏感权限，并在config.json中声明这些权限。然后在运行时通过requestPermissionsFromUser接口，以动态弹窗的方式向用户申请授权。

在config.json声明需要的权限，在module下添加"reqPermissions"，并写入对应权限。

例如申请访问日历权限：

1. 需要申请ohos.permission.DISTRIBUTED\_DATASYNC权限，配置方式请参见[声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。
2. 同时需要在应用首次启动时弹窗向用户申请授权，使用方式请参见[向用户申请授权](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization)。
