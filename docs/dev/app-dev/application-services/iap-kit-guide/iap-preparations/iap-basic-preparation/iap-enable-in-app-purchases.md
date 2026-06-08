---
displayed_sidebar: appDevSidebar
title: "开启和激活应用内购买服务"
original_url: /docs/dev/app-dev/application-services/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-in-app-purchases
format: md
upstream_id: dev/app-dev/application-services/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-enable-in-app-purchases
last_sync: 2026-06-07
sync_hash: adb92fec
---
1. 使用IAP Kit功能前，请确保已开启应用内购买服务（HarmonyOS NEXT）开关。此开关是应用级别的，即所有使用IAP Kit功能的应用均需执行此步骤，具体操作请参见[打开应用内购买服务（HarmonyOS NEXT）API开关](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-serve-0000001931836308/switch-0000001958955097)。
2. 开启应用内购买服务（HarmonyOS NEXT） 开关后，开发者需进一步激活应用内购买服务（HarmonyOS NEXT），具体请参见[激活服务和配置事件通知](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-serve-0000001931836308/parameters-0000001931995692)。

![](./img/24f2729b.png)

发布阶段**必须**[申请发布证书](/docs/distribute/agc/agc-help-cert-0000002270829389/agc-help-release-cert-0000002283336729)、开启和激活“应用内购买服务”后**需要重新**申请[发布Profile文件](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-release-profile-0000002248341090)，并完成[手动签名](/docs/tools/coding-debug/ide-signing#section297715173233)。
