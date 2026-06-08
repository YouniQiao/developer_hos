---
displayed_sidebar: appDevSidebar
title: "通过AppGallery Connect配置数字商品"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc
format: md
upstream_id: dev/app-dev/application-services/store-kit-guide/store-iap/store-iap-config-product/store-iap-product-agc
last_sync: 2026-06-07
sync_hash: e53fd00a
---
您可以通过华为数字商品管理系统将您的数字商品信息托管在华为侧，方便您的商品价格国际化管理，助力您的应用进行全球化推广。开发者需要在AppGallery Connect中提前录入商品信息（包括商品ID、商品类型、不同国家的商品价格、商品名称等），在客户端调用购买接口时，只需传入此处配置的商品ID和商品类型，系统会根据用户当前的账号服务地展示对应国家/地区的商品信息（包括商品价格、商品名称等），而无需开发者自行管理商品价格。

* 如果新增非订阅类数字商品，请参见[消耗型/非消耗型/非续期订阅商品](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-manage-0000001959074881/create-digital-products-0000001958955105/new-0000001931836320/non-subscription-0000001959074885)。
* 如果新增订阅类数字商品，请参见[自动续期订阅商品](/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/digital-products-manage-0000001959074881/create-digital-products-0000001958955105/new-0000001931836320/non-subscription-0000001958955109)。
* 如果为数字商品设置促销，请参见[设置促销价格](https://developer.huawei.com/consumer/cn/doc/app/set-0000001931995712)。

![](./img/2f18dea6.png)

在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)完成商品配置后，AppGallery Connect不会跟随汇率实时刷新商品价格，开发者需要定期[手动刷新价格](https://developer.huawei.com/consumer/cn/doc/app/single-0000001931995708)，在商品的价格编辑页面点击刷新并保存，即可根据当时的汇率刷新商品价格。
