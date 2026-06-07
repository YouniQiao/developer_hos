---
title: "数字商品接入流程"
displayed_sidebar: appDistSidebar
original_url: /docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/business-activation-0000001958955081
format: md
---


# 数字商品接入流程

## 1. 签署协议

《华为数字商品及联运服务协议》是您上架数字商品的必须条件，如需开通数字商品服务，请通过官方渠道[联系我们](`https://developer.huawei.com/consumer/cn/doc/app/service-0000001959074917`)签署。

![](./img/e4fa0e443fee.png)

《华为数字商品及联运服务协议》须线下签署，请[联系华为商务](`https://developer.huawei.com/consumer/cn/doc/app/service-0000001959074917`)。

海外当前仅支持企业开发者签约，不支持个人开发者。

## 2. 配置数字商品服务

当您的应用提供数字商品购买服务时，您需要先[开通商户服务](`https://developer.huawei.com/consumer/cn/doc/app/open-0000001959074873`)，[打开应用内购买服务API开关](`https://developer.huawei.com/consumer/cn/doc/app/switch-0000001958955097`)，最后[激活服务和配置事件通知](`https://developer.huawei.com/consumer/cn/doc/app/parameters-0000001931995692`)。

![](./img/b3785bce2dd8.png)

若您此前尚未签署《华为数字商品及联运服务协议》，则在激活鸿蒙应用内购买服务时，系统会弹窗提示您先联系对接的华为商务了解和签署该协议，签署完成后可开通对应服务，并在后续开展数字商品服务业务。

## 3. 创建&管理数字商品

如果您需要在应用中添加数字商品，可以通过[AppGallery Connect](`https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/`)或通过[API](`https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-purchases`)录入数字商品信息，这样在调用IAP接口时即可直接传入商品ID，无需自行管理数字商品价格。

* 如果新增消耗型/非消耗型数字商品，请参见[消耗型/非消耗型/非续期订阅商品](`https://developer.huawei.com/consumer/cn/doc/app/non-subscription-0000001959074885`)。
* 如果新增自动续期订阅数字商品，请参见[自动续期订阅商品](`https://developer.huawei.com/consumer/cn/doc/app/non-subscription-0000001958955109`)。
* 如果为数字商品设置促销，请参见[设置促销价格](`https://developer.huawei.com/consumer/cn/doc/app/set-0000001931995712`)。

## 4. 接入IAP Kit

IAP Kit为您提供了便捷的应用内支付体验和简便的接入流程。您的HarmonyOS应用可通过使用IAP Kit提供的系统级支付API快速启动IAP收银台，即可实现应用内支付。通过IAP Kit，用户可以在应用内购买各种类型的数字商品（虚拟商品），包括消耗型商品、非消耗型商品、自动续期订阅商品和非续期订阅商品。详细请参见[IAP Kit](`https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-kit-guide`)。

## 5. 沙盒测试

在应用正式版本发布之前，您可以通过设置沙盒测试账户，来模拟真实环境下数字商品的交易过程，在测试期间发现问题可以及时进行修复，这样确保了在应用上架以后可以提供给用户稳定流畅的商品购买体验。整个沙盒测试过程不会产生任何费用。详细请参见[沙盒测试](`https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-sandbox`)。

## 6. 提交数字商品审核

沙盒测试后，便可将[数字商品提交至审核](`https://developer.huawei.com/consumer/cn/doc/app/submit-digital-products-for-review-0000002107823817`)。为应用提交首个数字商品或新增数字商品类型时，必须同时提交新的应用版本。提交数字商品至审核前，请确保其处于“待提交”状态；否则，请先完善所有缺失信息。

## 7. 推广数字商品

应用市场面向已签署《华为数字商品及联运服务协议》并上架数字商品的开发者提供推广服务，助力合作伙伴快速获量增长，实现商业成功。您可以在应用推广引擎上使用数字商品全域推广能力以及一站式管理数字商品服务全流程。 详细请参见[数字商品推广](`https://developer.huawei.com/consumer/cn/doc/app/digital-promotion-0000002509639981`)。

## 8、处理用户退款

[处理退款](`/docs/distribute/app-dist/app-services/intermodal-transport-services-0000001933253576/digital-products-0000002005836556/guidance-document-0000001933094208/refund-management-0000002084083100#section2066554763917`)有两种方式：

1. 您可以使用[AppGallery Connect](`https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/`)-退款管理页面审核退款单，
2. 使用退款管理API返回退款审核结果。

用户申请退款有两种路径：

1. 通过系统设置找到应用订单后申请退款，请参考[用户申请退款操作指引](`/docs/dev/app-dev/application-services/iap-kit-guide/iap-after-sales/iap-refund#section435204014114`)。
2. 在您的应用[集成应用内接入退款入口](`/docs/dev/app-dev/application-services/iap-kit-guide/iap-after-sales/iap-refund#section13850184720182`) ，方便用户可直接在应用内申请退款

## 9、分析数据

在应用上架并且经营一段时间以后，您就可以登录[AppGallery Connect](`https://developer.huawei.com/consumer/cn/service/josp/agc/index.html`)，点击“应用分析”，从而查看到最近的App核心经营指标，通过“数字商品服务分析”报表，查看和分析数字商品的销售和订阅情况，您可以从这些数据中洞察到业务的实际表现情况，最终辅助您做出更好的业务演进策略。详细请参见[分析数据](`https://developer.huawei.com/consumer/cn/doc/app/data-analysis-0000001959074913`)。

## 10、 财务结算

您的应用（含游戏）如果接入华为数字商品服务就会涉及到结算。

您可以在[开发者联盟管理中心](`https://developer.huawei.com/consumer/cn/console/setting/memberAccountDetail`)页面中，点击页面左下角的“我的账户&gt;收益&gt;结算单”，选择您需要的结算单，核对收益信息。

整体结算流程如下：

![](./img/19d6f8e64f30.png "点击放大")

具体细节请参考[财务结算](`https://developer.huawei.com/consumer/cn/doc/app/financial-settlement-0000001931995732`)。