---
title: "业务介绍"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-introduction-0000002270752666
format: md
---


近场服务旨在通过HarmonyOS手机用户（以下简称用户）的位置，经由小艺建议、花瓣地图等消息渠道精准推荐用户所需的服务，从而帮助开发者提升用户转化率和满意度。

近场服务包含近场管理、近场测试、设备管理、标签服务四个模块，支持开发者管理可触达用户的位置（[POI](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-related-terms-0000002382861885)）或设备（[信标设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-related-terms-0000002382861885)、[HarmonyOS标签](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-related-terms-0000002382861885)），以及通过这些位置或设备向用户推荐内容。

目前已有文旅、企业办公、政务、教育、医疗健康以及商业零售等行业的实践案例，例如，文旅行业接入近场服务后，可向用户推荐热门景点、景区购票和文创商品等。当用户携带手机进入POI或信标设备的感应范围时，系统会通过小艺建议入口推荐开发者提供的相关服务；当用户使用手机碰一碰HarmonyOS标签时，可直接访问开发者提供的服务内容，减少查找服务的时间。随着用户位置的变化，近场服务可为用户推荐不同的内容，使开发者能够提供更精准、更便捷、更多样的营销活动。

#### 主要功能

| 场景 | 主要功能 | 功能描述 |
| --- | --- | --- |
| [POI接入花瓣地图场景](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-by-poi-petalmap-0000002373994556) | 基于POI位置在地图入口向用户推送内容卡片 | 用户在花瓣地图上搜索POI位置时，点击位置详情可以一键直达元服务详情页。此场景无需开发桌面卡片。 |
| [POI接入小艺建议场景](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-by-poi-xiaoyi-0000002349175920) | 基于POI位置在小艺建议入口向用户推送内容卡片 | 用户点击小艺建议桌面卡片可以一键直达应用/元服务详情页，从而快速获取所需服务。例如文旅行业在景区附近推荐热门游览路线、优惠购票信息，金融政务服务机构推荐预填单等，可提高用户办事效率。此场景需要开发桌面卡片，桌面卡片类型支持模板卡片和预置卡片两种。 |
| [信标设备场景](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-by-beacon-0000002305369365) | 基于信标设备向用户推送内容卡片 | 开发者在设备管理界面录入、发布信标设备后，便可在创建近场服务时选用已注册的信标设备，基于信标设备向用户推送内容卡片。 |
| [标签场景](https://developer.huawei.com/consumer/cn/doc/app/agc-help-location-sense-by-harmonyoslabel-0000002349175928) | 生成HarmonyOS标签，便于用户碰一碰或扫一扫直达应用 | 标签服务基于App Linking的HarmonyOS应用链接能力和元服务链接能力实现，为开发者提供生成HarmonyOS标签等功能。主要应用于线下服务引导、活动推广等场景，方便HarmonyOS NEXT设备用户通过系统提供的碰一碰或扫一扫入口快速直达服务。 |

#### POI、信标、标签三大场景区别对照表

| 场景类型 | 支持应用类型 | 分发渠道 | 部署物料 | 使用场景 |
| --- | --- | --- | --- | --- |
| POI场景 | 应用、元服务 | 小艺建议、花瓣地图（仅支持元服务） | - | 室外，200米范围以内 |
| 信标设备场景 | 应用、元服务 | 小艺建议 | 信标设备 | 室内，0~30米 |
| 标签场景 | 应用、元服务 | - | HarmonyOS标签 | ≤20厘米 |

#### 如何收费

目前近场服务可供您免费使用。
