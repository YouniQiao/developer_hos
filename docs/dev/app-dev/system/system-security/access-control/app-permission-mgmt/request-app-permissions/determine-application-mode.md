---
title: "选择申请权限的方式"
original_url: /docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode
format: md
---


应用访问数据或执行操作时，需评估是否需要相关权限。如需权限，应在应用安装包中申请。

每个权限的等级和[授权方式](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview#授权方式)不同，因此申请权限的方式也不同。申请权限前，开发者需要：

1. 根据API接口中的“需要权限”或“@permission”字段，确认权限名称，通过[权限列表](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions)页面检索确认权限类型。
2. 参考操作路径，申请相应的权限。

根据目标权限的开放范围和授权方式，开发者可以参考以下操作路径申请权限。

## 应用申请权限的方式

| 权限类型 | 授权方式 | 操作路径 |
| --- | --- | --- |
| [开放权限（系统授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all) | system\_grant | [声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions) > 访问接口 |
| [开放权限（用户授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user) | user\_grant | [声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions) > [向用户申请授权](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization) > 访问接口 |
| [受限开放权限（系统授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions) | system\_grant | [申请使用受限权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl) > [声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions) > 访问接口 |
| [受限开放权限（用户授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions) | user\_grant | [申请使用受限权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl) > [声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions) > [向用户申请授权](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization) > 访问接口 |
