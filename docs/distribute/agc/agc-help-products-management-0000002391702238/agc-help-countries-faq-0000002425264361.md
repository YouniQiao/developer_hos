---
title: "FAQ"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-countries-faq-0000002425264361
format: md
---


| 问题/需求描述 | 意见 |
| --- | --- |
| 商品创建完成后，不支持修改的字段有哪些？ | 商品创建完成后，不支持修改的字段：  produceNo 商品ID  purchaseType 商品类型  subGroupID 订阅分组ID |
| 首次接入，沙盒测试商品也需要随版本上架才能测试吗？ | 沙盒测试商品无需随版本上架审核，创建成功保存即可用于测试。 |
| 商品上架的周期大约多久？ | 第一次上架应用添加商品，应用审核一般是2-3day，应用版本审核通过后，关联的商品也会生效，再次单独提交商品，审核周期目标是24H内。 |
| 上下架商品是否需要提交审核？  （下架或者重新上架） | 不需要（上架后，下架，再重新上架就不需要审核流程）。 |
| 对于新用户促销，该如何使用？新用户促销PMS建好之后并没有offerId。 | 优惠ID只针对的是自定义促销，推介促销由平台直接判断使用，开发者可通过hasEligibilityForIntroOffer字段(详细参数参见iap.queryProducts返回值)判断用户是否享受过推介促销。 |
