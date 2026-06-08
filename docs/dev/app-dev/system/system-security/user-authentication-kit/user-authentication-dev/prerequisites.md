---
title: "开发准备"
original_url: /docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/prerequisites
format: md
upstream_id: dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/prerequisites
last_sync: 2026-06-07
sync_hash: 3b632e1b
---
应用在开发用户身份认证功能时，需要先了解以下流程，并根据实际需求参考对应指导开发。

* [查询设备支持的用户身份认证能力](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/obtain-supported-authentication-capabilities)。
* [发起身份认证请求，获取身份认证结果](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/start-authentication)。
* 校验和使用认证结果：请参考[通用密钥库二次认证密钥访问控制](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview)。
* （可选）[认证过程中取消认证](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication)。
* （可选）[切换自定义认证](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication)。

## 申请权限

在开发具备用户身份认证的应用前，需要先申请权限ohos.permission.ACCESS\_BIOMETRIC，应用才能使用生物特征识别能力（如人脸、指纹）进行身份认证。

该权限授权方式为system\_grant（系统授权），开发者只需要在module.json5配置文件的requestPermissions标签中声明权限，即可获取系统授权。具体声明指导请参考[申请应用权限-声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。
