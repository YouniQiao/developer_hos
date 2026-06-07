---
displayed_sidebar: appDevSidebar
title: "开发准备"
original_url: /docs/dev/app-dev/application-services/call-preparations
format: md
---


在开通应用内通话服务之前，请先参考“[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)”完成基本准备工作，再继续进行以下开发活动。

## 开通Push Kit（推送服务）

如[与相关Kit的关系](/docs/dev/app-dev/application-services/call-kit-guide/call-introduction#与相关kit的关系)所述，开发者在开通Call Service Kit之前，需要开通Push Kit（推送服务），开通方法详见[开通推送服务](/docs/dev/app-dev/application-services/push-kit-guide/push-preparations/push-config-setting)。

## 申请权限

开发者需要根据实际场景申请对应权限，具体申请方式请参见[声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。

| 权限 | 使用场景 | 备注 |
| --- | --- | --- |
| [ohos.permission.MICROPHONE](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissionmicrophone) | 用于在语音通话中，使用麦克风。 | 必须申请。 |
| [ohos.permission.CAMERA](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all-user#ohospermissioncamera) | 用于在视频通话中，使用相机。 | 如果应用支持视频通话业务，则需要申请。 |

## 示例代码

该指南涉及到的示例代码均为片段，全量示例代码请参考：[Samplecode](https://gitcode.com/harmonyos_samples/callkit-samplecode-voipdemo-arkts)。
