---
title: "FAQ"
displayed_sidebar: appDistSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/app/game-center-productmanagement-faq-0000001194302398
format: md
---


# FAQ

## 兑换码业务是否需要接入华为的应用内支付HMS Core IAP SDK?

不需要，该业务不依赖华为应用内支付IAP SDK能力。商品是直接在华为应用市场或者华为游戏中心直接购买，不依赖IAP SDK提供的支付接口。

## 兑换码业务需要修改客户端代码吗？

是否需要修改，取决于您自行设计的兑换码兑换页面。如果您将该页面置于客户端，可能需要您对客户端代码做修改，华为不做强制要求。

## 为什么在AGC页面没有看到“配置虚拟商品库存”的入口？

只有先创建好“消耗/非消耗商品”，进入编辑状态时，您才可看见相关入口。如分发地未包含中国大陆，“配置虚拟商品库存”入口默认隐藏。