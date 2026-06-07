---
displayed_sidebar: appDevSidebar
title: "发放数字商品权益"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-iap/store-iap-distribute/store-iap-distribute-delivering
format: md
---


## 场景介绍

* 消耗型商品

  若应用提供消耗型商品，需要按照[确保权益发放处理](#消耗型非消耗型商品)消耗型商品的权益发放。
* 非消耗型商品

  若应用提供非消耗型商品，且为单机应用，则需要按照[单机应用权益发放](#单机应用权益发放)（非消耗型商品）处理非消耗型商品的权益发放。其他场景建议按照消耗型/非消耗型商品的[确保权益发放处理](#消耗型非消耗型商品)。
* 自动续期订阅商品

  若应用为非单机应用，则建议按照[确保权益发放处理](#自动续期订阅商品)自动续期订阅商品的权益发放。若为单机应用，则需要按照[单机应用权益发放](#单机应用权益发放)（自动续期订阅商品）处理自动续期订阅商品的权益发放。
* 非续期订阅商品

  若应用提供非续期订阅商品，需要按照[确保权益发放处理](#非续期订阅商品)非续期订阅商品的权益发放。

## 业务流程及开发步骤

### 消耗型/非消耗型商品

详细开发流程请参考[消耗型/非消耗型商品权益发放](/docs/dev/app-dev/application-services/iap-delivering-products)。

### 自动续期订阅商品

详细开发流程请参考[自动续期订阅商品权益发放](/docs/dev/app-dev/application-services/iap-delivering-subscriptions)。

### 非续期订阅商品

详细开发流程请参考[非续期订阅商品权益发放](/docs/dev/app-dev/application-services/iap-kit-guide/iap-purchases/iap-nonrenewable/iap-delivering-nonrenewable)。

## 单机应用权益发放

### 非消耗型商品

详细开发流程请参考[单机应用权益发放](/docs/dev/app-dev/application-services/iap-delivering-products#单机应用权益发放非消耗型商品)（非消耗型）。

### 自动续期订阅商品

详细开发流程请参考[单机应用权益发放](/docs/dev/app-dev/application-services/iap-delivering-subscriptions#对生效中的订阅发放权益)（自动续期订阅型）。
