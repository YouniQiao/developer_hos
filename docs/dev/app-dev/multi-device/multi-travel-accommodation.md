---
title: "多设备旅行订票界面"
displayed_sidebar: appDevSidebar
original_url: /docs/dev/app-dev/multi-device/multi-travel-accommodation
format: md
---

# 多设备旅行订票界面

## 概述

本文从目前流行的垂类市场中，选择旅行订票垂类作为典型案例详细介绍“一多”在实际开发中的应用。本文选择首页、时间选择页、查询车票页、填写购票信息页、提交订单页等11个典型页面进行开发，遵从多设备的“差异性”、“一致性”、“灵活性”和“兼容性”，能够让开发者快速高效地掌握“一多”能力并实现旅行订票应用的相关功能。

旅行订票应用在垂类核心功能上进行了独特设计：

* [首页](#section1576042964012)支持沉浸式浏览，将整个页面设置背景图，同时设置全屏显示，使用户阅读时有更加沉浸的体验。
* [时间选择页](#section147288193403)及[低价日历页](#section8503123314815)根据设备不同有更好的体验效果，手机支持页面跳转，其他大屏设备支持日历弹窗。
* [查询车票页](#section1359152704212)支持车票筛选功能，方便用户快速定位目标车票。
* [查询车票上滑](#section052546194213)支持沉浸式浏览，隐藏日期筛选等信息，方便用户获取更多信息。
* [酒店详情页](#section185431244812)支持顶部banner根据设备不同有不同的展示效果，使用户在不同设备上有更好的体验。

当前系统的产品形态包括直板机、双折叠（Mate X系列）、平板三种。下文的具体实践将围绕这些产品形态展开，并从UX设计、架构设计和页面开发三个角度提供符合“一多”原则的参考样例，介绍“一多”旅行订票应用在开发过程中的最佳实践。

* [UX设计](#section896911343456)章节介绍旅行订票应用的交互逻辑和通用的设计要点，对于类似的设计要点，开发者可以直接拿来使用。
* [架构设计](#section35961357151114)章节推荐“一多”应用使用目录结构更清晰的三层架构，具体包括：数据层、逻辑层和展示层。
* [页面开发](#section183977201404)章节会将页面划分为不同区域，按照区域的开发顺序，介绍如何使用自适应布局和响应式布局实现不同的UI效果，具体区域包括：头部、内容区和底部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/5tHcCiEkRpiGkBeN7purmg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=555045FF676A1950645C819BAD7D909D8D419A0D77EC70B9A5AFB1E1A0207A38)

阅读本文前，开发者需熟悉[ArkUI（方舟UI框架）](/docs/dev/app-dev/application-framework/arkui)和页面开发的“一多”能力（参考[一次开发，多端部署概览](/docs/dev/app-dev/multi-device/bpta-multi-device-overview)）。下文将详细介绍它们在“一多”开发实践中如何使用。

## UX设计

[旅游住宿类](/docs/design/app-design-practices/tourist-accommodation)的多设备响应式设计指南可参考如上链接。

## 架构设计

HarmonyOS的分层架构包括产品定制层、基础特性层和公共能力层，为开发者提供了一个清晰、高效、可扩展的设计架构。详细信息请参考[分层架构设计](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-layered-architecture-design)的逻辑设计。

## 页面开发

本章介绍旅行订票应用中如何使用“一套代码、多端适配”的布局能力，完成页面层级的开发。下文将从不同页面展开，详细介绍每个页面区域使用的具体布局能力，帮助开发者从零开始进行旅行订票应用的开发。

###首页

旅行订票应用首页提供买票窗口，解决用户订票和预约酒店需求。首页内容围绕这一功能设计。

* 将首页划分为以下6个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7/v3/5aYdkB8ERJmp6MtZwao-eQ/zh-cn_image_0000002193850540.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=CEAB7F9FA8B07F5F8B54048D77D127AF1B9FF81D2F85D7C9652C1C2590F49092 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/PyDhDeeMQRqgKtdbFM7vYQ/zh-cn_image_0000002193850524.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=063F144454DD952D1BCB4F3CF00B4A08B217297928A7A17AC81F9E7CBA1AF284 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/gBVtSwGoTHaBnnJu62vJrA/zh-cn_image_0000002229450349.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=459D871C574E52C2757982AE724680FE43CFE83268EF5953CF2C230C5FCCDF9D "点击放大") |
* 分析各个区域的一多能力，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 底部/侧边栏 | 借助[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)监听断点变化改变位置。 |
  | 2 | 顶部控件 | [Select](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select)和[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)中间增加[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)，实现拉伸能力。 |
  | 3 | 火车票选择 | 使用Tabs组件实现拉伸能力。 |
  | 4 | 功能入口 | 使用[Swiper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-swiper)，设置在不同断点下的displayCount属性来实现自适应布局的延伸能力。 |
  | 5 | 热门资讯 | 利用响应式布局的[栅格](/docs/dev/app-dev/multi-device/bpta-multi-device-responsive-layout#section1061332817545)，结合[Stack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-stack)和[Grid](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-grid)，设置aspectRatio属性实现缩放能力。 |
  | 6 | 酒店预订 | 利用响应式布局的栅格布局，结合Stack组件和Grid组件，设置aspectRatio属性实现缩放能力。 |

###时间选择页

旅行订票时间选择页的主要功能是提供出行时间的选择，帮助用户快速确定出行日期，并筛选出相应日期的车票。

* 将时间选择页划分为两个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/t-pe-PYgTz2_xtDPKdAJog/zh-cn_image_0000002229335941.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=024F1D8F0BA1FCF2E16C251084BC5CBF02FA8BB86E3BB3E3966CD17FA0645FE5 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/EgN9r0-bSkeHlfzg90gi1Q/zh-cn_image_0000002193850532.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=A924AC95EDA1E240E4D0C89F231392BDE78A5AEF7D80A08DC11B6F298B7E9F7B "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/EK0qdPk-Qxy_FS6rNOmMEQ/zh-cn_image_0000002229335933.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=C30BC5F682622F585F6B59CC12618CB4773C9FB3E1CCE5E70E1E7C1E2EAE6736 "点击放大") |
* 对各区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 日期 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |

###查询车票页

旅行订票查询车票页面主要用于筛选车票，帮助用户根据日期、始发站筛选车票，并支持按出发时间、价格和总时长对车票进行排序。

* 将查询车票划分为四个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/B6JFk6coR4WVijf_X29kNg/zh-cn_image_0000002229335901.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=9CB8B77F6530991895FD76302BFB68A54E0E5C92CDA975142A615FF20FACC691 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/VGqVnp7cRXeUGc4nqDGRrg/zh-cn_image_0000002229450301.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=0D6D702B4F4376EE212BCE95441057B0076E196988514CB7935918721D1AF173 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/9sd1s5bbQfKiTwcPll87eA/zh-cn_image_0000002194010068.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=0E41C0FDCE601A4BA7F951F9D83DF9EE9EA230DF499812BB733998528CD052CC "点击放大") |
* 对各区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 日期选择 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |
  | 3 | 车票列表 | List组件实现延伸能力，layoutWeight实现拉伸能力。 |
  | 4 | 功能入口 | List组件实现延伸能力。 |

###查询车票上滑

旅行订票查询车票时，上滑动效的主要功能是隐藏筛选信息，以便用户更专注地浏览，获取更多信息。

* 将查询车票上滑动效划分为两个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/aldqJ_RXTLq_UeUp3AAo8w/zh-cn_image_0000002194010044.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=CD49D84253BED7870E437D6432A1CC4ED4508116E2E6818EEB505ADFDD632DE7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/TvHTOyOgSEqEGcZ6Gs5rnw/zh-cn_image_0000002194010028.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=00AF6CCB2196AAA3A376923A7F9FCCB32561196127D56A0479EDDA33535BD986 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/x6vRVP64R0WU0xDvLrvr1A/zh-cn_image_0000002229335877.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=CFB7592F28097264E99F7C212724B1A09E0391D56DA5553D759D7CCB61720556 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 车票列表 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |

###填写购票信息页

旅行订票的填写购票信息页提供订单确认和选择乘车人的功能，方便购票。

* 将填写购票信息页划分为六个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/FSs3rJx2Se2QDaNdisLe5g/zh-cn_image_0000002194010032.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=AE3463BC1B0228950465CB3299CDF1C50FE3CE5AC3A5EBF0581A0CD7424B8B01 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/vdIDGmaFQWa5j1didPiMkA/zh-cn_image_0000002194010040.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=EBD2DBB594D858778CF18C8D0D29FABD4D9D8C2302D9511936ECCC9600BBA204 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/ox43nTZPTe-6vaD43YBn4g/zh-cn_image_0000002194010112.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=461A936F0C268E6F49BD21E7B0FA75FC6647FD6D5D62B7A147C1D784914BA469 "点击放大") |
* 对其中的各个区域分析使用的能力，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 日期栏 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)实现日期与按钮的拉伸自适应。 |
  | 3 | 火车票信息 | 使用栅格断点能力，设置在不同断点下实现拉伸能力。 |
  | 4 | 选择乘车人 | 使用[拉伸能力](/docs/dev/app-dev/multi-device/bpta-multi-device-adaptive-layout#拉伸能力)实现选择乘车人卡片拉伸自适应。 |
  | 5 | 协议条款 | 使用栅格断点能力，设置在不同断点下顶部控件实现挪移布局。 |
  | 6 | 提交按钮 | 使用栅格断点能力，设置在不同断点下顶部控件实现挪移布局。 |

###提交订单页

旅行订票提交订单页主要展示车票和乘车人信息，方便用户确认订单的正确性。

* 将提交订单划分为五个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/9CsOlrsPS62IL7NtAVcsPQ/zh-cn_image_0000002194010092.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=4DBF598FF8F7C26950C31AB7CB30C44D0F1B6C86BB93DD129630C3EBF7FCDD7C "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/ItsIcMQOT2u5vgv2W3IEww/zh-cn_image_0000002229335921.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=364797F0FAD9DCA7526B51AB12DA3E2085FC0AD695720C15E10D6CA28FBCA8E9 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/tya1fCbNQpmevh0OQegZ6Q/zh-cn_image_0000002193850512.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=A95228C0AA1E754271C034E95BF5E197A34C7DC9EBABB1971C9953B9F3BAA990 "点击放大") |
* 对各区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 日期栏 | 使用拉伸能力实现日期与按钮的拉伸自适应。 |
  | 3 | 车票信息及乘车人信息 | 使用拉伸能力实现模块内部的拉伸自适应。 |
  | 4 | 协议条款 | 使用栅格断点能力，设置在不同断点下实现挪移布局。 |
  | 5 | 提交按钮 | 使用栅格断点能力，设置在不同断点下实现挪移布局。 |

###订单信息页

旅行订票订单信息页面展示订单服务详情和车票卡片信息，便于用户查看。

* 将订单信息页面划分为五个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/peodWPmtSti2YnJmkflUvA/zh-cn_image_0000002194010080.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=05BD58F066AAB11AE1A40730CB2AE1B2BA69442B3AC60A31DAE73AF78F578C18 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/xr57MdP5ScygOVitLAynEg/zh-cn_image_0000002229450361.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=068C56CC8286A221B62090CA29AAEFAB06098FD5935953A262294867C2CD20D7 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/Y7gga2qZQTGNMSUc9tcPDw/zh-cn_image_0000002193850488.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=993D297E862705264885B0B3C652DD215B71FE05FEC90BB2F6813CFE9F3F8DB2 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 火车票订单信息 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |
  | 3 | 订单信息卡片 | Tabs组件实现延伸能力。 |
  | 4 | 服务列表 | Grid组件配合Swiper组件，实现延伸能力与均分能力。 |
  | 5 | 底部/侧边导航 | 使用栅格断点能力，设置在不同断点下Tabs组件的BarPosition属性。 |

###已支付订单信息页

旅行订票应用的已支付订单信息页主要用于查看和确认订单信息。

* 将已支付订单页划分为三个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/CD6Q8OPpReOHEk7BhXdyGw/zh-cn_image_0000002229335937.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=339C120DCA8C4DA28BC12371A9568E1B0DF301AF74D68E94153CAFC4FFF06516 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/u7RXE2jPQ02-d8LO0w-mdw/zh-cn_image_0000002193850528.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=EC2E6B12452162C63E90F6DCAFA4848BBE7C8975598D5698C9A143BAEEFC96C3 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/MQKsugXVQZ2ekAw7H63XMg/zh-cn_image_0000002229335849.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=6C9381E49C2EB85216A915430C5A4D575CB70581977B4316A0D23EE170F8AF05 "点击放大") |
* 对其中各个区域的分析使用的能力及实现方案如下表所示：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 订单类型选择 | Tabs组件实现延伸能力。 |
  | 3 | 订单信息列表 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |

###酒店首页

旅行订票酒店首页主要提供酒店预订服务，满足用户预约酒店的需求。

* 将酒店首页划分为四个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/-8vP-GciTs2etSOSQotPXA/zh-cn_image_0000002194010052.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=316C9FD3DC4E9BCB1333CBBAFC1B3F3F448536FB06D16925BC7D7B47BF6C9AFD "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/bHi2gy6EQJ-jkiywWViB1Q/zh-cn_image_0000002194010116.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=AB424E839A0377CDBAD3DF5F1B9F5D64FC6BB43935D14171BAE2B6450E61A59A "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/QzgRl9xEQLi9Czl4BnuVGQ/zh-cn_image_0000002194010036.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=0563B53EF86A5F52C8D2D66E22F896F91B0CBD1FE94E47CE566410FA2B129280 "点击放大") |
* 对各个区域使用的多项能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 卡片banner | Swiper组件实现，设置displayCount属性为auto。 |
  | 3 | 酒店推荐 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |
  | 4 | 底部/侧边导航 | 使用栅格断点能力，设置在不同断点下Tabs组件的BarPosition属性。 |

###酒店排行榜页面

酒店排行榜页展示酒店排名，方便用户选择。

* 将酒店排行榜页划分为三个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/qzBfSoNgS7elAamLjJv4rA/zh-cn_image_0000002194010108.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=D40CC964D6CE5D64D6797A3EB5364E53E92030FD75C40C09869EBB9B628C7728 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/KKWGUBoNT-6ZnAqRchYDgQ/zh-cn_image_0000002194010104.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=8D9BF70F358A333E2ED7D9C777BBDB077CEE529CF5244318D4B222F2C291B747 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/_qTr55nbQVuzb0Cna_RkRA/zh-cn_image_0000002194010060.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=EE0014B58BD6ACB6F6C3A8270DAAC36D518B2E5F8FCB59C3AA597F2CE4A33CF7 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 酒店类型选择 | Tabs组件实现延伸能力。 |
  | 3 | 酒店排行 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |

###酒店详情页

旅行订票酒店详情页提供酒店的详细信息，包括预览图、房间类型和价格，方便用户选择和预订酒店房间。

* 将酒店详情页划分为四个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/IUl3zTm8QwqTOsYFC5hYAg/zh-cn_image_0000002193850500.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=E3AF54FB5B6FFB963DAB245A8AC039050A8FD416635050E838D84D7029726BDB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/9FRnCoXAQeWh3bDVIc1K_Q/zh-cn_image_0000002229335889.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=788C294FE17DE8D7DECD3F6E9A352C07AF60C44D0777264692B66244A8FED4DB "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/lQmYZrYVTfm18Sbb8sXCdA/zh-cn_image_0000002194010056.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=046EA9188E9C745106C8F4EACECD6689B50EB663ECC3059F387C2981AEFFF610 "点击放大") |
* 对各个区域使用的多种能力进行分析，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 酒店卡片 | 使用[GridRow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-gridrow)实现挪移布局。 |
  | 3 | 订房优惠 | 使用拉伸能力实现文字与按钮的拉伸自适应。 |
  | 4 | 房间详情 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |
* 顶部banner的具体实现

顶部横幅会根据不同的设备类型展示不同的效果。手机支持顶部横幅上滑，图片展开的动画效果。折叠屏设备支持使用Scroll组件展示小图，点击后更换为大图展示的效果。平板设备支持使用Swiper组件滑动切换视图的效果。

手机上滑展开、下滑收起，主要使用了Scroll组件的onReachStart属性和onWillScroll属性。

```
Scroll(this.scroller) {
  HotelDetailsPictureView({ topLength: this.topLength })
}
.scrollBar(BarState.Off)
.width('100%')
.height('100%')
.onReachStart(() => {
  if (!this.isInitialization) {
    this.topLength = 225;
    this.isInitialization = true;
  } else {
    this.topLength = 460;
  }
})
.onWillScroll((xOffset: number, yOffset: number)=>{
  if (yOffset > 0) {
    this.topLength = 225;
  }
})
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-travel-accommodation/blob/master/entry/src/main/ets/pages/HotelDetailsPage.ets#L48-L66" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotelDetailsPage.ets</a></div>


折叠屏的实现使用Scroll组件支持滚动。小图的点击效果会改变大图内容，点击后将索引值作为参数传递，以修改大图。

```
Scroll() {
  Row() {
    ForEach(CommonConstants.HOTEL_PICTURE_MESSAGE, (item: Resource, index: number) => {
      Column() {
        Image(item)
          .width(CommonConstants.THIRTY_PERCENT)
          .borderRadius($r('app.float.hotel_grade_border'))
          .margin(index === CommonConstants.NUMBER_FOUR ? {} : { right: CommonConstants.FIVE_PERCENT })
          .onClick(() => {
            this.getMainPicture(index);
          })
      }
    }, (item: Resource) => JSON.stringify(item))
  }
}
.scrollBar(BarState.Off)
.margin({ top: $r('app.float.calendar_column_margin') })
.width(CommonConstants.NINETY_PERCENT)
.scrollable(ScrollDirection.Horizontal)
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-travel-accommodation/blob/master/entry/src/main/ets/view/HotelDetailsPictureView.ets#L133-L151" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotelDetailsPictureView.ets</a></div>


```
getMainPicture(index: number) {
  this.mainPictureResource = CommonConstants.HOTEL_PICTURE_MESSAGE[index];
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-travel-accommodation/blob/master/entry/src/main/ets/view/HotelDetailsPictureView.ets#L29-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotelDetailsPictureView.ets</a></div>


平板则使用Swiper组件，完成滚动切换视图的功能。

```
Swiper() {
  ForEach(CommonConstants.HOTEL_PICTURE_MESSAGE, (item: Resource) => {
    Image(item)
      .width('100')
  }, (item: Resource) => JSON.stringify(item))
}
.width('40%')
.height('100%')
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-travel-accommodation/blob/master/entry/src/main/ets/view/HotelDetailsPictureView.ets#L208-L215" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotelDetailsPictureView.ets</a></div>


###低价日历页

旅行订票低价日历页提供预订房间的功能，帮助用户找到低价时段。

* 将低价日历划分为两个部分，效果图如下：

  | 示意图 | sm | md | lg |
  | --- | --- | --- | --- |
  | 效果图 | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/UdGYxafXS1-n3-kZv62VSA/zh-cn_image_0000002194010064.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=0D3824FB1D1154CBFDD5CD9B1277463E63EE11BEC8BAF378E8450B28A087AD13 "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/FRHiCHC0SMeUrypplPVLRw/zh-cn_image_0000002194010132.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=5B7C16F2F4F72EB0E24D2F59CE2AED0F5DB71E1BEC63561BE5904DBDC216569E "点击放大") | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/ZrGHXgVDTXOlEOY89rs97w/zh-cn_image_0000002229450373.png?HW-CC-KV=V1&HW-CC-Date=20260606T074301Z&HW-CC-Expire=86400&HW-CC-Sign=DBD384A7C2665D09E17945C684AC27678A09996606479332E3958579E55916E4 "点击放大") |
* 对其中的各个区域分析使用的一多能力，实现方案如下表：

  | 区域编号 | 简介 | 实现方案 |
  | --- | --- | --- |
  | 1 | 顶部控件 | 使用栅格断点能力，设置在不同断点下顶部控件实现拉伸能力。 |
  | 2 | 日期 | [List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)实现延伸能力，layoutWeight实现拉伸能力。 |
* 低价日历

  根据栅格布局监听断点变化，根据断点不同实现不同的响应效果。

  ```
  getFoldStatus() {
    if (this.isShowingCalendar) {
      this.dialogController.open();
    } else {
      this.dialogController.close()
    }
  }
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-travel-accommodation/blob/master/entry/src/main/ets/view/HotelDetailsRoomView.ets#L38-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotelDetailsRoomView.ets</a></div>


  ```
  Column() {
    Image($r("app.media.cheap_day"))
      .width('15vp')
    Text(CommonConstants.ROOM_BUTTON_MESSAGES[5])
      .font({ size: '8fp', weight: 500 })
      .opacity(0.4)
  }
  .onClick(() => {
    if (this.breakPoint === 'sm') {
      this.pageInfos.pushPath(new NavPathInfo('LowPriceCalendarPage',[]));
    } else {
      this.isShowingCalendar = true;
    }
  })
  ```

  
<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/multi-travel-accommodation/blob/master/entry/src/main/ets/view/HotelDetailsRoomView.ets#L86-L99" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：HotelDetailsRoomView.ets</a></div>


## 示例代码

* [多设备旅行订票界面](https://gitcode.com/harmonyos_samples/multi-travel-accommodation)
