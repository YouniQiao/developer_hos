---
title: "应用测试"
displayed_sidebar: appDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/app/joint-operation-test-0000002049101240
---

# 应用测试

在应用测试阶段，开发者需测试[账号登录](#section4777116172014)、[商品支付](#section332162152011)、游戏功能等场景。

## 账号登录

开发者需测试已接入的登录场景，例如使用华为账号登录、使用游戏官方账号登录。

## 商品支付

接入应用内支付服务后，开发者可以使用沙盒测试对游戏内商品进行购买测试。

在沙盒环境下，消耗型商品、非消耗型商品、自动续期订阅类商品的购买流程与真实购买流程一致，且无需真实扣费即可完成端到端的支付测试。

此外，为了帮助开发者快速测试游戏的订阅场景，沙盒环境下的订阅续订时长会比正常情况要快，订阅换算时间为10秒/天，例如订阅周期为1周，游戏内商品将在首次购买成功70秒后发生续订。

沙盒测试的具体操作请参见[沙盒测试](`https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/iap-sandbox`)。