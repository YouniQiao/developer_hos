---
title: "创建数字商品"
original_url: /docs/dev/game-dev/games-center-create-digital-products-0000002286076724
format: md
upstream_id: dev/game-dev/games-center-create-digital-products-0000002286076724
last_sync: 2026-06-07
sync_hash: 5f9c6de1
---
您可以通过华为商品管理系统（PMS）将您的应用商品信息托管在华为侧，方便您的应用商品价格国际化管理，助力您的应用进行全球化推广。

新增商品共有三种方式，一种是通过在AGC控制台[新增单个商品](/docs/dev/game-dev/games-center-new-0000002320572921#ZH-CN_TOPIC_0000002348453652)的方式，一种是通过在AGC控制台[批量导入商品](/docs/dev/game-dev/games-center-import-0000002320646001)的方式，除此之外，您还可以通过创建商品接口创建单个商品或者通过批量创建商品接口批量创建商品，具体请参见[创建商品](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-addproduct-harmonyosnext-0000002131508844)。

商品类型分为消耗型、非消耗型、自动续期订阅和非续期订阅：

| **商品** | **说明** |
| --- | --- |
| 消耗型 | 随使用减少，需要再次购买的商品，例如游戏货币，游戏道具。 |
| 非消耗型 | 用户只需购买一次，这类商品不会过期或随着使用而减少，例如去广告，升级专业版。 |
| 自动续期订阅 | 可自动续期购买的一种商品，例如月度会员。 |
| 非续期订阅 | 可以在一段时间内使用应用中的某项服务或内容（例如订阅一年的杂志内容），且后续不会自动续订。 |

![](./img/d98ee710.png)

文档将依据商品是否续费的特性，划分为自动续期订阅商品以及非自动续期订阅类商品这两大类别展开阐述。其中，非自动续期订阅类商品涵盖了商品类型为消耗型、非消耗型以及非续期订阅的商品。

* **[前提条件](/docs/dev/game-dev/games-center-digital-products-pre-0000002320645997)**
* **[新增单个数字商品](/docs/dev/game-dev/games-center-new-0000002320572921)**
* **[批量添加商品](/docs/dev/game-dev/games-center-import-0000002320646001)**
