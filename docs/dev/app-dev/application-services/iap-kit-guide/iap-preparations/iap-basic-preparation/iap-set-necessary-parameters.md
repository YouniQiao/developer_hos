---
displayed_sidebar: appDevSidebar
title: "（可选）配置应用内购买服务参数"
original_url: /docs/dev/app-dev/application-services/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters
format: md
upstream_id: dev/app-dev/application-services/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters
last_sync: 2026-06-07
sync_hash: dc9c62e6
---
## 配置订单/订阅通知接收地址

IAP服务器支持[服务端关键事件通知](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-key-event-notifications)的能力。用户购买商品后，IAP服务器会在订单（消耗型/非消耗型商品）和订阅场景的某些关键事件发生时发送通知至开发者配置的订单/订阅通知接收地址，具体的通知接收地址配置请参见[激活服务和配置事件通知](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-serve-0000001931836308/parameters-0000001931995692)。

## 配置密钥

IAP服务器要求对每个服务端API请求进行JSON Web Token（JWT）授权。开发者可以使用从[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)下载的API密钥对Token签名生成JWT，授权发起的服务端API请求。

开发者可参见[创建密钥](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-serve-0000001931836308/key-management-0000001931836312/key-0000001959074877)、[下载密钥](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-serve-0000001931836308/key-management-0000001931836312/download-0000001958955101)、[撤销密钥](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-serve-0000001931836308/key-management-0000001931836312/cancel-0000001931995696)管理服务端密钥。
