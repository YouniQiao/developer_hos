---
title: "应用权限列表"
original_url: /docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions
format: md
---


根据权限的开放范围和授权方式不同，申请对应权限的方式也不同。

系统当前存在以下权限列表，开发者可根据实际需求进行检索，并确定对应权限的申请方式。

* [开放权限（系统授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all)

  所有应用可申请。应用申请了此类权限后，系统将在用户安装应用时，自动把相应权限授予给应用。
* [开放权限（用户授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user)

  所有应用可申请。应用申请了此类权限后，还需要在应用动态运行时，通过发送弹窗的方式请求用户授权。
* [受限开放权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions)

  面向普通应用开放的system\_basic权限。
* [企业类应用可用权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps)

  仅面向企业普通应用、MDM应用开放。分发类型（app-distribution-type）为enterprise\_normal（企业普通应用）、enterprise\_mdm（MDM应用）的应用可申请。应用在申请时，需确认其授权方式，按照合适的方式申请。
* [MDM应用可用权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps)

  仅[MDM](/docs/dev/app-dev/system/system-basicfun/mdm-kit/mdm-kit-intro)应用可申请。应用在申请时，需确认其授权方式，按照合适的方式申请。

* **[开放权限（系统授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all)**
* **[开放权限（用户授权）](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user)**
* **[受限开放权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions)**
* **[企业类应用可用权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-enterprise-apps)**
* **[仅MDM应用可用权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-mdm-apps)**
